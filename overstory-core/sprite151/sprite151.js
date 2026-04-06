import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite151 extends Sprite {
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
        { name: "Room30" },
        this.whenIReceiveRoom30
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Combine painting 1" },
        this.whenIReceiveCombinePainting1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Nah, fam" },
        this.whenIReceiveNahFam
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room31" },
        this.whenIReceiveRoom31
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveRoom30() {
    this.goto(90, 20);
    this.visible = true;
    this.moveBehind();
    this.costume = "costume1";
    yield* this.wait(0);
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    yield* this.startSound("Buttonpush");
    this.broadcast("Check");
  }

  *whenIReceiveCombinePainting1() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.costume = "costume2";
  }

  *whenIReceiveNahFam() {
    this.goto(90, 20);
    this.visible = true;
    this.moveBehind();
    this.costume = "costume1";
    yield* this.wait(0);
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    yield* this.startSound("Buttonpush");
    this.broadcast("Check");
  }

  *whenIReceiveRoom31() {
    this.visible = false;
  }
}
