import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite70 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Fighter", "./costumes/Fighter.png", {
        x: 29,
        y: 36,
      }),
      new Costume("Box", "./costumes/Box.png", { x: 33, y: 42 }),
      new Costume("Cactus", "./costumes/Cactus.png", { x: 43, y: 40 }),
      new Costume("Cat", "./costumes/Cat.png", { x: 44, y: 52 }),
    ];

    this.sounds = [
      new Sound("pop", "./sounds/pop.wav"),
      new Sound("1", "./sounds/1.wav"),
      new Sound(
        "undertale-sound-effect-inflicting-damage-made-with-Voicemod",
        "./sounds/undertale-sound-effect-inflicting-damage-made-with-Voicemod.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Foe cutscene" },
        this.whenIReceiveFoeCutscene
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Head form" },
        this.whenIReceiveHeadForm
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Thrasher battle" },
        this.whenIReceiveThrasherBattle
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Enemy turn" },
        this.whenIReceiveEnemyTurn
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Thrasher battle" },
        this.whenIReceiveThrasherBattle2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Thrasher battle" },
        this.whenIReceiveThrasherBattle3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Foe death" },
        this.whenIReceiveFoeDeath
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.direction = 90;
    this.visible = false;
  }

  *whenIReceiveFoeCutscene() {
    this.visible = true;
    this.costume = this.stage.vars.head;
    this.effects.brightness = -100;
    this.goto(100, 176);
    yield* this.glide(1, 100, 15);
    this.goto(100, 15);
    yield* this.startSound("pop");
  }

  *whenIReceiveHeadForm() {
    yield* this.startSound("pop");
    this.effects.clear();
    for (let i = 0; i < 10; i++) {
      this.goto(100, 15);
      this.x += this.random(-5, 5);
      yield;
    }
    this.goto(100, 15);
  }

  *whenIReceiveThrasherBattle() {
    this.stage.vars.dangerPoint = 0;
    this.stage.vars.hp = 100;
    this.stage.vars.inBattle = 1;
    this.stage.vars.enemyHp = 850;
    yield* this.glide(1, 140, 15);
    this.stage.vars.battle = 4;
    this.broadcast("Ur turn");
    this.stage.watchers._.visible = false;
    this.stage.vars.speed = 4;
    this.stage.watchers.hp.visible = true;
    this.goto(140, 10);
    while (true) {
      yield* this.glide(0.15, 143, 15);
      yield* this.glide(0.3, 143, 10);
      yield* this.glide(0.3, 140, 15);
      yield* this.glide(0.3, 137, 10);
      yield* this.glide(0.3, 140, 15);
      yield;
    }
  }

  *whenIReceiveEnemyTurn() {
    if (this.toNumber(this.stage.vars.battle) === 4) {
      yield* this.wait(1);
      if (this.random(1, 2) === 1) {
        if (this.toString(this.stage.vars.body) === "Box") {
          this.sprites["Sprite88"].createClone();
        }
        if (this.toString(this.stage.vars.body) === "Cat") {
          this.sprites["Sprite89"].createClone();
        }
        if (this.toString(this.stage.vars.body) === "Cactus") {
          this.broadcast("Cactus pines");
        }
        if (this.toString(this.stage.vars.head) === "Fighter") {
          this.sprites["Sprite87"].createClone();
        }
      }
      if (this.random(1, 2) === 1) {
        if (this.toString(this.stage.vars.head) === "Box") {
          this.broadcast("Packing peanuts");
        }
        if (this.toString(this.stage.vars.head) === "Cat") {
          this.broadcast("Meow");
        }
        if (this.toString(this.stage.vars.head) === "Cactus") {
          this.broadcast("Tetris dirt");
        }
        if (this.toString(this.stage.vars.body) === "Fighter") {
          this.broadcast("Dumbells");
        }
      } else {
        if (this.toString(this.stage.vars.legs) === "Box") {
          this.broadcast("Bubble wrap");
        }
        if (this.toString(this.stage.vars.legs) === "Cat") {
          this.broadcast("A paw atari");
        }
        if (this.toString(this.stage.vars.legs) === "Cactus") {
          this.broadcast("Tumble cactus");
        }
        if (this.toString(this.stage.vars.legs) === "Fighter") {
          this.broadcast("A leg atari");
        }
      }
    }
  }

  *whenIReceiveThrasherBattle2() {
    yield* this.wait(1);
    while (true) {
      yield* this.playSoundUntilDone(1);
      yield;
    }
  }

  *whenIReceiveThrasherBattle3() {
    yield* this.wait(0.1);
    while (!(this.compare(this.stage.vars.enemyHp, 1) < 0)) {
      yield;
    }
    this.broadcast("Foe end");
    /* TODO: Implement stop other scripts in sprite */ null;
    yield* this.startSound(
      "undertale-sound-effect-inflicting-damage-made-with-Voicemod"
    );
    this.stage.vars.inBattle = 0;
    this.stage.vars.battle = 0;
    this.stage.vars.speed = 0;
    for (let i = 0; i < 10; i++) {
      this.goto(140, 10);
      this.x += this.random(-5, 5);
      yield;
    }
    this.goto(140, 10);
  }

  *whenIReceiveFoeDeath() {
    this.stage.watchers.hp.visible = false;
    this.direction = 90;
    this.goto(140, 10);
    yield* this.glide(0.2, 100, -44);
    this.direction = 0;
    yield* this.startSound("pop");
    for (let i = 0; i < 20; i++) {
      this.effects.ghost += 5;
      yield;
    }
    this.visible = false;
  }
}
