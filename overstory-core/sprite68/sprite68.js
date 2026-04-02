import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite68 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./sprite68/costumes/costume1.png", {
        x: 45,
        y: 25,
      }),
    ];

    this.sounds = [new Sound("pop", "./sprite68/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Sequence time!" },
        this.whenIReceiveSequenceTime
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Done foe" },
        this.whenIReceiveDoneFoe
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveSequenceTime() {
    yield* this.wait(3);
    this.visible = true;
    this.moveAhead();
    this.effects.ghost += 100;
    this.goto(160, -130);
    this.size = 200;
    for (let i = 0; i < 20; i++) {
      this.effects.ghost -= 5;
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.broadcast("Done foe");
  }

  *whenIReceiveDoneFoe() {
    this.visible = false;
  }
}
