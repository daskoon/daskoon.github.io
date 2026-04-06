import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite86 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.png", {
        x: 0,
        y: 15,
      }),
    ];

    this.sounds = [
      new Sound("pop", "./sounds/pop.wav"),
      new Sound(
        "tasque-sound-effect-1-deltarune-chapter-2-made-with-Voicemod",
        "./sounds/tasque-sound-effect-1-deltarune-chapter-2-made-with-Voicemod.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "Meow" }, this.whenIReceiveMeow),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ur turn" },
        this.whenIReceiveUrTurn
      ),
      new Trigger(Trigger.BROADCAST, { name: "weow" }, this.whenIReceiveWeow),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone() {
    this.visible = true;
    this.size = 30;
    while (!this.touching("edge")) {
      this.size += 3;
      this.move(5);
      yield;
    }
    this.deleteThisClone();
  }

  *whenIReceiveMeow() {
    for (let i = 0; i < 3; i++) {
      this.goto(this.sprites["Sprite80"].x, this.sprites["Sprite80"].y);
      yield* this.startSound(
        "tasque-sound-effect-1-deltarune-chapter-2-made-with-Voicemod"
      );
      this.direction = this.radToScratch(
        Math.atan2(
          this.sprites["Sprite20"].y - this.y,
          this.sprites["Sprite20"].x - this.x
        )
      );
      for (let i = 0; i < 8; i++) {
        this.createClone();
        yield* this.wait(0);
        yield;
      }
      yield* this.wait(this.random(1, 2));
      yield;
    }
    yield* this.wait(0.5);
    this.broadcast("Ur turn");
  }

  *startAsClone2() {
    while (true) {
      if (this.touching(this.sprites["Sprite20"].andClones())) {
        if (this.toNumber(this.stage.vars.iFrames) === 0) {
          if (this.toNumber(this.stage.vars.chapter) === 3) {
            this.stage.vars.hp += -41 + this.toNumber(this.stage.vars.armor);
            this.stage.vars.iFrames++;
          } else {
            this.stage.vars.hp -= 6;
            this.stage.vars.iFrames++;
          }
        }
        this.deleteThisClone();
      }
      yield;
    }
  }

  *whenIReceiveUrTurn() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.deleteThisClone();
  }

  *whenIReceiveWeow() {
    for (let i = 0; i < 11; i++) {
      this.goto(this.sprites["Sprite235"].x, this.sprites["Sprite235"].y);
      yield* this.startSound(
        "tasque-sound-effect-1-deltarune-chapter-2-made-with-Voicemod"
      );
      this.direction = this.radToScratch(
        Math.atan2(
          this.sprites["Sprite20"].y - this.y,
          this.sprites["Sprite20"].x - this.x
        )
      );
      for (let i = 0; i < 4; i++) {
        this.createClone();
        yield* this.wait(0);
        yield;
      }
      yield* this.wait(this.random(0.1, 0.7));
      yield;
    }
    yield* this.wait(2);
    this.broadcast("Ur turn");
  }
}
