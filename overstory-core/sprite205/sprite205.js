import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite205 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.png", {
        x: 9,
        y: 99,
      }),
    ];

    this.sounds = [new Sound("pop", "./sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Colored bones" },
        this.whenIReceiveColoredBones
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone() {
    this.size = 200;
    this.visible = true;
    this.goto(-90, 0);
    this.direction = 90;
    for (let i = 0; i < 36; i++) {
      this.x += 5;
      yield;
    }
    this.deleteThisClone();
  }

  *startAsClone2() {
    if (this.random(1, 2) === 1) {
      this.effects.color = 100;
      while (true) {
        if (this.touching(this.sprites["Sprite20"].andClones())) {
          if (this.toNumber(this.stage.vars.joystickMoving) === 0) {
            if (this.toNumber(this.stage.vars.iFrames) === 0) {
              this.stage.vars.hp -= 9;
              yield* this.startSound("pop");
              this.broadcast("Owsies");
              yield* this.wait(0);
            }
          }
        }
        yield;
      }
    } else {
      this.effects.color = 0;
      while (true) {
        if (this.touching(this.sprites["Sprite20"].andClones())) {
          if (this.toNumber(this.stage.vars.joystickMoving) === 1) {
            if (this.toNumber(this.stage.vars.iFrames) === 0) {
              this.stage.vars.hp -= 9;
              this.broadcast("Owsies");
              yield* this.startSound("pop");
              yield* this.wait(0);
            }
          }
        }
        yield;
      }
    }
  }

  *whenIReceiveColoredBones() {
    if (this.compare(this.stage.vars.enemyHp, 1499) < 0) {
      for (let i = 0; i < 15; i++) {
        this.createClone();
        yield* this.wait(0.4);
        yield;
      }
      yield* this.wait(1);
      this.broadcast("Ur turn");
    } else {
      for (let i = 0; i < 9; i++) {
        this.createClone();
        yield* this.wait(0.6);
        yield;
      }
      yield* this.wait(1);
      this.broadcast("Ur turn");
    }
  }
}
