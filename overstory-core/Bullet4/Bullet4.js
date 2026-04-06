import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bullet4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume2", "./costumes/costume2.png", {
        x: 19,
        y: 40,
      }),
      new Costume("costume3", "./costumes/costume3.png", {
        x: 18,
        y: 29,
      }),
    ];

    this.sounds = [new Sound("pop", "./sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Other snake attack" },
        this.whenIReceiveOtherSnakeAttack
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(Trigger.CLONE_START, this.startAsClone4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Snake ataxk but like shadown" },
        this.whenIReceiveSnakeAtaxkButLikeShadown
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Snake attack 3 because really funnihaha" },
        this.whenIReceiveSnakeAttack3BecauseReallyFunnihaha
      ),
    ];

    this.vars.type = 0;
    this.vars.nohurt = 0;
  }

  *whenGreenFlagClicked() {
    this.vars.type = 0;
    this.visible = false;
  }

  *whenIReceiveOtherSnakeAttack() {
    for (let i = 0; i < 10; i++) {
      this.vars.type = 1;
      this.createClone();
      yield* this.wait(1);
      yield;
    }
    yield* this.wait(4);
    this.broadcast("Ur turn");
  }

  *startAsClone() {
    while (true) {
      if (this.touching(this.sprites["Sprite20"].andClones())) {
        if (this.toNumber(this.vars.nohurt) === 0) {
          if (this.toNumber(this.stage.vars.iFrames) === 0) {
            if (
              this.toNumber(this.stage.vars.battle) === 11 ||
              this.toNumber(this.stage.vars.battle) === 13
            ) {
              this.stage.vars.hp += -20 + this.toNumber(this.stage.vars.armor);
              this.stage.vars.iFrames++;
            } else {
              this.stage.vars.hp -= 4;
              this.stage.vars.iFrames++;
            }
          }
          this.deleteThisClone();
        }
      }
      yield;
    }
  }

  *startAsClone2() {
    this.moveAhead();
    if (this.toNumber(this.vars.type) === 2) {
      this.vars.nohurt = 0;
      this.costume = "costume3";
      if (this.random(1, 2) === 1) {
        this.effects.ghost = 50;
        this.vars.nohurt = 1;
        this.moveBehind();
      }
      if (this.toNumber(this.vars.nohurt) === 0) {
        if (this.random(1, 3) === 1) {
          this.effects.ghost = 50;
          this.vars.nohurt = 1;
          this.moveBehind();
        }
      }
      this.direction = -45;
      for (let i = 0; i < 70; i++) {
        this.x += 2.5;
        yield;
      }
      this.deleteThisClone();
    }
  }

  *startAsClone3() {
    if (this.toNumber(this.vars.type) === 1) {
      for (let i = 0; i < 30; i++) {
        this.vars.type = 1;
        yield* this.wait(0.2);
        this.vars.type = 2;
        this.createClone();
        yield;
      }
    }
  }

  *startAsClone4() {
    if (this.toNumber(this.vars.type) === 1) {
      this.visible = true;
      this.costume = "costume2";
      this.goto(-80, -100);
      this.direction = -45;
      for (let i = 0; i < 115; i++) {
        this.y += 2.5;
        yield;
      }
      this.deleteThisClone();
    }
  }

  *whenIReceiveSnakeAtaxkButLikeShadown() {
    for (let i = 0; i < 5; i++) {
      this.vars.type = 1;
      this.createClone();
      yield* this.wait(0.8);
      yield;
    }
    yield* this.wait(4);
    this.broadcast("Ur turn");
  }

  *whenIReceiveSnakeAttack3BecauseReallyFunnihaha() {
    for (let i = 0; i < 10; i++) {
      this.vars.type = 1;
      this.createClone();
      yield* this.wait(0.8);
      yield;
    }
    yield* this.wait(4);
    this.broadcast("Ur turn");
  }
}
