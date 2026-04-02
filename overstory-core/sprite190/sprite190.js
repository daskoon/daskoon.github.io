import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite190 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("IMG_1680", "./sprite190/costumes/IMG_1680.png", {
        x: 43,
        y: 39,
      }),
      new Costume("IMG_2", "./sprite190/costumes/IMG_2.png", { x: 43, y: 32 }),
    ];

    this.sounds = [new Sound("Moo", "./sprite190/sounds/Moo.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "Cowza" }, this.whenIReceiveCowza),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Cowza2" },
        this.whenIReceiveCowza2
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone() {
    this.size = 80;
    this.goto(-64, this.random(72, -71));
    this.costume = "IMG_1680";
    this.visible = true;
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
    while (!this.touching(this.sprites["Sprite207"].andClones())) {
      yield;
    }
    this.costume = "IMG_2";
    while (!this.touching("edge")) {
      this.x += 10;
      yield;
    }
    this.deleteThisClone();
  }

  *whenIReceiveCowza() {
    for (let i = 0; i < this.random(3, 5); i++) {
      for (let i = 0; i < this.random(3, 5); i++) {
        this.createClone();
        yield;
      }
      yield* this.wait(0.4);
      this.sprites["Sprite207"].createClone();
      yield* this.wait(2.3);
      yield;
    }
    yield* this.wait(0.8);
    this.broadcast("Ur turn");
  }

  *startAsClone2() {
    while (true) {
      if (this.touching(this.sprites["Sprite20"].andClones())) {
        if (this.toNumber(this.stage.vars.iFrames) === 0) {
          this.stage.vars.hp += -35 + this.toNumber(this.stage.vars.armor);
          this.stage.vars.iFrames++;
        }
        yield* this.startSound("Moo");
        this.deleteThisClone();
      }
      yield;
    }
  }

  *whenIReceiveCowza2() {
    for (let i = 0; i < 6; i++) {
      for (let i = 0; i < 3; i++) {
        this.createClone();
        yield;
      }
      yield* this.wait(0.1);
      this.sprites["Sprite207"].createClone();
      yield* this.wait(2);
      yield;
    }
    yield* this.wait(0.8);
    this.broadcast("Ur turn");
  }
}
