import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite101 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./sprite101/costumes/costume1.png", {
        x: 121,
        y: 158,
      }),
      new Costume("costume2", "./sprite101/costumes/costume2.png", {
        x: 121,
        y: 158,
      }),
    ];

    this.sounds = [new Sound("pop", "./sprite101/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Eat" }, this.whenIReceiveEat),
      new Trigger(Trigger.BROADCAST, { name: "Eat" }, this.whenIReceiveEat2),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveEat() {
    this.visible = true;
    this.goto(0, 140);
    this.size = 40;
    this.costume = "costume1";
    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
    while (!this.touching(this.sprites["Sprite20"].andClones())) {
      for (let i = 0; i < 5; i++) {
        this.move(2);
        this.direction = this.radToScratch(
          Math.atan2(
            this.sprites["Sprite20"].y - this.y,
            this.sprites["Sprite20"].x - this.x
          )
        );
        yield;
      }
      this.costumeNumber++;
      this.move(2);
      yield;
    }
    while (true) {
      for (let i = 0; i < 20; i++) {
        this.goto(this.sprites["Sprite20"].x, this.sprites["Sprite20"].y);
        this.y += 16;
        yield;
      }
      this.stage.vars.hp -= 8;
      yield* this.startSound("pop");
      yield;
    }
  }

  *whenIReceiveEat2() {
    yield* this.wait(10);
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
    this.broadcast("Ur turn");
  }
}
