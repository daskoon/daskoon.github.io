import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite23 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite23/costumes/costume1.png", {
        x: 71,
        y: 40,
      }),
      new Costume("costume2", "./Sprite23/costumes/costume2.png", {
        x: 72,
        y: 40,
      }),
    ];

    this.sounds = [new Sound("pop", "./Sprite23/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start with save tho" },
        this.whenIReceiveStartWithSaveTho
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Chapter 1 title" },
        this.whenIReceiveChapter1Title
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Chapter 2 title" },
        this.whenIReceiveChapter2Title
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start chapter 2" },
        this.whenIReceiveStartChapter2
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStart() {
    this.visible = false;
  }

  *whenIReceiveStartWithSaveTho() {
    this.visible = false;
  }

  *whenIReceiveChapter1Title() {
    this.moveBehind();
    this.moveAhead(1);
    this.visible = true;
    this.goto(-261, 100);
    this.costume = "costume2";
    yield* this.glide(0.5, -180, 100);
    while (true) {
      this.costumeNumber++;
      yield* this.wait(0.5);
      yield;
    }
  }

  *whenIReceiveChapter2Title() {
    this.effects.brightness = -80;
    this.moveBehind();
    this.moveAhead(1);
    this.visible = true;
    this.goto(-261, 100);
    this.costume = "costume2";
    yield* this.glide(0.5, -180, 100);
    while (true) {
      this.costumeNumber++;
      yield* this.wait(0.5);
      yield;
    }
  }

  *whenIReceiveStartChapter2() {
    this.visible = false;
  }
}
