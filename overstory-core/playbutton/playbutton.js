import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Playbutton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./playbutton/costumes/costume1.png", {
        x: 42,
        y: 43,
      }),
      new Costume("costume2", "./playbutton/costumes/costume2.png", {
        x: 42,
        y: 43,
      }),
      new Costume("costume3", "./playbutton/costumes/costume3.png", {
        x: 42,
        y: 43,
      }),
    ];

    this.sounds = [new Sound("pop", "./playbutton/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
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
        { name: "Start chapter 2" },
        this.whenIReceiveStartChapter3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Chapter 3 title" },
        this.whenIReceiveChapter3Title
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start chapter 3" },
        this.whenIReceiveStartChapter4
      ),
    ];

    this.vars.list = [1, 0, 0];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStart() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    if (this.toNumber(this.stage.vars.chapter) === 1) {
      this.broadcast("Start");
    }
    if (this.toNumber(this.stage.vars.chapter) === 2) {
      yield* this.askAndWait("Save file?");
      if (this.compare(this.answer.length, 10) > 0) {
        this.broadcast("Start chapter 2");
        this.stage.vars.shopped = 1;
        this.stage.watchers._.visible = true;
        this.broadcast("Shop");
        this.stage.vars.jone = 1;
        this.stage.vars.shop = this.letterOf(this.answer, 1);
        this.stage.vars.grilledCheese = this.letterOf(this.answer, 2);
        this.stage.vars.married = this.letterOf(this.answer, 3);
        this.stage.vars.crackleWhip = this.letterOf(this.answer, 4);
        this.stage.vars.spindoor = this.letterOf(this.answer, 5);
        this.stage.vars.thornDagger = this.letterOf(this.answer, 6);
        this.stage.vars.amuletAvalible = this.letterOf(this.answer, 7);
        this.stage.vars.moneymaker = this.letterOf(this.answer, 8);
        this.stage.vars.armor = this.letterOf(this.answer, 9);
        yield* this.giveMoney();
      }
    }
    if (this.toNumber(this.stage.vars.chapter) === 3) {
      yield* this.askAndWait("Save file?");
      if (this.compare(this.answer.length, 16) > 0) {
        this.broadcast("Start chapter 3");
        this.stage.vars.shopped = 1;
        this.stage.watchers._.visible = true;
        this.broadcast("Shop");
        this.stage.vars.jone = 1;
        this.stage.vars.shop = this.letterOf(this.answer, 1);
        this.stage.vars.grilledCheese = this.letterOf(this.answer, 2);
        this.stage.vars.married = this.letterOf(this.answer, 3);
        this.stage.vars.crackleWhip = this.letterOf(this.answer, 4);
        this.stage.vars.spindoor = this.letterOf(this.answer, 5);
        this.stage.vars.thornDagger = this.letterOf(this.answer, 6);
        this.stage.vars.amuletAvalible = this.letterOf(this.answer, 7);
        this.stage.vars.attackssss = this.letterOf(this.answer, 8);
        this.stage.vars.vampireKnife = this.letterOf(this.answer, 9);
        this.stage.vars.batter = this.letterOf(this.answer, 10);
        this.stage.vars.burntPan = this.letterOf(this.answer, 11);
        this.stage.vars.chapter3Variable5 = this.letterOf(this.answer, 12);
        this.stage.vars.chapter3Variable6 = this.letterOf(this.answer, 13);
        this.stage.vars.armor = this.letterOf(this.answer, 14);
        yield* this.giveMoney();
      }
    }
  }

  *startAsClone() {
    this.createClone();
    this.deleteThisClone();
  }

  *whenIReceiveStartWithSaveTho() {
    this.visible = false;
  }

  *whenIReceiveChapter1Title() {
    this.stage.vars.chapter = 1;
    this.costume = "costume1";
    this.size = 130;
    this.visible = true;
    this.goto(-194, 192);
    yield* this.glide(0.5, -194, -79);
    this.goto(-194, -79);
  }

  *whenIReceiveChapter2Title() {
    this.stage.vars.chapter = 2;
    this.costume = "costume2";
    this.size = 130;
    this.visible = true;
    this.goto(-194, 192);
    yield* this.glide(0.5, -194, -79);
    this.goto(-194, -79);
  }

  *whenIReceiveStartChapter2() {
    this.visible = false;
  }

  *whenIReceiveStartChapter3() {
    yield* this.wait(0);
    if (this.toNumber(this.stage.vars.shop) === 1) {
      if (this.toNumber(this.stage.vars.married) === 1) {
        this.broadcast("Mawege");
      }
    }
  }

  *giveMoney() {
    this.stage.vars.numberOn = 0;
    this.vars.list = [];
    for (let i = 0; i < this.answer.length; i++) {
      this.vars.list.push(
        this.letterOf(this.answer, this.stage.vars.numberOn - 1)
      );
      this.stage.vars.numberOn++;
    }
    this.vars.list.push(
      this.letterOf(this.answer, this.stage.vars.numberOn - 1)
    );
    this.stage.vars.numberOn++;
    while (!(this.toString(this.itemOf(this.vars.list, 0)) === "A")) {
      this.vars.list.splice(0, 1);
    }
    this.vars.list.splice(0, 1);
    this.stage.vars.yunuchi = this.vars.list.join(" ");
  }

  *whenIReceiveChapter3Title() {
    this.stage.vars.chapter = 3;
    this.costume = "costume3";
    this.size = 130;
    this.visible = true;
    this.goto(-194, 192);
    yield* this.glide(0.5, -194, -79);
    this.goto(-194, -79);
  }

  *whenIReceiveStartChapter4() {
    this.visible = false;
  }
}
