import { EventBus } from './events';
import { GameStore } from './state';

export type Direction = 'Up' | 'Down' | 'Left' | 'Right' | 'None';

export class PlayerController {
  private x: number = 0;
  private y: number = 0;
  private store: GameStore;

  constructor(store: GameStore) {
    this.store = store;

    // Listen for global broadcast-style events from the EventBus
    EventBus.on('onPlayerMove', (direction: Direction) => {
      if (this.store.getState().isInBattle) return;
      this.move(direction);
    });
  }

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

    console.log(`Player position: (${this.x}, ${this.y})`);
  }

  private setCostume(costumeName: string) {
    // Modularly separate logic for changing animations/costumes
    console.log(`Switching costume to: ${costumeName}`);
  }

  getPosition() {
    return { x: this.x, y: this.y };
  }
}
