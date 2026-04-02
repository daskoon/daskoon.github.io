import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Explosion3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume2", "./explosion3/costumes/costume2.svg", {
        x: 1508.5760501101674,
        y: 1064.8772118424731,
      }),
      new Costume("costume1", "./explosion3/costumes/costume1.png", {
        x: 0,
        y: 0,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Door fight" },
        this.whenIReceiveDoorFight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Second phase" },
        this.whenIReceiveSecondPhase
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Door death" },
        this.whenIReceiveDoorDeath
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Doordevil shadow fight" },
        this.whenIReceiveDoordevilShadowFight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Doordevil dies lmao" },
        this.whenIReceiveDoordevilDiesLmao
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.watchers.timer.visible = false;
    while (true) {
      null;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
  }

  *whenGreenFlagClicked3() {
    this.stage.vars.changeColor = 1;
    this.moveBehind();
    while (true) {
      while (true) {
        if (this.toNumber(this.stage.vars.changeColor) === 0) {
          this.effects.clear();
        } else {
          this.effects.color += 1;
        }
        yield;
      }
      yield;
    }
  }

  *whenIReceiveDoorFight() {
    this.stage.vars.hp = 100;
    yield* this.wait(2.2);
    this.direction = 90;
    this.moveBehind();
    this.visible = true;
    this.effects.brightness = -50;
    this.effects.brightness = 0;
    this.stage.vars.myVariable =
      (((this.random(-50, 50) - this.x) * 0.6) / 5 +
        this.toNumber(this.stage.vars.myVariable)) *
      0.8;
    this.stage.vars.myVariableY =
      (((this.random(-50, 50) - this.y) * 0.6) / 5 +
        this.toNumber(this.stage.vars.myVariable)) *
      0.8;
    this.x += this.toNumber(this.stage.vars.myVariable);
    this.y += this.toNumber(this.stage.vars.myVariableY);
    this.effects.whirl = Math.sin(this.degToRad(this.timer * 50)) * 50;
    this.effects.fisheye = Math.cos(this.degToRad(this.timer * 40)) * 30;
    this.costume = "costume1";
    this.size = 100;
    this.costume = "costume2";
    this.effects.fisheye = -150;
    for (let i = 0; i < 25; i++) {
      this.effects.fisheye += 6;
      yield;
    }
    while (true) {
      this.stage.vars.myVariable =
        (((this.random(-50, 50) - this.x) * 0.6) / 5 +
          this.toNumber(this.stage.vars.myVariable)) *
        0.8;
      this.stage.vars.myVariableY =
        (((this.random(-50, 50) - this.y) * 0.6) / 5 +
          this.toNumber(this.stage.vars.myVariable)) *
        0.8;
      this.x += this.toNumber(this.stage.vars.myVariable);
      this.y += this.toNumber(this.stage.vars.myVariableY);
      this.effects.whirl = Math.sin(this.degToRad(this.timer * 50)) * 50;
      this.effects.fisheye = Math.cos(this.degToRad(this.timer * 40)) * 30;
      yield;
    }
  }

  *whenIReceiveSecondPhase() {
    this.direction = 90;
    while (true) {
      this.effects.brightness = Math.sin(this.degToRad(this.timer * 150)) * 100;
      this.direction += 15;
      this.effects.pixelate += this.random(-5, 5);
      yield;
    }
  }

  *whenIReceiveDoorDeath() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveDoordevilShadowFight() {
    this.stage.vars.hp = 100;
    this.direction = 90;
    this.moveBehind();
    this.visible = true;
    this.effects.brightness = -50;
    this.effects.brightness = 0;
    this.stage.vars.myVariable =
      (((this.random(-50, 50) - this.x) * 0.6) / 5 +
        this.toNumber(this.stage.vars.myVariable)) *
      0.8;
    this.stage.vars.myVariableY =
      (((this.random(-50, 50) - this.y) * 0.6) / 5 +
        this.toNumber(this.stage.vars.myVariable)) *
      0.8;
    this.x += this.toNumber(this.stage.vars.myVariable);
    this.y += this.toNumber(this.stage.vars.myVariableY);
    this.effects.whirl = Math.sin(this.degToRad(this.timer * 50)) * 50;
    this.effects.fisheye = Math.cos(this.degToRad(this.timer * 40)) * 30;
    this.costume = "costume1";
    this.size = 100;
    this.costume = "costume2";
    this.effects.fisheye = -150;
    for (let i = 0; i < 25; i++) {
      this.effects.fisheye += 6;
      yield;
    }
    while (true) {
      this.stage.vars.myVariable =
        (((this.random(-50, 50) - this.x) * 0.6) / 5 +
          this.toNumber(this.stage.vars.myVariable)) *
        0.8;
      this.stage.vars.myVariableY =
        (((this.random(-50, 50) - this.y) * 0.6) / 5 +
          this.toNumber(this.stage.vars.myVariable)) *
        0.8;
      this.x += this.toNumber(this.stage.vars.myVariable);
      this.y += this.toNumber(this.stage.vars.myVariableY);
      this.effects.whirl = Math.sin(this.degToRad(this.timer * 100)) * 100;
      this.effects.fisheye = Math.cos(this.degToRad(this.timer * 100)) * 100;
      yield;
    }
  }

  *whenIReceiveDoordevilDiesLmao() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
