import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite52 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./sprite52/costumes/costume1.png", {
        x: 480,
        y: -78,
      }),
      new Costume("costume2", "./sprite52/costumes/costume2.png", {
        x: 13,
        y: 8,
      }),
    ];

    this.sounds = [new Sound("cheering", "./sprite52/sounds/cheering.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Say the line" },
        this.whenIReceiveSayTheLine
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
    ];

    this.vars.mm = -16;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveSayTheLine() {
    yield* this.wait(2);
    yield* this.startSound("cheering");
    this.moveAhead();
    this.visible = true;
    this.costume = "costume1";
    this.goto(0, -126);
    this.vars.mm = 0;
    this.direction = 90;
    for (let i = 0; i < 16; i++) {
      this.y += this.toNumber(this.vars.mm);
      this.vars.mm++;
      yield;
    }
    for (let i = 0; i < 4; i++) {
      for (let i = 0; i < 10; i++) {
        this.y -= 1;
        yield;
      }
      for (let i = 0; i < 10; i++) {
        this.y += 1;
        yield;
      }
      this.createClone();
      this.createClone();
      this.createClone();
      yield;
    }
    this.vars.mm = 0;
    for (let i = 0; i < 16; i++) {
      this.vars.mm--;
      this.y += this.toNumber(this.vars.mm);
      yield;
    }
    this.visible = false;
    yield* this.wait(1);
    this.broadcast("Chicken actually jockeys");
  }

  *startAsClone() {
    this.visible = true;
    this.goto(this.random(-180, 180), -130);
    this.costume = "costume2";
    this.direction = this.random(90, -90);
    while (!this.touching("edge")) {
      this.move(5);
      yield;
    }
    this.deleteThisClone();
  }

  *startAsClone2() {
    while (true) {
      if (this.touching(this.sprites["Sprite20"].andClones())) {
        if (this.toNumber(this.stage.vars.iFrames) === 0) {
          this.stage.vars.hp -= 5;
          this.stage.vars.iFrames++;
          this.deleteThisClone();
        }
      }
      yield;
    }
  }
}
