---
description: Run a mobile-emulated landscape performance audit for the Samsung Galaxy S25.
---

# Galaxy S25 Landscape Audit Workflow
Use this workflow to verify UI layout and smoothness on the user's primary test device.

## Steps
1. **Model**:
    - Launches Playwright with a `viewport` of `2400x1080` (Landscape aspect ratio for Galaxy S25).
    - Sets the `userAgent` to match the S25's mobile browser.
2. **Simulation**:
    - Navigates through the "Tower" loading screen to Chapter 1.
    - Captures screenshots of the combat UI and Bestiary to identify layout breakage.
    - Checks `safe-area-insets` to ensure UI elements aren't cut off by the punch-hole camera.
3. **Verification**:
    - Zero horizontal scrolling on the main game canvas.
    - Touch targets for "Save," "Load," and "Attack" are at least 44x44px.
