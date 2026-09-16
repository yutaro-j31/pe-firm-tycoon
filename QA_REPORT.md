# QA Report — v6.3

## Static validation
- JavaScript parsed successfully with `node --check`.
- No Math.random / Date.now / crypto.randomUUID usage.
- The production patch chain reconstructs the same final v6.3 engine used for long-horizon QA.

## Browser runtime validation
Executed in Chromium through the Chrome DevTools Protocol with the full HTML document loaded in a real browser context.

Validated:
- Initial boot and runtime status
- Dashboard / Deal Room / IC / Funds / Portfolio / Ecosystem / Org / Strategy / Track Record navigation
- Banker/Lender/LP relationship action
- Thesis research and activation UI
- Teaser → NDA → CIM → First Bid
- Commercial / QoE / Legal / Operational DD
- Dynamic debt quotes
- Lender selection
- Capital structure selection
- IC submission and Partner vote panel
- IC approval
- Final Bid / auction loss and success paths
- SPA
- Closing into Fund I
- Value-creation / MIP / Add-on sourcing and acquisition
- Quarterly Board decisions
- Trade Sale
- Fund II fundraising through Final Close
- Cross-Fund Allocation Conflict after Fund II exists
- Allocation resolution and second Closing
- NAV Financing draw
- Continuation Fund request → LPAC Fairness Opinion → LPAC vote
- Valuation-policy switch
- Strategy / Ecosystem screens
- No runtime JavaScript exceptions in tested flows

## Save migration / persistence
- Save key remains `pe_firm_tycoon_v1`; v6.3 does not change the save-schema version.
- Boot-tested with representative v1, v2 and v5 save-state shapes. All migrated to v6 without runtime exceptions.
- Existing v6.2 saves remain compatible.
- Save → new browser context → load preserves deterministic state fields including turn, RNG state, GP cash, LP trust, reputation and fund cash/calls.

## iPhone / usability validation
- 390 × 844 mobile viewport: all 9 main views remain within viewport width.
- Beginner / Standard / Pro display modes boot without JavaScript exceptions.
- Beginner mode shows contextual decision guidance through the LBO workflow.
- Pro mode preserves English deal-process labels and hides guidance.
- Production-style build advances Y1 Q1 → Y1 Q2 with runtime JS errors = 0.

## Acquisition-clock validation
- One quarter provides 13 weeks of acquisition-process capacity.
- A normal LBO cannot be completed from Teaser to Closing in a single quarter.
- Advancing the quarter restores process capacity while retaining deal state.
- Seller timetable and Closing long-stop logic can terminate stalled processes.

## v6.3 long-horizon balance validation
- 10 deterministic seeds × 3 play styles × 40 quarters = 30 ten-year simulations.
- Disciplined / Balanced / Aggressive strategies all completed without runtime exceptions or simulation deadlocks.
- Aggressive growth is no longer free: debt service, leverage/covenant stress, residual SPA risk and governance breaches can damage portfolio performance and fundraising.
- Management-fee step-down prevents later-vintage GP cash from becoming a perpetual committed-capital annuity.
- NaN / Infinity: 0.
- Called capital greater than commitment: 0 cases.
- Save payloads: 35–69 KB across the tested ten-year terminal states.
- Full multi-seed figures and methodology: `BALANCE_QA.md`.

## Next stress tests
- 30-year and 100-year simulations
- GP insolvency / working-capital distress recovery
- Partner morale / Spin-out stress cases
- LP Trust upper-bound saturation
- Long-run strategy AUM and save-size growth
