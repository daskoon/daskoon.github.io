import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Purple extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./purple/costumes/costume1.png", {
        x: 29,
        y: 41,
      }),
      new Costume("costume3", "./purple/costumes/costume3.png", {
        x: 29,
        y: 41,
      }),
    ];

    this.sounds = [new Sound("pop", "./purple/sounds/pop.wav")];

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
      new Trigger(Trigger.CLONE_START, this.startAsClone),
    ];

    this.vars.justSpun = 1;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveCupGame() {
    this.visible = true;
    this.goto(0, 65);
    this.costume = "costume1";
    yield* this.wait(1);
    this.costume = "costume3";
    yield* this.wait(0.5);
    this.costume = "costume1";
    yield* this.wait(0.5);
    this.stage.vars.spins = this.random(5, 20);
    this.broadcast("Spinit");
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
    this.costume = "costume3";
    yield* this.startSound("pop");
    yield* this.wait(0.5);
    this.broadcast("Ur turn");
  }

  *whenIReceiveUrTurn() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }

  *startAsClone() {
    this.visible = true;
    this.goto(this.sprites["Sprite45"].x, this.sprites["Sprite45"].y);
    this.direction = this.radToScratch(
      Math.atan2(
        this.sprites["Player"].y - this.y,
        this.sprites["Player"].x - this.x
      )
    );
    while (!this.touching("edge")) {
      this.move(10);
      yield;
    }
    for (let i = 0; i < 10; i++) {
      this.move(10);
      yield;
    }
    this.deleteThisClone();
  }
}
