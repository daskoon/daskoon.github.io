import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class textboxinner extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("A", "./Sprite2/costumes/A.png", { x: 11, y: 18 }),
      new Costume("B", "./Sprite2/costumes/B.png", { x: 10, y: 21 }),
      new Costume("C", "./Sprite2/costumes/C.png", { x: 15, y: 19 }),
      new Costume("D", "./Sprite2/costumes/D.png", { x: 10, y: 22 }),
      new Costume("E", "./Sprite2/costumes/E.png", { x: 8, y: 22 }),
      new Costume("F", "./Sprite2/costumes/F.png", { x: 8, y: 22 }),
      new Costume("G", "./Sprite2/costumes/G.png", { x: 15, y: 19 }),
      new Costume("H", "./Sprite2/costumes/H.png", { x: 10, y: 18 }),
      new Costume("I", "./Sprite2/costumes/I.png", { x: 10, y: 21 }),
      new Costume("J", "./Sprite2/costumes/J.png", { x: 14, y: 22 }),
      new Costume("K", "./Sprite2/costumes/K.png", { x: 10, y: 20 }),
      new Costume("L", "./Sprite2/costumes/L.png", { x: 12, y: 19 }),
      new Costume("M", "./Sprite2/costumes/M.png", { x: 15, y: 23 }),
      new Costume("N", "./Sprite2/costumes/N.png", { x: 13, y: 21 }),
      new Costume("O", "./Sprite2/costumes/O.png", { x: 17, y: 21 }),
      new Costume("P", "./Sprite2/costumes/P.png", { x: 9, y: 21 }),
      new Costume("Q", "./Sprite2/costumes/Q.png", { x: 17, y: 19 }),
      new Costume("R", "./Sprite2/costumes/R.png", { x: 9, y: 19 }),
      new Costume("S", "./Sprite2/costumes/S.png", { x: 11, y: 21 }),
      new Costume("T", "./Sprite2/costumes/T.png", { x: 13, y: 19 }),
      new Costume("U", "./Sprite2/costumes/U.png", { x: 11, y: 17 }),
      new Costume("V", "./Sprite2/costumes/V.png", { x: 13, y: 18 }),
      new Costume("W", "./Sprite2/costumes/W.png", { x: 16, y: 20 }),
      new Costume("X", "./Sprite2/costumes/X.png", { x: 12, y: 18 }),
      new Costume("Y", "./Sprite2/costumes/Y.png", { x: 11, y: 17 }),
      new Costume("Z", "./Sprite2/costumes/Z.png", { x: 12, y: 18 }),
      new Costume(".", "./Sprite2/costumes/..png", { x: 1, y: -3 }),
      new Costume("!", "./Sprite2/costumes/!.png", { x: 1, y: 22 }),
      new Costume("question_mark", "./Sprite2/costumes/question_mark.png", {
        x: 5,
        y: 29,
      }),
      new Costume(",", "./Sprite2/costumes/,.png", { x: 5, y: -2 }),
      new Costume("Ã¢â‚¬â„¢", "./Sprite2/costumes/Ã¢â‚¬â„¢.png", {
        x: 5,
        y: 23,
      }),
      new Costume("'", "./Sprite2/costumes/'.png", { x: 5, y: 23 }),
      new Costume(" ", "./Sprite2/costumes/ .png", { x: 0, y: 0 }),
      new Costume("a", "./Sprite2/costumes/a.png", { x: 10, y: 9 }),
      new Costume("b", "./Sprite2/costumes/b.png", { x: 6, y: 21 }),
      new Costume("c", "./Sprite2/costumes/c.png", { x: 8, y: 11 }),
      new Costume("d", "./Sprite2/costumes/d.png", { x: 10, y: 24 }),
      new Costume("e", "./Sprite2/costumes/e.png", { x: 6, y: 10 }),
      new Costume("f", "./Sprite2/costumes/f.png", { x: 11, y: 21 }),
      new Costume("g", "./Sprite2/costumes/g.png", { x: 12, y: 8 }),
      new Costume("h", "./Sprite2/costumes/h.png", { x: 7, y: 20 }),
      new Costume("i", "./Sprite2/costumes/i.png", { x: 3, y: 17 }),
      new Costume("j", "./Sprite2/costumes/j.png", { x: 14, y: 19 }),
      new Costume("k", "./Sprite2/costumes/k.png", { x: 6, y: 20 }),
      new Costume("l", "./Sprite2/costumes/l.png", { x: 3, y: 19 }),
      new Costume("m", "./Sprite2/costumes/m.png", { x: 8, y: 5 }),
      new Costume("n", "./Sprite2/costumes/n.png", { x: 7, y: 8 }),
      new Costume("o", "./Sprite2/costumes/o.png", { x: 9, y: 10 }),
      new Costume("p", "./Sprite2/costumes/p.png", { x: 9, y: 9 }),
      new Costume("q", "./Sprite2/costumes/q.png", { x: 10, y: 8 }),
      new Costume("r", "./Sprite2/costumes/r.png", { x: 5, y: 9 }),
      new Costume("s", "./Sprite2/costumes/s.png", { x: 6, y: 9 }),
      new Costume("t", "./Sprite2/costumes/t.png", { x: 10, y: 18 }),
      new Costume("u", "./Sprite2/costumes/u.png", { x: 8, y: 9 }),
      new Costume("v", "./Sprite2/costumes/v.png", { x: 9, y: 10 }),
      new Costume("w", "./Sprite2/costumes/w.png", { x: 11, y: 9 }),
      new Costume("x", "./Sprite2/costumes/x.png", { x: 7, y: 8 }),
      new Costume("y", "./Sprite2/costumes/y.png", { x: 8, y: 7 }),
      new Costume("z", "./Sprite2/costumes/z.png", { x: 10, y: 10 }),
      new Costume("(", "./Sprite2/costumes/(.png", { x: 7, y: 25 }),
      new Costume(")", "./Sprite2/costumes/).png", { x: 8, y: 25 }),
      new Costume("*", "./Sprite2/costumes/*.png", { x: 0, y: 0 }),
      new Costume("$", "./Sprite2/costumes/$.png", { x: 0, y: 0 }),
      new Costume("Ã¢â‚¬Å“", "./Sprite2/costumes/Ã¢â‚¬Å“.png", { x: 7, y: 23 }),
      new Costume("Ã¢â‚¬Â", "./Sprite2/costumes/Ã¢â‚¬Â.png", { x: 7, y: 23 }),
      new Costume("-", "./Sprite2/costumes/-.png", { x: 11, y: 2 }),
      new Costume("ÃƒÂ«", "./Sprite2/costumes/ÃƒÂ«.png", { x: 24, y: 33 }),
      new Costume("ÃƒÂ¡", "./Sprite2/costumes/ÃƒÂ¡.png", { x: 10, y: 21 }),
      new Costume("_", "./Sprite2/costumes/_.png", { x: 0, y: 0 }),
      new Costume(";", "./Sprite2/costumes/;.png", { x: 0, y: 0 }),
    ];

    this.sounds = [
      new Sound("You", "./Sprite2/sounds/You.wav"),
      new Sound("Zork", "./Sprite2/sounds/Zork.wav"),
      new Sound("Jone", "./Sprite2/sounds/Jone.wav"),
      new Sound("Interaction", "./Sprite2/sounds/Interaction.wav"),
      new Sound("Door", "./Sprite2/sounds/Door.wav"),
      new Sound("Door2", "./Sprite2/sounds/Door2.wav"),
      new Sound("Shopkeeper", "./Sprite2/sounds/Shopkeeper.wav"),
      new Sound("tuco-get-out", "./Sprite2/sounds/tuco-get-out.wav"),
      new Sound("Anenome", "./Sprite2/sounds/Anenome.wav"),
      new Sound("Jimmy", "./Sprite2/sounds/Jimmy.wav"),
      new Sound("Machine", "./Sprite2/sounds/Machine.wav"),
      new Sound("Ssss", "./Sprite2/sounds/Ssss.wav"),
      new Sound("Ssss3", "./Sprite2/sounds/Ssss3.wav"),
      new Sound("Ssss2", "./Sprite2/sounds/Ssss2.wav"),
      new Sound("Shopkeeper2", "./Sprite2/sounds/Shopkeeper2.wav"),
      new Sound("Zork2", "./Sprite2/sounds/Zork2.wav"),
      new Sound("Jone2", "./Sprite2/sounds/Jone2.wav"),
      new Sound("Goopley", "./Sprite2/sounds/Goopley.wav"),
      new Sound("Goopley2", "./Sprite2/sounds/Goopley2.wav"),
      new Sound("You2", "./Sprite2/sounds/You2.wav"),
      new Sound("Door3", "./Sprite2/sounds/Door3.wav"),
      new Sound("You3", "./Sprite2/sounds/You3.wav"),
      new Sound(
        "Goopley oh wait sorry, Boopley.",
        "./Sprite2/sounds/Goopley oh wait sorry, Boopley..wav"
      ),
      new Sound("139-item-catch", "./Sprite2/sounds/139-item-catch.wav"),
      new Sound("Gary", "./Sprite2/sounds/Gary.wav"),
      new Sound("Hand", "./Sprite2/sounds/Hand.wav"),
      new Sound("John Pixel", "./Sprite2/sounds/John Pixel.wav"),
      new Sound("Carpet", "./Sprite2/sounds/Carpet.wav"),
      new Sound("sans", "./Sprite2/sounds/sans.wav"),
      new Sound("Meow", "./Sprite2/sounds/Meow.wav"),
      new Sound("Meow2", "./Sprite2/sounds/Meow2.wav"),
      new Sound(
        "666666666666666666666666666666666666666666666666666666",
        "./Sprite2/sounds/666666666666666666666666666666666666666666666666666666.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "Off" }, this.whenIReceiveOff),
      new Trigger(Trigger.BROADCAST, { name: "Hmm" }, this.whenIReceiveHmm),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Its a door" },
        this.whenIReceiveItsADoor
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Still a door" },
        this.whenIReceiveStillADoor
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ã¢â‚¬Â¦still a door." },
        this.whenIReceiveStillADoor2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Zork speak" },
        this.whenIReceiveZorkSpeak
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "This, is not a door" },
        this.whenIReceiveThisIsNotADoor
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Wowza doors" },
        this.whenIReceiveWowzaDoors
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Yeah IvÃ¢â‚¬â„¢e" },
        this.whenIReceiveYeahIvE
      ),
      new Trigger(Trigger.BROADCAST, { name: "Ugh" }, this.whenIReceiveUgh),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Some buttons and everything" },
        this.whenIReceiveSomeButtonsAndEverything
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Wow something to say about doors" },
        this.whenIReceiveWowSomethingToSayAboutDoors
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Its locks" },
        this.whenIReceiveItsLocks
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "My name is Jane" },
        this.whenIReceiveMyNameIsJane
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jone darn" },
        this.whenIReceiveJoneDarn
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jone party speach" },
        this.whenIReceiveJonePartySpeach
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jone open door" },
        this.whenIReceiveJoneOpenDoor
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Dark room" },
        this.whenIReceiveDarkRoom
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Door cutscene" },
        this.whenIReceiveDoorCutscene
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Second phase" },
        this.whenIReceiveSecondPhase
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Door death" },
        this.whenIReceiveDoorDeath
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Man come up" },
        this.whenIReceiveManComeUp
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Propose" },
        this.whenIReceivePropose
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Get out." },
        this.whenIReceiveGetOut
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Anemone" },
        this.whenIReceiveAnemone
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ur purple now" },
        this.whenIReceiveUrPurpleNow
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Amber tired" },
        this.whenIReceiveAmberTired
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jimmy cutscene" },
        this.whenIReceiveJimmyCutscene
      ),
      new Trigger(Trigger.BROADCAST, { name: "Oh." }, this.whenIReceiveOh),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ok IÃ¢â‚¬â„¢ve schemed" },
        this.whenIReceiveOkIVeSchemed
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "What bro" },
        this.whenIReceiveWhatBro
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Done foe" },
        this.whenIReceiveDoneFoe
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Exit shop" },
        this.whenIReceiveExitShop
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Psstt.." },
        this.whenIReceivePsstt
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Heed my warning" },
        this.whenIReceiveHeedMyWarning
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Foe cutscene" },
        this.whenIReceiveFoeCutscene
      ),
      new Trigger(Trigger.BROADCAST, { name: "Joke" }, this.whenIReceiveJoke),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Foe end" },
        this.whenIReceiveFoeEnd
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Time to lighten up the mood" },
        this.whenIReceiveTimeToLightenUpTheMood
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Do ya have it?" },
        this.whenIReceiveDoYaHaveIt
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jimmy petty" },
        this.whenIReceiveJimmyPetty
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
        { name: "Snake dead" },
        this.whenIReceiveSnakeDead
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Marriage is what brings us together" },
        this.whenIReceiveMarriageIsWhatBringsUsTogether
      ),
      new Trigger(Trigger.BROADCAST, { name: "Do" }, this.whenIReceiveDo),
      new Trigger(
        Trigger.BROADCAST,
        { name: "DonÃ¢â‚¬â„¢t Ã°Å¸ËœÂ¬" },
        this.whenIReceiveDonT
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Other man come up" },
        this.whenIReceiveOtherManComeUp
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Shadow zork talk" },
        this.whenIReceiveShadowZorkTalk
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Shadow zork dead" },
        this.whenIReceiveShadowZorkDead
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Shadow Jone talk" },
        this.whenIReceiveShadowJoneTalk
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
        { name: "Goopley talk about door" },
        this.whenIReceiveGoopleyTalkAboutDoor
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Various guys" },
        this.whenIReceiveVariousGuys
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Various guys dead" },
        this.whenIReceiveVariousGuysDead
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "ThisÃ¢â‚¬Â¦ is a bucket" },
        this.whenIReceiveThisIsABucket
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Doordevil speakerh" },
        this.whenIReceiveDoordevilSpeakerh
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Doordevil dies lmao" },
        this.whenIReceiveDoordevilDiesLmao
      ),
      new Trigger(Trigger.BROADCAST, { name: "hi" }, this.whenIReceiveHi),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Goopley is gonna leave." },
        this.whenIReceiveGoopleyIsGonnaLeave
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Boopley" },
        this.whenIReceiveBoopley
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Boopley dead" },
        this.whenIReceiveBoopleyDead
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Goopley betrayl" },
        this.whenIReceiveGoopleyBetrayl
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
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked7),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Punchcard hint" },
        this.whenIReceivePunchcardHint
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Gary fight" },
        this.whenIReceiveGaryFight
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
        { name: "Read sign ahh" },
        this.whenIReceiveReadSignAhh
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "John pixel talk" },
        this.whenIReceiveJohnPixelTalk
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "John Pixel dies" },
        this.whenIReceiveJohnPixelDies
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Carpet talks" },
        this.whenIReceiveCarpetTalks
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Carpet dead" },
        this.whenIReceiveCarpetDead
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "WhoÃ¢â‚¬Â¦is that..?" },
        this.whenIReceiveWhoIsThat
      ),
      new Trigger(Trigger.BROADCAST, { name: "sans." }, this.whenIReceiveSans),
      new Trigger(
        Trigger.BROADCAST,
        { name: "sans got bonked" },
        this.whenIReceiveSansGotBonked
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "sans talk in shot" },
        this.whenIReceiveSansTalkInShot
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "EXIT shans" },
        this.whenIReceiveExitShans
      ),
      new Trigger(Trigger.BROADCAST, { name: "lamp" }, this.whenIReceiveLamp),
      new Trigger(
        Trigger.BROADCAST,
        { name: "silly billy speaks" },
        this.whenIReceiveSillyBillySpeaks
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "00nt 94y" },
        this.whenIReceive00nt94y
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "5111y 8111y d34d" },
        this.whenIReceive5111y8111yD34d
      ),
      new Trigger(Trigger.BROADCAST, { name: "666" }, this.whenIReceive666),
      new Trigger(Trigger.CLONE_START, this.startAsClone5),
      new Trigger(
        Trigger.BROADCAST,
        { name: "final final final boss speech" },
        this.whenIReceiveFinalFinalFinalBossSpeech
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "shall we get started?" },
        this.whenIReceiveShallWeGetStarted
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "FINAL FINAL FINAL FINAL BOSS DEFEATEDDDDDDD" },
        this.whenIReceiveFinalFinalFinalFinalBossDefeateddddddd
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Legal Document" },
        this.whenIReceiveLegalDocument
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "you got a lotta money" },
        this.whenIReceiveYouGotALottaMoney
      ),
    ];

    this.vars.letterOn = 29;
    this.vars.y = 0;
    this.vars.x = 0;
  }

  *whenGreenFlagClicked() {
    this.stage.vars.speed = 4;
    this.visible = false;
  }

  *say2(thingy, voice) {
    this.stage.vars.shakey = 0;
    this.stage.vars.speed = 0;
    this.goto(-216, -94);
    this.stage.vars.voice = voice;
    this.vars.letterOn = 1;
    this.broadcast("On");
    yield* this.wait(0);
    for (let i = 0; i < thingy.length; i++) {
      this.moveAhead();
      if (!(this.toNumber(voice) === 8)) {
        yield* this.startSound(voice);
      }
      this.costume = this.letterOf(thingy, this.vars.letterOn - 1);
      this.createClone();
      this.x += 15;
      if (this.letterOf(thingy, this.vars.letterOn - 1) === ";") {
        this.x -= 15;
      }
      if (this.toNumber(voice) === 12) {
        yield* this.wait(0.1);
      }
      if (this.toNumber(voice) === 14) {
        yield* this.wait(0.05);
      }
      if (this.letterOf(thingy, this.vars.letterOn - 1) === "*") {
        this.x = -216;
        this.y -= 26;
      }
      if (this.letterOf(thingy, this.vars.letterOn - 1) === "&") {
        this.broadcast("Off");
        this.stage.vars.speed = 4;
        return;
      }
      if (this.letterOf(thingy, this.vars.letterOn - 1) === ",") {
        yield* this.wait(0.2);
      }
      if (this.letterOf(thingy, this.vars.letterOn - 1) === "-") {
        yield* this.wait(0.2);
      }
      if (this.letterOf(thingy, this.vars.letterOn - 1) === ".") {
        if (
          !(this.letterOf(thingy, this.toNumber(this.vars.letterOn)) === ")")
        ) {
          if (
            !(this.letterOf(thingy, this.toNumber(this.vars.letterOn)) === ".")
          ) {
            yield* this.wait(0.3);
          }
        }
      }
      if (this.letterOf(thingy, this.vars.letterOn - 1) === "$") {
        yield* this.wait(0.5);
      }
      this.vars.letterOn++;
      yield;
    }
    yield* this.wait(0.2);
    while (!(this.keyPressed("any") || this.mouse.down)) {
      yield;
    }
    while (!!this.mouse.down) {
      yield;
    }
    this.broadcast("Off");
    this.stage.vars.speed = 4;
  }

  *startAsClone() {
    this.visible = true;
  }

  *whenIReceiveOff() {
    this.deleteThisClone();
  }

  *whenIReceiveHmm() {
    yield* this.say2("(It seems to be a button.)", 4);
    yield* this.say2("Wowza", 1);
  }

  *whenIReceiveItsADoor() {
    yield* this.say2("(ItÃ¢â‚¬â„¢s a door.)", 4);
    yield* this.say2("Wowza", 1);
    yield* this.say2("(How did you not know that.)", 4);
  }

  *whenIReceiveStillADoor() {
    yield* this.say2("(ItÃ¢â‚¬â„¢s a door.)", 4);
    yield* this.say2("Wowza", 1);
    yield* this.say2("(You still donÃ¢â‚¬â„¢t know that?)", 4);
  }

  *whenIReceiveStillADoor2() {
    yield* this.say2("(...still a door.)", 4);
  }

  *whenIReceiveZorkSpeak() {
    yield* this.say2("Hey! Who are you?", 2);
    if (this.toNumber(this.stage.vars.zorkBehind) === 1) {
      yield* this.say2("...and why are you behind*me..?", 2);
    }
    yield* this.say2("(You say your name.)", 4);
    yield* this.say2("K", 2);
    this.stage.vars.speed = 0;
    yield* this.wait(2);
    yield* this.say2("IÃ¢â‚¬â„¢m Zork", 2);
    yield* this.say2("Yeah I read your name plate", 1);
    yield* this.say2("Huh??", 2);
    yield* this.say2("Nothing", 1);
    this.stage.vars.speed = 0;
    yield* this.wait(2);
    yield* this.say2("Mind if I join you?", 2);
    yield* this.say2("You can if you want.", 1);
    yield* this.say2("Ok IÃ¢â‚¬â„¢ll get behind you for no*reason", 2);
    this.broadcast("Move behind player");
  }

  *whenIReceiveThisIsNotADoor() {
    yield* this.say2("(This is not a door.)", 4);
    this.broadcast("Zork speak");
  }

  *whenIReceiveWowzaDoors() {
    yield* this.say2("(This is a door.)", 4);
    yield* this.say2("Wowza", 1);
    yield* this.say2("(Bro.)", 4);
    yield* this.say2("(Why are they looking at*it so intently???)", 2);
    this.broadcast("Yeah IvÃ¢â‚¬â„¢e");
  }

  *whenIReceiveYeahIvE() {
    yield* this.say2("Yeah IÃ¢â‚¬â„¢ve been trying to open*this door.", 2);
    yield* this.say2("ThereÃ¢â‚¬â„¢s no buttons or anything", 2);
    this.stage.vars.speed = 0;
    this.broadcast("Some buttons and everything");
  }

  *whenIReceiveUgh() {
    while (!(this.toNumber(this.stage.vars.speed) === 4)) {
      yield;
    }
    yield* this.say2("Ugh, itÃ¢â‚¬â„¢s a button. Press it*already.", 2);
  }

  *whenIReceiveSomeButtonsAndEverything() {
    yield* this.wait(2.5);
    yield* this.say2("How convenient.", 2);
  }

  *whenIReceiveWowSomethingToSayAboutDoors() {
    yield* this.say2("(Finally, something*interesting about this door.)", 4);
    this.broadcast("Its locks");
  }

  *whenIReceiveItsLocks() {
    yield* this.say2("(It looks like thereÃ¢â‚¬â„¢s a key*hole.)", 4);
    yield* this.say2("Yea I have the key for that.", 3);
    this.broadcast("Jone open door");
    this.stage.vars.speed = 0;
  }

  *whenIReceiveMyNameIsJane() {
    yield* this.say2("My name is Jone.", 3);
    yield* this.say2("If your planning to reach the*top of this tower...", 3);
    yield* this.say2("Then prepare to be stopped.", 3);
    yield* this.say2("I am the best of the best,", 3);
    yield* this.say2("and you will not get past me.", 3);
    yield* this.say2("Prepare to be destroyed.", 3);
    this.broadcast("Jane battle");
  }

  *whenIReceiveJoneDarn() {
    yield* this.say2("You won! You got seventy*dollars!", 4);
    this.stage.vars.yunuchi += 70;
    this.stage.vars.yunuchi += this.toNumber(this.stage.vars.dangerPoint);
    yield* this.say2("...huh.", 3);
    yield* this.say2("hmm", 3);
    yield* this.say2("That hurt.", 3);
    yield* this.say2("Uhhh", 3);
    yield* this.say2("Ugh", 3);
    yield* this.say2("Can you like", 3);
    yield* this.say2("Allow me in your party?", 3);
    yield* this.say2("Uhm", 2);
    yield* this.say2("You kinda attacked us", 1);
    yield* this.say2("But like", 3);
    yield* this.say2("IÃ¢â‚¬â„¢m not doing that right now.", 3);
    yield* this.say2("IÃ¢â‚¬â„¢m chill.", 3);
    yield* this.say2("The only chill person in this*tower is Jimmy.", 2);
    yield* this.say2("Yea true", 3);
    yield* this.say2("Who?", 1);
    if (this.random(1, 50) === 1) {
      yield* this.startSound("tuco-get-out");
      yield* this.say2("GET OUT", 8);
    }
  }

  *whenIReceiveJonePartySpeach() {
    yield* this.say2("IÃ¢â‚¬â„¢ll just join your party tbh.", 3);
    this.broadcast("Jone party");
    this.stage.vars.jone = 1;
  }

  *whenIReceiveJoneOpenDoor() {
    yield* this.wait(1);
    yield* this.say2("But I donÃ¢â‚¬â„¢t want to use it.", 3);
  }

  *whenIReceiveDarkRoom() {
    this.stage.vars.speed = 4;
    yield* this.wait(0.5);
    yield* this.say2("What is this place?", 1);
    this.stage.vars.speed = 4;
  }

  *whenIReceiveDoorCutscene() {
    yield* this.wait(1.5);
    yield* this.say2("IÃ¢â‚¬â„¢m tired", 5);
    yield* this.say2("Of being", 5);
    yield* this.say2("Knocked around", 5);
    yield* this.say2("They need to learn to quit.", 5);
    yield* this.say2("Goodbye", 5);
    this.broadcast("Reveal!");
  }

  *whenIReceiveSecondPhase() {
    yield* this.say2("PHASE TWO", 6);
  }

  *whenIReceiveDoorDeath() {
    this.stage.watchers._.visible = true;
    this.stage.watchers.enemyHp.visible = false;
    this.stage.watchers.hp.visible = false;
    this.stage.vars.yunuchi += 700;
    this.stage.vars.yunuchi += this.toNumber(this.stage.vars.dangerPoint);
    yield* this.say2("You won! You got seven hundred*dollars!", 4);
    yield* this.say2("IÃ¢â‚¬â„¢m just like that ÃƒÂ«", 1);
    yield* this.say2(". . .", 6);
    yield* this.say2("I guess", 6);
    yield* this.say2("I have been", 6);
    yield* this.say2("Defeated.", 6);
    this.stage.vars.speed = 0;
    yield* this.wait(1);
    yield* this.say2("Take this.", 6);
    yield* this.say2("A weapon.", 6);
    yield* this.say2("You got the Spindoor!", 4);
    yield* this.say2("(Deals a max of one hundred*twenty five damage.)", 4);
    yield* this.say2("(Only equippable by you.)", 4);
    yield* this.say2("Good.", 6);
    yield* this.say2("Luck.", 6);
    this.broadcast("Bad explosion");
    this.stage.vars.spindoor = 1;
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.spindoor = 0;
  }

  *whenIReceiveManComeUp() {
    if (this.toNumber(this.stage.vars.shopped) === 1) {
      yield* this.wait(1.5);
      if (this.toNumber(this.stage.vars.married) === 1) {
        yield* this.say2("Hi sweetie.", 7);
      } else {
        yield* this.say2("Oh itÃ¢â‚¬â„¢s you again.", 7);
      }
      this.broadcast("Shop interface");
    }
    this.stage.vars.speed = 0;
    if (this.toNumber(this.stage.vars.shopped) === 0) {
      yield* this.wait(5.5);
      this.stage.vars.shopped++;
      yield* this.say2("Uh hello", 7);
      yield* this.say2("If you have money, you*can buy grilled cheese.", 7);
      this.broadcast("Shop interface");
    }
  }

  *whenIReceivePropose() {
    if (this.toNumber(this.stage.vars.married) === 0.8) {
      yield* this.say2("Yes! A million times yes!", 7);
      this.stage.vars.married = 1;
    } else {
      if (this.toNumber(this.stage.vars.married) === 1) {
        yield* this.say2("WeÃ¢â‚¬â„¢re now going to get*married!", 7);
      } else {
        if (this.toNumber(this.stage.vars.proposition) === 0) {
          yield* this.say2("Uh", 7);
          yield* this.say2("What", 7);
          yield* this.say2("Huh?????????", 7);
          yield* this.say2("Uh&", 7);
          yield* this.say2("Do&", 7);
          yield* this.say2("Um&", 7);
          yield* this.say2("You&", 7);
          yield* this.say2("Er&", 7);
          yield* this.say2("Uh&", 7);
          yield* this.say2("Hmm&", 7);
          yield* this.say2("Uh&", 7);
          yield* this.say2("Uh&", 7);
          yield* this.say2("Do&", 7);
          yield* this.say2("Um&", 7);
          yield* this.say2("You&", 7);
          yield* this.say2("Er&", 7);
          yield* this.say2("Uh&", 7);
          yield* this.say2("Hmm&", 7);
          yield* this.say2("Uh&", 7);
          yield* this.say2("Uh&", 7);
          yield* this.say2("Do&", 7);
          yield* this.say2("Um&", 7);
          yield* this.say2("You&", 7);
          yield* this.say2("Er&", 7);
          yield* this.say2("Uh&", 7);
          yield* this.say2("Hmm&", 7);
          yield* this.say2("Uh&", 7);
          yield* this.say2("No", 7);
        }
        if (this.toNumber(this.stage.vars.proposition) === 1) {
          yield* this.say2("why do you keep asking*this???????????????", 7);
        }
        if (this.toNumber(this.stage.vars.proposition) === 2) {
          yield* this.say2("Can I pay you to stop???", 7);
          this.stage.vars.yunuchi += 20;
          yield* this.say2("(You got twenty dollars.)", 4);
        }
        if (this.toNumber(this.stage.vars.proposition) === 3) {
          yield* this.say2("Dude?!?", 7);
          yield* this.say2("I legit payed you to stop?!", 7);
          yield* this.say2("Do you want more!?!", 7);
        }
        if (this.toNumber(this.stage.vars.proposition) === 4) {
          yield* this.say2("Okay, IÃ¢â‚¬â„¢ll give you more!!$*Jeez.", 7);
          this.stage.vars.yunuchi += 20;
          yield* this.say2("(You got twenty dollars.) $*(...again.)", 4);
        }
        if (this.toNumber(this.stage.vars.proposition) === 5) {
          yield* this.say2("Oh. My. God.", 7);
          yield* this.say2("Can. You. Like, stop?!", 7);
        }
        if (this.toNumber(this.stage.vars.proposition) === 6) {
          yield* this.say2("Dude.", 7);
          yield* this.say2("I am done with you.", 7);
          yield* this.say2("IÃ¢â‚¬â„¢m just going to ignore you.", 7);
        }
        if (this.compare(6, this.stage.vars.proposition) < 0) {
          yield* this.say2("...", 7);
        }
        if (
          this.toNumber(this.stage.vars.married) === 0.5 ||
          this.compare(14, this.stage.vars.proposition) < 0
        ) {
          this.stage.vars.married = 0.5;
          yield* this.say2("Maybe buy me a ring?", 7);
        }
        this.stage.vars.proposition++;
      }
    }
    this.broadcast("Shop interface");
  }

  *whenIReceiveGetOut() {
    yield* this.startSound("tuco-get-out");
    yield* this.say2("GET OUT", 8);
  }

  *whenGreenFlagClicked3() {
    this.stage.vars.proposition = 0;
  }

  *whenIReceiveAnemone() {
    yield* this.wait(1);
    yield* this.say2("Guys itÃ¢â‚¬â„¢s an enemy!", 3);
    yield* this.say2("Erm actually itÃ¢â‚¬â„¢s an anemone.", 1);
    yield* this.say2("Well you guys look like FUN!", 9);
    yield* this.say2("Mind if I HELP THE FUN", 9);
    yield* this.say2("...how so.", 2);
    yield* this.say2("Hehehe.", 9);
    this.broadcast("Amber fight");
    this.stage.vars.inBattle = 1;
    this.stage.vars.battle = 3;
    this.stage.vars.enemyHp = 750;
    this.broadcast("Ur turn");
  }

  *whenGreenFlagClicked4() {
    this.audioEffects.volume = 100;
    this.stage.vars.shopped = 0;
  }

  *whenIReceiveUrPurpleNow() {
    yield* this.say2("YOUÃ¢â‚¬â„¢RE PURPLE NOW.", 9);
  }

  *whenIReceiveAmberTired() {
    yield* this.say2("Well iÃ¢â‚¬â„¢m tired.", 9);
    yield* this.say2("Bye!", 9);
    this.broadcast("End battle of amber");
    this.stage.vars.battle = 0;
    this.stage.vars.inBattle = 0;
    this.stage.watchers._.visible = true;
    this.stage.vars.speed = 0;
    this.stage.watchers.hp.visible = false;
    yield* this.wait(3);
    yield* this.say2("You$won?$You got the*Thorn Dagger!", 4);
    yield* this.say2("(Only equippable by Zork.)", 4);
    this.stage.vars.yunuchi += 100;
    this.stage.vars.yunuchi += this.toNumber(this.stage.vars.dangerPoint);
    yield* this.say2("You got one hundred*dollars!", 4);
    this.stage.vars.dangerPoint = 0;
    yield* this.say2("Erm THAT just happened", 2);
    yield* this.say2("What the heck, Zork", 3);
    yield* this.say2("That fight was very badly*designed.", 1);
    this.broadcast("Fourth wall break");
    this.stage.vars.speed = 0;
  }

  *whenIReceiveJimmyCutscene() {
    yield* this.wait(3);
    yield* this.say2("Who... is that?", 2);
    yield* this.say2("Is...", 2);
    yield* this.say2("Is that San&", 1);
    this.broadcast("Jimmy reveal");
    this.stage.vars.speed = 0;
  }

  *whenIReceiveOh() {
    yield* this.wait(2);
    yield* this.say2("...oh.", 2);
    yield* this.say2("ITÃ¢â‚¬â„¢S JIMMY!", 3);
    yield* this.say2("OMG ITÃ¢â‚¬â„¢S JIMMY!", 2);
    yield* this.say2("THE GOAT", 3);
    yield* this.say2("NO WAY", 2);
    yield* this.say2("WOWZA", 3);
    yield* this.say2("OMG HI JIMMY", 2);
    yield* this.say2("YEAH WHATS UP JIMMY?!", 3);
    yield* this.say2("Greetings, Jimothy.", 1);
    this.broadcast("Jimothy");
    this.stage.vars.speed = 0;
    yield* this.wait(5);
    yield* this.say2("Excuse me?", 10);
    yield* this.say2("Uh", 10);
    yield* this.say2("Thats not my name", 10);
    yield* this.say2("Yes it is.", 1);
    this.broadcast("Jimmy mad");
    yield* this.say2("No. It isnÃ¢â‚¬â„¢t.", 10);
    yield* this.say2("Nuh uh.", 1);
    yield* this.say2("Ã¢â‚¬Å“JimothyÃ¢â‚¬Â", 1);
    this.broadcast("Jimmy angry");
    yield* this.say2("THAT IS NOT MY NAME.", 10);
    yield* this.say2("Dude. Stop.", 2);
    yield* this.say2("No!", 1);
    yield* this.say2("YOUR NAME IS JIMOTHY.", 1);
    yield* this.say2("YOU WANNA FIGHT, BRO?", 10);
    yield* this.say2("MAYBE I DO!", 1);
    this.broadcast("Jim normal");
    yield* this.say2("Ok lemme scheme.", 10);
    this.broadcast("Jimmy leave");
    this.stage.vars.speed = 0;
    yield* this.wait(2);
    this.stage.vars.speed = 4;
  }

  *whenIReceiveOkIVeSchemed() {
    yield* this.wait(2.5);
    yield* this.say2("Ok IÃ¢â‚¬â„¢ve schemed", 10);
    yield* this.say2("Take.", 10);
    this.broadcast("White board");
    yield* this.wait(4);
    yield* this.say2("Ok make a design of an*extremely dangerous foe.", 10);
    yield* this.say2("And it will fight you.", 10);
    yield* this.say2("Simple.", 10);
  }

  *whenIReceiveWhatBro() {
    yield* this.say2("What bro.", 10);
    yield* this.say2("You still want to fight?", 10);
    yield* this.say2("Maybe wait like six rooms.", 10);
  }

  *whenIReceiveDoneFoe() {
    yield* this.say2("Wowza", 10);
    yield* this.say2("Imma use this later bye", 10);
    this.broadcast("Slide of screen");
    yield* this.say2("WEEEEEEEEEEEEEEEEEEEEEEEEEE", 10);
  }

  *whenGreenFlagClicked5() {
    this.stage.vars.married = 0;
  }

  *whenIReceiveExitShop() {
    if (this.toNumber(this.stage.vars.married) === 1) {
      yield* this.say2("Bye, sweetie!", 7);
    }
  }

  *whenIReceivePsstt() {
    yield* this.wait(5.5);
    yield* this.say2("IÃ¢â‚¬â„¢ve got a ssssecret.", 12);
    yield* this.say2("What is it?", 1);
    yield* this.say2("IÃ¢â‚¬â„¢ll never tell.", 12);
    yield* this.say2("Unless...", 12);
    yield* this.say2("You get me something I want.", 12);
    yield* this.say2("Like???", 1);
    yield* this.say2("An amulet.", 12);
    yield* this.say2("The shopkeeper knows*where it is.", 12);
    yield* this.say2("Why donÃ¢â‚¬â„¢t you ask him?", 12);
    if (this.toNumber(this.stage.vars.married) === 1) {
      null;
    }
    yield* this.say2(
      "Find it and you will know*the very important secret.",
      12
    );
    yield* this.say2("I will return to you.", 12);
    yield* this.say2("You must have it ready.", 12);
    yield* this.say2(
      "(And if you give it to me,*IÃ¢â‚¬â„¢ll get you some money.)",
      12
    );
    yield* this.say2("Sssssee you sssoon", 12);
    this.broadcast("Slither away");
  }

  *whenIReceiveHeedMyWarning() {
    yield* this.say2("Hey.", 7);
    yield* this.say2("Heed my warning.", 7);
    yield* this.say2("If youÃ¢â‚¬â„¢re buying this for*someone...", 7);
    yield* this.say2("They most likely have*malicious intent.", 7);
    yield* this.say2("Wowza", 1);
    this.stage.vars.amuletAvalible = 2;
    this.broadcast("Shop interface");
  }

  *whenIReceiveFoeCutscene() {
    yield* this.wait(3);
    yield* this.say2("Hi guys the machine is done", 10);
    yield* this.say2("Speak.", 10);
    yield* this.say2("Machine.", 10);
    this.stage.vars.speed = 0;
    yield* this.wait(1);
    this.broadcast("Head form");
    yield* this.wait(3);
    yield* this.say2("Hi chat.", 11);
    yield* this.say2("...where are my arms?", 11);
    yield* this.say2("HowÃ¢â‚¬â„¢s it goinÃ¢â‚¬â„¢?", 11);
    yield* this.say2("I was created for the sole*purpose of fighting you.", 11);
    yield* this.say2("So uh. LetÃ¢â‚¬â„¢s.", 11);
    this.broadcast("Thrasher battle");
  }

  *whenIReceiveJoke() {
    yield* this.say2("A horse walks into a bar.", 10);
    yield* this.say2("And, yÃ¢â‚¬â„¢know, itÃ¢â‚¬â„¢s a joke.", 10);
    yield* this.say2("The horse is allowed in the*bar so thats fine.", 10);
    yield* this.say2("So this horse, he walks into*the bar.", 10);
    yield* this.say2(
      "It-it doesnÃ¢â‚¬â„¢t matter that itÃ¢â‚¬â„¢s*a boy horse.",
      10
    );
    yield* this.say2("It could be a girl horse or*whatever.", 10);
    yield* this.say2("Um, not important to the joke.", 10);
    yield* this.say2("So, th-the horse, he walks*into the bar and-", 10);
    yield* this.say2("yÃ¢â‚¬â„¢know, he walks up to the*barkeep.", 10);
    yield* this.say2(
      "ThereÃ¢â‚¬â„¢s-thereÃ¢â‚¬â„¢s yÃ¢â‚¬â„¢know the guy*behind the counter.",
      10
    );
    yield* this.say2("ItÃ¢â‚¬â„¢s an old timey saloon type*bar.", 10);
    yield* this.say2("Uh, you know Wild West*sort of thing.", 10);
    yield* this.say2("So-so the horse, he walks into*the bar,", 10);
    yield* this.say2("and he walks up to the*barkeep,", 10);
    yield* this.say2(
      "and he says uh, because itÃ¢â‚¬â„¢s*a talking horse,",
      10
    );
    yield* this.say2("itÃ¢â‚¬â„¢s-itÃ¢â‚¬â„¢s...the horse can*talk.", 10);
    yield* this.say2(
      "itÃ¢â‚¬â„¢s very important to the*joke that the horse can talk.",
      10
    );
    yield* this.say2("the-the talking horse walks*into the bar", 10);
    yield* this.say2("and he walks up to*the barkeep and he says...", 10);
    yield* this.say2("w-well, before he says*anything, he puts his", 10);
    yield* this.say2("he takes his hoof and puts*it up onto the bar", 10);
    yield* this.say2("uhm.", 10);
    yield* this.say2("And...", 10);
    yield* this.say2("and. . .", 10);
    yield* this.say2("oh wai-wai-wait wait no*no the horse,", 10);
    yield* this.say2("the horse isnÃ¢â‚¬â„¢t. . .", 10);
    yield* this.say2("the-the horse has a bloody*hoof.", 10);
    yield* this.say2("the-the-the horseÃ¢â‚¬â„¢s hoof*is bloody,", 10);
    yield* this.say2("itÃ¢â‚¬â„¢s very important to*the joke um...", 10);
    yield* this.say2(
      "so this horse, heÃ¢â‚¬â„¢s walking*with his bloody hoof,",
      10
    );
    yield* this.say2("and he walks into the bar,", 10);
    yield* this.say2("and he puts his-his bloody*hoof up onto the bar and", 10);
    yield* this.say2("(thatÃ¢â‚¬â„¢s really not very*sanitary now is it?)", 10);
    yield* this.say2(
      "uh-its fine itÃ¢â‚¬â„¢s-itÃ¢â‚¬â„¢s a joke*um and-and,",
      10
    );
    yield* this.say2(
      "OH also the-the horse, because*you know his hoof is bloody,",
      10
    );
    yield* this.say2(
      "and itÃ¢â‚¬â„¢s injured, heÃ¢â‚¬â„¢s-heÃ¢â‚¬â„¢s*limping,",
      10
    );
    yield* this.say2(
      "heÃ¢â‚¬â„¢s NOT walking, itÃ¢â‚¬â„¢s a*limping, talking horse.",
      10
    );
    yield* this.say2("very very important, bloody*hoof, limping horse.", 10);
    yield* this.say2("um", 10);
    yield* this.say2("and the horse can talk.", 10);
    yield* this.say2("ok, so the-the horse*he walks into the bar", 10);
    yield* this.say2("LIMPS into the bar,", 10);
    yield* this.say2("um", 10);
    yield* this.say2(
      "and-and uh he walks-LIMPS $*limping horse, bloody hoof.",
      10
    );
    yield* this.say2("uh", 10);
    yield* this.say2("the-the horse limps up*to the bar,", 10);
    yield* this.say2("and-and he puts his*hoof up onto the bar,", 10);
    yield* this.say2(
      "uh, it-itÃ¢â‚¬â„¢s bleeding, again*the limping horse,",
      10
    );
    yield* this.say2("let me try that again.", 10);
    yield* this.say2("uh the horse limps into the*bar,", 10);
    yield* this.say2("and the horse limps up to*the barkeep,", 10);
    yield* this.say2("so, again remember, the*horse can talk,", 10);
    yield* this.say2(
      "because itÃ¢â‚¬â„¢s very important,*itÃ¢â‚¬â„¢s a joke",
      10
    );
    yield* this.say2("so the horse walks into*the bar$LIMPS into the bar.", 10);
    yield* this.say2("and uh the horse walks-$*limps, up to the barkeep,", 10);
    yield* this.say2("um and he-he puts his-his*hoof onto the bar", 10);
    yield* this.say2("his BLOODY hoof up onto the*bar,", 10);
    yield* this.say2("and he says to the bartender,", 10);
    yield* this.say2(
      "Ã¢â‚¬Å“IÃ¢â‚¬â„¢m lookinÃ¢â‚¬â„¢ fer the*man who shot my paÃ¢â‚¬â„¢.Ã¢â‚¬Â",
      10
    );
    this.stage.vars.speed = 0;
    yield* this.wait(3);
    yield* this.say2("OH WAIT NO IT WAS A DOG!", 10);
    yield* this.say2("oh okay so this dog walks*into the bar,", 10);
    yield* this.say2("itÃ¢â‚¬â„¢s not a horse,", 10);
    yield* this.say2("and he uh,", 10);
    yield* this.say2("is limping,", 10);
    yield* this.say2("and", 10);
    yield* this.say2("and...", 10);
    yield* this.say2("i forget the joke.", 10);
    this.stage.vars.speed = 0;
    yield* this.wait(1);
    yield* this.say2("Make sure to like and*subscribe!   &", 10);
    this.stage.vars.speed = 0;
    this.broadcast("No i do not.");
  }

  *whenIReceiveFoeEnd() {
    this.stage.watchers.hp.visible = false;
    this.stage.watchers._.visible = true;
    this.stage.watchers.enemyHp.visible = false;
    yield* this.wait(1);
    yield* this.say2("O-ow.", 11);
    yield* this.say2("I just got created...", 11);
    yield* this.say2("Just to be destroyed...", 11);
    yield* this.say2("...why did you create me to*feel pain?", 11);
    yield* this.say2("Uh", 10);
    yield* this.say2("Because funni", 10);
    this.broadcast("Foe death");
    this.stage.vars.speed = 0;
    yield* this.wait(1);
  }

  *whenIReceiveTimeToLightenUpTheMood() {
    yield* this.wait(0.5);
    yield* this.say2("er.", 10);
    yield* this.say2("uh", 10);
    yield* this.say2("IÃ¢â‚¬â„¢m going to lighten up*the mood", 10);
    yield* this.say2("Wanna hear a joke?", 10);
    this.stage.vars.speed = 0;
    this.broadcast("Do ya?");
  }

  *whenIReceiveDoYaHaveIt() {
    yield* this.wait(3);
    yield* this.say2("Ssssso.", 12);
    yield* this.say2("We meet again.", 12);
    yield* this.say2("Do you have the item I*have requested?", 12);
    if (
      this.toNumber(this.stage.vars.amuletAvalible) === 3 ||
      this.toNumber(this.stage.vars.amuletAvalible) === 4
    ) {
      yield* this.say2("Exellent.", 12);
      yield* this.say2("Now. DonÃ¢â‚¬â„¢t be grrrrreedy.", 12);
      yield* this.say2("Hand. Over. The. Amulet.", 12);
      yield* this.say2(
        "(You gave the dangerous amulet*to a complete stranger.)",
        4
      );
      yield* this.say2("Exellent.", 12);
      yield* this.say2("I will ssssee you ssssoon.", 12);
      this.broadcast("Snake leave");
      this.stage.vars.amuletAvalible = 4;
    } else {
      yield* this.say2("Nah bro.", 1);
      yield* this.say2("Interesting choice.", 12);
      yield* this.say2("I shall return to my cave.", 12);
      this.broadcast("Snake leave");
    }
  }

  *whenIReceiveJimmyPetty() {
    yield* this.wait(3);
    yield* this.say2("Okay. Enough talk.", 10);
    yield* this.say2("ItÃ¢â‚¬â„¢s time.", 10);
    yield* this.say2("All of my plan(s) have failed.", 10);
    yield* this.say2("But you only had one plan.", 1);
    yield* this.say2("Hush.", 10);
    yield* this.say2("Because this is my plan B", 10);
    yield* this.say2("Which is just plan A but*better.", 10);
    yield* this.say2("Prepare yourself.", 10);
    yield* this.say2("I will be the hardest foe you*will face.", 10);
    yield* this.say2("I am... The Final Boss.", 10);
    yield* this.say2("(Of this chapter of the game)", 10);
    yield* this.say2("Game?&", 2);
    yield* this.say2("ACTIVATE THE THINGY THAT*MAKES ME STRONGER.", 10);
    this.stage.vars.speed = 0;
    this.broadcast("Crown fall");
    yield* this.wait(5);
    yield* this.say2("I wish you good luck.", 10);
    yield* this.say2("?????????????", 1);
    yield* this.say2("We shall fight now.", 10);
    this.broadcast("Jimmy fight");
  }

  *whenIReceiveJimmyDies() {
    this.stage.vars.speed = 0;
    this.stage.vars.inBattle = 0;
    this.stage.vars.battle = 0;
    yield* this.wait(1);
    yield* this.say2("You won! You got KEY!", 4);
    this.stage.vars.yunuchi += 300 + this.toNumber(this.stage.vars.dangerPoint);
    yield* this.say2("You got three hundred*dollars!", 4);
    this.stage.vars.dangerPoint = 0;
    this.broadcast("Jimmy sad");
    yield* this.say2("Ah.", 10);
    yield* this.say2("I see.", 10);
    yield* this.say2("So even me, at my strongest,", 10);
    yield* this.say2("could be beat.", 10);
    this.stage.vars.speed = 0;
    yield* this.wait(1);
    yield* this.say2("Main characters...", 10);
    yield* this.say2("Listen to me.", 10);
    this.stage.vars.speed = 0;
    yield* this.wait(1);
    if (this.toNumber(this.stage.vars.amuletAvalible) === 4) {
      this.broadcast("Jimmy creepy");
      this.audioEffects.volume = 0;
      yield* this.say2("A great evil is coming your*way.", 10);
      yield* this.say2("F$a$s$t$.", 10);
      this.audioEffects.volume = 100;
    } else {
      yield* this.say2("Terrible things will come*your way.", 10);
      yield* this.say2("Be prepared.", 10);
      yield* this.say2("And good luck.", 10);
    }
    this.stage.vars.speed = 0;
    yield* this.wait(2);
    this.broadcast("Sad explosion");
    yield* this.wait(4);
    this.stage.vars.speed = 4;
  }

  *whenIReceiveFinalRoom() {
    this.stage.watchers._.visible = false;
    yield* this.wait(10);
    this.audioEffects.volume = 0;
    yield* this.say2("Welp.", 1);
    yield* this.say2("This is it.", 1);
    if (this.toNumber(this.stage.vars.amuletAvalible) === 4) {
      yield* this.say2("The final ro&", 1);
      this.audioEffects.volume = 0;
      yield* this.say2("First.", 12);
      yield* this.say2("I would like to say.", 12);
      yield* this.say2("I appriciate the donation.", 12);
      this.stage.vars.speed = 0;
      this.broadcast("Slither in (get it?)");
      yield* this.wait(1);
      this.audioEffects.volume = 100;
      yield* this.say2("You have been great*use to me.", 13);
      yield* this.say2("But this power...", 13);
      yield* this.say2("This...", 13);
      yield* this.say2("Freedom...", 13);
      yield* this.say2("MIND IF I TRY IT ON YOU?", 14);
      this.stage.vars.speed = 0;
      this.broadcast("Transform");
    } else {
      yield* this.say2("The final room.", 1);
      yield* this.say2("I guess I have to use this...", 1);
      this.stage.vars.speed = 0;
      this.audioEffects.volume = 100;
      yield* this.wait(1);
      yield* this.say2("(You used the KEY.)", 4);
      this.stage.vars.speed = 0;
      yield* this.wait(2);
      this.broadcast("KEY");
    }
  }

  *whenIReceiveSnakeDead() {
    yield* this.say2("You won! You got the Amulet!", 4);
    yield* this.say2("(Doubles healing power.)", 4);
    yield* this.say2("Er", 13);
    yield* this.say2("Uh", 13);
    yield* this.say2("IÃ¢â‚¬â„¢m dead.", 13);
    this.stage.vars.speed = 0;
    this.broadcast("Rad explosion");
    yield* this.wait(3);
    yield* this.say2("Uh", 1);
    yield* this.say2("Where was I..?", 1);
    yield* this.say2("I guess I have to use this...", 1);
    this.audioEffects.volume = 100;
    this.stage.vars.speed = 0;
    yield* this.wait(1);
    yield* this.say2("(You used the KEY.)", 4);
    this.stage.vars.speed = 0;
    yield* this.wait(2);
    this.broadcast("KEY");
  }

  *whenIReceiveMarriageIsWhatBringsUsTogether() {
    yield* this.say2("Marriage,", 10);
    yield* this.say2("Is what brings us together*today.", 10);
    yield* this.say2("Do you, you", 10);
    yield* this.say2("Want to be married to*this guy?", 10);
    yield* this.say2("Is your name seriously*you?", 2);
    yield* this.say2("Do you wanna be married?", 10);
    yield* this.say2("I...", 1);
    this.stage.vars.speed = 0;
    this.broadcast("Do or donÃ¢â‚¬â„¢ts");
  }

  *whenIReceiveDo() {
    yield* this.say2("I do.", 1);
    yield* this.say2(
      "Do you, Ã¢â‚¬Å“shopÃ¢â‚¬Â wanna be*married to this person?",
      10
    );
    yield* this.say2("Yea", 7);
    yield* this.say2("No, you gotta say Ã¢â‚¬Å“I doÃ¢â‚¬Â", 10);
    yield* this.say2("I do.", 7);
    yield* this.say2("K", 10);
    yield* this.say2("Bye then.", 10);
    this.stage.vars.speed = 0;
    this.broadcast("Jimmy explode, like normal");
    yield* this.wait(1);
    this.broadcast("Fade to black");
  }

  *whenIReceiveDonT() {
    yield* this.say2("W-what..?", 7);
    yield* this.say2("Gosh, IÃ¢â‚¬â„¢m such an idiot.", 7);
    yield* this.say2("I-I have to go...", 7);
    this.broadcast("Shop leave");
    this.stage.vars.speed = 0;
    this.stage.vars.married = 5;
    this.broadcast("Fade to black");
  }

  *whenIReceiveOtherManComeUp() {
    yield* this.say2("Hello.", 15);
    if (this.toNumber(this.stage.vars.moneymaker) === 1) {
      yield* this.say2("Maybe it was a bad idea*to buy him that gun...", 15);
    } else {
      yield* this.say2("Buy armor from me.", 15);
    }
    this.stage.vars.speed = 0;
    this.broadcast("Shop2 interface");
  }

  *whenIReceiveShadowZorkTalk() {
    yield* this.wait(0);
    yield* this.say2("Hello.", 16);
    yield* this.say2("DonÃ¢â‚¬â„¢t you recognize me?", 16);
    yield* this.say2("It is me.", 16);
    yield* this.say2("Z$o$r$k", 16);
    yield* this.say2("Who is this freak?", 2);
    yield* this.say2("IÃ¢â‚¬â„¢M Zork.", 2);
    yield* this.say2("Nuh uh.", 16);
    yield* this.say2("Yuh huh.", 2);
    yield* this.say2("Let us end this.", 16);
    this.stage.vars.battle = 10;
    this.stage.vars.inBattle = 1;
    this.stage.vars.hp = 100;
    this.stage.watchers._.visible = false;
    this.stage.watchers.hp.visible = true;
    this.broadcast("Shadow zork fight");
  }

  *whenIReceiveShadowZorkDead() {
    yield* this.say2("You won! You got seventy*dollars!", 4);
    this.stage.vars.inBattle = 0;
    this.stage.vars.yunuchi += this.toNumber(this.stage.vars.dangerPoint);
    this.stage.vars.yunuchi += 70;
    this.stage.vars.dangerPoint = 0;
    yield* this.say2("That was weird...", 2);
    yield* this.say2("It just...", 2);
    yield* this.say2("Disappeared?", 2);
    yield* this.say2("It looked exactly like me...", 2);
    yield* this.say2("Wowza", 1);
    yield* this.say2("ThatÃ¢â‚¬â„¢s pretty odd.", 1);
  }

  *whenIReceiveShadowJoneTalk() {
    yield* this.say2("Oh no.", 17);
    yield* this.say2("They found me.", 17);
    yield* this.say2("H-huh?!", 3);
    yield* this.say2("It looks just like me..!", 3);
    yield* this.say2("Someone! Help!", 17);
    yield* this.say2("What? We arenÃ¢â‚¬â„¢t trying to*hurt you.", 2);
    yield* this.say2("I wish I could say the same.", 17);
    this.broadcast("Shadow jone fight");
    this.stage.watchers.hp.visible = true;
    this.stage.watchers._.visible = false;
    this.stage.watchers.enemyHp.visible = true;
    this.stage.vars.inBattle = 1;
    this.stage.vars.battle = 11;
  }

  *whenIReceiveShadowJoneDead() {
    yield* this.say2("You won! You got seventy*dollars!", 4);
    this.stage.vars.inBattle = 0;
    this.stage.vars.yunuchi += this.toNumber(this.stage.vars.dangerPoint);
    this.stage.vars.yunuchi += 70;
    this.stage.vars.dangerPoint = 0;
    yield* this.say2(
      "So thatÃ¢â‚¬â„¢s the second time that*we encountered ourselves.",
      3
    );
    yield* this.say2("Yeah...", 2);
    yield* this.say2("I-is the next one going*to be me?!", 1);
    yield* this.say2("Who is doing this?!", 1);
  }

  *whenIReceiveShadowDead() {
    yield* this.say2("You won! You got seventy*dollars!", 4);
    if (this.toNumber(this.stage.vars.spindoor) === 1) {
      this.stage.vars.spindoor = 2;
      yield* this.startSound("139-item-catch");
      yield* this.say2("You got the shadow spindoor!", 4);
    }
    this.stage.vars.inBattle = 0;
    this.stage.vars.yunuchi += this.toNumber(this.stage.vars.dangerPoint);
    this.stage.vars.yunuchi += 70;
    this.stage.vars.dangerPoint = 0;
    yield* this.say2("Oh my gosh", 1);
    yield* this.say2("This is so weird.", 2);
    yield* this.say2("Why are there versions of us?!", 3);
    yield* this.say2("I see you three are wondering*the same thing I am.", 18);
    yield* this.say2("Who are you?", 1);
    yield* this.say2("I...", 18);
    this.stage.vars.speed = 0;
    this.broadcast("Gooper popup");
    yield* this.wait(2);
    yield* this.say2("Am Goopley!", 19);
    yield* this.say2("Wowza", 1);
    yield* this.say2("I have some things to*explain...", 19);
    yield* this.say2(
      "So basically thereÃ¢â‚¬â„¢s this guy*whoÃ¢â‚¬â„¢s making shadow monsters.",
      19
    );
    yield* this.say2("I found a version of myself*and fought it.", 19);
    yield* this.say2("It was cool to beat myself up.", 19);
    yield* this.say2("Huh&", 1);
    yield* this.say2(
      "But the guy whoÃ¢â‚¬â„¢s making the*monsters has a special*crystal.",
      19
    );
    yield* this.say2("And uh", 19);
    yield* this.say2("You need that to get home.", 19);
    yield* this.say2("VÃƒÂ¡monos!", 19);
    this.broadcast("Goopley joins the party");
  }

  *whenIReceiveGoopleyTalkAboutDoor() {
    yield* this.wait(0);
    yield* this.say2("I got it!", 19);
    this.stage.vars.speed = 0;
    this.broadcast("Goopley slide behind door");
  }

  *whenIReceiveVariousGuys() {
    yield* this.say2("Hello", 17);
    yield* this.say2("People", 16);
    yield* this.say2("We", 17);
    yield* this.say2("Will", 16);
    yield* this.say2("Stop", 17);
    yield* this.say2("Y$O$U", 20);
    this.broadcast("Various battle");
    this.stage.vars.battle = 13;
  }

  *whenIReceiveVariousGuysDead() {
    yield* this.say2("You won! You got one hundred*fourty dollars!", 4);
    this.stage.vars.inBattle = 0;
    this.stage.vars.yunuchi += this.toNumber(this.stage.vars.dangerPoint);
    this.stage.vars.yunuchi += 140;
    this.stage.vars.dangerPoint = 0;
    yield* this.say2("Goopley gave you twenty*dollars because he can.", 4);
    this.stage.vars.yunuchi += 20;
    yield* this.say2("Huh.", 19);
    yield* this.say2("So I think", 19);
    yield* this.say2("WeÃ¢â‚¬â„¢ve finsished them off.", 19);
    yield* this.say2("Now we gotta find out whoÃ¢â‚¬â„¢s*making them!", 19);
    yield* this.say2("CÃ¢â‚¬â„¢mon!", 19);
  }

  *whenIReceiveThisIsABucket() {
    yield* this.say2("This is a bucket.", 19);
    yield* this.say2("Dear god.", 1);
    yield* this.say2("...thereÃ¢â‚¬â„¢s more.", 19);
    yield* this.say2("No!", 1);
    yield* this.say2("We gotta grow this plant so*it opens the door.", 19);
    this.broadcast("Grab bucket");
  }

  *whenIReceiveDoordevilSpeakerh() {
    yield* this.say2("I have been", 21);
    yield* this.say2("REBORN", 21);
    yield* this.say2("Wowza", 1);
    yield* this.say2("This is so much", 21);
    yield* this.say2("POWER", 21);
    yield* this.say2("...", 21);
    yield* this.say2("You$people.", 21);
    yield* this.say2("You$KILLED$me.", 21);
    yield* this.say2("NowÃ¢â‚¬â„¢s the chance for payback.", 21);
    this.broadcast("Doordevil shadow fight");
  }

  *whenIReceiveDoordevilDiesLmao() {
    yield* this.say2("You won! You got ZERO DOLLARS.", 4);
    this.stage.vars.yunuchi += this.toNumber(this.stage.vars.dangerPoint);
    yield* this.say2("Geheheheh.", 21);
    yield* this.say2("You guys.", 21);
    yield* this.say2("Finally", 21);
    yield* this.say2("Beat me...", 21);
    yield* this.say2("But I will tell you an*interesting secret.", 21);
    yield* this.say2("Goopley is&", 21);
    this.stage.vars.speed = 0;
    this.broadcast("Goopley shoot door");
    yield* this.wait(1);
    yield* this.say2("AUGH", 21);
    yield* this.say2("WHY????????", 21);
    yield* this.say2("YOU MONS_______________AAAAAAA&", 21);
    this.stage.vars.speed = 0;
    this.broadcast("Doordevil fade");
  }

  *whenIReceiveHi() {
    yield* this.say2("hi", 22);
  }

  *startAsClone2() {
    while (true) {
      if (this.costume.name === "_") {
        while (true) {
          yield* this.startSound("Door3");
          this.costume = this.random(1, 82000);
          this.x += this.random(-5, 5);
          this.y += this.random(-5, 5);
          yield;
        }
      }
      yield;
    }
  }

  *whenIReceiveGoopleyIsGonnaLeave() {
    yield* this.say2("Hey chat IÃ¢â‚¬â„¢ll brb", 19);
    yield* this.say2("I need to do$stuff.", 19);
    this.stage.vars.speed = 0;
    this.broadcast("Goopley leave");
  }

  *whenIReceiveBoopley() {
    yield* this.wait(1);
    yield* this.say2("Goopley?", 2);
    yield* this.say2("What happened?", 2);
    yield* this.say2("IÃ¢â‚¬â„¢M NOT GOOPLEY!!!!!!", 23);
    yield* this.say2("I DONÃ¢â‚¬â„¢T EVEN KNOW WHO THAT IS!", 23);
    yield* this.say2("IÃ¢â‚¬â„¢M", 23);
    yield* this.say2("(B)OOPLEY!", 23);
    yield* this.say2("..boopley?", 2);
    yield* this.say2("YES", 23);
    yield* this.say2("OF COURSE", 23);
    yield* this.say2("You look exactly like Goopley.", 3);
    yield* this.say2("But like", 3);
    yield* this.say2("...red.", 3);
    yield* this.say2("THATÃ¢â‚¬â„¢S BECAUSE IÃ¢â‚¬â„¢M EVIL!!!", 23);
    yield* this.say2("Dude, can you stop yelling?", 2);
    yield* this.say2("NO.", 23);
    yield* this.say2("IT IS PHYSICALLY IMPOSSIBLE.", 23);
    yield* this.say2(";AAAAAAAAAAAAAAAAAAAAAAAAAAA", 23);
    this.broadcast("Boopley fight");
  }

  *startAsClone3() {
    this.vars.x = this.x;
    this.vars.y = this.y;
    if (this.costume.name === ";") {
      this.stage.vars.shakey = 1;
    }
    while (true) {
      if (this.toNumber(this.stage.vars.shakey) === 1) {
        this.goto(this.toNumber(this.vars.x), this.toNumber(this.vars.y));
        this.x += this.random(-1, 1);
        this.y += this.random(-1, 1);
      }
      if (!(this.toNumber(this.stage.vars.shakey) === 1)) {
        return;
      }
      yield;
    }
  }

  *whenGreenFlagClicked6() {
    this.stage.vars.shakey = 0;
  }

  *whenIReceiveBoopleyDead() {
    yield* this.say2("You won! You lost twenty*dollars!", 4);
    this.stage.vars.yunuchi -= 20;
    yield* this.say2("Why did we lose money&", 1);
    yield* this.say2(";YOU GUYS HURT.", 23);
    yield* this.say2(";OWIE", 23);
    yield* this.say2(";SO MEAN", 23);
    yield* this.say2("You were trying to kill*us for no reason.", 1);
    yield* this.say2(";I WAS TRYING TO KILL YOU*BECAUSE IÃ¢â‚¬â„¢M EVIL.", 23);
    yield* this.say2("DUH.", 23);
    yield* this.say2("ÃƒÂ« ÃƒÂ« ÃƒÂ« ÃƒÂ« ÃƒÂ« ÃƒÂ« ÃƒÂ« ÃƒÂ« ÃƒÂ« ÃƒÂ«", 23);
    this.stage.vars.speed = 0;
    this.broadcast("Boopley leave");
    this.broadcast("Right");
    yield* this.wait(2.3);
    yield* this.say2("Hi guys what happened*while I was gone?", 19);
    yield* this.say2("YOU WERE THERE!!", 2);
    yield* this.say2("No, I clearly stated I had to*leave and I left.", 19);
    yield* this.say2(";THEREÃ¢â‚¬â„¢S STILL RED DYE ON YOU!!", 2);
    yield* this.say2("What are you talking about.", 19);
    yield* this.say2(";BRO?????????????", 3);
    this.stage.vars.speed = 4;
    this.broadcast("Progress the story");
  }

  *whenIReceiveGoopleyBetrayl() {
    yield* this.wait(0);
    yield* this.say2("Ok gang, behind that door is*our ticket home!", 19);
    yield* this.say2("But...", 19);
    yield* this.say2("ThereÃ¢â‚¬â„¢s something else...", 19);
    yield* this.say2(
      "And I canÃ¢â‚¬â„¢t believe you*havenÃ¢â‚¬â„¢t noticed it...",
      19
    );
    this.broadcast("Goopley in front of gang");
    yield* this.say2(
      "IÃ¢â‚¬â„¢VE BEEN PLAYING YOU*FOR A FOOL THIS WHOLE TIME!!",
      19
    );
    yield* this.say2("IÃ¢â‚¬â„¢M ACTUALLY EVIL!!", 19);
    yield* this.say2("IT WAS ME!!", 19);
    yield* this.say2(";I WAS BOOPLEY!", 19);
    yield* this.say2("We kinda knew that&", 1);
    yield* this.say2("HUSH UP", 19);
    yield* this.say2(
      ";I SHALL NOW CALL UPON*THAT GUY WHO MADE THOSE*SHADOWS!!",
      19
    );
    this.broadcast("Summoning");
    yield* this.say2(
      "evo stragintos deitras*evo stragintos deitras*EVO STRAGINTOS DEITRAS!!",
      19
    );
    this.stage.vars.speed = 0;
    yield* this.wait(1);
    this.broadcast("Gary");
    yield* this.wait(1);
    yield* this.say2(";THIS IS THE STRONGEST BEING*IN THE UNIVERSE!", 19);
    yield* this.say2(
      ";A MONSTER THAT CAN CREATE AND*DESTROY ANYTHING IT WANTS!!",
      19
    );
    yield* this.say2(";AND ITÃ¢â‚¬â„¢S NAME IS...", 19);
    yield* this.say2(";GARY!!!!!!!!!!!!!!!!!!!!!!!!!!", 19);
    yield* this.say2(";AHAHAHAHAHAHAHAHAHAHAHAHAAAA", 19);
    this.stage.vars.speed = 0;
    yield* this.wait(1);
    this.broadcast("Gary kill");
    yield* this.wait(1);
    yield* this.say2("Wait what are you doing Gary?", 19);
    yield* this.say2("G-Gary?", 19);
    this.stage.vars.speed = 0;
    this.broadcast("Gary crushes goopley");
    yield* this.wait(2);
    yield* this.say2("Thanks Gary", 1);
    yield* this.say2("IÃ¢â‚¬â„¢m legit gonna kill you next.", 25);
    yield* this.say2("Oh darn", 1);
    yield* this.say2("Cuz like", 25);
    yield* this.say2("IÃ¢â‚¬â„¢m the final boss", 25);
    yield* this.say2("(Of this chapter of the game)", 25);
    yield* this.say2("What game are you talking about&", 2);
    yield* this.say2("Ok lets fight now", 1);
    this.broadcast("Gary fight");
  }

  *whenIReceiveGaryDead() {
    yield* this.wait(1);
    yield* this.say2("YOU WON! You got the KRYSTIL!", 4);
    yield* this.say2(";Interesting...", 25);
    yield* this.say2(";I have been defeated.", 25);
    yield* this.say2(
      ";I previously thought I was the*strongest being in the*universe.",
      25
    );
    yield* this.say2(";I now understand I was wrong.", 25);
    yield* this.say2(";You three...", 25);
    yield* this.say2(";If you can beat ME...", 25);
    yield* this.say2(";Perhaps you can beat HIM.", 25);
    yield* this.say2(";Maybe...", 25);
    yield* this.say2(";Just maybe...", 25);
    this.stage.vars.speed = 0;
    yield* this.wait(1);
    yield* this.say2(";USE THE KRYSTIL.", 25);
    yield* this.say2(";FIND THE SECOND ONE.", 25);
    yield* this.say2(";DESTROY THIS TOWER.", 25);
    this.stage.vars.speed = 0;
    this.broadcast("Gary fade");
  }

  *whenIReceiveFinalRoom2() {
    yield* this.wait(6);
    this.audioEffects.volume = 0;
    yield* this.say2("...so here we are again.", 1);
    yield* this.say2(
      "LookÃ¢â‚¬â„¢s like this KRYSTIL fits*in one of this hole.",
      1
    );
    this.stage.vars.speed = 0;
    this.broadcast("KYRSTIL");
  }

  *whenGreenFlagClicked7() {
    this.audioEffects.volume = 100;
  }

  *whenIReceivePunchcardHint() {
    yield* this.say2("(It seems to be a note on*the ground.)", 4);
    yield* this.say2("(It says Ã¢â‚¬Å“Promo code is*punchÃ¢â‚¬Â.)", 4);
    yield* this.say2("What does that mean.", 1);
    yield* this.say2("I have not a clue.", 2);
    yield* this.say2("Me neither.", 3);
  }

  *whenIReceiveGaryFight() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.broadcast("Off");
    this.deleteThisClone();
  }

  *whenIReceiveHandHopDown() {
    yield* this.wait(0.5);
    yield* this.say2("W-what the..!", 1);
    yield* this.say2("Is that a giant hand?!", 2);
    yield* this.say2("Heya.", 26);
    yield* this.say2("ItÃ¢â‚¬â„¢s me.", 26);
    yield* this.say2("FORCH!", 26);
    yield* this.say2("It was me.", 26);
    yield* this.say2("I created this tower.", 26);
    yield* this.say2("Wowza&", 1);
    yield* this.say2("I am the one who trapped you*all in here.", 26);
    yield* this.say2("But now that you have ONE*KRYSTIL...", 26);
    yield* this.say2("I CANÃ¢â‚¬â„¢T LET YOU GET MINE!", 26);
    yield* this.say2(
      "I CANÃ¢â‚¬â„¢T LET YOU DESTROY*MY WONDEROUS CREATION!",
      26
    );
    yield* this.say2("SO WHAT IÃ¢â‚¬â„¢M GOING TO DO IS..!", 26);
    yield* this.say2(";HIRE A BUNCH OF PEOPLE TO STOP*YOU!", 26);
    yield* this.say2(";STARTING WITH..!", 26);
    yield* this.say2("THIS PLANT!", 26);
    this.stage.vars.speed = 0;
    this.broadcast("Grab plant");
  }

  *whenIReceivePlantCut() {
    this.stage.vars.yunuchi += 100;
    this.stage.vars.yunuchi += this.toNumber(this.stage.vars.dangerPoint);
    yield* this.say2("You won! You got one hundred*dollars!", 4);
    yield* this.say2("IÃ¢â‚¬â„¢m just realizing what just*happened. ", 1);
    yield* this.say2(
      "That... Forch guy hired a*plant to kill us.$*A plant.",
      1
    );
    yield* this.say2("Oh yea", 2);
    yield* this.say2(
      "So, weÃ¢â‚¬â„¢re gonna fight a bunch*of bad guys this chapter.",
      3
    );
    yield* this.say2("What do you mean chapter?&", 2);
  }

  *whenIReceiveReadSignAhh() {
    yield* this.say2(
      "(It appears to say*Ã¢â‚¬Å“DonÃ¢â‚¬â„¢t Fall InÃ¢â‚¬Â)",
      4
    );
    yield* this.say2("(ItÃ¢â‚¬â„¢s above a deep pit.)", 4);
    yield* this.say2("Wowza", 1);
  }

  *startAsClone4() {
    if (this.toNumber(this.stage.vars.voice) === 27) {
      this.effects.pixelate = 20;
    }
  }

  *whenIReceiveJohnPixelTalk() {
    yield* this.say2("HEYA BOYS AND GIRLS", 27);
    yield* this.say2("IT LOOKS LIKE YÃ¢â‚¬â„¢ALL WANT SOME*ACTION!", 27);
    yield* this.say2("BECAUSE I GOT OFFERED A LOT*OF MONEY FOR YOUR", 27);
    yield* this.say2("Heads.", 27);
    yield* this.say2("NOW GET OVER HERE AND GIVE ME*A WARM WELCOME!!!!", 27);
    yield* this.say2("AHAHAHAHAHAHAH", 27);
    this.broadcast("John pixel fight");
  }

  *whenIReceiveJohnPixelDies() {
    this.stage.vars.yunuchi += 80;
    this.stage.vars.yunuchi += this.toNumber(this.stage.vars.dangerPoint);
    yield* this.say2("You won! You got eighty*dollars!", 4);
    yield* this.say2("O-oh!", 27);
    yield* this.say2("Interesting!", 27);
    yield* this.say2(
      "INTERESTING HOW YOU THINK*DEFEATING ME WILL MAKE THE*ONES AHEAD EASIER TO DEFEAT.",
      27
    );
    yield* this.say2(
      "THERE WILL BE WAY STRONGER*FOES YOU NEED TO WORRY ABOUT.",
      27
    );
    yield* this.say2("YOU WILL STRUGGLE WITH THE*ENEMY AHEAD OF ME.", 27);
    yield* this.say2("YOU$Will$not$*s$u$r$v$i$v$e$...", 27);
    this.stage.vars.speed = 0;
    this.broadcast("John Pixel vanish");
  }

  *whenIReceiveCarpetTalks() {
    this.broadcast("Left");
    yield* this.say2("H-hey!", 28);
    yield* this.say2("Wait!", 28);
    yield* this.say2("At least let me sing my SONG!", 28);
    this.broadcast("Carpet song :3");
    yield* this.say2("Carpet.$$&", 28);
    yield* this.say2("Carpet.$$&", 28);
    yield* this.say2("Carpet.$$&", 28);
    yield* this.say2("Carpet.$&", 28);
    yield* this.say2("Carpet.$&", 28);
    yield* this.say2("Carpet.$$&", 28);
    yield* this.say2("Carpet.$$&", 28);
    yield* this.say2("Carpet.$$&", 28);
    yield* this.say2("Carpet.$&", 28);
    yield* this.say2("Carpet..&", 28);
    yield* this.say2("Check it out$$&", 28);
    yield* this.say2("IÃ¢â‚¬â„¢m in the house.$$&", 28);
    yield* this.say2("Like carpet$$&", 28);
    yield* this.say2("Like carpet$&", 28);
    yield* this.say2("Carpet.$&", 28);
    yield* this.say2("Carpet.$&", 28);
    yield* this.say2("Check it out$$&", 28);
    yield* this.say2("IÃ¢â‚¬â„¢m in the house.$$&", 28);
    yield* this.say2("IÃ¢â‚¬â„¢m in the house..&", 28);
    yield* this.say2("Like carpet$$&", 28);
    yield* this.say2("Check it out$&", 28);
    yield* this.say2("IÃ¢â‚¬â„¢m in the house.$$&", 28);
    yield* this.say2("Like carpet$$&", 28);
    yield* this.say2("Like carpet$&", 28);
    yield* this.say2("Carpet.$&", 28);
    yield* this.say2("Carpet.$&", 28);
    yield* this.say2("Check it out$$&", 28);
    yield* this.say2("IÃ¢â‚¬â„¢m in the house.$$&", 28);
    yield* this.say2("IÃ¢â‚¬â„¢m in the house..&", 28);
    yield* this.say2("Like carpet$$$$$&", 28);
    yield* this.say2("Check it out$$&", 28);
    yield* this.say2("IÃ¢â‚¬â„¢m HOUSE$&", 28);
    yield* this.say2("IÃ¢â‚¬â„¢m house like carpet.$$$$$&", 28);
    yield* this.say2("House-like carpet$$$$&", 28);
    yield* this.say2("Carpet", 28);
    yield* this.say2("That song sucked ngl", 3);
    yield* this.say2("Why you gotta be a hater", 28);
    yield* this.say2(
      "Yea that song sucked so much*weÃ¢â‚¬â„¢re gonna fight you.",
      3
    );
    this.broadcast("Carpet fight");
  }

  *whenIReceiveCarpetDead() {
    this.stage.vars.yunuchi += 150;
    this.stage.vars.yunuchi += this.toNumber(this.stage.vars.dangerPoint);
    yield* this.say2("You won! You got one*hundred fifty dollars!", 4);
    yield* this.say2("WHAT IS WRONG WITH YOU", 28);
    yield* this.say2("I JUST WANTED TO SING MY ;SONG!", 28);
    yield* this.say2("Oh we thought you got hired*to kill us.", 1);
    yield* this.say2(";WHAT?!", 28);
    yield* this.say2("Uh", 1);
    yield* this.say2("Um", 1);
    yield* this.say2("Nevermind", 1);
  }

  *whenIReceiveWhoIsThat() {
    yield* this.say2("Who... is that?", 2);
    yield* this.say2("Is...", 2);
    yield* this.say2("Is that San&", 1);
    this.stage.vars.speed = 0;
    this.broadcast("sans. reveal");
  }

  *whenIReceiveSans() {
    yield* this.say2("heya.", 29);
    if (this.toNumber(this.stage.vars.diedToSans) === 1) {
      this.broadcast("sans prediction");
      yield* this.say2("hmmm", 29);
      yield* this.say2("that look on your face...", 29);
      yield* this.say2("it looks like youÃ¢â‚¬â„¢ve died to *me before.", 29);
      yield* this.say2("pretty weird, huh?", 29);
      yield* this.say2("want to make it a second time?", 29);
    }
    if (this.toNumber(this.stage.vars.diedToSans) === 2) {
      this.broadcast("sans prediction");
      yield* this.say2("hmmm", 29);
      yield* this.say2("that look on your face...", 29);
      yield* this.say2(
        "it looks like youÃ¢â‚¬â„¢ve died *twice to me before.",
        29
      );
      yield* this.say2("pretty odd", 29);
      yield* this.say2("letÃ¢â‚¬â„¢s try again.", 29);
    }
    if (this.toNumber(this.stage.vars.diedToSans) === 3) {
      this.broadcast("sans prediction");
      yield* this.say2("hmmm", 29);
      yield* this.say2("that look on your face...", 29);
      yield* this.say2("you really do suck at this game.", 29);
      yield* this.say2("youÃ¢â‚¬â„¢ve died three times.", 29);
      yield* this.say2("letÃ¢â‚¬â„¢s try again.", 29);
    }
    if (this.toNumber(this.stage.vars.diedToSans) === 4) {
      this.broadcast("sans prediction");
      yield* this.say2("hmmm", 29);
      yield* this.say2("that look on your face...", 29);
      yield* this.say2("four times?!", 29);
      yield* this.say2("really.", 29);
      yield* this.say2("letÃ¢â‚¬â„¢s try again.", 29);
    }
    if (this.compare(4, this.stage.vars.diedToSans) < 0) {
      this.broadcast("sans prediction");
      yield* this.say2("hey guys.", 29);
      yield* this.say2("canÃ¢â‚¬â„¢t you like,", 29);
      yield* this.say2("get good.", 29);
      yield* this.say2("really.", 29);
      yield* this.say2("letÃ¢â‚¬â„¢s try again.", 29);
    }
    if (this.toNumber(this.stage.vars.diedToSans) === 0) {
      yield* this.say2("Oh it is sans.", 1);
      yield* this.say2("who else were you expecting?", 29);
      yield* this.say2("No one...", 1);
      yield* this.say2("uh", 29);
      yield* this.say2("alright", 29);
      yield* this.say2("so this forch guy", 29);
      yield* this.say2("he kinda hired me to fight you.", 29);
      yield* this.say2("but iÃ¢â‚¬â„¢m too lazy to do that", 29);
      yield* this.say2("Too bad.", 3);
      yield* this.say2("Fight. Now.", 3);
      yield* this.say2("We need content for this game.", 3);
      yield* this.say2("huh", 29);
    }
    this.broadcast("sans fight");
  }

  *whenIReceiveSansGotBonked() {
    this.stage.vars.yunuchi += 17;
    this.stage.vars.yunuchi += this.toNumber(this.stage.vars.dangerPoint);
    yield* this.say2("You won! You got seventeen*dollars!", 4);
    yield* this.say2("ererererererererer", 29);
    yield* this.say2("feel i donÃ¢â‚¬â„¢t good", 29);
    this.broadcast("sans fall over");
  }

  *whenIReceiveSansTalkInShot() {
    yield* this.say2("heya.", 29);
    yield* this.say2("wanna buy somethinÃ¢â‚¬â„¢?", 29);
    this.stage.vars.speed = 0;
    this.broadcast("shans");
  }

  *whenIReceiveExitShans() {
    yield* this.say2("come again.", 29);
  }

  *whenIReceiveLamp() {
    yield* this.say2("(It appears to be a*conveniently shaped lamp.)", 4);
  }

  *whenIReceiveSillyBillySpeaks() {
    yield* this.say2("Finally someone whoÃ¢â‚¬â„¢s not*hunting us down.", 2);
    yield* this.say2("ItÃ¢â‚¬â„¢s just a cute cat.", 2);
    yield* this.say2("Greetings.", 30);
    yield* this.say2(
      "I am Silly Billy the third*ultimate max pro air thirteen*nineteen seventy addition Jr.",
      30
    );
    yield* this.say2("You can call me SBTUMPATNSAJ*for short.", 30);
    yield* this.say2("I am the most wanted criminal*in this tower.", 30);
    yield* this.say2("How?", 1);
    yield* this.say2("YouÃ¢â‚¬â„¢re too cute to be a*criminal!", 3);
    yield* this.say2("I would like to propose a*deal.", 30);
    this.stage.vars.speed = 0;
    this.broadcast("sbtumpatnsaj threat");
    yield* this.wait(1.5);
    yield* this.say2(";GIVE ME ONE THOUSAND DOLLARS*OR YOU DIE.", 31);
    this.stage.vars.speed = 0;
    this.broadcast("94y 0r d13");
  }

  *whenIReceive00nt94y() {
    yield* this.say2("...no?", 31);
    this.broadcast("4n9ry");
    yield* this.say2(";...guess you want to do this*the hard way.", 31);
    this.broadcast("...abattlestart");
    this.broadcast("5111y 8111y f19ht");
  }

  *whenIReceive5111y8111yD34d() {
    this.stage.vars.yunuchi += 80;
    this.stage.vars.yunuchi += this.toNumber(this.stage.vars.dangerPoint);
    yield* this.say2("You won! You got eighty*dollars!", 4);
    yield* this.say2("...ok. I admit. You beat me.", 30);
    yield* this.say2("...take this. ", 30);
    yield* this.say2("(You got one hundred seventy*dollars.)", 4);
    yield* this.say2("Now leave me alone.", 30);
  }

  *whenIReceive666() {
    yield* this.say2("THE POWERS MUST COME", 32);
    yield* this.say2("COMBINE", 32);
    yield* this.say2("SATURN-TIED", 32);
    yield* this.say2("JONTIFE", 32);
    yield* this.say2("LINYUN", 32);
    yield* this.say2("GOFLIND", 32);
    yield* this.say2("yhne SD fkfjpw", 32);
    this.broadcast("667");
  }

  *startAsClone5() {
    while (true) {
      if (this.toNumber(this.stage.vars.voice) === 32) {
        this.effects.ghost = 95;
      }
      yield;
    }
  }

  *whenIReceiveFinalFinalFinalBossSpeech() {
    yield* this.say2("...ugh.", 26);
    yield* this.say2("its ;YOU.", 26);
    yield* this.say2("hi!", 1);
    yield* this.say2("I see you got past my army...", 26);
    yield* this.say2("Well, your army was like,*three people.", 2);
    yield* this.say2("Well. Make it four.", 26);
    yield* this.say2("That fourth one is...", 26);
    this.broadcast("forch turn");
    yield* this.say2(";ME!!!!!!!!!!!!!!!!!!!!!!!!", 26);
    yield* this.say2(";I AM THE FINAL BOSS!!!!!!!", 26);
    yield* this.say2("Of the chapter of the game?&", 2);
    yield* this.say2("NO", 26);
    yield* this.say2("EVER", 26);
    yield* this.say2(";UGH I HATE YOU GUYS.", 26);
    yield* this.say2(";YOU KNOW WHAT..?!", 26);
    this.stage.vars.speed = 0;
    this.broadcast("hand move to 'get rid of' zork and jone");
  }

  *whenIReceiveShallWeGetStarted() {
    yield* this.say2("Now.", 26);
    yield* this.say2("Lets get$;started.", 26);
    this.broadcast("1000 FINAL FIGHT NOW");
    this.broadcast("...abattlestart");
  }

  *whenIReceiveFinalFinalFinalFinalBossDefeateddddddd() {
    yield* this.say2(
      "You won! You got no money*because this is the last fight*and you can't spend your money.",
      4
    );
    yield* this.say2("You also got the KRYSTIL.", 4);
    for (let i = 0; i < 3; i++) {
      yield* this.say2(";I gues_&", 26);
      yield;
    }
    yield* this.say2(";AAAAAAAUGHHHHH", 26);
    yield* this.say2("M$A$K$E   I$T   S$T$O$P", 26);
    yield* this.say2(
      "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA*AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA*AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      26
    );
    this.stage.vars.speed = 0;
    this.broadcast("forch fall to ground");
    yield* this.wait(3);
    yield* this.say2("Hey! You beat him!", 2);
    yield* this.say2("Nice. I guess.", 3);
    yield* this.say2("Ok, lesgo beat the game now.", 1);
  }

  *whenIReceiveLegalDocument() {
    yield* this.say2("Sign here.", 30);
    this.stage.vars.speed = 0;
  }

  *whenIReceiveYouGotALottaMoney() {
    yield* this.startSound("139-item-catch");
    this.stage.vars.yunuchi += 1000000;
    yield* this.say2("(You found a chest with one*million dollars in it.)", 4);
    yield* this.say2("(For some reason.)", 4);
  }
}
