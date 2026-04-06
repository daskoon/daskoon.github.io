import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bluebutton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.svg", {
        x: 10.875000000000028,
        y: 2.5,
      }),
    ];

    this.sounds = [new Sound("pop", "./sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-164, -150);
    this.visible = true;
    this.effects.ghost += 100;
    while (true) {
      while (!this.touching(Color.rgb(33, 92, 71))) {
        yield;
      }
      this.broadcast("Down");
      while (!!this.touching(Color.rgb(33, 92, 71))) {
        yield;
      }
      yield;
    }
  }
}
