import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite56 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite56/costumes/costume1.png", {
        x: 83,
        y: 55,
      }),
    ];

    this.sounds = [new Sound("pop", "./Sprite56/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Shop interface" },
        this.whenIReceiveShopInterface
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Exit shop" },
        this.whenIReceiveExitShop
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Propose" },
        this.whenIReceivePropose
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ur turn" },
        this.whenIReceiveUrTurn
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jane battle" },
        this.whenIReceiveJaneBattle
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveShopInterface() {
    this.moveAhead();
    this.goto(125, 0);
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("Exit shop");
  }

  *whenIReceiveExitShop() {
    this.stage.watchers.grilledCheese.visible = false;
    this.visible = false;
  }

  *whenIReceivePropose() {
    this.stage.watchers.grilledCheese.visible = false;
    this.visible = false;
  }

  *whenIReceiveUrTurn() {
    yield* this.wait(0);
    if (this.toNumber(this.stage.vars.nohit) === 1) {
      this.stage.vars.hp = 1;
    }
  }

  *whenIReceiveJaneBattle() {
    yield* this.wait(0);
    if (this.toNumber(this.stage.vars.nohit) === 1) {
      this.stage.vars.hp = 1;
    }
  }
}
