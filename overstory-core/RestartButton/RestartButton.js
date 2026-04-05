import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class RestartButton extends Sprite {
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
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "Death" }, this.whenIReceiveDeath),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Restart" },
        this.whenIReceiveRestart
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(0, -175);
  }

  *whenthisspriteclicked() {
    window.GAMEOVER = 0;
    this.broadcast("Restart");
  }

  *whenIReceiveDeath() {
    this.goto(0, -175);
    this.visible = true;
  }

  *whenIReceiveRestart() {
    this.visible = false;
    yield* this.wait(0.5);
  }
}
