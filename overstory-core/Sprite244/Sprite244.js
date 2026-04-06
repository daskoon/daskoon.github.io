import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite244 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.svg", {
        x: 123.00000000000006,
        y: 156.5,
      }),
      new Costume("costume2", "./costumes/costume2.svg", {
        x: 123.00000000000006,
        y: 156.5,
      }),
    ];

    this.sounds = [
      new Sound("recording1", "./sounds/recording1.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Legal Document" },
        this.whenIReceiveLegalDocument
      ),
      new Trigger(Trigger.BROADCAST, { name: "9p4ay" }, this.whenIReceive9p4ay),
      new Trigger(
        Trigger.BROADCAST,
        { name: "00nt 94y" },
        this.whenIReceive00nt94y
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveLegalDocument() {
    this.costume = "costume1";
    this.goto(0, 0);
    this.moveAhead();
    this.visible = true;
  }

  *whenIReceive9p4ay() {
    yield* this.startSound("recording1");
    this.costume = "costume2";
    yield* this.wait(1.3);
    this.visible = false;
  }

  *whenIReceive00nt94y() {
    this.visible = false;
  }
}
