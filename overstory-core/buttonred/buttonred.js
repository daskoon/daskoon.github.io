import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Buttonred extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.png", {
        x: 1,
        y: 2,
      }),
    ];

    this.sounds = [new Sound("pop", "./sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Door fight" },
        this.whenIReceiveDoorFight
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Door death" },
        this.whenIReceiveDoorDeath
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone() {
    this.visible = true;
    this.effects.ghost = 100;
    this.moveBehind();
    this.moveAhead(1);
    this.goto(this.sprites["Sprite20"].x, this.sprites["Sprite20"].y);
    this.size = 100;
    this.direction = this.random(1, 360);
    while (!this.touching("edge")) {
      this.effects.ghost -= 1.5;
      this.move(10);
      this.size += 6;
      yield;
    }
    this.deleteThisClone();
  }

  *whenIReceiveDoorFight() {
    yield* this.wait(2);
    while (true) {
      this.createClone();
      yield;
    }
  }

  *startAsClone2() {
    while (true) {
      if (this.touching(Color.rgb(255, 255, 255))) {
        this.effects.brightness = -100;
      }
      if (this.touching(Color.rgb(0, 0, 0))) {
        this.effects.brightness = 0;
      }
      yield;
    }
  }

  *whenIReceiveDoorDeath() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.deleteThisClone();
  }
}
