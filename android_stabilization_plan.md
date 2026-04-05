# Implementation Plan - OverStory Android Stabilization

Technical blueprint for resolving the four priority issues discussed for the Android build.

## User Review Required

> [!IMPORTANT]
> **Death Sequence Integration**: I will be adding a `this.broadcast("Death")` call in `Stage.js` when HP falls below 1. This is the global signal that will trigger the Restart button and potentially stop other combat scripts.
> **Auto-Wrap Threshold**: I've set the auto-wrap threshold at `x > 210` in the `say2` function. This provides a safe buffer for most characters in the standard 15px-wide font used by the game.

## Proposed Changes

### 1. Music/Background Audio (`index.html`)
- **Action**: Add a `visibilitychange` listener to manage the Scratch engine's audio context.
- **Logic**: 
  ```javascript
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      window.Scratch.audioEngine.audioContext.suspend();
    } else {
      window.Scratch.audioEngine.audioContext.resume();
    }
  });
  ```

### 2. Restart Button UI (`RestartButton.js`)
- **Position Update**: Change `this.goto(0, -160)` to `this.goto(0, -175)` in `whenGreenFlagClicked`.
- **Visibility Logic**:
    - Set `this.visible = false` on start.
    - Add listener for `Death` broadcast to set `this.visible = true`.

### 3. Text Overflow (`textboxinner.js`)
- **Action**: Update the `say2` function (Approx line 584).
- **Auto-Wrap Logic**: After `this.x += 15`, check for screen boundaries:
  ```javascript
  if (this.x > 210) {
    this.x = -216;
    this.y -= 26;
  }
  ```

### 4. Orientation & Viewport (`index.html`)
- **Action**: Enforce landscape mode via CSS and meta tags.
- **Meta**: `<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">`
- **CSS**: Add orientation-aware styles to ensure the game canvas remains centered and scaled in landscape.

## Verification Plan

### Automated Tests
- Simulate `hp = 0` via the console and verify the Restart button appears at `(0, -175)`.
- Use `window.vm.runtime.getSpriteByName('textboxinner').say2('Long text string...', 10)` to verify the auto-wrap logic.
- Switch browser tabs to trigger `visibilitychange` and check `audioContext.state`.

### Manual Verification
- Deploy to Android Emulator.
- Confirm the game opens in landscape and text wrapping looks natural during the Jone encounter.
