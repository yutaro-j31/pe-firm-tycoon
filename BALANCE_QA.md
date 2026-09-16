# Balance QA — v6.3

## Method
- 10 deterministic seeds × 3 play styles × 40 quarters (10 years).
- Styles: Disciplined / Balanced / Aggressive.
- Browser execution used the same v6.3 engine in Chromium via DevTools Protocol.
- Checked fund progression, GP cash, LP Trust, exits, AUM, save size, NaN/Infinity and called-capital invariants.

## 10-year results

| Style | Median GP Cash | Median LP Trust | Median exits | Fund II+ | Fund III | Negative GP cash |
|---|---:|---:|---:|---:|---:|---:|
| Disciplined | -3.34億 | 24.8 | 1.0 | 2/10 | 0/10 | 8/10 |
| Balanced | 6.71億 | 37.4 | 4.5 | 9/10 | 2/10 | 2/10 |
| Aggressive | 10.64億 | 44.1 | 7.0 | 9/10 | 6/10 | 1/10 |

## Interpretation
- Disciplined bidding preserves price discipline but can fail to deploy enough capital; failure to establish a successor fund can push the management company into cash distress.
- Balanced play is the most stable middle path in the sample: Fund II is usually reached, while Fund III depends on realized performance and LP confidence.
- Aggressive play grows fastest but now carries materially higher financing/governance/downside risk. It can still outperform, but poor seeds can stall fundraising or produce management-company distress.
- This is intentional asymmetry, not a requirement that all strategies have equal expected outcomes.

## v6.3 balance changes
- Management fees step down after the investment period instead of remaining a perpetual committed-capital annuity.
- LP Trust evaluates performance against fund age and realized DPI/TVPI expectations.
- Fundraising gate tightened to 8 quarters plus 1.15x TVPI or 0.20x DPI and adequate LP reputation.
- IC-limit overrides create a persistent governance-breach penalty that affects LP fundraising appetite.
- Debt service now reduces free cash flow available for paydown.
- High leverage, weak covenant headroom, recession risk and SPA residual risk can cause portfolio stress.
- Co-invest relationship rewards and positive LP-performance drift were reduced to prevent runaway reputation.
- Deal auctions use competitor fit, network, reputation, funding certainty and player relationships rather than price alone.
- LBO work consumes quarter capacity and closing has a long-stop deadline.

## Invariants
- NaN / Infinity: 0 across the 30 ten-year runs.
- Called capital > commitment: 0 cases.
- Save payload: 35–69 KB in the tested 10-year states (well below 5 MB).
- Deterministic RNG restrictions retained: no Math.random / Date.now / crypto.randomUUID.
