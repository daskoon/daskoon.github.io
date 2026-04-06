import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite76 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.png", {
        x: 83,
        y: 93,
      }),
      new Costume("costume2", "./costumes/costume2.png", {
        x: 83,
        y: 109,
      }),
    ];

    this.sounds = [new Sound("pop", "./sounds/pop.wav")];

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
    this.visible = false;
  }

  *whenIReceiveShopInterface() {
    if (this.toNumber(this.stage.vars.chapter) === 1) {
      if (
        this.toNumber(this.stage.vars.amuletAvalible) === 1 ||
        this.toNumber(this.stage.vars.amuletAvalible) === 2
      ) {
        this.moveAhead();
        this.goto(10, 84);
        this.visible = true;
        if (this.toNumber(this.stage.vars.married) === 1) {
          this.costume = "costume2";
        } else {
          this.costume = "costume1";
        }
      }
    }
  }

  *whenthisspriteclicked() {
    if (this.toNumber(this.stage.vars.married) === 1) {
      if (this.compare(49, this.stage.vars._) < 0) {
        if (this.toNumber(this.stage.vars.amuletAvalible) === 1) {
          this.broadcast("Heed my warning");
        }
        if (this.toNumber(this.stage.vars.amuletAvalible) === 2) {
          yield* this.startSound("pop");
          this.stage.vars.yunuchi -= 50;
          this.stage.vars.amuletAvalible = 3;
          this.visible = false;
        }
      }
    } else {
      if (this.compare(99, this.stage.vars._) < 0) {
        if (this.toNumber(this.stage.vars.amuletAvalible) === 1) {
          this.broadcast("Heed my warning");
        }
        if (this.toNumber(this.stage.vars.amuletAvalible) === 2) {
          yield* this.startSound("pop");
          this.stage.vars.yunuchi -= 100;
          this.stage.vars.amuletAvalible = 3;
          this.visible = false;
        }
      }
    }
  }

  *whenIReceiveExitShop() {
    this.visible = false;
  }

  *whenIReceivePropose() {
    this.visible = false;
  }

  *whenIReceiveHeedMyWarning() {
    this.visible = false;
  }
}
