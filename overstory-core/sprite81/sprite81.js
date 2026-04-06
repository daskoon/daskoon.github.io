import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite81 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.png", {
        x: 32,
        y: 18,
      }),
    ];

    this.sounds = [new Sound("pop", "./sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Dumbells" },
        this.whenIReceiveDumbells
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ur turn" },
        this.whenIReceiveUrTurn
      ),
    ];

    this.vars.mm = -15;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone() {
    this.visible = true;
    this.size = 200;
    this.goto(this.random(-60, 65), 193);
    this.vars.mm = 0;
    yield* this.wait(0.5);
    for (let i = 0; i < 22; i++) {
      this.vars.mm--;
      this.y += this.toNumber(this.vars.mm);
      yield;
    }
    this.y -= 5;
    yield* this.startSound("pop");
    yield* this.wait(1);
    this.vars.mm = 0;
    for (let i = 0; i < 15; i++) {
      this.vars.mm--;
      this.y += this.toNumber(this.vars.mm);
      yield;
    }
    this.deleteThisClone();
  }

  *whenIReceiveDumbells() {
    for (let i = 0; i < 10; i++) {
      this.createClone();
      yield* this.wait(1.3);
      yield;
    }
    yield* this.wait(2);
    this.broadcast("Ur turn");
  }

  *startAsClone2() {
    while (true) {
      if (this.touching(this.sprites["Sprite20"].andClones())) {
        if (this.toNumber(this.stage.vars.iFrames) === 0) {
          this.stage.vars.hp -= 7;
          this.stage.vars.iFrames++;
        }
        this.deleteThisClone();
      }
      yield;
    }
  }

  *whenIReceiveUrTurn() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.deleteThisClone();
  }
}
