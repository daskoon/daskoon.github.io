import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite122 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./sprite122/costumes/costume1.png", {
        x: 144,
        y: 360,
      }),
    ];

    this.sounds = [new Sound("pop", "./sprite122/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room19" },
        this.whenIReceiveRoom19
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room20" },
        this.whenIReceiveRoom20
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveRoom19() {
    this.visible = true;
    this.effects.ghost = 100;
    this.goto(-18, 0);
  }

  *whenIReceiveRoom20() {
    this.visible = false;
  }
}
