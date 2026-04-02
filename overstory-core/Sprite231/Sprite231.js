import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite231 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite231/costumes/costume1.png", {
        x: 21,
        y: 38,
      }),
    ];

    this.sounds = [new Sound("pop", "./Sprite231/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room47" },
        this.whenIReceiveRoom47
      ),
      new Trigger(Trigger.BROADCAST, { name: "Shop" }, this.whenIReceiveShop),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveRoom47() {
    this.goto(0, 120);
    this.visible = true;
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("lamp");
  }

  *whenIReceiveShop() {
    this.visible = false;
  }
}
