import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite128 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./sprite128/costumes/costume1.png", {
        x: 16,
        y: 15,
      }),
    ];

    this.sounds = [new Sound("pop", "./sprite128/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Half and half" },
        this.whenIReceiveHalfAndHalf
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone() {
    this.visible = true;
    this.goto(this.random(16, 96), 85);
    for (let i = 0; i < 35; i++) {
      this.y -= 5;
      yield;
    }
    this.deleteThisClone();
  }

  *whenIReceiveHalfAndHalf() {
    yield* this.wait(2);
    for (let i = 0; i < 5; i++) {
      this.createClone();
      yield* this.wait(1);
      yield;
    }
    yield* this.wait(1);
    for (let i = 0; i < 5; i++) {
      this.createClone();
      yield* this.wait(0.3);
      yield;
    }
    yield* this.wait(1);
    this.broadcast("Ur turn");
  }

  *startAsClone2() {
    while (true) {
      if (this.touching(this.sprites["Sprite142"].andClones())) {
        if (this.toNumber(this.stage.vars.iFrames) === 0) {
          this.stage.vars.hp += -20 + this.toNumber(this.stage.vars.armor);
          this.stage.vars.iFrames++;
        }
      }
      yield;
    }
  }
}
