import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite12 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.png", {
        x: 18,
        y: 23,
      }),
      new Costume("costume2", "./costumes/costume2.png", {
        x: 18,
        y: 18,
      }),
    ];

    this.sounds = [new Sound("pop", "./sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room 2" },
        this.whenIReceiveRoom2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "Room3" }, this.whenIReceiveRoom3),
    ];

    this.vars.attackPower = 0;

    this.watchers.attackPower = new Watcher({
      label: "Sprite7: Attack power",
      style: "normal",
      visible: false,
      value: () => this.vars.attackPower,
      x: 240,
      y: 180,
    });
  }

  *whenIReceiveRoom2() {
    this.visible = true;
    this.goto(0, 55);
    this.visible = true;
    this.moveBehind();
    this.costume = "costume1";
    yield* this.wait(0);
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Hmm");
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    yield* this.startSound("pop");
    if (this.costumeNumber === 1) {
      this.costume = "costume2";
      this.stage.vars.buttonsPressed++;
      /* TODO: Implement stop other scripts in sprite */ null;
    }
  }

  *whenIReceiveRoom3() {
    this.visible = false;
  }
}
