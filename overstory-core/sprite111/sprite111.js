import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite111 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./sprite111/costumes/costume1.png", {
        x: -23,
        y: 23,
      }),
    ];

    this.sounds = [new Sound("pop", "./sprite111/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Enemy turn" },
        this.whenIReceiveEnemyTurn
      ),
      new Trigger(Trigger.BROADCAST, { name: "Left" }, this.whenIReceiveLeft),
      new Trigger(Trigger.BROADCAST, { name: "Right" }, this.whenIReceiveRight),
      new Trigger(Trigger.BROADCAST, { name: "Up" }, this.whenIReceiveUp),
      new Trigger(Trigger.BROADCAST, { name: "Down" }, this.whenIReceiveDown),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ur turn" },
        this.whenIReceiveUrTurn
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
    ];

    this.vars.timed = 0;
  }

  *whenGreenFlagClicked() {
    this.vars.timed = 0;
    this.visible = false;
  }

  *whenIReceiveEnemyTurn() {
    if (this.toNumber(this.stage.vars.battle) === 666) {
      this.size = 200;
      this.goto(0, -50);
      this.direction = 0;
      this.visible = true;
    }
  }

  *whenIReceiveLeft() {
    if (this.toNumber(this.vars.timed) === 0) {
      this.direction = -90;
      this.vars.timed = 1;
    }
  }

  *whenIReceiveRight() {
    if (this.toNumber(this.vars.timed) === 0) {
      this.direction = 90;
      this.vars.timed = 1;
    }
  }

  *whenIReceiveUp() {
    if (this.toNumber(this.vars.timed) === 0) {
      this.direction = 0;
      this.vars.timed = 1;
    }
  }

  *whenIReceiveDown() {
    if (this.toNumber(this.vars.timed) === 0) {
      this.direction = 180;
      this.vars.timed = 1;
    }
  }

  *whenIReceiveUrTurn() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.vars.timed = 0;
      yield;
    }
  }
}
