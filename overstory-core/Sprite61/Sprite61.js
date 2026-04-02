import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite61 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume3", "./Sprite61/costumes/costume3.png", {
        x: 125,
        y: 30,
      }),
    ];

    this.sounds = [
      new Sound("pop", "./Sprite61/sounds/pop.wav"),
      new Sound(
        "stone-slide-sounds-effects-made-with-Voicemod",
        "./Sprite61/sounds/stone-slide-sounds-effects-made-with-Voicemod.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Room9" }, this.whenIReceiveRoom9),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room10" },
        this.whenIReceiveRoom10
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.BROADCAST, { name: "Shop" }, this.whenIReceiveShop),
    ];

    this.audioEffects.volume = 0;
  }

  *whenGreenFlagClicked() {
    this.audioEffects.volume = 0;
    this.visible = false;
  }

  *whenIReceiveRoom9() {
    this.visible = true;
    this.moveBehind();
    this.moveAhead(3);
    this.goto(0, 0);
    this.costume = "costume3";
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
    this.direction = 90;
    while (true) {
      this.direction = this.sprites["Player"].direction;
      if (this.touching(this.sprites["Player"].andClones())) {
        this.move(4);
        this.y = 0;
        if (this.stringIncludes(this.toString(this.x), "-")) {
          this.goto(0, 0);
        }
      }
      if (this.touching(Color.rgb(188, 188, 188))) {
        this.goto(95, 0);
        this.broadcast("Room9 door");
        return;
      }
      yield;
    }
  }

  *whenIReceiveRoom10() {
    this.visible = true;
    this.moveBehind();
    this.moveAhead(3);
    this.goto(-100, 0);
    this.costume = "costume3";
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
    while (true) {
      this.direction = this.sprites["Player"].direction;
      if (this.touching(this.sprites["Player"].andClones())) {
        this.move(4);
        this.y = 0;
        if (this.compare(this.x, -100) < 0) {
          this.goto(-100, 0);
        }
      }
      if (this.touching(Color.rgb(188, 188, 188))) {
        this.goto(-5, 0);
        this.broadcast("Room10 fan");
        return;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      yield* this.playSoundUntilDone(
        "stone-slide-sounds-effects-made-with-Voicemod"
      );
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.touching(this.sprites["Player"].andClones())) {
        this.audioEffects.volume = 100;
      } else {
        this.audioEffects.volume = 0;
      }
      yield;
    }
  }

  *whenIReceiveShop() {
    this.visible = false;
  }
}
