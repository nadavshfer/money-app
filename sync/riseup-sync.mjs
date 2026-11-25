// Daily sync: Riseup -> encrypted snapshot (data/snapshot.enc.json).
// Env: RISEUP_PAT (read-only token), SYNC_PASSPHRASE (encrypts the file; the app asks for the same one).
// Never overwrites a good snapshot with a failed run. Node 18+, no dependencies.
import { webcrypto as crypto } from "node:crypto";
import { mkdir, writeFile, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const OUT = join(dirname(fileURLToPath(import.meta.url)), "..", "data", "snapshot.enc.json");
const BASE = process.env.RISEUP_API_BASE || "https://input.riseup.co.il";
const PAT = process.env.RISEUP_PAT, PASS = process.env.SYNC_PASSPHRASE;
if (!PAT || !PAT.startsWith("riseup_pat_")) { console.error("RISEUP_PAT missing or malformed"); process.exit(2); }
if (!PASS || PASS.length < 12) { console.error("SYNC_PASSPHRASE missing or shorter than 12 chars"); process.exit(2); }

const get = async p => {
  const r = await fetch(BASE + p, { headers: { Authorization: "Bearer " + PAT, Accept: "application/json" } });
  if (!r.ok) throw new Error(p.split("?")[0] + " -> HTTP " + r.status);
  return r.json();
};
const ymd = d => d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
const now = new Date();
const monthEnd = ymd(new Date(now.getFullYear(), now.getMonth() + 1, 0));
const nextMonthEnd = ymd(new Date(now.getFullYear(), now.getMonth() + 2, 0));

const errors = [], snap = { schemaVersion: 1, generatedAt: now.toISOString(), errors };
const part = async (name, fn) => { try { snap[name] = await fn(); } catch (e) { errors.push(name + ": " + e.message); } };

await part("accounts", async () => (await get("/api/external/balances/current")).balances.map(b => ({
  name: b.accountNickname || b.bankName || "חשבון", bank: b.bankName || null, balance: b.balance, lastUpdated: b.lastUpdated,
  overdraftLimit: b.overdraftLimit ?? null, availableOverdraft: b.availableOverdraft ?? null })));

const fut = async d => (await get("/api/external/future-balances?futureDateForPrediction=" + d)).accounts.map(a => ({
  name: a.accountNickname || a.bankName || "חשבון", date: d, predicted: a.futurePredictedBalance,
  billed: a.amountToBeBilledUntilFuturePredictionDate, fixed: a.amountFixedPredictedToBeBilledUntilFuturePredictionDate,
  cards: (a.creditCardsInfo || []).map(c => c.transactionsAmountToBill),
  txs: (a.transactionsBilledUntilFuturePredictionDate || []).map(t => ({ n: t.businessName, a: t.amount, inc: !!t.isIncome, d: t.billingDate })),
  fixedTxs: (a.fixedTransactionsPredictedToBeBilledUntilFuturePredictionDate || []).map(t => ({ n: t.businessName, a: t.amount, inc: !!t.isIncome, d: t.predictedBillingDate })) }));
await part("futureMonthEnd", () => fut(monthEnd));
await part("futureNextMonthEnd", () => fut(nextMonthEnd));

await part("savings", async () => (await get("/api/external/savings")).savings.map(s => ({
  name: s.displayName || s.name || s.product || "חיסכון", bank: s.bankIdentifier, balance: s.balanceAmount ?? null,
  endDate: s.endDate || null, availabilityDate: s.availabilityDate || null })));
await part("investments", async () => (await get("/api/external/investments")).investments.map(i => ({
  name: i.investmentAccount?.name || i.bankIdentifier, bank: i.bankIdentifier, value: i.investmentAccount?.balanceAmount ?? null })));

// Budget for the current month (scope budget:read). One compact row per envelope: plan vs. actual spending.
// Response shape per riseup-oss/mcp docs/reference/budget.md; every field is read defensively because the shape may evolve.
const num = v => { const n = Number(v); return Number.isFinite(n) ? n : 0; };
await part("budget", async () => {
  const b = await get("/api/external/budget/current");
  if (!Array.isArray(b.envelopes)) throw new Error("budget: unexpected response shape");
  return {
    month: b.budgetDate || null,
    lastUpdatedAt: b.lastUpdatedAt || null,
    envelopes: b.envelopes.map(e => {
      const tc = e.details?.trackingCategory;
      const acts = Array.isArray(e.actuals) ? e.actuals : [];
      return {
        id: e.id ?? null,
        type: e.type || null,
        name: tc?.name || null,
        catType: tc?.trackingCategoryType || null,
        freq: tc?.frequency || null,
        startDate: e.details?.startDate || null,
        endDate: e.details?.endDate || null,
        weeklyIndex: e.details?.weeklyIndex ?? null,
        planned: e.originalAmount == null ? null : num(e.originalAmount),
        custom: e.isCustomPrediction ?? null,
        spent: acts.reduce((s, a) => s + num(a.billingAmount) - num(a.incomeAmount), 0),
        count: acts.length,
      };
    }),
  };
});

// Success = we got current balances. Otherwise keep the old file untouched.
if (!snap.accounts || !snap.accounts.length) { console.error("No balances; keeping previous snapshot.\n" + errors.join("\n")); process.exit(1); }
snap.status = errors.length ? "partial" : "ok";

const enc = new TextEncoder(), iter = 600000;
const salt = crypto.getRandomValues(new Uint8Array(16)), iv = crypto.getRandomValues(new Uint8Array(12));
const km = await crypto.subtle.importKey("raw", enc.encode(PASS), "PBKDF2", false, ["deriveKey"]);
const key = await crypto.subtle.deriveKey({ name: "PBKDF2", salt, iterations: iter, hash: "SHA-256" }, km, { name: "AES-GCM", length: 256 }, false, ["encrypt"]);
const ct = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, enc.encode(JSON.stringify(snap))));
const b64 = u => Buffer.from(u).toString("base64");
await mkdir(dirname(OUT), { recursive: true });
await writeFile(OUT, JSON.stringify({ v: 1, iter, salt: b64(salt), iv: b64(iv), ct: b64(ct) }));
console.log("snapshot written:", snap.status, "accounts:", snap.accounts.length, errors.length ? "errors: " + errors.join("; ") : "");
