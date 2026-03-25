type EventCallback = (...args: any[]) => void;

export type GameEvent =
  | 'onBattleStart'
  | 'onBattleEnd'
  | 'onTurnChange'
  | 'onPlayerHit'
  | 'onEnemyHit'
  | 'onDialogStart'
  | 'onDialogComplete'
  | 'onPlayerMove'
  | 'onShopEnter'
  | 'onShopExit'
  | 'onSave';

export class EventBus {
  private static listeners: Map<string, EventCallback[]> = new Map();

  static on(event: GameEvent, callback: EventCallback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event)?.push(callback);
  }

  static emit(event: GameEvent, ...args: any[]) {
    const eventListeners = this.listeners.get(event);
    if (eventListeners) {
      eventListeners.forEach(callback => callback(...args));
    }
  }

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

// Global Hooks Example:
// EventBus.on('onBattleStart', () => console.log('Battle Music Playing...'));
