import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bullet6 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Bullet6/costumes/costume1.png", {
        x: 480,
        y: 35,
      }),
      new Costume("costume2", "./Bullet6/costumes/costume2.png", {
        x: 10,
        y: 19,
      }),
      new Costume("costume3", "./Bullet6/costumes/costume3.png", {
        x: 27,
        y: 20,
      }),
    ];

    this.sounds = [new Sound("pop", "./Bullet6/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Door worm" },
        this.whenIReceiveDoorWorm
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Door worm" },
        this.whenIReceiveDoorWorm2
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Snake attack!" },
        this.whenIReceiveSnakeAttack
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveDoorWorm() {
    yield* this.wait(1);
    this.direction = 90;
    this.costume = "costume1";
    this.effects.ghost = 50;
    this.goto(0, 0);
    this.moveAhead();
    this.visible = true;
    yield* this.startSound("pop");
    yield* this.wait(1);
    this.goto(-150, 0);
    this.costume = "costume2";
    this.effects.ghost = 0;
    this.direction = 90;
    for (let i = 0; i < 15; i++) {
      this.direction += 1;
      this.move(20);
      yield;
    }
    for (let i = 0; i < 5; i++) {
      this.direction += 1;
      this.move(20);
      this.effects.ghost += 20;
      yield;
    }
    this.effects.clear();
    this.visible = false;
  }

  *whenIReceiveDoorWorm2() {
    yield* this.wait(2);
    for (let i = 0; i < 18; i++) {
      yield* this.wait(0.05);
      this.createClone();
      yield;
    }
  }

  *startAsClone() {
    this.costume = "costume3";
    this.goto(-150, 0);
    this.effects.ghost = 0;
    this.direction = 90;
    for (let i = 0; i < 15; i++) {
      this.move(20);
      this.direction += 1;
      yield;
    }
    for (let i = 0; i < 5; i++) {
      this.move(20);
      this.direction += 1;
      this.effects.ghost += 20;
      yield;
    }
    this.effects.clear();
    this.visible = false;
    this.deleteThisClone();
  }

  *startAsClone2() {
    while (true) {
      if (this.touching(this.sprites["Sprite20"].andClones())) {
        if (this.toNumber(this.stage.vars.iFrames) === 0) {
          this.stage.vars.hp -= 8;
          this.stage.vars.iFrames++;
          this.deleteThisClone();
        }
      }
      yield;
    }
  }

  *whenIReceiveSnakeAttack() {
    yield* this.wait(2);
    while (true) {
      if (this.touching(this.sprites["Sprite20"].andClones())) {
        if (this.toNumber(this.stage.vars.iFrames) === 0) {
          this.stage.vars.hp -= 15;
          this.stage.vars.iFrames++;
        }
      }
      yield;
    }
  }
}
