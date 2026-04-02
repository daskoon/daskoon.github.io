import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite49 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite49/costumes/costume1.png", {
        x: 30,
        y: 58,
      }),
      new Costume("costume2", "./Sprite49/costumes/costume2.png", {
        x: 30,
        y: 58,
      }),
      new Costume("costume3", "./Sprite49/costumes/costume3.png", {
        x: 30,
        y: 58,
      }),
      new Costume("costume4", "./Sprite49/costumes/costume4.png", {
        x: 30,
        y: 58,
      }),
      new Costume("costume5", "./Sprite49/costumes/costume5.png", {
        x: 30,
        y: 58,
      }),
      new Costume("costume6", "./Sprite49/costumes/costume6.png", {
        x: 30,
        y: 58,
      }),
      new Costume("costume7", "./Sprite49/costumes/costume7.png", {
        x: 15,
        y: 45,
      }),
      new Costume("costume8", "./Sprite49/costumes/costume8.png", {
        x: 30,
        y: 58,
      }),
      new Costume("costume9", "./Sprite49/costumes/costume9.png", {
        x: 30,
        y: 38,
      }),
      new Costume("costume10", "./Sprite49/costumes/costume10.png", {
        x: 30,
        y: 83,
      }),
      new Costume("costume11", "./Sprite49/costumes/costume11.png", {
        x: 28,
        y: 58,
      }),
      new Costume("costume12", "./Sprite49/costumes/costume12.png", {
        x: 28,
        y: 38,
      }),
      new Costume("costume13", "./Sprite49/costumes/costume13.png", {
        x: 31,
        y: 79,
      }),
    ];

    this.sounds = [
      new Sound("Impact", "./Sprite49/sounds/Impact.wav"),
      new Sound("THE DOOR", "./Sprite49/sounds/THE DOOR.wav"),
      new Sound("Knock", "./Sprite49/sounds/Knock.wav"),
      new Sound("Change", "./Sprite49/sounds/Change.wav"),
      new Sound("sans-eye-sounds", "./Sprite49/sounds/sans-eye-sounds.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(Trigger.CLONE_START, this.startAsClone4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Door death" },
        this.whenIReceiveDoorDeath
      ),
    ];
  }

  *startAsClone() {
    this.visible = true;
    this.effects.clear();
    this.moveAhead();
    while (true) {
      this.costume = "costume8";
      yield* this.wait(0.1);
      this.costume = "costume9";
      yield* this.wait(0.1);
      this.costume = "costume10";
      yield* this.wait(0.1);
      this.costume = "costume11";
      yield* this.wait(0.1);
      this.costume = "costume12";
      yield* this.wait(0.1);
      this.costume = "costume13";
      yield* this.wait(0.1);
      yield;
    }
  }

  *startAsClone2() {
    this.effects.ghost += 100;
    for (let i = 0; i < 5; i++) {
      this.effects.ghost -= 10;
      yield;
    }
    for (let i = 0; i < 5; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.deleteThisClone();
  }

  *startAsClone3() {
    this.goto(this.sprites["Sprite5"].x, this.sprites["Sprite5"].y);
    this.x += this.random(-20, 20);
    this.y += this.random(-20, 20);
    if (this.random(1, 2) === 1) {
      while (true) {
        this.x += 2;
        yield;
      }
    } else {
      while (true) {
        this.x -= 2;
        yield;
      }
    }
  }

  *startAsClone4() {
    yield* this.wait(0);
    if (this.random(1, 2) === 1) {
      while (true) {
        this.y += 2;
        yield;
      }
    } else {
      while (true) {
        this.y -= 2;
        yield;
      }
    }
  }

  *whenIReceiveDoorDeath() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.deleteThisClone();
  }
}
