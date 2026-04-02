import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Money extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./money/costumes/costume1.png", {
        x: 7,
        y: 14,
      }),
      new Costume("costume2", "./money/costumes/costume2.png", {
        x: 7,
        y: 14,
      }),
      new Costume("costume3", "./money/costumes/costume3.png", {
        x: 7,
        y: 14,
      }),
    ];

    this.sounds = [
      new Sound("pop", "./money/sounds/pop.wav"),
      new Sound(
        "undertale-attack-slash-green-screen",
        "./money/sounds/undertale-attack-slash-green-screen.wav"
      ),
      new Sound("Bonk", "./money/sounds/Bonk.wav"),
      new Sound("Bonk2", "./money/sounds/Bonk2.wav"),
      new Sound("pop2", "./money/sounds/pop2.wav"),
      new Sound(
        "undertale-attack-slash-green-screen2",
        "./money/sounds/undertale-attack-slash-green-screen2.wav"
      ),
      new Sound("C2 Bass", "./money/sounds/C2 Bass.wav"),
      new Sound(
        "undertale-attack-slash-green-screen3",
        "./money/sounds/undertale-attack-slash-green-screen3.wav"
      ),
      new Sound("pan", "./money/sounds/pan.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "You attack" },
        this.whenIReceiveYouAttack
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "You attack" },
        this.whenIReceiveYouAttack2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Zork attack" },
        this.whenIReceiveZorkAttack
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Zork attack" },
        this.whenIReceiveZorkAttack2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Done your attackkkk" },
        this.whenIReceiveDoneYourAttackkkk
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jone defeat" },
        this.whenIReceiveJoneDefeat
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jone attack" },
        this.whenIReceiveJoneAttack
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jone attack" },
        this.whenIReceiveJoneAttack2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Door death" },
        this.whenIReceiveDoorDeath
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jimmy dies" },
        this.whenIReceiveJimmyDies
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Snake dead" },
        this.whenIReceiveSnakeDead
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Enemy turn" },
        this.whenIReceiveEnemyTurn
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
        { name: "Smacks" },
        this.whenIReceiveSmacks
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Goopley attack" },
        this.whenIReceiveGoopleyAttack
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Goopley attack" },
        this.whenIReceiveGoopleyAttack2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Various guys dead" },
        this.whenIReceiveVariousGuysDead
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Boopley dead" },
        this.whenIReceiveBoopleyDead
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Gary dead" },
        this.whenIReceiveGaryDead
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ã¢â‚¬Â¦Ã¢â‚¬Â¦abattoeend" },
        this.whenIReceiveAbattoeend
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Suck HP" },
        this.whenIReceiveSuckHp
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
    ];

    this.vars.attackPower = 6;

    this.watchers.attackPower = new Watcher({
      label: "Sprite32: Attack power",
      style: "large",
      visible: false,
      value: () => this.vars.attackPower,
      x: 573,
      y: -37,
    });
  }

  *whenGreenFlagClicked() {
    this.stage.vars.enemyHp = 0;
    this.visible = false;
  }

  *whenIReceiveYouAttack() {
    this.vars.attackPower = 0;
    this.effects.clear();
    this.visible = true;
    this.size = 200;
    this.goto(-75, 20);
    if (this.toNumber(this.stage.vars.battle) === 1000) {
      this.goto(-75, 0);
    }
    this.createClone();
    this.costume = "costume1";
    this.goto(50, 20);
    if (this.toNumber(this.stage.vars.battle) === 1000) {
      this.goto(50, 0);
    }
    for (let i = 0; i < 25; i++) {
      this.x -= 5;
      this.vars.attackPower++;
      if (this.toNumber(this.stage.vars.spindoor) === 1) {
        this.vars.attackPower += 4;
      }
      yield;
    }
    for (let i = 0; i < 10; i++) {
      this.x -= 5;
      this.vars.attackPower -= 3;
      if (this.toNumber(this.stage.vars.spindoor) === 1) {
        this.vars.attackPower -= 13;
      }
      this.effects.ghost += 10;
      if (this.compare(this.vars.attackPower, 0) < 0) {
        this.vars.attackPower = 0;
      }
      yield;
    }
  }

  *startAsClone() {
    this.costume = "costume2";
  }

  *whenIReceiveYouAttack2() {
    yield* this.wait(0.1);
    while (!!this.mouse.down) {
      yield;
    }
    while (!this.mouse.down) {
      yield;
    }
    /* TODO: Implement stop other scripts in sprite */ null;
    this.vars.attackPower += this.toNumber(this.stage.vars.attackssss) * 4;
    this.stage.vars.enemyHp += this.toNumber(
      "-" + this.toString(this.vars.attackPower)
    );
    if (this.toNumber(this.stage.vars.battle) === 666) {
      this.stage.vars.snakeHp += this.toNumber(
        "-" + this.toString(this.vars.attackPower)
      );
    }
    this.vars.attackPower = 1;
    if (this.toNumber(this.vars.attackPower) === 0) {
      this.sprites["Sprite33"].createClone();
    }
    if (this.toNumber(this.stage.vars.spindoor) === 1) {
      yield* this.startSound("Bonk2");
    } else {
      if (this.toNumber(this.stage.vars.spindoor) === 2) {
        yield* this.startSound("Bonk2");
        this.broadcast("Smacks");
        yield* this.wait(0.2);
        /* TODO: Implement stop other scripts in sprite */ null;
      } else {
        yield* this.startSound("Bonk");
      }
    }
    this.broadcast("Enemy hurt");
    if (this.x === -75) {
      this.costume = "costume3";
      this.stage.vars.dangerPoint += 10;
    }
    for (let i = 0; i < 5; i++) {
      yield* this.wait(0.1);
      this.effects.brightness = -100;
      yield* this.wait(0.1);
      this.effects.brightness = 0;
      yield;
    }
    if (this.toNumber(this.stage.vars.spindoor) === 2) {
      yield* this.wait(0.4);
    }
    this.watchers.attackPower.visible = false;
    if (this.toNumber(this.stage.vars.battle) === 1000) {
      this.broadcast("Done your attackkkk");
      this.broadcast("Enemy turn");
    } else {
      this.broadcast("Done your attackkkk");
    }
  }

  *whenIReceiveZorkAttack() {
    yield* this.wait(0.1);
    while (!!this.mouse.down) {
      yield;
    }
    while (!this.mouse.down) {
      yield;
    }
    /* TODO: Implement stop other scripts in sprite */ null;
    if (this.toNumber(this.vars.attackPower) === 0) {
      this.sprites["Sprite33"].createClone();
    }
    if (this.toNumber(this.stage.vars.thornDagger) === 1) {
      yield* this.startSound("undertale-attack-slash-green-screen2");
      if (!(this.toNumber(this.vars.attackPower) === 0)) {
        this.vars.attackPower += 30;
      }
    } else {
      yield* this.startSound("undertale-attack-slash-green-screen");
    }
    this.vars.attackPower += this.toNumber(this.stage.vars.attackssss) * 4;
    this.stage.vars.enemyHp += this.toNumber(
      "-" + this.toString(this.vars.attackPower)
    );
    if (this.toNumber(this.stage.vars.battle) === 666) {
      this.stage.vars.snakeHp += this.toNumber(
        "-" + this.toString(this.vars.attackPower)
      );
    }
    if (!(this.toNumber(this.vars.attackPower) === 0)) {
      if (this.toNumber(this.stage.vars.vampireKnife) === 1) {
        yield* this.startSound("undertale-attack-slash-green-screen3");
        this.broadcast("Suck HP");
      }
    }
    this.broadcast("Enemy hurt");
    if (this.x === -75) {
      this.costume = "costume3";
      this.stage.vars.dangerPoint += this.toNumber(this.vars.attackPower);
    }
    for (let i = 0; i < 5; i++) {
      yield* this.wait(0.1);
      this.effects.brightness = -100;
      yield* this.wait(0.1);
      this.effects.brightness = 0;
      yield;
    }
    this.broadcast("Done your attackkkk");
  }

  *whenIReceiveZorkAttack2() {
    this.vars.attackPower = 0;
    this.effects.clear();
    this.visible = true;
    this.size = 200;
    this.goto(-75, -50);
    this.createClone();
    this.costume = "costume1";
    this.goto(50, -50);
    for (let i = 0; i < 25; i++) {
      this.x -= 5;
      this.vars.attackPower++;
      yield;
    }
    for (let i = 0; i < 10; i++) {
      this.x -= 5;
      this.vars.attackPower -= 3;
      this.effects.ghost += 10;
      if (this.compare(this.vars.attackPower, 0) < 0) {
        this.vars.attackPower = 0;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.stage.watchers.enemyHp.visible = false;
  }

  *whenIReceiveDoneYourAttackkkk() {
    this.visible = false;
    this.deleteThisClone();
  }

  *whenIReceiveJoneDefeat() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
    this.deleteThisClone();
  }

  *whenIReceiveJoneAttack() {
    yield* this.wait(0.1);
    while (!!this.mouse.down) {
      yield;
    }
    while (!this.mouse.down) {
      yield;
    }
    if (this.toNumber(this.stage.vars.burntPan) === 1) {
      this.stage.vars.burntSlaps++;
    }
    /* TODO: Implement stop other scripts in sprite */ null;
    if (this.toNumber(this.stage.vars.crackleWhip) === 1) {
      if (!(this.toNumber(this.vars.attackPower) === 0)) {
        this.vars.attackPower += 40;
      }
    }
    this.vars.attackPower += this.toNumber(this.stage.vars.attackssss) * 4;
    this.stage.vars.enemyHp += this.toNumber(
      "-" + this.toString(this.vars.attackPower)
    );
    if (this.toNumber(this.stage.vars.battle) === 666) {
      this.stage.vars.snakeHp += this.toNumber(
        "-" + this.toString(this.vars.attackPower)
      );
    }
    if (this.toNumber(this.vars.attackPower) === 0) {
      this.sprites["Sprite33"].createClone();
    }
    if (this.toNumber(this.stage.vars.burntPan) === 1) {
      yield* this.startSound("pan");
    } else {
      if (this.toNumber(this.stage.vars.crackleWhip) === 1) {
        yield* this.startSound("pop2");
      } else {
        yield* this.startSound("pop");
      }
    }
    this.broadcast("Enemy hurt");
    if (this.x === -75) {
      this.costume = "costume3";
      this.stage.vars.dangerPoint += 10;
    }
    for (let i = 0; i < 5; i++) {
      yield* this.wait(0.1);
      this.effects.brightness = -100;
      yield* this.wait(0.1);
      this.effects.brightness = 0;
      yield;
    }
    if (this.toNumber(this.stage.vars.burntPan) === 1) {
      this.broadcast("Done your attackkkk");
      if (this.toNumber(this.stage.vars.burntSlaps) === 4) {
        this.broadcast("Done your attackkkk");
        this.broadcast("Enemy turn");
        this.stage.vars.burntSlaps = 0;
      } else {
        this.broadcast("Jone attack");
      }
    } else {
      this.broadcast("Done your attackkkk");
    }
  }

  *whenIReceiveJoneAttack2() {
    this.vars.attackPower = 0;
    this.effects.clear();
    this.visible = true;
    this.size = 200;
    this.goto(-75, 0);
    this.createClone();
    this.costume = "costume1";
    this.goto(50, 0);
    for (let i = 0; i < 25; i++) {
      this.x -= 5;
      this.vars.attackPower += 2;
      yield;
    }
    for (let i = 0; i < 10; i++) {
      this.x -= 5;
      this.vars.attackPower -= 3;
      this.effects.ghost += 10;
      if (this.compare(this.vars.attackPower, 0) < 0) {
        this.vars.attackPower = 0;
      }
      yield;
    }
  }

  *whenIReceiveDoorDeath() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
    this.deleteThisClone();
  }

  *whenIReceiveJimmyDies() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
    this.stage.watchers._.visible = true;
    this.stage.watchers.hp.visible = false;
    this.stage.watchers.grilledCheese.visible = false;
    this.stage.watchers.enemyHp.visible = false;
    this.deleteThisClone();
  }

  *whenIReceiveSnakeDead() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
    this.deleteThisClone();
  }

  *whenIReceiveEnemyTurn() {
    this.stage.watchers.enemyHp.visible = false;
  }

  *whenIReceiveShadowZorkDead() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
    this.deleteThisClone();
  }

  *whenIReceiveShadowJoneDead() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
    this.deleteThisClone();
  }

  *whenIReceiveShadowDead() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
    this.deleteThisClone();
  }

  *whenIReceiveSmacks() {
    while (true) {
      while (!this.mouse.down) {
        yield;
      }
      this.vars.attackPower += 5;
      this.stage.vars.enemyHp += this.toNumber(
        "-" + this.toString(this.vars.attackPower)
      );
      this.broadcast("Enemy hurt");
      if (this.toNumber(this.stage.vars.battle) === 666) {
        this.stage.vars.snakeHp += this.toNumber(
          "-" + this.toString(this.vars.attackPower)
        );
      }
      while (!!this.mouse.down) {
        yield;
      }
      yield* this.wait(0.1);
      yield;
    }
  }

  *whenIReceiveGoopleyAttack() {
    this.vars.attackPower = 0;
    this.effects.clear();
    this.visible = true;
    this.size = 200;
    this.goto(-150, 60);
    this.createClone();
    this.costume = "costume1";
    this.goto(-50, 60);
    if (this.toNumber(this.stage.vars.moneymaker) === 1) {
      for (let i = 0; i < 10; i++) {
        this.x -= 10;
        yield;
      }
      for (let i = 0; i < 5; i++) {
        this.x -= 10;
        this.vars.attackPower--;
        this.effects.ghost += 25;
        if (this.compare(this.vars.attackPower, 0) < 0) {
          this.vars.attackPower = 0;
        }
        yield;
      }
    } else {
      for (let i = 0; i < 5; i++) {
        for (let i = 0; i < 5; i++) {
          this.x -= 5;
          yield;
        }
        this.vars.attackPower += 2;
        yield;
      }
      for (let i = 0; i < 10; i++) {
        this.x -= 5;
        this.vars.attackPower--;
        this.effects.ghost += 10;
        if (this.compare(this.vars.attackPower, 0) < 0) {
          this.vars.attackPower = 0;
        }
        yield;
      }
    }
  }

  *whenIReceiveGoopleyAttack2() {
    yield* this.wait(0.1);
    while (!!this.mouse.down) {
      yield;
    }
    while (!this.mouse.down) {
      yield;
    }
    /* TODO: Implement stop other scripts in sprite */ null;
    if (this.toNumber(this.vars.attackPower) === 0) {
      this.sprites["Sprite33"].createClone();
    }
    this.broadcast("Enemy hurt");
    yield* this.startSound("C2 Bass");
    if (this.x === -150) {
      if (this.toNumber(this.stage.vars.moneymaker) === 1) {
        this.costume = "costume3";
        this.vars.attackPower += 500;
      }
    }
    this.stage.vars.enemyHp += this.toNumber(
      "-" + this.toString(this.vars.attackPower)
    );
    for (let i = 0; i < 5; i++) {
      yield* this.wait(0.1);
      this.effects.brightness = -100;
      yield* this.wait(0.1);
      this.effects.brightness = 0;
      yield;
    }
    this.watchers.attackPower.visible = false;
    this.broadcast("Done your attackkkk");
  }

  *whenIReceiveVariousGuysDead() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
    this.deleteThisClone();
  }

  *whenIReceiveBoopleyDead() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
    this.deleteThisClone();
  }

  *whenIReceiveGaryDead() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
    this.deleteThisClone();
  }

  *whenIReceiveAbattoeend() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
    this.deleteThisClone();
  }

  *whenIReceiveSuckHp() {
    yield* this.wait(0.5);
    for (
      let i = 0;
      i <
      Math.floor(this.toNumber(this.vars.attackPower) / this.random(5.5, 8));
      i++
    ) {
      this.stage.vars.hp++;
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.stage.vars.burntSlaps = 0;
  }
}
