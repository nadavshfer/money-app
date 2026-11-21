/* UI layer. Loaded after index.html's script: replaces the views, keeps all data logic. Standalone (phone-only storage). */
(function(){var o=document.querySelector("head style");if(o&&o.id!=="lui")o.media="not all"})();


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
const Lneg=n=>`<bdi dir="ltr">−${Lfmt(n)}</bdi> ₪`;
const Lsn=n=>n<0?Lneg(n):Lils(n);
const b64d=x=>Uint8Array.from(atob(x),c=>c.charCodeAt(0));
async function snapDecrypt(f,pass){const km=await crypto.subtle.importKey("raw",new TextEncoder().encode(pass),"PBKDF2",false,["deriveKey"]);const k=await crypto.subtle.deriveKey({name:"PBKDF2",salt:b64d(f.salt),iterations:f.iter,hash:"SHA-256"},km,{name:"AES-GCM",length:256},false,["decrypt"]);return JSON.parse(new TextDecoder().decode(await crypto.subtle.decrypt({name:"AES-GCM",iv:b64d(f.iv)},k,b64d(f.ct))))}
async function loadSnap(){
 let pass="",cached=null;try{pass=localStorage.getItem("snapPass")||"";cached=JSON.parse(localStorage.getItem("snapData")||"null")}catch(e){}
 if(cached){SNAP.d=cached;SNAP.st="ok";histRecord()}
 try{
  const r=await fetch("data/snapshot.enc.json",{cache:"no-store"});SNAP.offline=false;
  if(r.status===404){if(!cached)SNAP.st="none"}
  else if(!r.ok)throw new Error("http")
  else if(!pass){if(!cached)SNAP.st="locked"}
  else{try{SNAP.d=await snapDecrypt(await r.json(),pass);SNAP.st="ok";SNAP.msg="";histRecord();try{localStorage.setItem("snapData",JSON.stringify(SNAP.d))}catch(e){}}
   catch(e){try{localStorage.removeItem("snapPass")}catch(_){}SNAP.msg="הסיסמה לא נכונה";if(!cached)SNAP.st="locked"}}
 }catch(e){SNAP.offline=true}
 if((tab==="home"||tab==="sum")&&!QA.open&&document.activeElement.tagName!=="INPUT")render();
}
function snapCalc(){
 const d=SNAP.d,sum=(a,f)=>(a||[]).reduce((x,y)=>x+(f(y)||0),0);
 const bal=sum(d.accounts,a=>a.balance),fm=d.futureMonthEnd||[],fn=d.futureNextMonthEnd||d.futureMonthEnd||[];
 const exp=a=>(a||[]).filter(t=>!t.inc);
 const itemized=sum(fn,x=>sum(exp(x.txs),t=>t.a)),fixed=sum(fm,x=>sum(exp(x.fixedTxs),t=>t.a)),cards=sum(fn,x=>sum(x.cards,c=>c));
 const billed=Math.max(itemized,cards),extra=Math.max(0,cards-itemized),T0=targets(),savT=S.settings.savT!=null?S.settings.savT:Math.round(T0.sav),sd=S.settings.sd,done=(sd&&sd.k===mk(todayStr()))?sd.amt:0,rsv=Math.max(0,savT-done),free=bal-billed-fixed-rsv,now=new Date(),dim=new Date(now.getFullYear(),now.getMonth()+1,0).getDate(),dl=dim-now.getDate()+1;
 const by={};fn.forEach(x=>exp(x.txs).forEach(t=>{by[t.d]=(by[t.d]||0)+t.a}));
 const up=Object.keys(by).sort().map(k=>({d:k,a:by[k]}));
 const asOf=(d.accounts||[]).map(a=>a.lastUpdated).filter(Boolean).sort()[0]||d.generatedAt;
 const age=(Date.now()-new Date(d.generatedAt))/36e5;
 return{bal,billed,extra,fixed,cards,rsv,savT,done,free,perDay:Math.max(0,free)/dl,dl,up,asOf,age,
  sav:sum(d.savings,x=>x.balance),inv:sum(d.investments,x=>x.value),partial:d.status!=="ok",errs:d.errors||[]};
}
const LdateFmt=iso=>{const x=new Date(iso);return isNaN(x)?"":x.toLocaleString("he-IL",{day:"numeric",month:"numeric",hour:"2-digit",minute:"2-digit"})};
/* ---------- freshness: how old is what we are showing ---------- */
const HRS=36e5;
const ageH=iso=>{const t=new Date(iso).getTime();return isNaN(t)?Infinity:Math.max(0,(Date.now()-t)/HRS)};
function relAge(h){
 if(!isFinite(h))return"לא ידוע";
 if(h<1){const m=Math.max(1,Math.round(h*60));return m===1?"לפני דקה":"לפני "+m+" דקות"}
 if(h<24){const n=Math.round(h);return n===1?"לפני שעה":n===2?"לפני שעתיים":"לפני "+n+" שעות"}
 const d=Math.floor(h/24);return d===1?"אתמול":d===2?"לפני יומיים":"לפני "+d+" ימים";
}
const FRL={ok:"מעודכן",warn:"אולי לא מעודכן",bad:"לא מעודכן"};
function freshState(){
 const d=SNAP.d,h=ageH(d.generatedAt);
 let lvl=h<=27?"ok":h<=51?"warn":"bad";
 if(lvl==="ok"&&d.status==="partial")lvl="warn";
 return{lvl,h,rel:relAge(h),at:LdateFmt(d.generatedAt),partial:d.status==="partial",errs:d.errors||[],offline:!!SNAP.offline};
}
function freshBanner(f){
 if(f.lvl==="ok"&&!f.offline)return"";
 let title,body;
 if(f.h>51){title="הנתונים לא מעודכנים";body=`הסנכרון האחרון מרייזאפ היה ב-${f.at} (${f.rel}). הסכומים כאן לא משקפים את הבנק עכשיו.`}
 else if(f.h>27){title="ייתכן שהנתונים לא מעודכנים";body=`הסנכרון האחרון היה ב-${f.at} (${f.rel}). אם הסנכרון של הערב לא רץ, הסכומים עשויים להיות ישנים.`}
 else if(f.partial){title="חלק מהנתונים לא נקראו";body=esc(f.errs.join("; "))||"הסנכרון האחרון הסתיים חלקית."}
 else{title="אין חיבור כרגע";body=`מוצגים הנתונים השמורים בטלפון, מ-${f.at}.`}
 return`<div class="warnb${f.lvl==="bad"?" bad":""}" role="status"><b>${title}</b>${body}</div>`;
}
const ymdLocal=iso=>{const x=new Date(iso);return x.getFullYear()+"-"+String(x.getMonth()+1).padStart(2,"0")+"-"+String(x.getDate()).padStart(2,"0")};
function histRecord(){
 try{
  const d=SNAP.d;if(!d)return;const c=snapCalc();let h=JSON.parse(localStorage.getItem("snapHist")||"[]");
  if(h.some(x=>x.g===d.generatedAt))return;
  h.push({g:d.generatedAt,d:ymdLocal(d.generatedAt),bal:Math.round(c.bal),free:Math.round(c.free)});
  h.sort((a,b)=>a.g<b.g?-1:1);localStorage.setItem("snapHist",JSON.stringify(h.slice(-120)));
 }catch(e){}
}
function histInfo(c){
 try{
  const h=JSON.parse(localStorage.getItem("snapHist")||"[]"),k=mk(todayStr()),m=h.filter(x=>x.d.slice(0,7)===k);
  if(m.length<2)return{delta:null,since:null};
  return{delta:c.bal-m[0].bal,since:m[0].d};
 }catch(e){return{delta:null,since:null}}
}
const Lmon=new Intl.DateTimeFormat("he-IL",{month:"short"});
const dmOf=iso=>({d:iso.slice(8),m:Lmon.format(new Date(+iso.slice(0,4),+iso.slice(5,7)-1,1))});
function moneyParts(c){
 const em=S.goals.find(g=>g.kind==="em"),gem=S.settings.gemel==null?175000:S.settings.gemel,emS=em?em.saved:0;
 return{em,gem,emS,total:c.bal+c.sav+c.inv+emS+gem};
}
const Nsec=(title,aside,body,cls="")=>`<section class="sec ${cls}">${title||aside?`<header class="sh"><h2>${title||""}</h2>${aside?`<span class="aside">${aside}</span>`:""}</header>`:""}${body}</section>`;

function heroHtml(c,f){
 const stale=f.lvl!=="ok",v=Math.round(c.perDay),s=Lfmt(v),cls=s.length<=3?"":s.length<=5?"m":"s";
 const now=new Date(),nd=new Date(now.getFullYear(),now.getMonth()+1,0).getDate(),t=now.getDate();
 let ticks="";for(let i=1;i<=nd;i++)ticks+=`<i class="tk${i<t?" past":i===t?" now":""}" style="--i:${i}"></i>`;
 return`<section class="hero${stale?" stale":""}" aria-label="כמה אפשר להוציא היום"><p class="hero-k">${c.free<=0?"אין פנוי אחרי החיובים והחיסכון":"אפשר להוציא היום"}</p>
 <div class="hero-n"><span class="hero-v ${cls}" data-count="${v}">${s}</span><span class="hero-c">₪</span></div>
 <div class="ruler" role="img" aria-label="היום ${t} מתוך ${nd} ימי החודש">${ticks}</div>
 <div class="ruler-l"><span>1</span><span>עוד ${c.dl} ימים</span><span>${nd}</span></div>
 ${stale?`<p class="hero-w">לפי נתונים מ-${f.at}, לא מהבנק עכשיו</p>`:""}</section>`;
}
function snapCards(){
 if(SNAP.st==="ok"&&SNAP.d){
  const c=snapCalc(),f=freshState(),M=moneyParts(c);
  const sign=n=>n<0?Lneg(n):Lfmt(n)+" ₪";
  const ledger=`<div class="ledger"><p><span>עו"ש</span><b>${sign(c.bal)}</b></p><p><span>חיובי אשראי וקבועות</span><b>${Lneg(c.billed+c.fixed)}</b></p>${c.rsv>0?`<p><span>חיסכון שנשאר להפריש</span><b>${Lneg(c.rsv)}</b></p>`:""}<p class="sum${c.free<0?" neg":""}"><span>פנוי עד סוף החודש</span><b>${sign(c.free)}</b></p></div>`;
  const rows=c.up.map(u=>{const x=dmOf(u.d);return`<li class="r"><div class="dn tn">${+x.d}<small>${x.m}</small></div><div class="grow"></div><b class="big">${Lils(u.a)}</b></li>`}).join("")
   +(c.extra>=1?`<li class="r"><div class="grow"><p class="t1">חיובי כרטיס שטרם פורטו</p></div><b class="big">${Lils(c.extra)}</b></li>`:"");
  const up=Nsec("חיובים קרובים",c.up.length?"עד סוף החודש הבא":"",rows?`<ul class="lst">${rows}</ul>`:`<p class="calm">אין חיובים צפויים.</p>`,"in");
  const segs=[{l:'עו"ש',n:"זמין",v:c.bal,col:"#8C9BFF"},{l:"פיקדונות וחיסכון",n:"בבנק",v:c.sav,col:"#FFC93C"},{l:"השקעות",n:"בבנק",v:c.inv,col:"#4FD6A8"},{l:"קרן חירום",n:"מהאפליקציה",v:M.emS,col:"#FF8A75"},{l:"גמל להשקעה",n:"לא זמין להוצאה",v:M.gem,col:"#ECECE6"}].filter(x=>x.v>0);
  const sum=segs.reduce((a,x)=>a+x.v,0)||1;
  const vault=`<section class="vault"><h2>איפה הכסף שלי</h2><p class="tot tn">${Lfmt(M.total)}<span>₪</span></p>
   <div class="stack-bar" aria-hidden="true">${segs.map((x,i)=>`<i style="width:${(x.v/sum*100).toFixed(2)}%;background:${x.col};--k:${i}"></i>`).join("")}</div>
   <ul class="lg">${segs.map(x=>`<li><span class="sw" style="background:${x.col}"></span><span class="n">${x.l}<small>${x.n}</small></span><b>${Lils(x.v)}</b></li>`).join("")}</ul>
   <div class="mt4"><label class="fl">עדכון גמל (ידני)</label>${Lnf('data-gem="1"',M.gem,"גמל להשקעה")}</div></section>`;
  const svc=Nsec("חיסכון החודש",`<span class="big">${Lils(c.savT)}</span>`,`<p class="note" style="margin:0 0 12px">הסכום שעוד לא הופקד מנוכה מ"אפשר להוציא היום".</p><label class="fl">הפקדתי החודש</label>${Lnf('data-sd="1"',c.done,"הפקדתי החודש")}`,"in");
  const dot=l=>`<span class="fdot ${l}"></span>`;
  const accs=(SNAP.d.accounts||[]).map(a=>{const h=ageH(a.lastUpdated),l=!isFinite(h)?"warn":h<=36?"ok":h<=72?"warn":"bad";
   return`<li class="fr">${dot(l)}<div class="grow"><p class="t1">${esc(a.name)}</p><p class="t2">${a.lastUpdated?"נכון ל-"+LdateFmt(a.lastUpdated)+" · "+relAge(h):"אין תאריך עדכון"}</p></div></li>`}).join("");
  const fresh=`<section class="sec" id="fresh"><header class="sh"><h2>מצב הנתונים</h2><span class="aside">${FRL[f.lvl]}</span></header><ul class="lst"><li class="fr">${dot(f.lvl)}<div class="grow"><p class="t1">סנכרון מרייזאפ</p><p class="t2">האחרון ${f.at} · ${f.rel}</p></div></li>${accs}</ul>${f.partial?`<p class="note">חלק מהנתונים לא נקראו: ${esc(f.errs.join("; "))}</p>`:""}<p class="note">הסנכרון רץ פעם ביום בערב. "מעודכן" אומר שהסנכרון האחרון היה בתוך כ-27 שעות.</p></section>`;
  return ledger+up+vault+svc+fresh;
 }
 if(SNAP.st==="locked")return Nsec("סנכרון רייזאפ","",`<p class="note" style="margin:0 0 4px">יש נתונים מוצפנים מרייזאפ. הכנס את סיסמת הסנכרון פעם אחת במכשיר הזה.</p>${SNAP.msg?`<p class="note" style="color:var(--coral)">${esc(SNAP.msg)}</p>`:""}<div class="brow mt3"><input class="inp" type="password" data-sp="1" aria-label="סיסמת סנכרון" placeholder="סיסמת סנכרון" value="${esc(SP.raw)}">${Lbtn("primary","md",'data-act="snap-unlock"',"פתח")}</div>`);
 return Nsec("סנכרון רייזאפ","",`<p class="note" style="margin:0">${SNAP.st==="none"?"עדיין אין נתונים. הסנכרון הראשון ירוץ בערב.":"טוען נתונים מרייזאפ…"}</p>`);
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
 const live=SNAP.st==="ok"&&SNAP.d,SC=live?snapCalc():null,f=live?freshState():null;
 const dl=new Intl.DateTimeFormat("he-IL",{weekday:"long",day:"numeric",month:"long"}).format(new Date());
 const chip=f?`<button type="button" class="fchip ${f.lvl}" data-act="fresh"><i></i>${FRL[f.lvl]} · ${f.rel}</button>`:"";
 return`<header class="top"><p class="date">${dl}</p>${chip}</header>${f?freshBanner(f):""}${SC?heroHtml(SC,f):""}${snapCards()}`;
}
function vSum(){
 const live=SNAP.st==="ok"&&SNAP.d,mn=new Intl.DateTimeFormat("he-IL",{month:"long"}).format(new Date());
 if(!live)return`<header class="top"><p class="date">סיכום חודשי</p></header><div class="mh"><h1>${mn}</h1></div><p class="calm">הסיכום נבנה מנתוני רייזאפ. הוא יופיע אחרי הסנכרון הראשון.</p>`;
 const c=snapCalc(),f=freshState(),H=histInfo(c),M=moneyParts(c),td=todayStr(),day=new Date().getDate(),mkey=mk(td);
 const dn=S.settings.sumDone||{},isDone=id=>!!dn[mkey+":"+id],fd=iso=>iso.slice(8)+"/"+iso.slice(5,7);
 const happened=[],todo=[],missed=[];
 /* happened */
 let balS="ההשוואה לתחילת החודש מתחילה להיצבר מהיום";
 if(H.delta!==null&&Math.abs(H.delta)>=1)balS=`${H.delta<0?"ירד":"עלה"} ב-<b>${Lils(Math.abs(H.delta))}</b> מאז ${fd(H.since)}`;
 else if(H.delta!==null)balS=`לא השתנה מאז ${fd(H.since)}`;
 happened.push({id:"bal",t:`העו"ש עומד על <b>${Lsn(c.bal)}</b>`,s:balS});
 happened.push({id:"bill",t:`חיובי אשראי וחיובים צפויים: <b>${Lils(c.billed)}</b>`,s:`הוצאות קבועות שעוד יירדו החודש: ${Lils(c.fixed)}`});
 let big=null;((SNAP.d.futureNextMonthEnd||[]).forEach(x=>(x.txs||[]).forEach(t=>{if(!t.inc&&(!big||t.a>big.a)&&t.d>=td)big=t})));
 if(big)happened.push({id:"big",t:`החיוב הגדול הקרוב: ${esc(big.n||"חיוב")} <b>${Lils(big.a)}</b>`,s:`צפוי ב-${fd(big.d)}`});
 happened.push({id:"all",t:`הכסף שלי בסך הכול: <b>${Lils(M.total)}</b>`,s:M.em&&goalTarget(M.em)>0?`קרן החירום ב-${Math.round(M.emS/goalTarget(M.em)*100)}% מהיעד`:""});
 /* to do / missed */
 const due=S.settings.savDay||10;
 if(c.savT>0&&c.rsv>0){
  if(day>due)missed.push({id:"save",t:`ההפקדה לחיסכון לא בוצעה: חסרים <b>${Lils(c.rsv)}</b>`,s:`מועד היעד היה ה-${due} לחודש. אחרי ההפקדה עדכן את "הפקדתי החודש" במסך הבית`});
  else todo.push({id:"save",t:`להפריש <b>${Lils(c.rsv)}</b> לחיסכון`,s:`יעד חודשי ${Lils(c.savT)}${c.done?", כבר הופקדו "+Lils(c.done):""}. עד ה-${due} לחודש`});
 }else if(c.savT>0)happened.push({id:"saved",t:`הופקדו <b>${Lils(c.done)}</b> לחיסכון, היעד החודשי הושג`,s:""});
 const ups=c.up.filter(u=>u.d>=td);let run=0,short=null;
 for(const u of ups){run+=u.a;if(run>c.bal){short={d:u.d,run};break}}
 if(short)todo.push({id:"short",t:`החיובים עד ${fd(short.d)} (<b>${Lils(short.run)}</b>) גדולים מהעו"ש`,s:`צריך להעביר לפחות ${Lils(short.run-c.bal)} לפני כן`});
 else if(ups[0]){const dd=Math.round((new Date(ups[0].d)-new Date(td))/864e5);if(dd<=7)todo.push({id:"next"+ups[0].d,t:`חיוב של <b>${Lils(ups[0].a)}</b> ב-${fd(ups[0].d)}`,s:"לוודא שיש כיסוי בעו\"ש"})}
 if(c.free<0)todo.push({id:"nofree",t:`אין פנוי אחרי החיובים והחיסכון: חסרים <b>${Lils(-c.free)}</b>`,s:"כדאי לדחות הוצאות או להקטין את יעד החיסכון החודש"});
 const gAt=S.settings.gemelAt,gD=gAt?(Date.now()-new Date(gAt))/864e5:Infinity;
 if(!gAt)todo.push({id:"gem",t:"לעדכן את סכום הגמל",s:"עדיין אין תאריך עדכון. העדכון נעשה במסך הבית, בקטע איפה הכסף שלי"});
 else if(gD>30)todo.push({id:"gem",t:"לעדכן את סכום הגמל",s:`עודכן לפני ${Math.floor(gD)} ימים`});
 if(f.lvl!=="ok")missed.push({id:"sync",t:`הסנכרון מרייזאפ לא התעדכן: האחרון היה ב-${f.at}`,s:`${f.rel}. הסכומים באפליקציה עשויים להיות ישנים`});
 if(f.partial)missed.push({id:"part",t:"חלק מהנתונים לא נקראו בסנכרון האחרון",s:esc(f.errs.join("; "))});
 const open=todo.filter(x=>!isDone(x.id)).length,miss=missed.filter(x=>!isDone(x.id)).length;
 const one=(n,s,p)=>n===1?s:p;
 const head=`נשארו <b>${Lils(c.perDay)}</b> ליום עד סוף החודש. ${open?one(open,"דבר אחד לעשות",open+" דברים לעשות"):"אין משימות פתוחות"}${miss?", ו"+one(miss,"אחד שפוספס","-"+miss+" שפוספסו"):""}.`;
 const li=(x,k)=>{const d=isDone(x.id);return`<li class="it${d?" done":""}">${k==="h"?`<span class="mk i2">${LI(LP.check,"s16",3)}</span>`:`<button type="button" class="ck rp" data-act="sumdone" data-v="${esc(x.id)}" aria-pressed="${d}" aria-label="סימון כבוצע">${LI(LP.check,"s16",3)}</button>`}<div class="tx">${x.t}${x.s?`<small>${x.s}</small>`:""}</div></li>`};
 const blk=(t,n,list,k,cls,empty)=>`<section class="blk ${cls}"><header class="sh"><h2>${t}<small>${n}</small></h2></header>${list.length?`<ul>${list.map(x=>li(x,k)).join("")}</ul>`:`<p class="calm">${empty}</p>`}</section>`;
 return`<header class="top"><p class="date">סיכום חודשי</p><button type="button" class="fchip ${f.lvl}" data-act="fresh"><i></i>${FRL[f.lvl]} · ${f.rel}</button></header>
 ${freshBanner(f)}<div class="mh"><h1>${mn}</h1><p>${head}</p></div>
 ${blk("מה קרה",happened.length,happened,"h","","")}
 ${blk("מה לעשות",open?open+" פתוחים":"",todo,"t","in","אין כרגע שום דבר לעשות.")}
 ${blk("מה לא עשיתי",miss?miss+" פתוחים":"",missed,"m","","לא פוספס שום דבר החודש.")}`;
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
 const s=S.settings,em=S.goals.find(g=>g.kind==="em"),th=s.theme||"system";
 const sec=(t,b)=>`<section class="set-sec"><header class="sh"><h2>${t}</h2></header>${b}</section>`;
 return`<header class="top"><p class="date">הכסף של נדב</p></header><div class="mh"><h1>הגדרות</h1></div>
 ${sec("חיסכון חודשי",`<label class="fl">יעד חיסכון חודשי</label>${Lnf('data-sav="1"',s.savT!=null?s.savT:Math.round(targets().sav),"יעד חיסכון חודשי")}<label class="fl mt3">יום בחודש להפקדה</label><div class="nf"><input class="inp" inputmode="numeric" aria-label="יום בחודש להפקדה" value="${s.savDay||10}" data-savday="1"></div><p class="note">הסכום שעוד לא הופקד מנוכה מ"אפשר להוציא היום". 0 מבטל את הניכוי. אחרי היום שנקבע, הפקדה חסרה מופיעה בסיכום תחת "מה לא עשיתי".</p>`)}
 ${sec("קרן חירום",`<div class="g2"><div><label class="fl">יעד</label>${Lnf('data-em="target"',em?Math.round(goalTarget(em)):0,"יעד")}</div><div><label class="fl">יש כרגע</label>${Lnf('data-em="saved"',em?em.saved:0,"יש כרגע")}</div></div>`)}
 ${sec("מראה",Lseg("מראה",th,[{v:"system",l:"אוטומטי"},{v:"light",l:"בהיר"},{v:"dark",l:"כהה"}],"theme"))}
 ${sec("גיבוי",`<p class="note" style="margin:0 0 12px">הנתונים נשמרים בטלפון בלבד. גבה מדי פעם: נפתח תפריט השיתוף ואפשר לשמור את הקובץ בדרייב.</p><div class="g2">${Lbtn("soft","md",'data-act="drive"',LI(LP.dl,"s16")+" גיבוי לקובץ")}${Lbtn("muted","md",'data-act="toggleio"',LI(LP.ul,"s16")+" ייצוא / ייבוא")}</div><p class="note" id="sync"></p>${backupMsg?`<p class="note">${esc(backupMsg)}</p>`:""}${SAL.io?`<div class="mt3"><input type="file" accept=".json,application/json" data-file="1" class="inp" style="padding-top:14px"><textarea id="json" class="inp mt2" placeholder="או הדבק JSON לשחזור"></textarea><div class="g2 mt2">${Lbtn("muted","md",'data-act="exp"',"הצג נתונים")}${Lbtn("soft","md",'data-act="imp"',"שחזר")}</div></div>`:""}`)}`;
}

/* ---------- shell ---------- */
LP.sum='<path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/>';
function Ltabbar(){
 const t=(k,l,p)=>`<button type="button" class="tab${tab===k?" on":""}" data-act="go" data-v="${k}" aria-label="${l}"${tab===k?' aria-current="page"':""}>${LI(p,"s22",2.1)}<span class="tl">${l}</span></button>`;
 return`<nav class="dock" aria-label="ניווט ראשי">${t("home","בית",LP.house)}${t("sum","סיכום",LP.sum)}${t("set","הגדרות",LP.set2)}</nav>`;
}
const Lsheet=()=>"";
let PLAY=true;
const REDUCED=()=>window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
function countUp(el,play){
 const to=+el.dataset.count||0;
 if(!play||REDUCED()||to<=0){el.textContent=Lfmt(to);return}
 el.textContent="0";const t0=performance.now()+380,dur=1150;
 const step=n=>{const p=Math.min(1,Math.max(0,(n-t0)/dur)),e=1-Math.pow(2,-10*p);el.textContent=Lfmt(Math.round(to*(p>=1?1:e)));if(p<1&&el.isConnected)requestAnimationFrame(step)};
 requestAnimationFrame(step);
}
function render(){
 const v=({home:vHome,sum:vSum,set:vSet}[tab]||vHome)();
 const th=S.settings.theme||"system",dark=th==="dark"||(th==="system"&&window.matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches);
 document.documentElement.classList.toggle("dark",dark);
 const live=SNAP.st==="ok"&&SNAP.d,play=PLAY&&(tab==="set"||live);
 $("#view").innerHTML=`<div class="wrap${play?" enter":""}">${v}</div>${Ltabbar()}`;
 document.querySelectorAll("[data-count]").forEach(el=>countUp(el,play));
 if(play)PLAY=false;
 setSync();
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
 if(a==="go"){QA.open=false;PLAY=true;
  const go=()=>Lold(a,v,el);
  if(document.startViewTransition&&!REDUCED()&&el&&el.getBoundingClientRect){const r=el.getBoundingClientRect(),R=document.documentElement.style;R.setProperty("--vx",(r.left+r.width/2)+"px");R.setProperty("--vy",(r.top+r.height/2)+"px");document.startViewTransition(()=>{go()})}
  else go();
  return}
 if(a==="fresh"){const e=document.getElementById("fresh");if(e)e.scrollIntoView({behavior:"smooth",block:"start"});else if(tab!=="home"){tab="home";PLAY=false;render();setTimeout(()=>{const x=document.getElementById("fresh");x&&x.scrollIntoView({behavior:"smooth",block:"start"})},60)}return}
 if(a==="sumdone"){const k=mk(todayStr())+":"+v,m=S.settings.sumDone=S.settings.sumDone||{};if(m[k])delete m[k];else m[k]=1;mark("meta");const y=scrollY;render();scrollTo(0,y);return}
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
 else if(d.sd){const n=num(el.value.replace(/[^\d]/g,""));S.settings.sd={k:mk(todayStr()),amt:n};mark("meta")}
 else if(d.sav){const n=num(el.value.replace(/[^\d]/g,""));S.settings.savT=n;mark("meta")}
 else if(d.gem){const n=num(el.value.replace(/[^\d]/g,""));S.settings.gemel=n;S.settings.gemelAt=new Date().toISOString();mark("meta")}
 else if(d.savday!==undefined){const n=num(el.value.replace(/[^\d]/g,""));if(n>=1&&n<=28){S.settings.savDay=n;mark("meta")}}
 else if(d.bal){const v=el.value.replace(/[^\d.\-]/g,"");if(v!==el.value)el.value=v;BAL.raw=v}
 else if(d.base){const n=num(el.value.replace(/[^\d]/g,""));el.value=String(n||"");if(n>0){S.settings.base=n;mark("meta")}}
 else if(d.bi!==undefined&&d.bf==="amt"){const f=(S.settings.fixed||[])[+d.bi];if(f){const n=num(el.value.replace(/[^\d]/g,""));el.value=String(n||"");f.amt=n;mark("meta");const t=document.getElementById("bt");if(t)t.textContent=Lils((S.settings.fixed||[]).reduce((a,x)=>a+(x.amt||0),0))}}
 else if(d.em){const em=S.goals.find(g=>g.kind==="em");if(em){const n=num(el.value.replace(/[^\d]/g,""));el.value=String(n||"");if(d.em==="target"){em.auto=false;em.target=n}else em.saved=n;mark("meta")}}
});
document.addEventListener("change",e=>{const el=e.target,d=el.dataset||{};
 if(d.bi!==undefined&&d.bf==="cat"){const f=(S.settings.fixed||[])[+d.bi];if(f){f.cat=el.value;mark("meta")}}
 else if(d.file&&el.files&&el.files[0]){const r=new FileReader();r.onload=()=>{const j=document.getElementById("json");if(j)j.value=String(r.result||"")};r.readAsText(el.files[0])}
});
document.addEventListener("change",e=>{const d=e.target.dataset||{};if(d.sd!==undefined||d.sav!==undefined)render()});
render();
loadSnap();document.addEventListener("visibilitychange",()=>{if(!document.hidden)loadSnap()});

/* ---------- touch feedback: ripple + tiny haptic ---------- */
document.addEventListener("pointerdown",e=>{
 const t=e.target.closest&&e.target.closest(".rp,.btn,.tab,.sg,.chip");if(!t||t.disabled)return;
 if(!REDUCED()){const r=t.getBoundingClientRect(),z=Math.max(r.width,r.height)*2.2,i=document.createElement("i");i.className="rpl";
  i.style.cssText=`width:${z}px;height:${z}px;left:${e.clientX-r.left-z/2}px;top:${e.clientY-r.top-z/2}px`;t.appendChild(i);i.addEventListener("animationend",()=>i.remove())}
 try{navigator.vibrate&&t.closest("[data-act]")&&navigator.vibrate(6)}catch(_){}
},{passive:true});
