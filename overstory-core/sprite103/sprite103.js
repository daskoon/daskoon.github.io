import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite103 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./sprite103/costumes/costume1.png", {
        x: 16,
        y: 17,
      }),
    ];

    this.sounds = [new Sound("pop", "./sprite103/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Balls" }, this.whenIReceiveBalls),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ur turn" },
        this.whenIReceiveUrTurn
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveBalls() {
    this.createClone();
    this.createClone();
    this.createClone();
    this.createClone();
    this.createClone();
    this.createClone();
    this.createClone();
    this.createClone();
    this.createClone();
    this.createClone();
    this.broadcast("Shock waves");
  }

  *startAsClone() {
    this.visible = true;
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
    this.goto(0, 75);
    this.direction = this.random(1, 360);
    while (true) {
      this.move(3);
      if (this.touching(this.sprites["Sprite18"].andClones())) {
        this.direction += 180;
        this.direction += this.random(-5, 5);
      }
      if (this.touching("edge")) {
        this.deleteThisClone();
      }
      yield;
    }
  }

  *whenIReceiveUrTurn() {
    this.deleteThisClone();
  }

  *startAsClone2() {
    while (true) {
      if (this.touching(this.sprites["Sprite20"].andClones())) {
        if (this.toNumber(this.stage.vars.joystickMoving) === 1) {
          if (this.toNumber(this.stage.vars.iFrames) === 0) {
            this.stage.vars.hp -= 6;
            this.stage.vars.iFrames++;
          }
          this.deleteThisClone();
        }
      }
      yield;
    }
  }
}
