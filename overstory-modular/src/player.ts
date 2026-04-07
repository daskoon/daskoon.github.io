import { EventBus } from './events';
import { GameStore } from './state';

/**
 * Player direction interface for movement input and orientation.
 * Using a type union for compatibility with Vite/TS 'erasableSyntaxOnly' configuration.
 */
export type Direction = 'Up' | 'Down' | 'Left' | 'Right' | 'None';

/**
 * PlayerController: Logic-only module for player exploration and interaction.
 *
 * In a React Native context, this class remains exactly as is.
 * The UI components would call this controller, and the controller
 * would update the state and emit events that the UI reacts to.
 */
export class PlayerController {
  private x: number = 0;
  private y: number = 0;
  private store: GameStore;

  constructor(store: GameStore) {
    this.store = store;

    /**
     * HOOK: Input to Movement
     * Listens for directional movement inputs (e.g., from a virtual joystick or keyboard).
     */
    EventBus.on('onPlayerMove', (direction: Direction) => {
      // Logic for exploration movement is separate from battle movement
      if (this.store.getState().isInBattle) return;
      this.move(direction);
    });
  }

  /**
   * Internal logic for calculating position based on speed and direction.
   */
  private move(direction: Direction) {
    const speed = this.store.getState().speed;

    switch (direction) {
      case 'Up':
        this.y += speed;
        this.setCostume('back');
        break;
      case 'Down':
        this.y -= speed;
        this.setCostume('front');
        break;
      case 'Left':
        this.x -= speed;
        this.setCostume('left');
        break;
      case 'Right':
        this.x += speed;
        this.setCostume('right');
        break;
    }

    // Positions are logged to console for now, but would update UI or Canvas later.
    console.log(`[PLAYER] Position: (${this.x}, ${this.y})`);
  }

  /**
   * Encapsulated costume/animation switching.
   * This logic maps directly to the Scratch "Switch Costume" blocks but in a structured way.
   *
   * @param costumeName The key/id of the animation or texture to display.
   */
  private setCostume(costumeName: string) {
    // HOOK: Could emit an 'onPlayerAnimate' event here for the View/UI system.
    console.log(`[PLAYER] Switching costume to: ${costumeName}`);
  }

  /**
   * Helper to retrieve current world coordinates.
   */
  public getPosition() {
    return { x: this.x, y: this.y };
  }
}
