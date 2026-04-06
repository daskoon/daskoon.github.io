import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class TextBox extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.png", {
        x: 480,
        y: -166,
      }),
    ];

    this.sounds = [new Sound("pop", "./sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "fin" }, this.whenIReceiveFin),
      new Trigger(Trigger.BROADCAST, { name: "bun" }, this.whenIReceiveBun),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Dark mode" },
        this.whenIReceiveDarkMode
      ),
      new Trigger(Trigger.BROADCAST, { name: "Fwin" }, this.whenIReceiveFwin),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(0, 0);
    this.stage.vars.talking = 0;
  }

  *whenIReceiveFin() {
    this.moveAhead();
    this.goto(0, 0);
    if (
      this.toNumber(this.stage.vars.voice2) === 2 ||
      this.toNumber(this.stage.vars.voice2) === 26
    ) {
      this.costume = "costume2";
    } else {
      this.costume = "costume1";
    }
    this.visible = true;
    this.effects.ghost = 10;
    this.stage.vars.talking = 1;
  }

  *whenIReceiveBun() {
    this.goto(0, 0);
    this.visible = false;
    this.stage.vars.talking = 0;
  }

  *whenGreenFlagClicked2() {
    this.moveAhead();
    this.effects.ghost = 10;
  }

  *whenIReceiveDarkMode() {
    this.effects.brightness = -70;
  }

  *whenIReceiveFwin() {
    this.goto(0, 0);
    if (this.toNumber(this.stage.vars.voice2) === 2) {
      this.costume = "costume2";
    } else {
      this.costume = "costume1";
    }
    this.visible = true;
    this.effects.ghost = 10;
    this.stage.vars.talking = 1;
  }

  *whenGreenFlagClicked3() {
    for (let i = 0; i < 10; i++) {
      this.stage.vars.costume = 0;
      yield;
    }
  }
}
