import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite192 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./sprite192/costumes/costume1.png", {
        x: 9,
        y: 10,
      }),
    ];

    this.sounds = [new Sound("pop", "./sprite192/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Heads will fly" },
        this.whenIReceiveHeadsWillFly
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
    ];

    this.vars.type = 0;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone() {
    if (this.toNumber(this.vars.type) === 0) {
      this.size = 400;
      this.visible = true;
      this.goto(this.random(81, -70), 121);
      this.direction = this.random(1, 360);
      for (let i = 0; i < 40; i++) {
        this.direction += 8;
        this.y -= 5;
        yield;
      }
      this.vars.type = 1;
      this.direction = -60;
      this.createClone();
      this.direction = 0;
      this.direction += this.random(-15, 15);
      this.createClone();
      this.direction = 60;
      this.createClone();
      this.deleteThisClone();
    }
    if (this.toNumber(this.vars.type) === 1) {
      this.visible = true;
      this.size = 200;
      for (let i = 0; i < 10; i++) {
        this.move(10);
        yield;
      }
      for (let i = 0; i < 10; i++) {
        this.move(10);
        this.y -= 5;
        yield;
      }
      for (let i = 0; i < 10; i++) {
        this.move(10);
        this.y -= 15;
        this.effects.ghost += 10;
        yield;
      }
      this.deleteThisClone();
    }
  }

  *whenIReceiveHeadsWillFly() {
    for (let i = 0; i < 4; i++) {
      this.vars.type = 0;
      this.createClone();
      yield* this.wait(3);
      yield;
    }
    yield* this.wait(2);
    this.broadcast("Ur turn");
  }

  *startAsClone2() {
    while (true) {
      if (this.touching(this.sprites["Sprite20"].andClones())) {
        if (this.toNumber(this.stage.vars.iFrames) === 0) {
          this.stage.vars.hp += -36 + this.toNumber(this.stage.vars.armor);
          this.stage.vars.iFrames++;
        }
        this.deleteThisClone();
      }
      yield;
    }
  }
}
