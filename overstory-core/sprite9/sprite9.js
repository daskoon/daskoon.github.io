import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite9 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./sprite9/costumes/costume1.png", {
        x: 30,
        y: 58,
      }),
      new Costume("costume2", "./sprite9/costumes/costume2.png", {
        x: 30,
        y: 58,
      }),
      new Costume("costume3", "./sprite9/costumes/costume3.png", {
        x: 30,
        y: 58,
      }),
      new Costume("costume4", "./sprite9/costumes/costume4.png", {
        x: 30,
        y: 58,
      }),
      new Costume("costume5", "./sprite9/costumes/costume5.png", {
        x: 30,
        y: 58,
      }),
      new Costume("costume6", "./sprite9/costumes/costume6.png", {
        x: 30,
        y: 58,
      }),
      new Costume("costume7", "./sprite9/costumes/costume7.png", {
        x: 15,
        y: 45,
      }),
      new Costume("costume8", "./sprite9/costumes/costume8.png", {
        x: 30,
        y: 58,
      }),
      new Costume("costume9", "./sprite9/costumes/costume9.png", {
        x: 30,
        y: 38,
      }),
      new Costume("costume10", "./sprite9/costumes/costume10.png", {
        x: 30,
        y: 83,
      }),
      new Costume("costume11", "./sprite9/costumes/costume11.png", {
        x: 28,
        y: 58,
      }),
      new Costume("costume12", "./sprite9/costumes/costume12.png", {
        x: 28,
        y: 38,
      }),
      new Costume("costume13", "./sprite9/costumes/costume13.png", {
        x: 31,
        y: 79,
      }),
      new Costume("costume14", "./sprite9/costumes/costume14.png", {
        x: 30,
        y: 58,
      }),
      new Costume("costume15", "./sprite9/costumes/costume15.png", {
        x: 57,
        y: -5,
      }),
      new Costume("costume16", "./sprite9/costumes/costume16.png", {
        x: 30,
        y: 58,
      }),
      new Costume("costume17", "./sprite9/costumes/costume17.png", {
        x: 30,
        y: 58,
      }),
      new Costume("costume18", "./sprite9/costumes/costume18.png", {
        x: 30,
        y: 58,
      }),
      new Costume("costume22", "./sprite9/costumes/costume22.png", {
        x: 51,
        y: 66,
      }),
      new Costume("costume21", "./sprite9/costumes/costume21.png", {
        x: 30,
        y: 58,
      }),
      new Costume("costume20", "./sprite9/costumes/costume20.png", {
        x: 44,
        y: 58,
      }),
      new Costume("costume19", "./sprite9/costumes/costume19.png", {
        x: 30,
        y: 58,
      }),
      new Costume("costume23", "./sprite9/costumes/costume23.png", {
        x: 57,
        y: 16,
      }),
      new Costume("costume24", "./sprite9/costumes/costume24.png", {
        x: 30,
        y: 58,
      }),
    ];

    this.sounds = [
      new Sound("Impact", "./sprite9/sounds/Impact.wav"),
      new Sound("THE DOOR", "./sprite9/sounds/THE DOOR.wav"),
      new Sound("Knock", "./sprite9/sounds/Knock.wav"),
      new Sound("Change", "./sprite9/sounds/Change.wav"),
      new Sound("sans-eye-sounds", "./sprite9/sounds/sans-eye-sounds.wav"),
      new Sound("Impact3", "./sprite9/sounds/Impact3.wav"),
      new Sound("Impact2", "./sprite9/sounds/Impact2.wav"),
      new Sound("THE DOOR2", "./sprite9/sounds/THE DOOR2.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Open door" },
        this.whenIReceiveOpenDoor
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room 2" },
        this.whenIReceiveRoom2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room 2" },
        this.whenIReceiveRoom3
      ),
      new Trigger(Trigger.BROADCAST, { name: "Room3" }, this.whenIReceiveRoom4),
      new Trigger(Trigger.BROADCAST, { name: "Room3" }, this.whenIReceiveRoom5),
      new Trigger(Trigger.BROADCAST, { name: "Room4" }, this.whenIReceiveRoom6),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Door check" },
        this.whenIReceiveDoorCheck
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Move behind player" },
        this.whenIReceiveMoveBehindPlayer
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Open thedruioiu" },
        this.whenIReceiveOpenThedruioiu
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jone party" },
        this.whenIReceiveJoneParty
      ),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jone open door" },
        this.whenIReceiveJoneOpenDoor
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Open foooor" },
        this.whenIReceiveOpenFoooor
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Door cutscene" },
        this.whenIReceiveDoorCutscene
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Reveal!" },
        this.whenIReceiveReveal
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Door fight" },
        this.whenIReceiveDoorFight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Door fight" },
        this.whenIReceiveDoorFight2
      ),
      new Trigger(Trigger.BROADCAST, { name: "Baws" }, this.whenIReceiveBaws),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Enemy turn" },
        this.whenIReceiveEnemyTurn
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ur turn" },
        this.whenIReceiveUrTurn
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Enemy hurt" },
        this.whenIReceiveEnemyHurt
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Door fight" },
        this.whenIReceiveDoorFight3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Second phase" },
        this.whenIReceiveSecondPhase
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Door fight" },
        this.whenIReceiveDoorFight4
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Door death" },
        this.whenIReceiveDoorDeath
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Bad explosion" },
        this.whenIReceiveBadExplosion
      ),
      new Trigger(Trigger.BROADCAST, { name: "Room8" }, this.whenIReceiveRoom8),
      new Trigger(Trigger.BROADCAST, { name: "Room9" }, this.whenIReceiveRoom9),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room9 door" },
        this.whenIReceiveRoom9Door
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room10" },
        this.whenIReceiveRoom10
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room11" },
        this.whenIReceiveRoom11
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Anemone" },
        this.whenIReceiveAnemone
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room12" },
        this.whenIReceiveRoom12
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jimmy cutscene" },
        this.whenIReceiveJimmyCutscene
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Explode dooor :3" },
        this.whenIReceiveExplodeDooor3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Slither away" },
        this.whenIReceiveSlitherAway
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Lights on" },
        this.whenIReceiveLightsOn
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Lights out" },
        this.whenIReceiveLightsOut
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "No i do not." },
        this.whenIReceiveNoIDoNot
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Snake leave" },
        this.whenIReceiveSnakeLeave
      ),
      new Trigger(Trigger.BROADCAST, { name: "Shop" }, this.whenIReceiveShop),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start with save tho" },
        this.whenIReceiveStartWithSaveTho
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room13" },
        this.whenIReceiveRoom13
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
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start chapter 2" },
        this.whenIReceiveStartChapter2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Open dat door" },
        this.whenIReceiveOpenDatDoor
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room20" },
        this.whenIReceiveRoom20
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Shadow zork dead" },
        this.whenIReceiveShadowZorkDead
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room21" },
        this.whenIReceiveRoom21
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Door opens because packcode" },
        this.whenIReceiveDoorOpensBecausePackcode
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room22" },
        this.whenIReceiveRoom22
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Shadow jone dead" },
        this.whenIReceiveShadowJoneDead
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room24" },
        this.whenIReceiveRoom24
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Big room door open" },
        this.whenIReceiveBigRoomDoorOpen
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room23" },
        this.whenIReceiveRoom23
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room25" },
        this.whenIReceiveRoom25
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room25" },
        this.whenIReceiveRoom26
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Goopley joins the party" },
        this.whenIReceiveGoopleyJoinsTheParty
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room26" },
        this.whenIReceiveRoom27
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Goopley unlock" },
        this.whenIReceiveGoopleyUnlock
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Various guys dead" },
        this.whenIReceiveVariousGuysDead
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Open puzzel door so cool" },
        this.whenIReceiveOpenPuzzelDoorSoCool
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room29" },
        this.whenIReceiveRoom29
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Bop it? Nah stop it" },
        this.whenIReceiveBopItNahStopIt
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Combine painting 1" },
        this.whenIReceiveCombinePainting1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Plant hath openeth doorth" },
        this.whenIReceivePlantHathOpenethDoorth
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Shaodwn doordevil talk" },
        this.whenIReceiveShaodwnDoordevilTalk
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Doordevil shadow fight" },
        this.whenIReceiveDoordevilShadowFight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Doordevil shadow fight" },
        this.whenIReceiveDoordevilShadowFight2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Doordevil shadow fight" },
        this.whenIReceiveDoordevilShadowFight3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Enemy turn" },
        this.whenIReceiveEnemyTurn2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ur turn" },
        this.whenIReceiveUrTurn2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Doordevil shadow fight" },
        this.whenIReceiveDoordevilShadowFight4
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Goopley shoot door" },
        this.whenIReceiveGoopleyShootDoor
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Doordevil fade" },
        this.whenIReceiveDoordevilFade
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Goopley shoot door" },
        this.whenIReceiveGoopleyShootDoor2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room32" },
        this.whenIReceiveRoom32
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Boopley" },
        this.whenIReceiveBoopley
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Open room dayrorrr" },
        this.whenIReceiveOpenRoomDayrorrr
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room34" },
        this.whenIReceiveRoom34
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Final Room2" },
        this.whenIReceiveFinalRoom2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Gary fade" },
        this.whenIReceiveGaryFade
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Mawege" },
        this.whenIReceiveMawege
      ),
      new Trigger(Trigger.BROADCAST, { name: "Shop" }, this.whenIReceiveShop2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Back 2 normal :3" },
        this.whenIReceiveBack2Normal3
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Plant cut" },
        this.whenIReceivePlantCut
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room37" },
        this.whenIReceiveRoom37
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room37" },
        this.whenIReceiveRoom38
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room37" },
        this.whenIReceiveRoom39
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room38" },
        this.whenIReceiveRoom40
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room39" },
        this.whenIReceiveRoom41
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room41" },
        this.whenIReceiveRoom42
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room40" },
        this.whenIReceiveRoom43
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room41" },
        this.whenIReceiveRoom44
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room42" },
        this.whenIReceiveRoom45
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room42" },
        this.whenIReceiveRoom46
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room43" },
        this.whenIReceiveRoom47
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Open door43" },
        this.whenIReceiveOpenDoor43
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "John Pixel dies" },
        this.whenIReceiveJohnPixelDies
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room44" },
        this.whenIReceiveRoom48
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room45" },
        this.whenIReceiveRoom49
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Carpet dead" },
        this.whenIReceiveCarpetDead
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room46" },
        this.whenIReceiveRoom50
      ),
      new Trigger(Trigger.BROADCAST, { name: "sans." }, this.whenIReceiveSans),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room48" },
        this.whenIReceiveRoom51
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "5111y 8111y d34d" },
        this.whenIReceive5111y8111yD34d
      ),
      new Trigger(Trigger.BROADCAST, { name: "9p4ay" }, this.whenIReceive9p4ay),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room50" },
        this.whenIReceiveRoom52
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room51" },
        this.whenIReceiveRoom53
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room52" },
        this.whenIReceiveRoom54
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room53" },
        this.whenIReceiveRoom55
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

    this.vars.doors = 0;
    this.vars.randomAttack = 10;
    this.vars.passcode = "8 4 9 5 1 6 2 6";
  }

  *whenGreenFlagClicked() {
    this.stage.vars.shop = 0;
    this.direction = 90;
    this.visible = false;
  }

  *whenIReceiveOpenDoor() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.costume = "costume2";
    yield* this.startSound("Impact");
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Room 2");
  }

  *whenIReceiveRoom2() {
    this.stage.costume = "backdrop2";
    this.costume = "costume1";
    this.visible = true;
    yield* this.wait(0);
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    if (this.toNumber(this.vars.doors) === 1) {
      this.broadcast("Still a door");
      this.vars.doors++;
    } else {
      this.broadcast("Its a door");
    }
  }

  *whenIReceiveRoom3() {
    yield* this.wait(0);
    while (!(this.toNumber(this.stage.vars.buttonsPressed) === 3)) {
      yield;
    }
    yield* this.startSound("Impact");
    this.costume = "costume2";
    this.stage.vars.buttonsPressed = 0;
    /* TODO: Implement stop other scripts in sprite */ null;
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Room3");
  }

  *whenIReceiveRoom4() {
    this.stage.costume = "backdrop3";
    this.costume = "costume1";
    while (!(this.toNumber(this.stage.vars.buttonsPressed) === 40)) {
      yield;
    }
    yield* this.startSound("Impact");
    this.costume = "costume2";
    this.stage.vars.buttonsPressed = 0;
    /* TODO: Implement stop other scripts in sprite */ null;
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Room4");
  }

  *whenIReceiveRoom5() {
    yield* this.wait(0);
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    if (this.toNumber(this.vars.doors) === 2) {
      this.broadcast("Ã¢â‚¬Â¦still a door.");
      this.vars.doors++;
    } else {
      this.broadcast("Its a door");
    }
  }

  *whenIReceiveRoom6() {
    this.stage.costume = "backdrop4";
    this.costume = "costume1";
  }

  *whenIReceiveDoorCheck() {
    if (this.toNumber(this.vars.doors) === 3) {
      this.broadcast("This, is not a door");
    } else {
      this.broadcast("Zork speak");
    }
  }

  *whenIReceiveMoveBehindPlayer() {
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    if (this.toNumber(this.vars.doors) === 3) {
      this.broadcast("Wowza doors");
      this.vars.doors++;
    } else {
      this.broadcast("Yeah IvÃ¢â‚¬â„¢e");
    }
  }

  *whenIReceiveOpenThedruioiu() {
    this.costume = "costume2";
    yield* this.startSound("Impact");
    /* TODO: Implement stop other scripts in sprite */ null;
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Room5");
    this.costume = "costume3";
  }

  *whenIReceiveJoneParty() {
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    if (this.toNumber(this.vars.doors) === 4) {
      this.broadcast("Wow something to say about doors");
    } else {
      this.broadcast("Its locks");
    }
  }

  *whenIReceiveStart() {
    this.costume = "costume1";
    this.goto(200, -15);
    this.vars.doors = 0;
    this.visible = true;
    this.moveBehind();
    yield* this.wait(0);
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.vars.doors++;
    this.broadcast("Its a door");
  }

  *whenthisspriteclicked() {
    if (this.stage.costumeNumber === 3) {
      this.stage.vars.buttonsPressed = 40;
      this.broadcast("Okay so shut up");
    }
  }

  *whenIReceiveJoneOpenDoor() {
    yield* this.wait(1);
    this.costume = "costume2";
    yield* this.startSound("Impact");
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Shop");
  }

  *whenIReceiveOpenFoooor() {
    this.costume = "costume2";
    yield* this.startSound("Impact");
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.costume = "costume1";
    if (this.toNumber(this.vars.doors) === 4) {
      this.broadcast("Dark room");
    } else {
      this.broadcast("Room8");
    }
  }

  *whenIReceiveDoorCutscene() {
    yield* this.startSound("Knock");
  }

  *whenIReceiveReveal() {
    this.stage.vars.speed = 0;
    this.stage.vars.enemyHp = 1500;
    this.goto(200, -15);
    this.costume = "costume1";
    yield* this.wait(0.5);
    this.costume = "costume4";
    yield* this.startSound("Change");
    for (let i = 0; i < 10; i++) {
      this.goto(200, -15);
      this.x += this.random(-5, 5);
      yield;
    }
    this.goto(200, -15);
    yield* this.wait(1);
    this.costume = "costume5";
    yield* this.wait(1);
    yield* this.startSound("sans-eye-sounds");
    this.costume = "costume6";
    this.createClone();
    this.stage.watchers.hp.visible = true;
    this.stage.vars.battle = 2;
    this.stage.vars.inBattle = 1;
    yield* this.wait(2);
    this.broadcast("Door fight");
    this.stage.vars.speed = 4;
    yield* this.glide(0.5, 140, -15);
    yield* this.wait(2);
    while (true) {
      if (window.GAMEOVER) return;
      for (let i = 0; i < 5; i++) {
        this.x += 2;
        yield;
      }
      for (let i = 0; i < 10; i++) {
        this.x -= 2;
        yield;
      }
      for (let i = 0; i < 5; i++) {
        this.x += 2;
        yield;
      }
      yield;
    }
  }

  *startAsClone() {
    this.moveAhead();
    this.costume = "costume7";
    this.size = 100;
    for (let i = 0; i < 20; i++) {
      this.size += 50;
      this.effects.ghost += 5;
      this.y -= 7;
      yield;
    }
    this.deleteThisClone();
  }

  *whenIReceiveDoorFight() {
    yield* this.wait(2.5);
    while (true) {
      if (window.GAMEOVER) return;
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

  *whenIReceiveDoorFight2() {
    this.audioEffects.pitch = 0;
    while (true) {
      if (window.GAMEOVER) return;
      yield* this.playSoundUntilDone("THE DOOR");
      yield;
    }
  }

  *whenIReceiveBaws() {
    while (true) {
      this.vars.doors = 4;
      yield;
    }
  }

  *whenIReceiveEnemyTurn() {
    if (this.toNumber(this.stage.vars.battle) === 2) {
      this.vars.randomAttack = this.random(1, 3);
      if (this.compare(this.stage.vars.enemyHp, 699) < 0) {
        this.vars.randomAttack = this.random(4, 7);
      }
      if (this.toNumber(this.vars.randomAttack) === 2) {
        if (this.random(1, 2) === 1) {
          this.vars.randomAttack = this.random(1, 3);
          if (this.compare(this.stage.vars.enemyHp, 699) < 0) {
            this.vars.randomAttack = this.random(4, 7);
          }
        }
      }
      if (this.toNumber(this.vars.randomAttack) === 1) {
        this.broadcast("Jevil oh");
        this.visible = false;
      }
      if (this.toNumber(this.vars.randomAttack) === 2) {
        this.broadcast("Eyeball attack");
        this.visible = false;
      }
      if (this.toNumber(this.vars.randomAttack) === 3) {
        this.broadcast("Cup game");
        this.visible = false;
      }
      if (this.toNumber(this.vars.randomAttack) === 4) {
        this.broadcast("Eyeball attack");
        this.broadcast("Cup game");
      }
      if (this.toNumber(this.vars.randomAttack) === 5) {
        this.broadcast("Jevil Oh 2");
      }
      if (this.toNumber(this.vars.randomAttack) === 6) {
        this.broadcast("Door worm");
      }
      if (this.toNumber(this.vars.randomAttack) === 7) {
        this.broadcast("Half of screen :3");
      }
    }
  }

  *whenIReceiveUrTurn() {
    if (this.toNumber(this.stage.vars.battle) === 2) {
      this.visible = true;
      this.effects.ghost += 100;
      for (let i = 0; i < 20; i++) {
        this.effects.ghost -= 5;
        yield;
      }
    }
  }

  *whenIReceiveEnemyHurt() {
    if (this.toNumber(this.stage.vars.battle) === 2) {
      this.effects.clear();
      this.effects.fisheye -= 100;
      this.stage.vars.enemyHp += 10;
      for (let i = 0; i < 20; i++) {
        this.effects.fisheye += 5;
        yield;
      }
      this.effects.clear();
    }
  }

  *whenIReceiveDoorFight3() {
    yield* this.wait(1);
    while (!(this.compare(this.stage.vars.enemyHp, 699) < 0)) {
      yield;
    }
    this.broadcast("Second phase");
    while (true) {
      if (window.GAMEOVER) return;
      this.sprites["Sprite49"].createClone();
      yield* this.wait(0.05);
      yield;
    }
  }

  *whenIReceiveSecondPhase() {
    for (let i = 0; i < 5; i++) {
      yield* this.startSound("Impact3");
      yield* this.wait(0.05);
      yield;
    }
  }

  *whenIReceiveDoorFight4() {
    yield* this.wait(1);
    while (!(this.compare(this.stage.vars.enemyHp, 1) < 0)) {
      yield;
    }
    /* TODO: Implement stop other scripts in sprite */ null;
    this.broadcast("Door death");
  }

  *whenIReceiveDoorDeath() {
    this.effects.clear();
    this.costume = "costume14";
    this.stage.vars.inBattle = 0;
    this.stage.vars.battle = 0;
    yield* this.startSound("Impact3");
  }

  *whenIReceiveBadExplosion() {
    this.stage.vars.speed = 0;
    this.costume = "costume15";
    yield* this.startSound("Impact3");
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.effects.clear();
    this.visible = false;
    yield* this.wait(1);
    this.stage.vars.speed = 4;
    yield* this.wait(3);
    this.visible = true;
    yield* this.glide(1, 200, -15);
    this.costume = "costume2";
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Room8");
  }

  *whenIReceiveRoom8() {
    this.costume = "costume2";
    yield* this.wait(0);
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Room9");
  }

  *whenIReceiveRoom9() {
    this.costume = "costume1";
  }

  *whenIReceiveRoom9Door() {
    this.costume = "costume2";
    yield* this.startSound("Impact");
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Room10");
    this.costume = "costume1";
  }

  *whenIReceiveRoom10() {
    this.visible = true;
    this.costume = "costume1";
    while (!(this.toNumber(this.stage.vars.buttonsPressed) === 2)) {
      yield;
    }
    this.costume = "costume2";
    yield* this.startSound("Impact");
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Shop");
  }

  *whenIReceiveRoom11() {
    this.costume = "costume3";
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Room12");
  }

  *whenIReceiveAnemone() {
    this.costume = "costume2";
  }

  *whenIReceiveRoom12() {
    this.costume = "costume2";
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Shop");
  }

  *whenIReceiveJimmyCutscene() {
    this.costume = "costume2";
    yield* this.startSound("Impact");
  }

  *whenIReceiveExplodeDooor3() {
    this.costume = "costume2";
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Room14");
    this.costume = "costume1";
  }

  *whenIReceiveSlitherAway() {
    yield* this.wait(6);
    yield* this.startSound("Impact3");
    this.costume = "costume2";
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Room15");
    this.visible = false;
  }

  *whenIReceiveLightsOn() {
    yield* this.startSound("Impact2");
    yield* this.wait(0.6);
    this.costume = "costume2";
    this.visible = true;
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.stage.vars.amuletAvalible = 1;
    this.broadcast("Room16");
  }

  *whenIReceiveLightsOut() {
    yield* this.startSound("Impact3");
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.amuletAvalible = 0;
  }

  *whenIReceiveNoIDoNot() {
    this.costume = "costume2";
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Shop");
  }

  *whenIReceiveSnakeLeave() {
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Room18");
    this.costume = "costume3";
  }

  *whenIReceiveShop() {
    this.stage.vars.shop++;
    if (this.toNumber(this.stage.vars.chapter) === 1) {
      if (this.toNumber(this.stage.vars.shop) === 1) {
        while (!this.touching(this.sprites["Player"].andClones())) {
          yield;
        }
        this.broadcast("Room6");
        yield* this.wait(0);
        while (!this.touching(this.sprites["Player"].andClones())) {
          yield;
        }
        this.broadcast("Room7");
        this.costume = "costume1";
      }
      if (this.toNumber(this.stage.vars.shop) === 2) {
        while (!this.touching(this.sprites["Player"].andClones())) {
          yield;
        }
        this.broadcast("Room11");
      }
      if (this.toNumber(this.stage.vars.shop) === 3) {
        while (!this.touching(this.sprites["Player"].andClones())) {
          yield;
        }
        this.broadcast("Room13");
        this.costume = "costume3";
      }
      if (this.toNumber(this.stage.vars.shop) === 4) {
        while (!this.touching(this.sprites["Player"].andClones())) {
          yield;
        }
        this.broadcast("Room17");
        this.costume = "costume2";
      }
      if (this.toNumber(this.stage.vars.shop) === 5) {
        while (!this.touching(this.sprites["Player"].andClones())) {
          yield;
        }
        this.broadcast("Final room.");
        this.visible = false;
      }
      if (this.toNumber(this.stage.vars.shop) === 10) {
        while (!this.touching(this.sprites["Player"].andClones())) {
          yield;
        }
        this.broadcast("Room666");
        this.visible = false;
      }
    }
    if (this.toNumber(this.stage.vars.chapter) === 2) {
      if (this.toNumber(this.stage.vars.shop) === 1) {
        while (!this.touching(this.sprites["Player"].andClones())) {
          yield;
        }
        this.costume = "costume1";
        this.broadcast("Room19");
      }
      if (this.toNumber(this.stage.vars.shop) === 2) {
        while (!this.touching(this.sprites["Player"].andClones())) {
          yield;
        }
        this.costume = "costume1";
        this.broadcast("Room21");
      }
      if (this.toNumber(this.stage.vars.shop) === 3) {
        while (!this.touching(this.sprites["Player"].andClones())) {
          yield;
        }
        this.costume = "costume1";
        this.broadcast("Room26");
      }
      if (this.toNumber(this.stage.vars.shop) === 4) {
        while (!this.touching(this.sprites["Player"].andClones())) {
          yield;
        }
        this.costume = "costume1";
        this.broadcast("Room27");
      }
      if (this.toNumber(this.stage.vars.shop) === 5) {
        while (!this.touching(this.sprites["Player"].andClones())) {
          yield;
        }
        this.costume = "costume1";
        this.broadcast("Room28");
      }
      if (this.toNumber(this.stage.vars.shop) === 6) {
        yield* this.wait(0);
        while (!this.touching(this.sprites["Player"].andClones())) {
          yield;
        }
        if (this.toNumber(this.stage.vars.spindoor) === 2) {
          this.costume = "costume1";
          this.broadcast("Dark room2");
        } else {
          this.broadcast("Room32");
        }
      }
      if (this.toNumber(this.stage.vars.shop) === 7) {
        yield* this.wait(0);
        while (!this.touching(this.sprites["Player"].andClones())) {
          yield;
        }
        this.broadcast("Room33");
      }
      if (this.toNumber(this.stage.vars.shop) === 8) {
        yield* this.wait(0);
        while (!this.touching(this.sprites["Player"].andClones())) {
          yield;
        }
        this.broadcast("Room35");
      }
    }
    if (this.toNumber(this.stage.vars.chapter) === 3) {
      if (this.toNumber(this.stage.vars.shop) === 1) {
        while (!this.touching(this.sprites["Player"].andClones())) {
          yield;
        }
        this.broadcast("Room36");
        this.costume = "costume2";
      }
      if (this.toNumber(this.stage.vars.shop) === 2) {
        while (!this.touching(this.sprites["Player"].andClones())) {
          yield;
        }
        this.broadcast("Room37");
      }
      if (this.toNumber(this.stage.vars.shop) === 3) {
        while (!this.touching(this.sprites["Player"].andClones())) {
          yield;
        }
        this.broadcast("Room42");
      }
      if (this.toNumber(this.stage.vars.shop) === 4) {
        while (!this.touching(this.sprites["Player"].andClones())) {
          yield;
        }
        this.broadcast("Room45");
      }
      if (this.toNumber(this.stage.vars.shop) === 5) {
        while (!this.touching(this.sprites["Player"].andClones())) {
          yield;
        }
        this.broadcast("Room47");
      }
      if (this.toNumber(this.stage.vars.shop) === 6) {
        while (!this.touching(this.sprites["Player"].andClones())) {
          yield;
        }
        this.broadcast("Room48");
      }
      if (this.toNumber(this.stage.vars.shop) === 7) {
        while (!this.touching(this.sprites["Player"].andClones())) {
          yield;
        }
        this.broadcast("Room49");
      }
      if (this.toNumber(this.stage.vars.shop) === 8) {
        while (!this.touching(this.sprites["Player"].andClones())) {
          yield;
        }
        this.broadcast("Room53");
      }
    }
  }

  *whenIReceiveStartWithSaveTho() {
    this.visible = true;
  }

  *whenGreenFlagClicked3() {
    this.costume = "costume2";
  }

  *whenIReceiveRoom13() {
    this.costume = "costume1";
  }

  *whenIReceiveJimmyDies() {
    this.costume = "costume2";
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    if (this.toNumber(this.stage.vars.amuletAvalible) === 4) {
      this.broadcast("Shop");
    } else {
      this.broadcast("Final room.");
    }
  }

  *whenIReceiveFinalRoom() {
    this.stage.vars.speed = 0;
    this.visible = false;
  }

  *whenGreenFlagClicked4() {
    this.goto(200, -15);
  }

  *whenIReceiveStartChapter2() {
    this.goto(200, -15);
    this.costume = "costume2";
    this.visible = true;
  }

  *whenIReceiveOpenDatDoor() {
    yield* this.startSound("Impact");
    this.costume = "costume2";
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Room20");
  }

  *whenIReceiveRoom20() {
    this.costume = "costume3";
  }

  *whenIReceiveShadowZorkDead() {
    this.costume = "costume2";
    yield* this.startSound("Impact");
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Shop");
  }

  *whenIReceiveRoom21() {
    while (true) {
      while (!this.touching(this.sprites["Player"].andClones())) {
        yield;
      }
      this.vars.passcode = this.stage.vars.passcode.join(" ");
      yield* this.askAndWait("Passcode? (Include a space after every number)");
      if (this.compare(this.answer, this.vars.passcode) === 0) {
        this.costume = "costume2";
        this.broadcast("Door opens because packcode");
        return;
      }
      yield;
    }
  }

  *whenIReceiveDoorOpensBecausePackcode() {
    yield* this.startSound("Impact");
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Room22");
  }

  *whenIReceiveRoom22() {
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Room23");
  }

  *whenIReceiveShadowJoneDead() {
    this.costume = "costume2";
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Room24");
    this.size = 50;
    this.costume = "costume1";
  }

  *whenGreenFlagClicked5() {
    this.size = 100;
  }

  *whenIReceiveRoom24() {
    while (true) {
      while (!this.touching(this.sprites["Player"].andClones())) {
        yield;
      }
      this.vars.passcode = this.stage.vars.passcode.join(" ");
      yield* this.askAndWait("");
      if (this.compare(this.answer, this.vars.passcode) === 0) {
        this.costume = "costume2";
        this.broadcast("Big room door open");
        return;
      }
      yield;
    }
  }

  *whenIReceiveBigRoomDoorOpen() {
    this.costume = "costume2";
    yield* this.startSound("Impact");
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Room25");
  }

  *whenIReceiveRoom23() {
    this.costume = "costume3";
  }

  *whenIReceiveRoom25() {
    this.costume = "costume1";
  }

  *whenIReceiveRoom26() {
    yield* this.wait(0);
    while (!(this.toNumber(this.stage.vars.buttonsPressed) === 198)) {
      yield;
    }
    this.costume = "costume2";
    yield* this.startSound("Impact");
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Shop");
    this.size = 100;
  }

  *whenIReceiveGoopleyJoinsTheParty() {
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Goopley talk about door");
  }

  *whenIReceiveRoom27() {
    yield* this.wait(0);
    this.costume = "costume3";
  }

  *whenIReceiveGoopleyUnlock() {
    this.costume = "costume2";
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Shop");
  }

  *whenIReceiveVariousGuysDead() {
    this.costume = "costume2";
    yield* this.startSound("Impact");
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Shop");
  }

  *whenIReceiveOpenPuzzelDoorSoCool() {
    this.costume = "costume2";
    yield* this.startSound("Impact");
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.costume = "costume1";
    this.broadcast("Room29");
  }

  *whenIReceiveRoom29() {
    this.costume = "costume1";
  }

  *whenIReceiveBopItNahStopIt() {
    this.costume = "costume2";
    yield* this.startSound("Impact");
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Room30");
    this.costume = "costume1";
  }

  *whenIReceiveCombinePainting1() {
    yield* this.wait(1);
    this.costume = "costume2";
    yield* this.startSound("Impact");
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Room31");
    this.costume = "costume1";
  }

  *whenIReceivePlantHathOpenethDoorth() {
    this.costume = "costume2";
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Shop");
  }

  *whenIReceiveShaodwnDoordevilTalk() {
    yield* this.wait(1);
    this.stage.vars.speed = 0;
    this.stage.vars.enemyHp = 2500;
    this.goto(200, -15);
    this.costume = "costume1";
    yield* this.wait(0.5);
    this.costume = "costume16";
    yield* this.startSound("Change");
    for (let i = 0; i < 10; i++) {
      this.goto(200, -15);
      this.x += this.random(-5, 5);
      yield;
    }
    this.goto(200, -15);
    yield* this.wait(1);
    this.costume = "costume17";
    yield* this.wait(1);
    yield* this.startSound("sans-eye-sounds");
    this.costume = "costume18";
    this.createClone();
    yield* this.wait(0.8);
    this.broadcast("Doordevil speakerh");
  }

  *whenIReceiveDoordevilShadowFight() {
    this.goto(135, -15);
    this.stage.watchers._.visible = false;
    this.stage.watchers.hp.visible = true;
    this.stage.vars.battle = 14;
    this.stage.vars.inBattle = 1;
    this.broadcast("Ur turn");
    while (true) {
      if (this.compare(this.stage.vars.enemyHp, 699) < 0) {
        this.direction += this.random(1, 360);
        yield* this.wait(0);
      } else {
        this.direction += this.random(1, 360);
        yield* this.wait(0.1);
      }
      yield;
    }
  }

  *whenIReceiveDoordevilShadowFight2() {
    this.audioEffects.pitch = 0;
    while (true) {
      yield* this.playSoundUntilDone("THE DOOR2");
      yield;
    }
  }

  *whenIReceiveDoordevilShadowFight3() {
    while (true) {
      if (this.compare(this.stage.vars.enemyHp, 699) < 0) {
        this.costume = "costume18";
        for (let i = 0; i < this.random(10, 80); i++) {
          this.effects.brightness = this.random(-100, 100);
          this.costume = this.random(19, 22);
          this.direction = this.random(85, 95);
          this.goto(135, -15);
          this.y += this.random(-20, 20);
          this.x += this.random(-20, 20);
          this.direction = 90;
          yield* this.wait(0);
          yield;
        }
      } else {
        this.goto(135, -15);
        this.costume = "costume18";
        for (let i = 0; i < this.random(10, 80); i++) {
          this.direction = 90;
          yield* this.wait(0);
          yield;
        }
        for (let i = 0; i < this.random(10, 20); i++) {
          this.costume = this.random(19, 22);
          this.direction = this.random(85, 95);
          yield;
        }
      }
      yield;
    }
  }

  *whenIReceiveEnemyTurn2() {
    if (this.toNumber(this.stage.vars.battle) === 14) {
      this.vars.randomAttack = this.random(1, 5);
      if (this.random(1, 5) === 1) {
        this.vars.randomAttack = 5;
      }
      if (this.compare(this.stage.vars.enemyHp, 699) < 0) {
        this.vars.randomAttack = this.random(6, 10);
        if (this.random(1, 5) === 1) {
          this.vars.randomAttack = 10;
        }
      }
      yield* this.wait(0.5);
      if (this.toNumber(this.vars.randomAttack) === 1) {
        this.broadcast("Jevil oh3");
        this.visible = false;
      }
      if (this.toNumber(this.vars.randomAttack) === 2) {
        this.broadcast("Jevil carasel");
      }
      if (this.toNumber(this.vars.randomAttack) === 3) {
        this.broadcast("Liney whiney 2");
      }
      if (this.toNumber(this.vars.randomAttack) === 4) {
        this.broadcast("Cup game");
        this.broadcast("Throw some diamonds in it");
      }
      if (this.toNumber(this.vars.randomAttack) === 5) {
        this.broadcast("Jevil auh attack");
      }
      if (this.toNumber(this.vars.randomAttack) === 6) {
        this.broadcast("Jevil oh4");
        this.visible = false;
      }
      if (this.toNumber(this.vars.randomAttack) === 7) {
        this.broadcast("Jevil carosel2");
      }
      if (this.toNumber(this.vars.randomAttack) === 8) {
        this.broadcast("Liney whiney 3");
      }
      if (this.toNumber(this.vars.randomAttack) === 9) {
        this.broadcast("Cup game");
        this.broadcast("Throw some diamonds in it");
      }
      if (this.toNumber(this.vars.randomAttack) === 10) {
        this.broadcast("Jevil auh attack2");
      }
    }
  }

  *whenIReceiveUrTurn2() {
    if (this.toNumber(this.stage.vars.battle) === 14) {
      this.visible = true;
    }
  }

  *whenIReceiveDoordevilShadowFight4() {
    yield* this.wait(0.1);
    while (!(this.compare(this.stage.vars.enemyHp, 1) < 0)) {
      yield;
    }
    /* TODO: Implement stop other scripts in sprite */ null;
    this.direction = 90;
    this.goto(135, -30);
    this.effects.clear();
    this.broadcast("Doordevil dies lmao");
    this.costume = "costume18";
    this.stage.watchers._.visible = true;
    this.stage.watchers.enemyHp.visible = false;
    this.stage.vars.inBattle = 0;
    this.stage.watchers.hp.visible = false;
    this.stage.watchers.grilledCheese.visible = false;
  }

  *whenIReceiveGoopleyShootDoor() {
    this.costume = "costume18";
    yield* this.wait(1);
    this.costume = "costume23";
  }

  *whenIReceiveDoordevilFade() {
    this.effects.clear();
    this.visible = true;
    for (let i = 0; i < 20; i++) {
      this.effects.ghost += 5;
      yield;
    }
    this.visible = false;
    this.effects.clear();
    yield* this.wait(1);
    this.stage.vars.speed = 4;
    this.costume = "costume2";
    this.goto(200, -15);
    this.visible = true;
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Room32");
  }

  *whenIReceiveGoopleyShootDoor2() {
    yield* this.wait(1);
    yield* this.startSound("Impact3");
  }

  *whenIReceiveRoom32() {
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Shop");
  }

  *whenIReceiveBoopley() {
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.costume = "costume1";
    this.broadcast("Room34");
  }

  *whenIReceiveOpenRoomDayrorrr() {
    yield* this.startSound("Impact");
    this.costume = "costume2";
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Shop");
  }

  *whenIReceiveRoom34() {
    this.costume = "costume1";
  }

  *whenIReceiveFinalRoom2() {
    this.stage.vars.speed = 0;
    this.visible = false;
  }

  *whenIReceiveGaryFade() {
    this.costume = "costume2";
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Final Room2");
  }

  *whenIReceiveMawege() {
    for (let i = 0; i < 10; i++) {
      this.visible = false;
      yield;
    }
  }

  *whenIReceiveShop2() {
    this.visible = true;
  }

  *whenIReceiveBack2Normal3() {
    this.visible = true;
  }

  *whenthisspriteclicked2() {
    if (this.stage.costumeNumber === 28) {
      this.broadcast("Get rid of blocks :3");
    }
  }

  *whenIReceivePlantCut() {
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Shop");
  }

  *whenIReceiveRoom37() {
    this.costume = "costume2";
    this.size = 50;
    this.stage.vars.bigRoom = 1;
  }

  *whenIReceiveRoom38() {
    this.goto(200, 5);
  }

  *whenIReceiveRoom39() {
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Room38");
  }

  *whenIReceiveRoom40() {
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Room39");
  }

  *whenIReceiveRoom41() {
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Room40");
  }

  *whenIReceiveRoom42() {
    this.goto(200, -15);
    this.stage.vars.bigRoom = 0;
  }

  *whenIReceiveRoom43() {
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Room41");
    this.size = 100;
  }

  *whenIReceiveRoom44() {
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Shop");
  }

  *whenIReceiveRoom45() {
    this.costume = "costume3";
  }

  *whenIReceiveRoom46() {
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Room43");
  }

  *whenIReceiveRoom47() {
    this.costume = "costume1";
  }

  *whenIReceiveOpenDoor43() {
    this.costume = "costume2";
    yield* this.startSound("Impact");
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Room44");
  }

  *whenIReceiveJohnPixelDies() {
    this.costume = "costume2";
  }

  *whenIReceiveRoom48() {
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Shop");
  }

  *whenIReceiveRoom49() {
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Carpet talks");
  }

  *whenIReceiveCarpetDead() {
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Room46");
  }

  *whenIReceiveRoom50() {
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Shop");
  }

  *whenIReceiveSans() {
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Shop");
  }

  *whenIReceiveRoom51() {
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Shop");
  }

  *whenIReceive5111y8111yD34d() {
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Room50");
  }

  *whenIReceive9p4ay() {
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Room50");
  }

  *whenIReceiveRoom52() {
    yield* this.wait(0.3);
    this.size = 50;
    this.goto(220, -15);
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Room51");
  }

  *whenIReceiveRoom53() {
    yield* this.wait(0.3);
    this.size = 50;
    this.goto(220, -15);
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Room52");
  }

  *whenIReceiveRoom54() {
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("Shop");
    this.goto(200, -15);
    this.size = 100;
  }

  *whenIReceiveRoom55() {
    this.visible = false;
  }

  *whenIReceiveForchFallToGround() {
    this.costume = "costume24";
    this.goto(200, -15);
    this.visible = true;
    this.size = 100;
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.broadcast("THE REAL FINAL ROOM");
  }

  *whenIReceiveTheRealFinalRoom() {
    this.visible = false;
  }
}
