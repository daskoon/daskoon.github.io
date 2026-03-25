import { EventBus } from './events'
import { GameStore, INITIAL_STATE } from './state'
import { PlayerController } from './player'
import { CombatSystem } from './combat'
import { DialogueManager } from './narrative'

// INITIALIZE THE MODULAR SYSTEM
const store = new GameStore(INITIAL_STATE);
new PlayerController(store);
const combat = new CombatSystem(store);
new DialogueManager(store);

// SETUP MAIN GAME HOOKS (THE "BETTER WAY")
EventBus.on('onBattleStart', (enemy) => {
  console.log(`[EVENT HOOK] Game entered battle with ${enemy}`);
});

EventBus.on('onPlayerHit', (damage) => {
  console.log(`[EVENT HOOK] Player hit for ${damage}. Current HP: ${store.getState().hp}`);
});

EventBus.on('onDialogComplete', () => {
  console.log(`[EVENT HOOK] Narratve sequence finished.`);
});

// SIMULATE GAME FLOW
console.log('--- OverStory Modular Game Engine Start ---');

// 1. Exploration
EventBus.emit('onPlayerMove', 'Right');
EventBus.emit('onPlayerMove', 'Up');

// 2. Narrative Trigger
EventBus.emit('onDialogStart', {
  id: 'intro',
  speaker: 'Zork',
  text: 'Are you sure you want to climb this tower? It\'s filled with horses... and sarcasm.',
  choices: [
    { text: 'Yes, absolutely.', nextId: 'climb_1' },
    { text: 'No, I\'m a coward.', nextId: 'coward_1' }
  ]
});

// 3. Combat Trigger
setTimeout(() => {
  EventBus.emit('onBattleStart', 'Tower Guardian');

  // Simulate timing bar hit after some delay
  setTimeout(() => {
    combat.handleTimingHit(0.95); // Near perfect hit
  }, 1000);

}, 2000);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>OverStory Modular Architecture</h1>
    <p>Check the console for the "Better Way" to see how modular hooks are firing!</p>
    <p>Current HP: ${store.getState().hp}</p>
    <p>In Battle: ${store.getState().isInBattle}</p>
    <div class="card">
      <button id="move-up" type="button">Move Up</button>
      <button id="attack" type="button">Attack (Timing Hit)</button>
    </div>
  </div>
`

document.querySelector('#move-up')?.addEventListener('click', () => {
  EventBus.emit('onPlayerMove', 'Up');
});

document.querySelector('#attack')?.addEventListener('click', () => {
  combat.handleTimingHit(0.8);
});
