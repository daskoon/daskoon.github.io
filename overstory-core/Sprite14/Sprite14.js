import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite14 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite14/costumes/costume1.png", {
        x: 22,
        y: 45,
      }),
      new Costume("costume4", "./Sprite14/costumes/costume4.png", {
        x: 22,
        y: 45,
      }),
      new Costume("costume2", "./Sprite14/costumes/costume2.png", {
        x: 20,
        y: 45,
      }),
      new Costume("costume5", "./Sprite14/costumes/costume5.png", {
        x: 86,
        y: 95,
      }),
      new Costume("costume3", "./Sprite14/costumes/costume3.png", {
        x: 22,
        y: 45,
      }),
      new Costume("costume6", "./Sprite14/costumes/costume6.png", {
        x: 32,
        y: 45,
      }),
      new Costume("costume7", "./Sprite14/costumes/costume7.png", {
        x: 22,
        y: 45,
      }),
      new Costume("costume8", "./Sprite14/costumes/costume8.png", {
        x: 22,
        y: 45,
      }),
    ];

    this.sounds = [new Sound("pop", "./Sprite14/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Room4" }, this.whenIReceiveRoom4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Move behind player" },
        this.whenIReceiveMoveBehindPlayer
      ),
      new Trigger(Trigger.BROADCAST, { name: "Left" }, this.whenIReceiveLeft),
      new Trigger(Trigger.BROADCAST, { name: "Right" }, this.whenIReceiveRight),
      new Trigger(Trigger.BROADCAST, { name: "Up" }, this.whenIReceiveUp),
      new Trigger(Trigger.BROADCAST, { name: "Down" }, this.whenIReceiveDown),
      new Trigger(Trigger.BROADCAST, { name: "Jone" }, this.whenIReceiveJone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jane battle" },
        this.whenIReceiveJaneBattle
      ),
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
        { name: "Room15" },
        this.whenIReceiveRoom15
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Lights on" },
        this.whenIReceiveLightsOn
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
        { name: "Zorky parrty" },
        this.whenIReceiveZorkyParrty
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
        { name: "Start chapter 2" },
        this.whenIReceiveStartChapter2
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
        { name: "Fobert fight" },
        this.whenIReceiveFobertFight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "silly billy speaks" },
        this.whenIReceiveSillyBillySpeaks
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "5111y 8111y f19ht" },
        this.whenIReceive5111y8111yF19ht
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
        { name: "Jone jot grabbed" },
        this.whenIReceiveJoneJotGrabbed2
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
  }

  *whenGreenFlagClicked() {
    this.stage.vars.zorkParty = 0;
    this.stage.vars.inBattle = 0;
    this.stage.vars.zorkBehind = 0;
    this.visible = false;
  }

  *whenIReceiveRoom4() {
    this.visible = true;
    this.goto(120, 0);
    this.costume = "costume5";
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    this.direction = this.radToScratch(
      Math.atan2(
        this.sprites["Player"].y - this.y,
        this.sprites["Player"].x - this.x
      )
    );
    if (!this.stringIncludes(this.toString(this.direction), "-")) {
      this.stage.vars.zorkBehind = 1;
      this.costume = "costume1";
    }
    this.broadcast("Door check");
  }

  *whenIReceiveMoveBehindPlayer() {
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
    this.stage.vars.zorkParty = 1;
    this.costume = "costume4";
    this.broadcast("Zorky parrty");
  }

  *whenIReceiveLeft() {
    if (this.toNumber(this.stage.vars.zorkParty) === 1) {
      if (this.toNumber(this.stage.vars.inBattle) === 0) {
        this.costume = "costume2";
      }
    }
  }

  *whenIReceiveRight() {
    if (this.toNumber(this.stage.vars.zorkParty) === 1) {
      if (this.toNumber(this.stage.vars.inBattle) === 0) {
        this.costume = "costume1";
      }
    }
  }

  *whenIReceiveUp() {
    if (this.toNumber(this.stage.vars.zorkParty) === 1) {
      if (this.toNumber(this.stage.vars.inBattle) === 0) {
        this.costume = "costume3";
      }
    }
  }

  *whenIReceiveDown() {
    if (this.toNumber(this.stage.vars.zorkParty) === 1) {
      if (this.toNumber(this.stage.vars.inBattle) === 0) {
        this.costume = "costume4";
      }
    }
  }

  *whenIReceiveJone() {
    for (let i = 0; i < 10; i++) {
      this.costume = "costume6";
      yield;
    }
  }

  *whenIReceiveJaneBattle() {
    this.costume = "costume7";
    if (this.toNumber(this.stage.vars.thornDagger) === 1) {
      this.costume = "costume8";
    }
    this.stage.vars.inBattle = 1;
    yield* this.glide(0.5, -135, -50);
  }

  *whenIReceiveJone2() {
    yield* this.glide(0.2, 0, -15);
  }

  *whenIReceiveJoneDefeat() {
    this.costume = "costume1";
  }

  *whenIReceiveJoneOpenDoor() {
    this.move(-40);
  }

  *whenIReceiveDoorFight() {
    this.costume = "costume7";
    if (this.toNumber(this.stage.vars.thornDagger) === 1) {
      this.costume = "costume8";
    }
    yield* this.glide(0.5, -135, -50);
  }

  *whenIReceiveAnemone() {
    yield* this.wait(0.5);
    this.costume = "costume6";
    yield* this.glide(0.5, -100, 0);
  }

  *whenIReceiveAmberFight() {
    this.costume = "costume7";
    if (this.toNumber(this.stage.vars.thornDagger) === 1) {
      this.costume = "costume8";
    }
    yield* this.glide(0.5, -135, -50);
  }

  *whenIReceiveJimmyCutscene() {
    this.costume = "costume1";
    yield* this.glide(1, -100, 0);
  }

  *whenIReceiveRoom15() {
    this.visible = false;
  }

  *whenIReceiveLightsOn() {
    this.visible = true;
  }

  *whenIReceiveFoeCutscene() {
    yield* this.glide(0.2, 0, -15);
  }

  *whenIReceiveThrasherBattle() {
    this.costume = "costume7";
    if (this.toNumber(this.stage.vars.thornDagger) === 1) {
      this.costume = "costume8";
    }
    this.stage.vars.inBattle = 1;
    yield* this.glide(0.5, -135, -50);
  }

  *whenIReceiveFoeEnd() {
    this.costume = "costume1";
  }

  *whenIReceiveJimmyPetty() {
    this.costume = "costume6";
    yield* this.glide(0.2, -135, -50);
  }

  *whenIReceiveStartWithSaveTho() {
    this.broadcast("Zorky parrty");
  }

  *whenIReceiveJimmyFight() {
    this.costume = "costume7";
    if (this.toNumber(this.stage.vars.thornDagger) === 1) {
      this.costume = "costume8";
    }
    yield* this.glide(0.5, -135, -50);
    this.broadcast("Ur turn");
  }

  *whenIReceiveJimmyDies() {
    this.costume = "costume1";
  }

  *whenIReceiveFinalRoom() {
    this.visible = false;
    yield* this.wait(3);
    this.visible = true;
    this.goto(0, -189);
    this.costume = "costume3";
    yield* this.glide(2, 0, -136);
    yield* this.glide(1, 30, -79);
  }

  *whenIReceiveSlitherInGetIt() {
    this.costume = "costume6";
  }

  *whenIReceiveTransform() {
    yield* this.wait(1);
    this.costume = "costume3";
  }

  *whenIReceiveFlashWhite3() {
    this.goto(60, -130);
  }

  *whenIReceiveZorkyParrty() {
    this.visible = true;
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
    this.stage.vars.zorkParty = 1;
    this.costume = "costume4";
    while (true) {
      if (this.toNumber(this.stage.vars.speed) === 4) {
        if (this.toNumber(this.stage.vars.inBattle) === 0) {
          this.goto(this.sprites["Player"].x, this.sprites["Player"].y);
          this.direction = this.sprites["Player"].direction;
          if (this.toNumber(this.stage.vars.bigRoom) === 1) {
            this.move(-25);
            this.size = 50;
          } else {
            this.move(-50);
            this.size = 100;
          }
        }
      }
      yield;
    }
  }

  *whenIReceiveMawege() {
    this.goto(98, -144);
    this.costume = "costume3";
  }

  *whenIReceiveRideAcross() {
    yield* this.glide(0.5, -60, 0);
    yield* this.wait(1);
    yield* this.glide(5, 92, 0);
  }

  *whenIReceiveRideOnBack() {
    yield* this.glide(0.5, 92, 0);
    yield* this.wait(1);
    yield* this.glide(5, -60, 0);
  }

  *whenIReceiveShadowZorkFight() {
    this.costume = "costume7";
    if (this.toNumber(this.stage.vars.thornDagger) === 1) {
      this.costume = "costume8";
    }
    yield* this.glide(0.5, -135, -50);
    this.broadcast("Ur turn");
  }

  *whenIReceiveShadowJoneFight() {
    this.costume = "costume7";
    if (this.toNumber(this.stage.vars.thornDagger) === 1) {
      this.costume = "costume8";
    }
    yield* this.glide(0.5, -135, -50);
  }

  *whenIReceiveStartChapter2() {
    this.broadcast("Zorky parrty");
  }

  *whenIReceiveShadowFight() {
    this.costume = "costume7";
    if (this.toNumber(this.stage.vars.thornDagger) === 1) {
      this.costume = "costume8";
    }
    yield* this.glide(0.5, -135, -50);
  }

  *whenIReceiveShadowJoneDead() {
    this.costume = "costume1";
  }

  *whenIReceiveVariousBattle() {
    this.costume = "costume7";
    if (this.toNumber(this.stage.vars.thornDagger) === 1) {
      this.costume = "costume8";
    }
    yield* this.glide(0.5, -135, -50);
  }

  *whenIReceiveDoordevilShadowFight() {
    this.costume = "costume7";
    if (this.toNumber(this.stage.vars.thornDagger) === 1) {
      this.costume = "costume8";
    }
    yield* this.glide(0.5, -135, -50);
  }

  *whenIReceiveDoordevilDiesLmao() {
    this.costume = "costume1";
  }

  *whenIReceiveBoopleyFight() {
    this.costume = "costume7";
    if (this.toNumber(this.stage.vars.thornDagger) === 1) {
      this.costume = "costume8";
    }
    yield* this.glide(0.5, -135, -50);
  }

  *whenIReceiveGaryFight() {
    this.costume = "costume7";
    if (this.toNumber(this.stage.vars.thornDagger) === 1) {
      this.costume = "costume8";
    }
    yield* this.glide(0.5, -135, -50);
  }

  *whenIReceiveGaryDead() {
    this.costume = "costume1";
  }

  *whenIReceiveFinalRoom2() {
    this.visible = false;
    yield* this.wait(4);
    this.visible = true;
    this.goto(0, -189);
    this.costume = "costume3";
    yield* this.glide(2, 0, -136);
    yield* this.glide(1, 30, -79);
  }

  *whenIReceiveStartChapter3() {
    this.broadcast("Zorky parrty");
  }

  *whenIReceiveHandHopDown() {
    for (let i = 0; i < 10; i++) {
      this.costume = "costume6";
      yield;
    }
  }

  *whenIReceiveHandHopDown2() {
    yield* this.glide(0.2, -106, 0);
  }

  *whenIReceivePlantBattle() {
    this.costume = "costume7";
    if (this.toNumber(this.stage.vars.thornDagger) === 1) {
      this.costume = "costume8";
    }
    yield* this.glide(0.5, -135, -50);
  }

  *whenIReceiveAbattoeend() {
    this.costume = "costume1";
  }

  *whenIReceiveJohnPixelFight() {
    this.costume = "costume7";
    if (this.toNumber(this.stage.vars.thornDagger) === 1) {
      this.costume = "costume8";
    }
    yield* this.glide(0.5, -135, -50);
  }

  *whenIReceiveCarpetFight() {
    this.costume = "costume7";
    if (this.toNumber(this.stage.vars.thornDagger) === 1) {
      this.costume = "costume8";
    }
    yield* this.glide(0.5, -135, -50);
  }

  *whenIReceiveSansFight() {
    this.costume = "costume7";
    if (this.toNumber(this.stage.vars.thornDagger) === 1) {
      this.costume = "costume8";
    }
    yield* this.glide(0.5, -135, -50);
  }

  *whenIReceiveFobertFight() {
    this.costume = "costume7";
    if (this.toNumber(this.stage.vars.thornDagger) === 1) {
      this.costume = "costume8";
    }
    yield* this.glide(0.5, -135, -50);
  }

  *whenIReceiveSillyBillySpeaks() {
    this.costume = "costume1";
    yield* this.glide(0.3, -60, 0);
  }

  *whenIReceive5111y8111yF19ht() {
    this.costume = "costume7";
    if (this.toNumber(this.stage.vars.thornDagger) === 1) {
      this.costume = "costume8";
    }
    yield* this.glide(0.5, -135, -50);
  }

  *whenIReceiveRoom666() {
    this.effects.ghost = 100;
  }

  *whenIReceiveFinalFinalFinalBossSpeech() {
    yield* this.glide(0.5, -165, -15);
  }

  *whenIReceiveJoneJotGrabbed() {
    this.visible = false;
  }

  *whenIReceiveJoneJotGrabbed2() {
    this.visible = false;
  }

  *whenIReceiveJoneNZork() {
    this.visible = true;
    this.goto(-238, 0);
    yield* this.glide(1, -216, 0);
  }

  *whenIReceiveTheRealFinalRoom() {
    this.visible = false;
    yield* this.wait(4);
    this.visible = true;
    this.goto(0, -189);
    this.costume = "costume3";
    yield* this.glide(2, 0, -136);
    yield* this.glide(1, 30, -79);
  }

  *whenIReceiveTowerDissesAPear() {
    this.visible = false;
  }
}
