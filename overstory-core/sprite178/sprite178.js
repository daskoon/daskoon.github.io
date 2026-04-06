import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite178 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.png", {
        x: 29,
        y: 46,
      }),
      new Costume("costume2", "./costumes/costume2.png", {
        x: 29,
        y: 11,
      }),
      new Costume("costume3", "./costumes/costume3.png", {
        x: 8,
        y: 46,
      }),
    ];

    this.sounds = [
      new Sound("Plantie :3", "./sounds/Plantie :3.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Drop plant" },
        this.whenIReceiveDropPlant
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Plant battle" },
        this.whenIReceivePlantBattle
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Enemy turn" },
        this.whenIReceiveEnemyTurn
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Plant battle" },
        this.whenIReceivePlantBattle2
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Plant battle" },
        this.whenIReceivePlantBattle3
      ),
      new Trigger(Trigger.BROADCAST, { name: "Shop" }, this.whenIReceiveShop),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ã¢â‚¬Â¦Ã¢â‚¬Â¦abattoeend" },
        this.whenIReceiveAbattoeend
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.moveBehind();
    this.visible = false;
  }

  *whenIReceiveDropPlant() {
    this.costume = "costume1";
    this.goto(41, -9);
    this.visible = true;
  }

  *whenIReceivePlantBattle() {
    this.costume = "costume1";
    yield* this.glide(0.3, 130, 0);
    this.stage.vars.inBattle = 1;
    this.stage.vars.hp = 100;
    this.stage.watchers._.visible = false;
    this.stage.vars.battle = 17;
    this.stage.vars.speed = 4;
    this.stage.watchers.hp.visible = true;
    this.stage.vars.enemyHp = 1500;
    this.stage.watchers.enemyHp.visible = true;
    this.broadcast("Ur turn");
  }

  *whenIReceiveEnemyTurn() {
    if (this.toNumber(this.stage.vars.battle) === 17) {
      yield* this.wait(0.5);
      if (this.random(1, 2) === 1) {
        this.broadcast("Spinnywinny");
      } else {
        this.broadcast("Rain");
      }
    }
  }

  *whenIReceivePlantBattle2() {
    yield* this.wait(0.4);
    while (!(this.compare(this.stage.vars.enemyHp, 1) < 0)) {
      yield;
    }
    this.broadcast("Ã¢â‚¬Â¦Ã¢â‚¬Â¦abattoeend");
    this.costume = "costume2";
    this.createClone();
    this.broadcast("Plant cut");
    /* TODO: Implement stop other scripts in sprite */ null;
    this.stage.watchers.enemyHp.visible = false;
    this.stage.watchers._.visible = true;
    this.stage.watchers.hp.visible = false;
    this.stage.watchers.grilledCheese.visible = false;
    this.stage.vars.inBattle = 0;
  }

  *startAsClone() {
    this.goto(130, 0);
    this.costume = "costume3";
    for (let i = 0; i < 10; i++) {
      this.x -= 2;
      this.y -= 1;
      yield;
    }
    for (let i = 0; i < 10; i++) {
      this.x -= 2;
      this.effects.ghost += 10;
      this.y -= 1;
      yield;
    }
    this.deleteThisClone();
  }

  *whenIReceivePlantBattle3() {
    while (true) {
      yield* this.playSoundUntilDone("Plantie :3");
      yield;
    }
  }

  *whenIReceiveShop() {
    this.visible = false;
  }

  *whenIReceiveAbattoeend() {
    this.stage.watchers._.visible = true;
    this.stage.watchers.hp.visible = false;
    this.stage.watchers.grilledCheese.visible = false;
    this.stage.vars.inBattle = 0;
    for (let i = 0; i < 10; i++) {
      this.stage.watchers.enemyHp.visible = false;
      yield;
    }
  }
}
