import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite71 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Fighter", "./sprite71/costumes/Fighter.png", {
        x: 21,
        y: -18,
      }),
      new Costume("Box", "./sprite71/costumes/Box.png", { x: 20, y: -18 }),
      new Costume("Cactus", "./sprite71/costumes/Cactus.png", {
        x: 30,
        y: -19,
      }),
      new Costume("Cat", "./sprite71/costumes/Cat.png", { x: 17, y: -20 }),
    ];

    this.sounds = [new Sound("pop", "./sprite71/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
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
    this.costume = this.stage.vars.body;
    this.effects.brightness = -100;
    this.goto(100, 210);
    yield* this.glide(1, 100, 15);
    this.goto(100, 15);
  }

  *whenIReceiveThrasherBattle() {
    this.effects.brightness = 0;
    yield* this.glide(1, 140, 15);
  }

  *whenIReceiveFoeDeath() {
    yield* this.wait(1);
    this.direction = 90;
    this.goto(140, 15);
    yield* this.glide(0.2, 100, -44);
    this.direction = 0;
    for (let i = 0; i < 20; i++) {
      this.effects.ghost += 5;
      yield;
    }
    this.visible = false;
  }
}
