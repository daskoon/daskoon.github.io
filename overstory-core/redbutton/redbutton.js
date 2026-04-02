import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Redbutton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./redbutton/costumes/costume1.svg", {
        x: 2.505898613956475,
        y: 10.934731559658303,
      }),
    ];

    this.sounds = [new Sound("pop", "./redbutton/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-126, -113);
    this.visible = true;
    this.effects.ghost += 100;
    while (true) {
      if (this.touching(Color.rgb(33, 92, 71))) {
        this.broadcast("Right");
      }
      yield;
    }
  }
}
