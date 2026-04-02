import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite88 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./sprite88/costumes/costume1.png", {
        x: 13,
        y: 13,
      }),
      new Costume("costume2", "./sprite88/costumes/costume2.png", {
        x: 13,
        y: 13,
      }),
    ];

    this.sounds = [new Sound("pop", "./sprite88/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Bubble wrap" },
        this.whenIReceiveBubbleWrap
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
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

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveBubbleWrap() {
    yield* this.buble();
    yield* this.wait(15);
    this.broadcast("Ur turn");
  }

  *startAsClone() {
    this.costume = "costume1";
    this.effects.ghost = 50;
    this.moveBehind(5);
    this.visible = true;
    while (true) {
      yield* this.wait(0.8);
      if (this.random(1, 25) === 1) {
        this.costume = "costume2";
        this.effects.ghost = 0;
        yield* this.wait(0.5);
        yield* this.startSound("pop");
        this.costume = "costume1";
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
      yield;
    }
  }

  *buble() {
    this.goto(-81, 83);
    for (let i = 0; i < 12; i++) {
      for (let i = 0; i < 12; i++) {
        this.createClone();
        this.x += 15;
      }
      this.x = -81;
      this.y -= 15;
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
