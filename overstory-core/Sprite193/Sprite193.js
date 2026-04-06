import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite193 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.png", {
        x: 334,
        y: 360,
      }),
      new Costume("costume2", "./costumes/costume2.png", {
        x: 334,
        y: 360,
      }),
      new Costume("costume6", "./costumes/costume6.png", {
        x: 334,
        y: 360,
      }),
      new Costume("costume7", "./costumes/costume7.png", {
        x: 317,
        y: 360,
      }),
      new Costume("costume8", "./costumes/costume8.png", {
        x: 334,
        y: 360,
      }),
      new Costume("costume9", "./costumes/costume9.png", {
        x: 334,
        y: 360,
      }),
      new Costume("costume10", "./costumes/costume10.png", {
        x: 288,
        y: 360,
      }),
      new Costume("costume3", "./costumes/costume3.png", {
        x: 334,
        y: 360,
      }),
      new Costume("costume5", "./costumes/costume5.png", {
        x: 334,
        y: 360,
      }),
      new Costume("costume4", "./costumes/costume4.png", {
        x: 421,
        y: 360,
      }),
      new Costume("costume11", "./costumes/costume11.png", {
        x: 393,
        y: 207,
      }),
    ];

    this.sounds = [
      new Sound("Forch UNUSED", "./sounds/Forch UNUSED.wav"),
      new Sound("pop2", "./sounds/pop2.wav"),
      new Sound("Forch", "./sounds/Forch.wav"),
      new Sound(
        "A WONDERFUL CREATION",
        "./sounds/A WONDERFUL CREATION.wav"
      ),
      new Sound("Impact", "./sounds/Impact.wav"),
      new Sound(
        "WONDERFUL CREATION",
        "./sounds/WONDERFUL CREATION.wav"
      ),
      new Sound("Impact2", "./sounds/Impact2.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Hand hop down" },
        this.whenIReceiveHandHopDown
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Grab plant" },
        this.whenIReceiveGrabPlant
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room53" },
        this.whenIReceiveRoom53
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "forch turn" },
        this.whenIReceiveForchTurn
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "hand move to 'get rid of' zork and jone" },
        this.whenIReceiveHandMoveToGetRidOfZorkAndJone
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "1000 FINAL FIGHT NOW" },
        this.whenIReceive1000FinalFightNow
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Enemy turn" },
        this.whenIReceiveEnemyTurn
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "1000 FINAL FIGHT NOW" },
        this.whenIReceive1000FinalFightNow2
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "1000 FINAL FIGHT NOW" },
        this.whenIReceive1000FinalFightNow3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "final final final boss speech" },
        this.whenIReceiveFinalFinalFinalBossSpeech
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "1000 FINAL FIGHT NOW" },
        this.whenIReceive1000FinalFightNow4
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "forch fall to ground" },
        this.whenIReceiveForchFallToGround
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "THE REAL FINAL ROOM" },
        this.whenIReceiveTheRealFinalRoom
      ),
    ];

    this.vars.attaaacccccccccckkkkk = 13;
  }

  *whenGreenFlagClicked() {
    this.size = 100;
    this.visible = false;
  }

  *whenIReceiveHandHopDown() {
    this.costume = "costume1";
    this.visible = true;
    this.goto(148, 208);
    yield* this.glide(0.3, 148, 8);
    yield* this.startSound("Impact");
  }

  *whenIReceiveGrabPlant() {
    this.visible = true;
    this.costume = "costume1";
    this.goto(148, 8);
    yield* this.glide(0.5, 148, 208);
    this.visible = false;
    yield* this.wait(0.5);
    this.costume = "costume3";
    this.visible = true;
    yield* this.glide(1, 148, 8);
    yield* this.wait(0.5);
    this.broadcast("Drop plant");
    this.costume = "costume1";
    yield* this.wait(0.5);
    yield* this.glide(0.5, 148, 208);
    this.visible = false;
    yield* this.wait(0.5);
    this.broadcast("Plant battle");
  }

  *whenIReceiveRoom53() {
    this.costume = "costume4";
    this.visible = true;
    this.goto(68, 40);
  }

  *whenIReceiveForchTurn() {
    yield* this.wait(0.1);
    this.costume = "costume1";
    while (true) {
      this.goto(68, 40);
      this.x += this.random(-2, 2);
      this.y += this.random(-2, 2);
      yield;
    }
  }

  *whenIReceiveHandMoveToGetRidOfZorkAndJone() {
    this.costume = "costume1";
    /* TODO: Implement stop other scripts in sprite */ null;
    yield* this.startSound("pop2");
    this.goto(68, 40);
    yield* this.glide(0.8, -82, 50);
    yield* this.wait(1);
    yield* this.startSound("pop2");
    yield* this.glide(0.8, -82, 20);
    yield* this.wait(1);
    this.broadcast("Jone jot grabbed");
    this.costume = "costume5";
    yield* this.glide(0.8, -82, 215);
    this.visible = false;
    yield* this.wait(1);
    this.costume = "costume1";
    this.visible = true;
    this.goto(148, 208);
    yield* this.glide(0.3, 148, 8);
    yield* this.startSound("Impact");
    yield* this.wait(0.5);
    this.broadcast("shall we get started?");
  }

  *whenIReceive1000FinalFightNow() {
    this.stage.watchers._.visible = false;
    this.stage.watchers.hp.visible = true;
    this.stage.vars.hp = 100;
    this.stage.vars.amuletAvalible = 4;
    this.stage.vars.jone = 0;
    this.stage.vars.speed = 4;
    this.stage.vars.battle = 1000;
    this.stage.vars.inBattle = 1;
    this.stage.vars.enemyHp = 2500;
    this.broadcast("Ur turn");
    this.costume = "costume1";
    yield* this.glide(0.3, 218, 28);
    while (true) {
      yield* this.playSoundUntilDone("WONDERFUL CREATION");
      yield;
    }
  }

  *whenIReceiveEnemyTurn() {
    if (this.toNumber(this.stage.vars.battle) === 1000) {
      yield* this.wait(1);
      this.vars.attaaacccccccccckkkkk = this.random(1, 18);
      if (this.toNumber(this.vars.attaaacccccccccckkkkk) === 1) {
        this.broadcast("toriel hand attacl");
      }
      if (this.toNumber(this.vars.attaaacccccccccckkkkk) === 2) {
        this.broadcast("Jimmy blasters 2");
      }
      if (this.toNumber(this.vars.attaaacccccccccckkkkk) === 3) {
        this.broadcast("Meteor");
        yield* this.wait(0);
        this.broadcast("Meteor");
      }
      if (this.toNumber(this.vars.attaaacccccccccckkkkk) === 4) {
        this.broadcast("5p1k3");
      }
      if (this.toNumber(this.vars.attaaacccccccccckkkkk) === 5) {
        this.broadcast("4@t tings");
      }
      if (this.toNumber(this.vars.attaaacccccccccckkkkk) === 6) {
        this.broadcast("GASTER WING DING!???????");
      }
      if (this.toNumber(this.vars.attaaacccccccccckkkkk) === 7) {
        this.broadcast("GASTER WING DING!???????");
      }
      if (this.toNumber(this.vars.attaaacccccccccckkkkk) === 8) {
        this.broadcast("GASTER WING DING!???????");
      }
      if (this.toNumber(this.vars.attaaacccccccccckkkkk) === 9) {
        this.broadcast("gbungjjl");
      }
      if (this.toNumber(this.vars.attaaacccccccccckkkkk) === 10) {
        for (let i = 0; i < 2; i++) {
          this.broadcast("Carpet bomb");
          yield;
        }
      }
      if (this.toNumber(this.vars.attaaacccccccccckkkkk) === 11) {
        this.broadcast("Cowza2");
      }
      if (this.toNumber(this.vars.attaaacccccccccckkkkk) === 12) {
        this.broadcast("4aaaatsxddss");
      }
      if (this.toNumber(this.vars.attaaacccccccccckkkkk) === 13) {
        this.broadcast("3xtr@ raiiin");
      }
      if (this.toNumber(this.vars.attaaacccccccccckkkkk) === 14) {
        this.broadcast("Nubert");
      }
      if (this.toNumber(this.vars.attaaacccccccccckkkkk) === 15) {
        this.broadcast(
          "Carpet swipe222222222222222222222222222222222222222222222222222222"
        );
      }
      if (this.toNumber(this.vars.attaaacccccccccckkkkk) === 16) {
        this.broadcast(
          "uuuuuuuuuuuuuuuuuuuuuuuuuuuyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyuuuuuuuuuuuuuuuuuuuuuuuuuuuuuyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"
        );
      }
      if (this.toNumber(this.vars.attaaacccccccccckkkkk) === 17) {
        this.broadcast(
          "ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaarrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrppppppppppppppppppppppppppppppppppppppppppppppppppppeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeet"
        );
      }
      if (this.toNumber(this.vars.attaaacccccccccckkkkk) === 18) {
        this.broadcast(
          "loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnngggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg message name lol"
        );
      }
    }
  }

  *whenIReceive1000FinalFightNow2() {
    this.costume = "costume1";
    while (true) {
      yield* this.wait(0.3);
      this.costume = "costume6";
      yield* this.wait(0.3);
      this.costume = "costume7";
      yield* this.wait(0.3);
      this.costume = "costume8";
      yield* this.wait(0.3);
      this.costume = "costume9";
      yield;
    }
  }

  *startAsClone() {
    this.moveBehind();
    for (let i = 0; i < 10; i++) {
      this.x += this.random(8, 20);
      this.effects.ghost += 15;
      this.size += this.random(1, 10);
      yield;
    }
    this.deleteThisClone();
  }

  *whenIReceive1000FinalFightNow3() {
    while (true) {
      this.createClone();
      yield* this.wait(0.05);
      yield;
    }
  }

  *whenIReceiveFinalFinalFinalBossSpeech() {
    while (true) {
      yield* this.playSoundUntilDone("Forch");
      yield;
    }
  }

  *whenIReceive1000FinalFightNow4() {
    while (!(this.compare(this.stage.vars.enemyHp, 1) < 0)) {
      yield;
    }
    this.broadcast("Ã¢â‚¬Â¦Ã¢â‚¬Â¦abattoeend");
    this.broadcast("FINAL FINAL FINAL FINAL BOSS DEFEATEDDDDDDD");
    /* TODO: Implement stop other scripts in sprite */ null;
    while (true) {
      this.goto(218, 28);
      this.costume = this.random(1, 7);
      this.x += this.random(-8, 8);
      this.y += this.random(-8, 8);
      yield* this.wait(0.1);
      yield;
    }
  }

  *whenIReceiveForchFallToGround() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.costume = "costume11";
    this.goto(150, -146);
    yield* this.startSound("Impact2");
    yield* this.wait(3);
    this.broadcast("Jone 'n zork");
  }

  *whenIReceiveTheRealFinalRoom() {
    this.visible = false;
  }
}
