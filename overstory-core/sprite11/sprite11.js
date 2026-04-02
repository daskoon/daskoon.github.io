import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite11 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./sprite11/costumes/costume1.png", {
        x: 18,
        y: 23,
      }),
      new Costume("costume2", "./sprite11/costumes/costume2.png", {
        x: 18,
        y: 18,
      }),
    ];

    this.sounds = [new Sound("pop", "./sprite11/sounds/pop.wav")];

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
  }

  *whenIReceiveRoom2() {
    this.visible = true;
    this.goto(0, -15);
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
    this.stage.vars.buttonsPressed = 0;
    this.visible = false;
  }

  *whenthisspriteclicked() {
    yield* this.startSound("pop");
    if (this.costumeNumber === 1) {
      /* TODO: Implement stop other scripts in sprite */ null;
      this.costume = "costume2";
      this.stage.vars.buttonsPressed++;
    }
  }

  *whenIReceiveRoom3() {
    this.visible = false;
  }
}
