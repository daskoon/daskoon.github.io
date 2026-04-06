import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Miss extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.png", {
        x: 24,
        y: 24,
      }),
    ];

    this.sounds = [new Sound("pop", "./sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
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

  *startAsClone() {
    this.effects.clear();
    this.goto(0, 10);
    this.size = 700;
    this.visible = true;
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
    this.direction = 90;
    while (true) {
      this.move(3);
      this.direction += 15;
      this.moveAhead();
      yield;
    }
  }

  *whenIReceiveUrTurn() {
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.deleteThisClone();
  }

  *startAsClone2() {
    while (true) {
      if (this.touching(this.sprites["Sprite20"].andClones())) {
        if (this.toNumber(this.stage.vars.iFrames) === 0) {
          this.stage.vars.hp -= 9;
          this.stage.vars.iFrames++;
        }
      }
      yield;
    }
  }
}
