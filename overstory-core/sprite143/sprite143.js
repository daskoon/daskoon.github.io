import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite143 extends Sprite {
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
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room28" },
        this.whenIReceiveRoom28
      ),
      new Trigger(Trigger.BROADCAST, { name: "Nope!!" }, this.whenIReceiveNope),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room29" },
        this.whenIReceiveRoom29
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveRoom28() {
    this.goto(-100, 85);
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
        this.costume = "costume2";
        this.stage.vars.passcodeOfTheFriggenThingy.push(1);
        /* TODO: Implement stop other scripts in sprite */ null;
      }
    }
  }

  *whenIReceiveNope() {
    this.goto(-100, 85);
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
        this.costume = "costume2";
        this.stage.vars.passcodeOfTheFriggenThingy.push(1);
        /* TODO: Implement stop other scripts in sprite */ null;
      }
    }
  }

  *whenIReceiveRoom29() {
    this.visible = false;
  }
}
