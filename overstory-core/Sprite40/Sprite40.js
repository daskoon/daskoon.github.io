import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite40 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume3", "./Sprite40/costumes/costume3.png", {
        x: 26,
        y: 23,
      }),
      new Costume("costume2", "./Sprite40/costumes/costume2.png", {
        x: 26,
        y: 21,
      }),
      new Costume("costume4", "./Sprite40/costumes/costume4.png", {
        x: 26,
        y: 21,
      }),
      new Costume("costume1", "./Sprite40/costumes/costume1.png", {
        x: -11,
        y: 62,
      }),
    ];

    this.sounds = [new Sound("pop", "./Sprite40/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Room6" }, this.whenIReceiveRoom6),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Turn off fan1" },
        this.whenIReceiveTurnOffFan1
      ),
      new Trigger(Trigger.BROADCAST, { name: "Room7" }, this.whenIReceiveRoom7),
      new Trigger(Trigger.BROADCAST, { name: "Room7" }, this.whenIReceiveRoom8),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Turn off fan 2" },
        this.whenIReceiveTurnOffFan2
      ),
      new Trigger(Trigger.BROADCAST, { name: "Room8" }, this.whenIReceiveRoom9),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Dark room" },
        this.whenIReceiveDarkRoom
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Thurn on room8 fan" },
        this.whenIReceiveThurnOnRoom8Fan
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room9" },
        this.whenIReceiveRoom10
      ),
      new Trigger(Trigger.BROADCAST, { name: "Shop" }, this.whenIReceiveShop),
    ];

    this.vars.mm = 0;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveRoom6() {
    this.visible = true;
    this.size = 200;
    this.goto(19, 129);
    this.direction = 0;
    while (true) {
      this.costume = "costume3";
      this.createClone();
      yield* this.wait(0.1);
      this.createClone();
      this.costume = "costume2";
      this.createClone();
      this.createClone();
      yield* this.wait(0.1);
      this.costume = "costume4";
      this.createClone();
      this.createClone();
      yield* this.wait(0.1);
      this.costume = "costume2";
      this.createClone();
      this.createClone();
      yield* this.wait(0.1);
      this.createClone();
      yield;
    }
  }

  *startAsClone() {
    this.costume = "costume1";
    this.y += this.random(-35, 25);
    this.effects.ghost = 80;
    this.vars.mm = 0;
    while (!(this.compare(this.x, -100) < 0)) {
      this.vars.mm++;
      this.x += this.toNumber("-" + this.toString(this.vars.mm));
      yield;
    }
    this.deleteThisClone();
  }

  *whenIReceiveTurnOffFan1() {
    /* TODO: Implement stop other scripts in sprite */ null;
    yield* this.startSound("pop");
    this.deleteThisClone();
  }

  *whenIReceiveRoom7() {
    this.visible = false;
  }

  *whenIReceiveRoom8() {
    this.visible = true;
    this.size = 200;
    this.goto(19, 129);
    this.direction = 0;
    while (true) {
      this.costume = "costume3";
      this.createClone();
      yield* this.wait(0.1);
      this.createClone();
      this.costume = "costume2";
      this.createClone();
      this.createClone();
      yield* this.wait(0.1);
      this.costume = "costume4";
      this.createClone();
      this.createClone();
      yield* this.wait(0.1);
      this.costume = "costume2";
      this.createClone();
      this.createClone();
      yield* this.wait(0.1);
      this.createClone();
      yield;
    }
  }

  *whenIReceiveTurnOffFan2() {
    /* TODO: Implement stop other scripts in sprite */ null;
    yield* this.startSound("pop");
    this.deleteThisClone();
  }

  *whenIReceiveRoom9() {
    this.visible = true;
    this.size = 200;
    this.goto(104, -22);
    this.direction = 0;
    while (true) {
      this.costume = "costume3";
      this.createClone();
      yield* this.wait(0.1);
      this.createClone();
      this.costume = "costume2";
      this.createClone();
      this.createClone();
      yield* this.wait(0.1);
      this.costume = "costume4";
      this.createClone();
      this.createClone();
      yield* this.wait(0.1);
      this.costume = "costume2";
      this.createClone();
      this.createClone();
      yield* this.wait(0.1);
      this.createClone();
      yield;
    }
  }

  *whenIReceiveDarkRoom() {
    this.visible = false;
  }

  *whenIReceiveThurnOnRoom8Fan() {
    /* TODO: Implement stop other scripts in sprite */ null;
    yield* this.startSound("pop");
    this.deleteThisClone();
  }

  *whenIReceiveRoom10() {
    this.visible = false;
  }

  *whenIReceiveShop() {
    this.visible = false;
  }
}
