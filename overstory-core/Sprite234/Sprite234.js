import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite234 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite234/costumes/costume1.png", {
        x: 46,
        y: 55,
      }),
      new Costume("costume2", "./Sprite234/costumes/costume2.png", {
        x: 46,
        y: 55,
      }),
    ];

    this.sounds = [new Sound("pop", "./Sprite234/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.toNumber(this.stage.vars.chapter) === 3) {
        if (this.stage.costumeNumber === 6) {
          this.goto(-19, 123);
          this.moveBehind();
          this.visible = true;
          if (this.compare(5, this.stage.vars.shop) < 0) {
            this.costume = "costume2";
          } else {
            this.costume = "costume1";
          }
        } else {
          this.visible = false;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.stage.costumeNumber === 6) {
        if (this.toNumber(this.stage.vars.chapter) === 3) {
          this.goto(-19, 123);
          this.size = 70;
          this.visible = true;
        } else {
          this.visible = false;
        }
      }
      yield;
    }
  }
}
