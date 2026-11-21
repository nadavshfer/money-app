/* UI layer. Loaded after index.html's script: replaces the views, keeps all data logic. Standalone (phone-only storage). */
(function(){var o=document.querySelector("head style");if(o&&o.id!=="lui")o.media="not all"})();

const L_CSS=`
:root{--radius:.875rem;--background:oklch(0.968 0.004 286);--foreground:oklch(0.2 0.015 280);--card:oklch(1 0 0);--popover:oklch(1 0 0);
--primary:oklch(0.561 0.218 277);--primary-foreground:oklch(0.99 0.005 277);--primary-soft:oklch(0.561 0.218 277 / 0.1);
--muted:oklch(0.948 0.006 280);--muted-foreground:oklch(0.54 0.015 280);
--success:oklch(0.63 0.17 150);--success-soft:oklch(0.72 0.17 150 / 0.14);--warning:oklch(0.68 0.17 58);--warning-soft:oklch(0.77 0.17 65 / 0.16);
--danger:oklch(0.6 0.22 27);--danger-soft:oklch(0.65 0.22 27 / 0.12);--track:oklch(0.92 0.008 280);--tabbar:oklch(1 0 0 / 0.82);
--overlay:oklch(0.15 0.02 280 / 0.35);--border:oklch(0.91 0.006 280);--ringc:oklch(0.561 0.218 277 / 0.5);
--elev-card:0 1px 2px oklch(0.2 0.03 280 / 0.04),0 10px 28px -12px oklch(0.25 0.06 280 / 0.14);
--elev-fab:0 10px 24px -6px oklch(0.561 0.218 277 / 0.55),0 2px 6px oklch(0.561 0.218 277 / 0.3);
--elev-sheet:0 -12px 40px -12px oklch(0.2 0.04 280 / 0.25);
--gradient-hero:radial-gradient(120% 90% at 50% 0%,oklch(0.561 0.218 277 / 0.1),transparent 70%);color-scheme:light}
:root.dark{--background:oklch(0.145 0.008 280);--foreground:oklch(0.96 0.004 280);--card:oklch(0.205 0.01 280);--popover:oklch(0.225 0.01 280);
--primary:oklch(0.66 0.18 277);--primary-soft:oklch(0.66 0.18 277 / 0.18);--muted:oklch(0.26 0.01 280);--muted-foreground:oklch(0.68 0.012 280);
--success:oklch(0.74 0.17 150);--success-soft:oklch(0.74 0.17 150 / 0.16);--warning:oklch(0.79 0.16 65);--warning-soft:oklch(0.79 0.16 65 / 0.16);
--danger:oklch(0.7 0.19 25);--danger-soft:oklch(0.7 0.19 25 / 0.16);--track:oklch(0.3 0.01 280);--tabbar:oklch(0.21 0.01 280 / 0.82);
--overlay:oklch(0 0 0 / 0.55);--border:oklch(1 0 0 / 0.08);--ringc:oklch(0.66 0.18 277 / 0.5);
--elev-card:0 0 0 1px oklch(1 0 0 / 0.05);--elev-fab:0 10px 24px -6px oklch(0.66 0.18 277 / 0.5);--elev-sheet:0 -1px 0 oklch(1 0 0 / 0.08);
--gradient-hero:radial-gradient(120% 90% at 50% 0%,oklch(0.66 0.18 277 / 0.16),transparent 70%);color-scheme:dark}
*,::before,::after{box-sizing:border-box;margin:0;padding:0;border:0 solid var(--border)}
html{line-height:1.5;-webkit-text-size-adjust:100%;scroll-behavior:smooth}
body{font-family:"Heebo",system-ui,-apple-system,sans-serif;font-size:16px;line-height:1.5;background:var(--background);color:var(--foreground);-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:transparent;padding:0}
button,input,select,textarea{font:inherit;color:inherit;background:transparent;border-radius:0;letter-spacing:inherit}
button{cursor:pointer;text-align:center}ul,ol{list-style:none}h1,h2,h3{font-size:inherit;font-weight:inherit}svg{display:block}
.i{flex:none}.s16{width:16px;height:16px}.s17{width:17px;height:17px}.s18{width:18px;height:18px}.s22{width:22px;height:22px}.s24{width:24px;height:24px}.s28{width:28px;height:28px}
.wrap{max-width:560px;margin:0 auto;min-height:100dvh;padding:env(safe-area-inset-top) 16px 144px}
.stack>*+*{margin-top:16px}
.surface{background:var(--card);color:var(--foreground);border-radius:24px;box-shadow:var(--elev-card)}
.p5{padding:20px}
.hero{background-image:var(--gradient-hero)}
.hbox{display:flex;flex-direction:column;align-items:center;padding:28px 20px 24px}
.hh{padding:24px 4px 0}.hh p{font-size:15px;color:var(--muted-foreground)}
.hh h1,.shd h1{font-size:30px;font-weight:800;line-height:1.25;letter-spacing:-.025em}
.shd{padding:24px 4px 4px}.shd p{margin-top:2px;font-size:15px;color:var(--muted-foreground)}
.ch{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:16px}
.ch h2{font-size:17px;font-weight:700;line-height:1.25}.aside{font-size:14px;color:var(--muted-foreground)}
.tn{font-variant-numeric:tabular-nums}
.ring{position:relative;display:grid;place-items:center}.ring svg{transform:rotate(-90deg)}
.trk{stroke:var(--track)}.rg{stroke:currentColor;transition:stroke-dashoffset .9s cubic-bezier(.22,1,.36,1),stroke .3s}
.rin{position:absolute;inset:0;display:grid;place-items:center;text-align:center}
.hl{font-size:14px;font-weight:500;color:var(--muted-foreground)}
.hn{display:block;margin-top:4px;font-size:52px;font-weight:800;line-height:1;letter-spacing:-.025em}
.cur{font-size:.5em;font-weight:600}
.t-success{color:var(--success)}.t-warning{color:var(--warning)}.t-danger{color:var(--danger)}.t-primary{color:var(--primary)}
.pill{display:inline-flex;align-items:center;gap:6px;border-radius:999px;padding:4px 12px;font-size:14px;line-height:20px;font-weight:600}
.pill.t-success{background:var(--success-soft)}.pill.t-warning{background:var(--warning-soft)}.pill.t-danger{background:var(--danger-soft)}.pill.t-primary{background:var(--primary-soft)}
.pill.h8{height:32px}.mt5{margin-top:20px}
.hs{margin-top:12px;font-size:14px;color:var(--muted-foreground)}.hs b{font-weight:600;color:var(--foreground);font-variant-numeric:tabular-nums}
.lst{margin:-4px 0}.lst>li+li{border-top:1px solid var(--border)}
.r{display:flex;align-items:center;gap:12px;padding:10px 0}.grow{flex:1;min-width:0}
.t1{font-size:15px;font-weight:600;line-height:1.5;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.t2{font-size:13px;color:var(--muted-foreground);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.amt{font-size:15px;font-weight:700;font-variant-numeric:tabular-nums}.amt.inc{color:var(--success)}
.bdg{display:grid;place-items:center;width:40px;height:40px;flex:none;border-radius:22px;background:var(--primary-soft);color:var(--primary)}
.bdg.inc{background:var(--success-soft);color:var(--success)}
.trash{display:grid;place-items:center;width:36px;height:36px;margin-inline-end:-6px;border-radius:999px;color:var(--muted-foreground);transition:transform .14s,background-color .16s,color .16s}
.trash:hover{background:var(--muted);color:var(--danger)}.trash:active{transform:scale(.96)}
.empty{padding:24px 0;text-align:center;font-size:15px;color:var(--muted-foreground)}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;font-weight:600;user-select:none;transition:transform .14s cubic-bezier(.2,.8,.2,1),background-color .16s,color .16s,opacity .16s}
.btn:active{transform:scale(.96)}.btn:disabled{pointer-events:none;opacity:.4}.btn:focus-visible{outline:none;box-shadow:0 0 0 4px var(--ringc)}
.b-primary{background:var(--primary);color:var(--primary-foreground)}.b-soft{background:var(--primary-soft);color:var(--primary)}
.b-muted{background:var(--muted);color:var(--foreground)}.b-ghost{color:var(--muted-foreground)}.b-ghost:hover{background:var(--muted)}.b-danger{background:var(--danger-soft);color:var(--danger)}
.s-lg{height:56px;border-radius:22px;padding:0 20px;font-size:17px}.s-md{height:44px;border-radius:18px;padding:0 16px;font-size:15px}
.s-sm{height:32px;border-radius:999px;padding:0 14px;font-size:14px}.s-ic{width:36px;height:36px;border-radius:999px}
.w100{width:100%}.mt3{margin-top:12px}.mt2{margin-top:8px}.mt4{margin-top:16px}
.bar{height:10px;width:100%;overflow:hidden;border-radius:999px;background:var(--track)}.bar.thin{height:6px;margin-top:6px}
.fill{height:100%;border-radius:999px;transition:width .7s cubic-bezier(.22,1,.36,1),background-color .3s}
.f-success{background:var(--success)}.f-warning{background:var(--warning)}.f-danger{background:var(--danger)}.f-primary{background:var(--primary)}
.nav3{display:flex;align-items:center;justify-content:space-between;padding:8px}
.mb{display:grid;place-items:center;width:44px;height:44px;border-radius:999px;color:var(--primary);transition:transform .14s,opacity .16s}
.mb:active{transform:scale(.96)}.mb:disabled{opacity:.3;pointer-events:none}
.mc{text-align:center}.mc p:first-child{font-size:17px;font-weight:700}.mc p+p{font-size:12px;color:var(--muted-foreground)}
.g3{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.stat{padding:16px 12px;text-align:center}.stat p:first-child{font-size:13px;font-weight:500;color:var(--muted-foreground)}
.stat p+p{margin-top:4px;font-size:19px;font-weight:800;letter-spacing:-.025em;font-variant-numeric:tabular-nums}
.pots>*+*{margin-top:20px}.pot .pt{display:flex;align-items:baseline;justify-content:space-between;gap:8px;margin-bottom:8px}
.pot .pt span:first-child{font-size:15px;font-weight:600}.pot .pt span+span{font-size:13px;color:var(--muted-foreground);font-variant-numeric:tabular-nums}
.pot .pn{margin-top:6px;font-size:13px;color:var(--muted-foreground)}.pot .pn.t-danger{color:var(--danger)}.pot .pn.t-warning{color:var(--warning)}
.top3>li{display:flex;align-items:center;gap:12px}.top3>li+li{margin-top:14px}
.top3 .tr{display:flex;align-items:baseline;justify-content:space-between;gap:8px}
.em p{margin-bottom:12px;font-size:15px}.em p b{font-variant-numeric:tabular-nums}.em p span{color:var(--muted-foreground)}
.grp>*+*{margin-top:16px}.grp h3{margin-bottom:4px;font-size:13px;font-weight:600;color:var(--muted-foreground)}
.tips>li{display:flex;gap:12px;font-size:15px;line-height:1.625}.tips>li+li{margin-top:12px}
.tips .d{margin-top:8px;width:8px;height:8px;flex:none;border-radius:999px;background:var(--primary)}
.qamw{display:flex;align-items:baseline;justify-content:center;gap:6px;padding:8px 0}
.qamt{min-width:2ch;max-width:100%;text-align:center;font-size:56px;font-weight:800;line-height:1;letter-spacing:-.025em;font-variant-numeric:tabular-nums;border:0;outline:0}
.qamt::placeholder{color:var(--track)}.qcur{font-size:28px;font-weight:700;color:var(--muted-foreground)}
.inp{height:48px;width:100%;border-radius:18px;background:var(--muted);padding:0 16px;font-size:16px;color:var(--foreground);outline:0}
.inp::placeholder{color:var(--muted-foreground)}.inp:focus{box-shadow:0 0 0 4px var(--ringc)}
.ctr{text-align:center;margin-top:8px}
.chips{display:flex;gap:8px;overflow-x:auto;margin:16px -20px 0;padding:0 20px 4px;scrollbar-width:none}.chips::-webkit-scrollbar{display:none}
.chip{display:flex;height:40px;flex:none;align-items:center;gap:6px;border-radius:999px;padding:0 14px;font-size:14px;font-weight:600;background:var(--muted);color:var(--foreground);transition:transform .14s,background-color .16s,color .16s}
.chip:active{transform:scale(.96)}.chip.on{background:var(--primary);color:var(--primary-foreground)}
.g2{display:grid;grid-template-columns:1fr 1fr;gap:10px}.mt4{margin-top:16px}
.chk{margin-top:16px;border-radius:22px;background:var(--muted);padding:16px}.chk p{margin-top:10px;font-size:15px;line-height:1.625}.chk b{font-variant-numeric:tabular-nums}
.chkb{margin-top:12px;display:flex;gap:8px}
@keyframes reveal{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}.reveal{animation:reveal .26s cubic-bezier(.22,1,.36,1)}
.tbn{position:fixed;inset-inline:0;bottom:0;z-index:40}.tbi{max-width:560px;margin:0 auto;padding:0 12px max(env(safe-area-inset-bottom),10px)}
.tbg{display:grid;grid-template-columns:repeat(5,1fr);align-items:center;height:68px;border-radius:26px;border:1px solid var(--border);background:var(--tabbar);box-shadow:var(--elev-card);-webkit-backdrop-filter:blur(24px);backdrop-filter:blur(24px)}
.tab{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;font-size:11px;font-weight:600;color:var(--muted-foreground);transition:transform .14s,color .16s}
.tab:active{transform:scale(.96)}.tab.on{color:var(--primary)}
.fabw{display:flex;justify-content:center}
.fab{margin-top:-36px;display:grid;place-items:center;width:62px;height:62px;border-radius:999px;background:var(--primary);color:var(--primary-foreground);box-shadow:0 0 0 5px var(--background),var(--elev-fab);transition:transform .14s}
.fab:active{transform:scale(.96)}
.ov{position:fixed;inset:0;z-index:50;background:var(--overlay);animation:fin .2s ease-out}
.sht{position:fixed;inset-inline:0;bottom:0;z-index:51;margin:0 auto;display:flex;max-height:92dvh;max-width:560px;flex-direction:column;border-radius:28px 28px 0 0;background:var(--card);box-shadow:var(--elev-sheet);animation:sup .34s cubic-bezier(.22,1,.36,1)}
.grab{margin:10px auto 0;height:6px;width:40px;border-radius:999px;background:var(--track)}
.shb{overflow-y:auto;padding:12px 20px max(env(safe-area-inset-bottom),20px)}.stt{text-align:center;font-size:17px;font-weight:700}
@keyframes fin{from{opacity:0}to{opacity:1}}@keyframes sup{from{transform:translateY(100%)}to{transform:none}}
.seg{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:4px;border-radius:22px;background:var(--muted);padding:4px}
.sg{border-radius:18px;padding:10px 8px;text-align:center;color:var(--muted-foreground);transition:transform .14s,background-color .16s,color .16s}
.sg:active{transform:scale(.96)}.sg.on{background:var(--card);color:var(--foreground);box-shadow:var(--elev-card)}.sgl{display:block;font-size:15px;font-weight:600;font-variant-numeric:tabular-nums}
.csl{font-size:13px;color:var(--primary);background:transparent;padding:0;max-width:150px;font-weight:500;appearance:none;-webkit-appearance:none}
.note{margin-top:12px;font-size:13px;color:var(--muted-foreground)}.note.s{margin-top:8px}
.nf{position:relative}.nf .inp{padding-inline-end:40px;font-variant-numeric:tabular-nums}.nfc{position:absolute;inset-block:0;inset-inline-end:16px;display:grid;place-items:center;color:var(--muted-foreground);pointer-events:none}
.selw{position:relative;min-width:0;flex:1.4}.selw select{appearance:none;-webkit-appearance:none;padding-inline-end:36px;font-weight:500}.selc{position:absolute;inset-inline-end:12px;top:50%;transform:translateY(-50%);color:var(--muted-foreground);pointer-events:none}
.brow{display:flex;align-items:center;gap:8px}.brow+.brow{margin-top:10px}.brow .nf{flex:1;min-width:0}
.fl{display:block;margin-bottom:6px;font-size:14px;font-weight:500;color:var(--muted-foreground)}
textarea.inp{height:auto;min-height:96px;padding:12px 16px;font-size:12px;direction:ltr;text-align:left}
.sal-l{display:block;text-align:center;font-size:14px;font-weight:500;color:var(--muted-foreground)}
.qamt.sal{font-size:52px}.splitbar{display:flex;height:12px;overflow:hidden;border-radius:999px;margin-top:12px}.splitbar div{height:100%;transition:width .7s cubic-bezier(.22,1,.36,1)}
.bg-primary{background:var(--primary)}.bg-warning{background:var(--warning)}.bg-success{background:var(--success)}
.sdot{width:12px;height:12px;flex:none;border-radius:999px}.sl{font-size:15px;font-weight:600}.sl span{font-weight:400;color:var(--muted-foreground)}
.sv{font-size:17px;font-weight:700;font-variant-numeric:tabular-nums}
.sr{display:flex;align-items:center;gap:12px;padding:12px 0}.sr+.sr{border-top:1px solid var(--border)}
.tgl{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:8px;border-radius:22px;background:var(--muted);padding:12px 16px}
.sw{position:relative;display:inline-flex;height:31px;width:51px;flex:none;align-items:center;border-radius:999px;padding:2px;background:var(--track);transition:background-color .2s}
.sw.on{background:var(--success)}.sw i{display:block;width:27px;height:27px;border-radius:999px;background:var(--card);box-shadow:var(--elev-card);transition:transform .25s cubic-bezier(.22,1,.36,1)}.sw.on i{transform:translateX(-20px)}
#toasts{position:fixed;top:calc(12px + env(safe-area-inset-top));left:0;right:0;z-index:100;display:flex;flex-direction:column;align-items:center;gap:8px;pointer-events:none}
.toast{pointer-events:auto;width:min(356px,calc(100vw - 24px));display:flex;align-items:center;gap:10px;padding:16px;border-radius:18px;background:var(--popover);color:var(--foreground);border:1px solid var(--border);box-shadow:0 4px 12px rgba(0,0,0,.1);font-size:13px;animation:tin .3s cubic-bezier(.22,1,.36,1)}
.toast .tt{font-weight:500}.toast .td{margin-top:2px;color:var(--muted-foreground)}.toast .ti{color:var(--success)}
.bn{display:block;margin-top:4px;font-size:40px;font-weight:800;line-height:1.1;letter-spacing:-.025em;font-variant-numeric:tabular-nums}.bn.neg{color:var(--danger)}.bn .cur{font-size:.5em;font-weight:600;color:var(--muted-foreground)}
@keyframes tin{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:none}}
@media (prefers-reduced-motion:reduce){*,::before,::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}
`;
(function(){var s=document.createElement("style");s.id="lui";s.textContent=L_CSS;document.head.appendChild(s)})();

/* ---------- icons (lucide) ---------- */
const LI=(p,c="",sw=2)=>`<svg class="i ${c}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
const LP={
house:'<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
landmark:'<path d="M10 18v-7"/><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"/><path d="M14 18v-7"/><path d="M18 18v-7"/><path d="M3 22h18"/><path d="M6 18v-7"/>',
zap:'<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
wifi:'<path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/>',
basket:'<path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/>',
car:'<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',
shield:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
heart:'<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>',
coffee:'<path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/>',
ticket:'<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/>',
shirt:'<path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>',
repeat:'<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
gift:'<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/>',
ellipsis:'<circle cx="12" cy="12" r="10"/><path d="M17 12h.01"/><path d="M12 12h.01"/><path d="M7 12h.01"/>',
wallet:'<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
cal:'<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M3 10h18"/><path d="M8 2v4"/><path d="M17 14h-6"/><path d="M13 18H7"/><path d="M7 14h.01"/><path d="M17 18h.01"/>',
set2:'<path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/>',
plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',
trash:'<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>',
check:'<path d="M20 6 9 17l-5-5"/>',
cr:'<path d="m9 18 6-6-6-6"/>',cl:'<path d="m15 18-6-6 6-6"/>',cd:'<path d="m6 9 6 6 6-6"/>',
dl:'<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>',
ul:'<path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>',
cc:'<path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/>'
};
const LCI={"שכירות":LP.house,"ארנונה":LP.landmark,"חשמל מים גז":LP.zap,"אינטרנט וסלולר":LP.wifi,"סופר ומכולת":LP.basket,"תחבורה ודלק":LP.car,"ביטוחים":LP.shield,"בריאות":LP.heart,"מסעדות וקפה":LP.coffee,"בילויים":LP.ticket,"קניות ובגדים":LP.shirt,"מנויים":LP.repeat,"מתנות":LP.gift,"אחר":LP.ellipsis,"כללי":LP.ellipsis,"חובות והלוואות":LP.wallet,"חיסכון":LP.shield};
const LQUICK=["סופר ומכולת","מסעדות וקפה","תחבורה ודלק","בילויים","קניות ובגדים","בריאות","מתנות","מנויים","אחר","חשמל מים גז","אינטרנט וסלולר","ביטוחים","ארנונה","שכירות","חיסכון"];

/* ---------- helpers ---------- */
const Lfmt=n=>Math.round(Math.abs(n||0)).toLocaleString("en-US"),Lils=n=>Lfmt(n)+" ₪";
const Lc01=n=>Math.min(1,Math.max(0,isFinite(n)?n:0));
function LdayLabel(ds){const t=todayStr();if(ds===t)return"היום";const y=new Date();y.setDate(y.getDate()-1);const ys=y.getFullYear()+"-"+String(y.getMonth()+1).padStart(2,"0")+"-"+String(y.getDate()).padStart(2,"0");if(ds===ys)return"אתמול";const p=ds.split("-").map(Number);return new Intl.DateTimeFormat("he-IL",{day:"numeric",month:"short"}).format(new Date(p[0],p[1]-1,p[2]))}
const LspendTone=(u,b)=>{if(b<=0)return u>0?"danger":"success";const r=u/b;return r>1?"danger":r>=.85?"warning":"success"};
const Lpill=(tone,html,c="")=>`<span class="pill t-${tone} ${c}">${html}</span>`;
const Lbtn=(v,s,attrs,html,c="")=>`<button type="button" class="btn b-${v} s-${s} ${c}" ${attrs}>${html}</button>`;
const Lbar=(val,tone="primary",c="")=>`<div class="bar ${c}" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(Lc01(val)*100)}"><div class="fill f-${tone}" data-w="${(Lc01(val)*100).toFixed(2)}%" style="width:0"></div></div>`;
const Lcard=(title,aside,body,c="")=>`<section class="surface p5 ${c}">${title||aside?`<header class="ch">${title?`<h2>${title}</h2>`:"<span></span>"}${aside?`<div class="aside">${aside}</div>`:""}</header>`:""}${body}</section>`;
const Lshd=(t,sub)=>`<header class="shd"><h1>${t}</h1>${sub?`<p>${sub}</p>`:""}</header>`;
const Lbdg=(cat,inc,sav)=>`<span class="bdg${inc||sav?" inc":""}">${inc?LI(LP.wallet,"s18"):sav?LI(LP.shield,"s18"):LI(LCI[cat]||LP.ellipsis,"s18")}</span>`;
const Lbig=(v,c)=>`<span class="tn ${c}"><span>${Lfmt(v)}</span><span class="cur"> ₪</span></span>`;
function Lring(val,tone,size,stroke,inner){const r=(size-stroke)/2,c=2*Math.PI*r;return`<div class="ring" style="width:${size}px;height:${size}px"><svg width="${size}" height="${size}" aria-hidden="true"><circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke-width="${stroke}" class="trk"/><circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke-width="${stroke}" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${c}" data-off="${c*(1-Lc01(val))}" class="rg t-${tone}"/></svg><div class="rin">${inner}</div></div>`}
const Lseg=(label,val,opts,act)=>`<div class="seg" role="radiogroup" aria-label="${label}">${opts.map(o=>`<button type="button" role="radio" aria-checked="${o.v===val}" class="sg${o.v===val?" on":""}" data-act="${act}" data-v="${o.v}"><span class="sgl"${o.ltr?' dir="ltr"':""}>${o.l}</span></button>`).join("")}</div>`;
const Lnf=(attrs,val,label)=>`<div class="nf"><input class="inp" inputmode="numeric" aria-label="${label||""}" value="${val}" ${attrs}><span class="nfc">₪</span></div>`;

/* ---------- state for the new UI ---------- */
let QA={raw:"",note:"",cat:"סופר ומכולת",check:null,open:false,focus:false};
let SAL={raw:null,fund:true,io:false};
let BAL={raw:""};
function Lbal(){const b=S.settings.bal;if(!b)return null;let v=b.amt;const seen=b.seen||[];S.tx.forEach(t=>{if(t.date>b.date||(t.date===b.date&&!seen.includes(t.id)))v+=t.type==="inc"?t.amt:-t.amt});return v}
/* ---------- Riseup snapshot (encrypted file synced daily) ---------- */
let SNAP={d:null,st:"none",msg:""},SP={raw:""};
const Lsn=n=>(n<0?"−":"")+Lils(n);
const b64d=x=>Uint8Array.from(atob(x),c=>c.charCodeAt(0));
async function snapDecrypt(f,pass){const km=await crypto.subtle.importKey("raw",new TextEncoder().encode(pass),"PBKDF2",false,["deriveKey"]);const k=await crypto.subtle.deriveKey({name:"PBKDF2",salt:b64d(f.salt),iterations:f.iter,hash:"SHA-256"},km,{name:"AES-GCM",length:256},false,["decrypt"]);return JSON.parse(new TextDecoder().decode(await crypto.subtle.decrypt({name:"AES-GCM",iv:b64d(f.iv)},k,b64d(f.ct))))}
async function loadSnap(){
 let pass="",cached=null;try{pass=localStorage.getItem("snapPass")||"";cached=JSON.parse(localStorage.getItem("snapData")||"null")}catch(e){}
 if(cached){SNAP.d=cached;SNAP.st="ok"}
 try{
  const r=await fetch("data/snapshot.enc.json",{cache:"no-store"});
  if(r.status===404){if(!cached)SNAP.st="none"}
  else if(!r.ok)throw new Error("http")
  else if(!pass){if(!cached)SNAP.st="locked"}
  else{try{SNAP.d=await snapDecrypt(await r.json(),pass);SNAP.st="ok";SNAP.msg="";try{localStorage.setItem("snapData",JSON.stringify(SNAP.d))}catch(e){}}
   catch(e){try{localStorage.removeItem("snapPass")}catch(_){}SNAP.msg="הסיסמה לא נכונה";if(!cached)SNAP.st="locked"}}
 }catch(e){}
 if(tab==="home"&&!QA.open&&document.activeElement.tagName!=="INPUT")render();
}
function snapCalc(){
 const d=SNAP.d,sum=(a,f)=>(a||[]).reduce((x,y)=>x+(f(y)||0),0);
 const bal=sum(d.accounts,a=>a.balance),fm=d.futureMonthEnd||[],fn=d.futureNextMonthEnd||d.futureMonthEnd||[];
 const exp=a=>(a||[]).filter(t=>!t.inc);
 const billed=sum(fn,x=>sum(exp(x.txs),t=>t.a)),fixed=sum(fm,x=>sum(exp(x.fixedTxs),t=>t.a)),cards=sum(fn,x=>sum(x.cards,c=>c));
 const free=bal-billed-fixed,now=new Date(),dim=new Date(now.getFullYear(),now.getMonth()+1,0).getDate(),dl=dim-now.getDate()+1;
 const by={};fn.forEach(x=>exp(x.txs).forEach(t=>{by[t.d]=(by[t.d]||0)+t.a}));
 const up=Object.keys(by).sort().map(k=>({d:k,a:by[k]}));
 const asOf=(d.accounts||[]).map(a=>a.lastUpdated).filter(Boolean).sort()[0]||d.generatedAt;
 const age=(Date.now()-new Date(d.generatedAt))/36e5;
 return{bal,billed,fixed,cards,free,perDay:Math.max(0,free)/dl,dl,up,asOf,age,
  sav:sum(d.savings,x=>x.balance),inv:sum(d.investments,x=>x.value),partial:d.status!=="ok",errs:d.errors||[]};
}
const LdateFmt=iso=>{const x=new Date(iso);return isNaN(x)?"":x.toLocaleString("he-IL",{day:"numeric",month:"numeric",hour:"2-digit",minute:"2-digit"})};
function snapCards(){
 if(SNAP.st==="ok"&&SNAP.d){
  const c=snapCalc(),tone=c.age<26?"success":c.age<48?"warning":"danger",em=S.goals.find(g=>g.kind==="em"),gem=S.settings.gemel==null?175000:S.settings.gemel;
  const total=c.bal+c.sav+c.inv+(em?em.saved:0)+gem;
  const row=(l,v,n)=>`<li class="r"><div class="grow"><p class="t1">${l}</p>${n?`<p class="t2">${n}</p>`:""}</div><b class="tn">${Lsn(v)}</b></li>`;
  const main=Lcard("העו\"ש שלי",Lpill(tone,"עודכן "+LdateFmt(SNAP.d.generatedAt)),`<span class="bn${c.bal<0?" neg":""}">${c.bal<0?"−":""}${Lfmt(c.bal)}<span class="cur"> ₪</span></span>
   <ul class="lst mt3">${row("חיובי אשראי וחיובים צפויים",-c.billed,"כרטיסי אשראי, עד סוף החודש הבא")}${row("הוצאות קבועות שעוד יירדו החודש",-c.fixed)}${row("פנוי אחרי חיובים וקבועות",c.free)}</ul>
   <p class="note s">בערך <b>${Lils(c.perDay)}</b> ליום עד סוף החודש (${c.dl} ימים). נתוני הבנק נכון ל-${LdateFmt(c.asOf)}.${c.partial?" חלק מהנתונים לא נקראו: "+esc(c.errs.join("; ")):""}</p>`);
  const up=c.up.length?Lcard("חיובים קרובים","",`<ul class="lst">${c.up.map(u=>`<li class="r"><div class="grow"><p class="t1">${u.d.slice(8)}/${u.d.slice(5,7)}</p></div><b class="tn">${Lils(u.a)}</b></li>`).join("")}</ul>`):"";
  const map=Lcard("איפה הכסף שלי",`<span class="tn">${Lils(total)}</span>`,`<ul class="lst">${row("עו\"ש",c.bal,"זמין")}${c.sav?row("פיקדונות וחיסכון",c.sav,"בבנק"):""}${c.inv?row("השקעות בבנק",c.inv):""}${em?row("קרן חירום",em.saved,"מהאפליקציה"):""}${row("גמל להשקעה",gem,"לא זמין להוצאה")}</ul><div class="mt3"><label class="fl">עדכון גמל (ידני)</label>${Lnf('data-gem="1"',gem,"גמל להשקעה")}</div>`);
  return main+up+map;
 }
 if(SNAP.st==="locked")return Lcard("סנכרון רייזאפ","",`<p class="note" style="margin:0 0 4px">יש נתונים מוצפנים מרייזאפ. הכנס את סיסמת הסנכרון פעם אחת במכשיר הזה.</p>${SNAP.msg?`<p class="note s" style="color:var(--danger)">${esc(SNAP.msg)}</p>`:""}<div class="brow mt3"><input class="inp" type="password" data-sp="1" aria-label="סיסמת סנכרון" placeholder="סיסמת סנכרון" value="${esc(SP.raw)}">${Lbtn("soft","md",'data-act="snap-unlock"',"פתח")}</div>`)+balCard();
 return balCard();
}
function balCard(){
 const b=S.settings.bal,v=Lbal(),d=b?b.date.slice(8)+"/"+b.date.slice(5,7):"";
 const head=b?`<p class="hl">יתרה משוערת</p><span class="bn${v<0?" neg":""}">${v<0?"−":""}${Lfmt(v)}<span class="cur"> ₪</span></span><p class="note s">מחושב מהתנועות שנרשמו מאז העדכון מה-${d}. מדי פעם עדכן לפי הבנק.</p>`:`<p class="note" style="margin:0 0 4px">הכנס את היתרה כפי שהיא בבנק עכשיו, והיא תתעדכן לבד עם כל הוצאה והכנסה שתרשום.</p>`;
 return Lcard("העו\"ש שלי",b?"עודכן "+d:"",head+`<div class="brow mt3"><div class="nf"><input class="inp" inputmode="text" data-bal="1" aria-label="יתרה לפי הבנק" placeholder="יתרה לפי הבנק" value="${esc(BAL.raw)}"><span class="nfc">₪</span></div>${Lbtn("soft","md",'data-act="bal-save"',b?"עדכן":"שמור")}</div>`);
}

/* ---------- calculations ---------- */
function Lcalc(key){
 const cur=mk(todayStr()),isCur=key===cur,isPast=key<cur,now=new Date();
 const p=key.split("-").map(Number),dim=new Date(p[0],p[1],0).getDate();
 const day=isCur?now.getDate():isPast?dim:0,daysLeft=isCur?dim-day+1:isPast?0:dim;
 const d=monthData(key),T=targets(),B=T.needs+T.wants,fi=fixedInfo(d,isCur);
 const flexSpent=d.exp-fi.paidFix,poolFull=B-fi.F,pool=B-fi.res,left=pool-flexSpent,pace=poolFull*day/dim;
 const fixedCats=new Set((S.settings.fixed||[]).map(f=>f.cat)),td=todayStr();
 const spentToday=isCur?d.list.filter(t=>t.type==="exp"&&t.date===td&&!fixedCats.has(t.cat)).reduce((a,t)=>a+t.amt,0):0;
 const allow=daysLeft>0?Math.max(0,left+spentToday)/daysLeft:0,remToday=isCur?allow-spentToday:0;
 const nextDaily=daysLeft>1?Math.max(0,left-Math.max(0,remToday))/(daysLeft-1):0;
 return{key,isCur,d,T,B,fi,flexSpent,poolFull,left,day,dim,daysLeft,allow,remToday,nextDaily,spentToday,daily:Math.max(0,remToday),pace,paceDiff:day>=3?flexSpent-pace:0,saved:d.inc-d.exp,savT:T.sav+Math.max(0,d.inc-S.settings.base),incomeRec:d.inc};
}
function Ltips(m){
 const t=[],unpaid=m.fi.rows.filter(f=>!f.paid);
 if(unpaid.length){const tot=unpaid.reduce((a,f)=>a+f.amt,0);t.push(unpaid.length===1?`נשאר חשבון אחד לשלם, ${Lils(tot)}. הסכום כבר שמור בצד.`:`נשארו ${unpaid.length} חשבונות לשלם, ${Lils(tot)}. הסכום כבר שמור בצד.`)}
 const live=SNAP.st==="ok"&&SNAP.d;
 if(!live&&m.incomeRec===0)t.push(`עוד לא רשמת משכורת החודש. בינתיים החישוב לפי ${Lils(S.settings.base)}.`);
 const fixed=new Set((S.settings.fixed||[]).map(f=>f.cat)),flex=Object.entries(m.d.cats).filter(e=>!fixed.has(e[0])).sort((a,b)=>b[1]-a[1]),top=flex[0];
 if(!live&&m.paceDiff>0&&top){t.push(`הכי הרבה הלך על ${top[0]}: ${Lils(top[1])}. שם הכי קל לחסוך.`);t.push(`כדי לחזור לקצב, נסה להישאר מתחת ל-${Lils(m.allow)} ביום.`)}
 else if(!live&&m.day>=3&&m.paceDiff<=0)t.push(`אתה מתחת לקצב ב-${Lils(-m.paceDiff)}. מה שיישאר יכול לעבור לחיסכון.`);
 const em=S.goals.find(g=>g.kind==="em");if(em){const target=Math.round(goalTarget(em));if(target>0&&em.saved<target)t.push(`קרן החירום ב-${Math.round(em.saved/target*100)}%. עוד ${Lils(target-em.saved)} ליעד.`)}
 return t.slice(0,4);
}

/* ---------- transactions ---------- */
const LcatSel=t=>`<select class="csl" data-act="recat" data-id="${t.id}" aria-label="קטגוריה">${["חיסכון",...EXPCATS].map(c=>`<option${c===t.cat?" selected":""}>${esc(c)}</option>`).join("")}</select>`;
function LtxRow(t,edit){
 const inc=t.type==="inc",sav=t.type==="sav",fixed=(S.settings.fixed||[]).some(f=>f.cat===t.cat);
 const title=inc?"משכורת":sav?"הפקדה לחיסכון":(t.note&&t.note!=="קבוע"?t.note:t.cat);
 const sub=inc?LdayLabel(t.date):sav?`חיסכון · ${LdayLabel(t.date)}`:`${fixed?"חשבון קבוע":t.cat} · ${LdayLabel(t.date)}`;
 return`<li class="r">${Lbdg(t.cat,inc,sav)}<div class="grow"><p class="t1">${esc(title)}</p><p class="t2">${edit&&!inc&&!sav?LcatSel(t)+" · "+esc(LdayLabel(t.date)):esc(sub)}</p></div><span class="amt${inc?" inc":""}">${Lils(t.amt)}</span><button type="button" class="trash" data-act="deltx2" data-v="${t.id}" aria-label="מחיקת ${esc(title)}">${LI(LP.trash,"s17")}</button></li>`;
}
const LtxList=(txs,empty="אין עדיין תנועות",edit)=>txs.length?`<ul class="lst">${txs.map(t=>LtxRow(t,edit)).join("")}</ul>`:`<p class="empty">${empty}</p>`;
function LgroupList(txs){
 if(!txs.length)return LtxList([]);
 const g=new Map();txs.forEach(t=>g.set(t.date,[...(g.get(t.date)||[]),t]));
 return`<div class="grp">${[...g.entries()].map(([d,l])=>`<div><h3>${LdayLabel(d)}</h3>${LtxList(l,undefined,true)}</div>`).join("")}</div>`;
}

/* ---------- quick add ---------- */
function qaForm(){
 const amt=num(QA.raw),m=Lcalc(mk(todayStr()));let res="";
 if(QA.check!==null){
  const c=QA.check,left=m.left-c;let tone="success",msg;const nd=m.daysLeft>1?Math.max(0,left)/(m.daysLeft-1):0;
  if(left<0){tone="danger";msg=`זה חורג מהתקציב החודשי ב-<b>${Lils(-left)}</b>.`}
  else if(c<=m.remToday){msg=`אחרי הקנייה יישארו <b>${Lils(m.remToday-c)}</b> להיום.`}
  else{const drop=m.nextDaily>0?1-nd/m.nextDaily:1;tone=drop>.3?"danger":"warning";msg=m.daysLeft>1?`זה יותר ממה שנשאר להיום (<span class="tn">${Lils(Math.max(0,m.remToday))}</span>). בשאר החודש אפשר יהיה <b>${Lils(nd)}</b> ביום, במקום <span class="tn">${Lils(m.nextDaily)}</span>.`:"זה יותר ממה שנשאר להיום."}
  const vd=tone==="success"?"מתאים להיום":tone==="warning"?"אפשרי, אבל היומי ירד":left<0?"חורג מהתקציב החודשי":"יכביד על המשך החודש";
  res=`<div class="chk reveal" role="status">${Lpill(tone,vd)}<p>${msg}</p><div class="chkb">${Lbtn("primary","sm",'data-act="qa-save"',"קניתי, לרשום")}${Lbtn("ghost","sm",'data-act="qa-skip"',"אוותר הפעם")}</div></div>`;
 }
 return`<div class="qaf"><div class="qamw"><input data-qa="amount" aria-label="סכום" inputmode="decimal" placeholder="0" dir="ltr" value="${esc(QA.raw)}" class="qamt" style="width:${Math.max(1,QA.raw.length)+.6}ch"><span class="qcur">₪</span></div>
 <input data-qa="note" aria-label="הערה" placeholder="הערה (לא חובה)" value="${esc(QA.note)}" class="inp ctr">
 <div class="chips" role="radiogroup" aria-label="קטגוריה">${LQUICK.map(c=>`<button type="button" role="radio" aria-checked="${c===QA.cat}" class="chip${c===QA.cat?" on":""}" data-act="qa-pick" data-v="${esc(c)}">${LI(LCI[c]||LP.ellipsis,"s16")}${esc(c)}</button>`).join("")}</div>
 <div class="g2 mt4">${Lbtn("primary","lg",`data-act="qa-save" data-needamt ${amt<=0?"disabled":""}`,"הוצאתי")}${Lbtn("soft","lg",`data-act="qa-check" data-needamt ${amt<=0?"disabled":""}`,"לפני קנייה")}</div>${res}</div>`;
}
const LrefreshQA=()=>document.querySelectorAll(".qaf").forEach(f=>{const a=f.querySelector("[data-qa=amount]"),had=a&&document.activeElement===a;f.outerHTML=qaForm();if(had){const n=document.querySelector(".qaf [data-qa=amount]");n&&n.focus()}});

/* ---------- views ---------- */
function vHome(){
 const SC=(SNAP.st==="ok"&&SNAP.d)?snapCalc():null;
 mon=mk(todayStr());const m=Lcalc(mon),T=Ltips(m),over=m.paceDiff;
 const tone=m.left<=0?"danger":m.remToday<0&&over<=0?"warning":over<=0?"success":over>m.poolFull*.1?"danger":"warning";
 const rv=m.allow>0?Lc01(m.remToday/m.allow):0;
 const dl=new Intl.DateTimeFormat("he-IL",{weekday:"long",day:"numeric",month:"long"}).format(new Date());
 const rows=m.fi.rows,paid=rows.filter(f=>f.paid).length;
 const recent=[...S.tx].reverse().sort((a,b)=>b.date.localeCompare(a.date)).slice(0,6);
 const bills=rows.length?`<ul class="lst">${rows.map(f=>`<li class="r">${Lbdg(f.cat)}<div class="grow"><p class="t1">${esc(f.cat)}</p><p class="t2 tn">${Lils(f.paid?f.act:f.amt)}</p></div>${f.paid?Lpill("success",LI(LP.check,"s16",3)+"שולם","h8"):Lbtn("soft","sm",`data-act="payfixed" data-v="${esc(f.cat)}"`,"שולם")}</li>`).join("")}</ul>`:`<p style="font-size:15px;color:var(--muted-foreground)">אין חשבונות קבועים. אפשר להוסיף בהגדרות.</p>`;
 return`<div class="stack"><header class="hh"><p>${dl}</p><h1>שלום נדב</h1></header>
 ${SC?`<section class="surface hero hbox">${Lring(SC.bal>0?SC.free/SC.bal:0,SC.free<=0?"danger":SC.age<48?"success":"warning",216,15,`<div><p class="hl">אפשר להוציא היום</p>${Lbig(SC.perDay,"hn")}</div>`)}${Lpill(SC.free<=0?"danger":SC.age<26?"success":SC.age<48?"warning":"danger",SC.free<=0?"אין פנוי אחרי החיובים":"אחרי חיובי אשראי וקבועות","mt5")}<p class="hs">פנוי <b>${Lils(SC.free)}</b> ל-${SC.dl} ימים עד סוף החודש</p><p class="hs" style="margin-top:4px">עו\"ש ${Lils(SC.bal)} פחות חיובים ${Lils(SC.billed+SC.fixed)}</p></section>`:`<section class="surface hero hbox">${Lring(rv,tone,216,15,`<div><p class="hl">אפשר להוציא היום</p>${Lbig(Math.max(0,m.remToday),"hn")}</div>`)}${Lpill(tone,m.left<=0?"חרגת מהתקציב החודשי":over>0?`מעל הקצב ב-${Lils(over)}`:m.remToday<0?"חרגת היום":"בקצב החודשי","mt5")}<p class="hs">${m.remToday<0&&m.left>0?`חרגת היום ב-<b>${Lils(-m.remToday)}</b>. מחר אפשר <b>${Lils(m.nextDaily)}</b>`:`תקציב יומי <b>${Lils(m.allow)}</b> · הוצאת היום <b>${Lils(m.spentToday)}</b>`}</p><p class="hs" style="margin-top:4px">נשארו <b>${Lils(Math.max(0,m.left))}</b> ל-${m.daysLeft} ימים</p></section>`}
 ${snapCards()}
 ${Lcard("חשבונות קבועים החודש",`${paid}/${rows.length} שולמו`,bills)}
 ${T.length?Lcard("מה לעשות עכשיו","",`<ul class="tips">${T.map(x=>`<li><span class="d" aria-hidden="true"></span><span>${esc(x)}</span></li>`).join("")}</ul>`):""}
 ${Lcard("הוצאה מהירה","",qaForm())}
 ${Lcard("אחרונות","",LtxList(recent))}</div>`;
}
function vMonth(){
 const cur=mk(todayStr()),m=Lcalc(mon),d=m.d;
 const earliest=S.tx.reduce((a,t)=>mk(t.date)<a?mk(t.date):a,cur);
 const lab=new Intl.DateTimeFormat("he-IL",{month:"long",year:"numeric"}).format(new Date(+mon.slice(0,4),+mon.slice(5)-1,1));
 const top=Object.entries(d.cats).sort((a,b)=>b[1]-a[1]).slice(0,3),topMax=top[0]?top[0][1]:1;
 const em=S.goals.find(g=>g.kind==="em"),target=em?Math.round(goalTarget(em)):0,saved=em?em.saved:0,ok=m.saved>=0;
 const pot=(name,used,budget,sv)=>{const tone=sv?(used>=budget?"success":"primary"):LspendTone(used,budget),diff=budget-used;
  const note=sv?(diff>0?`עוד ${Lils(diff)} ליעד`:"הגעת ליעד"):diff>=0?`נשארו ${Lils(diff)}`:`חריגה של ${Lils(-diff)}`;
  return`<div class="pot"><div class="pt"><span>${name}</span><span>${Lils(Math.max(0,used))} מתוך ${Lils(budget)}</span></div>${Lbar(budget>0?used/budget:0,tone)}<p class="pn t-${tone==="danger"?"danger":tone==="warning"?"warning":"x"}">${note}</p></div>`};
 const stat=(l,v,tone)=>`<div class="surface stat"><p>${l}</p><p class="${tone?"t-"+tone:""}">${Lils(v)}</p></div>`;
 const list=[...d.list].sort((a,b)=>b.date.localeCompare(a.date));
 return`<div class="stack">${Lshd("סוף חודש")}
 <div class="surface nav3"><button type="button" class="mb" aria-label="חודש קודם" data-act="mon" data-v="-1" ${mon<=earliest?"disabled":""}>${LI(LP.cr,"s24")}</button><div class="mc"><p>${lab}</p>${m.isCur?`<p>עוד ${m.daysLeft} ימים</p>`:""}</div><button type="button" class="mb" aria-label="חודש הבא" data-act="mon" data-v="1" ${mon>=cur?"disabled":""}>${LI(LP.cl,"s24")}</button></div>
 <div class="g3">${stat("הכנסות",m.incomeRec)}${stat("הוצאות",d.exp)}${stat(ok?"חיסכון":"גירעון",m.saved,ok?"success":"danger")}</div>
 ${Lcard("שלוש הקופות","",`<div class="pots">${pot("קבועות",m.fi.paidFix,m.fi.F)}${pot("משתנות",m.flexSpent,m.poolFull)}${pot("חיסכון",Math.max(0,m.saved),m.savT,true)}</div>`)}
 ${Lcard("ההוצאות הגדולות","",top.length?`<ol class="top3">${top.map((c,i)=>`<li>${Lbdg(c[0])}<div class="grow"><div class="tr"><span class="t1">${i+1}. ${esc(c[0])}</span><span class="amt">${Lils(c[1])}</span></div>${Lbar(c[1]/topMax,"primary","thin")}</div></li>`).join("")}</ol>`:`<p style="font-size:15px;color:var(--muted-foreground)">אין הוצאות בחודש הזה.</p>`)}
 ${Lcard("קרן חירום",target>0?Math.round(saved/target*100)+"%":"",`<div class="em"><p><b>${Lils(saved)}</b> <span>מתוך ${Lils(target)}</span></p>${Lbar(target>0?saved/target:0,saved>=target?"success":"primary")}</div>`)}
 ${Lcard("כל התנועות",String(list.length),LgroupList(list))}</div>`;
}
function LsalCalc(){const amt=num(SAL.raw),base=S.settings.base,sp=S.settings.split,sur=Math.max(0,amt-base),eff=Math.min(amt,base);return{amt,needs:eff*sp[0]/100,wants:eff*sp[1]/100,sav:eff*sp[2]/100+sur}}
function vSalary(){
 if(SAL.raw===null)SAL.raw=String(S.settings.base);
 const c=LsalCalc(),sp=S.settings.split,cur=mk(todayStr());
 const sals=[...S.tx].reverse().filter(t=>t.type==="inc").sort((a,b)=>b.date.localeCompare(a.date));
 const thisM=sals.filter(t=>mk(t.date)===cur).reduce((a,t)=>a+t.amt,0);
 const parts=[["צרכים","חשבונות, סופר, תחבורה",sp[0],"bg-primary","needs"],["רצונות","בילויים, מסעדות, קניות",sp[1],"bg-warning","wants"],["חיסכון","קרן חירום ויעדים",sp[2],"bg-success","sav"]];
 return`<div class="stack">${Lshd("משכורת",thisM>0?`החודש נרשמו ${Lils(thisM)}`:"עוד לא נרשמה משכורת החודש")}
 ${Lcard("","",`<label class="sal-l">כמה נכנס נטו?</label><div class="qamw"><input data-sal="raw" aria-label="סכום משכורת" inputmode="numeric" dir="ltr" value="${esc(SAL.raw)}" class="qamt sal" style="width:${Math.max(1,Lfmt(c.amt).length)+.6}ch"><span class="qcur">₪</span></div>
 <div class="splitbar" aria-hidden="true">${parts.map(p=>`<div class="${p[3]}" style="width:${p[2]}%"></div>`).join("")}</div><p class="note ctr" dir="ltr" style="text-align:center;margin-top:8px">${sp.join("/")}</p>
 <ul style="margin-top:12px">${parts.map(p=>`<li class="sr"><span class="sdot ${p[3]}"></span><div class="grow"><p class="sl">${p[0]} <span>${p[2]}%</span></p><p class="t2">${p[1]}</p></div><span class="sv" data-sv="${p[4]}">${Lils(c[p[4]])}</span></li>`).join("")}</ul>
 <div class="tgl"><div><p class="t1">להעביר לקרן החירום</p><p class="t2 tn" data-sv="fund">${Lils(c.sav)}</p></div><button type="button" class="sw${SAL.fund?" on":""}" role="switch" aria-checked="${SAL.fund}" aria-label="להעביר את החיסכון לקרן החירום" data-act="sal-fund"><i></i></button></div>
 ${Lbtn("primary","lg",`data-act="sal-save" data-salbtn ${c.amt<=0?"disabled":""}`,"רישום משכורת","w100 mt4")}`)}
 ${Lcard("משכורות אחרונות","",LtxList(sals.slice(0,6),"עוד לא נרשמו משכורות"))}</div>`;
}
function vSet(){
 const s=S.settings,fx=s.fixed||[],tot=fx.reduce((a,f)=>a+(f.amt||0),0),em=S.goals.find(g=>g.kind==="em"),th=s.theme||"system";
 const cats=CATS.needs.concat(CATS.wants.filter(c=>!CATS.needs.includes(c)));
 const sp=s.split;
 return`<div class="stack">${Lshd("הגדרות")}
 ${Lcard("חלוקת התקציב","",Lseg("חלוקת התקציב",sp.join("/"),PRESETS.map(p=>({v:p.join("/"),l:p.join("/"),ltr:1})),"preset")+`<p class="note">צרכים ${sp[0]}% · רצונות ${sp[1]}% · חיסכון ${sp[2]}%</p>`)}
 ${Lcard("נטו בסיסי","",Lnf('data-base="1"',s.base,"נטו בסיסי")+`<p class="note s">משמש לחישוב עד שנרשמת משכורת בחודש.</p>`)}
 ${Lcard("חשבונות קבועים",`<span id="bt">${Lils(tot)}</span>`,fx.map((f,i)=>`<div class="brow"><div class="selw"><select class="inp" aria-label="קטגוריה" data-bi="${i}" data-bf="cat">${cats.map(c=>`<option${c===f.cat?" selected":""}>${esc(c)}</option>`).join("")}</select>${LI(LP.cd,"s16 selc")}</div>${Lnf(`data-bi="${i}" data-bf="amt"`,f.amt||0,"סכום חודשי")}<button type="button" class="btn b-ghost s-ic" aria-label="מחיקת חשבון" data-act="delfixed2" data-v="${i}">${LI(LP.trash,"s17")}</button></div>`).join("")+Lbtn("soft","md",'data-act="addfixed2"',LI(LP.plus,"s16")+" הוספת חשבון","w100 mt3"))}
 ${Lcard("קרן חירום","",`<div class="g2"><div><label class="fl">יעד</label>${Lnf('data-em="target"',em?Math.round(goalTarget(em)):0,"יעד")}</div><div><label class="fl">יש כרגע</label>${Lnf('data-em="saved"',em?em.saved:0,"יש כרגע")}</div></div>`)}
 ${Lcard("מראה","",Lseg("מראה",th,[{v:"system",l:"אוטומטי"},{v:"light",l:"בהיר"},{v:"dark",l:"כהה"}],"theme"))}
 ${Lcard("גיבוי","",`<p class="note" style="margin:0 0 12px">הנתונים נשמרים בטלפון בלבד. גבה מדי פעם: נפתח תפריט השיתוף ואפשר לשמור את הקובץ בדרייב.</p><div class="g2">${Lbtn("soft","md",'data-act="drive"',LI(LP.dl,"s16")+" גיבוי לקובץ")}${Lbtn("muted","md",'data-act="toggleio"',LI(LP.ul,"s16")+" ייצוא / ייבוא")}</div><p class="note s" id="sync"></p>${backupMsg?`<p class="note s">${esc(backupMsg)}</p>`:""}${SAL.io?`<div class="mt3"><input type="file" accept=".json,application/json" data-file="1" class="inp" style="padding-top:12px"><textarea id="json" class="inp mt2" placeholder="או הדבק JSON לשחזור"></textarea><div class="g2 mt2">${Lbtn("muted","md",'data-act="exp"',"הצג נתונים")}${Lbtn("soft","md",'data-act="imp"',"שחזר")}</div></div>`:""}`)}</div>`;
}

/* ---------- shell ---------- */
function Ltabbar(){
 const t=(k,l,p)=>`<button type="button" class="tab${tab===k?" on":""}" data-act="go" data-v="${k}">${LI(p,"s22",2.1)}${l}</button>`;
 return`<nav class="tbn" aria-label="ניווט ראשי"><div class="tbi"><div class="tbg">${t("home","בית",LP.house)}${t("month","סוף חודש",LP.cal)}<div class="fabw"><button type="button" class="fab" data-act="qa-open" aria-label="הוספת הוצאה">${LI(LP.plus,"s28",2.6)}</button></div>${t("salary","משכורת",LP.wallet)}${t("set","הגדרות",LP.set2)}</div></div></nav>`;
}
const Lsheet=()=>`<div class="ov" data-act="qa-close"></div><div class="sht" role="dialog" aria-label="הוצאה חדשה"><div class="grab"></div><div class="shb"><h2 class="stt">הוצאה חדשה</h2>${qaForm()}</div></div>`;
function render(){
 const v={home:vHome,month:vMonth,salary:vSalary,set:vSet}[tab]();
 const th=S.settings.theme||"system",dark=th==="dark"||(th==="system"&&window.matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches);
 document.documentElement.classList.toggle("dark",dark);
 $("#view").innerHTML=`<div class="wrap">${v}</div>${Ltabbar()}${QA.open?Lsheet():""}`;
 setSync();
 requestAnimationFrame(()=>requestAnimationFrame(()=>{document.querySelectorAll("[data-w]").forEach(e=>e.style.width=e.dataset.w);document.querySelectorAll("[data-off]").forEach(e=>e.style.strokeDashoffset=e.dataset.off)}));
 if(QA.open&&QA.focus){QA.focus=false;const a=document.querySelector(".sht [data-qa=amount]");a&&a.focus()}
}
function toast(title,o){
 o=o||{};let h=document.getElementById("toasts");if(!h){h=document.createElement("div");h.id="toasts";document.body.appendChild(h)}
 const el=document.createElement("div");el.className="toast";
 el.innerHTML=`${o.ok?LI(LP.cc,"s18 ti"):""}<div class="grow"><p class="tt">${esc(title)}</p>${o.desc?`<p class="td">${esc(o.desc)}</p>`:""}</div>${o.action?Lbtn("soft","sm",'data-ta="1"',esc(o.action.label)):""}`;
 h.appendChild(el);const kill=()=>{el.style.transition="opacity .2s";el.style.opacity="0";setTimeout(()=>el.remove(),200)};
 const b=el.querySelector("[data-ta]");if(b)b.onclick=()=>{o.action.fn();kill()};setTimeout(kill,o.action?6000:4000);
}
function navHtml(){return""}
setSync=function(){const el=document.getElementById("sync");if(el)el.textContent="הנתונים שמורים בטלפון הזה"};

/* ---------- actions ---------- */
function LdelTx(id){const i=S.tx.findIndex(x=>x.id===id);if(i<0)return null;const t=S.tx[i];if(t.type==="sav"){const g=S.goals.find(g=>g.id===t.gid);if(g){g.saved=Math.max(0,g.saved-t.amt);mark("meta")}}S.tx.splice(i,1);mark("m-"+mk(t.date));return t}
function LrestoreTx(t){if(t.type==="sav"){const g=S.goals.find(g=>g.id===t.gid);if(g){g.saved+=t.amt;mark("meta")}}S.tx.push(t);mark("m-"+mk(t.date));render()}
function LaddExpense(amt,cat,note){
 const date=todayStr(),t={id:uid(),date,type:"exp",amt,cat:cat||"כללי",note:note||""};
 if(cat==="חיסכון"){const g=S.goals.find(x=>x.kind==="em");t.type="sav";t.cat=g?g.name:"חיסכון";if(g){t.gid=g.id;g.saved+=amt;mark("meta")}}
 S.tx.push(t);mark("m-"+mk(date));return t;
}
function LpostNote(){const m=Lcalc(mk(todayStr()));return m.left<0?`חרגת מהתקציב החודשי ב-${Lils(-m.left)}`:m.remToday<0?`עברת את התקציב היומי ב-${Lils(-m.remToday)}. מחר: ${Lils(m.nextDaily)}`:`נשארו ${Lils(m.remToday)} להיום`}
const LaddToast=(t,amt)=>toast("נרשם: "+Lils(amt),{ok:true,desc:(t.note||t.cat)+" · "+LpostNote(),action:{label:"ביטול",fn:()=>{LdelTx(t.id);render()}}});
async function Lbackup(){
 const name="finance-backup-"+todayStr()+".json",txt=JSON.stringify(S);
 try{
  const f=new File([txt],name,{type:"application/json"});
  if(navigator.canShare&&navigator.canShare({files:[f]})){await navigator.share({files:[f],title:name});backupMsg="הגיבוי נשלח לשיתוף";return}
 }catch(e){if(e&&e.name==="AbortError"){backupMsg="הגיבוי בוטל";return}}
 try{const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([txt],{type:"application/json"}));a.download=name;document.body.appendChild(a);a.click();a.remove();backupMsg="הקובץ ירד לתיקיית ההורדות: "+name}catch(e){backupMsg="הגיבוי נכשל"}
}
const Lold=act;
act=async function(a,v,el){
 if(a==="go"){QA.open=false;return Lold(a,v,el)}
 if(a==="qa-open"){QA.open=true;QA.focus=true;render();return}
 if(a==="qa-close"){QA.open=false;render();return}
 if(a==="qa-pick"){QA.cat=v;document.querySelectorAll(".chip").forEach(b=>{const on=b.dataset.v===v;b.classList.toggle("on",on);b.setAttribute("aria-checked",on)});return}
 if(a==="qa-check"){QA.check=num(QA.raw);LrefreshQA();return}
 if(a==="qa-skip"){QA.check=null;LrefreshQA();return}
 if(a==="qa-save"){
  const amt=num(QA.raw);if(amt<=0){const x=document.querySelector("[data-qa=amount]");x&&x.focus();return}
  const t=LaddExpense(amt,QA.cat,(QA.note||"").trim());LaddToast(t,amt);
  QA.raw="";QA.note="";QA.check=null;QA.open=false;render();return}
 if(a==="deltx2"){const t=LdelTx(v);if(t){toast("נמחק",{desc:(t.note||t.cat)+" · "+Lils(t.amt),action:{label:"ביטול",fn:()=>LrestoreTx(t)}});render()}return}
 if(a==="payfixed"){const f=(S.settings.fixed||[]).find(x=>x.cat===v);if(!f)return;LaddExpense(f.amt,f.cat,"קבוע");toast(f.cat+" שולם",{ok:true,desc:Lils(f.amt)});render();return}
 if(a==="sal-fund"){SAL.fund=!SAL.fund;render();return}
 if(a==="sal-save"){
  const c=LsalCalc();if(c.amt<=0)return;const date=todayStr();
  S.tx.push({id:uid(),date,type:"inc",amt:c.amt,cat:"משכורת",note:""});
  const g=S.goals.find(x=>x.kind==="em"),sv=Math.round(c.sav);
  if(SAL.fund&&g&&sv>0){g.saved+=sv;S.tx.push({id:uid(),date,type:"sav",amt:sv,cat:g.name,gid:g.id,note:""});mark("meta")}
  mark("m-"+mk(date));toast("משכורת נרשמה: "+Lils(c.amt),{ok:true,desc:SAL.fund&&sv>0?Lils(sv)+" עברו לקרן החירום":undefined});SAL.raw=null;render();return}
 if(a==="snap-unlock"){if(!SP.raw)return;try{localStorage.setItem("snapPass",SP.raw)}catch(e){}SP.raw="";SNAP.msg="";await loadSnap();render();return}
 if(a==="bal-save"){const n=parseFloat(BAL.raw);if(!isFinite(n)){const x=document.querySelector("[data-bal]");x&&x.focus();return}const td=todayStr();S.settings.bal={amt:n,date:td,seen:S.tx.filter(t=>t.date===td).map(t=>t.id)};mark("meta");BAL.raw="";toast("יתרת העו\"ש עודכנה",{ok:true,desc:(n<0?"−":"")+Lils(n)});render();return}
 if(a==="theme"){S.settings.theme=v;mark("meta");render();return}
 if(a==="addfixed2"){const used=new Set((S.settings.fixed||[]).map(f=>f.cat)),c=CATS.needs.find(x=>!used.has(x))||"אחר";S.settings.fixed=(S.settings.fixed||[]).concat([{cat:c,amt:0}]);mark("meta");render();return}
 if(a==="delfixed2"){S.settings.fixed=(S.settings.fixed||[]).filter((_,i)=>i!==+v);mark("meta");render();return}
 if(a==="toggleio"){SAL.io=!SAL.io;render();return}
 if(a==="drive"){await Lbackup();render();return}
 return Lold(a,v,el);
};

/* ---------- live inputs (no re-render, keeps focus) ---------- */
document.addEventListener("input",e=>{
 const el=e.target,d=el.dataset||{};
 if(d.qa==="amount"){const v=el.value.replace(/[^\d.]/g,"");if(v!==el.value)el.value=v;QA.raw=v;el.style.width=(Math.max(1,v.length)+.6)+"ch";
  if(QA.check!==null){QA.check=null;document.querySelectorAll(".chk").forEach(x=>x.remove())}
  document.querySelectorAll("[data-qa=amount]").forEach(o=>{if(o!==el){o.value=v;o.style.width=el.style.width}});
  document.querySelectorAll("[data-needamt]").forEach(b=>b.disabled=num(v)<=0)}
 else if(d.qa==="note"){QA.note=el.value;document.querySelectorAll("[data-qa=note]").forEach(o=>{if(o!==el)o.value=el.value})}
 else if(d.sal==="raw"){const v=el.value.replace(/[^\d]/g,"");if(v!==el.value)el.value=v;SAL.raw=v;const c=LsalCalc();el.style.width=(Math.max(1,Lfmt(c.amt).length)+.6)+"ch";
  document.querySelectorAll("[data-sv]").forEach(n=>{const k=n.dataset.sv;n.textContent=Lils(k==="fund"?c.sav:c[k])});
  document.querySelectorAll("[data-salbtn]").forEach(b=>b.disabled=c.amt<=0)}
 else if(d.sp){SP.raw=el.value}
 else if(d.gem){const n=num(el.value.replace(/[^\d]/g,""));S.settings.gemel=n;mark("meta")}
 else if(d.bal){const v=el.value.replace(/[^\d.\-]/g,"");if(v!==el.value)el.value=v;BAL.raw=v}
 else if(d.base){const n=num(el.value.replace(/[^\d]/g,""));el.value=String(n||"");if(n>0){S.settings.base=n;mark("meta")}}
 else if(d.bi!==undefined&&d.bf==="amt"){const f=(S.settings.fixed||[])[+d.bi];if(f){const n=num(el.value.replace(/[^\d]/g,""));el.value=String(n||"");f.amt=n;mark("meta");const t=document.getElementById("bt");if(t)t.textContent=Lils((S.settings.fixed||[]).reduce((a,x)=>a+(x.amt||0),0))}}
 else if(d.em){const em=S.goals.find(g=>g.kind==="em");if(em){const n=num(el.value.replace(/[^\d]/g,""));el.value=String(n||"");if(d.em==="target"){em.auto=false;em.target=n}else em.saved=n;mark("meta")}}
});
document.addEventListener("change",e=>{const el=e.target,d=el.dataset||{};
 if(d.bi!==undefined&&d.bf==="cat"){const f=(S.settings.fixed||[])[+d.bi];if(f){f.cat=el.value;mark("meta")}}
 else if(d.file&&el.files&&el.files[0]){const r=new FileReader();r.onload=()=>{const j=document.getElementById("json");if(j)j.value=String(r.result||"")};r.readAsText(el.files[0])}
});
render();
loadSnap();document.addEventListener("visibilitychange",()=>{if(!document.hidden)loadSnap()});
