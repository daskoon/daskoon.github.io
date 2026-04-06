import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite22 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.png", {
        x: 480,
        y: 360,
      }),
      new Costume("costume2", "./costumes/costume2.png", {
        x: 480,
        y: 360,
      }),
    ];

    this.sounds = [new Sound("pop", "./sounds/pop.wav")];

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
      new Trigger(
        Trigger.BROADCAST,
        { name: "Chapter 3 title" },
        this.whenIReceiveChapter3Title
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start chapter 3" },
        this.whenIReceiveStartChapter3
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
    this.costume = "costume1";
    this.goto(0, 0);
    this.moveBehind();
    this.visible = true;
  }

  *whenIReceiveChapter2Title() {
    this.costume = "costume2";
    this.goto(0, 0);
    this.moveBehind();
    this.visible = true;
  }

  *whenIReceiveStartChapter2() {
    this.visible = false;
  }

  *whenIReceiveChapter3Title() {
    this.costume = "costume2";
    this.goto(0, 0);
    this.moveBehind();
    this.visible = true;
  }

  *whenIReceiveStartChapter3() {
    this.visible = false;
  }
}
