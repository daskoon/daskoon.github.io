import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite25 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite25/costumes/costume1.png", {
        x: 480,
        y: 278,
      }),
      new Costume("costume2", "./Sprite25/costumes/costume2.png", {
        x: 480,
        y: 278,
      }),
      new Costume("costume3", "./Sprite25/costumes/costume3.png", {
        x: 480,
        y: 276,
      }),
    ];

    this.sounds = [new Sound("pop", "./Sprite25/sounds/pop.wav")];

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

  *whenthisspriteclicked() {
    if (this.toNumber(this.stage.vars.chapter) === 1) {
      this.broadcast("Baws");
      this.effects.clear();
      this.effects.brightness -= 100;
      for (let i = 0; i < 10; i++) {
        this.effects.brightness += 10;
        yield;
      }
      this.effects.clear();
    }
  }

  *whenIReceiveStartWithSaveTho() {
    this.visible = false;
  }

  *whenIReceiveChapter1Title() {
    this.costume = "costume1";
    this.visible = true;
    this.moveBehind();
    this.moveAhead(2);
    this.goto(0, -329);
    yield* this.glide(0.5, 0, 0);
  }

  *whenIReceiveChapter2Title() {
    this.costume = "costume2";
    this.visible = true;
    this.moveBehind();
    this.moveAhead(2);
    this.goto(0, -329);
    yield* this.glide(0.5, 0, 0);
  }

  *whenIReceiveStartChapter2() {
    this.visible = false;
  }

  *whenIReceiveChapter3Title() {
    this.costume = "costume3";
    this.visible = true;
    this.moveBehind();
    this.moveAhead(2);
    this.goto(0, -329);
    yield* this.glide(0.5, 0, 0);
  }

  *whenIReceiveStartChapter3() {
    this.visible = false;
  }
}
