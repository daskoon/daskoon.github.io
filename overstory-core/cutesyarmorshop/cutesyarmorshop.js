import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cutesyarmorshop extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.png", {
        x: 187,
        y: 158,
      }),
      new Costume("costume2", "./costumes/costume2.png", {
        x: 20,
        y: 17,
      }),
      new Costume("costume3", "./costumes/costume3.png", {
        x: 50,
        y: 49,
      }),
    ];

    this.sounds = [new Sound("pop", "./sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Spoiks" },
        this.whenIReceiveSpoiks
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ur turn" },
        this.whenIReceiveUrTurn
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
    ];

    this.vars.type = 4;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveSpoiks() {
    yield* this.wait(0.5);
    this.goto(0, 0);
    this.visible = true;
    this.costume = "costume1";
    this.size = 100;
    this.effects.ghost = 50;
    yield* this.startSound("pop");
    yield* this.wait(2);
    this.visible = false;
    this.vars.type = 0;
    this.vars.type++;
    this.createClone();
    this.vars.type++;
    this.createClone();
    this.vars.type++;
    this.createClone();
    this.vars.type++;
    this.createClone();
    this.visible = true;
    this.costume = "costume3";
    this.effects.ghost = 0;
    this.size = 50;
    for (let i = 0; i < 5; i++) {
      this.size += 10;
      yield;
    }
    yield* this.wait(1);
    this.broadcast("Ur turn");
  }

  *startAsClone() {
    this.size = 100;
    this.visible = true;
    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
    this.costume = "costume2";
    this.effects.ghost = 0;
    if (this.toNumber(this.vars.type) === 1) {
      this.direction = 90;
      this.goto(-93, 75);
      yield* this.glide(0.1, -83, 75);
    }
    if (this.toNumber(this.vars.type) === 2) {
      this.direction = 90;
      this.goto(-93, -33);
      yield* this.glide(0.1, -83, -33);
    }
    if (this.toNumber(this.vars.type) === 3) {
      this.direction = -90;
      this.goto(93, -76);
      yield* this.glide(0.1, 83, -76);
    }
    if (this.toNumber(this.vars.type) === 4) {
      this.direction = -90;
      this.goto(93, 26);
      yield* this.glide(0.1, 83, 26);
    }
  }

  *whenIReceiveUrTurn() {
    this.visible = false;
    this.deleteThisClone();
  }

  *startAsClone2() {
    while (true) {
      if (this.touching(this.sprites["Sprite20"].andClones())) {
        if (this.toNumber(this.stage.vars.iFrames) === 0) {
          this.stage.vars.hp -= 5;
          this.stage.vars.iFrames++;
          this.deleteThisClone();
        }
      }
      yield;
    }
  }
}
