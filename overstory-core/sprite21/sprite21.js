import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite21 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./sprite21/costumes/costume1.png", {
        x: 18,
        y: 23,
      }),
      new Costume("costume2", "./sprite21/costumes/costume2.png", {
        x: 18,
        y: 18,
      }),
    ];

    this.sounds = [
      new Sound("pop", "./sprite21/sounds/pop.wav"),
      new Sound("Buttonpush", "./sprite21/sounds/Buttonpush.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room29" },
        this.whenIReceiveRoom29
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room28" },
        this.whenIReceiveRoom28
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room28" },
        this.whenIReceiveRoom30
      ),
      new Trigger(Trigger.BROADCAST, { name: "Nope!!" }, this.whenIReceiveNope),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Nope!!" },
        this.whenIReceiveNope2
      ),
      new Trigger(Trigger.BROADCAST, { name: "Is it?" }, this.whenIReceiveIsIt),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveRoom29() {
    this.visible = false;
  }

  *whenIReceiveRoom28() {
    this.stage.vars.passcodeOfTheFriggenThingy = [];
    this.goto(0, 85);
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
        this.stage.vars.passcodeOfTheFriggenThingy.push(2);
      }
    }
  }

  *whenIReceiveRoom30() {
    yield* this.wait(0);
    while (!(this.stage.vars.passcodeOfTheFriggenThingy.length === 3)) {
      yield;
    }
    yield* this.wait(0.5);
    this.broadcast("Is it?");
  }

  *whenIReceiveNope() {
    yield* this.wait(0);
    while (!(this.stage.vars.passcodeOfTheFriggenThingy.length === 3)) {
      yield;
    }
    yield* this.wait(0.5);
    this.broadcast("Is it?");
  }

  *whenIReceiveNope2() {
    this.stage.vars.passcodeOfTheFriggenThingy = [];
    this.goto(0, 85);
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
        this.stage.vars.passcodeOfTheFriggenThingy.push(2);
      }
    }
  }

  *whenIReceiveIsIt() {
    if (
      this.toNumber(this.stage.vars.passcodeOfTheFriggenThingy.join(" ")) ===
        231 ||
      this.stage.vars.passcodeOfTheFriggenThingy.join(" ") === "2 3 1"
    ) {
      this.broadcast("Open puzzel door so cool");
    } else {
      yield* this.wait(0);
      this.broadcast("Nope!!");
    }
  }
}
