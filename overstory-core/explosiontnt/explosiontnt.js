import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Explosiontnt extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./explosiontnt/costumes/costume1.png", {
        x: 57,
        y: 56,
      }),
    ];

    this.sounds = [new Sound("pop", "./explosiontnt/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Do or donÃ¢â‚¬â„¢ts" },
        this.whenIReceiveDoOrDonTs
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "Do" }, this.whenIReceiveDo),
      new Trigger(
        Trigger.BROADCAST,
        { name: "DonÃ¢â‚¬â„¢t Ã°Å¸ËœÂ¬" },
        this.whenIReceiveDonT
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveDoOrDonTs() {
    this.visible = true;
    this.goto(150, 0);
  }

  *whenthisspriteclicked() {
    this.broadcast("DonÃ¢â‚¬â„¢t Ã°Å¸ËœÂ¬");
  }

  *whenIReceiveDo() {
    this.visible = false;
  }

  *whenIReceiveDonT() {
    this.visible = false;
  }
}
