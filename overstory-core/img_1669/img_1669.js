import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Img_1669 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./img_1669/costumes/costume1.png", {
        x: 5,
        y: 5,
      }),
      new Costume("costume2", "./img_1669/costumes/costume2.png", {
        x: 5,
        y: 5,
      }),
    ];

    this.sounds = [new Sound("pop", "./img_1669/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Suck HP" },
        this.whenIReceiveSuckHp
      ),
    ];

    this.vars.clone = 0;
  }

  *whenGreenFlagClicked() {
    this.vars.clone = 0;
    this.visible = false;
  }

  *startAsClone() {
    this.costume = "costume1";
    if (this.toNumber(this.stage.vars.battle) === 19) {
      this.costume = "costume2";
    }
    this.vars.clone = 1;
    this.size = 200;
    this.moveAhead();
    this.visible = true;
    this.goto(146, -12);
    this.x += this.random(-20, 20);
    this.y += this.random(-20, 20);
    this.effects.ghost += 100;
    for (let i = 0; i < 20; i++) {
      this.effects.ghost -= 5;
      yield;
    }
    this.direction = this.radToScratch(
      Math.atan2(
        this.sprites["Sprite14"].y - this.y,
        this.sprites["Sprite14"].x - this.x
      )
    );
    while (!this.touching(this.sprites["Sprite14"].andClones())) {
      this.move(21);
      yield;
    }
    this.deleteThisClone();
  }

  *whenIReceiveSuckHp() {
    if (this.toNumber(this.vars.clone) === 0) {
      for (let i = 0; i < 10; i++) {
        this.createClone();
        this.createClone();
        yield;
      }
    }
  }
}
