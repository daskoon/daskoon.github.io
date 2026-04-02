import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite16 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite16/costumes/costume1.png", {
        x: 24,
        y: 60,
      }),
      new Costume("costume4", "./Sprite16/costumes/costume4.png", {
        x: 24,
        y: 60,
      }),
      new Costume("costume3", "./Sprite16/costumes/costume3.png", {
        x: 2,
        y: -37,
      }),
      new Costume("costume2", "./Sprite16/costumes/costume2.png", {
        x: 33,
        y: 60,
      }),
      new Costume("costume5", "./Sprite16/costumes/costume5.png", {
        x: 32,
        y: 70,
      }),
      new Costume("costume6", "./Sprite16/costumes/costume6.png", {
        x: 74,
        y: 60,
      }),
      new Costume("costume7", "./Sprite16/costumes/costume7.png", {
        x: 72,
        y: 60,
      }),
      new Costume("costume8", "./Sprite16/costumes/costume8.png", {
        x: 27,
        y: 26,
      }),
      new Costume("costume9", "./Sprite16/costumes/costume9.png", {
        x: 25,
        y: 60,
      }),
      new Costume("costume10", "./Sprite16/costumes/costume10.png", {
        x: 25,
        y: 60,
      }),
      new Costume("costume11", "./Sprite16/costumes/costume11.png", {
        x: 33,
        y: 60,
      }),
      new Costume("costume12", "./Sprite16/costumes/costume12.png", {
        x: 33,
        y: 70,
      }),
      new Costume("costume14", "./Sprite16/costumes/costume14.png", {
        x: 33,
        y: 70,
      }),
      new Costume("costume13", "./Sprite16/costumes/costume13.png", {
        x: 33,
        y: 60,
      }),
      new Costume("costume15", "./Sprite16/costumes/costume15.png", {
        x: 24,
        y: 60,
      }),
      new Costume("costume16", "./Sprite16/costumes/costume16.png", {
        x: 33,
        y: 60,
      }),
      new Costume("costume17", "./Sprite16/costumes/costume17.png", {
        x: 33,
        y: 60,
      }),
    ];

    this.sounds = [
      new Sound("pop", "./Sprite16/sounds/pop.wav"),
      new Sound("Jone", "./Sprite16/sounds/Jone.wav"),
      new Sound("crack_the_whip", "./Sprite16/sounds/crack_the_whip.mp3"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Jone" }, this.whenIReceiveJone),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jane battle" },
        this.whenIReceiveJaneBattle
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Enemy turn" },
        this.whenIReceiveEnemyTurn
      ),
      new Trigger(Trigger.BROADCAST, { name: "Gun" }, this.whenIReceiveGun),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jone defeat" },
        this.whenIReceiveJoneDefeat
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jone party" },
        this.whenIReceiveJoneParty
      ),
      new Trigger(Trigger.BROADCAST, { name: "Left" }, this.whenIReceiveLeft),
      new Trigger(Trigger.BROADCAST, { name: "Right" }, this.whenIReceiveRight),
      new Trigger(Trigger.BROADCAST, { name: "Up" }, this.whenIReceiveUp),
      new Trigger(Trigger.BROADCAST, { name: "Down" }, this.whenIReceiveDown),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jone open door" },
        this.whenIReceiveJoneOpenDoor
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Door fight" },
        this.whenIReceiveDoorFight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Anemone" },
        this.whenIReceiveAnemone
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Amber fight" },
        this.whenIReceiveAmberFight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jimmy cutscene" },
        this.whenIReceiveJimmyCutscene
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jimothy" },
        this.whenIReceiveJimothy
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Lights out" },
        this.whenIReceiveLightsOut
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Lights on" },
        this.whenIReceiveLightsOn
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Thrasher battle" },
        this.whenIReceiveThrasherBattle
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room15" },
        this.whenIReceiveRoom15
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Foe end" },
        this.whenIReceiveFoeEnd
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jimmy petty" },
        this.whenIReceiveJimmyPetty
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start with save tho" },
        this.whenIReceiveStartWithSaveTho
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jimmy fight" },
        this.whenIReceiveJimmyFight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jimmy dies" },
        this.whenIReceiveJimmyDies
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Final room." },
        this.whenIReceiveFinalRoom
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Slither in (get it?)" },
        this.whenIReceiveSlitherInGetIt
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Transform" },
        this.whenIReceiveTransform
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Flash white :3" },
        this.whenIReceiveFlashWhite3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start chapter 2" },
        this.whenIReceiveStartChapter2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Mawege" },
        this.whenIReceiveMawege
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ride across" },
        this.whenIReceiveRideAcross
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ride on back" },
        this.whenIReceiveRideOnBack
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Shadow zork fight" },
        this.whenIReceiveShadowZorkFight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Shadow jone fight" },
        this.whenIReceiveShadowJoneFight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jone is so sigma" },
        this.whenIReceiveJoneIsSoSigma
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Shadow fight" },
        this.whenIReceiveShadowFight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Shadow jone dead" },
        this.whenIReceiveShadowJoneDead
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Various battle" },
        this.whenIReceiveVariousBattle
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Doordevil shadow fight" },
        this.whenIReceiveDoordevilShadowFight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Doordevil dies lmao" },
        this.whenIReceiveDoordevilDiesLmao
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Boopley fight" },
        this.whenIReceiveBoopleyFight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Gary fight" },
        this.whenIReceiveGaryFight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Gary dead" },
        this.whenIReceiveGaryDead
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Final Room2" },
        this.whenIReceiveFinalRoom2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start chapter 3" },
        this.whenIReceiveStartChapter3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Hand hop down" },
        this.whenIReceiveHandHopDown
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Plant battle" },
        this.whenIReceivePlantBattle
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ã¢â‚¬Â¦Ã¢â‚¬Â¦abattoeend" },
        this.whenIReceiveAbattoeend
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "John pixel fight" },
        this.whenIReceiveJohnPixelFight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Carpet fight" },
        this.whenIReceiveCarpetFight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "sans fight" },
        this.whenIReceiveSansFight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "...abattlestart" },
        this.whenIReceiveAbattlestart
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "silly billy speaks" },
        this.whenIReceiveSillyBillySpeaks
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "...abattlestart" },
        this.whenIReceiveAbattlestart2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room666" },
        this.whenIReceiveRoom666
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "final final final boss speech" },
        this.whenIReceiveFinalFinalFinalBossSpeech
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jone jot grabbed" },
        this.whenIReceiveJoneJotGrabbed
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jone 'n zork" },
        this.whenIReceiveJoneNZork
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "THE REAL FINAL ROOM" },
        this.whenIReceiveTheRealFinalRoom
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "tower disses a pear" },
        this.whenIReceiveTowerDissesAPear
      ),
    ];

    this.audioEffects.volume = 0;

    this.vars.m = 0;
    this.vars.atttatttaadkkccc = 2;
  }

  *whenGreenFlagClicked() {
    this.audioEffects.volume = 0;
    this.visible = false;
  }

  *whenIReceiveJone() {
    this.visible = true;
    this.costume = "costume4";
    this.goto(120, 185);
    yield* this.glide(0.2, 120, -15);
    this.audioEffects.volume = 100;
    yield* this.startSound("pop");
    this.goto(120, -15);
    for (let i = 0; i < 3; i++) {
      this.createClone();
      this.createClone();
      this.createClone();
      this.createClone();
      this.createClone();
      this.createClone();
      this.createClone();
      yield;
    }
    yield* this.wait(2);
    this.broadcast("My name is Jane");
    this.audioEffects.volume = 100;
    while (true) {
      yield* this.playSoundUntilDone("Jone");
      yield;
    }
  }

  *startAsClone() {
    this.costume = "costume3";
    this.effects.ghost = 0;
    this.vars.m = this.random(2, 5);
    if (this.random(1, 2) === 1) {
      for (let i = 0; i < 20; i++) {
        this.x += 6;
        this.y += this.toNumber(this.vars.m);
        this.effects.ghost += 4;
        yield;
      }
    } else {
      for (let i = 0; i < 20; i++) {
        this.x -= 6;
        this.y += this.toNumber(this.vars.m);
        this.effects.ghost += 4;
        yield;
      }
    }
    this.deleteThisClone();
  }

  *whenIReceiveJaneBattle() {
    this.stage.vars.battle = 1;
    /* TODO: Implement stop other scripts in sprite */ null;
    this.costume = "costume4";
    yield* this.glide(0.2, 135, -15);
    for (let i = 0; i < 10; i++) {
      this.moveAhead();
      yield;
    }
    yield* this.wait(1);
    yield* this.startSound("crack_the_whip");
    this.costume = "costume5";
    yield* this.wait(0.2);
    this.costume = "costume6";
    yield* this.wait(0.1);
    this.broadcast("Eletric");
    yield* this.wait(0.5);
    this.costume = "costume4";
    yield* this.wait(1.5);
    this.costume = "costume7";
    yield* this.wait(0.5);
    for (let i = 0; i < 3; i++) {
      this.sprites["Bullet"].createClone();
      yield* this.wait(0.4);
      yield;
    }
    yield* this.wait(0.5);
    for (let i = 0; i < 10; i++) {
      yield* this.wait(0.2);
      this.sprites["Bullet"].createClone();
      yield;
    }
    yield* this.wait(0.5);
    this.costume = "costume4";
    this.broadcast("Ur turn");
  }

  *whenIReceiveEnemyTurn() {
    yield* this.wait(1);
    if (this.toNumber(this.stage.vars.battle) === 1) {
      this.vars.atttatttaadkkccc = this.random(1, 3);
      if (this.random(1, 4) === 1) {
        yield* this.startSound("crack_the_whip");
        this.costume = "costume5";
        yield* this.wait(0.2);
        this.costume = "costume6";
        this.sprites["Sprite34"].createClone();
        yield* this.wait(0.2);
        this.costume = "costume4";
      } else {
        this.vars.atttatttaadkkccc = this.random(2, 4);
      }
      yield* this.wait(1);
      if (this.toNumber(this.vars.atttatttaadkkccc) === 1) {
        this.broadcast("Gun");
      }
      if (this.toNumber(this.vars.atttatttaadkkccc) === 2) {
        this.broadcast("Tumble weeds");
      }
      if (this.toNumber(this.vars.atttatttaadkkccc) === 3) {
        this.broadcast("Snake attack!");
      }
      if (this.toNumber(this.vars.atttatttaadkkccc) === 4) {
        this.broadcast("Other snake attack");
      }
    }
  }

  *whenIReceiveGun() {
    this.costume = "costume7";
    yield* this.wait(0.5);
    for (let i = 0; i < 3; i++) {
      this.sprites["Bullet"].createClone();
      yield* this.wait(0.5);
      yield;
    }
    yield* this.wait(0.5);
    for (let i = 0; i < 10; i++) {
      yield* this.wait(0.5);
      this.sprites["Bullet"].createClone();
      yield;
    }
    yield* this.wait(0.5);
    this.costume = "costume4";
    this.broadcast("Ur turn");
  }

  *whenIReceiveJoneDefeat() {
    this.stage.vars.inBattle = 0;
    this.stage.vars.battle = 0;
    this.stage.vars.speed = 0;
    this.stage.watchers.enemyHp.visible = false;
    this.stage.watchers.hp.visible = false;
    this.costume = "costume8";
    yield* this.startSound("pop");
    for (let i = 0; i < 10; i++) {
      this.goto(135, -15);
      this.x += this.random(-3, 3);
      yield;
    }
    this.goto(135, -15);
    yield* this.wait(0.3);
    this.broadcast("Jone darn");
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Jone party speach");
  }

  *whenIReceiveJoneParty() {
    this.broadcast("Jone is so sigma");
  }

  *whenIReceiveLeft() {
    if (this.toNumber(this.stage.vars.jone) === 1) {
      if (this.toNumber(this.stage.vars.inBattle) === 0) {
        this.costume = "costume1";
      }
    }
  }

  *whenIReceiveRight() {
    if (this.toNumber(this.stage.vars.jone) === 1) {
      if (this.toNumber(this.stage.vars.inBattle) === 0) {
        this.costume = "costume2";
      }
    }
  }

  *whenIReceiveUp() {
    if (this.toNumber(this.stage.vars.jone) === 1) {
      if (this.toNumber(this.stage.vars.inBattle) === 0) {
        this.costume = "costume10";
      }
    }
  }

  *whenIReceiveDown() {
    if (this.toNumber(this.stage.vars.jone) === 1) {
      if (this.toNumber(this.stage.vars.inBattle) === 0) {
        this.costume = "costume9";
      }
    }
  }

  *whenIReceiveJoneOpenDoor() {
    this.costume = "costume11";
    yield* this.glide(1, 194, -11);
    yield* this.wait(1);
    this.stage.vars.speed = 4;
    this.costume = "costume2";
  }

  *whenIReceiveDoorFight() {
    this.broadcast("...abattlestart");
  }

  *whenIReceiveAnemone() {
    yield* this.wait(0.5);
    this.costume = "costume13";
    yield* this.glide(0.5, -160, 0);
  }

  *whenIReceiveAmberFight() {
    this.costume = "costume12";
    if (this.toNumber(this.stage.vars.crackleWhip) === 1) {
      this.costume = "costume14";
    }
    yield* this.glide(0.5, -120, -15);
  }

  *whenIReceiveJimmyCutscene() {
    this.costume = "costume2";
    yield* this.glide(1, -20, 0);
  }

  *whenIReceiveJimothy() {
    this.costume = "costume15";
  }

  *whenIReceiveLightsOut() {
    this.visible = false;
  }

  *whenIReceiveLightsOn() {
    this.visible = true;
  }

  *whenIReceiveThrasherBattle() {
    this.broadcast("...abattlestart");
  }

  *whenIReceiveRoom15() {
    this.visible = false;
  }

  *whenIReceiveFoeEnd() {
    this.costume = "costume2";
  }

  *whenIReceiveJimmyPetty() {
    this.costume = "costume13";
    yield* this.glide(0.2, -120, -15);
  }

  *whenIReceiveStartWithSaveTho() {
    this.broadcast("Jone is so sigma");
  }

  *whenIReceiveJimmyFight() {
    this.broadcast("...abattlestart");
  }

  *whenIReceiveJimmyDies() {
    this.costume = "costume16";
  }

  *whenIReceiveFinalRoom() {
    this.visible = false;
    yield* this.wait(4.5);
    this.visible = true;
    this.goto(0, -189);
    this.costume = "costume10";
    yield* this.glide(2, 0, -136);
    yield* this.glide(1, -30, -86);
  }

  *whenIReceiveSlitherInGetIt() {
    this.costume = "costume9";
  }

  *whenIReceiveTransform() {
    yield* this.wait(1);
    this.costume = "costume10";
  }

  *whenIReceiveFlashWhite3() {
    this.goto(-60, -135);
  }

  *whenIReceiveStartChapter2() {
    this.broadcast("Jone is so sigma");
  }

  *whenIReceiveMawege() {
    this.goto(-102, -144);
    this.costume = "costume10";
  }

  *whenIReceiveRideAcross() {
    yield* this.glide(0.5, -30, 8);
    yield* this.wait(1);
    yield* this.glide(5, 118, 8);
  }

  *whenIReceiveRideOnBack() {
    yield* this.glide(0.5, 118, 8);
    yield* this.wait(1);
    yield* this.glide(5, -30, 8);
  }

  *whenIReceiveShadowZorkFight() {
    this.broadcast("...abattlestart");
  }

  *whenIReceiveShadowJoneFight() {
    this.broadcast("...abattlestart");
  }

  *whenIReceiveJoneIsSoSigma() {
    this.visible = true;
    this.stage.vars.jone = 1;
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
    this.costume = "costume1";
    while (true) {
      if (this.toNumber(this.stage.vars.speed) === 4) {
        if (this.toNumber(this.stage.vars.inBattle) === 0) {
          this.goto(this.sprites["Player"].x, this.sprites["Player"].y);
          this.direction = this.sprites["Player"].direction;
          if (this.toNumber(this.stage.vars.bigRoom) === 1) {
            this.size = 50;
            this.move(-50);
          } else {
            this.move(-100);
            this.size = 100;
          }
        }
      }
      yield;
    }
  }

  *whenIReceiveShadowFight() {
    this.broadcast("...abattlestart");
  }

  *whenIReceiveShadowJoneDead() {
    this.costume = "costume2";
  }

  *whenIReceiveVariousBattle() {
    this.broadcast("...abattlestart");
  }

  *whenIReceiveDoordevilShadowFight() {
    this.broadcast("...abattlestart");
  }

  *whenIReceiveDoordevilDiesLmao() {
    this.costume = "costume2";
  }

  *whenIReceiveBoopleyFight() {
    this.broadcast("...abattlestart");
  }

  *whenIReceiveGaryFight() {
    this.broadcast("...abattlestart");
  }

  *whenIReceiveGaryDead() {
    this.costume = "costume2";
  }

  *whenIReceiveFinalRoom2() {
    this.visible = false;
    yield* this.wait(5.5);
    this.visible = true;
    this.goto(0, -189);
    this.costume = "costume10";
    yield* this.glide(2, 0, -136);
    yield* this.glide(1, -30, -86);
  }

  *whenIReceiveStartChapter3() {
    this.broadcast("Jone is so sigma");
  }

  *whenIReceiveHandHopDown() {
    this.costume = "costume13";
    yield* this.glide(0.2, -65, 30);
    this.costume = "costume13";
  }

  *whenIReceivePlantBattle() {
    this.broadcast("...abattlestart");
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.nohit = 0;
    this.stage.vars.dangerPoint = 0;
  }

  *whenIReceiveAbattoeend() {
    this.costume = "costume2";
  }

  *whenIReceiveJohnPixelFight() {
    this.broadcast("...abattlestart");
  }

  *whenIReceiveCarpetFight() {
    this.broadcast("...abattlestart");
  }

  *whenIReceiveSansFight() {
    this.broadcast("...abattlestart");
  }

  *whenIReceiveAbattlestart() {
    this.costume = "costume12";
    if (this.toNumber(this.stage.vars.crackleWhip) === 1) {
      this.costume = "costume14";
    }
    if (this.toNumber(this.stage.vars.burntPan) === 1) {
      this.costume = "costume17";
    }
    yield* this.glide(0.5, -120, -15);
  }

  *whenIReceiveSillyBillySpeaks() {
    yield* this.glide(0.3, -120, 0);
  }

  *whenIReceiveAbattlestart2() {
    this.stage.vars.dangerPoint = 0;
  }

  *whenIReceiveRoom666() {
    this.effects.ghost = 100;
  }

  *whenIReceiveFinalFinalFinalBossSpeech() {
    this.costume = "costume2";
    yield* this.glide(0.5, -195, -15);
  }

  *whenIReceiveJoneJotGrabbed() {
    this.visible = false;
  }

  *whenIReceiveJoneNZork() {
    this.visible = true;
    this.goto(-238, 0);
    yield* this.glide(1, -178, 0);
  }

  *whenIReceiveTheRealFinalRoom() {
    this.visible = false;
    yield* this.wait(5.5);
    this.visible = true;
    this.goto(0, -189);
    this.costume = "costume10";
    yield* this.glide(2, 0, -136);
    yield* this.glide(1, -30, -86);
  }

  *whenIReceiveTowerDissesAPear() {
    this.visible = false;
  }
}
