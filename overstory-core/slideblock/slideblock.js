import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Slideblock extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./slideblock/costumes/costume1.png", {
        x: 18,
        y: 23,
      }),
      new Costume("costume2", "./slideblock/costumes/costume2.png", {
        x: 18,
        y: 18,
      }),
    ];

    this.sounds = [
      new Sound("pop", "./slideblock/sounds/pop.wav"),
      new Sound("Buttonpush", "./slideblock/sounds/Buttonpush.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Room6" }, this.whenIReceiveRoom6),
      new Trigger(Trigger.BROADCAST, { name: "Room7" }, this.whenIReceiveRoom7),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveRoom6() {
    this.goto(-180, 50);
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
        this.broadcast("Turn off fan1");
        this.costume = "costume2";
        /* TODO: Implement stop other scripts in sprite */ null;
      }
    }
  }

  *whenIReceiveRoom7() {
    this.visible = false;
  }
}
