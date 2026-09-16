(()=>{
'use strict';
const MODE_KEY='pe_firm_display_mode_v1';
const VALID_MODES=new Set(['beginner','standard','pro']);
function readMode(){try{const m=localStorage.getItem(MODE_KEY);return VALID_MODES.has(m)?m:'beginner'}catch(_){return 'beginner'}}
const mode=readMode();
window.__PE_DISPLAY_MODE=mode;

const navLabels={
 beginner:{dashboard:'ホーム',deals:'案件',ic:'投資会議',funds:'ファンド',portfolio:'投資先',ecosystem:'市場',org:'組織',strategy:'戦略',records:'実績'},
 standard:{dashboard:'ホーム',deals:'案件',ic:'投資委員会',funds:'ファンド',portfolio:'投資先',ecosystem:'市場',org:'組織',strategy:'戦略',records:'実績'},
 pro:{dashboard:'Dashboard',deals:'Deal Room',ic:'IC',funds:'Funds',portfolio:'Portfolio',ecosystem:'Ecosystem',org:'Org',strategy:'Strategy',records:'Records'}
};
const modeCopy={
 beginner:{title:'初心者モード',desc:'やさしい日本語で、選択すると何が起きるかも表示します。'},
 standard:{title:'標準モード',desc:'日本語＋PE実務用語で、用語を覚えながら遊べます。'},
 pro:{title:'プロモード',desc:'英語・略語中心の実務表記。判断ガイドは表示しません。'}
};

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
const beginnerExact={
  '運用総額（AUM）':'運用している総資金','未売却価値（NAV）':'まだ売っていない投資先の価値','平均IRR（年率リターン）':'平均の年率リターン',
  'DPI（回収済み倍率）':'回収できた現金の倍率','TVPI（総合倍率）':'回収＋未売却価値の倍率','IRR（年率リターン）':'年率リターン',
  'LPからの信頼':'投資家からの信頼','投資先の管理余力':'あと何社管理できるか','DD / 借入交渉中':'買収前調査 / 借入交渉中','IC / 契約段階':'投資判断 / 契約段階',
  'コミット額':'LPが約束した出資額','払込済み資金':'実際に受け取った資金','優先利回り':'成功報酬より先にLPへ返す基準','成功報酬':'GPの成功報酬','GP自己出資':'運用会社の自己出資',
  '買収前調査（DD）':'会社を詳しく調べる','財務DD / QoE':'財務調査（利益の質も確認）','IC目標IRR':'投資会議が求める年率リターン','目標IRRでの上限':'目標リターンを守れる最高入札額',
  'ファンド自己資金':'ファンドが出す自己資金','経営陣再投資':'経営陣が残して再投資する資金','契約保護度':'契約で買い手が守られる強さ'
};
const sections={
  'FUNDS':'ファンド','PORTFOLIO OVERVIEW':'投資先一覧','INVESTMENT COMMITTEE':'投資委員会','LIVE DEAL PROCESSES':'進行中の買収案件','PIPELINE STATUS':'案件進捗','RECENT ACTIVITY':'最近の動き','INSTITUTIONAL FUND MANAGEMENT':'ファンド運営','MULTI-DIMENSIONAL REPUTATION':'相手別の評判','RELATIONSHIP NETWORK':'人脈ネットワーク','LP RELATIONSHIPS':'LPとの関係','PE LEAGUE TABLE':'PE業界ランキング','INVESTMENT THESES':'投資テーマ','STRATEGY EVOLUTION':'運用戦略の拡張','GP ECONOMICS & PARTNER POLITICS':'GP会社の経営とパートナー'
};
const tape={'Base Rate':'基準金利','Credit Spread':'信用スプレッド','Credit':'信用スプレッド','Deal Heat':'案件過熱度','Active Thesis':'投資テーマ','Strategy':'戦略','Auctions':'入札案件','Proprietary / Limited':'相対・限定案件','Banker Rep':'バンカー評判','Seller Rep':'売り手評判','Thesis Knowledge':'テーマ知識','Public Multiple':'上場倍率','Recession Risk':'景気後退リスク'};
const proReverseExact=Object.fromEntries(Object.entries(exact).map(([en,jp])=>[jp,en]));
Object.assign(proReverseExact,{'運用会社の現金':'GP Cash','LPからの信頼':'LP Trust','市場での評判':'Reputation','オフィス':'Office','投資先の管理余力':'Portfolio Capacity','ブティックオフィス':'Boutique Office','ミッドタウンオフィス':'Midtown Office','機関投資家向け本社':'Institutional HQ'});
const proReverseSections=Object.fromEntries(Object.entries(sections).map(([en,jp])=>[jp,en]));
const proReverseTape=Object.fromEntries(Object.entries(tape).map(([en,jp])=>[jp,en]));
const proButtonRules=[
 [/案件メモ/g,'Deal Book'],[/見送り/g,'Pass'],[/ティーザー確認/g,'Review Teaser'],[/秘密保持契約（NDA）/g,'Sign NDA'],[/詳細資料（CIM）を確認/g,'Open CIM + Data Room'],
 [/規律重視/g,'Disciplined'],[/標準入札/g,'Base Bid'],[/強気入札/g,'Aggressive'],[/商業DD/g,'Commercial DD'],[/財務DD \/ QoE/g,'Financial / QoE'],[/法務・税務DD/g,'Legal / Tax DD'],[/業務DD/g,'Operational DD'],
 [/借入条件を集める/g,'Launch Debt Financing'],[/この融資条件を選ぶ/g,'Select Terms'],[/保守的/g,'Conservative'],[/借入最大化/g,'Max Senior'],[/複合調達/g,'Structured'],
 [/投資委員会（IC）へ上程/g,'Submit Full IC Paper'],[/承認：最終入札へ/g,'Approve Max Bid & Final Bid Authority'],[/否決：案件終了/g,'Reject / Kill Deal'],[/詳細メモを開く/g,'Open Full Deal Book'],
 [/IC上限超過/g,'ABOVE IC MAX'],[/IC上限/g,'IC Max'],[/売り手希望より低く/g,'Seller -0.15x'],[/バランス/g,'Balanced'],[/落札優先/g,'Win the Deal'],
 [/買い手保護重視/g,'Buyer-Protective'],[/スピード重視/g,'Speed / Seller-Friendly'],[/事業会社へ売却/g,'Trade Sale'],[/PE等へ二次売却/g,'Secondary Exit'],[/出資請求/g,'Capital Call'],[/(\d+)週\b/g,'$1w']
];
const buttonRules=[
  [/^Deal Book$/,'案件メモ'],[/^Pass$/,'見送り'],[/Review Teaser/g,'ティーザー確認'],[/Sign NDA/g,'秘密保持契約（NDA）'],[/Open CIM \+ Data Room/g,'詳細資料（CIM）を確認'],
  [/Disciplined/g,'規律重視'],[/Base Bid/g,'標準入札'],[/Aggressive/g,'強気入札'],[/Commercial DD/g,'商業DD'],[/Financial \/ QoE/g,'財務DD / QoE'],[/Legal \/ Tax DD/g,'法務・税務DD'],[/Operational DD/g,'業務DD'],
  [/Launch Debt Financing/g,'借入条件を集める'],[/Select Terms/g,'この融資条件を選ぶ'],[/Conservative/g,'保守的'],[/Max Senior/g,'借入最大化'],[/Structured/g,'複合調達'],
  [/Submit Full IC Paper/g,'投資委員会（IC）へ上程'],[/Approve Max Bid & Final Bid Authority/g,'承認：最終入札へ'],[/Reject \/ Kill Deal/g,'否決：案件終了'],[/Open Full Deal Book/g,'詳細メモを開く'],
  [/IC Max/g,'IC上限'],[/Seller -0\.15x/g,'売り手希望より低く'],[/Balanced/g,'バランス'],[/Win the Deal/g,'落札優先'],[/ABOVE IC MAX/g,'IC上限超過'],
  [/Buyer-Protective/g,'買い手保護重視'],[/Speed \/ Seller-Friendly/g,'スピード重視'],[/Trade Sale/g,'事業会社へ売却'],[/Secondary Exit/g,'PE等へ二次売却'],[/Capital Call/g,'出資請求'],[/Expand Office/g,'オフィス拡張'],
  [/(\d+)w\b/g,'$1週']
];
const beginnerButtonRules=[
  [/秘密保持契約（NDA）/g,'秘密保持契約を結ぶ'],[/詳細資料（CIM）を確認/g,'会社の詳細資料を確認'],[/投資委員会（IC）へ上程/g,'社内の投資会議へ提出'],[/承認：最終入札へ/g,'承認して最終入札へ'],[/IC上限/g,'投資会議の上限'],[/財務DD \/ QoE/g,'財務・利益の質を調査'],[/出資請求/g,'LPへ資金の払込みを依頼']
];
function replaceLeading(el,map){const n=[...el.childNodes].find(x=>x.nodeType===3&&x.nodeValue.trim());if(!n)return;const raw=n.nodeValue,key=raw.trim();if(map[key])n.nodeValue=raw.replace(key,map[key]);}
function setStaticLabels(){
  document.body.dataset.displayMode=mode;
  const labels=navLabels[mode];document.querySelectorAll('#nav button[data-view]').forEach(b=>{const t=labels[b.dataset.view];if(t)b.textContent=t});
  const memo=document.querySelector('#memoModal .modal-head h3');if(memo){memo.innerHTML=mode==='pro'?'Investment Memo':mode==='beginner'?'投資判断メモ <small class="term-en">Investment Memo</small>':'投資メモ <small class="term-en">Investment Memo</small>'}
  const desc=document.getElementById('assistDesc'),title=document.getElementById('assistTitle');if(desc)desc.textContent=modeCopy[mode].desc;if(title)title.textContent=modeCopy[mode].title;
  const sel=document.getElementById('displayMode');if(sel)sel.value=mode;
}
let running=false;
function localize(){
  if(running)return;running=true;
  try{
    setStaticLabels();
    if(mode==='pro'){
      document.querySelectorAll('.page-title h2,.stat span,.stat small,.stat b,.firm-strip .label,.fund-meta span,.mini span,.memo-section h3,.memo-grid span,.su-row span,.stage-track span,.dd-item span,.dd-item b').forEach(el=>{const t=el.textContent.trim();if(proReverseExact[t])el.textContent=proReverseExact[t]});
      document.querySelectorAll('.section-head h2').forEach(el=>replaceLeading(el,proReverseSections));
      document.querySelectorAll('.market-tape span').forEach(el=>replaceLeading(el,proReverseTape));
      document.querySelectorAll('.status').forEach(el=>{const t=el.textContent.trim();const r={'投資期間':'INVESTING','回収期間':'HARVESTING','準備中':'PLANNING','運用終了':'REALIZED'}[t];if(r)el.textContent=r});
      document.querySelectorAll('button').forEach(btn=>{if(['glossaryBtn','glossaryClose','modalClose'].includes(btn.id)||btn.closest('#nav'))return;let n=btn.textContent;for(const [re,to] of proButtonRules)n=n.replace(re,to);if(n!==btn.textContent)btn.textContent=n});
      removeGuides();return
    }
    document.querySelectorAll('.page-title h2,.stat span,.stat small,.stat b,.firm-strip .label,.fund-meta span,.mini span,.memo-section h3,.memo-grid span,.su-row span,.stage-track span,.dd-item span,.dd-item b').forEach(el=>{const t=el.textContent.trim();if(exact[t])el.textContent=exact[t]});
    document.querySelectorAll('.section-head h2').forEach(el=>replaceLeading(el,sections));
    document.querySelectorAll('.market-tape span').forEach(el=>replaceLeading(el,tape));
    document.querySelectorAll('.status').forEach(el=>{const t=el.textContent.trim().toUpperCase();if(exact[t])el.textContent=exact[t]});
    document.querySelectorAll('button').forEach(btn=>{if(['glossaryBtn','glossaryClose','modalClose'].includes(btn.id)||btn.closest('#nav'))return;let n=btn.textContent;for(const [re,to] of buttonRules)n=n.replace(re,to);if(mode==='beginner')for(const [re,to] of beginnerButtonRules)n=n.replace(re,to);if(n!==btn.textContent)btn.textContent=n});
    if(mode==='beginner')document.querySelectorAll('.page-title h2,.stat span,.stat small,.stat b,.firm-strip .label,.fund-meta span,.mini span,.memo-section h3,.memo-grid span,.su-row span,.stage-track span,.dd-item span,.dd-item b').forEach(el=>{const t=el.textContent.trim();if(beginnerExact[t])el.textContent=beginnerExact[t]});
    renderGuides();
  } finally {running=false;}
}

const actionGuides={
 'review-teaser':['案件の概要を確認','まず売り手が提示した会社概要を読みます。ここではまだ大きな費用はかかりません。'],
 'sign-nda':['秘密保持契約','詳細情報を見るための契約です。締結すると次の資料へ進めます。'],
 'review-cim':['会社の詳細資料を確認','売上・利益・市場・経営陣などを確認し、最初の入札価格を考えます。'],
 'first-bid':['1次入札の価格を決める','安く入札するとリターンは守りやすい一方、候補から外れやすくなります。強気入札は落札しやすい反面、IRRが下がりやすくなります。'],
 'run-dd':['買収前調査を進める','商業・財務・法務税務・業務の4分野を調べます。赤旗が見つかれば、価格やリターン見通しを見直す材料になります。'],
 'launch-debt':['銀行・貸し手から条件を集める','借入を増やすとファンドの自己資金は少なくて済みますが、金利負担と失敗時のリスクが上がります。'],
 'select-debt':['融資条件を比較','金利だけでなく、借入可能額・返済条件・契約余裕・資金確実性も比較してください。'],
 'structure-debt':['借入構成を決める','保守的＝安全性重視。借入最大化＝IRRを押し上げやすい代わりに下振れ耐性が弱くなります。'],
 'submit-ic':['社内の投資判断へ進む','DD結果、借入条件、Base/Downside/UpSideのリターンを見て、いくらまで払えるかを決めます。'],
 'final-bid':['最終入札を決める','高い価格ほど落札しやすくなりますが、期待IRRは低下します。投資会議の上限を超えるとガバナンス面のペナルティもあります。'],
 'spa':['契約条件を選ぶ','買い手保護を強くすると損害リスクは下がりますが、売り手が契約を嫌がる可能性があります。スピード重視はその逆です。'],
 'execute':['買収を実行','どのファンドから出資するかを決め、必要ならLPへ出資請求してクロージングします。'],
 'execute-co':['共同投資を使って買収','LPのCo-investを使うとファンド本体の必要資金を抑えられますが、利益の一部は共同投資家に帰属します。'],
 'ic-approve':['投資委員会の最終判断','承認すると最終入札へ進みます。DDの赤旗と目標IRRを満たしているかを確認してください。'],
 'raise':['次号ファンドの資金調達','実績、DPI、LPとの信頼が資金調達に効きます。First CloseからFinal Closeまで段階的に進みます。'],
 'capital-call':['LPへ資金払込みを依頼','コミット額の全額を最初に受け取るのではなく、投資や費用に必要な分だけ呼び込みます。'],
 'nav-loan':['ファンド資産を担保に借入','今の流動性は増えますが、将来の分配金から利息・元本を返す必要があります。'],
 'continuation':['投資先を継続保有ファンドへ移す','今売却せず保有を続ける選択です。既存LPと新ファンドの利益相反があるためLPAC審査が必要です。'],
 'source-addon':['追加買収候補を探す','Platform企業に小型企業を追加買収し、規模拡大やシナジーを狙います。統合失敗リスクもあります。'],
 'buy-addon':['追加買収を実行','EBITDA成長やMultiple Arbitrageを狙えますが、統合コストと借入増加に注意してください。'],
 'grant-mip':['経営陣へ持分を付与','経営陣のやる気・定着を高める代わりに、ファンドの持分が薄まります。'],
 'board-decision':['取締役会で判断','短期利益と長期成長が反対方向になる選択もあります。Exit時期まで考えて決めてください。'],
 'unlock-strategy':['新しい運用戦略へ進出','AUMは増やせますが、人材・知識・LP説明力が分散します。既存戦略の実績も重要です。']
};
const viewGuides={
 dashboard:['最初にやること','「案件」へ進み、ティーザーから買収候補を1件ずつ検討します。'],
 deals:['案件を買うまで','概要確認 → 秘密保持 → 詳細資料 → 1次入札 → DD → 借入 → 投資会議 → 最終入札 → 契約 → 買収、の順です。'],
 ic:['投資会議で見るポイント','高いIRRだけでなく、Downside、DDの赤旗、借入倍率、IC上限価格を確認します。'],
 funds:['ファンド管理のポイント','未投資資金、DPI、TVPI、IRRを見ながら投資ペースと次号ファンドの資金調達を管理します。'],
 portfolio:['投資後の価値向上','売上・EBITDA成長、借入返済、追加買収、CEO・経営陣施策を組み合わせてExit価値を高めます。'],
 ecosystem:['人脈も資産','Banker・Lender・LPとの関係が案件紹介、借入条件、次号ファンドの資金調達に影響します。'],
 org:['人材と固定費のバランス','採用で案件・投資先の処理能力は上がりますが、給与とオフィス費用も増えます。'],
 strategy:['得意分野を作る','投資テーマの知識を深めるとDD精度や案件発掘で有利になります。新戦略への拡張は段階的に。'],
 records:['実績を振り返る','AUMだけでなく、実現MOIC、IRR、DPI、評判を見てファームの質を確認します。']
};
function guideText(action){const g=actionGuides[action];if(!g)return null;if(mode==='standard')return [g[0],g[1].split('。')[0]+'。'];return g}
function removeGuides(){document.querySelectorAll('.decision-guide').forEach(x=>x.remove());const g=document.getElementById('contextGuide');if(g)g.hidden=true}
function renderGuides(){
  if(mode==='pro'){removeGuides();return}
  const active=document.querySelector('#nav button.active')?.dataset.view||'dashboard';const vg=viewGuides[active];const top=document.getElementById('contextGuide');
  if(top&&vg){top.hidden=false;top.innerHTML=`<b>${vg[0]}</b><span>${mode==='standard'?vg[1].split('。')[0]+'。':vg[1]}</span>`}
  document.querySelectorAll('.deal-process-panel').forEach(panel=>{
    const btn=[...panel.querySelectorAll('button[data-action]')].find(b=>!b.disabled)||panel.querySelector('button[data-action]');const action=btn?.dataset.action;const data=guideText(action);let box=panel.querySelector(':scope > .decision-guide');
    if(!data){box?.remove();return}
    if(!box){box=document.createElement('div');box.className='decision-guide';panel.appendChild(box)}
    box.innerHTML=`<b>判断ガイド：${data[0]}</b><span>${data[1]}</span>`;
  });
  const ic=document.querySelector('#ic.view.active');if(ic){const btn=ic.querySelector('button[data-action="ic-approve"]');const data=btn&&guideText('ic-approve');if(data){let box=ic.querySelector(':scope > .decision-guide');if(!box){box=document.createElement('div');box.className='decision-guide global';ic.prepend(box)}box.innerHTML=`<b>判断ガイド：${data[0]}</b><span>${data[1]}</span>`}}
}

let scheduled=false;
function schedule(){if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{scheduled=false;localize()})}
const observer=new MutationObserver(schedule);
function start(){
  const gm=document.getElementById('glossaryModal'),gb=document.getElementById('glossaryBtn'),gc=document.getElementById('glossaryClose'),sel=document.getElementById('displayMode');
  gb?.addEventListener('click',()=>gm?.classList.add('show'));gc?.addEventListener('click',()=>gm?.classList.remove('show'));gm?.addEventListener('click',e=>{if(e.target===gm)gm.classList.remove('show')});
  sel?.addEventListener('change',()=>{const v=VALID_MODES.has(sel.value)?sel.value:'beginner';try{localStorage.setItem(MODE_KEY,v)}catch(_){}location.reload()});
  observer.observe(document.body,{childList:true,subtree:true,characterData:true});localize();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
