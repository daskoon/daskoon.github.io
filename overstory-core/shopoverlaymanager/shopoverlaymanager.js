import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Shopoverlaymanager extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./shopoverlaymanager/costumes/costume1.png", {
        x: 64,
        y: 47,
      }),
      new Costume("costume2", "./shopoverlaymanager/costumes/costume2.png", {
        x: 64,
        y: 47,
      }),
      new Costume("costume3", "./shopoverlaymanager/costumes/costume3.png", {
        x: 64,
        y: 47,
      }),
      new Costume("costume4", "./shopoverlaymanager/costumes/costume4.png", {
        x: 64,
        y: 47,
      }),
    ];

    this.sounds = [
      new Sound("pop", "./shopoverlaymanager/sounds/pop.wav"),
      new Sound(
        "Wagner Bridal Chorus",
        "./shopoverlaymanager/sounds/Wagner Bridal Chorus.wav"
      ),
      new Sound("record-scratch_1", "./shopoverlaymanager/sounds/record-scratch_1.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Shop" }, this.whenIReceiveShop),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jane battle" },
        this.whenIReceiveJaneBattle
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jone defeat" },
        this.whenIReceiveJoneDefeat
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Bad explosion" },
        this.whenIReceiveBadExplosion
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Door cutscene" },
        this.whenIReceiveDoorCutscene
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Man come up" },
        this.whenIReceiveManComeUp
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Exit shop" },
        this.whenIReceiveExitShop
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "Room6" }, this.whenIReceiveRoom6),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room11" },
        this.whenIReceiveRoom11
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room14" },
        this.whenIReceiveRoom14
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room17" },
        this.whenIReceiveRoom17
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Mawege" },
        this.whenIReceiveMawege
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Mawege" },
        this.whenIReceiveMawege2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Back 2 normal :3" },
        this.whenIReceiveBack2Normal3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Fade to black" },
        this.whenIReceiveFadeToBlack
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "DonÃ¢â‚¬â„¢t Ã°Å¸ËœÂ¬" },
        this.whenIReceiveDonT
      ),
    ];

    this.audioEffects.volume = 0;
  }

  *whenGreenFlagClicked() {
    this.stage.vars.yunuchi = 30;
    this.visible = false;
    this.stage.watchers._.visible = false;
    while (true) {
      this.stage.vars._ = this.stage.vars.yunuchi;
      if (this.stage.costumeNumber === 6) {
        this.visible = true;
      } else {
        if (this.toNumber(this.stage.vars.marrying) === 0) {
          this.visible = false;
        }
      }
      yield;
    }
  }

  *whenIReceiveShop() {
    this.goto(69, 100);
    this.moveBehind();
    this.visible = true;
  }

  *whenIReceiveJaneBattle() {
    this.stage.watchers._.visible = false;
  }

  *whenIReceiveJoneDefeat() {
    this.stage.watchers._.visible = true;
  }

  *whenIReceiveBadExplosion() {
    this.stage.watchers._.visible = true;
  }

  *whenIReceiveDoorCutscene() {
    this.stage.watchers._.visible = false;
  }

  *whenIReceiveManComeUp() {
    this.costume = "costume1";
    if (this.toNumber(this.stage.vars.married) === 1) {
      this.costume = "costume2";
    }
    this.visible = true;
    this.stage.vars.speed = 0;
    this.size = 70;
    this.goto(69, 100);
    if (this.toNumber(this.stage.vars.shopped) === 0) {
      yield* this.glide(5, 69, 140);
    }
    if (this.toNumber(this.stage.vars.shopped) === 1) {
      yield* this.glide(1, 69, 140);
    }
  }

  *whenIReceiveExitShop() {
    yield* this.glide(0.5, 69, 100);
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
  }

  *whenIReceiveStart() {
    this.stage.watchers._.visible = true;
  }

  *whenIReceiveRoom6() {
    this.visible = false;
  }

  *whenIReceiveRoom11() {
    this.visible = false;
  }

  *whenIReceiveRoom14() {
    this.visible = false;
  }

  *whenIReceiveRoom17() {
    this.visible = false;
  }

  *whenIReceiveMawege() {
    this.costume = "costume3";
    this.visible = true;
    this.goto(247, 10);
    yield* this.glide(10, 64, 10);
    yield* this.wait(5);
    this.broadcast("Jimmy walks in holding bible");
  }

  *whenIReceiveMawege2() {
    this.audioEffects.volume = 100;
    while (true) {
      yield* this.playSoundUntilDone("Wagner Bridal Chorus");
      yield;
    }
  }

  *whenIReceiveBack2Normal3() {
    this.goto(69, 100);
    this.costume = "costume2";
    this.moveBehind();
    this.visible = true;
  }

  *whenIReceiveFadeToBlack() {
    for (let i = 0; i < 100; i++) {
      this.audioEffects.volume -= 2;
      yield;
    }
  }

  *whenIReceiveDonT() {
    this.costume = "costume4";
    /* TODO: Implement stop other scripts in sprite */ null;
    yield* this.startSound("record-scratch_1");
    while (true) {
      this.stage.vars._ = this.stage.vars.yunuchi;
      if (this.stage.costumeNumber === 6) {
        this.visible = true;
      } else {
        if (this.toNumber(this.stage.vars.marrying) === 0) {
          this.visible = false;
        }
      }
      yield;
    }
  }
}
