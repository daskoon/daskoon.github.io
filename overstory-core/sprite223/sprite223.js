import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite223 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./sprite223/costumes/costume1.png", {
        x: 126,
        y: 278,
      }),
    ];

    this.sounds = [new Sound("pop", "./sprite223/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "tower disses a pear" },
        this.whenIReceiveTowerDissesAPear
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveTowerDissesAPear() {
    this.goto(0, 0);
    this.visible = true;
    yield* this.wait(1);
    for (let i = 0; i < 100; i++) {
      this.effects.brightness += 1;
      yield;
    }
    this.visible = false;
    this.broadcast("main chrctrs fall");
  }
}
