import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite170 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./sprite170/costumes/costume1.png", {
        x: 50,
        y: 47,
      }),
    ];

    this.sounds = [new Sound("pop", "./sprite170/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ur turn" },
        this.whenIReceiveUrTurn
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Memory head ahh attack 2" },
        this.whenIReceiveMemoryHeadAhhAttack2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Coins :3" },
        this.whenIReceiveCoins3
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveUrTurn() {
    if (this.toNumber(this.stage.vars.battle) === 16) {
      this.visible = false;
    }
  }

  *whenIReceiveMemoryHeadAhhAttack2() {
    this.effects.ghost += 100;
    this.goto(210, 60);
    this.visible = true;
    for (let i = 0; i < 10; i++) {
      this.effects.ghost -= 10;
      yield;
    }
  }

  *whenIReceiveCoins3() {
    this.effects.ghost += 100;
    this.goto(210, 60);
    this.visible = true;
    for (let i = 0; i < 10; i++) {
      this.effects.ghost -= 10;
      yield;
    }
  }
}
