import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite48 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.png", {
        x: 29,
        y: 41,
      }),
      new Costume("costume2", "./costumes/costume2.png", {
        x: 29,
        y: 41,
      }),
    ];

    this.sounds = [new Sound("pop", "./sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Cup game" },
        this.whenIReceiveCupGame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Spinit" },
        this.whenIReceiveSpinit
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ur turn" },
        this.whenIReceiveUrTurn
      ),
    ];

    this.vars.justSpun = 1;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveCupGame() {
    this.visible = true;
    this.goto(60, -25);
    this.costume = "costume1";
  }

  *whenIReceiveSpinit() {
    for (let i = 0; i < this.toNumber(this.stage.vars.spins); i++) {
      this.vars.justSpun = 0;
      if (this.y === 65) {
        if (this.toNumber(this.vars.justSpun) === 0) {
          yield* this.glide(0.2, 60, -25);
          this.vars.justSpun = 1;
        }
      }
      if (this.x === -60) {
        if (this.toNumber(this.vars.justSpun) === 0) {
          yield* this.glide(0.2, 0, 65);
          this.vars.justSpun = 1;
        }
      }
      if (this.x === 60) {
        if (this.toNumber(this.vars.justSpun) === 0) {
          yield* this.glide(0.2, -60, -25);
          this.vars.justSpun = 1;
        }
      }
      yield;
    }
    while (!this.touching(this.sprites["Sprite20"].andClones())) {
      yield;
    }
    this.costume = "costume2";
    this.stage.vars.hp -= 10;
    yield* this.startSound("pop");
    yield* this.wait(0.5);
    this.broadcast("Ur turn");
  }

  *whenIReceiveUrTurn() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }
}
