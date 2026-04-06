import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite66 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Fighter", "./costumes/Fighter.png", {
        x: 32,
        y: -70,
      }),
      new Costume("Box", "./costumes/Box.png", { x: 47, y: -70 }),
      new Costume("Cactus", "./costumes/Cactus.png", {
        x: 44,
        y: -68,
      }),
      new Costume("Cat", "./costumes/Cat.png", { x: 27, y: -30 }),
    ];

    this.sounds = [new Sound("pop", "./sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Sequence time!" },
        this.whenIReceiveSequenceTime
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Done foe" },
        this.whenIReceiveDoneFoe
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveSequenceTime() {
    yield* this.wait(0);
    yield* this.wait(0);
    yield* this.wait(2);
    this.costume = "Fighter";
    this.size = 200;
    this.goto(-120, 80);
    this.moveAhead();
    this.moveBehind(2);
    this.visible = true;
    this.effects.ghost += 100;
    for (let i = 0; i < 20; i++) {
      this.effects.ghost -= 5;
      yield;
    }
  }

  *whenthisspriteclicked() {
    yield* this.startSound("pop");
    this.costumeNumber++;
  }

  *whenIReceiveDoneFoe() {
    this.stage.vars.legs = this.costume.name;
    this.visible = false;
  }
}
