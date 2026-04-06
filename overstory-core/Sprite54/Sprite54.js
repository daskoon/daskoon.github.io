import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite54 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("CutesyShop", "./costumes/CutesyShop.png", {
        x: 105,
        y: 134,
      }),
      new Costume("CutesyShop2", "./costumes/CutesyShop2.png", {
        x: 105,
        y: 134,
      }),
      new Costume("costume1", "./costumes/costume1.png", {
        x: 105,
        y: 134,
      }),
    ];

    this.sounds = [new Sound("pop", "./sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Shop" }, this.whenIReceiveShop),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Room6" }, this.whenIReceiveRoom6),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room11" },
        this.whenIReceiveRoom11
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room14" },
        this.whenIReceiveRoom14
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room17" },
        this.whenIReceiveRoom17
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Mawege" },
        this.whenIReceiveMawege
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Back 2 normal :3" },
        this.whenIReceiveBack2Normal3
      ),
    ];
  }

  *whenIReceiveShop() {
    this.goto(69, 100);
    this.visible = true;
    while (true) {
      if (this.touching(this.sprites["Player"].andClones())) {
        if (!(this.toNumber(this.stage.vars.married) === 5)) {
          this.broadcast("Man come up");
        }
      }
      if (this.stage.costumeNumber === 6) {
        if (this.toNumber(this.stage.vars.marrying) === 0) {
          this.visible = true;
        }
      } else {
        this.visible = false;
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveRoom6() {
    this.visible = false;
  }

  *whenIReceiveRoom11() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.toNumber(this.stage.vars.married) === 1) {
        this.costume = "CutesyShop2";
      } else {
        if (this.toNumber(this.stage.vars.married) === 5) {
          this.costume = "costume1";
        } else {
          this.costume = "CutesyShop";
        }
      }
      yield;
    }
  }

  *whenIReceiveRoom14() {
    this.visible = false;
  }

  *whenIReceiveRoom17() {
    this.visible = false;
  }

  *whenIReceiveMawege() {
    this.visible = false;
  }

  *whenIReceiveBack2Normal3() {
    this.goto(69, 100);
    this.visible = true;
  }
}
