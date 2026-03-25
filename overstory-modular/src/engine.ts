import { EventBus, type GameEvent } from './events';
import { GameStore, INITIAL_STATE, type GameState } from './state';
import { PlayerController, type Direction } from './player';
import { CombatSystem } from './combat';
import { DialogueManager, type DialogueNode } from './narrative';
import { ShopSystem, type ShopItem } from './shop';
import { PatternManager, type AttackPattern, type Projectile } from './patterns';

/**
 * OVERSTORY MODULAR GAME ENGINE
 *
 * This is the central entry point for the "Better Way" to write the game.
 * All logic is decoupled from the UI (React, Web, or React Native).
 */

export class GameEngine {
  public store: GameStore;
  public player: PlayerController;
  public combat: CombatSystem;
  public narrative: DialogueManager;
  public shop: ShopSystem;
  public patterns: PatternManager;

  constructor(initialState: GameState = INITIAL_STATE) {
    // Initialize all modular systems.
    this.store = new GameStore(initialState);
    this.player = new PlayerController(this.store);
    this.combat = new CombatSystem(this.store);
    this.narrative = new DialogueManager(this.store);
    this.shop = new ShopSystem(this.store);
    this.patterns = new PatternManager();

    console.log('[ENGINE] All modular systems initialized.');
  }

  /**
   * REFRESH / UPDATE LOOP
   * In a React Native context, this would be called by a 'useGameLoop' hook
   * or a simple requestAnimationFrame loop at 60fps.
   *
   * @param deltaTime Time elapsed since the last frame (in seconds).
   */
  public update(deltaTime: number) {
    // 1. Process I-Frames cooldown
    const currentIframes = this.store.getState().iFrames;
    if (currentIframes > 0) {
      this.store.update({ iFrames: Math.max(0, currentIframes - 1) });
    }

    // 2. Update Bullet-Hell patterns
    this.patterns.update(deltaTime);

    // 3. (Optional) Check for exploration-mode collisions or triggers
  }

  /**
   * Helper to facilitate "Hook" registration from outside the engine (e.g., from React components).
   */
  public on(event: GameEvent, callback: (...args: any[]) => void) {
    EventBus.on(event, callback);
  }

  /**
   * Helper to trigger actions from the UI.
   */
  public emit(event: GameEvent, ...args: any[]) {
    EventBus.emit(event, ...args);
  }
}

// Export Types for easy use in React/Mobile components.
export type { GameState, DialogueNode, ShopItem, AttackPattern, Projectile, Direction };
export { INITIAL_STATE };
