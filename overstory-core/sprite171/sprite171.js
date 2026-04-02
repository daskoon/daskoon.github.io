import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite171 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./sprite171/costumes/costume1.png", {
        x: 74,
        y: 76,
      }),
    ];

    this.sounds = [new Sound("pop", "./sprite171/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room35" },
        this.whenIReceiveRoom35
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

  *whenIReceiveRoom35() {
    this.goto(0, 0);
    this.visible = true;
    this.effects.clear();
    while (true) {
      this.effects.color += 0.2;
      this.moveBehind();
      yield;
    }
  }

  *whenIReceiveFinalRoom2() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
