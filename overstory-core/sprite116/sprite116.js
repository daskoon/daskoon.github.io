import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite116 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./sprite116/costumes/costume1.png", {
        x: 51,
        y: 39,
      }),
    ];

    this.sounds = [new Sound("pop", "./sprite116/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Chapter 1 title" },
        this.whenIReceiveChapter1Title
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Chapter 2 title" },
        this.whenIReceiveChapter2Title
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Chapter 3 title" },
        this.whenIReceiveChapter3Title
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
    ];

    this.vars.clone = 0;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    yield* this.wait(3.08);
    this.goto(-62, 33);
    this.visible = true;
    this.moveAhead();
    this.createClone();
    yield* this.wait(0);
    this.moveAhead();
  }

  *whenIReceiveChapter1Title() {
    /* TODO: Implement stop other scripts in sprite */ null;
    while (true) {
      this.visible = false;
      this.deleteThisClone();
      yield;
    }
  }

  *whenthisspriteclicked() {
    if (this.toNumber(this.vars.clone) === 0) {
      this.broadcast("Chapter 2 title");
    }
  }

  *whenIReceiveChapter2Title() {
    /* TODO: Implement stop other scripts in sprite */ null;
    while (true) {
      this.visible = false;
      this.deleteThisClone();
      yield;
    }
  }

  *whenIReceiveChapter3Title() {
    /* TODO: Implement stop other scripts in sprite */ null;
    while (true) {
      this.visible = false;
      this.deleteThisClone();
      yield;
    }
  }

  *startAsClone() {
    for (let i = 0; i < 20; i++) {
      this.size += 10;
      this.effects.ghost += 5;
      yield;
    }
    this.deleteThisClone();
  }

  *startAsClone2() {
    this.vars.clone = 1;
  }

  *whenGreenFlagClicked2() {
    this.vars.clone = 0;
  }
}
