import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Attackslider extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.png", {
        x: 37,
        y: 28,
      }),
    ];

    this.sounds = [new Sound("pop", "./sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone() {
    if (this.toNumber(this.stage.vars.chapter) === 1) {
      this.visible = true;
      this.goto(100, 50);
      yield* this.glide(0.2, 100, -15);
      this.goto(100, -15);
      for (let i = 0; i < 50; i++) {
        this.effects.ghost += 2;
        yield;
      }
    }
    this.deleteThisClone();
  }
}
