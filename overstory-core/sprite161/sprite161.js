import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite161 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.png", {
        x: 122,
        y: 17,
      }),
      new Costume("costume2", "./costumes/costume2.png", {
        x: 54,
        y: 15,
      }),
    ];

    this.sounds = [new Sound("pop", "./sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Blue attack :)" },
        this.whenIReceiveBlueAttack
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Orang attack" },
        this.whenIReceiveOrangAttack
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveBlueAttack() {
    yield* this.wait(0.5);
    this.costume = "costume1";
    this.goto(0, 100);
    this.moveAhead();
    this.visible = true;
    this.size = 100;
    for (let i = 0; i < 100; i++) {
      this.effects.ghost += 1;
      this.size += 3;
      yield;
    }
    this.visible = false;
    this.effects.clear();
  }

  *whenIReceiveOrangAttack() {
    yield* this.wait(0.5);
    this.costume = "costume2";
    this.goto(0, 100);
    this.moveAhead();
    this.visible = true;
    this.size = 100;
    for (let i = 0; i < 100; i++) {
      this.effects.ghost += 1;
      this.size += 3;
      yield;
    }
    this.visible = false;
    this.effects.clear();
  }
}
