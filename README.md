# PE Firm Tycoon — Private Capital Industry Simulator v6.3

スマートフォン優先のブラウザゲーム。PEファームのGP会社、ファンド、案件、LP、Portfolio、競合市場を同時に経営するシミュレーターです。

## Display modes

- **初心者** — やさしい日本語＋「この選択で何が起きるか」の判断ガイドを表示。
- **標準** — 日本語とPE実務用語を併記。
- **プロ** — 英語・略語中心の実務表記。判断ガイドは非表示。

表示モードはゲームのセーブとは独立して保存され、投資ロジックや決定論には影響しません。

## Core loop

1. Investment Thesisを研究し、BankerとのRelationshipを構築
2. Teaser → NDA → CIM → 1st Bid → DD → Debt → Capital Structure → IC → Final Bid → SPA → Closing
3. Fund I / II / IIIのどこに案件をAllocationするか決定
4. PortfolioのBoard、CEO、MIP、Buy & Build、Value Creationを運営
5. Trade Sale / Secondary / IPO / Continuation FundでExit
6. DPI / TVPI / IRR / Carryを形成
7. Pre-Marketing → DDQ → Anchor LP → First Close → Final Closeで次号Fundをraise
8. GP会社を採用・Carry配分・Partner retentionで拡大
9. StrategyをSmall BuyoutからCredit / Secondaries / Real Estateまで拡張

## v6.3 balance changes

- **案件工程に四半期の作業時間を導入** — 1四半期=13週として、DD・Debt・IC・SPA等の工程が同一四半期に無制限に進まないようにしました。通常のLBOは複数四半期にまたがります。
- **競合PEにDeal Fitを導入** — Large Buyout / Mid-Market / Small Buyout / Buy & Buildの戦略と案件規模の適合度を競争に反映します。
- **Relationshipの価値を強化** — Banker / Sellerとの関係、Proprietary案件、Execution certaintyが入札結果へより明確に効きます。
- **Management Feeを現実寄りにstep-down** — Investment Period終了後はコミットメント全額ではなく、保有投資原価を基準に低い料率で計算します。
- **LP Reputationを運用実績へ接続** — ファンド年齢に応じたTVPI/DPI、満期時の回収状況がLP評価へ反映されます。投資せずFeeだけ受け取る戦略は成立しません。

## 22 integrated systems

1. Living Private Capital Ecosystem — 競合PEがAUM・評判・価格規律を持ち独立して動く
2. Relationship Network — Banker / Lender / LPとの関係値が案件・Debt・Fundraisingへ影響
3. Institutional Fundraising — Pre-Marketing / DDQ / Anchor / First Close / Final Close、Side Letter
4. GP Economics — Management Fee、Carry、給与、オフィス、Fundraising費、Deal Cost、Partner Carry
5. Partner Politics — IC vote、Morale、Carry再配分、Retention、Spin-out
6. Investment Thesis — Sector Knowledge / Conviction / Research / Active Thesis
7. Buy & Build — Add-on sourcing、買収、Integration Risk、Synergy
8. Portfolio Board Simulation — 四半期Board agendaと意思決定
9. Management Incentive Program — MIP拡張とManagement alignment / dilution
10. CEO Market — Growth / Cost / M&A / Turnaround / IPO能力を持つCEO候補
11. Dynamic Debt Market — Base Rate / Credit Spread / lender relationshipを反映したDebt quote
12. Capital Structure Engineering — Conservative / Base / Max Senior / Seller Note + Mezz
13. LPAC — Continuation / Fund Extensionの利益相反審査、Fairness Opinion
14. Cross-Fund Allocation Conflict — Fund I / II / III間の案件配分とLP fairness
15. Valuation Committee — Conservative / Fair / Aggressive NAV marks、Exit write-down risk
16. J-Curve — Management Fee capital call、Fund cashflow、初期TVPI/IRR悪化
17. Secondary Market — LP liquidity request、transfer facilitate / block
18. NAV Financing — Fund-level NAV facility、interest、Exit proceedsから返済
19. Multi-dimensional Reputation — Seller / Banker / LP / Lender / Management
20. PE League Table — Playerと競合PEのAUM / performance / reputation比較
21. Partner Spin-out — 低Morale Partnerが独立し、その後ゲーム内競合になる
22. Strategy Evolution — Small Buyout → Mid-Market → Growth → Infrastructure → Credit → Secondaries → Real Estate

## Technical notes

- HTML/CSS/vanilla JavaScript
- No external runtime libraries
- Deterministic seeded RNG; no Math.random / Date.now / crypto.randomUUID
- localStorage save with in-memory fallback
- Save migration tested from legacy v1 / v2 / v5 shapes
- iPhone-first responsive UI
- Existing save key retained: `pe_firm_tycoon_v1`
- v6.3 does not change the save schema version; existing v6.2 saves remain compatible
