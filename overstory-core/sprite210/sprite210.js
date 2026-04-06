import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite210 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume2 3", "./costumes/costume2 3.png", {
        x: 47,
        y: 89,
      }),
      new Costume("costume4", "./costumes/costume4.png", {
        x: 38,
        y: 93,
      }),
      new Costume("costume2", "./costumes/costume2.png", {
        x: 55,
        y: 131,
      }),
      new Costume("costume1", "./costumes/costume1.png", {
        x: 79,
        y: 48,
      }),
    ];

    this.sounds = [
      new Sound("pop", "./sounds/pop.wav"),
      new Sound("Fobert Battle", "./sounds/Fobert Battle.wav"),
      new Sound("Fobert Battle2", "./sounds/Fobert Battle2.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room48" },
        this.whenIReceiveRoom48
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Fobert fall" },
        this.whenIReceiveFobertFall
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Fobert appear" },
        this.whenIReceiveFobertAppear
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Fobert fight" },
        this.whenIReceiveFobertFight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Fobert fight" },
        this.whenIReceiveFobertFight2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Enemy turn" },
        this.whenIReceiveEnemyTurn
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Fobert fight" },
        this.whenIReceiveFobertFight3
      ),
      new Trigger(Trigger.BROADCAST, { name: "Shop" }, this.whenIReceiveShop),
    ];

    this.vars.attaaacccccccccckkkkk = 3;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveRoom48() {
    this.visible = false;
  }

  *whenIReceiveFobertFall() {
    this.size = 60;
    this.visible = true;
    this.effects.brightness -= 500;
    this.costume = "costume4";
    this.goto(120, 193);
    yield* this.glide(0.2, 120, 0);
    this.goto(120, 0);
    yield* this.startSound("pop");
    yield* this.wait(1);
    this.broadcast("Fobert talk");
  }

  *whenIReceiveFobertAppear() {
    this.costume = "costume4";
    this.effects.brightness = -100;
    for (let i = 0; i < 50; i++) {
      this.effects.brightness += 2;
      yield;
    }
    this.costume = "costume2 3";
    yield* this.wait(1);
    this.costume = "costume4";
  }

  *whenIReceiveFobertFight() {
    while (true) {
      yield* this.playSoundUntilDone("Fobert Battle");
      yield;
    }
  }

  *whenIReceiveFobertFight2() {
    this.costume = "costume4";
    this.stage.watchers._.visible = false;
    this.stage.watchers.hp.visible = true;
    this.stage.vars.hp = 100;
    this.stage.vars.speed = 4;
    this.stage.vars.battle = 21;
    this.stage.vars.inBattle = 1;
    this.stage.vars.enemyHp = 4500;
    this.broadcast("Ur turn");
    yield* this.glide(0.3, 135, -8);
    yield* this.wait(12.82);
    this.costume = "costume2";
    this.effects.brightness += 100;
    for (let i = 0; i < 20; i++) {
      this.effects.brightness -= 5;
      yield;
    }
    this.goto(135, -8);
    while (true) {
      for (let i = 0; i < 50; i++) {
        this.y -= 0.1;
        yield;
      }
      for (let i = 0; i < 50; i++) {
        this.y += 0.1;
        yield;
      }
      yield;
    }
  }

  *whenIReceiveEnemyTurn() {
    if (this.toNumber(this.stage.vars.battle) === 21) {
      yield* this.wait(1);
      this.vars.attaaacccccccccckkkkk = this.random(1, 3);
      if (this.toNumber(this.vars.attaaacccccccccckkkkk) === 1) {
        this.broadcast("Hat barage");
      }
      if (this.toNumber(this.vars.attaaacccccccccckkkkk) === 2) {
        this.broadcast("hat shake");
      }
      if (this.toNumber(this.vars.attaaacccccccccckkkkk) === 3) {
        this.broadcast("hats falling throwing");
      }
    }
  }

  *whenIReceiveFobertFight3() {
    yield* this.wait(0.3);
    while (!(this.compare(this.stage.vars.enemyHp, 1) < 0)) {
      yield;
    }
    this.broadcast("Ã¢â‚¬Â¦Ã¢â‚¬Â¦abattoeend");
    /* TODO: Implement stop other scripts in sprite */ null;
    this.broadcast("fobert battle end");
    this.costume = "costume1";
  }

  *whenIReceiveShop() {
    this.visible = false;
  }
}
