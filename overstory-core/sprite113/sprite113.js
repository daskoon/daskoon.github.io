import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite113 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.svg", {
        x: 123.0899887084961,
        y: 235.19375000000005,
      }),
      new Costume("costume2", "./costumes/costume2.svg", {
        x: 123.08999,
        y: 234.8048675946045,
      }),
    ];

    this.sounds = [new Sound("pop", "./sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Credits" },
        this.whenIReceiveCredits
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Credits 2" },
        this.whenIReceiveCredits2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "eeennnnddd credits" },
        this.whenIReceiveEeennnndddCredits
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveCredits() {
    this.costume = "costume1";
    this.moveAhead();
    this.goto(0, -400);
    this.visible = true;
    yield* this.glide(40, 0, 391);
    this.visible = false;
    /* TODO: Implement stop all */ null;
  }

  *whenIReceiveCredits2() {
    this.costume = "costume1";
    this.moveAhead();
    this.goto(0, -400);
    this.visible = true;
    yield* this.glide(20, 0, 391);
    this.visible = false;
    /* TODO: Implement stop all */ null;
  }

  *whenIReceiveEeennnndddCredits() {
    yield* this.wait(5);
    this.costume = "costume2";
    this.moveAhead();
    this.goto(0, -400);
    this.visible = true;
    yield* this.glide(26, 0, 355);
    yield* this.wait(3);
    this.visible = false;
    /* TODO: Implement stop all */ null;
  }
}
