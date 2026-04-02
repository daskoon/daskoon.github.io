import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite154 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./sprite154/costumes/costume1.png", {
        x: 83,
        y: 55,
      }),
    ];

    this.sounds = [
      new Sound("Cant Select", "./sprite154/sounds/Cant Select.wav"),
      new Sound(
        "cash-register-purchase-87313",
        "./sprite154/sounds/cash-register-purchase-87313.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Shop2 interface" },
        this.whenIReceiveShop2Interface
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Exit shop2" },
        this.whenIReceiveExitShop2
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.attackssss = 0;
    this.stage.watchers.attackssss.visible = false;
    this.visible = false;
  }

  *whenIReceiveShop2Interface() {
    if (this.toNumber(this.stage.vars.chapter) === 3) {
      this.stage.watchers.attackssss.visible = true;
      this.goto(-170, 5);
      this.moveAhead();
      this.costume = "costume1";
      this.visible = true;
    }
  }

  *whenthisspriteclicked() {
    this.effects.clear();
    if (
      this.compare(199, this.stage.vars._) < 0 &&
      !(this.compare(8, this.stage.vars.attackssss) < 0)
    ) {
      yield* this.startSound("cash-register-purchase-87313");
      this.stage.vars.yunuchi -= 200;
      this.stage.vars.attackssss++;
      this.effects.clear();
      this.effects.brightness = 100;
      for (let i = 0; i < 20; i++) {
        this.effects.brightness -= 5;
        yield;
      }
      this.effects.clear();
    } else {
      yield* this.startSound("Cant Select");
    }
  }

  *whenIReceiveExitShop2() {
    this.stage.watchers.attackssss.visible = false;
    this.visible = false;
  }
}
