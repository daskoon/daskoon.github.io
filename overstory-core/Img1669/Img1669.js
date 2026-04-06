import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Img1669 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume3", "./costumes/costume3.png", {
        x: 15,
        y: 46,
      }),
      new Costume("costume4", "./costumes/costume4.png", {
        x: 16,
        y: 33,
      }),
      new Costume("costume5", "./costumes/costume5.png", {
        x: 15,
        y: 38,
      }),
      new Costume("costume6", "./costumes/costume6.png", {
        x: 19,
        y: 42,
      }),
      new Costume("costume1", "./costumes/costume1.png", {
        x: 8,
        y: 17,
      }),
      new Costume("costume2", "./costumes/costume2.png", {
        x: 5,
        y: 17,
      }),
    ];

    this.sounds = [new Sound("what ", "./sounds/what .wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "SPIKES WILL FLY TRAPS WILL ACTIVATE" },
        this.whenIReceiveSpikesWillFlyTrapsWillActivate
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room38" },
        this.whenIReceiveRoom38
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "SPIKES WILL FLY TRAPS WILL ACTIVATE" },
        this.whenIReceiveSpikesWillFlyTrapsWillActivate2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room41" },
        this.whenIReceiveRoom41
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      this.costume = "costume3";
      yield* this.wait(0.2);
      this.costume = "costume4";
      yield* this.wait(0.2);
      this.costume = "costume5";
      yield* this.wait(0.2);
      this.costume = "costume6";
      yield* this.wait(0.2);
      yield;
    }
  }

  *whenIReceiveSpikesWillFlyTrapsWillActivate() {
    this.visible = true;
    this.size = 300;
    this.goto(-80, -228);
    yield* this.glide(2, -80, -115);
    this.goto(-80, -115);
    yield* this.wait(1);
    while (true) {
      this.createClone();
      yield* this.wait(2);
      yield;
    }
  }

  *startAsClone() {
    this.size = 200;
    this.costume = "costume1";
    while (!this.touching("edge")) {
      this.y += 5;
      if (this.stage.costumeNumber === 43) {
        this.y -= 2;
      }
      if (this.stage.costumeNumber === 44) {
        this.y -= 3;
      }
      if (this.stage.costumeNumber === 45) {
        this.y -= 3.2;
      }
      if (this.touching(this.sprites["Player"].andClones())) {
        this.broadcast("Gauntlet start");
      }
      yield;
    }
    this.deleteThisClone();
  }

  *startAsClone2() {
    while (true) {
      this.costume = "costume1";
      yield* this.wait(0.1);
      this.costume = "costume2";
      yield* this.wait(0.1);
      yield;
    }
  }

  *whenIReceiveRoom38() {
    this.deleteThisClone();
  }

  *whenIReceiveSpikesWillFlyTrapsWillActivate2() {
    yield* this.wait(3);
    while (true) {
      yield* this.playSoundUntilDone("what ");
      yield;
    }
  }

  *whenIReceiveRoom41() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
    this.deleteThisClone();
  }
}
