import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite28 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.png", {
        x: 237,
        y: 37,
      }),
      new Costume("costume2", "./costumes/costume2.png", {
        x: 237,
        y: 37,
      }),
      new Costume("costume3", "./costumes/costume3.png", {
        x: 237,
        y: 37,
      }),
    ];

    this.sounds = [new Sound("pop", "./sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jane battle" },
        this.whenIReceiveJaneBattle
      ),
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

  *whenIReceiveJaneBattle() {
    this.stage.vars.enemyHp = 250;
    while (true) {
      if (this.compare(this.stage.vars.enemyHp, 0) < 0) {
        this.broadcast("Jone defeat");
        this.stage.vars.enemyHp = 0;
        return;
      }
      yield;
    }
  }

  *whenIReceiveStartWithSaveTho() {
    this.visible = false;
  }

  *whenIReceiveChapter1Title() {
    this.costume = "costume1";
    this.size = 100;
    this.visible = true;
    this.goto(-114, 178);
    yield* this.glide(0.5, -114, 156);
    this.goto(-114, 156);
  }

  *whenIReceiveChapter2Title() {
    this.costume = "costume2";
    this.size = 100;
    this.visible = true;
    this.goto(-114, 178);
    yield* this.glide(0.5, -114, 156);
    this.goto(-114, 156);
  }

  *whenIReceiveStartChapter2() {
    this.visible = false;
  }

  *whenIReceiveChapter3Title() {
    this.costume = "costume3";
    this.size = 100;
    this.visible = true;
    this.goto(-114, 178);
    yield* this.glide(0.5, -114, 156);
    this.goto(-114, 156);
  }

  *whenIReceiveStartChapter3() {
    this.visible = false;
  }
}
