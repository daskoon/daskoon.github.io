import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Lilgreendude extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.png", {
        x: 83,
        y: 107,
      }),
      new Costume("costume3", "./costumes/costume3.png", {
        x: 83,
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
      new Trigger(
        Trigger.BROADCAST,
        { name: "Shop interface" },
        this.whenIReceiveShopInterface
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Exit shop" },
        this.whenIReceiveExitShop
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Propose" },
        this.whenIReceivePropose
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Heed my warning" },
        this.whenIReceiveHeedMyWarning
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.crackleWhip = 0;
    this.costume = "costume1";
    this.visible = false;
  }

  *whenIReceiveShopInterface() {
    this.stage.watchers._.visible = true;
    this.moveAhead();
    this.goto(-85, 90);
    this.visible = true;
    this.stage.watchers.grilledCheese.visible = false;
    if (!(this.toNumber(this.stage.vars.crackleWhip) === 1)) {
      if (this.toNumber(this.stage.vars.married) === 1) {
        this.costume = "costume3";
      } else {
        this.costume = "costume1";
      }
    } else {
      this.costume = "costume2";
    }
  }

  *whenthisspriteclicked() {
    this.effects.clear();
    if (this.toNumber(this.stage.vars.married) === 1) {
      if (
        !(this.costumeNumber === 3) &&
        this.compare(39, this.stage.vars._) < 0
      ) {
        this.costume = "costume2";
        yield* this.startSound("cash-register-purchase-87313");
        this.stage.vars.yunuchi -= 40;
        this.stage.vars.crackleWhip = 1;
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
    } else {
      if (this.costumeNumber === 1 && this.compare(79, this.stage.vars._) < 0) {
        this.costume = "costume2";
        yield* this.startSound("cash-register-purchase-87313");
        this.stage.vars.yunuchi -= 80;
        this.stage.vars.crackleWhip = 1;
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
  }

  *whenIReceiveExitShop() {
    this.stage.vars.speed = 4;
    this.visible = false;
  }

  *whenIReceivePropose() {
    this.stage.watchers.grilledCheese.visible = false;
    this.visible = false;
  }

  *whenIReceiveHeedMyWarning() {
    this.visible = false;
  }
}
