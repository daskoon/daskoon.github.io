import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite78 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./sprite78/costumes/costume1.png", {
        x: 192,
        y: 195,
      }),
    ];

    this.sounds = [new Sound("pop", "./sprite78/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ur turn" },
        this.whenIReceiveUrTurn
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone() {
    while (true) {
      this.visible = true;
      this.moveAhead();
      this.goto(0, 190);
      this.effects.ghost = 100;
      for (let i = 0; i < 19; i++) {
        this.effects.ghost -= 5.2;
        this.y -= 10;
        yield;
      }
      this.goto(0, 0);
      yield* this.wait(this.random(1, 4));
      for (let i = 0; i < 19; i++) {
        this.effects.ghost += 5.2;
        this.y += 10;
        yield;
      }
      this.visible = false;
      this.effects.clear();
      yield* this.wait(this.random(0.1, 3));
      yield;
    }
  }

  *whenIReceiveUrTurn() {
    this.deleteThisClone();
  }
}
