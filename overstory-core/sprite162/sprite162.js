import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite162 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume2", "./sprite162/costumes/costume2.png", {
        x: 27,
        y: 206,
      }),
    ];

    this.sounds = [new Sound("pop", "./sprite162/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Orang attack" },
        this.whenIReceiveOrangAttack
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveOrangAttack() {
    yield* this.wait(1.5);
    for (let i = 0; i < 10; i++) {
      this.createClone();
      yield* this.wait(this.random(0.2, 0.6));
      yield;
    }
    yield* this.wait(2);
    this.broadcast("Ur turn");
  }

  *startAsClone() {
    this.visible = true;
    this.goto(86, -1);
    yield* this.glide(2, -101, -1);
    this.deleteThisClone();
  }

  *startAsClone2() {
    while (true) {
      if (this.touching(this.sprites["Sprite20"].andClones())) {
        if (this.toNumber(this.stage.vars.joystickMoving) === 0) {
          if (this.toNumber(this.stage.vars.iFrames) === 0) {
            this.stage.vars.hp += -23 + this.toNumber(this.stage.vars.armor);
            this.stage.vars.iFrames++;
          }
          this.deleteThisClone();
        }
      }
      yield;
    }
  }
}
