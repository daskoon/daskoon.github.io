import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite246 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite246/costumes/costume1.png", {
        x: 101,
        y: 51,
      }),
    ];

    this.sounds = [new Sound("pop", "./Sprite246/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Legal Document" },
        this.whenIReceiveLegalDocument
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "9p4ay" }, this.whenIReceive9p4ay),
      new Trigger(
        Trigger.BROADCAST,
        { name: "00nt 94y" },
        this.whenIReceive00nt94y
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Deeeeeeeaaaad" },
        this.whenIReceiveDeeeeeeeaaaad
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveLegalDocument() {
    this.goto(178, -100);
    this.moveAhead();
    this.visible = true;
  }

  *whenthisspriteclicked() {
    if (this.compare(999, this.stage.vars.yunuchi) < 0) {
      this.broadcast("9p4ay");
      this.stage.vars.yunuchi -= 1000;
      while (true) {
        this.stage.vars.yunuchi -= 10;
        yield* this.wait(1);
        yield;
      }
    } else {
      this.stage.vars.hp = 0;
    }
  }

  *whenIReceive9p4ay() {
    this.visible = false;
  }

  *whenIReceive00nt94y() {
    this.visible = false;
  }

  *whenIReceiveDeeeeeeeaaaad() {
    this.goto(0, 0);
    this.moveAhead();
    this.visible = true;
  }

  *whenthisspriteclicked() {
    if (this.visible) {
      if (this.stage.vars.hp === 0) {
        this.broadcast("Restart");
        this.visible = false;
      } else if (this.compare(999, this.stage.vars.yunuchi) < 0) {
        this.broadcast("9p4ay");
        this.stage.vars.yunuchi -= 1000;
        while (true) {
          this.stage.vars.yunuchi -= 10;
          yield* this.wait(1);
          yield;
        }
      } else {
        this.stage.vars.hp = 0;
      }
    }
  }
}
