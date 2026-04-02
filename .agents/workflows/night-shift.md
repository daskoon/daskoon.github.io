---
description: Run the full resolved asset mapping, chaos testing, and Galaxy S25 profiling.
---

# Night Shift Workflow
Automated audit and stabilization run. Use this when the user is disconnected.

## Steps
1. **Asset Resolver**:
    - Scans `script.js` for new `SpriteN` hashed references.
    - Matches them against `extract_sprites.js` output.
    - Populates `core/asset-master.json` with "Proposed" names.
2. **Chaos Testing**:
    - Run Playwright "Stress" test (100+ clicks/sec) on battle logic.
    - Check for variable locks or the "funny coding" race conditions.
3. **Landscape Profiling**:
    - Verify FPS on a simulated Galaxy S25 landscape viewport.
    - Detect any layout shifts during asset progressive loading.
4. **Morning Report**:
    - Self-generate `night_shift_report.json` and a Walkthrough artifact for the user.
