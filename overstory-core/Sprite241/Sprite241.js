import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite241 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume4", "./costumes/costume4.png", {
        x: -72,
        y: 156,
      }),
    ];

    this.sounds = [
      new Sound(
        "lock-and-key-37699",
        "./sounds/lock-and-key-37699.wav"
      ),
      new Sound(
        "undertale-undyne-spear-summon-bone-shoot-made-with-Voicemod 2",
        "./sounds/undertale-undyne-spear-summon-bone-shoot-made-with-Voicemod 2.wav"
      ),
      new Sound(
        "undertale-undyne-spear-summon-bone-shoot-made-with-Voicemod 3",
        "./sounds/undertale-undyne-spear-summon-bone-shoot-made-with-Voicemod 3.wav"
      ),
      new Sound("Click", "./sounds/Click.wav"),
      new Sound("rumbl", "./sounds/rumbl.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "THE REAL FINAL ROOM" },
        this.whenIReceiveTheRealFinalRoom
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "tower disses a pear" },
        this.whenIReceiveTowerDissesAPear
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveTheRealFinalRoom() {
    yield* this.wait(10);
    yield* this.startSound(
      "undertale-undyne-spear-summon-bone-shoot-made-with-Voicemod 2"
    );
    this.size = 100;
    this.costume = "costume2";
    this.visible = true;
    this.goto(0, -100);
    this.effects.ghost = 100;
    for (let i = 0; i < 20; i++) {
      this.effects.ghost -= 5;
      yield;
    }
    yield* this.wait(1);
    yield* this.startSound(
      "undertale-undyne-spear-summon-bone-shoot-made-with-Voicemod 3"
    );
    for (let i = 0; i < 10; i++) {
      for (let i = 0; i < 2; i++) {
        this.y += 5;
        yield;
      }
      this.createClone();
      yield;
    }
    yield* this.startSound("Click");
    yield* this.wait(1);
    yield* this.startSound("rumbl");
    this.stage.costume = "backdrop60";
    for (let i = 0; i < 10; i++) {
      yield* this.wait(0.1);
      this.stage.costumeNumber++;
      yield;
    }
    yield* this.wait(1);
    this.broadcast("tower disses a pear");
  }

  *startAsClone() {
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.deleteThisClone();
  }

  *whenIReceiveTowerDissesAPear() {
    this.stage.costume = "backdrop71";
    this.visible = false;
  }
}
