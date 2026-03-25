import { EventBus } from './events';
import { GameStore } from './state';

export class CombatSystem {
  private store: GameStore;
  private isCombatActive: boolean = false;

  constructor(store: GameStore) {
    this.store = store;

    // Listen for events to transition state modularly
    EventBus.on('onBattleStart', (enemyName: string) => {
      this.isCombatActive = true;
      this.store.update({ isInBattle: true, turn: 1 });
      this.startPlayerTurn();
      console.log(`Combat with ${enemyName} started!`);
    });

    EventBus.on('onBattleEnd', () => {
      this.isCombatActive = false;
      this.store.update({ isInBattle: false });
    });
  }

  // PLAYER TURN: TIMING BAR ATTACK
  private startPlayerTurn() {
    console.log('--- Player Turn: Timing Bar Attack ---');
    this.store.update({ turn: 1, isPlayerHitting: true });

    // In a real game, this would trigger the UI component for the timing bar
    EventBus.emit('onTurnChange', 'player');
  }

  public handleTimingHit(accuracy: number) {
    if (!this.store.getState().isPlayerHitting) return;

    // Accuracy would be a value between 0 (miss) and 1 (perfect) from the UI
    const damage = Math.floor(10 * accuracy);
    console.log(`Player hit for ${damage} damage!`);

    this.store.update({
      enemyHp: this.store.getState().enemyHp - damage,
      isPlayerHitting: false
    });

    EventBus.emit('onEnemyHit', damage);
    this.startEnemyTurn();
  }

  // ENEMY TURN: BULLET HELL DODGING (SOUL)
  private startEnemyTurn() {
    console.log('--- Enemy Turn: Bullet Hell ---');
    this.store.update({ turn: 2 });

    EventBus.emit('onTurnChange', 'enemy');

    // Simulate enemy pattern duration
    setTimeout(() => {
      this.endEnemyTurn();
    }, 5000); // 5 seconds of dodging patterns
  }

  private endEnemyTurn() {
    if (this.isCombatActive) {
      this.startPlayerTurn();
    }
  }

  // SOUL DODGING (HITBOX) LOGIC
  public onPlayerDodgedHit(damage: number) {
    const currentState = this.store.getState();
    if (currentState.iFrames > 0) return;

    this.store.update({
      hp: currentState.hp - damage,
      iFrames: 30 // Set I-Frames for half a second (assuming 60fps logic)
    });

    EventBus.emit('onPlayerHit', damage);

    if (this.store.getState().hp <= 0) {
      this.handleGameOver();
    }
  }

  private handleGameOver() {
    console.log('Game Over! Watch an ad to revive?');
    // Integration point for ad-supported revives from the PRD
  }
}
