import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Joystick extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Joystick", "./costumes/Joystick.svg", {
        x: 23.574995,
        y: 21.40732,
      }),
      new Costume(
        "Joystick outline",
        "./costumes/Joystick outline.svg",
        { x: 40.190619999999996, y: 35.14715000000001 }
      ),
      new Costume("Joystick move", "./costumes/Joystick move.svg", {
        x: 1.159771829744443,
        y: 12.343349999999987,
      }),
    ];

    this.sounds = [new Sound("Meow", "./sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Shhh joystick" },
        this.whenIReceiveShhhJoystick
      ),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start" },
        this.whenIReceiveStart2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ur turn" },
        this.whenIReceiveUrTurn
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Enemy turn" },
        this.whenIReceiveEnemyTurn
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start with save tho" },
        this.whenIReceiveStartWithSaveTho
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start with save tho" },
        this.whenIReceiveStartWithSaveTho2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start chapter 2" },
        this.whenIReceiveStartChapter2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start chapter 2" },
        this.whenIReceiveStartChapter3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start chapter 3" },
        this.whenIReceiveStartChapter4
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start chapter 3" },
        this.whenIReceiveStartChapter5
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "0h what joy" },
        this.whenIReceive0hWhatJoy
      ),
    ];

    this.vars.index = 1;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.joyX = -169;
    this.stage.vars.joyY = -114;
  }

  *startAsClone() {
    while (true) {
      if (!(this.toNumber(this.stage.vars.speed) === 0)) {
        this.visible = true;
      } else {
        this.visible = false;
      }
      if (this.toNumber(this.stage.vars.maze) === 1) {
        this.effects.brightness = 100;
      } else {
        this.effects.brightness = 0;
      }
      yield;
    }
  }

  *startAsClone2() {
    if (this.toNumber(this.vars.index) === 1) {
      this.costume = "Joystick outline";
      this.moveAhead();
      this.effects.ghost = 0;
    } else {
      null;
    }
  }

  *whenIReceiveShhhJoystick() {
    this.effects.ghost = 100;
  }

  *whenIReceiveStart() {
    this.broadcast("0h what joy");
  }

  *whenIReceiveStart2() {
    while (true) {
      if (!(this.toNumber(this.stage.vars.speed) === 0)) {
        this.visible = true;
      } else {
        this.visible = false;
      }
      yield;
    }
  }

  *whenIReceiveUrTurn() {
    this.visible = false;
  }

  *whenIReceiveEnemyTurn() {
    this.visible = true;
  }

  *whenIReceiveStartWithSaveTho() {
    this.broadcast("0h what joy");
  }

  *whenIReceiveStartWithSaveTho2() {
    while (true) {
      if (!(this.toNumber(this.stage.vars.speed) === 0)) {
        this.visible = true;
      } else {
        this.visible = false;
      }
      yield;
    }
  }

  *whenIReceiveStartChapter2() {
    this.broadcast("0h what joy");
  }

  *whenIReceiveStartChapter3() {
    while (true) {
      if (!(this.toNumber(this.stage.vars.speed) === 0)) {
        this.visible = true;
      } else {
        this.visible = false;
      }
      yield;
    }
  }

  *whenIReceiveStartChapter4() {
    while (true) {
      if (!(this.toNumber(this.stage.vars.speed) === 0)) {
        this.visible = true;
      } else {
        this.visible = false;
      }
      yield;
    }
  }

  *whenIReceiveStartChapter5() {
    this.broadcast("0h what joy");
  }

  *whenIReceive0hWhatJoy() {
    this.visible = true;
    this.costume = "Joystick";
    this.vars.index = 0;
    this.goto(
      this.toNumber(this.stage.vars.joyX),
      this.toNumber(this.stage.vars.joyY)
    );
    this.goto(-166, -113);
    for (let i = 0; i < 1; i++) {
      this.vars.index++;
      this.createClone();
      yield;
    }
    this.moveAhead();
    this.effects.ghost = 0;
    while (true) {
      if (this.toNumber(this.stage.vars.arrowKeys) === 1) {
        if (this.keyPressed("right arrow")) {
          if (!(this.toNumber(this.stage.vars.speed) === 0)) {
            while (!!this.keyPressed("right arrow")) {
              this.costume = "Joystick move";
              this.direction = 90;
              this.rotationStyle = Sprite.RotationStyle.ALL_AROUND;
              this.stage.vars.joystickMoving = 1;
              yield;
            }
          } else {
            this.costume = "Joystick";
            this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
            this.stage.vars.joystickMoving = 0;
          }
        } else {
          this.costume = "Joystick";
          this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
          this.stage.vars.joystickMoving = 0;
        }
        if (this.keyPressed("left arrow")) {
          if (!(this.toNumber(this.stage.vars.speed) === 0)) {
            while (!!this.keyPressed("left arrow")) {
              this.costume = "Joystick move";
              this.direction = -90;
              this.rotationStyle = Sprite.RotationStyle.ALL_AROUND;
              this.stage.vars.joystickMoving = 1;
              yield;
            }
          } else {
            this.costume = "Joystick";
            this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
            this.stage.vars.joystickMoving = 0;
          }
        } else {
          this.costume = "Joystick";
          this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
          this.stage.vars.joystickMoving = 0;
        }
        if (this.keyPressed("down arrow")) {
          if (!(this.toNumber(this.stage.vars.speed) === 0)) {
            while (!!this.keyPressed("down arrow")) {
              this.costume = "Joystick move";
              this.direction = 180;
              this.rotationStyle = Sprite.RotationStyle.ALL_AROUND;
              this.stage.vars.joystickMoving = 1;
              yield;
            }
          } else {
            this.costume = "Joystick";
            this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
            this.stage.vars.joystickMoving = 0;
          }
        } else {
          this.costume = "Joystick";
          this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
          this.stage.vars.joystickMoving = 0;
        }
        if (this.keyPressed("up arrow")) {
          if (!(this.toNumber(this.stage.vars.speed) === 0)) {
            while (!!this.keyPressed("up arrow")) {
              this.costume = "Joystick move";
              this.direction = 0;
              this.rotationStyle = Sprite.RotationStyle.ALL_AROUND;
              this.stage.vars.joystickMoving = 1;
              yield;
            }
          } else {
            this.costume = "Joystick";
            this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
            this.stage.vars.joystickMoving = 0;
          }
        } else {
          this.costume = "Joystick";
          this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
          this.stage.vars.joystickMoving = 0;
        }
      } else {
        if (this.mouse.down && this.touching("mouse")) {
          if (!(this.toNumber(this.stage.vars.speed) === 0)) {
            while (!!this.mouse.down) {
              this.costume = "Joystick move";
              this.direction = this.radToScratch(
                Math.atan2(this.mouse.y - this.y, this.mouse.x - this.x)
              );
              this.rotationStyle = Sprite.RotationStyle.ALL_AROUND;
              this.stage.vars.joystickMoving = 1;
              yield;
            }
          } else {
            this.costume = "Joystick";
            this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
            this.stage.vars.joystickMoving = 0;
          }
        } else {
          this.costume = "Joystick";
          this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
          this.stage.vars.joystickMoving = 0;
        }
      }
      yield;
    }
  }
}
