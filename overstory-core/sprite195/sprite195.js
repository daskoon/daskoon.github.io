import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite195 extends Sprite {
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

    this.sounds = [
      new Sound("Buttonpush", "./sounds/Buttonpush.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room43" },
        this.whenIReceiveRoom43
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room44" },
        this.whenIReceiveRoom44
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveRoom43() {
    this.goto(225, -15);
    this.size = 50;
    this.visible = true;
    this.effects.ghost = 40;
    this.moveBehind();
    this.costume = "costume1";
    yield* this.wait(0);
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    yield* this.startSound("Buttonpush");
    this.costume = "costume2";
    this.broadcast("Open door43");
    this.effects.ghost = 0;
  }

  *whenIReceiveRoom44() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
