import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite214 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.png", {
        x: 29,
        y: 28,
      }),
      new Costume("costume2", "./costumes/costume2.png", {
        x: 17,
        y: 8,
      }),
    ];

    this.sounds = [new Sound("pop", "./sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "hat shake" },
        this.whenIReceiveHatShake
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        {
          name: "loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnngggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg message name lol",
        },
        this.whenIReceiveLoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggMessageNameLol
      ),
    ];

    this.vars.s = 0;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone() {
    this.costume = "costume2";
    this.direction = 180;
    this.direction += this.random(-65, 65);
    this.vars.s = this.random(2, 9);
    while (!this.touching("edge")) {
      this.move(this.toNumber(this.vars.s));
      this.vars.s += 0.1;
      yield;
    }
    this.deleteThisClone();
  }

  *whenIReceiveHatShake() {
    this.goto(0, 120);
    this.costume = "costume1";
    this.visible = true;
    for (let i = 0; i < 10; i++) {
      for (let i = 0; i < 4; i++) {
        this.y += 5;
        yield;
      }
      for (let i = 0; i < 4; i++) {
        this.y -= 5;
        yield;
      }
      this.createClone();
      this.createClone();
      this.createClone();
      yield;
    }
    yield* this.wait(2);
    this.visible = false;
    this.broadcast("Ur turn");
  }

  *startAsClone2() {
    while (true) {
      if (this.touching(this.sprites["Sprite20"].andClones())) {
        if (this.toNumber(this.stage.vars.iFrames) === 0) {
          this.stage.vars.hp += -42 + this.toNumber(this.stage.vars.armor);
          this.stage.vars.iFrames++;
        }
        this.deleteThisClone();
      }
      yield;
    }
  }

  *whenIReceiveLoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggMessageNameLol() {
    this.goto(0, 120);
    this.costume = "costume1";
    this.visible = true;
    for (let i = 0; i < 60; i++) {
      for (let i = 0; i < 1; i++) {
        this.y += 20;
        yield;
      }
      for (let i = 0; i < 1; i++) {
        this.y -= 20;
        yield;
      }
      this.createClone();
      yield;
    }
    yield* this.wait(2);
    this.visible = false;
    this.broadcast("Ur turn");
  }
}
