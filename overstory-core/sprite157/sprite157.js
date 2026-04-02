import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite157 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./sprite157/costumes/costume1.png", {
        x: 27,
        y: 301,
      }),
    ];

    this.sounds = [new Sound("pop", "./sprite157/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jevil carasel" },
        this.whenIReceiveJevilCarasel
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ur turn" },
        this.whenIReceiveUrTurn
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jevil carosel2" },
        this.whenIReceiveJevilCarosel2
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone() {
    this.visible = true;
    this.goto(-100, 0);
    this.moveAhead();
    yield* this.glide(0.8, -50, 60);
    yield* this.glide(1, 0, -30);
    yield* this.glide(1, 50, 60);
    yield* this.glide(1, 120, -30);
    this.deleteThisClone();
  }

  *whenIReceiveJevilCarasel() {
    for (let i = 0; i < 3; i++) {
      this.createClone();
      yield* this.wait(1.8);
      yield;
    }
    yield* this.wait(1);
    this.broadcast("Ur turn");
  }

  *whenIReceiveUrTurn() {
    this.deleteThisClone();
  }

  *startAsClone2() {
    while (true) {
      if (this.touching(this.sprites["Sprite20"].andClones())) {
        if (this.toNumber(this.stage.vars.iFrames) === 0) {
          this.stage.vars.hp += -32 + this.toNumber(this.stage.vars.armor);
          this.stage.vars.iFrames++;
        }
        this.deleteThisClone();
      }
      yield;
    }
  }

  *whenIReceiveJevilCarosel2() {
    for (let i = 0; i < 5; i++) {
      this.createClone();
      yield* this.wait(1.6);
      yield;
    }
    yield* this.wait(1.5);
    this.broadcast("Ur turn");
  }
}
