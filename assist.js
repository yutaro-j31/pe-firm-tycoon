(()=>{
'use strict';
const exact={
  'Deal Room':'案件ルーム','Investment Committee':'投資委員会（IC）','Portfolio':'投資先','Funds / LP':'ファンド / LP','Organization':'組織','Ecosystem':'PE市場','Private Capital Ecosystem':'PE市場','Strategy & Thesis':'戦略 / 投資テーマ',
  'Firm AUM':'運用総額（AUM）','NAV':'未売却価値（NAV）','Avg. Fund IRR':'平均IRR（年率リターン）','AVG. FUND IRR':'平均IRR（年率リターン）','Live Deals':'進行中の案件','Avg. Underwriting Score':'平均審査スコア','In DD / Financing':'DD / 借入交渉中','IC / Signing':'IC / 契約段階',
  'GP Cash':'運用会社の現金','LP Trust':'LPからの信頼','Reputation':'市場での評判','Portfolio Capacity':'投資先の管理余力','Office':'オフィス',
  'Boutique Office':'ブティックオフィス','Midtown Office':'ミッドタウンオフィス','Institutional HQ':'機関投資家向け本社',
  'Commitment':'コミット額','Called Capital':'払込済み資金','Dry Powder':'未投資資金','DPI':'DPI（回収済み倍率）','TVPI':'TVPI（総合倍率）','IRR':'IRR（年率リターン）','Target Size':'目標ファンド規模','Hurdle':'優先利回り','Carry':'成功報酬','GP Commit':'GP自己出資','Status':'状態',
  'Fee Revenue':'管理報酬収入','Carry Distributed':'成功報酬受取','Operating Cost':'運営コスト','Lifetime GP P&L':'累計GP損益',
  'Teaser':'ティーザー','1st Bid':'1次入札','Debt':'借入','Final Bid':'最終入札','Closing':'クロージング',
  'Commercial DD':'商業DD','Financial / QoE':'財務DD / QoE','Legal / Tax DD':'法務・税務DD','Operational DD':'業務DD',
  'Transaction Overview':'取引概要','Due Diligence':'買収前調査（DD）','Debt Financing':'借入条件','Returns Underwriting':'リターン試算','Sources & Uses':'資金調達と使途',
  'Revenue':'売上高','Reported EBITDA':'報告EBITDA','Adjusted EBITDA':'調整後EBITDA','Seller Guide':'売り手希望','Current Bid':'現在の入札','Competition':'競合数','Process Time':'経過期間','Deal Costs':'案件費用','Management Rollover':'経営陣再投資','IC Target IRR':'IC目標IRR','Max Bid @ Target':'目標IRRでの上限','Hold Period':'保有期間',
  'Enterprise Value':'企業価値','Transaction Fees':'取引費用','Financing Fees':'融資手数料','Minimum Cash':'最低現金','Total Uses':'必要資金合計','Sponsor Equity':'ファンド自己資金','SPA Protection':'契約保護度',
  'INVESTING':'投資期間','HARVESTING':'回収期間','PLANNING':'準備中','REALIZED':'運用終了'
};
const sections={
  'FUNDS':'ファンド','PORTFOLIO OVERVIEW':'投資先一覧','INVESTMENT COMMITTEE':'投資委員会','LIVE DEAL PROCESSES':'進行中の買収案件','PIPELINE STATUS':'案件進捗','RECENT ACTIVITY':'最近の動き','INSTITUTIONAL FUND MANAGEMENT':'ファンド運営','MULTI-DIMENSIONAL REPUTATION':'相手別の評判','RELATIONSHIP NETWORK':'人脈ネットワーク','LP RELATIONSHIPS':'LPとの関係','PE LEAGUE TABLE':'PE業界ランキング','INVESTMENT THESES':'投資テーマ','STRATEGY EVOLUTION':'運用戦略の拡張','GP ECONOMICS & PARTNER POLITICS':'GP会社の経営とパートナー'
};
const tape={'Base Rate':'基準金利','Credit Spread':'信用スプレッド','Credit':'信用スプレッド','Deal Heat':'案件過熱度','Active Thesis':'投資テーマ','Strategy':'戦略','Auctions':'入札案件','Proprietary / Limited':'相対・限定案件','Banker Rep':'バンカー評判','Seller Rep':'売り手評判','Thesis Knowledge':'テーマ知識','Public Multiple':'上場倍率','Recession Risk':'景気後退リスク'};
const buttonRules=[
  [/^Deal Book$/,'案件メモ'],[/^Pass$/,'見送り'],[/Review Teaser/g,'ティーザー確認'],[/Sign NDA/g,'秘密保持契約（NDA）'],[/Open CIM \+ Data Room/g,'詳細資料（CIM）を確認'],
  [/Disciplined/g,'規律重視'],[/Base Bid/g,'標準入札'],[/Aggressive/g,'強気入札'],[/Commercial DD/g,'商業DD'],[/Financial \/ QoE/g,'財務DD / QoE'],[/Legal \/ Tax DD/g,'法務・税務DD'],[/Operational DD/g,'業務DD'],
  [/Launch Debt Financing/g,'借入条件を集める'],[/Select Terms/g,'この融資条件を選ぶ'],[/Conservative/g,'保守的'],[/Max Senior/g,'借入最大化'],[/Structured/g,'複合調達'],
  [/Submit Full IC Paper/g,'投資委員会（IC）へ上程'],[/Approve Max Bid & Final Bid Authority/g,'承認：最終入札へ'],[/Reject \/ Kill Deal/g,'否決：案件終了'],[/Open Full Deal Book/g,'詳細メモを開く'],
  [/IC Max/g,'IC上限'],[/Seller -0\.15x/g,'売り手希望より低く'],[/Balanced/g,'バランス'],[/Win the Deal/g,'落札優先'],[/ABOVE IC MAX/g,'IC上限超過'],
  [/Buyer-Protective/g,'買い手保護重視'],[/Speed \/ Seller-Friendly/g,'スピード重視'],[/Trade Sale/g,'事業会社へ売却'],[/Secondary Exit/g,'PE等へ二次売却'],[/Capital Call/g,'出資請求'],[/Expand Office/g,'オフィス拡張'],
  [/(\d+)w\b/g,'$1週']
];
function replaceLeading(el,map){const n=[...el.childNodes].find(x=>x.nodeType===3&&x.nodeValue.trim());if(!n)return;const raw=n.nodeValue,key=raw.trim();if(map[key])n.nodeValue=raw.replace(key,map[key]);}
let running=false;
function localize(){
  if(running)return;running=true;
  try{
    document.querySelectorAll('.page-title h2,.stat span,.stat small,.stat b,.firm-strip .label,.fund-meta span,.mini span,.memo-section h3,.memo-grid span,.su-row span,.stage-track span,.dd-item span,.dd-item b').forEach(el=>{const t=el.textContent.trim();if(exact[t])el.textContent=exact[t]});
    document.querySelectorAll('.section-head h2').forEach(el=>replaceLeading(el,sections));
    document.querySelectorAll('.market-tape span').forEach(el=>replaceLeading(el,tape));
    document.querySelectorAll('.status').forEach(el=>{const t=el.textContent.trim().toUpperCase();if(exact[t])el.textContent=exact[t]});
    document.querySelectorAll('button').forEach(btn=>{if(['glossaryBtn','glossaryClose','modalClose'].includes(btn.id))return;let n=btn.textContent;for(const [re,to] of buttonRules)n=n.replace(re,to);if(n!==btn.textContent)btn.textContent=n});
  } finally {running=false;}
}
let scheduled=false;
function schedule(){if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{scheduled=false;localize()});}
const observer=new MutationObserver(schedule);
function start(){
  const gm=document.getElementById('glossaryModal'),gb=document.getElementById('glossaryBtn'),gc=document.getElementById('glossaryClose');
  gb?.addEventListener('click',()=>gm?.classList.add('show'));
  gc?.addEventListener('click',()=>gm?.classList.remove('show'));
  gm?.addEventListener('click',e=>{if(e.target===gm)gm.classList.remove('show')});
  observer.observe(document.body,{childList:true,subtree:true,characterData:true});
  localize();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
