import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bullet7 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Bullet7/costumes/costume1.png", {
        x: 193,
        y: 120,
      }),
      new Costume("costume2", "./Bullet7/costumes/costume2.png", {
        x: 193,
        y: 120,
      }),
    ];

    this.sounds = [
      new Sound("pop", "./Bullet7/sounds/pop.wav"),
      new Sound("pop2", "./Bullet7/sounds/pop2.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Half of screen :3" },
        this.whenIReceiveHalfOfScreen3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Half of screen :3" },
        this.whenIReceiveHalfOfScreen4
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Half of screen :3" },
        this.whenIReceiveHalfOfScreen5
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveHalfOfScreen3() {
    yield* this.wait(0.5);
    this.costume = "costume1";
    yield* this.startSound("pop");
    this.visible = true;
    yield* this.wait(1);
    yield* this.startSound("pop2");
    this.costume = "costume2";
    this.goto(0, -80);
    yield* this.glide(0.15, 0, 0);
  }

  *whenIReceiveHalfOfScreen4() {
    yield* this.wait(3.5);
    this.broadcast("Ur turn");
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveHalfOfScreen5() {
    yield* this.wait(0.5);
    yield* this.wait(1);
    while (true) {
      if (this.touching(this.sprites["Sprite20"].andClones())) {
        if (this.toNumber(this.stage.vars.iFrames) === 0) {
          this.stage.vars.hp -= 8;
          this.stage.vars.iFrames++;
        }
      }
      yield;
    }
  }

  *startAsClone() {}
}
