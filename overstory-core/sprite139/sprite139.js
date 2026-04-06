import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite139 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.png", {
        x: 13,
        y: 252,
      }),
      new Costume("costume6", "./costumes/costume6.png", {
        x: 13,
        y: 252,
      }),
      new Costume("costume5", "./costumes/costume5.png", {
        x: 13,
        y: 252,
      }),
      new Costume("costume4", "./costumes/costume4.png", {
        x: 13,
        y: 252,
      }),
      new Costume("costume3", "./costumes/costume3.png", {
        x: 13,
        y: 252,
      }),
    ];

    this.sounds = [new Sound("pop", "./sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ã¢â‚¬Å“Flappy BirdÃ¢â‚¬Â" },
        this.whenIReceiveFlappyBird
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
    ];

    this.vars.mm = 0;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone() {
    this.moveBehind();
    this.effects.brightness += 100;
    this.goto(90, -29);
    this.visible = true;
    this.costume = this.random(1, 5);
    this.vars.mm = 0;
    for (let i = 0; i < 43; i++) {
      this.vars.mm -= 0.2;
      this.x += this.toNumber(this.vars.mm);
      yield;
    }
    this.deleteThisClone();
  }

  *whenIReceiveFlappyBird() {
    for (let i = 0; i < 15; i++) {
      this.createClone();
      yield* this.wait(0.8);
      yield;
    }
    yield* this.wait(1);
    for (let i = 0; i < 8; i++) {
      this.createClone();
      yield* this.wait(0.5);
      yield;
    }
    yield* this.wait(1);
    this.broadcast("Ur turn");
  }

  *startAsClone2() {
    while (true) {
      if (this.touching(this.sprites["Sprite20"].andClones())) {
        if (this.toNumber(this.stage.vars.iFrames) === 0) {
          this.stage.vars.hp += -50 + this.toNumber(this.stage.vars.armor);
          this.stage.vars.iFrames++;
        }
        this.deleteThisClone();
      }
      yield;
    }
  }
}
