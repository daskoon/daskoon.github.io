# Implementation Plan: OverStory Critical Stabilization & Logic Restore

The user reports a total loading stall at 20% and persistent issues with text wrapping and the restart function. We are moving from a "Hard Fixes" focus to a "Total System Restore" focus.

## User Review Required

> [!CRITICAL]
> **Service Worker Suspension**: To resolve the loading stall immediately, we will bypass the Service Worker for ALL media assets (`/assets/` and `/sb3-temp/`) until the root fetch deadlock is resolved. This ensures the game loads now.

---

## Proposed Changes

### 1. Service Worker & Loading (Fixing the Stall)
#### [MODIFY] [sw.js](file:///c:/Users/transmacsual/projects/overstory all chapters/daskoon.github.io/sw.js)
- Implement a global bypass for `/assets/` and `/sb3-temp/` to allow direct network fetches.
- Remove complex MIME-type validation that currenty deadlocks on the S25.

### 2. Text Wrapping (Restoring Functionality)
#### [MODIFY] [overstory-core/index.js](file:///c:/Users/transmacsual/projects/overstory all chapters/daskoon.github.io/overstory-core/index.js)
- Implement a smart word-wrap logic for the TextBox sprite.
- Ensure text respects the 4:3 safe-zone (-240 to 240) to prevent overflow on the Samsung S25.

### 3. Game Logic (The Restart Fix)
#### [MODIFY] [script.js](file:///c:/Users/transmacsual/projects/overstory all chapters/daskoon.github.io/script.js) (or index.html)
- Identify why the "Restart" or "Green Flag" listener is failing.
- Ensure the state is correctly reset, especially the `AudioContext` which was recently hardened.

---

## Open Questions
- **Restart Button**: Is the "Restart" a custom button in the UI or the standard Scratch Green Flag?
- **Wrapping**: Do we have a specific sprite name for the "TextBox" besides `Sprite123`? (Mapping check needed).

## Verification Plan
1. **Load Test**: Navigate to `http://localhost:8080/` and verify the bar reaches 100%.
2. **Text Test**: Trigger a long dialogue and verify it wraps instead of cutting off.
3. **Restart Test**: Play, click restart, and verify the game re-initializes with audio.
