import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite159 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./sprite159/costumes/costume1.png", {
        x: 42,
        y: 42,
      }),
      new Costume("costume2", "./sprite159/costumes/costume2.png", {
        x: 8,
        y: 8,
      }),
    ];

    this.sounds = [new Sound("pop", "./sprite159/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jevil auh attack" },
        this.whenIReceiveJevilAuhAttack
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jevil auh attack2" },
        this.whenIReceiveJevilAuhAttack2
      ),
    ];

    this.vars.type = 0;
    this.vars.pos = 0;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone() {
    this.visible = true;
    if (this.toNumber(this.vars.type) === 1) {
      this.costume = "costume2";
      this.rotationStyle = Sprite.RotationStyle.ALL_AROUND;
      while (!this.touching("edge")) {
        this.move(5);
        yield;
      }
      this.deleteThisClone();
    }
    if (this.toNumber(this.vars.type) === 0) {
      this.costume = "costume1";
      this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
      this.vars.pos = this.random(1, 2);
      if (this.toNumber(this.vars.pos) === 1) {
        this.goto(150, 185);
      }
      if (this.toNumber(this.vars.pos) === 2) {
        this.goto(-150, 185);
      }
      for (let i = 0; i < this.random(10, 23); i++) {
        this.y -= 10;
        yield;
      }
      this.vars.type = 1;
      this.direction = 90;
      this.createClone();
      this.direction += 30;
      this.createClone();
      this.direction += 30;
      this.createClone();
      this.direction += 30;
      this.createClone();
      this.direction += 30;
      this.createClone();
      this.direction += 30;
      this.createClone();
      this.direction += 30;
      this.createClone();
      this.direction += 30;
      this.createClone();
      this.direction += 30;
      this.createClone();
      this.direction += 30;
      this.createClone();
      this.direction += 30;
      this.createClone();
      this.direction += 30;
      this.createClone();
      this.direction += 30;
      this.createClone();
      this.deleteThisClone();
    }
  }

  *startAsClone2() {
    while (true) {
      if (this.touching(this.sprites["Sprite20"].andClones())) {
        if (this.toNumber(this.stage.vars.iFrames) === 0) {
          this.stage.vars.hp += -25 + this.toNumber(this.stage.vars.armor);
          this.stage.vars.iFrames++;
        }
        this.deleteThisClone();
      }
      yield;
    }
  }

  *whenIReceiveJevilAuhAttack() {
    for (let i = 0; i < 16; i++) {
      this.vars.type = 0;
      this.createClone();
      yield* this.wait(0.5);
      yield;
    }
    yield* this.wait(2.5);
    this.broadcast("Ur turn");
  }

  *whenIReceiveJevilAuhAttack2() {
    for (let i = 0; i < 20; i++) {
      this.vars.type = 0;
      this.createClone();
      yield* this.wait(0.3);
      yield;
    }
    yield* this.wait(2.5);
    this.broadcast("Ur turn");
  }
}
