import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite94 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume2", "./costumes/costume2.png", {
        x: 25,
        y: 202,
      }),
    ];

    this.sounds = [new Sound("pop", "./sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Blue attack :)" },
        this.whenIReceiveBlueAttack
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveBlueAttack() {
    yield* this.wait(1.5);
    for (let i = 0; i < 10; i++) {
      this.createClone();
      yield* this.wait(this.random(0.2, 0.6));
      yield;
    }
    yield* this.wait(5);
    this.broadcast("Blue");
    yield* this.startSound("pop");
  }

  *startAsClone() {
    this.visible = true;
    this.goto(86, -1);
    yield* this.glide(2, -101, -1);
    this.deleteThisClone();
  }

  *startAsClone2() {
    while (true) {
      if (this.touching(this.sprites["Sprite20"].andClones())) {
        if (this.toNumber(this.stage.vars.joystickMoving) === 1) {
          if (this.toNumber(this.stage.vars.iFrames) === 0) {
            this.stage.vars.hp -= 6;
            this.stage.vars.iFrames++;
          }
          this.deleteThisClone();
        }
      }
      yield;
    }
  }
}
