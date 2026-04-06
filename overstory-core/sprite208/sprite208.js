import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite208 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.png", {
        x: 215,
        y: 107,
      }),
      new Costume("costume2", "./costumes/costume2.png", {
        x: 83,
        y: 55,
      }),
    ];

    this.sounds = [
      new Sound("Cant Select", "./sounds/Cant Select.wav"),
      new Sound(
        "cash-register-purchase-87313",
        "./sounds/cash-register-purchase-87313.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "shans" }, this.whenIReceiveShans),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "EXIT shans" },
        this.whenIReceiveExitShans
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.burntPan = 0;
    this.costume = "costume1";
    this.visible = false;
  }

  *whenIReceiveShans() {
    this.stage.watchers._.visible = true;
    this.moveAhead();
    this.goto(0, 0);
    this.visible = true;
    if (!(this.toNumber(this.stage.vars.burntPan) === 1)) {
      this.costume = "costume1";
    } else {
      this.costume = "costume2";
    }
  }

  *whenthisspriteclicked() {
    this.effects.clear();
    if (this.costumeNumber === 1 && this.compare(699, this.stage.vars._) < 0) {
      this.costume = "costume2";
      yield* this.startSound("cash-register-purchase-87313");
      this.stage.vars.yunuchi -= 700;
      this.stage.vars.burntPan = 1;
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

  *whenIReceiveExitShans() {
    this.visible = false;
  }
}
