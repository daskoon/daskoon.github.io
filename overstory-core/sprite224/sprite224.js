import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite224 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./costumes/costume1.png", {
        x: 69,
        y: 96,
      }),
      new Costume("costume2", "./costumes/costume2.png", {
        x: 71,
        y: 96,
      }),
    ];

    this.sounds = [new Sound("pop", "./sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "main chrctrs fall" },
        this.whenIReceiveMainChrctrsFall
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenIReceiveMainChrctrsFall() {
    this.costume = "costume1";
    this.goto(0, 0);
    this.visible = true;
    yield* this.wait(2);
    this.costume = "costume2";
    yield* this.glide(0.5, 0, -120);
    this.broadcast("eeennnnddd credits");
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
