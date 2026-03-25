/**
 * Core game state interface.
 * This represents the "Single Source of Truth" for the entire game,
 * replacing the dozens of scattered, untyped global variables in Scratch.
 */
export interface GameState {
  /** The current voice index for dialogue sound effects */
  voice: number;
  /** Whether the movement joystick is currently being manipulated */
  isJoystickMoving: boolean;
  /** Joystick horizontal axis value (-100 to 100) */
  joyX: number;
  /** Joystick vertical axis value (-100 to 100) */
  joyY: number;
  /** Current movement speed of the player sprite */
  speed: number;
  /** State of game-specific interaction buttons (Z, X, etc.) */
  isButtonsPressed: boolean;
  /** Story flag: Is the character 'Zork' currently in the player's party? */
  isZorkInParty: boolean;
  /** Global game mode: True if the player is currently in a combat encounter */
  isInBattle: boolean;
  /** Player's current Hit Points (HP) */
  hp: number;
  /** Invincibility frames remaining after being hit */
  iFrames: number;
  /** Current count of 'Grilled Cheese' items in inventory */
  grilledCheeseCount: number;
  /** Combat flag: Is the player currently performing an attack animation? */
  isPlayerHitting: boolean;
  /** Turn indicator: 1 = Player Turn, 2 = Enemy Turn */
  turn: number;
  /** Current HP of the active enemy in battle */
  enemyHp: number;
  /** Story flag: Is Zork positioned behind the player? */
  isZorkBehind: boolean;
  /** Global game timer for cooldowns and pattern timing */
  timer: number;
}

/**
 * Initial game state values.
 * These are based on the default values found in the original 'project.json' file.
 */
export const INITIAL_STATE: GameState = {
  voice: 1,
  isJoystickMoving: false,
  joyX: 0,
  joyY: 0,
  speed: 4,
  isButtonsPressed: false,
  isZorkInParty: false,
  isInBattle: false,
  hp: 20,
  iFrames: 0,
  grilledCheeseCount: 1,
  isPlayerHitting: false,
  turn: 1,
  enemyHp: 0,
  isZorkBehind: false,
  timer: 0,
};

/**
 * GameStore: A simple, centralized state manager.
 * This class handles all state updates and ensures the data remains consistent
 * across different game systems (Movement, Combat, Dialogue).
 */
export class GameStore {
  private state: GameState;

  constructor(initialState: GameState = INITIAL_STATE) {
    this.state = { ...initialState };
  }

  /**
   * Returns a read-only snapshot of the current game state.
   */
  getState(): GameState {
    return this.state;
  }

  /**
   * Updates specific parts of the game state.
   * This is the "Hook" into the state system - any system can update values here
   * and other systems can react to those changes via the EventBus.
   *
   * @param newState A partial object containing the state properties to update.
   */
  update(newState: Partial<GameState>) {
    this.state = { ...this.state, ...newState };
    // In a future React implementation, this would trigger a re-render.
  }
}
