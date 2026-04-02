import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bullet8 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Bullet8/costumes/costume1.png", {
        x: 30,
        y: 58,
      }),
      new Costume("costume2", "./Bullet8/costumes/costume2.png", {
        x: 30,
        y: 58,
      }),
      new Costume("costume3", "./Bullet8/costumes/costume3.png", {
        x: 9,
        y: 7,
      }),
      new Costume("costume4", "./Bullet8/costumes/costume4.png", {
        x: 9,
        y: 7,
      }),
    ];

    this.sounds = [new Sound("pop", "./Bullet8/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Eyeball attack" },
        this.whenIReceiveEyeballAttack
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ur turn" },
        this.whenIReceiveUrTurn
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
    ];

    this.vars.mm = 0;
    this.vars.nohurt = 0;
  }

  *whenGreenFlagClicked() {
    this.clearPen();
    this.visible = false;
  }

  *whenIReceiveEyeballAttack() {
    this.moveAhead();
    this.goto(200, -15);
    this.costume = "costume1";
    this.visible = true;
    yield* this.glide(0.5, 0, 125);
    yield* this.wait(0.3);
    this.costume = "costume2";
    this.goto(10, 130);
    this.direction = 90;
    this.createClone();
    this.goto(-10, 130);
    this.direction = -90;
    this.createClone();
    this.goto(0, 125);
    yield* this.wait(10);
    this.broadcast("Ur turn");
  }

  *startAsClone() {
    this.moveAhead();
    this.costume = "costume3";
    this.size = 100;
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
    this.vars.mm = 0;
    for (let i = 0; i < 21; i++) {
      this.y += this.toNumber("-" + this.toString(this.vars.mm));
      this.vars.mm++;
      this.size += this.toNumber(this.vars.mm) - 3;
      this.move(1);
      yield;
    }
    this.y += 10;
    this.vars.mm = 0;
    this.direction = this.random(1, 360);
    while (true) {
      this.move(8);
      if (
        this.touching(this.sprites["Sprite18"].andClones()) ||
        this.touching(Color.rgb(255, 222, 0))
      ) {
        this.direction += 180;
        this.direction += this.random(-5, 5);
      }
      if (this.random(1, 400) === 1) {
        this.direction = this.radToScratch(
          Math.atan2(
            this.sprites["Sprite20"].y - this.y,
            this.sprites["Sprite20"].x - this.x
          )
        );
        this.costume = "costume4";
      }
      yield;
    }
  }

  *whenIReceiveUrTurn() {
    for (let i = 0; i < 20; i++) {
      this.effects.ghost += 5;
      yield;
    }
    this.visible = false;
    this.effects.clear();
    /* TODO: Implement stop other scripts in sprite */ null;
    this.deleteThisClone();
  }

  *startAsClone2() {
    this.visible = true;
    while (true) {
      if (this.touching(this.sprites["Sprite20"].andClones())) {
        if (this.toNumber(this.stage.vars.iFrames) === 0) {
          if (this.toNumber(this.vars.nohurt) === 0) {
            this.stage.vars.hp -= 8;
            this.stage.vars.iFrames++;
          }
        }
      }
      yield;
    }
  }

  *startAsClone3() {
    while (true) {
      if (this.costumeNumber === 4) {
        yield* this.wait(1);
        this.costume = "costume3";
      }
      yield;
    }
  }
}
