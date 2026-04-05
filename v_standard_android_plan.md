# "V-Standard" Upgraded Implementation Plan - OverStory Android Stabilization

High-velocity technical blueprint for locking in OverStory as a native-feeling Android application on the Samsung S25.

## User Review Required

> [!IMPORTANT]
> **Native orientation Lock**: We are moving away from JS-level orientation hints. I will be modifying the `AndroidManifest.xml` directly to force landscape at the OS level.
> **Reactive Text Wrapping**: Instead of just wrapping when the limit is hit, I'll implement a 210px look-ahead buffer in `say2` to ensure words aren't split mid-render.
> **Global State Freeze**: When `Death` is broadcast, a new `window.GAMEOVER` flag will be set. I'll need to update combat sprites (enemies/bullets) to check this flag and halt their scripts, preventing "zombie" attacks while the restart menu is active.

## Proposed Changes

### **1. Audio: The Nuclear Option (index.js)**
*   **The Problem:** `visibilitychange` is a suggestion; `suspend()` is a hardware command.
*   **The Upgrade:** Hooking into the **Capacitor App State**.
*   **The Logic:** Use `App.addListener('appStateChange', ...)` to trigger `audioContext.suspend()` on background and `resume()` on foreground. This forces the hardware to release/reclaim the audio buffer.
```javascript
import { App } from '@capacitor/app';

App.addListener('appStateChange', ({ isActive }) => {
  const ctx = window.Scratch.audioEngine.audioContext;
  if (!isActive) {
    ctx.suspend().then(() => console.log('[Native] Audio Hardware Locked.'));
  } else {
    ctx.resume().then(() => console.log('[Native] Audio Hardware Resumed.'));
  }
});
```

### **2. Orientation: OS-Level Enforced (AndroidManifest.xml)**
*   **The Problem:** JavaScript-based orientation locks are fragile and can be bypassed by the user's OS settings.
*   **The Upgrade:** **Binary-level manifest enforcement**.
*   **The Action:** Set `android:screenOrientation="landscape"` in the `Activity` tag.
- **Benefit**: Ensures the Android OS allocates the window buffer in landscape before the WebView even initializes, preventing the "flicker" or vertical black bars on startup.

### **3. Text: Proactive Look-Ahead Wrapping (textboxinner.js)**
*   **The Problem:** Text clipped at the 210px margin.
*   **The Upgrade:** **Buffer-based overflow prevention**.
*   **The Logic:** Before printing a character, check if the sub-string until the next space exceeds the width. If so, inject a carriage return (`*`) automatically.
- **Action**: Upgrade `say2` (around line 584) with a look-ahead carriage return.
- **Logic**: If `this.x > 210`, immediately trigger the `*` logic (reset `x`, decrement `y`) *before* placing the next character.

### **4. Game Freeze: The Global Global (Stage.js & Enemy Scripts)**
*   **The Problem:** Enemies keep attacking or music keeps playing after the player is at 0 HP.
*   **The Upgrade:** **Global State Freeze**.
*   **The Logic:** Set `window.GAMEOVER = 1` in `Stage.js` on death. Inject `if (window.GAMEOVER) return;` into every `while(true)` combat loop.
- **Target**: Combat sprites (enemies/bullets).
- **Action**: Add a check in their main loops: `if (window.GAMEOVER) { /* stop other scripts */ return; }`.

## Verification Plan

### Automated Tests
- Simulate hardware-level suspend/resume using ADB (or browser devtools `App` mock).
- Test extreme text strings (e.g., 50+ characters no spaces) to verify the 210px threshold.
- Set `hp = 0` and verify all enemy movement/script execution ceases immediately.

### Manual Verification
- Deploy to Samsung Galaxy S25 (via Emulator).
- Verify the app launches directly in landscape without any "orientation flicker."
- Confirm Restart button is centered bottom-middle and functional after a "Game Over" freeze.
