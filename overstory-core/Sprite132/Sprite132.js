import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite132 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("CutesyShop", "./Sprite132/costumes/CutesyShop.png", {
        x: 105,
        y: 134,
      }),
    ];

    this.sounds = [new Sound("pop", "./Sprite132/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Shop" }, this.whenIReceiveShop),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Room6" }, this.whenIReceiveRoom6),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room11" },
        this.whenIReceiveRoom11
      ),
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
    this.goto(-155, 100);
    this.visible = true;
    while (true) {
      if (
        this.toNumber(this.stage.vars.chapter) === 2 ||
        this.toNumber(this.stage.vars.chapter) === 3
      ) {
        if (this.touching(this.sprites["Player"].andClones())) {
          this.broadcast("Other man come up");
        }
        if (this.stage.costumeNumber === 6) {
          if (this.toNumber(this.stage.vars.marrying) === 0) {
            if (this.toNumber(this.stage.vars.chapter) === 2) {
              this.visible = true;
            }
          }
        } else {
          this.visible = false;
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
    this.goto(-155, 100);
    this.visible = true;
  }
}
