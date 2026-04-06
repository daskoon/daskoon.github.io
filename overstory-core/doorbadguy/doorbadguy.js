import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Doorbadguy extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.svg", {
        x: 2.5,
        y: 10.9375,
      }),
    ];

    this.sounds = [new Sound("pop", "./sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-206, -113);
    this.visible = true;
    this.effects.ghost += 100;
    while (true) {
      if (this.touching(Color.rgb(33, 92, 71))) {
        this.broadcast("Left");
      }
      yield;
    }
  }
}
