import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite245 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite245/costumes/costume1.png", {
        x: 101,
        y: 51,
      }),
    ];

    this.sounds = [new Sound("pop", "./Sprite245/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Legal Document" },
        this.whenIReceiveLegalDocument
      ),
      new Trigger(Trigger.BROADCAST, { name: "9p4ay" }, this.whenIReceive9p4ay),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
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
    this.goto(-178, -100);
    this.moveAhead();
    this.visible = true;
  }

  *whenIReceive9p4ay() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("00nt 94y");
  }

  *whenIReceive00nt94y() {
    this.visible = false;
  }
}
