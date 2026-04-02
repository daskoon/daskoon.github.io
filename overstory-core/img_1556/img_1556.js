import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Img_1556 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./img_1556/costumes/costume1.png", {
        x: 14,
        y: 7,
      }),
      new Costume("costume2", "./img_1556/costumes/costume2.png", {
        x: 14,
        y: 26,
      }),
      new Costume("costume3", "./img_1556/costumes/costume3.png", {
        x: 14,
        y: 40,
      }),
      new Costume("costume4", "./img_1556/costumes/costume4.png", {
        x: 14,
        y: 53,
      }),
      new Costume("costume5", "./img_1556/costumes/costume5.png", {
        x: 14,
        y: 55,
      }),
      new Costume("costume6", "./img_1556/costumes/costume6.png", {
        x: 14,
        y: 55,
      }),
      new Costume("costume7", "./img_1556/costumes/costume7.png", {
        x: 14,
        y: 55,
      }),
    ];

    this.sounds = [new Sound("pop", "./img_1556/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room31" },
        this.whenIReceiveRoom31
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Plant grow" },
        this.whenIReceivePlantGrow
      ),
      new Trigger(Trigger.BROADCAST, { name: "Shop" }, this.whenIReceiveShop),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveRoom31() {
    this.costume = "costume1";
    this.goto(100, 0);
    this.visible = true;
  }

  *whenIReceivePlantGrow() {
    if (!(this.costumeNumber === 7)) {
      this.costumeNumber++;
    } else {
      this.broadcast("Plant hath openeth doorth");
      yield* this.startSound("pop");
    }
  }

  *whenIReceiveShop() {
    this.visible = false;
  }
}
