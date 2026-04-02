import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite179 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./sprite179/costumes/costume1.png", {
        x: 4,
        y: 360,
      }),
    ];

    this.sounds = [new Sound("pop", "./sprite179/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Spinnywinny" },
        this.whenIReceiveSpinnywinny
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone() {
    this.visible = true;
    this.direction = 180;
    this.size = 200;
    this.effects.ghost += 100;
    for (let i = 0; i < 10; i++) {
      this.effects.ghost -= 10;
      yield;
    }
    yield* this.wait(0.1);
    for (let i = 0; i < 72; i++) {
      this.direction -= 5;
      yield;
    }
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.deleteThisClone();
  }

  *startAsClone2() {
    if (this.random(1, 2) === 1) {
      this.effects.color = 0;
      while (true) {
        if (this.touching(this.sprites["Sprite20"].andClones())) {
          if (this.toNumber(this.stage.vars.joystickMoving) === 0) {
            if (this.toNumber(this.stage.vars.iFrames) === 0) {
              this.stage.vars.hp += -35 + this.toNumber(this.stage.vars.armor);
              this.stage.vars.iFrames++;
            }
            this.deleteThisClone();
          }
        }
        yield;
      }
    } else {
      this.effects.color = 100;
      while (true) {
        if (this.touching(this.sprites["Sprite20"].andClones())) {
          if (this.toNumber(this.stage.vars.joystickMoving) === 1) {
            if (this.toNumber(this.stage.vars.iFrames) === 0) {
              this.stage.vars.hp += -35 + this.toNumber(this.stage.vars.armor);
              this.stage.vars.iFrames++;
            }
            this.deleteThisClone();
          }
        }
        yield;
      }
    }
  }

  *whenIReceiveSpinnywinny() {
    for (let i = 0; i < 10; i++) {
      this.createClone();
      yield* this.wait(1.2);
      yield;
    }
    yield* this.wait(2);
    this.broadcast("Ur turn");
  }
}
