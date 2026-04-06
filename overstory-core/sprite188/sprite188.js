import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite188 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.png", {
        x: 15,
        y: 13,
      }),
      new Costume("costume2", "./costumes/costume2.png", {
        x: 15,
        y: 8,
      }),
      new Costume("costume3", "./costumes/costume3.png", {
        x: 15,
        y: 9,
      }),
    ];

    this.sounds = [
      new Sound("Pixel Man", "./sounds/Pixel Man.wav"),
      new Sound("Augh", "./sounds/Augh.wav"),
      new Sound("Augh2", "./sounds/Augh2.wav"),
      new Sound("Augh3", "./sounds/Augh3.wav"),
      new Sound("AAAUGHH", "./sounds/AAAUGHH.wav"),
      new Sound("Gunshot pixel", "./sounds/Gunshot pixel.wav"),
      new Sound("AAAAAAAAAA", "./sounds/AAAAAAAAAA.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room42" },
        this.whenIReceiveRoom42
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "John pixel fight" },
        this.whenIReceiveJohnPixelFight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Enemy hurt" },
        this.whenIReceiveEnemyHurt
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Enemy turn" },
        this.whenIReceiveEnemyTurn
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Yip he he he " },
        this.whenIReceiveYipHeHeHe
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "John Pixel vanish" },
        this.whenIReceiveJohnPixelVanish
      ),
    ];

    this.vars.attaaacccccccccckkkkk = 1;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveRoom42() {
    this.goto(100, 50);
    this.size = 400;
    this.visible = true;
    this.costume = "costume1";
    while (true) {
      this.costume = "costume1";
      yield* this.wait(0.5);
      this.costume = "costume2";
      yield* this.wait(0.5);
      yield;
    }
  }

  *whenIReceiveJohnPixelFight() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.costume = "costume1";
    this.broadcast("Yip he he he ");
    this.stage.watchers._.visible = false;
    this.stage.vars.hp = 100;
    this.stage.watchers.hp.visible = true;
    this.stage.vars.battle = 18;
    this.stage.vars.inBattle = 1;
    this.stage.vars.enemyHp = 2400;
    this.goto(130, 10);
    this.broadcast("Ur turn");
    this.stage.vars.hp = 100;
    yield* this.startSound("AAAAAAAAAA");
    yield* this.wait(2.89);
    while (true) {
      yield* this.playSoundUntilDone("Pixel Man");
      yield;
    }
  }

  *whenIReceiveEnemyHurt() {
    if (this.toNumber(this.stage.vars.battle) === 18) {
      yield* this.startSound(this.random(2, 5));
      this.costume = "costume3";
      yield* this.wait(0.4);
      this.costume = "costume1";
    }
  }

  *whenIReceiveEnemyTurn() {
    if (this.toNumber(this.stage.vars.battle) === 18) {
      yield* this.wait(1);
      this.vars.attaaacccccccccckkkkk = this.random(1, 3);
      if (this.toNumber(this.vars.attaaacccccccccckkkkk) === 1) {
        this.broadcast("Nukes");
      }
      if (this.toNumber(this.vars.attaaacccccccccckkkkk) === 2) {
        this.broadcast("Cowza");
      }
      if (this.toNumber(this.vars.attaaacccccccccckkkkk) === 3) {
        this.broadcast("Heads will fly");
      }
    }
  }

  *whenIReceiveYipHeHeHe() {
    while (!(this.compare(this.stage.vars.enemyHp, 1) < 0)) {
      yield;
    }
    /* TODO: Implement stop other scripts in sprite */ null;
    this.broadcast("Ã¢â‚¬Â¦Ã¢â‚¬Â¦abattoeend");
    this.stage.vars.speed = 0;
    this.costume = "costume3";
    yield* this.startSound("Augh3");
    for (let i = 0; i < 5; i++) {
      this.goto(130, 10);
      this.x += this.random(-5, 5);
      yield;
    }
    this.goto(130, 10);
    this.broadcast("John Pixel dies");
  }

  *whenIReceiveJohnPixelVanish() {
    this.visible = true;
    this.effects.clear();
    for (let i = 0; i < 50; i++) {
      this.effects.ghost += 2;
      this.effects.pixelate += 0.25;
      yield;
    }
    this.visible = false;
    this.stage.vars.speed = 4;
  }
}
