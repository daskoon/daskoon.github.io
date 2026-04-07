import './style.css'
import { GameEngine, type Direction } from './engine'

/**
 * INITIALIZE THE MODULAR ENGINE (THE "BETTER WAY")
 *
 * This engine can now be imported into a React Native project by:
 * import { GameEngine } from './engine'
 *
 * All logic is pure TypeScript and decoupled from the DOM.
 */

const engine = new GameEngine();

// --- SETUP REACT-LIKE UI HOOKS ---
engine.on('onBattleStart', (enemy) => {
  console.log(`[UI HOOK] Showing Battle Screen for ${enemy}`);
});

engine.on('onPlayerHit', (damage) => {
  console.log(`[UI HOOK] Shake screen! Damage: ${damage}. HP: ${engine.store.getState().hp}`);
});

engine.on('onDialogComplete', () => {
  console.log(`[UI HOOK] Narrative finished. Unpause game.`);
});

// --- SIMULATE GAME FLOW ---
console.log('--- OverStory Modular Game Engine Start ---');

// 1. Exploration (Vite/Web UI Layer)
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>OverStory: Modular Refactor</h1>
    <p>The "Better Way" to build this game.</p>
    <div class="card">
      <div id="stats">
        HP: ${engine.store.getState().hp} |
        In Battle: ${engine.store.getState().isInBattle} |
        Grilled Cheese: ${engine.store.getState().grilledCheeseCount}
      </div>
      <br />
      <button id="move-up">Move Up</button>
      <button id="attack">Attack (Timing Bar)</button>
      <button id="shop">Enter Store</button>
      <button id="save">Save Game (at Shop)</button>
    </div>
  </div>
`

// --- UI BUTTON HANDLERS (Simulating Joystick/Touch input) ---

document.querySelector('#move-up')?.addEventListener('click', () => {
  engine.emit('onPlayerMove', 'Up' as Direction);
});

document.querySelector('#attack')?.addEventListener('click', () => {
  engine.combat.handleTimingHit(0.9); // Near-perfect accuracy
});

document.querySelector('#shop')?.addEventListener('click', () => {
  engine.emit('onShopEnter');
  engine.shop.purchaseItem('grilled_cheese');
});

document.querySelector('#save')?.addEventListener('click', () => {
  engine.emit('onSave');
});

// --- GAME LOOP (Simulating a Frame Timer) ---
let lastTime = performance.now();
const gameLoop = (time: number) => {
  const deltaTime = (time - lastTime) / 1000;
  lastTime = time;

  // Run the core engine update (I-Frames, Patterns, etc.)
  engine.update(deltaTime);

  // Update Stats in UI
  const stats = document.querySelector('#stats');
  if (stats) {
    const s = engine.store.getState();
    stats.textContent = `HP: ${s.hp} | In Battle: ${s.isInBattle} | Grilled Cheese: ${s.grilledCheeseCount}`;
  }

  requestAnimationFrame(gameLoop);
};

requestAnimationFrame(gameLoop);

// Start a narrative sequence for the intro
engine.emit('onDialogStart', {
  id: 'intro',
  speaker: 'Zork',
  text: 'I see you found the modular "Hook" system. It\'s much better than Scratch... and less horse-heavy.',
});
