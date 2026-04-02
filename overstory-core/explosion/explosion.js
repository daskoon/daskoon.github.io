import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Explosion extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./explosion/costumes/costume1.png", {
        x: 102,
        y: 61,
      }),
    ];

    this.sounds = [
      new Sound("chicken-jockey", "./explosion/sounds/chicken-jockey.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone() {
    yield* this.startSound("chicken-jockey");
    this.effects.brightness = 100;
    this.visible = true;
    this.goto(this.sprites["Sprite45"].x, this.sprites["Sprite45"].y);
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
    for (let i = 0; i < 10; i++) {
      this.move(5);
      yield;
    }
    this.deleteThisClone();
  }

  *startAsClone2() {
    this.size = 50;
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
