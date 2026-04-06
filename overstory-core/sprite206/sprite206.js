import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite206 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume3", "./costumes/costume3.png", {
        x: 58,
        y: 44,
      }),
      new Costume("costume4", "./costumes/costume4.png", {
        x: 59,
        y: 47,
      }),
      new Costume("costume1", "./costumes/costume1.png", {
        x: 58,
        y: 44,
      }),
    ];

    this.sounds = [
      new Sound("pop", "./sounds/pop.wav"),
      new Sound(
        "gaster_blaster_sound_effect_1",
        "./sounds/gaster_blaster_sound_effect_1.wav"
      ),
      new Sound(
        "gaster_blaster_sound_effect_2",
        "./sounds/gaster_blaster_sound_effect_2.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Enemy turn" },
        this.whenIReceiveEnemyTurn
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ur turn" },
        this.whenIReceiveUrTurn
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.BROADCAST, { name: ".)()" }, this.whenIReceive),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "GASTER WING DING!???????" },
        this.whenIReceiveGasterWingDing
      ),
    ];

    this.vars.delete = 1;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone() {
    this.vars.delete = 0;
    this.visible = true;
    this.costume = "costume3";
    this.size = 250;
    this.y += 50;
    yield* this.startSound("gaster_blaster_sound_effect_1");
    this.effects.ghost += 100;
    for (let i = 0; i < 10; i++) {
      this.effects.ghost -= 10;
      this.y -= 5;
      yield;
    }
    yield* this.wait(0.3);
    this.costume = "costume4";
    if (/* no username */ "" === "NopeGaming76") {
      this.costume = "costume1";
    } else {
      yield* this.startSound("gaster_blaster_sound_effect_2");
      yield* this.wait(0.3);
      this.costume = "costume3";
    }
    yield* this.wait(0.1);
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      this.y += 5;
      yield;
    }
    this.deleteThisClone();
  }

  *whenIReceiveEnemyTurn() {
    if (this.compare(this.stage.vars.enemyHp, 1499) < 0) {
      if (this.toNumber(this.stage.vars.battle) === 20) {
        while (true) {
          this.goto(-191, 61);
          this.createClone();
          yield* this.wait(3);
          this.goto(-191, -59);
          this.createClone();
          yield* this.wait(3);
          this.goto(-191, 0);
          this.createClone();
          yield* this.wait(3);
          yield;
        }
      }
    }
  }

  *whenIReceiveUrTurn() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.deleteThisClone();
  }

  *startAsClone2() {
    while (true) {
      if (this.touching(this.sprites["Sprite20"].andClones())) {
        if (this.toNumber(this.stage.vars.iFrames) === 0) {
          this.stage.vars.hp -= 6;
          yield* this.startSound("pop");
          this.broadcast("Owsies");
          yield* this.wait(0);
        }
      }
      yield;
    }
  }

  *whenIReceive() {
    if (this.compare(this.stage.vars.enemyHp, 1499) < 0) {
      /* TODO: Implement stop other scripts in sprite */ null;
      this.vars.delete = 1;
      yield* this.wait(0.3);
      while (true) {
        this.goto(-191, 0);
        this.createClone();
        yield* this.wait(2);
        yield;
      }
    }
  }

  *startAsClone3() {
    yield* this.wait(0);
    while (!(this.toNumber(this.vars.delete) === 1)) {
      yield;
    }
    this.deleteThisClone();
  }

  *whenIReceiveGasterWingDing() {
    this.goto(-191, -59);
    this.createClone();
    this.goto(-191, 1);
    this.createClone();
    yield* this.wait(2);
    this.goto(-191, 59);
    this.createClone();
    this.goto(-191, 1);
    this.createClone();
    yield* this.wait(2);
    this.goto(-191, 59);
    this.createClone();
    this.goto(-191, -59);
    this.createClone();
    yield* this.wait(1);
    for (let i = 0; i < 3; i++) {
      this.sprites["Sprite223"].createClone();
      yield* this.wait(0.3);
      yield;
    }
    yield* this.wait(1);
    this.broadcast("Ur turn");
  }
}
