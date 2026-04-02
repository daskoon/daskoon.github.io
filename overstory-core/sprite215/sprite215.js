import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite215 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./sprite215/costumes/costume1.png", {
        x: 16,
        y: 41,
      }),
      new Costume("costume2", "./sprite215/costumes/costume2.png", {
        x: 1,
        y: 12,
      }),
    ];

    this.sounds = [new Sound("pop", "./sprite215/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "hats falling throwing" },
        this.whenIReceiveHatsFallingThrowing
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "4aaaatsxddss" },
        this.whenIReceive4aaaatsxddss
      ),
    ];

    this.vars.type = 0;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone() {
    if (this.toNumber(this.vars.type) === 0) {
      this.costume = "costume1";
      this.visible = true;
      this.goto(-130, 184);
      for (let i = 0; i < 73; i++) {
        this.y -= 5;
        if (this.random(1, 15) === 1) {
          this.vars.type = 1;
          this.createClone();
        }
        yield;
      }
      this.deleteThisClone();
    } else {
      this.visible = true;
      this.costume = "costume2";
      for (let i = 0; i < 73; i++) {
        this.x += 5;
        yield;
      }
      this.deleteThisClone();
    }
  }

  *whenIReceiveHatsFallingThrowing() {
    for (let i = 0; i < 10; i++) {
      this.vars.type = 0;
      this.createClone();
      yield* this.wait(0.5);
      yield;
    }
    yield* this.wait(5);
    this.broadcast("Ur turn");
  }

  *startAsClone2() {
    while (true) {
      if (this.touching(this.sprites["Sprite20"].andClones())) {
        if (this.toNumber(this.stage.vars.iFrames) === 0) {
          this.stage.vars.hp += -42 + this.toNumber(this.stage.vars.armor);
          this.stage.vars.iFrames++;
        }
        this.deleteThisClone();
      }
      yield;
    }
  }

  *whenIReceive4aaaatsxddss() {
    for (let i = 0; i < 19; i++) {
      this.vars.type = 0;
      this.createClone();
      yield* this.wait(0.4);
      yield;
    }
    yield* this.wait(5);
    this.broadcast("Ur turn");
  }
}
