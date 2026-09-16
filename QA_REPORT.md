# QA Report — v6.2

## Static validation
- JavaScript parsed successfully with `node --check`.
- No Math.random / Date.now / crypto.randomUUID usage.

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

## Save migration
Boot-tested with representative v1, v2 and v5 save-state shapes. All migrated to v6 without runtime exceptions.


## v6.2 iPhone / usability validation
- 390 × 844 mobile viewport: all 9 main views remain within viewport width.
- Beginner / Standard / Pro display modes boot without JavaScript exceptions.
- Beginner mode shows contextual decision guidance through the LBO workflow.
- Pro mode preserves English deal-process labels and hides guidance.
- Save → new browser context → load preserves deterministic state fields (turn, RNG state, GP cash, LP trust, reputation, fund cash/calls).
- Full LBO acquisition → value creation → Trade Sale → Fund II fundraising through Final Close validated.
- Fund II active-fund count confirmed at 2 / 3 after Final Close.
