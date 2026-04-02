import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Mysteryguy extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./mysteryguy/costumes/costume1.png", {
        x: 61,
        y: 25,
      }),
    ];

    this.sounds = [new Sound("pop", "./mysteryguy/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start with save tho" },
        this.whenIReceiveStartWithSaveTho
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start with save tho" },
        this.whenIReceiveStartWithSaveTho2
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
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start chapter 3" },
        this.whenIReceiveStartChapter3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start chapter 3" },
        this.whenIReceiveStartChapter4
      ),
    ];

    this.vars.time = 147.822;

    this.watchers.time = new Watcher({
      label: "Sprite66: Time",
      style: "large",
      visible: false,
      value: () => this.vars.time,
      x: 450,
      y: 180,
    });
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.watchers.time.visible = false;
    this.goto(116, 180);
    this.moveAhead();
    this.moveAhead();
    this.moveAhead();
    this.moveAhead();
  }

  *whenIReceiveStart() {
    this.visible = false;
    this.restartTimer();
    while (true) {
      this.vars.time = this.timer;
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.watchers.time.visible = true;
    this.visible = false;
    this.vars.time = 0;
  }

  *whenIReceiveStartWithSaveTho() {
    this.visible = false;
  }

  *whenIReceiveStartWithSaveTho2() {
    this.watchers.time.visible = false;
  }

  *whenIReceiveChapter1Title() {
    this.visible = true;
    this.goto(116, 180);
    yield* this.glide(0.5, 116, 0);
    this.goto(116, 0);
  }

  *whenIReceiveChapter2Title() {
    this.visible = true;
    this.goto(116, 180);
    yield* this.glide(0.5, 116, 0);
    this.goto(116, 0);
  }

  *whenIReceiveStartChapter2() {
    this.visible = false;
    this.restartTimer();
    while (true) {
      this.vars.time = this.timer;
      yield;
    }
  }

  *whenIReceiveStartChapter3() {
    this.visible = false;
  }

  *whenIReceiveStartChapter4() {
    this.visible = false;
    this.restartTimer();
    while (true) {
      this.vars.time = this.timer;
      yield;
    }
  }
}
