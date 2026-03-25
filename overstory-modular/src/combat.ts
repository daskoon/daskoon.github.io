import { EventBus } from './events';
import { GameStore } from './state';

/**
 * CombatSystem: The core RPG and Bullet-Hell logic.
 *
 * This module is designed to be completely independent of the visual
 * representation (Scratch blocks or React Native components).
 * It manages the combat flow: Battle Start -> Player Turn -> Enemy Turn -> Battle End.
 */
export class CombatSystem {
  private store: GameStore;
  private isCombatActive: boolean = false;

  constructor(store: GameStore) {
    this.store = store;

    /**
     * HOOK: Battle Transition
     * When another system (like a collision in the world) triggers a battle,
     * this CombatSystem initializes the encounter and sets the state accordingly.
     */
    EventBus.on('onBattleStart', (enemyName: string, enemyHp: number = 50) => {
      this.isCombatActive = true;
      // Sets the global 'isInBattle' flag so systems like PlayerController can react.
      this.store.update({ isInBattle: true, turn: 1, enemyHp });
      this.startPlayerTurn();
      console.log(`[COMBAT] Encounter with ${enemyName} (${enemyHp} HP) started!`);
    });

    /**
     * HOOK: Cleanup
     * When the battle finishes, reset battle-specific state.
     */
    EventBus.on('onBattleEnd', () => {
      this.isCombatActive = false;
      this.store.update({ isInBattle: false });
      console.log(`[COMBAT] Battle finished!`);
    });
  }

  // --- PLAYER TURN: RPG ATTACK (TIMING BAR) ---

  /**
   * Initializes the Player's turn.
   * In a React Native context, this would trigger the "Attack/Heal" menu buttons.
   */
  private startPlayerTurn() {
    console.log('--- Player Turn: Timing Bar Attack ---');
    this.store.update({ turn: 1, isPlayerHitting: true });

    // Notify the UI system to show the timing slider.
    EventBus.emit('onTurnChange', 'player');
  }

  /**
   * Processes the result of the Player's timing mini-game.
   *
   * @param accuracy A value from 0 (miss) to 1 (perfect) based on when the player tapped.
   */
  public handleTimingHit(accuracy: number) {
    // Safety check: Don't process hits if it's not the player's turn.
    if (!this.store.getState().isPlayerHitting) return;

    // Calculate damage based on accuracy - this was previously messy block-logic.
    const damage = Math.floor(10 * accuracy);
    console.log(`[COMBAT] Player hit for ${damage} damage! (Accuracy: ${accuracy})`);

    // Update state to subtract enemy HP and move to the next turn.
    this.store.update({
      enemyHp: this.store.getState().enemyHp - damage,
      isPlayerHitting: false
    });

    // Notify any other systems (like sound effects or enemy animations) of the hit.
    EventBus.emit('onEnemyHit', damage);
    this.startEnemyTurn();
  }

  // --- ENEMY TURN: ACTION DEFENSE (BULLET HELL / SOUL) ---

  /**
   * Initializes the Enemy's turn.
   * In a React Native context, this would transition the "Soul Box" into dodge mode.
   */
  private startEnemyTurn() {
    console.log('--- Enemy Turn: Bullet Hell ---');
    this.store.update({ turn: 2 });

    // Notify the UI to hide menus and start drawing bullets.
    EventBus.emit('onTurnChange', 'enemy');

    // Simulate the enemy pattern duration (e.g., 5 seconds of dodging).
    setTimeout(() => {
      this.endEnemyTurn();
    }, 5000);
  }

  /**
   * Ends the enemy turn and cycles back to the player if the battle is ongoing.
   */
  private endEnemyTurn() {
    if (this.isCombatActive) {
      this.startPlayerTurn();
    }
  }

  /**
   * Logic for when the player's 'Soul' collides with an enemy projectile.
   * Replaces the messy "Wait 0.5 seconds" Scratch logic with typed I-Frames and state updates.
   *
   * @param damage The amount of damage the projectile deals.
   */
  public onPlayerHit(damage: number) {
    const currentState = this.store.getState();

    // Handle Invincibility frames to prevent multiple rapid hits.
    if (currentState.iFrames > 0) return;

    // Substract HP and set I-Frames.
    this.store.update({
      hp: currentState.hp - damage,
      iFrames: 30
    });

    // Emit event so the UI can shake or flash red.
    EventBus.emit('onPlayerHit', damage);

    if (this.store.getState().hp <= 0) {
      this.handleGameOver();
    }
  }

  /**
   * Logic for when the player is defeated.
   * Provides a clean entry point for the PRD's "Ad Revive" logic.
   */
  private handleGameOver() {
    console.log('[GAME OVER] Triggering revive UI/Ad logic...');
    // Integration point for React Native/Admob.
  }
}
