import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite53 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.png", {
        x: 1,
        y: 11,
      }),
    ];

    this.sounds = [new Sound("pop", "./sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Tail swipe" },
        this.whenIReceiveTailSwipe
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveTailSwipe() {
    this.visible = true;
    this.size = 150;
    this.goto(0, 126);
    this.direction = 90;
    this.moveBehind();
    yield* this.wait(1);
    for (let i = 0; i < 35; i++) {
      this.size += 10;
      yield;
    }
    yield* this.wait(1);
    yield* this.startSound("pop");
    for (let i = 0; i < 6; i++) {
      this.direction += 15;
      yield;
    }
    this.broadcast("Purple");
    for (let i = 0; i < 6; i++) {
      this.direction += 15;
      yield;
    }
    yield* this.wait(1);
    for (let i = 0; i < 35; i++) {
      this.size -= 20;
      yield;
    }
    this.visible = false;
  }
}
