import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite174 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./sprite174/costumes/costume1.png", {
        x: 19,
        y: 25,
      }),
    ];

    this.sounds = [new Sound("pop", "./sprite174/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Gary fade" },
        this.whenIReceiveGaryFade
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Final Room2" },
        this.whenIReceiveFinalRoom2
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveGaryFade() {
    this.goto(135, -22);
    this.moveBehind();
    this.visible = true;
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Punchcard hint");
  }

  *whenIReceiveFinalRoom2() {
    this.visible = false;
  }
}
