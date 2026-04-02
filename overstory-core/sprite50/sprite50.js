import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite50 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./sprite50/costumes/costume1.png", {
        x: 10,
        y: 20,
      }),
      new Costume("costume2", "./sprite50/costumes/costume2.png", {
        x: 33,
        y: 0,
      }),
      new Costume("costume3", "./sprite50/costumes/costume3.png", {
        x: 19,
        y: 201,
      }),
      new Costume("costume4", "./sprite50/costumes/costume4.png", {
        x: 19,
        y: 201,
      }),
      new Costume("costume5", "./sprite50/costumes/costume5.png", {
        x: 19,
        y: 201,
      }),
      new Costume("costume6", "./sprite50/costumes/costume6.png", {
        x: 19,
        y: 203,
      }),
      new Costume("costume7", "./sprite50/costumes/costume7.png", {
        x: 19,
        y: 203,
      }),
      new Costume("costume8", "./sprite50/costumes/costume8.png", {
        x: 19,
        y: 203,
      }),
      new Costume("costume12", "./sprite50/costumes/costume12.png", {
        x: 19,
        y: 203,
      }),
      new Costume("costume11", "./sprite50/costumes/costume11.png", {
        x: 19,
        y: 203,
      }),
      new Costume("costume10", "./sprite50/costumes/costume10.png", {
        x: 19,
        y: 203,
      }),
      new Costume("costume13", "./sprite50/costumes/costume13.png", {
        x: 19,
        y: 203,
      }),
      new Costume("costume9", "./sprite50/costumes/costume9.png", {
        x: 19,
        y: 203,
      }),
      new Costume("costume14", "./sprite50/costumes/costume14.png", {
        x: 19,
        y: 203,
      }),
      new Costume("costume15", "./sprite50/costumes/costume15.png", {
        x: 19,
        y: 203,
      }),
      new Costume("costume16", "./sprite50/costumes/costume16.png", {
        x: 19,
        y: 203,
      }),
      new Costume("costume17", "./sprite50/costumes/costume17.png", {
        x: 19,
        y: 203,
      }),
      new Costume("costume18", "./sprite50/costumes/costume18.png", {
        x: 10,
        y: 35,
      }),
      new Costume("costume19", "./sprite50/costumes/costume19.svg", {
        x: 5,
        y: 28.462352941176476,
      }),
      new Costume("costume20", "./sprite50/costumes/costume20.svg", {
        x: 5,
        y: 35.86000500000003,
      }),
      new Costume("costume21", "./sprite50/costumes/costume21.svg", {
        x: 5,
        y: 51.117647058823565,
      }),
      new Costume("costume22", "./sprite50/costumes/costume22.svg", {
        x: 5,
        y: 78.85881852941183,
      }),
      new Costume("costume23", "./sprite50/costumes/costume23.svg", {
        x: 5,
        y: 49.26823029411773,
      }),
      new Costume("costume24", "./sprite50/costumes/costume24.svg", {
        x: 5,
        y: 23.376465588235362,
      }),
    ];

    this.sounds = [new Sound("pop", "./sprite50/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Chicken jockey" },
        this.whenIReceiveChickenJockey
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Chicken actually jockeys" },
        this.whenIReceiveChickenActuallyJockeys
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
    ];

    this.vars.mm = -3.3000000000000034;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveChickenJockey() {
    this.visible = true;
    this.size = 150;
    this.goto(61, -57);
    this.effects.brightness = 100;
    this.costume = "costume1";
    yield* this.wait(1);
    yield* this.wait(0.1);
    this.costume = "costume2";
    yield* this.startSound("pop");
    yield* this.wait(0.1);
    this.costume = "costume1";
    yield* this.wait(0.1);
    this.costume = "costume2";
    yield* this.startSound("pop");
    yield* this.wait(0.1);
    this.costume = "costume1";
    yield* this.wait(0.5);
    this.createClone();
    for (let i = 0; i < 5; i++) {
      yield* this.wait(0.5);
      yield;
    }
    yield* this.wait(0.5);
    for (let i = 0; i < 9; i++) {
      yield* this.wait(0.1);
      yield;
    }
    this.costume = "costume18";
    this.broadcast("Say the line");
  }

  *startAsClone() {
    this.costume = "costume3";
    for (let i = 0; i < 5; i++) {
      yield* this.wait(0.5);
      this.costumeNumber++;
      yield;
    }
    yield* this.wait(0.5);
    for (let i = 0; i < 9; i++) {
      this.costumeNumber++;
      yield* this.wait(0.1);
      yield;
    }
    this.deleteThisClone();
  }

  *whenIReceiveChickenActuallyJockeys() {
    this.visible = true;
    this.effects.clear();
    this.effects.brightness = 100;
    this.costume = "costume18";
    this.goto(61, -57);
    this.vars.mm = 0;
    for (let i = 0; i < 15; i++) {
      this.vars.mm -= 0.5;
      this.x += this.toNumber(this.vars.mm);
      yield;
    }
    for (let i = 0; i < 6; i++) {
      this.costumeNumber++;
      for (let i = 0; i < 2; i++) {
        this.x += this.toNumber(this.vars.mm);
        this.vars.mm += 0.35;
        yield;
      }
      yield;
    }
    this.costume = "costume18";
    yield* this.wait(1);
    for (let i = 0; i < 20; i++) {
      this.effects.ghost += 5;
      yield;
    }
    this.visible = false;
    this.effects.clear();
    this.broadcast("Ur turn");
  }

  *startAsClone2() {
    while (true) {
      if (this.touching(this.sprites["Sprite20"].andClones())) {
        if (this.toNumber(this.stage.vars.iFrames) === 0) {
          this.stage.vars.hp -= 5;
          this.stage.vars.iFrames++;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching(this.sprites["Sprite20"].andClones())) {
        if (this.toNumber(this.stage.vars.iFrames) === 0) {
          this.stage.vars.hp -= 5;
          this.stage.vars.iFrames++;
        }
      }
      yield;
    }
  }
}
