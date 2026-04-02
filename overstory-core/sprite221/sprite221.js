import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite221 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./sprite221/costumes/costume1.png", {
        x: 67,
        y: 48,
      }),
      new Costume("costume2", "./sprite221/costumes/costume2.png", {
        x: 16,
        y: 24,
      }),
      new Costume("costume3", "./sprite221/costumes/costume3.png", {
        x: 19,
        y: 24,
      }),
    ];

    this.sounds = [new Sound("pop", "./sprite221/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "toriel hand attacl" },
        this.whenIReceiveTorielHandAttacl
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone() {
    this.visible = true;
    while (true) {
      this.costume = "costume2";
      yield* this.wait(0.1);
      this.costume = "costume3";
      yield* this.wait(0.1);
      yield;
    }
  }

  *startAsClone2() {
    yield* this.wait(2);
    this.direction = this.radToScratch(
      Math.atan2(
        this.sprites["Sprite20"].y - this.y,
        this.sprites["Sprite20"].x - this.x
      )
    );
    while (!this.touching("edge")) {
      this.move(5);
      yield;
    }
    this.deleteThisClone();
  }

  *startAsClone3() {
    while (true) {
      if (this.touching(this.sprites["Sprite20"].andClones())) {
        if (this.toNumber(this.stage.vars.iFrames) === 0) {
          this.stage.vars.hp += -58 + this.toNumber(this.stage.vars.armor);
          this.stage.vars.iFrames++;
        }
        this.deleteThisClone();
      }
      yield;
    }
  }

  *whenIReceiveTorielHandAttacl() {
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
    this.costume = "costume1";
    this.goto(-179, 74);
    this.visible = true;
    for (let i = 0; i < 11; i++) {
      for (let i = 0; i < 5; i++) {
        this.x += 6;
        yield;
      }
      this.createClone();
      yield;
    }
    this.visible = false;
    yield* this.wait(6);
    this.broadcast("Ur turn");
  }
}
