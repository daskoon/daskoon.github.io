import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite185 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.svg", {
        x: 525.2950450450451,
        y: 57,
      }),
    ];

    this.sounds = [new Sound("pop", "./sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room40" },
        this.whenIReceiveRoom40
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room40" },
        this.whenIReceiveRoom41
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "AAAAAAAAAAAAA" },
        this.whenIReceiveAaaaaaaaaaaaa
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Gauntlet start" },
        this.whenIReceiveGauntletStart
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room41" },
        this.whenIReceiveRoom42
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveRoom40() {
    this.visible = true;
    this.goto(-246, 10);
    this.moveAhead();
    yield* this.glide(12, 154, 10);
  }

  *whenIReceiveRoom41() {
    while (true) {
      if (this.touching(this.sprites["Player"].andClones())) {
        this.broadcast("Gauntlet start");
      }
      yield;
    }
  }

  *whenIReceiveAaaaaaaaaaaaa() {
    while (true) {
      if (this.touching(this.sprites["Player"].andClones())) {
        this.broadcast("Gauntlet start");
      }
      yield;
    }
  }

  *whenIReceiveGauntletStart() {
    if (this.stage.costumeNumber === 45) {
      /* TODO: Implement stop other scripts in sprite */ null;
      this.broadcast("AAAAAAAAAAAAA");
      this.visible = true;
      this.goto(-246, 10);
      this.moveAhead();
      yield* this.glide(12, 154, 10);
    }
  }

  *whenIReceiveRoom42() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }
}
