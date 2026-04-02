import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite203 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./sprite203/costumes/costume1.png", {
        x: 9,
        y: 79,
      }),
    ];

    this.sounds = [new Sound("pop", "./sprite203/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Bones circle" },
        this.whenIReceiveBonesCircle
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
    ];

    this.vars.ty = 2;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone() {
    this.size = 200;
    this.visible = true;
    if (this.toNumber(this.vars.ty) === 1) {
      this.goto(90, -63);
      for (let i = 0; i < 72; i++) {
        this.x -= 2.5;
        yield;
      }
    } else {
      this.goto(-90, 17);
      for (let i = 0; i < 72; i++) {
        this.x += 2.5;
        yield;
      }
    }
    this.deleteThisClone();
  }

  *whenIReceiveBonesCircle() {
    if (this.compare(this.stage.vars.enemyHp, 1499) < 0) {
      for (let i = 0; i < 7; i++) {
        this.vars.ty = 1;
        this.createClone();
        this.vars.ty = 2;
        this.createClone();
        yield* this.wait(1.8);
        yield;
      }
      yield* this.wait(1);
      this.broadcast("Ur turn");
    } else {
      for (let i = 0; i < 7; i++) {
        this.vars.ty = 1;
        this.createClone();
        this.vars.ty = 2;
        this.createClone();
        yield* this.wait(2.3);
        yield;
      }
      yield* this.wait(1);
      this.broadcast("Ur turn");
    }
  }

  *startAsClone2() {
    while (true) {
      if (this.touching(this.sprites["Sprite20"].andClones())) {
        if (this.toNumber(this.stage.vars.iFrames) === 0) {
          this.stage.vars.hp -= 6;
          yield* this.startSound("pop");
          this.broadcast("Owsies");
          yield* this.wait(0);
        }
      }
      yield;
    }
  }
}
