import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite92 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.png", {
        x: 330,
        y: 235,
      }),
    ];

    this.sounds = [new Sound("pop", "./sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Lights out" },
        this.whenIReceiveLightsOut
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Lights on" },
        this.whenIReceiveLightsOn
      ),
    ];
  }

  *whenIReceiveLightsOut() {
    this.size = 35;
    this.goto(170, 130);
    this.visible = true;
    this.effects.ghost = 50;
    this.moveAhead();
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveLightsOn() {
    this.visible = false;
  }
}
