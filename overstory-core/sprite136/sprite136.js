import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite136 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./sprite136/costumes/costume1.png", {
        x: 119,
        y: 46,
      }),
    ];

    this.sounds = [new Sound("pop", "./sprite136/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Hand attack" },
        this.whenIReceiveHandAttack
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Hands 2 sttack" },
        this.whenIReceiveHands2Sttack
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Hands 3 attack" },
        this.whenIReceiveHands3Attack
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone() {
    this.moveAhead();
    this.visible = true;
    this.direction = this.random(1, 360);
    this.size = 50;
    this.goto(this.sprites["Sprite20"].x, this.sprites["Sprite20"].y);
    this.move(-100);
    this.effects.ghost += 100;
    for (let i = 0; i < 10; i++) {
      this.effects.ghost -= 10;
      yield;
    }
    yield* this.wait(0.2);
    for (let i = 0; i < 5; i++) {
      this.move(-5);
      yield;
    }
    yield* this.wait(0.1);
    for (let i = 0; i < 10; i++) {
      this.move(15);
      yield;
    }
    for (let i = 0; i < 5; i++) {
      this.move(20);
      this.effects.ghost += 20;
      yield;
    }
    this.deleteThisClone();
  }

  *startAsClone2() {
    while (true) {
      if (this.touching(this.sprites["Sprite20"].andClones())) {
        if (this.toNumber(this.stage.vars.iFrames) === 0) {
          this.stage.vars.hp += -28 + this.toNumber(this.stage.vars.armor);
          this.stage.vars.iFrames++;
        }
        this.deleteThisClone();
      }
      yield;
    }
  }

  *whenIReceiveHandAttack() {
    for (let i = 0; i < 10; i++) {
      this.createClone();
      yield* this.wait(0.5);
      yield;
    }
    yield* this.wait(1);
    this.broadcast("Ur turn");
  }

  *whenIReceiveHands2Sttack() {
    for (let i = 0; i < 10; i++) {
      this.createClone();
      yield* this.wait(0.3);
      yield;
    }
    yield* this.wait(1);
    this.broadcast("Ur turn");
  }

  *whenIReceiveHands3Attack() {
    for (let i = 0; i < 10; i++) {
      this.createClone();
      this.createClone();
      yield* this.wait(0.4);
      yield;
    }
    yield* this.wait(1);
    this.broadcast("Ur turn");
  }
}
