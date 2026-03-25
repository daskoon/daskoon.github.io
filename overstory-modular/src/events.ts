/**
 * Type-safe EventBus (Pub/Sub) System.
 *
 * This is the "Modular Hook System" requested. It allows game systems
 * (Combat, Movement, UI) to communicate without being directly linked.
 *
 * Example: The PlayerController doesn't need to know the CombatSystem exists.
 * It just emits an 'onPlayerMove' event, and other systems can "hook" into it.
 */

type EventCallback = (...args: any[]) => void;

/**
 * Predefined list of all possible global game events.
 * This prevents typos and ensures consistency across the codebase.
 */
export type GameEvent =
  | 'onBattleStart'    // Triggered when entering a combat encounter
  | 'onBattleEnd'      // Triggered when a combat encounter finishes
  | 'onTurnChange'     // Triggered when shifting between Player/Enemy turns
  | 'onPlayerHit'      // Triggered when the player's 'soul' (heart) takes damage
  | 'onEnemyHit'       // Triggered when the player performs a successful attack
  | 'onDialogStart'    // Triggered to display a narrative sequence
  | 'onDialogComplete' // Triggered when a narrative sequence is dismissed
  | 'onPlayerMove'     // Triggered by input systems (Joystick/Keys)
  | 'onShopEnter'      // Triggered when the player enters a shop interface
  | 'onShopExit'       // Triggered when exiting the shop
  | 'onSave';          // Triggered when interacting with a Save Point

/**
 * EventBus: Static singleton class for managing all global game events.
 */
export class EventBus {
  private static listeners: Map<string, EventCallback[]> = new Map();

  /**
   * Register a "Hook" for a specific game event.
   *
   * @param event The GameEvent name to listen for.
   * @param callback The function to execute when the event occurs.
   */
  static on(event: GameEvent, callback: EventCallback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event)?.push(callback);
  }

  /**
   * Trigger a global game event and notify all registered hooks.
   *
   * @param event The GameEvent name to emit.
   * @param args Any additional data to pass to the listeners (e.g., damage amount).
   */
  static emit(event: GameEvent, ...args: any[]) {
    const eventListeners = this.listeners.get(event);
    if (eventListeners) {
      eventListeners.forEach(callback => callback(...args));
    }
  }

  /**
   * Remove a specific hook/listener.
   */
  static off(event: GameEvent, callback: EventCallback) {
    const eventListeners = this.listeners.get(event);
    if (eventListeners) {
      const index = eventListeners.indexOf(callback);
      if (index > -1) {
        eventListeners.splice(index, 1);
      }
    }
  }
}

/**
 * MODULAR USAGE EXAMPLES:
 *
 * 1. UI System Hook:
 *    EventBus.on('onPlayerHit', (dmg) => { UI.shakeScreen(); UI.showDamageText(dmg); });
 *
 * 2. Sound System Hook:
 *    EventBus.on('onBattleStart', () => { Sound.playMusic('battle_theme'); });
 *
 * 3. Narrative Hook:
 *    EventBus.on('onDialogComplete', () => { Game.resumeMovement(); });
 */
