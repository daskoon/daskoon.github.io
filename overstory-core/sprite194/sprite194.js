import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite194 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./sprite194/costumes/costume1.png", {
        x: 18,
        y: 23,
      }),
      new Costume("costume2", "./sprite194/costumes/costume2.png", {
        x: 18,
        y: 18,
      }),
    ];

    this.sounds = [
      new Sound("Buttonpush", "./sprite194/sounds/Buttonpush.wav"),
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
    this.goto(0, -15);
    this.visible = true;
    this.moveBehind();
    this.costume = "costume1";
    yield* this.wait(0);
    while (true) {
      while (!this.touching(this.sprites["Player"].andClones())) {
        yield;
      }
      yield* this.startSound("Buttonpush");
      this.costume = "costume2";
      while (!!this.touching(this.sprites["Player"].andClones())) {
        yield;
      }
      this.costume = "costume1";
      yield;
    }
  }

  *whenIReceiveRoom44() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
