import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bullet2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Bullet2/costumes/costume1.png", {
        x: 16,
        y: 15,
      }),
      new Costume("costume2", "./Bullet2/costumes/costume2.png", {
        x: 16,
        y: 15,
      }),
      new Costume("costume3", "./Bullet2/costumes/costume3.png", {
        x: 16,
        y: 14,
      }),
      new Costume("costume4", "./Bullet2/costumes/costume4.png", {
        x: 15,
        y: 15,
      }),
    ];

    this.sounds = [new Sound("pop", "./Bullet2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Tumble weeds" },
        this.whenIReceiveTumbleWeeds
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone4),
    ];

    this.vars.mm = 0;
    this.vars.hmm = 8;
    this.vars.times = 0;
  }

  *whenGreenFlagClicked() {
    this.vars.times = 0;
    this.visible = false;
  }

  *startAsClone() {
    this.size = 250;
    this.visible = true;
    this.goto(-248, -73);
    for (let i = 0; i < 49; i++) {
      this.x += 10;
      yield;
    }
    this.deleteThisClone();
  }

  *startAsClone2() {
    this.moveAhead();
    while (true) {
      this.costumeNumber++;
      yield* this.wait(0.1);
      yield;
    }
  }

  *startAsClone3() {
    while (true) {
      if (this.compare(this.y, -72) < 0) {
        this.vars.mm = -1;
        this.vars.hmm = this.random(3, 15);
        for (let i = 0; i < this.toNumber(this.vars.hmm); i++) {
          this.y += this.toNumber(this.vars.mm);
          this.vars.mm++;
          yield;
        }
        for (let i = 0; i < this.toNumber(this.vars.hmm); i++) {
          this.y += this.toNumber(this.vars.mm);
          this.vars.mm--;
          yield;
        }
        while (!(this.compare(this.y, -72) < 0)) {
          this.y += this.toNumber(this.vars.mm);
          this.vars.mm--;
          yield;
        }
      }
      yield;
    }
  }

  *whenIReceiveTumbleWeeds() {
    if (this.toNumber(this.vars.times) === 0) {
      this.vars.times = 1;
      for (let i = 0; i < 10; i++) {
        this.createClone();
        yield* this.wait(0.5);
        yield;
      }
      yield* this.wait(1);
      this.broadcast("Ur turn");
    } else {
      for (let i = 0; i < 4; i++) {
        this.createClone();
        yield* this.wait(0.3);
        yield;
      }
      yield* this.wait(1);
      this.broadcast("Ur turn");
    }
  }

  *startAsClone4() {
    while (true) {
      if (this.touching(this.sprites["Sprite20"].andClones())) {
        if (this.toNumber(this.stage.vars.iFrames) === 0) {
          if (this.toNumber(this.stage.vars.battle) === 11) {
            this.stage.vars.hp += -19 + this.toNumber(this.stage.vars.armor);
            this.stage.vars.iFrames++;
          } else {
            this.stage.vars.hp -= 4;
            this.stage.vars.iFrames++;
          }
        }
        this.deleteThisClone();
      }
      yield;
    }
  }
}
