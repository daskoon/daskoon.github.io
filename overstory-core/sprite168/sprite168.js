import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite168 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./sprite168/costumes/costume1.png", {
        x: 14,
        y: 27,
      }),
    ];

    this.sounds = [new Sound("pop", "./sprite168/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Rain ft. hands" },
        this.whenIReceiveRainFtHands
      ),
    ];

    this.vars.mm = -18;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone() {
    this.moveAhead();
    this.goto(this.random(86, -84), 186);
    this.visible = true;
    this.vars.mm = 0;
    for (let i = 0; i < 38; i++) {
      this.vars.mm -= 0.5;
      this.y += this.toNumber(this.vars.mm);
      yield;
    }
    this.deleteThisClone();
  }

  *startAsClone2() {
    while (true) {
      if (this.touching(this.sprites["Sprite20"].andClones())) {
        if (this.toNumber(this.stage.vars.joystickMoving) === 1) {
          if (this.toNumber(this.stage.vars.iFrames) === 0) {
            this.stage.vars.hp += -40 + this.toNumber(this.stage.vars.armor);
            this.stage.vars.iFrames++;
          }
          this.deleteThisClone();
        }
      }
      yield;
    }
  }

  *whenIReceiveRainFtHands() {
    for (let i = 0; i < 5; i++) {
      yield* this.wait(0.4);
      this.sprites["Sprite151"].createClone();
      for (let i = 0; i < 3; i++) {
        this.createClone();
        yield* this.wait(0.3);
        yield;
      }
      yield;
    }
    yield* this.wait(2);
    this.broadcast("Ur turn");
  }
}
