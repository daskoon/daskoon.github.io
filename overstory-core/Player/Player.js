import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

/**
 * Player Sprite
 * The main controllable entity in OverStory.
 * Manages character movement, state transitions between rooms, 
 * and costume changes based on equipment/story progress.
 */
export default class Player extends Sprite {
  constructor(...args) {
    super(...args);

    // Initializing all player costumes (facing directions and battle poses)
    this.costumes = [
      new Costume("costume1", "./Player/costumes/costume1.png", {
        x: 21,
        y: 38,
      }),
      new Costume("costume2", "./Player/costumes/costume2.png", {
        x: 21,
        y: 38,
      }),
      new Costume("costume3", "./Player/costumes/costume3.png", {
        x: 21,
        y: 38,
      }),
      new Costume("costume4", "./Player/costumes/costume4.png", {
        x: 21,
        y: 38,
      }),
      new Costume("costume5", "./Player/costumes/costume5.png", {
        x: 34,
        y: 38,
      }),
      new Costume("costume6", "./Player/costumes/costume6.png", {
        x: 16,
        y: 38,
      }),
      new Costume("costume7", "./Player/costumes/costume7.png", {
        x: 25,
        y: 38,
      }),
      new Costume("costume8", "./Player/costumes/costume8.png", {
        x: 21,
        y: 38,
      }),
      new Costume("costume9", "./Player/costumes/costume9.png", {
        x: 21,
        y: 38,
      }),
      new Costume("costume10", "./Player/costumes/costume10.png", {
        x: 21,
        y: 38,
      }),
      new Costume("costume11", "./Player/costumes/costume11.png", {
        x: 25,
        y: 38,
      }),
      new Costume("costume12", "./Player/costumes/costume12.png", {
        x: 21,
        y: 38,
      }),
    ];

    // Basic player sound effects
    this.sounds = [new Sound("pop", "./Player/sounds/pop.wav")];

    // Comprehensive list of triggers for directional inputs and game room transitions
    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Down" }, this.whenIReceiveDown),
      new Trigger(Trigger.BROADCAST, { name: "Left" }, this.whenIReceiveLeft),
      new Trigger(Trigger.BROADCAST, { name: "Right" }, this.whenIReceiveRight),
      new Trigger(Trigger.BROADCAST, { name: "Up" }, this.whenIReceiveUp),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room 2" },
        this.whenIReceiveRoom2
      ),
      new Trigger(Trigger.BROADCAST, { name: "Room3" }, this.whenIReceiveRoom3),
      new Trigger(Trigger.BROADCAST, { name: "Room4" }, this.whenIReceiveRoom4),
      new Trigger(Trigger.BROADCAST, { name: "Room5" }, this.whenIReceiveRoom5),
      new Trigger(Trigger.BROADCAST, { name: "Jone" }, this.whenIReceiveJone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jane battle" },
        this.whenIReceiveJaneBattle
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "Jone" }, this.whenIReceiveJone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jone defeat" },
        this.whenIReceiveJoneDefeat
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jone open door" },
        this.whenIReceiveJoneOpenDoor
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Door check" },
        this.whenIReceiveDoorCheck
      ),
      new Trigger(Trigger.BROADCAST, { name: "Room6" }, this.whenIReceiveRoom6),
      new Trigger(Trigger.BROADCAST, { name: "Room7" }, this.whenIReceiveRoom7),
      new Trigger(Trigger.BROADCAST, { name: "Room8" }, this.whenIReceiveRoom8),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Dark room" },
        this.whenIReceiveDarkRoom
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Door fight" },
        this.whenIReceiveDoorFight
      ),
      new Trigger(Trigger.BROADCAST, { name: "Shop" }, this.whenIReceiveShop),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Man come up" },
        this.whenIReceiveManComeUp
      ),
      new Trigger(Trigger.BROADCAST, { name: "Room9" }, this.whenIReceiveRoom9),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Door fight" },
        this.whenIReceiveDoorFight2
      ),
      new Trigger(Trigger.BROADCAST, { name: "Jone" }, this.whenIReceiveJone3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room6" },
        this.whenIReceiveRoom10
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room10" },
        this.whenIReceiveRoom11
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room11" },
        this.whenIReceiveRoom12
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
        { name: "Fourth wall break" },
        this.whenIReceiveFourthWallBreak
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Amber tired" },
        this.whenIReceiveAmberTired
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room12" },
        this.whenIReceiveRoom13
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jimmy cutscene" },
        this.whenIReceiveJimmyCutscene
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room13" },
        this.whenIReceiveRoom14
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room14" },
        this.whenIReceiveRoom15
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room15" },
        this.whenIReceiveRoom16
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Done check" },
        this.whenIReceiveDoneCheck
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room16" },
        this.whenIReceiveRoom17
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Foe cutscene" },
        this.whenIReceiveFoeCutscene
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Thrasher battle" },
        this.whenIReceiveThrasherBattle
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Foe end" },
        this.whenIReceiveFoeEnd
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room17" },
        this.whenIReceiveRoom18
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room18" },
        this.whenIReceiveRoom19
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
        { name: "Final room." },
        this.whenIReceiveFinalRoom2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Flash white :3" },
        this.whenIReceiveFlashWhite3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Mawege" },
        this.whenIReceiveMawege
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Other man come up" },
        this.whenIReceiveOtherManComeUp
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Back 2 normal :3" },
        this.whenIReceiveBack2Normal3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room19" },
        this.whenIReceiveRoom20
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
        { name: "Room20" },
        this.whenIReceiveRoom21
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Shadow zork talk" },
        this.whenIReceiveShadowZorkTalk
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Shadow zork fight" },
        this.whenIReceiveShadowZorkFight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room21" },
        this.whenIReceiveRoom22
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room22" },
        this.whenIReceiveRoom23
      ),
      new Trigger(Trigger.BROADCAST, { name: "Shop" }, this.whenIReceiveShop2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room23" },
        this.whenIReceiveRoom24
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Shadow jone fight" },
        this.whenIReceiveShadowJoneFight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room24" },
        this.whenIReceiveRoom25
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room25" },
        this.whenIReceiveRoom26
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room26" },
        this.whenIReceiveRoom27
      ),
      new Trigger(Trigger.BROADCAST, { name: "Shop" }, this.whenIReceiveShop3),
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
        { name: "Goopley talk about door" },
        this.whenIReceiveGoopleyTalkAboutDoor
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room27" },
        this.whenIReceiveRoom28
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Various battle" },
        this.whenIReceiveVariousBattle
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room28" },
        this.whenIReceiveRoom29
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room29" },
        this.whenIReceiveRoom30
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room30" },
        this.whenIReceiveRoom31
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room31" },
        this.whenIReceiveRoom32
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Dark room2" },
        this.whenIReceiveDarkRoom2
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
        { name: "Room32" },
        this.whenIReceiveRoom33
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room33" },
        this.whenIReceiveRoom34
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Boopley fight" },
        this.whenIReceiveBoopleyFight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room34" },
        this.whenIReceiveRoom35
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room35" },
        this.whenIReceiveRoom36
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Goopley betrayl" },
        this.whenIReceiveGoopleyBetrayl
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
        this.whenIReceiveFinalRoom3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room36" },
        this.whenIReceiveRoom37
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Hand hop down" },
        this.whenIReceiveHandHopDown
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Hand hop down" },
        this.whenIReceiveHandHopDown2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Plant battle" },
        this.whenIReceivePlantBattle
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ã¢â‚¬Â¦Ã¢â‚¬Â¦abattoeend" },
        this.whenIReceiveAbattoeend
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room37" },
        this.whenIReceiveRoom38
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Gauntlet start" },
        this.whenIReceiveGauntletStart
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room38" },
        this.whenIReceiveRoom39
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room39" },
        this.whenIReceiveRoom40
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room40" },
        this.whenIReceiveRoom41
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room41" },
        this.whenIReceiveRoom42
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room42" },
        this.whenIReceiveRoom43
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "John pixel fight" },
        this.whenIReceiveJohnPixelFight
      ),
      new Trigger(Trigger.BROADCAST, { name: "Down" }, this.whenIReceiveDown2),
      new Trigger(Trigger.BROADCAST, { name: "Up" }, this.whenIReceiveUp2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Right" },
        this.whenIReceiveRight2
      ),
      new Trigger(Trigger.BROADCAST, { name: "Left" }, this.whenIReceiveLeft2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room43" },
        this.whenIReceiveRoom44
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room44" },
        this.whenIReceiveRoom45
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room45" },
        this.whenIReceiveRoom46
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Carpet fight" },
        this.whenIReceiveCarpetFight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room46" },
        this.whenIReceiveRoom47
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room47" },
        this.whenIReceiveRoom48
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "sans fight" },
        this.whenIReceiveSansFight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room48" },
        this.whenIReceiveRoom49
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Fobert fight" },
        this.whenIReceiveFobertFight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room49" },
        this.whenIReceiveRoom50
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "silly billy speaks" },
        this.whenIReceiveSillyBillySpeaks
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "sbtumpatnsaj threat" },
        this.whenIReceiveSbtumpatnsajThreat
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "5111y 8111y f19ht" },
        this.whenIReceive5111y8111yF19ht
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room50" },
        this.whenIReceiveRoom51
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "you restart maze" },
        this.whenIReceiveYouRestartMaze
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room52" },
        this.whenIReceiveRoom52
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Joshua" },
        this.whenIReceiveJoshua
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start chapter 2" },
        this.whenIReceiveStartChapter2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start chapter 3" },
        this.whenIReceiveStartChapter3
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room51" },
        this.whenIReceiveRoom53
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room666" },
        this.whenIReceiveRoom666
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room53" },
        this.whenIReceiveRoom54
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "final final final boss speech" },
        this.whenIReceiveFinalFinalFinalBossSpeech
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "final final final boss speech" },
        this.whenIReceiveFinalFinalFinalBossSpeech2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "1000 FINAL FIGHT NOW" },
        this.whenIReceive1000FinalFightNow
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
  }

  /**
   * Facing down costume change.
   * Only triggers if not currently in a battle phase.
   */
  *whenIReceiveDown() {
    if (this.toNumber(this.stage.vars.inBattle) === 0) {
      this.costume = "costume4"; // Switch to facing-down costume
    }
  }

  /**
   * Facing left costume change.
   */
  *whenIReceiveLeft() {
    if (this.toNumber(this.stage.vars.inBattle) === 0) {
      this.costume = "costume2"; // Switch to facing-left costume
    }
  }

  /**
   * Facing right costume change.
   */
  *whenIReceiveRight() {
    if (this.toNumber(this.stage.vars.inBattle) === 0) {
      this.costume = "costume1"; // Switch to facing-right costume
    }
  }

  /**
   * Facing up costume change.
   */
  *whenIReceiveUp() {
    if (this.toNumber(this.stage.vars.inBattle) === 0) {
      this.costume = "costume3"; // Switch to facing-up costume
    }
  }

  /**
   * Move player to the starting point of Room 2.
   * Resets position and orientation.
   */
  *whenIReceiveRoom2() {
    this.goto(-195, 0); // Start at left entrance
    this.costume = "costume1"; // Face right
    this.direction = 90;
  }

  /**
   * Move player to the starting point of Room 3.
   */
  *whenIReceiveRoom3() {
    this.goto(-195, 0); // Start at left entrance
    this.costume = "costume1";
    this.direction = 90;
  }

  /**
   * Move player to the starting point of Room 4.
   */
  *whenIReceiveRoom4() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
  }

  /**
   * Move player to the starting point of Room 5.
   * Also changes the background backdrop.
   */
  *whenIReceiveRoom5() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop5"; // Update stage backdrop
  }

  /**
   * Cutscene movement: Glide player into position for meeting Jone.
   */
  *whenIReceiveJone() {
    yield* this.glide(0.2, 50, -15); // Smooth glide to interaction spot
  }

  /**
   * Transition player to the battle stance for the Jane encounter.
   * Costume depends on the 'spindoor' story variable (progression check).
   */
  *whenIReceiveJaneBattle() {
    this.costume = "costume6"; // Base battle costume
    // Progression check: update appearance if spin-door tasks are done
    if (this.toNumber(this.stage.vars.spindoor) === 1) {
      this.costume = "costume7"; 
    }
    if (this.toNumber(this.stage.vars.spindoor) === 2) {
      this.costume = "costume11";
    }
    yield* this.glide(0.5, -135, 20); // Position player on the left of the screen for battle
  }

  /**
   * Initial game reset: set starting health and equipment.
   */
  *whenGreenFlagClicked() {
    this.stage.vars.hp = 1; // Start with minimum health (scripted beginning)
    this.stage.vars.thornDagger = 0; // Ensure equipment is reset
    this.visible = false; // Keep hidden for intro
  }

  /**
   * Trigger the Joshua broadcast when the game officially starts.
   */
  *whenIReceiveStart() {
    this.broadcast("Joshua");
  }

  /**
   * Momentarily change to costume 5 during Jone encounter.
   */
  *whenIReceiveJone2() {
    for (let i = 0; i < 10; i++) {
      this.costume = "costume5"; // Flicker or hold special pose
      yield;
    }
  }

  /**
   * Revert to idle pose after Jone is defeated.
   */
  *whenIReceiveJoneDefeat() {
    this.costume = "costume1";
  }

  /**
   * Walk backward slightly as Jone opens the door.
   */
  *whenIReceiveJoneOpenDoor() {
    this.move(-40); // Move away from the opening door
  }

  /**
   * Walk backward slightly for a door status check.
   */
  *whenIReceiveDoorCheck() {
    this.move(-20);
  }

  /**
   * Transition player to Room 6 coordinate space.
   */
  *whenIReceiveRoom6() {
    this.goto(-195, -80); // Specific entrance for this room
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop6";
  }

  /**
   * Transition player to Room 7 coordinate space.
   */
  *whenIReceiveRoom7() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop7";
  }

  /**
   * Transition player to Room 8 coordinate space.
   */
  *whenIReceiveRoom8() {
    this.goto(-195, -35);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop8";
  }

  /**
   * Handle entering a 'Dark Room' scenario.
   */
  *whenIReceiveDarkRoom() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop9"; // Apply dark backdrop
  }

  /**
   * Set player battle stance for a door-centric fight.
   * Checks equipment progression (spindoor).
   */
  *whenIReceiveDoorFight() {
    this.costume = "costume6"; // Battle idle
    // Advanced equipment checks
    if (this.toNumber(this.stage.vars.spindoor) === 1) {
      this.costume = "costume7";
    }
    if (this.toNumber(this.stage.vars.spindoor) === 2) {
      this.costume = "costume11";
    }
    yield* this.glide(0.5, -135, 20);
  }

  /**
   * Shop interface transition.
   * Scales the player down to fit the shop counter/scene.
   */
  *whenIReceiveShop() {
    this.goto(-195, 0); // West entrance
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop10";
  }

  /**
   * Cutscene: Player moves backward when 'Man' approached.
   */
  *whenIReceiveManComeUp() {
    this.move(-50);
  }

  /**
   * Transition player to Room 9.
   */
  *whenIReceiveRoom9() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop11";
  }

  /**
   * Duplicate trigger for door fight (legacy/backup).
   * Resets danger point.
   */
  *whenIReceiveDoorFight2() {
    this.stage.vars.dangerPoint = 0;
  }

  /**
   * Alternate Jone encounter trigger.
   * Resets danger point.
   */
  *whenIReceiveJone3() {
    this.stage.vars.dangerPoint = 0;
  }

  /**
   * Transition player to Room 10.
   */
  *whenIReceiveRoom10() {
    this.goto(-195, -15);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop12";
  }

  /**
   * Transition player to Room 11.
   */
  *whenIReceiveRoom11() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop11";
  }

  /**
   * Transition player to Room 12.
   */
  *whenIReceiveRoom12() {
    this.goto(-195, -35);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop13";
  }

  /**
   * Cutscene: Player looks up during Anemone interaction.
   * Player glides towards the center.
   */
  *whenIReceiveAnemone() {
    yield* this.wait(0.5);
    this.costume = "costume5";
    yield* this.glide(0.5, -50, 0);
  }

  /**
   * Amber fight transition.
   * Sets specific coordinates and costume for the Amber boss battle.
   */
  *whenIReceiveAmberFight() {
    this.costume = "costume6";
    if (this.toNumber(this.stage.vars.spindoor) === 1) {
      this.costume = "costume7";
    }
    if (this.toNumber(this.stage.vars.spindoor) === 2) {
      this.costume = "costume11";
    }
    yield* this.glide(0.5, -135, 20);
  }

  /**
   * Cutscene: Player looks down during fourth wall break.
   */
  *whenIReceiveFourthWallBreak() {
    this.costume = "costume8";
    yield* this.wait(1);
    this.stage.vars.speed = 4;
  }

  /**
   * Idle state after Amber becomes tired.
   * Player obtains the thorn dagger.
   */
  *whenIReceiveAmberTired() {
    this.stage.vars.thornDagger = 1;
  }

  /**
   * Transition player to Room 13.
   */
  *whenIReceiveRoom13() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop14";
  }

  /**
   * Cutscene movement for Jimmy encounter.
   */
  *whenIReceiveJimmyCutscene() {
    this.costume = "costume1";
    yield* this.glide(1, -60, 0);
  }

  /**
   * Transition player to Room 14.
   */
  *whenIReceiveRoom14() {
    this.goto(-195, -35);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop15";
  }

  /**
   * Transition player to Room 15.
   */
  *whenIReceiveRoom15() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop16";
  }

  /**
   * Transition player to Room 16.
   * Player enters a maze/dark area.
   */
  *whenIReceiveRoom16() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop17";
    this.stage.vars.speed = 0; // Freeze player for cutscene
    yield* this.wait(3);
    this.stage.vars.maze = 1; // Enable maze logic
    this.stage.vars.speed = 4; // Restore speed
    this.broadcast("Lights out");
    for (let i = 0; i < 8; i++) {
      this.goto(0, 0); // Keep centered during transition
      yield;
    }
  }

  /**
   * Reset maze state on green flag.
   */
  *whenGreenFlagClicked2() {
    this.stage.vars.maze = 0;
  }

  /**
   * Check if player has completed the maze by touching the exit color.
   */
  *whenIReceiveDoneCheck() {
    if (this.touching(Color.rgb(42, 169, 101))) {
      this.stage.vars.maze = 0;
      this.broadcast("Lights on");
    }
  }

  /**
   * Transition player to Room 17.
   */
  *whenIReceiveRoom17() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop19";
  }

  /**
   * Cutscene: Player glides into Foe encounter.
   */
  *whenIReceiveFoeCutscene() {
    yield* this.glide(0.2, 50, -15);
  }

  /**
   * Thrasher battle transition.
   * Standard boss positioning and equipment checks.
   */
  *whenIReceiveThrasherBattle() {
    this.costume = "costume6";
    if (this.toNumber(this.stage.vars.spindoor) === 1) {
      this.costume = "costume7";
    }
    if (this.toNumber(this.stage.vars.spindoor) === 2) {
      this.costume = "costume11";
    }
    yield* this.glide(0.5, -135, 20);
  }

  /**
   * Revert to idle after Foe encounter ends.
   */
  *whenIReceiveFoeEnd() {
    this.costume = "costume1";
  }

  /**
   * Transition player to Room 18.
   */
  *whenIReceiveRoom18() {
    this.goto(-195, -35);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop16";
  }

  /**
   * Transition player to Room 19.
   */
  *whenIReceiveRoom19() {
    this.goto(-195, -35);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop20";
  }

  /**
   * Cutscene: Jimmy petty behavior movement.
   */
  *whenIReceiveJimmyPetty() {
    this.costume = "costume5";
    yield* this.glide(0.2, -195, -35);
  }

  /**
   * Relay start event if save data is present.
   */
  *whenIReceiveStartWithSaveTho() {
    this.broadcast("Joshua");
  }

  /**
   * Jimmy boss fight transition.
   */
  *whenIReceiveJimmyFight() {
    this.costume = "costume6";
    if (this.toNumber(this.stage.vars.spindoor) === 1) {
      this.costume = "costume7";
    }
    if (this.toNumber(this.stage.vars.spindoor) === 2) {
      this.costume = "costume11";
    }
    yield* this.glide(0.5, -135, 20);
  }

  /**
   * Scripted sequence: Jimmy dies.
   */
  *whenIReceiveJimmyDies() {
    this.costume = "costume9";
  }

  /**
   * Setup for the first half of the 'Final Room' sequence.
   */
  *whenIReceiveFinalRoom() {
    this.stage.costume = "backdrop40";
    this.goto(0, -189);
    for (let i = 0; i < 3; i++) {
      this.costume = "costume3"; // Face up
      yield;
    }
    yield* this.glide(5, 0, -90); // Slow walk up
    this.costume = "costume3";
  }

  /**
   * Cutscene: Player glides forward into the final room.
   */
  *whenIReceiveSlitherInGetIt() {
    this.costume = "costume5";
  }

  /**
   * Transition: Player looks up after transform.
   */
  *whenIReceiveTransform() {
    yield* this.wait(1);
    this.costume = "costume3";
  }

  /**
   * Setup for the second half of the 'Final Room' sequence.
   */
  *whenIReceiveFinalRoom2() {
    this.costume = "costume3";
    this.stage.costume = "backdrop22";
  }

  /**
   * Special effect costume for 'Flash White' event.
   */
  *whenIReceiveFlashWhite3() {
    this.goto(0, -140);
  }

  /**
   * Special pose for 'Mawege' event.
   */
  *whenIReceiveMawege() {
    this.costume = "costume10";
    this.goto(-240, -15);
    yield* this.glide(10, -80, -15);
    this.visible = true;
  }

  /**
   * Glide movement when 'Other Man' appears.
   */
  *whenIReceiveOtherManComeUp() {
    this.move(-30);
  }

  /**
   * Revert to facing up after special effects.
   */
  *whenIReceiveBack2Normal3() {
    this.stage.costume = "backdrop10";
  }

  /**
   * Transition player to Room 20.
   */
  *whenIReceiveRoom20() {
    this.goto(-195, -15);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop24";
  }

  /**
   * Final room cutscene movement logic.
   */
  *whenIReceiveRideAcross() {
    yield* this.glide(0.5, -87, 11);
    yield* this.wait(1);
    yield* this.glide(5, 69, 11);
    yield* this.glide(1, 150, 11);
    this.stage.vars.speed = 4;
  }

  /**
   * Reposition player for 'Ride on Back' of an NPC/Object.
   */
  *whenIReceiveRideOnBack() {
    yield* this.glide(0.5, 69, 11);
    yield* this.wait(1);
    yield* this.glide(5, -87, 11);
    yield* this.glide(1, -137, 40);
    this.stage.vars.speed = 4;
  }

  /**
   * Transition player to Room 21.
   */
  *whenIReceiveRoom21() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop25";
  }

  /**
   * Cutscene: Player moves backward during Shadow Zork dialogue.
   */
  *whenIReceiveShadowZorkTalk() {
    this.move(-50);
  }

  /**
   * Shadow Zork battle transition.
   */
  *whenIReceiveShadowZorkFight() {
    this.costume = "costume6";
    if (this.toNumber(this.stage.vars.spindoor) === 1) {
      this.costume = "costume7";
    }
    if (this.toNumber(this.stage.vars.spindoor) === 2) {
      this.costume = "costume11";
    }
    yield* this.glide(0.5, -135, 20);
  }

  /**
   * Transition player to Room 22.
   */
  *whenIReceiveRoom22() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop26";
  }

  /**
   * Transition player to Room 23.
   */
  *whenIReceiveRoom23() {
    this.goto(-195, -15);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop27";
  }

  /**
   * Shop interface transition variant 2.
   */
  *whenIReceiveShop2() {
    this.direction = 90;
  }

  /**
   * Transition player to Room 24.
   */
  *whenIReceiveRoom24() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop25";
  }

  /**
   * Shadow Jone battle transition.
   */
  *whenIReceiveShadowJoneFight() {
    this.costume = "costume6";
    if (this.toNumber(this.stage.vars.spindoor) === 1) {
      this.costume = "costume7";
    }
    if (this.toNumber(this.stage.vars.spindoor) === 2) {
      this.costume = "costume11";
    }
    yield* this.glide(0.5, -135, 20);
  }

  *whenIReceiveRoom25() {
    this.goto(-215, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop28";
    this.stage.vars.bigRoom = 1;
  }

  *whenGreenFlagClicked3() {
    this.stage.vars.bigRoom = 0;
  }

  *whenIReceiveRoom26() {
    this.goto(-195, -15);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop29";
  }

  *whenIReceiveRoom27() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop25";
  }

  *whenIReceiveShop3() {
    this.stage.vars.bigRoom = 0;
  }

  *whenIReceiveShadowFight() {
    this.costume = "costume6";
    if (this.toNumber(this.stage.vars.spindoor) === 1) {
      this.costume = "costume7";
    }
    if (this.toNumber(this.stage.vars.spindoor) === 2) {
      this.costume = "costume11";
    }
    yield* this.glide(0.5, -135, 20);
  }

  *whenIReceiveShadowJoneDead() {
    this.costume = "costume1";
  }

  *whenIReceiveGoopleyTalkAboutDoor() {
    this.move(-50);
  }

  /**
   * Handle player clicking: If punchcard is active, trigger speed and turn updates.
   */
  *whenthisspriteclicked() {
    if (this.toNumber(this.stage.vars.punchcard) === 1) {
      this.stage.vars.speed = 4;
      this.broadcast("Punchcard");
      if (this.toNumber(this.stage.vars.inBattle) === 1) {
        this.broadcast("Ur turn");
      }
    }
  }

  /**
   * Reset punchcard state on green flag.
   */
  *whenGreenFlagClicked4() {
    this.stage.vars.punchcard = 0;
  }

  /**
   * Transition player to Room 28.
   */
  *whenIReceiveRoom28() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop30";
  }

  /**
   * Generic 'Various' battle transition.
   */
  *whenIReceiveVariousBattle() {
    this.costume = "costume6";
    if (this.toNumber(this.stage.vars.spindoor) === 1) {
      this.costume = "costume7";
    }
    if (this.toNumber(this.stage.vars.spindoor) === 2) {
      this.costume = "costume11";
    }
    yield* this.glide(0.5, -135, 20);
  }

  /**
   * Transition player to Room 29.
   */
  *whenIReceiveRoom29() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop31";
  }

  /**
   * Transition player to Room 30.
   */
  *whenIReceiveRoom30() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop32";
  }

  /**
   * Transition player to Room 31.
   */
  /**
   * Room 31: Normal transition.
   */
  *whenIReceiveRoom31() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop33";
  }

  /**
   * Transition player to Room 32.
   */
  *whenIReceiveRoom32() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop34";
  }

  *whenIReceiveDarkRoom2() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop35";
  }

  /**
   * Initiate shadow battle with Doordevil.
   */
  *whenIReceiveDoordevilShadowFight() {
    this.costume = "costume6";
    if (this.toNumber(this.stage.vars.spindoor) === 1) {
      this.costume = "costume7";
    }
    if (this.toNumber(this.stage.vars.spindoor) === 2) {
      this.costume = "costume11";
    }
    yield* this.glide(0.5, -135, 20);
  }

  *whenIReceiveDoordevilDiesLmao() {
    this.costume = "costume1";
  }

  /**
   * Room 33: Normal transition.
   */
  *whenIReceiveRoom33() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop36";
  }

  /**
   * Room 34: Normal transition.
   */
  *whenIReceiveRoom34() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop37";
  }

  *whenIReceiveBoopleyFight() {
    this.costume = "costume6";
    if (this.toNumber(this.stage.vars.spindoor) === 1) {
      this.costume = "costume7";
    }
    if (this.toNumber(this.stage.vars.spindoor) === 2) {
      this.costume = "costume11";
    }
    yield* this.glide(0.5, -135, 20);
  }

  *whenIReceiveRoom35() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop38";
  }

  *whenIReceiveRoom36() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop39";
  }

  *whenIReceiveGoopleyBetrayl() {
    this.goto(-110, -15);
  }

  *whenIReceiveGaryFight() {
    this.costume = "costume6";
    if (this.toNumber(this.stage.vars.spindoor) === 1) {
      this.costume = "costume7";
    }
    if (this.toNumber(this.stage.vars.spindoor) === 2) {
      this.costume = "costume11";
    }
    yield* this.glide(0.5, -135, 20);
  }

  *whenIReceiveGaryDead() {
    this.costume = "costume1";
  }

  /**
   * Final room trigger (before room 37 sequence).
   */
  *whenIReceiveFinalRoom3() {
    this.stage.costume = "backdrop40";
    this.goto(0, -189);
    for (let i = 0; i < 3; i++) {
      this.costume = "costume3";
      yield;
    }
    yield* this.glide(5, 0, -90);
    this.costume = "costume3";
  }

  *whenIReceiveRoom37() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop41";
  }

  *whenIReceiveHandHopDown() {
    for (let i = 0; i < 10; i++) {
      this.costume = "costume5";
      yield;
    }
  }

  *whenIReceiveHandHopDown2() {
    yield* this.glide(0.2, -66, -35);
  }

  *whenIReceivePlantBattle() {
    this.costume = "costume6";
    if (this.toNumber(this.stage.vars.spindoor) === 1) {
      this.costume = "costume7";
    }
    if (this.toNumber(this.stage.vars.spindoor) === 2) {
      this.costume = "costume11";
    }
    yield* this.glide(0.5, -135, 20);
  }

  *whenIReceiveAbattoeend() {
    this.costume = "costume1";
  }

  *whenIReceiveRoom38() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop42";
  }

  /**
   * Background monitor for room boundary enforcement in backdrops 42-45.
   */
  *whenGreenFlagClicked5() {
    while (true) {
      if (
        this.stage.costumeNumber === 42 ||
        this.stage.costumeNumber === 43 ||
        this.stage.costumeNumber === 44 ||
        this.stage.costumeNumber === 45
      ) {
        if (this.compare(this.y, -5) < 0) {
          this.y = -5;
        }
        if (this.compare(36, this.y) < 0) {
          this.y = 36;
        }
      }
      yield;
    }
  }

  *whenIReceiveGauntletStart() {
    yield* this.startSound("pop");
    this.goto(-195, 0);
  }

  *whenIReceiveRoom39() {
    this.goto(-195, -15);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop43";
  }

  *whenIReceiveRoom40() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop44";
  }

  *whenIReceiveRoom41() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop45";
  }

  *whenIReceiveRoom42() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop46";
  }

  *whenIReceiveRoom43() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop47";
  }

  *whenIReceiveJohnPixelFight() {
    this.costume = "costume6";
    if (this.toNumber(this.stage.vars.spindoor) === 1) {
      this.costume = "costume7";
    }
    if (this.toNumber(this.stage.vars.spindoor) === 2) {
      this.costume = "costume11";
    }
    yield* this.glide(0.5, -135, 20);
  }

  *whenIReceiveDown2() {
    if (this.stage.costumeNumber === 47) {
      this.direction = 180;
    }
  }

  *whenIReceiveUp2() {
    if (this.stage.costumeNumber === 47) {
      this.direction = 0;
    }
  }

  *whenIReceiveRight2() {
    if (this.stage.costumeNumber === 47) {
      this.direction = 90;
    }
  }

  *whenIReceiveLeft2() {
    if (this.stage.costumeNumber === 47) {
      this.direction = -90;
    }
  }

  *whenIReceiveRoom44() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop48";
  }

  *whenIReceiveRoom45() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop49";
  }

  *whenIReceiveRoom46() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop50";
  }

  *whenIReceiveCarpetFight() {
    this.costume = "costume6";
    if (this.toNumber(this.stage.vars.spindoor) === 1) {
      this.costume = "costume7";
    }
    if (this.toNumber(this.stage.vars.spindoor) === 2) {
      this.costume = "costume11";
    }
    yield* this.glide(0.5, -135, 20);
  }

  *whenIReceiveRoom47() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop51";
  }

  *whenIReceiveRoom48() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop52";
  }

  *whenIReceiveSansFight() {
    this.costume = "costume6";
    if (this.toNumber(this.stage.vars.spindoor) === 1) {
      this.costume = "costume7";
    }
    if (this.toNumber(this.stage.vars.spindoor) === 2) {
      this.costume = "costume11";
    }
    yield* this.glide(0.5, -135, 20);
  }

  *whenIReceiveRoom49() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop53";
  }

  *whenIReceiveFobertFight() {
    this.costume = "costume6";
    if (this.toNumber(this.stage.vars.spindoor) === 1) {
      this.costume = "costume7";
    }
    if (this.toNumber(this.stage.vars.spindoor) === 2) {
      this.costume = "costume11";
    }
    yield* this.glide(0.5, -135, 20);
  }

  *whenIReceiveRoom50() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop54";
  }

  *whenIReceiveSillyBillySpeaks() {
    yield* this.glide(0.3, 0, 0);
  }

  *whenIReceiveSbtumpatnsajThreat() {
    yield* this.wait(1.3);
    this.costume = "costume12";
  }

  *whenIReceive5111y8111yF19ht() {
    this.costume = "costume6";
    if (this.toNumber(this.stage.vars.spindoor) === 1) {
      this.costume = "costume7";
    }
    if (this.toNumber(this.stage.vars.spindoor) === 2) {
      this.costume = "costume11";
    }
    yield* this.glide(0.5, -135, 20);
  }

  *whenIReceiveRoom51() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop55";
    this.stage.vars.bigRoom = 1;
  }

  *whenIReceiveYouRestartMaze() {
    this.goto(-225, 0);
  }

  *whenIReceiveRoom52() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop57";
  }

  /**
   * Core Player movement logic loop - handles both arrow keys and Virtual Joystick.
   */
  *whenIReceiveJoshua() {
    this.goto(-195, 0);
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
    this.costume = "costume1";
    this.moveAhead();
    this.visible = true;
    while (true) {
      if (!(this.toNumber(this.stage.vars.speed) === 0)) {
        if (this.toNumber(this.stage.vars.inBattle) === 0) {
          // Input Handling Part 1: Keyboard
          if (this.toNumber(this.stage.vars.arrowKeys) === 1) {
            if (this.keyPressed("right arrow")) {
              this.direction = 90;
              this.broadcast("Right");
              if (this.toNumber(this.stage.vars.bigRoom) === 1) {
                this.move(2);
              } else {
                this.move(3);
              }
            }
            if (this.keyPressed("left arrow")) {
              this.direction = -90;
              this.broadcast("Left");
              if (this.toNumber(this.stage.vars.bigRoom) === 1) {
                this.move(2);
              } else {
                this.move(3);
              }
            }
            if (this.keyPressed("up arrow")) {
              this.direction = 0;
              this.broadcast("Up");
              if (this.toNumber(this.stage.vars.bigRoom) === 1) {
                this.move(2);
              } else {
                this.move(3);
              }
            }
            if (this.keyPressed("down arrow")) {
              this.broadcast("Down");
              this.direction = 180;
              if (this.toNumber(this.stage.vars.bigRoom) === 1) {
                this.move(2);
              } else {
                this.move(3);
              }
            }
          } else {
            // Input Handling Part 2: Virtal Joystick
            if (this.toNumber(this.stage.vars.joystickMoving) === 1) {
              if (!(this.stage.costumeNumber === 47)) {
                this.direction = this.sprites["Joystick"].direction;
              }
              if (this.toNumber(this.stage.vars.maze) === 0) {
                if (this.toNumber(this.stage.vars.bigRoom) === 1) {
                  this.move(2);
                } else {
                  this.move(this.toNumber(this.stage.vars.speed));
                }
              }
            }
          }
        }
        // Visual Scaling: Resize player when in a 'bigRoom' context.
        if (this.toNumber(this.stage.vars.bigRoom) === 1) {
          this.size = 50;
        } else {
          this.size = 100;
        }
        // Collision Checks with obstacles and boundaries.
        if (this.toNumber(this.stage.vars.dev_noClip) === 0) {
          if (this.toNumber(this.stage.vars.joystickMoving) === 1) {
            if (this.toNumber(this.stage.vars.speed) === 4) {
              if (this.touching(this.sprites["Sprite136"].andClones())) {
                this.move(-20);
              }
            }
          }
          if (this.touching(this.sprites["Sprite39"].andClones())) {
            this.y += 20;
            if (this.touching("edge")) {
              this.x -= 80;
            }
          }
          if (this.touching(this.sprites["Sprite40"].andClones())) {
            this.x -= 20;
          }
          if (this.touching(this.sprites["Sprite65"].andClones())) {
            yield* this.wait(0);
            this.x -= 20;
          }
          if (this.touching(this.sprites["Sprite214"].andClones())) {
            this.x -= 5;
          }
        }
      }
      yield;
    }
  }

  /**
   * Chapter 2 start trigger.
   */
  *whenIReceiveStartChapter2() {
    this.broadcast("Joshua");
  }

  /**
   * Chapter 3 start trigger.
   */
  *whenIReceiveStartChapter3() {
    this.broadcast("Joshua");
  }

  /**
   * Reset arrowKeys state on green flag.
   */
  *whenGreenFlagClicked6() {
    this.stage.vars.arrowKeys = 0;
  }

  *whenIReceiveRoom53() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop56";
  }

  *whenIReceiveRoom666() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop58";
  }

  *whenIReceiveRoom54() {
    this.goto(-195, 0);
    this.costume = "costume1";
    this.direction = 90;
    this.stage.costume = "backdrop59";
  }

  *whenIReceiveFinalFinalFinalBossSpeech() {
    this.costume = "costume1";
    yield* this.glide(0.5, -135, -15);
  }

  *whenIReceiveFinalFinalFinalBossSpeech2() {
    this.costume = "costume12";
  }

  /**
   * Trigger the 1000th final fight (Chapter 3 climax).
   */
  *whenIReceive1000FinalFightNow() {
    this.costume = "costume6";
    if (this.toNumber(this.stage.vars.spindoor) === 1) {
      this.costume = "costume7";
    }
    if (this.toNumber(this.stage.vars.spindoor) === 2) {
      this.costume = "costume11";
    }
    yield* this.glide(0.5, -135, 0);
  }

  *whenIReceiveTheRealFinalRoom() {
    this.stage.costume = "backdrop40";
    this.goto(0, -189);
    for (let i = 0; i < 3; i++) {
      this.stage.vars.speed = 0;
      this.costume = "costume3";
      yield;
    }
    yield* this.glide(5, 0, -90);
    this.costume = "costume3";
  }

  *whenIReceiveTowerDissesAPear() {
    this.visible = false;
  }
}
