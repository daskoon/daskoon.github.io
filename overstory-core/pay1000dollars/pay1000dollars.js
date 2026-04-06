import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Pay1000dollars extends Sprite {
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
      new Sound("pop", "./sounds/pop.wav"),
      new Sound("Buttonpush", "./sounds/Buttonpush.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room 2" },
        this.whenIReceiveRoom2
      ),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    yield* this.startSound("Buttonpush");
    if (this.toNumber(this.stage.vars.speed) === 4) {
      if (this.costumeNumber === 1) {
        this.broadcast("Open door");
        this.costume = "costume2";
        /* TODO: Implement stop other scripts in sprite */ null;
      }
    }
  }

  *whenIReceiveRoom2() {
    this.visible = false;
  }

  *whenIReceiveStart() {
    this.goto(0, -15);
    this.visible = true;
    this.moveBehind();
    this.costume = "costume1";
    yield* this.wait(0);
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Hmm");
  }
}
