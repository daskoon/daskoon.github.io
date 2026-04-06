import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Exit extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.png", {
        x: 22,
        y: 42,
      }),
      new Costume("costume3", "./costumes/costume3.png", {
        x: 22,
        y: 45,
      }),
      new Costume("costume2", "./costumes/costume2.png", {
        x: 43,
        y: 24,
      }),
    ];

    this.sounds = [new Sound("pop", "./sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Dash attack" },
        this.whenIReceiveDashAttack
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Charge attack 2 because funni" },
        this.whenIReceiveChargeAttack2BecauseFunni
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone() {
    this.size = 80;
    this.costume = "costume1";
    this.goto(this.random(-74, 80), -73);
    this.direction = 90;
    this.visible = true;
    this.effects.ghost += 100;
    for (let i = 0; i < 20; i++) {
      this.effects.ghost -= 5;
      yield;
    }
    this.costume = "costume3";
    yield* this.wait(0.5);
    this.costume = "costume2";
    this.direction = this.radToScratch(
      Math.atan2(
        this.sprites["Sprite20"].y - this.y,
        this.sprites["Sprite20"].x - this.x
      )
    );
    this.move(8);
    while (!this.touching(this.sprites["Sprite18"].andClones())) {
      this.move(8);
      yield;
    }
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.deleteThisClone();
  }

  *startAsClone2() {
    while (true) {
      if (this.touching(this.sprites["Sprite20"].andClones())) {
        if (this.toNumber(this.stage.vars.iFrames) === 0) {
          this.stage.vars.hp += -20 + this.toNumber(this.stage.vars.armor);
          this.stage.vars.iFrames++;
        }
      }
      yield;
    }
  }

  *whenIReceiveDashAttack() {
    for (let i = 0; i < 3; i++) {
      this.createClone();
      yield* this.wait(1);
      yield;
    }
    yield* this.wait(1);
    for (let i = 0; i < 4; i++) {
      this.createClone();
      yield* this.wait(0.3);
      yield;
    }
    yield* this.wait(1);
    this.broadcast("Ur turn");
  }

  *whenIReceiveChargeAttack2BecauseFunni() {
    for (let i = 0; i < 3; i++) {
      this.createClone();
      yield* this.wait(0.3);
      yield;
    }
    yield* this.wait(1.3);
    if (!(this.compare(this.stage.vars.enemyHp, 1999) < 0)) {
      for (let i = 0; i < 5; i++) {
        this.sprites["Bullet"].createClone();
        yield* this.wait(0.1);
        yield;
      }
      yield* this.wait(2);
    }
    this.broadcast("Ur turn");
  }
}
