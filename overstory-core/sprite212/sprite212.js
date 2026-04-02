import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite212 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./sprite212/costumes/costume1.png", {
        x: 29,
        y: 28,
      }),
      new Costume("costume2", "./sprite212/costumes/costume2.png", {
        x: 29,
        y: 28,
      }),
      new Costume("costume4", "./sprite212/costumes/costume4.png", {
        x: 72,
        y: 71,
      }),
      new Costume("costume3", "./sprite212/costumes/costume3.png", {
        x: 72,
        y: 71,
      }),
      new Costume("costume5", "./sprite212/costumes/costume5.png", {
        x: 0,
        y: 0,
      }),
    ];

    this.sounds = [new Sound("pop", "./sprite212/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Hat barage" },
        this.whenIReceiveHatBarage
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "4@t tings" },
        this.whenIReceive4TTings
      ),
    ];

    this.vars.pos = 2;
    this.vars.type = 1;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone() {
    this.moveAhead();
    this.visible = true;
    this.size = 100;
    this.vars.type = this.random(1, 2);
    this.vars.pos = this.random(1, 2);
    this.costume = this.vars.type;
    this.direction = this.random(1, 360);
    if (this.toNumber(this.vars.pos) === 1) {
      this.goto(146, 182);
    } else {
      this.goto(-152, 182);
    }
    for (let i = 0; i < this.random(10, 25); i++) {
      this.y -= 10;
      this.direction += 20;
      yield;
    }
    this.costume = this.toNumber(this.vars.type) + 2;
    this.size = 10;
    this.effects.ghost = 30;
    for (let i = 0; i < 35; i++) {
      this.costume = "costume5";
      this.size += 30;
      this.costume = this.toNumber(this.vars.type) + 2;
      yield;
    }
    for (let i = 0; i < 10; i++) {
      this.costume = "costume5";
      this.size += 30;
      this.effects.ghost += 5;
      this.costume = this.toNumber(this.vars.type) + 2;
      yield;
    }
    this.deleteThisClone();
  }

  *startAsClone2() {
    if (this.toNumber(this.vars.type) === 1) {
      while (true) {
        if (this.touching(this.sprites["Sprite20"].andClones())) {
          if (this.toNumber(this.stage.vars.joystickMoving) === 0) {
            if (this.toNumber(this.stage.vars.iFrames) === 0) {
              this.stage.vars.hp += -40 + this.toNumber(this.stage.vars.armor);
              this.stage.vars.iFrames++;
            }
          }
        }
        yield;
      }
    } else {
      while (true) {
        if (this.touching(this.sprites["Sprite20"].andClones())) {
          if (this.toNumber(this.stage.vars.joystickMoving) === 1) {
            if (this.toNumber(this.stage.vars.iFrames) === 0) {
              if (this.toNumber(this.stage.vars.iFrames) === 0) {
                this.stage.vars.hp +=
                  -40 + this.toNumber(this.stage.vars.armor);
                this.stage.vars.iFrames++;
              }
            }
          }
        }
        yield;
      }
    }
  }

  *whenIReceiveHatBarage() {
    for (let i = 0; i < 10; i++) {
      this.createClone();
      yield* this.wait(0.8);
      yield;
    }
    yield* this.wait(1.2);
    this.broadcast("Ur turn");
  }

  *whenIReceive4TTings() {
    for (let i = 0; i < 8; i++) {
      this.createClone();
      yield* this.wait(0.5);
      yield;
    }
    yield* this.wait(1.2);
    this.broadcast("Ur turn");
  }
}
