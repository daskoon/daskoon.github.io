import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class omgredbutton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./omgredbutton/costumes/costume1.png", {
        x: 18,
        y: 23,
      }),
      new Costume("costume2", "./omgredbutton/costumes/costume2.png", {
        x: 18,
        y: 18,
      }),
    ];

    this.sounds = [new Sound("Buttonpush", "./omgredbutton/sounds/Buttonpush.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Room7" }, this.whenIReceiveRoom7),
      new Trigger(Trigger.BROADCAST, { name: "Room8" }, this.whenIReceiveRoom8),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Dark room" },
        this.whenIReceiveDarkRoom
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveRoom7() {
    this.goto(120, -15);
    this.visible = true;
    this.moveBehind();
    this.costume = "costume1";
    yield* this.wait(0);
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    yield* this.startSound("Buttonpush");
    if (this.toNumber(this.stage.vars.speed) === 4) {
      if (this.costumeNumber === 1) {
        this.broadcast("Open foooor");
        this.costume = "costume2";
        /* TODO: Implement stop other scripts in sprite */ null;
      }
    }
  }

  *whenIReceiveRoom8() {
    this.visible = false;
  }

  *whenIReceiveDarkRoom() {
    this.visible = false;
  }
}
