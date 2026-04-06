import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite58 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.png", {
        x: 18,
        y: 23,
      }),
      new Costume("costume2", "./costumes/costume2.png", {
        x: 18,
        y: 18,
      }),
    ];

    this.sounds = [new Sound("Buttonpush", "./sounds/Buttonpush.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Room8" }, this.whenIReceiveRoom8),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Thurn on room8 fan" },
        this.whenIReceiveThurnOnRoom8Fan
      ),
      new Trigger(Trigger.BROADCAST, { name: "Room9" }, this.whenIReceiveRoom9),
      new Trigger(Trigger.BROADCAST, { name: "Shop" }, this.whenIReceiveShop),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveRoom8() {
    this.goto(0, -15);
    this.visible = true;
    this.moveBehind();
    this.costume = "costume1";
  }

  *whenIReceiveThurnOnRoom8Fan() {
    yield* this.wait(0);
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    if (this.toNumber(this.stage.vars.speed) === 4) {
      if (this.costumeNumber === 1) {
        yield* this.startSound("Buttonpush");
        this.broadcast("Thurn of fan 2 of room8");
        this.costume = "costume2";
        /* TODO: Implement stop other scripts in sprite */ null;
      }
    }
  }

  *whenIReceiveRoom9() {
    this.visible = false;
  }

  *whenIReceiveShop() {
    this.visible = false;
  }
}
