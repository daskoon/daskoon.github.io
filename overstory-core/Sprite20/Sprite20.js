import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite20 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite20/costumes/costume1.png", {
        x: 12,
        y: 10,
      }),
      new Costume("costume2", "./Sprite20/costumes/costume2.png", {
        x: 12,
        y: 10,
      }),
      new Costume("costume3", "./Sprite20/costumes/costume3.png", {
        x: 12,
        y: 10,
      }),
      new Costume("costume4", "./Sprite20/costumes/costume4.png", {
        x: 12,
        y: 10,
      }),
    ];

    this.sounds = [
      new Sound(
        "undertale-damage-taken",
        "./Sprite20/sounds/undertale-damage-taken.mp3"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jane battle" },
        this.whenIReceiveJaneBattle
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Sent back" },
        this.whenIReceiveSentBack
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Owsies" },
        this.whenIReceiveOwsies
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ur turn" },
        this.whenIReceiveUrTurn
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Enemy turn" },
        this.whenIReceiveEnemyTurn
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Door fight" },
        this.whenIReceiveDoorFight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Door death" },
        this.whenIReceiveDoorDeath
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Purple" },
        this.whenIReceivePurple
      ),
      new Trigger(Trigger.BROADCAST, { name: "Up" }, this.whenIReceiveUp),
      new Trigger(Trigger.BROADCAST, { name: "Up" }, this.whenIReceiveUp2),
      new Trigger(Trigger.BROADCAST, { name: "Down" }, this.whenIReceiveDown),
      new Trigger(Trigger.BROADCAST, { name: "Down" }, this.whenIReceiveDown2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Amber tired" },
        this.whenIReceiveAmberTired
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Amber fight" },
        this.whenIReceiveAmberFight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Thrasher battle" },
        this.whenIReceiveThrasherBattle
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Amber tired" },
        this.whenIReceiveAmberTired2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Foe end" },
        this.whenIReceiveFoeEnd
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Foe end" },
        this.whenIReceiveFoeEnd2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start with save tho" },
        this.whenIReceiveStartWithSaveTho
      ),
      new Trigger(Trigger.BROADCAST, { name: "Jacob" }, this.whenIReceiveJacob),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "Up" }, this.whenIReceiveUp3),
      new Trigger(Trigger.BROADCAST, { name: "Blue" }, this.whenIReceiveBlue),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Red again :3" },
        this.whenIReceiveRedAgain3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Warning to spike" },
        this.whenIReceiveWarningToSpike
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Left right ledt ridgh" },
        this.whenIReceiveLeftRightLedtRidgh
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ur turn" },
        this.whenIReceiveUrTurn2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jimmy dies" },
        this.whenIReceiveJimmyDies
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Enemy turn" },
        this.whenIReceiveEnemyTurn2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Snake dead" },
        this.whenIReceiveSnakeDead
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start chapter 2" },
        this.whenIReceiveStartChapter2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Half and half" },
        this.whenIReceiveHalfAndHalf
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Shadow zork dead" },
        this.whenIReceiveShadowZorkDead
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Shadow jone dead" },
        this.whenIReceiveShadowJoneDead
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Shadow dead" },
        this.whenIReceiveShadowDead
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Various guys dead" },
        this.whenIReceiveVariousGuysDead
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Doordevil dies lmao" },
        this.whenIReceiveDoordevilDiesLmao
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Gary dead" },
        this.whenIReceiveGaryDead
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start chapter 3" },
        this.whenIReceiveStartChapter3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ã¢â‚¬Â¦Ã¢â‚¬Â¦abattoeend" },
        this.whenIReceiveAbattoeend
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jacob" },
        this.whenIReceiveJacob2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jane battle" },
        this.whenIReceiveJaneBattle2
      ),
    ];

    this.vars.purple = 0;
    this.vars.y = 0;
  }

  *whenGreenFlagClicked() {
    this.vars.purple = 0;
    this.visible = false;
    this.stage.watchers.hp.visible = false;
    this.costume = "costume1";
  }

  *whenIReceiveJaneBattle() {
    yield* this.wait(0.5);
    this.stage.watchers.hp.visible = true;
    this.stage.vars.hp = 100;
    this.broadcast("Jacob");
  }

  *whenIReceiveSentBack() {
    this.goto(0, 0);
  }

  *whenIReceiveOwsies() {
    this.effects.clear();
    this.effects.ghost += 100;
    for (let i = 0; i < 20; i++) {
      this.effects.ghost -= 5;
      yield;
    }
    this.effects.clear();
  }

  *whenIReceiveUrTurn() {
    this.visible = false;
  }

  *whenIReceiveEnemyTurn() {
    yield* this.wait(0.5);
    this.stage.watchers.hp.visible = true;
    this.vars.y = 0;
    this.goto(0, 0);
    this.moveAhead();
    this.visible = true;
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
  }

  *whenIReceiveDoorFight() {
    this.visible = true;
    yield* this.wait(0.5);
    this.broadcast("Ur turn");
  }

  *whenIReceiveDoorDeath() {
    this.visible = false;
  }

  *whenIReceivePurple() {
    this.costume = "costume2";
    this.goto(0, 0);
    this.vars.purple = 1;
    this.stage.vars.line = 0;
    while (true) {
      if (this.toNumber(this.vars.purple) === 1) {
        this.costume = "costume2";
        this.y = this.toNumber(this.stage.vars.line);
      }
      yield;
    }
  }

  *whenIReceiveUp() {
    if (this.toNumber(this.stage.vars.line) === 0) {
      this.stage.vars.line = 50;
    }
  }

  *whenIReceiveUp2() {
    if (this.toNumber(this.stage.vars.line) === -50) {
      this.stage.vars.line = 0;
    }
  }

  *whenIReceiveDown() {
    if (this.toNumber(this.stage.vars.line) === 0) {
      this.stage.vars.line = -50;
    }
  }

  *whenIReceiveDown2() {
    if (this.toNumber(this.stage.vars.line) === 50) {
      this.stage.vars.line = 0;
    }
  }

  *whenIReceiveAmberTired() {
    for (let i = 0; i < 800; i++) {
      this.visible = false;
      yield;
    }
  }

  *whenIReceiveAmberFight() {
    this.costume = "costume1";
    this.vars.purple = 0;
  }

  *whenIReceiveThrasherBattle() {
    this.costume = "costume1";
  }

  *whenIReceiveAmberTired2() {
    for (let i = 0; i < 8; i++) {
      this.vars.purple = 0;
      yield;
    }
  }

  *whenIReceiveFoeEnd() {
    this.visible = false;
  }

  *whenIReceiveFoeEnd2() {
    for (let i = 0; i < 10; i++) {
      this.visible = false;
      yield;
    }
  }

  *whenIReceiveStartWithSaveTho() {
    this.broadcast("Jacob");
  }

  *whenIReceiveJacob() {
    while (true) {
      if (this.touching(this.sprites["Sprite18"].andClones())) {
        if (this.toNumber(this.stage.vars.battle) === 1) {
          this.stage.vars.hp -= 3;
          yield* this.startSound("undertale-damage-taken");
          this.move(-20);
        }
        if (!(this.toNumber(this.stage.vars.battle) === 1)) {
          if (this.compare(83, this.x) < 0) {
            this.x = 83;
          }
          if (this.compare(this.x, -82) < 0) {
            this.x = -82;
          }
          if (this.compare(83, this.y) < 0) {
            this.y = 83;
          }
          if (this.compare(this.y, -85) < 0) {
            this.y = -85;
          }
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.blue = 0;
  }

  *whenIReceiveUp3() {
    if (this.compare(this.y, -80) < 0) {
      for (let i = 0; i < 6; i++) {
        this.vars.y += 18;
        yield;
      }
    }
  }

  *whenIReceiveBlue() {
    this.goto(0, 0);
    this.costume = "costume4";
    this.stage.vars.blue = 1;
    while (true) {
      if (this.toNumber(this.stage.vars.blue) === 1) {
        if (this.compare(this.vars.y, -80) < 0) {
          this.vars.y = -80;
        }
        this.vars.y -= 3;
        this.y = this.toNumber(this.vars.y);
      }
      yield;
    }
  }

  *whenIReceiveRedAgain3() {
    this.costume = "costume1";
    this.stage.vars.blue = 0;
  }

  *whenIReceiveWarningToSpike() {
    this.goto(0, 0);
    this.costume = "costume4";
    this.stage.vars.blue = 1;
  }

  *whenIReceiveLeftRightLedtRidgh() {
    this.goto(0, 0);
    this.costume = "costume4";
    this.stage.vars.blue = 1;
  }

  *whenIReceiveUrTurn2() {
    this.costume = "costume1";
    this.stage.vars.blue = 0;
  }

  *whenIReceiveJimmyDies() {
    for (let i = 0; i < 10; i++) {
      this.stage.vars.blue = 0;
      this.visible = false;
      yield;
    }
  }

  *whenIReceiveEnemyTurn2() {
    while (true) {
      if (this.toNumber(this.stage.vars.battle) === 666) {
        this.costume = "costume3";
        this.goto(0, -50);
      }
      yield;
    }
  }

  *whenIReceiveSnakeDead() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
    this.deleteThisClone();
  }

  *whenIReceiveStartChapter2() {
    this.broadcast("Jacob");
  }

  *whenIReceiveHalfAndHalf() {
    for (let i = 0; i < 20; i++) {
      this.goto(-50, 0);
      yield;
    }
  }

  *whenIReceiveShadowZorkDead() {
    for (let i = 0; i < 10; i++) {
      this.visible = false;
      yield;
    }
  }

  *whenIReceiveShadowJoneDead() {
    for (let i = 0; i < 10; i++) {
      this.visible = false;
      yield;
    }
  }

  *whenIReceiveShadowDead() {
    for (let i = 0; i < 10; i++) {
      this.visible = false;
      yield;
    }
  }

  *whenIReceiveVariousGuysDead() {
    for (let i = 0; i < 10; i++) {
      this.visible = false;
      yield;
    }
  }

  *whenIReceiveDoordevilDiesLmao() {
    for (let i = 0; i < 10; i++) {
      this.visible = false;
      yield;
    }
  }

  *whenIReceiveGaryDead() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
    this.deleteThisClone();
  }

  *whenIReceiveStartChapter3() {
    this.broadcast("Jacob");
  }

  *whenIReceiveAbattoeend() {
    for (let i = 0; i < 10; i++) {
      this.visible = false;
      yield;
    }
  }

  *whenIReceiveJacob2() {
    this.moveAhead();
    this.goto(0, 0);
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
    while (true) {
      if (this.toNumber(this.stage.vars.inBattle) === 1) {
        if (this.toNumber(this.stage.vars.arrowKeys) === 1) {
          if (this.keyPressed("right arrow")) {
            this.direction = 90;
            this.stage.vars.joystickMoving = 1;
            if (this.toNumber(this.stage.vars.bigRoom) === 1) {
              this.move(1);
            } else {
              this.move(3);
            }
          }
          if (this.keyPressed("left arrow")) {
            this.direction = -90;
            this.stage.vars.joystickMoving = 1;
            if (this.toNumber(this.stage.vars.bigRoom) === 1) {
              this.move(1);
            } else {
              this.move(3);
            }
          }
          if (this.keyPressed("up arrow")) {
            this.direction = 0;
            this.stage.vars.joystickMoving = 1;
            if (this.toNumber(this.stage.vars.bigRoom) === 1) {
              this.move(1);
            } else {
              this.move(3);
            }
          }
          if (this.keyPressed("down arrow")) {
            this.stage.vars.joystickMoving = 1;
            this.direction = 180;
            if (this.toNumber(this.stage.vars.bigRoom) === 1) {
              this.move(1);
            } else {
              this.move(3);
            }
          }
        } else {
          if (this.toNumber(this.stage.vars.joystickMoving) === 1) {
            this.direction = this.sprites["Joystick"].direction;
            this.move(4);
          }
        }
      }
      yield;
    }
  }

  *whenIReceiveJaneBattle2() {
    yield* this.wait(0.6);
    this.broadcast("Jacob");
    this.visible = true;
  }
}
