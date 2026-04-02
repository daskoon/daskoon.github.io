import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite237 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite237/costumes/costume1.png", {
        x: 87,
        y: 112,
      }),
      new Costume("costume2", "./Sprite237/costumes/costume2.png", {
        x: 87,
        y: 112,
      }),
      new Costume("costume3", "./Sprite237/costumes/costume3.png", {
        x: 3,
        y: 18,
      }),
    ];

    this.sounds = [new Sound("pop", "./Sprite237/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "silly billy cat activities" },
        this.whenIReceiveSillyBillyCatActivities
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "gbungjjl" },
        this.whenIReceiveGbungjjl
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone() {
    this.size = 60;
    this.rotationStyle = Sprite.RotationStyle.ALL_AROUND;
    this.costume = "costume3";
    this.moveAhead();
    this.goto(20, -141);
    while (!this.touching("edge")) {
      this.move(5);
      this.direction -= 1.5;
      yield;
    }
    this.deleteThisClone();
  }

  *whenIReceiveSillyBillyCatActivities() {
    this.direction = 90;
    this.moveAhead();
    this.size = 100;
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
    this.costume = "costume1";
    this.visible = true;
    this.goto(0, -221);
    yield* this.glide(0.3, 0, -101);
    yield* this.wait(1);
    this.costume = "costume2";
    yield* this.wait(0.4);
    for (let i = 0; i < 30; i++) {
      yield* this.wait(0.2);
      this.direction -= 30;
      this.createClone();
      this.direction -= 30;
      this.createClone();
      this.direction -= 30;
      this.createClone();
      this.direction -= 30;
      this.createClone();
      this.direction -= 30;
      this.createClone();
      this.direction -= 30;
      this.createClone();
      this.direction -= 30;
      this.createClone();
      this.direction -= 30;
      this.createClone();
      this.direction -= 5;
      yield;
    }
    yield* this.wait(3);
    this.goto(0, -101);
    yield* this.glide(0.3, 0, -221);
    this.broadcast("Ur turn");
    this.broadcast("silly come back");
    this.visible = false;
  }

  *startAsClone2() {
    while (true) {
      if (this.touching(this.sprites["Sprite20"].andClones())) {
        if (this.toNumber(this.stage.vars.iFrames) === 0) {
          if (this.toNumber(this.stage.vars.battle) === 1000) {
            this.stage.vars.hp += -40 + this.toNumber(this.stage.vars.armor);
            this.stage.vars.iFrames++;
          } else {
            this.stage.vars.hp += -21 + this.toNumber(this.stage.vars.armor);
            this.stage.vars.iFrames++;
          }
        }
        this.deleteThisClone();
      }
      yield;
    }
  }

  *whenIReceiveGbungjjl() {
    this.direction = 90;
    this.moveAhead();
    this.size = 100;
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
    this.costume = "costume1";
    this.visible = true;
    this.goto(0, -221);
    yield* this.glide(0.3, 0, -101);
    yield* this.wait(1);
    this.costume = "costume2";
    yield* this.wait(0.4);
    for (let i = 0; i < 7; i++) {
      for (let i = 0; i < 10; i++) {
        this.direction -= 30;
        this.createClone();
        this.direction -= 30;
        this.createClone();
        this.direction -= 30;
        this.createClone();
        this.direction -= 30;
        this.direction -= 1;
        yield;
      }
      yield;
    }
    yield* this.wait(3);
    this.goto(0, -101);
    yield* this.glide(0.3, 0, -221);
    this.broadcast("Ur turn");
    this.visible = false;
  }
}
