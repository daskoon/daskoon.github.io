import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _666666666666666666666666666666666666666666666666666666666666666666666666 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "costume1",
        "./costumes/costume1.png",
        { x: 28, y: 71 }
      ),
    ];

    this.sounds = [
      new Sound(
        "eerie",
        "./sounds/eerie.wav"
      ),
      new Sound(
        "66666666666666666666666666666666666666666666666666666",
        "./sounds/66666666666666666666666666666666666666666666666666666.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room666" },
        this.whenIReceiveRoom666
      ),
      new Trigger(Trigger.BROADCAST, { name: "667" }, this.whenIReceive667),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room666" },
        this.whenIReceiveRoom667
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveRoom666() {
    this.audioEffects.volume = 40;
    this.moveAhead();
    this.size = 150;
    this.goto(165, 0);
    this.visible = true;
    this.audioEffects.pitch = -50;
    while (true) {
      yield* this.playSoundUntilDone("eerie");
      yield;
    }
  }

  *whenIReceive667() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.audioEffects.pitch = 0;
    this.audioEffects.volume = 100;
    yield* this.startSound(6.666666666666666e52);
    this.visible = false;
  }

  *whenIReceiveRoom667() {
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("666");
  }
}
