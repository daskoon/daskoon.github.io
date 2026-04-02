import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite235 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume2", "./Sprite235/costumes/costume2.png", {
        x: 57,
        y: 37,
      }),
      new Costume("costume3", "./Sprite235/costumes/costume3.png", {
        x: 11,
        y: 33,
      }),
      new Costume("costume4", "./Sprite235/costumes/costume4.png", {
        x: 58,
        y: 37,
      }),
      new Costume("costume1", "./Sprite235/costumes/costume1.png", {
        x: 11,
        y: 33,
      }),
      new Costume("costume5", "./Sprite235/costumes/costume5.png", {
        x: 57,
        y: 37,
      }),
      new Costume("costume6", "./Sprite235/costumes/costume6.png", {
        x: 20,
        y: -2,
      }),
    ];

    this.sounds = [
      new Sound("Threatening Look", "./Sprite235/sounds/Threatening Look.wav"),
      new Sound(
        "Earthbound Like Song",
        "./Sprite235/sounds/Earthbound Like Song.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room49" },
        this.whenIReceiveRoom49
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "sbtumpatnsaj threat" },
        this.whenIReceiveSbtumpatnsajThreat
      ),
      new Trigger(Trigger.BROADCAST, { name: "9p4ay" }, this.whenIReceive9p4ay),
      new Trigger(
        Trigger.BROADCAST,
        { name: "00nt 94y" },
        this.whenIReceive00nt94y
      ),
      new Trigger(Trigger.BROADCAST, { name: "4n9ry" }, this.whenIReceive4n9ry),
      new Trigger(
        Trigger.BROADCAST,
        { name: "5111y 8111y f19ht" },
        this.whenIReceive5111y8111yF19ht
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Enemy turn" },
        this.whenIReceiveEnemyTurn
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "silly come back" },
        this.whenIReceiveSillyComeBack
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "hmmrgth" },
        this.whenIReceiveHmmrgth
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room50" },
        this.whenIReceiveRoom50
      ),
    ];

    this.vars.attaaacccccccccckkkkk = 1;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveRoom49() {
    this.goto(120, -10);
    this.costume = "costume2";
    this.visible = true;
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("silly billy speaks");
  }

  *whenIReceiveSbtumpatnsajThreat() {
    this.goto(120, -10);
    this.costume = "costume2";
    yield* this.glide(1, 20, -50);
    yield* this.glide(0.3, -23, 0);
    this.goto(-43, 10);
    this.costume = "costume3";
    while (true) {
      yield* this.playSoundUntilDone("Threatening Look");
      yield;
    }
  }

  *whenIReceive9p4ay() {
    this.visible = true;
    /* TODO: Implement stop other scripts in sprite */ null;
    this.costume = "costume4";
    this.goto(-33, -5);
    yield* this.glide(1, 187, -5);
    this.visible = false;
    yield* this.wait(0.5);
    this.stage.vars.speed = 4;
  }

  *whenIReceive00nt94y() {
    this.costume = "costume1";
  }

  *whenIReceive4n9ry() {
    this.costume = "costume3";
  }

  *whenIReceive5111y8111yF19ht() {
    this.stage.watchers._.visible = false;
    this.stage.watchers.hp.visible = true;
    this.stage.vars.hp = 100;
    this.stage.vars.speed = 4;
    this.stage.vars.battle = 22;
    this.stage.vars.inBattle = 1;
    this.stage.vars.enemyHp = 4700;
    this.broadcast("Ur turn");
    this.costume = "costume2";
    /* TODO: Implement stop other scripts in sprite */ null;
    this.broadcast("hmmrgth");
    yield* this.glide(0.3, 137, -10);
    while (true) {
      yield* this.playSoundUntilDone("Earthbound Like Song");
      yield;
    }
  }

  *whenIReceiveEnemyTurn() {
    if (this.toNumber(this.stage.vars.battle) === 22) {
      this.costume = "costume2";
      yield* this.wait(1);
      this.vars.attaaacccccccccckkkkk = this.random(1, 3);
      if (this.toNumber(this.vars.attaaacccccccccckkkkk) === 1) {
        yield* this.fly();
      }
      if (this.toNumber(this.vars.attaaacccccccccckkkkk) === 2) {
        this.broadcast("weow");
      }
      if (this.toNumber(this.vars.attaaacccccccccckkkkk) === 3) {
        this.goto(137, -10);
        yield* this.glide(0.3, 253, -10);
        this.visible = false;
        this.broadcast("silly billy cat activities");
      }
    }
  }

  *startAsClone() {
    this.costume = "costume6";
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
    this.x += this.random(-18, 18);
    this.direction = 180;
    this.direction += this.random(-25, 25);
    while (!this.touching("edge")) {
      this.move(5);
      yield;
    }
    this.deleteThisClone();
  }

  *fly() {
    this.costume = "costume5";
    this.goto(137, -10);
    for (let i = 0; i < 20; i++) {
      this.x -= 2.5;
      this.y += 6;
      if (this.random(1, 3) === 1) {
        this.createClone();
      }
      yield;
    }
    for (let i = 0; i < 30; i++) {
      this.y += 2;
      this.x -= 5;
      if (this.random(1, 3) === 1) {
        this.createClone();
      }
      yield;
    }
    for (let i = 0; i < 30; i++) {
      this.y += 2;
      this.x -= 8;
      if (this.random(1, 3) === 1) {
        this.createClone();
      }
      yield;
    }
    this.goto(253, -10);
    yield* this.glide(0.3, 137, -10);
    this.costume = "costume2";
    yield* this.wait(2);
    this.broadcast("Ur turn");
  }

  *whenIReceiveSillyComeBack() {
    this.visible = true;
    this.goto(253, -10);
    yield* this.glide(0.3, 137, -10);
  }

  *startAsClone2() {
    while (true) {
      if (this.touching(this.sprites["Sprite20"].andClones())) {
        if (this.toNumber(this.stage.vars.iFrames) === 0) {
          this.stage.vars.hp += -57 + this.toNumber(this.stage.vars.armor);
          this.stage.vars.iFrames++;
        }
        this.deleteThisClone();
      }
      yield;
    }
  }

  *whenIReceiveHmmrgth() {
    while (!(this.compare(this.stage.vars.enemyHp, 1) < 0)) {
      yield;
    }
    this.broadcast("Ã¢â‚¬Â¦Ã¢â‚¬Â¦abattoeend");
    /* TODO: Implement stop other scripts in sprite */ null;
    this.broadcast("5111y 8111y d34d");
    this.costume = "costume5";
  }

  *whenIReceiveRoom50() {
    this.visible = false;
  }
}
