# QA Report — v6.3

## Static validation
- JavaScript parsed successfully with `node --check`.
- No Math.random / Date.now / crypto.randomUUID usage.
- v6.3 balance patch reproduces the validated v6.3 engine source exactly before evaluation.

## Browser runtime validation
Executed in Chromium with the full game in a real browser context.

Validated:
- Initial boot and all 9 navigation views
- Teaser → NDA → CIM → First Bid → DD → Debt → Capital Structure → IC → Final Bid → SPA → Closing
- Portfolio value creation / MIP / Add-on / Board decisions / Exit
- Fund II fundraising through Final Close
- Cross-Fund Allocation Conflict
- NAV Financing / LPAC / Continuation Fund
- Beginner / Standard / Pro display modes
- No runtime JavaScript exceptions in tested flows

## Save / compatibility
- Save key remains `pe_firm_tycoon_v1` and save schema remains v6.
- Existing v6.2 saves remain compatible.
- Save → new browser context → load preserves turn, RNG state, GP cash, LP trust, reputation and fund cash/calls.

## iPhone validation
- 390 × 844 viewport: all 9 main views remain within viewport width.
- Production-style v6.3 build: runtime OK, Y1 Q1 → Y1 Q2 advance works, width = 390px, runtime JS errors = 0.

## Acquisition-clock validation
- One quarter provides 13 weeks of acquisition-process capacity.
- Tested Y1 Q1 process reached DD at 13/13 weeks and could not reach Closing in the same quarter.
- Advancing to Y1 Q2 restored capacity while retaining deal state.

## 10-year balance QA
Deterministic 40-quarter strategies were exercised. Active strategies maintained non-negative fund cash, capital calls did not exceed commitments, NAV stayed non-negative, the deal pipeline remained available, and no runtime JS exceptions occurred.

### Passive / no-investment stress case
- GP Cash: **-1.60億円**
- LP Trust: **14.33 / 100**
- Portfolio / exits: 0 / 0
- Lifetime GP P&L: **-5.40億円**
- Fund I TVPI: **0.00x** at realization
- Result: intentionally failing strategy. The old fee-only exploit is removed.

### Disciplined / cautious-smart
- GP Cash: **3.44億円**
- LP Trust: **61.95 / 100**
- Flagship funds: 2
- Portfolio / exits: 1 / 2
- Average realized MOIC: **1.45x**
- Average realized IRR: **10.5%**
- Closed deals: 3; disciplined passes: 12
- Result: price discipline is viable when the player passes deals above underwriting authority.

### Balanced
- GP Cash: **30.88億円**
- Flagship funds: 3
- Portfolio / exits: 3 / 10
- Average realized MOIC: **1.80x**
- Average realized IRR: **25.8%**
- Closed deals: 13
- Fund I TVPI 1.17x; Fund II 1.22x; Fund III 0.60x while still investing
- Save size: ~65 KB

### Aggressive
- GP Cash: **19.99億円**
- Flagship funds: 3
- Portfolio / exits: 5 / 19
- Average realized MOIC: **1.36x**
- Average realized IRR: **16.1%**
- Closed deals: 24
- Result: more auction wins, but lower realized returns than Balanced because of higher entry prices.
- Save size: ~84 KB

### Relationship / network-focused
- GP Cash: **29.24億円**
- Flagship funds: 3
- Portfolio / exits: 3 / 7
- Average realized MOIC: **2.44x**
- Average realized IRR: **34.5%**
- Closed deals: 10
- Result: relationship capital materially improves access and auction economics.
- Save size: ~63 KB

## Determinism
- Balanced 10-year scenario was run twice from the same initial state and policy.
- Final state keys, fund data and event history matched exactly.

## Next stress tests
- 30-year and 100-year simulations
- GP insolvency / working-capital distress
- Partner morale / Spin-out stress cases
- LP Trust upper-bound saturation
- Long-run strategy AUM and save-size growth
