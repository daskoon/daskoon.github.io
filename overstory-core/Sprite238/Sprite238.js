import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite238 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.png", {
        x: 366,
        y: 360,
      }),
      new Costume("costume3", "./costumes/costume3.png", {
        x: 366,
        y: 360,
      }),
      new Costume("costume2", "./costumes/costume2.png", {
        x: 366,
        y: 360,
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
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room51" },
        this.whenIReceiveRoom51
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room52" },
        this.whenIReceiveRoom52
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room50" },
        this.whenIReceiveRoom53
      ),
      new Trigger(Trigger.BROADCAST, { name: "Shop" }, this.whenIReceiveShop),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveRoom50() {
    this.costume = "costume1";
    this.effects.ghost += 100;
    this.goto(0, 0);
    this.visible = true;
    while (true) {
      if (this.touching(this.sprites["Player"].andClones())) {
        this.broadcast("you restart maze");
      }
      yield;
    }
  }

  *whenIReceiveRoom51() {
    this.costume = "costume3";
    this.effects.ghost += 100;
    this.goto(0, 0);
    this.visible = true;
  }

  *whenIReceiveRoom52() {
    this.costume = "costume2";
    this.effects.ghost += 100;
    this.goto(0, 0);
    this.visible = true;
  }

  *whenIReceiveRoom53() {
    while (true) {
      this.effects.ghost = 0;
      yield* this.wait(0.3);
      for (let i = 0; i < 20; i++) {
        this.effects.ghost += 5;
        yield;
      }
      this.effects.ghost = 100;
      yield* this.wait(2);
      yield;
    }
  }

  *whenIReceiveShop() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }
}
