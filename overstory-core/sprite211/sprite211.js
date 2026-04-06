import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite211 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.svg", {
        x: 386.7454900000001,
        y: 517.17868,
      }),
    ];

    this.sounds = [new Sound("pop", "./sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Fobert fight" },
        this.whenIReceiveFobertFight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Fobert fight" },
        this.whenIReceiveFobertFight2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "showza" },
        this.whenIReceiveShowza
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "fobert battle end" },
        this.whenIReceiveFobertBattleEnd
      ),
    ];

    this.vars.clone = 0;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.vars.clone = 0;
  }

  *startAsClone() {
    if (this.toNumber(this.stage.vars.showza) === 1) {
      this.visible = true;
    }
    this.vars.clone = 1;
    this.moveBehind();
    this.goto(465, 345);
    yield* this.glide(8, -465, -345);
    this.deleteThisClone();
  }

  *whenIReceiveFobertFight() {
    this.stage.vars.showza = 0;
    while (true) {
      this.createClone();
      yield* this.wait(2.8);
      yield;
    }
  }

  *whenIReceiveFobertFight2() {
    this.visible = false;
    yield* this.wait(12.82);
    this.broadcast("showza");
    yield* this.wait(0);
    this.visible = false;
    while (true) {
      this.effects.color += 0.5;
      yield;
    }
  }

  *whenIReceiveShowza() {
    this.stage.vars.showza = 1;
    this.visible = true;
  }

  *whenIReceiveFobertBattleEnd() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.deleteThisClone();
  }
}
