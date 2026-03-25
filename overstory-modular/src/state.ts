export interface GameState {
  voice: number;
  isJoystickMoving: boolean;
  joyX: number;
  joyY: number;
  speed: number;
  isButtonsPressed: boolean;
  isZorkInParty: boolean;
  isInBattle: boolean;
  hp: number;
  iFrames: number;
  grilledCheeseCount: number;
  isPlayerHitting: boolean;
  turn: number;
  enemyHp: number;
  isZorkBehind: boolean;
  timer: number;
}

export const INITIAL_STATE: GameState = {
  voice: 1,
  isJoystickMoving: false,
  joyX: 0,
  joyY: 0,
  speed: 4,
  isButtonsPressed: false,
  isZorkInParty: false,
  isInBattle: false,
  hp: 20, // Adjusting based on standard RPG values if needed, but keeping Scratch values where clear
  iFrames: 0,
  grilledCheeseCount: 1,
  isPlayerHitting: false,
  turn: 1,
  enemyHp: 0,
  isZorkBehind: false,
  timer: 0,
};

export class GameStore {
  private state: GameState;

  constructor(initialState: GameState = INITIAL_STATE) {
    this.state = { ...initialState };
  }

  getState(): GameState {
    return this.state;
  }

  update(newState: Partial<GameState>) {
    this.state = { ...this.state, ...newState };
    // Trigger event on change (to be implemented in step 3)
  }
}
