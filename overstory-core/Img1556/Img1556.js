import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Img1556 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Img1556/costumes/costume1.png", {
        x: 18,
        y: 5,
      }),
      new Costume("costume2", "./Img1556/costumes/costume2.png", {
        x: 14,
        y: 10,
      }),
      new Costume("costume3", "./Img1556/costumes/costume3.png", {
        x: 14,
        y: 10,
      }),
    ];

    this.sounds = [
      new Sound(
        "ScreenRecording_05-15-2025 18-33-02_1",
        "./Img1556/sounds/ScreenRecording_05-15-2025 18-33-02_1.wav"
      ),
      new Sound(
        "ScreenRecording_05-15-2025 18-33-02_2",
        "./Img1556/sounds/ScreenRecording_05-15-2025 18-33-02_2.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Smacks" },
        this.whenIReceiveSmacks
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Smacks" },
        this.whenIReceiveSmacks2
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveSmacks() {
    this.costume = "costume1";
    this.moveAhead();
    this.visible = true;
    this.size = 200;
    this.goto(160, 20);
    yield* this.wait(0.1);
    while (!this.mouse.down) {
      yield;
    }
    while (!!this.mouse.down) {
      yield;
    }
    this.costume = "costume2";
    this.audioEffects.pitch = 0;
    if (this.sprites["Sprite32"].x === -75) {
      this.costume = "costume3";
      this.audioEffects.pitch = -50;
    }
    yield* this.startSound("ScreenRecording_05-15-2025 18-33-02_2");
    while (!this.mouse.down) {
      yield;
    }
    while (!!this.mouse.down) {
      yield;
    }
    this.goto(120, -20);
    yield* this.startSound("ScreenRecording_05-15-2025 18-33-02_2");
    while (!this.mouse.down) {
      yield;
    }
    while (!!this.mouse.down) {
      yield;
    }
    this.goto(160, -20);
    yield* this.startSound("ScreenRecording_05-15-2025 18-33-02_2");
    while (!this.mouse.down) {
      yield;
    }
    while (!!this.mouse.down) {
      yield;
    }
    this.goto(152, 4);
    yield* this.startSound("ScreenRecording_05-15-2025 18-33-02_2");
    while (!this.mouse.down) {
      yield;
    }
    while (!!this.mouse.down) {
      yield;
    }
    this.goto(127, -11);
    yield* this.startSound("ScreenRecording_05-15-2025 18-33-02_2");
    while (!this.mouse.down) {
      yield;
    }
    while (!!this.mouse.down) {
      yield;
    }
    this.goto(135, -5);
    yield* this.startSound("ScreenRecording_05-15-2025 18-33-02_1");
    this.size = 200;
    for (let i = 0; i < 5; i++) {
      this.size += 40;
      yield;
    }
    this.size = 400;
  }

  *whenIReceiveSmacks2() {
    yield* this.wait(1.5);
    this.visible = false;
  }
}
