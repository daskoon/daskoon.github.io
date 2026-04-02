import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite162 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite162/costumes/costume1.png", {
        x: 110,
        y: 108,
      }),
    ];

    this.sounds = [
      new Sound(
        "bop-it-twist-it-pull-it-made-with-Voicemod",
        "./Sprite162/sounds/bop-it-twist-it-pull-it-made-with-Voicemod.mp3"
      ),
      new Sound(
        "pullit-101soundboards",
        "./Sprite162/sounds/pullit-101soundboards.wav"
      ),
      new Sound(
        "bopit-101soundboards",
        "./Sprite162/sounds/bopit-101soundboards.wav"
      ),
      new Sound(
        "twistit-101soundboards",
        "./Sprite162/sounds/twistit-101soundboards.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Bop it!" },
        this.whenIReceiveBopIt
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "GaminÃ¢â‚¬â„¢" },
        this.whenIReceiveGamin
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Do the" },
        this.whenIReceiveDoThe
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Do the" },
        this.whenIReceiveDoThe2
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Bop it? Nah stop it" },
        this.whenIReceiveBopItNahStopIt
      ),
    ];

    this.audioEffects.volume = 0;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveBopIt() {
    this.audioEffects.volume = 100;
    this.visible = true;
    this.goto(0, 0);
    yield* this.wait(0);
    this.moveAhead();
    yield* this.wait(0.5);
    this.broadcast("GaminÃ¢â‚¬â„¢");
    this.stage.watchers.timeLeftUntilYouGetBoppedYourself.visible = false;
    this.stage.vars.streak = 0;
    this.broadcast("Do the");
  }

  *whenIReceiveGamin() {
    this.stage.vars.randomBops = this.random(1, 3);
    if (this.toNumber(this.stage.vars.randomBops) === 1) {
      this.effects.brightness = 50;
      yield* this.startSound("bopit-101soundboards");
      while (!(this.touching("mouse") && this.mouse.down)) {
        yield;
      }
      this.stage.vars.timeLeftUntilYouGetBoppedYourself = 5;
      this.stage.vars.streak++;
      this.effects.clear();
      yield* this.wait(this.random(0.1, 0.8));
      this.broadcast("GaminÃ¢â‚¬â„¢");
    }
    if (this.toNumber(this.stage.vars.randomBops) === 2) {
      this.broadcast("Twist it");
      yield* this.startSound("twistit-101soundboards");
    }
    if (this.toNumber(this.stage.vars.randomBops) === 3) {
      yield* this.startSound("pullit-101soundboards");
      this.broadcast("Pull it!");
    }
  }

  *whenIReceiveDoThe() {
    this.stage.vars.streak = 0;
    this.stage.vars.timeLeftUntilYouGetBoppedYourself = 5;
    this.stage.watchers.timeLeftUntilYouGetBoppedYourself.visible = true;
    while (true) {
      this.stage.vars.timeLeftUntilYouGetBoppedYourself -= 0.2;
      yield* this.wait(0.1);
      if (
        this.compare(this.stage.vars.timeLeftUntilYouGetBoppedYourself, 0.1) < 0
      ) {
        this.stage.vars.timeLeftUntilYouGetBoppedYourself = 0;
        /* TODO: Implement stop other scripts in sprite */ null;
        yield* this.wait(0.5);
        this.broadcast("GaminÃ¢â‚¬â„¢");
        this.broadcast("Do the");
      }
      if (this.compare(19, this.stage.vars.streak) < 0) {
        /* TODO: Implement stop other scripts in sprite */ null;
        this.broadcast("Bop it? Nah stop it");
        return;
      }
      yield;
    }
  }

  *whenIReceiveDoThe2() {
    this.effects.clear();
  }

  *whenthisspriteclicked() {
    if (!(this.toNumber(this.stage.vars.randomBops) === 1)) {
      this.stage.vars.timeLeftUntilYouGetBoppedYourself = 0;
    }
  }

  *whenIReceiveBopItNahStopIt() {
    this.stage.watchers.timeLeftUntilYouGetBoppedYourself.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
    this.stage.vars.speed = 4;
    this.visible = false;
    while (true) {
      this.audioEffects.volume = 0;
      yield;
    }
  }
}
