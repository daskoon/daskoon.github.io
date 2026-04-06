import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite228 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.png", {
        x: 18,
        y: 14,
      }),
      new Costume("costume2", "./costumes/costume2.png", {
        x: 18,
        y: 28,
      }),
    ];

    this.sounds = [new Sound("pop", "./sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room50" },
        this.whenIReceiveRoom50
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveRoom50() {
    this.costume = "costume1";
    this.moveBehind();
    this.goto(-59, 164);
    this.visible = true;
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("you got a lotta money");
    this.costume = "costume2";
  }
}
