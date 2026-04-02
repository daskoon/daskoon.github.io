import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite236 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite236/costumes/costume1.png", {
        x: 152,
        y: 28,
      }),
    ];

    this.sounds = [new Sound("pop", "./Sprite236/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "94y 0r d13" },
        this.whenIReceive94y0rD13
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Legal Document" },
        this.whenIReceiveLegalDocument
      ),
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

  *whenIReceive94y0rD13() {
    this.goto(0, -80);
    this.moveAhead();
    this.visible = true;
  }

  *whenIReceiveLegalDocument() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("00nt 94y");
  }

  *whenIReceive00nt94y() {
    this.visible = false;
  }
}
