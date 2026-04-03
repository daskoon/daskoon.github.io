import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop2", "./Stage/costumes/backdrop2.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop3", "./Stage/costumes/backdrop3.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop4", "./Stage/costumes/backdrop4.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop5", "./Stage/costumes/backdrop5.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop10", "./Stage/costumes/backdrop10.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop6", "./Stage/costumes/backdrop6.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop7", "./Stage/costumes/backdrop7.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop8", "./Stage/costumes/backdrop8.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop9", "./Stage/costumes/backdrop9.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop11", "./Stage/costumes/backdrop11.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop12", "./Stage/costumes/backdrop12.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop13", "./Stage/costumes/backdrop13.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop14", "./Stage/costumes/backdrop14.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop15", "./Stage/costumes/backdrop15.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop16", "./Stage/costumes/backdrop16.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop17", "./Stage/costumes/backdrop17.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop18", "./Stage/costumes/backdrop18.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop19", "./Stage/costumes/backdrop19.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop20", "./Stage/costumes/backdrop20.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop21", "./Stage/costumes/backdrop21.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop22", "./Stage/costumes/backdrop22.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop23", "./Stage/costumes/backdrop23.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop24", "./Stage/costumes/backdrop24.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop25", "./Stage/costumes/backdrop25.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop26", "./Stage/costumes/backdrop26.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop27", "./Stage/costumes/backdrop27.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop28", "./Stage/costumes/backdrop28.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop29", "./Stage/costumes/backdrop29.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop30", "./Stage/costumes/backdrop30.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop31", "./Stage/costumes/backdrop31.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop32", "./Stage/costumes/backdrop32.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop33", "./Stage/costumes/backdrop33.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop34", "./Stage/costumes/backdrop34.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop35", "./Stage/costumes/backdrop35.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop36", "./Stage/costumes/backdrop36.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop37", "./Stage/costumes/backdrop37.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop38", "./Stage/costumes/backdrop38.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop39", "./Stage/costumes/backdrop39.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop40", "./Stage/costumes/backdrop40.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop41", "./Stage/costumes/backdrop41.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop42", "./Stage/costumes/backdrop42.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop43", "./Stage/costumes/backdrop43.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop44", "./Stage/costumes/backdrop44.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop45", "./Stage/costumes/backdrop45.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop46", "./Stage/costumes/backdrop46.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop47", "./Stage/costumes/backdrop47.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop48", "./Stage/costumes/backdrop48.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop49", "./Stage/costumes/backdrop49.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop50", "./Stage/costumes/backdrop50.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop51", "./Stage/costumes/backdrop51.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop52", "./Stage/costumes/backdrop52.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop53", "./Stage/costumes/backdrop53.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop54", "./Stage/costumes/backdrop54.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop55", "./Stage/costumes/backdrop55.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop56", "./Stage/costumes/backdrop56.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop57", "./Stage/costumes/backdrop57.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop58", "./Stage/costumes/backdrop58.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop59", "./Stage/costumes/backdrop59.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop60", "./Stage/costumes/backdrop60.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop61", "./Stage/costumes/backdrop61.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop62", "./Stage/costumes/backdrop62.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop63", "./Stage/costumes/backdrop63.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop64", "./Stage/costumes/backdrop64.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop65", "./Stage/costumes/backdrop65.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop66", "./Stage/costumes/backdrop66.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop67", "./Stage/costumes/backdrop67.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop68", "./Stage/costumes/backdrop68.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop69", "./Stage/costumes/backdrop69.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop70", "./Stage/costumes/backdrop70.png", {
        x: 480,
        y: 360,
      }),
      new Costume("backdrop71", "./Stage/costumes/backdrop71.png", {
        x: 480,
        y: 360,
      }),
    ];

    this.sounds = [
      new Sound("Tower", "./Stage/sounds/Tower.wav"),
      new Sound("Tower 2", "./Stage/sounds/Tower 2.wav"),
      new Sound("Tower 3", "./Stage/sounds/Tower 3.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "Jone" }, this.whenIReceiveJone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jone party" },
        this.whenIReceiveJoneParty
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Dark room" },
        this.whenIReceiveDarkRoom
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.dev_trainerLoop),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Anemone" },
        this.whenIReceiveAnemone
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jimmy cutscene" },
        this.whenIReceiveJimmyCutscene
      ),
      new Trigger(Trigger.BROADCAST, { name: "Oh." }, this.whenIReceiveOh),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Amber tired" },
        this.whenIReceiveAmberTired
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jimothy" },
        this.whenIReceiveJimothy
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "White board" },
        this.whenIReceiveWhiteBoard
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room14" },
        this.whenIReceiveRoom14
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Done foe" },
        this.whenIReceiveDoneFoe
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room15" },
        this.whenIReceiveRoom15
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Lights out" },
        this.whenIReceiveLightsOut
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Lights out" },
        this.whenIReceiveLightsOut2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Foe cutscene" },
        this.whenIReceiveFoeCutscene
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Lights on" },
        this.whenIReceiveLightsOn
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jimmy petty" },
        this.whenIReceiveJimmyPetty
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jimmy fight" },
        this.whenIReceiveJimmyFight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Rumble" },
        this.whenIReceiveRumble
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
        { name: "Final room." },
        this.whenIReceiveFinalRoom3
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Chapter 1 title" },
        this.whenIReceiveChapter1Title
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Chapter 2 title" },
        this.whenIReceiveChapter2Title
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Mawege" },
        this.whenIReceiveMawege
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Back 2 normal :3" },
        this.whenIReceiveBack2Normal3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Mawege" },
        this.whenIReceiveMawege2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room20" },
        this.whenIReceiveRoom20
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room21" },
        this.whenIReceiveRoom21
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room23" },
        this.whenIReceiveRoom23
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Shadow fight" },
        this.whenIReceiveShadowFight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Various battle" },
        this.whenIReceiveVariousBattle
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Various guys dead" },
        this.whenIReceiveVariousGuysDead
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Bop it!" },
        this.whenIReceiveBopIt
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Bop it? Nah stop it" },
        this.whenIReceiveBopItNahStopIt
      ),
      new Trigger(Trigger.BROADCAST, { name: "Shop" }, this.whenIReceiveShop),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room27" },
        this.whenIReceiveRoom27
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Dark room2" },
        this.whenIReceiveDarkRoom2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room32" },
        this.whenIReceiveRoom32
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Goopley is gonna leave." },
        this.whenIReceiveGoopleyIsGonnaLeave
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room35" },
        this.whenIReceiveRoom35
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Final Room2" },
        this.whenIReceiveFinalRoom4
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Chapter 3 title" },
        this.whenIReceiveChapter3Title
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Hand hop down" },
        this.whenIReceiveHandHopDown
      ),
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
        { name: "Room41" },
        this.whenIReceiveRoom41
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room42" },
        this.whenIReceiveRoom42
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room45" },
        this.whenIReceiveRoom45
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "sans. cutscene" },
        this.whenIReceiveSansCutscene
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room43" },
        this.whenIReceiveRoom43
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Fobert fall" },
        this.whenIReceiveFobertFall
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room49" },
        this.whenIReceiveRoom49
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room666" },
        this.whenIReceiveRoom666
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room50" },
        this.whenIReceiveRoom50
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room53" },
        this.whenIReceiveRoom53
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "THE REAL FINAL ROOM" },
        this.whenIReceiveTheRealFinalRoom
      ),
    ];

    this.audioEffects.volume = 50;

    this.vars.voice = 1;
    this.vars.joystickMoving = 0;
    this.vars.joyX = -169;
    this.vars.joyY = -114;
    this.vars.speed = 4;
    this.vars.buttonsPressed = 0;
    this.vars.zorkParty = 0;
    this.vars.inBattle = 0;
    this.vars.hp = 1;
    this.vars.iFrames = 0;
    this.vars.grilledCheese = 1;
    this.vars.youGoingToHit = 0;
    this.vars.turn = 1;
    this.vars.jone = 0;
    this.vars.battle = 0;
    this.vars.zorkGoingToHit = 0;
    this.vars.enemyHp = 0;
    this.vars.zorkBehind = 0;
    this.vars.timer = 0;
    this.vars.myVariable = 4.3951474937065305;
    this.vars.myVariableY = 1.2114318940949358;
    this.vars.changeColor = 1;
    this.vars.joneGoingToAttack = 0;
    this.vars.spins = 12;
    this.vars.spindoor = 0;
    this.vars._ = 30;
    this.vars.yunuchi = 30;
    this.vars.dangerPoint = 0;
    this.vars.proposition = 0;
    this.vars.shopped = 0;
    this.vars.crackleWhip = 0;
    this.vars.active = 0;
    this.vars.line = -50;
    this.vars.thornDagger = 0;
    this.vars.head = "Fighter";
    this.vars.body = "Fighter";
    this.vars.legs = "Fighter";
    this.vars.married = 0;
    this.vars.maze = 0;
    this.vars.youchingReeegn = 0;
    this.vars.amuletAvalible = 0;
    this.vars.shop = 0;
    this.vars.blue = 0;
    this.vars.numberOn = 20;
    this.vars.done = 0;
    this.vars.snakeHp = 4547;
    this.vars.turn2 = 1;
    this.vars.moneymaker = 0;
    this.vars.armor = 0;
    this.vars.nohit = 0;
    this.vars.chapter = 3;
    this.vars.marrying = 0;
    this.vars.extraMarried = 0;
    this.vars.popipo = 0;
    this.vars.bigRoom = 0;
    this.vars.punchcard = 0;
    this.vars.goopley = 0;
    this.vars.goopleyGoingToAttack = 0;
    this.vars.randomBops = 1;
    this.vars.timeLeftUntilYouGetBoppedYourself = 5;
    this.vars.streak = 20;
    this.vars.shakey = 0;
    this.vars.attackssss = 0;
    this.vars.vampireKnife = 0;
    this.vars.batter = 0;
    this.vars.burntPan = 0;
    this.vars.chapter3Variable5 = 0;
    this.vars.chapter3Variable6 = 0;
    this.vars.diedToSans = 0;
    this.vars.burntSlaps = 0;
    this.vars.talking = 0;
    this.vars.costume = 0;
    this.vars.voice2 = 0;
    this.vars.stage = 1;
    this.vars.mouth = 1.5;
    this.vars.whytextwhy = "It is i!!";
    this.vars.shutUpMode = 0;
    this.vars.showza = 1;
    this.vars.arrowKeys = 0;
    this.vars.copyAndPasteYourCode = ["2600010A320"];
    this.vars.passcode = [8, 4, 9, 5, 1, 6, 2, 6];
    this.vars.passcodeOfTheFriggenThingy = [2, 3, 1];
    
    // Dev Trainer Variables
    this.vars.dev_infHP = 0;
    this.vars.dev_infGold = 0;
    this.vars.dev_noClip = 0;
    this.vars.dev_aiActive = 0;
    this.vars.dev_speedMult = 1;

    this.watchers.hp = new Watcher({
      label: "HP",
      style: "normal",
      visible: false,
      value: () => this.vars.hp,
      x: 240,
      y: 180,
    });
    this.watchers.grilledCheese = new Watcher({
      label: "Grilled Cheese",
      style: "large",
      visible: false,
      value: () => this.vars.grilledCheese,
      x: 480,
      y: -13,
    });
    this.watchers.enemyHp = new Watcher({
      label: "Enemy HP",
      style: "large",
      visible: false,
      value: () => this.vars.enemyHp,
      x: 589,
      y: 63,
    });
    this.watchers.timer = new Watcher({
      label: "Timer",
      style: "normal",
      visible: false,
      value: () => this.vars.timer,
      x: 245,
      y: 145,
    });
    this.watchers._ = new Watcher({
      label: "$",
      style: "normal",
      visible: false,
      value: () => this.vars._,
      x: 240,
      y: 180,
    });
    this.watchers.snakeHp = new Watcher({
      label: "SNAKE HP",
      style: "large",
      visible: false,
      value: () => this.vars.snakeHp,
      x: 462,
      y: 180,
    });
    this.watchers.armor = new Watcher({
      label: "Armor",
      style: "large",
      visible: false,
      value: () => this.vars.armor,
      x: 449,
      y: -36,
    });
    this.watchers.timeLeftUntilYouGetBoppedYourself = new Watcher({
      label: "Time left until you get bopped yourself",
      style: "large",
      visible: false,
      value: () => this.vars.timeLeftUntilYouGetBoppedYourself,
      x: 452,
      y: 109,
    });
    this.watchers.attackssss = new Watcher({
      label: "Attackssss",
      style: "large",
      visible: false,
      value: () => this.vars.attackssss,
      x: 282,
      y: 70,
    });
    this.watchers.copyAndPasteYourCode = new Watcher({
      label: "Copy and Paste your code",
      style: "normal",
      visible: false,
      value: () => this.vars.copyAndPasteYourCode,
      x: 354,
      y: 38,
      width: 271,
      height: 90,
    });
  }

  *whenGreenFlagClicked() {
    this.costume = "backdrop1";
  }

  *whenGreenFlagClicked2() {
    this.audioEffects.volume = 50;
  }

  *whenIReceiveJone() {
    this.audioEffects.volume = 0;
  }

  *whenIReceiveJoneParty() {
    this.audioEffects.volume = 50;
  }

  *whenIReceiveDarkRoom() {
    this.audioEffects.volume = 0;
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.toNumber(this.vars.dev_infHP) === 1) {
        if (this.compare(this.vars.hp, 20) < 0) {
          this.vars.hp = 20; // Keep HP high
        }
      } else {
        if (this.compare(this.vars.hp, 1) < 0) {
          this.vars.hp = 0;
          if (this.toNumber(this.vars.battle) === 20) {
            this.vars.diedToSans++;
          }
          this.broadcast("Deeeeeeeaaaad");
          /* TODO: Implement stop all */ null;
        }
      }
      yield;
    }
  }

  *dev_trainerLoop() {
    while (true) {
      if (this.toNumber(this.vars.dev_infGold) === 1) {
        this.vars.yunuchi = 99999; // Keep Gold high
      }
      yield;
    }
  }

  *whenIReceiveAnemone() {
    this.audioEffects.volume = 0;
  }

  *whenIReceiveJimmyCutscene() {
    this.audioEffects.volume = 0;
  }

  *whenIReceiveOh() {
    this.audioEffects.volume = 50;
  }

  *whenIReceiveAmberTired() {
    this.audioEffects.volume = 50;
  }

  *whenIReceiveJimothy() {
    this.audioEffects.volume = 0;
  }

  *whenIReceiveWhiteBoard() {
    this.audioEffects.volume = 0;
  }

  *whenIReceiveRoom14() {
    this.audioEffects.volume = 0;
  }

  *whenIReceiveDoneFoe() {
    this.audioEffects.volume = 50;
  }

  *whenIReceiveRoom15() {
    this.audioEffects.volume = 50;
  }

  *whenIReceiveLightsOut() {
    this.audioEffects.volume = 0;
  }

  *whenIReceiveLightsOut2() {
    this.costume = "backdrop18";
  }

  *whenIReceiveFoeCutscene() {
    this.audioEffects.volume = 0;
  }

  *whenIReceiveLightsOn() {
    this.audioEffects.volume = 50;
  }

  *whenIReceiveJimmyPetty() {
    this.audioEffects.volume = 0;
  }

  *whenIReceiveJimmyFight() {
    this.effects.brightness = 0;
    while (true) {
      for (let i = 0; i < 20; i++) {
        this.effects.brightness -= 0.8;
        yield;
      }
      for (let i = 0; i < 20; i++) {
        this.effects.brightness += 0.8;
        yield;
      }
      yield;
    }
  }

  *whenIReceiveRumble() {
    for (let i = 0; i < 4; i++) {
      this.costume = "backdrop20";
      yield* this.wait(0.1);
      this.costume = "backdrop21";
      yield* this.wait(0.1);
      yield;
    }
    this.costume = "backdrop20";
  }

  *whenIReceiveJimmyDies() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.costume = "backdrop20";
    this.effects.brightness = 0;
    while (true) {
      if (this.compare(this.vars.hp, 1) < 0) {
        this.vars.hp = 0;
        /* TODO: Implement stop all */ null;
      }
      yield;
    }
  }

  *whenIReceiveFinalRoom() {
    this.audioEffects.volume = 0;
  }

  *whenIReceiveFinalRoom2() {
    this.effects.brightness = 10;
  }

  *whenIReceiveFlashWhite3() {
    this.effects.brightness = 20;
  }

  *whenIReceiveFinalRoom3() {
    this.audioEffects.volume = 0;
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.toNumber(this.vars.nohit) === 1) {
        this.vars.grilledCheese = 0;
      }
      yield;
    }
  }

  *whenIReceiveChapter1Title() {
    while (true) {
      yield* this.playSoundUntilDone("Tower");
      yield;
    }
  }

  *whenIReceiveChapter2Title() {
    while (true) {
      yield* this.playSoundUntilDone("Tower 2");
      yield;
    }
  }

  *whenIReceiveMawege() {
    this.audioEffects.volume = 0;
  }

  *whenIReceiveBack2Normal3() {
    this.audioEffects.volume = 50;
  }

  *whenIReceiveMawege2() {
    this.costume = "backdrop23";
  }

  *whenIReceiveRoom20() {
    this.audioEffects.volume = 0;
  }

  *whenIReceiveRoom21() {
    this.audioEffects.volume = 50;
  }

  *whenIReceiveRoom23() {
    this.audioEffects.volume = 0;
  }

  *whenIReceiveShadowFight() {
    this.audioEffects.volume = 0;
  }

  *whenIReceiveVariousBattle() {
    this.audioEffects.volume = 0;
  }

  *whenIReceiveVariousGuysDead() {
    this.audioEffects.volume = 50;
  }

  *whenIReceiveBopIt() {
    this.audioEffects.volume = 0;
  }

  *whenIReceiveBopItNahStopIt() {
    this.audioEffects.volume = 50;
  }

  *whenIReceiveShop() {
    this.audioEffects.volume = 50;
  }

  *whenIReceiveRoom27() {
    this.audioEffects.volume = 0;
  }

  *whenIReceiveDarkRoom2() {
    this.audioEffects.volume = 0;
  }

  *whenIReceiveRoom32() {
    this.audioEffects.volume = 50;
  }

  *whenIReceiveGoopleyIsGonnaLeave() {
    this.audioEffects.volume = 0;
  }

  *whenIReceiveRoom35() {
    this.audioEffects.volume = 0;
  }

  *whenIReceiveFinalRoom4() {
    this.effects.brightness = 10;
    while (true) {
      for (let i = 0; i < 100; i++) {
        this.effects.brightness -= 0.1;
        yield;
      }
      for (let i = 0; i < 100; i++) {
        this.effects.brightness += 0.1;
        yield;
      }
      yield;
    }
  }

  *whenIReceiveChapter3Title() {
    while (true) {
      yield* this.playSoundUntilDone("Tower 3");
      yield;
    }
  }

  *whenIReceiveHandHopDown() {
    this.audioEffects.volume = 0;
  }

  *whenIReceivePlantCut() {
    this.audioEffects.volume = 50;
  }

  *whenIReceiveRoom37() {
    this.audioEffects.volume = 0;
  }

  *whenIReceiveRoom41() {
    this.audioEffects.volume = 50;
  }

  *whenIReceiveRoom42() {
    this.audioEffects.volume = 0;
  }

  *whenIReceiveRoom45() {
    this.audioEffects.volume = 0;
  }

  *whenIReceiveSansCutscene() {
    this.audioEffects.volume = 0;
  }

  *whenIReceiveRoom43() {
    this.audioEffects.volume = 50;
  }

  *whenIReceiveFobertFall() {
    this.audioEffects.volume = 0;
  }

  *whenIReceiveRoom49() {
    this.audioEffects.volume = 0;
  }

  *whenIReceiveRoom666() {
    this.audioEffects.volume = 0;
  }

  *whenIReceiveRoom50() {
    this.audioEffects.volume = 50;
  }

  *whenIReceiveRoom53() {
    this.audioEffects.volume = 0;
  }

  *whenIReceiveTheRealFinalRoom() {
    this.audioEffects.volume = 0;
  }
}
