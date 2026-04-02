import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite97 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./sprite97/costumes/costume1.png", {
        x: 192,
        y: 195,
      }),
    ];

    this.sounds = [new Sound("pop", "./sprite97/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Red again :3" },
        this.whenIReceiveRedAgain3
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveRedAgain3() {
    this.createClone();
    yield* this.wait(3);
    this.broadcast("Jimmy blasters");
  }

  *startAsClone() {
    this.goto(-10000, 0);
    this.visible = true;
    yield* this.glide(3.5, 321, 0);
    this.deleteThisClone();
  }

  *startAsClone2() {
    while (true) {
      if (this.touching(this.sprites["Sprite20"].andClones())) {
        if (this.toNumber(this.stage.vars.iFrames) === 0) {
          this.stage.vars.hp -= 21;
          this.stage.vars.iFrames = 1;
        }
      }
      yield;
    }
  }
}
