import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite197 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.png", {
        x: 21,
        y: 38,
      }),
    ];

    this.sounds = [new Sound("pop", "./sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room44" },
        this.whenIReceiveRoom44
      ),
      new Trigger(Trigger.BROADCAST, { name: "Shop" }, this.whenIReceiveShop),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveRoom44() {
    this.visible = true;
    this.goto(0, -15);
    while (true) {
      if (!(this.compare(1, this.sprites["Player"].x) < 0)) {
        if (!(this.sprites["Player"].costumeNumber === 2)) {
          this.goto(0, this.sprites["Player"].y);
        } else {
          yield* this.wait(0.9);
        }
      }
      yield;
    }
  }

  *whenIReceiveShop() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
