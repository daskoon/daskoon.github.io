import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite187 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.png", {
        x: 98,
        y: 68,
      }),
    ];

    this.sounds = [new Sound("pop", "./sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room41" },
        this.whenIReceiveRoom41
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Shop" }, this.whenIReceiveShop),
    ];
  }

  *whenIReceiveRoom41() {
    this.size = 100;
    this.visible = true;
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Read sign ahh");
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      this.goto(0, 120);
      this.x += this.random(-1, 1);
      this.y += this.random(-1, 1);
      yield;
    }
  }

  *whenIReceiveShop() {
    this.visible = false;
  }
}
