import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite80 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./sprite80/costumes/costume1.png", {
        x: 8,
        y: 30,
      }),
      new Costume("costume2", "./sprite80/costumes/costume2.png", {
        x: 12,
        y: 13,
      }),
    ];

    this.sounds = [new Sound("pop", "./sprite80/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Tetris dirt" },
        this.whenIReceiveTetrisDirt
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ur turn" },
        this.whenIReceiveUrTurn
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ur turn" },
        this.whenIReceiveUrTurn2
      ),
    ];
  }

  *startAsClone() {
    this.visible = true;
    this.size = 200;
    this.costume = "costume1";
    this.goto(this.random(77, -80), 180);
    while (
      !(this.compare(this.y, -80) < 0 || this.touching(Color.rgb(148, 79, 0)))
    ) {
      yield* this.wait(0.05);
      this.y -= 10;
      yield;
    }
    this.costume = "costume2";
    yield* this.wait(2);
    for (let i = 0; i < 20; i++) {
      this.effects.ghost += 5;
      yield;
    }
    this.deleteThisClone();
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone2() {
    while (true) {
      while (!this.touching(Color.rgb(148, 79, 0))) {
        yield;
      }
      while (!!this.touching(Color.rgb(148, 79, 0))) {
        yield;
      }
      while (
        !(this.compare(this.y, -80) < 0 || this.touching(Color.rgb(148, 79, 0)))
      ) {
        yield* this.wait(0.05);
        this.y -= 10;
        yield;
      }
      this.costume = "costume2";
      yield;
    }
  }

  *whenIReceiveTetrisDirt() {
    for (let i = 0; i < 10; i++) {
      this.createClone();
      this.createClone();
      yield* this.wait(0.6);
      yield;
    }
    yield* this.wait(5);
    this.broadcast("Ur turn");
  }

  *startAsClone3() {
    while (true) {
      if (this.touching(this.sprites["Sprite20"].andClones())) {
        if (this.toNumber(this.stage.vars.iFrames) === 0) {
          this.stage.vars.hp -= 6;
          this.stage.vars.iFrames++;
        }
        this.deleteThisClone();
      }
      yield;
    }
  }

  *whenIReceiveUrTurn() {
    this.deleteThisClone();
  }

  *whenIReceiveUrTurn2() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.deleteThisClone();
  }
}
