import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Greenthing extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./greenthing/costumes/costume1.png", { x: 4, y: 7 }),
    ];

    this.sounds = [
      new Sound("Cant Select", "./greenthing/sounds/Cant Select.wav"),
      new Sound("Ow", "./greenthing/sounds/Ow.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
    ];

    this.vars.mm = 0;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.vars.mm = 0;
    this.stage.vars.iFrames = 0;
    yield* this.wait(0);
    while (true) {
      while (!(this.toNumber(this.stage.vars.iFrames) === 1)) {
        yield;
      }
      this.broadcast("Owsies");
      yield* this.startSound("Ow");
      yield* this.wait(0.6);
      this.stage.vars.iFrames = 0;
      yield;
    }
  }

  *startAsClone() {
    yield* this.startSound("Cant Select");
    this.moveAhead();
    this.visible = true;
    this.goto(103, -14);
    this.direction = this.radToScratch(
      Math.atan2(
        this.sprites["Sprite20"].y - this.y,
        this.sprites["Sprite20"].x - this.x
      )
    );
    this.vars.mm = 0;
    while (!this.touching("edge")) {
      this.vars.mm += 0.3;
      this.move(this.toNumber(this.vars.mm));
      yield;
    }
    this.deleteThisClone();
  }

  *startAsClone2() {
    while (true) {
      if (this.touching(this.sprites["Sprite20"].andClones())) {
        if (this.toNumber(this.stage.vars.iFrames) === 0) {
          if (this.toNumber(this.stage.vars.battle) === 11) {
            this.stage.vars.hp += -25 + this.toNumber(this.stage.vars.armor);
          } else {
            if (this.toNumber(this.stage.vars.battle) === 15) {
              this.stage.vars.hp += -30 + this.toNumber(this.stage.vars.armor);
            } else {
              this.stage.vars.hp -= 6;
            }
          }
          this.stage.vars.iFrames++;
        }
        this.deleteThisClone();
      }
      yield;
    }
  }
}
