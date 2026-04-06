import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class B4046b0aEe4244ed8c1626776c7c0ca4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "B4046B0A-EE42-44ED-8C16-26776C7C0CA2",
        "./costumes/B4046B0A-EE42-44ED-8C16-26776C7C0CA2.png",
        { x: 40, y: 10 }
      ),
      new Costume(
        "B4046B0A-EE42-44ED-8C16-26776C7C0CA22",
        "./costumes/B4046B0A-EE42-44ED-8C16-26776C7C0CA22.png",
        { x: 118, y: 72 }
      ),
      new Costume(
        "B4046B0A-EE42-44ED-8C16-26776C7C0CA23",
        "./costumes/B4046B0A-EE42-44ED-8C16-26776C7C0CA23.png",
        { x: 135, y: 166 }
      ),
      new Costume(
        "B4046B0A-EE42-44ED-8C16-26776C7C0CA24",
        "./costumes/B4046B0A-EE42-44ED-8C16-26776C7C0CA24.png",
        { x: 142, y: 231 }
      ),
      new Costume(
        "B4046B0A-EE42-44ED-8C16-26776C7C0CA25",
        "./costumes/B4046B0A-EE42-44ED-8C16-26776C7C0CA25.png",
        { x: 142, y: 246 }
      ),
      new Costume(
        "B4046B0A-EE42-44ED-8C16-26776C7C0CA26",
        "./costumes/B4046B0A-EE42-44ED-8C16-26776C7C0CA26.png",
        { x: 137, y: 242 }
      ),
      new Costume(
        "B4046B0A-EE42-44ED-8C16-26776C7C0CA27",
        "./costumes/B4046B0A-EE42-44ED-8C16-26776C7C0CA27.png",
        { x: 137, y: 249 }
      ),
      new Costume(
        "B4046B0A-EE42-44ED-8C16-26776C7C0CA28",
        "./costumes/B4046B0A-EE42-44ED-8C16-26776C7C0CA28.png",
        { x: 147, y: 249 }
      ),
      new Costume(
        "B4046B0A-EE42-44ED-8C16-26776C7C0CA29",
        "./costumes/B4046B0A-EE42-44ED-8C16-26776C7C0CA29.png",
        { x: 147, y: 249 }
      ),
      new Costume(
        "B4046B0A-EE42-44ED-8C16-26776C7C0CA210",
        "./costumes/B4046B0A-EE42-44ED-8C16-26776C7C0CA210.png",
        { x: 147, y: 249 }
      ),
      new Costume(
        "B4046B0A-EE42-44ED-8C16-26776C7C0CA211",
        "./costumes/B4046B0A-EE42-44ED-8C16-26776C7C0CA211.png",
        { x: 148, y: 249 }
      ),
      new Costume(
        "B4046B0A-EE42-44ED-8C16-26776C7C0CA212",
        "./costumes/B4046B0A-EE42-44ED-8C16-26776C7C0CA212.png",
        { x: 143, y: 228 }
      ),
      new Costume(
        "B4046B0A-EE42-44ED-8C16-26776C7C0CA213",
        "./costumes/B4046B0A-EE42-44ED-8C16-26776C7C0CA213.png",
        { x: 148, y: 237 }
      ),
      new Costume(
        "B4046B0A-EE42-44ED-8C16-26776C7C0CA214",
        "./costumes/B4046B0A-EE42-44ED-8C16-26776C7C0CA214.png",
        { x: 138, y: 242 }
      ),
      new Costume(
        "B4046B0A-EE42-44ED-8C16-26776C7C0CA215",
        "./costumes/B4046B0A-EE42-44ED-8C16-26776C7C0CA215.png",
        { x: 142, y: 248 }
      ),
      new Costume(
        "B4046B0A-EE42-44ED-8C16-26776C7C0CA216",
        "./costumes/B4046B0A-EE42-44ED-8C16-26776C7C0CA216.png",
        { x: 123, y: 249 }
      ),
      new Costume(
        "B4046B0A-EE42-44ED-8C16-26776C7C0CA217",
        "./costumes/B4046B0A-EE42-44ED-8C16-26776C7C0CA217.png",
        { x: 118, y: 249 }
      ),
    ];

    this.sounds = [
      new Sound(
        "deltarune-explosion 2",
        "./sounds/deltarune-explosion 2.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ultra explode" },
        this.whenIReceiveUltraExplode
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Sad explosion" },
        this.whenIReceiveSadExplosion
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Rad explosion" },
        this.whenIReceiveRadExplosion
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone() {
    yield* this.startSound("deltarune-explosion 2");
    this.size = 150;
    this.moveAhead();
    this.visible = true;
    this.costume = "B4046B0A-EE42-44ED-8C16-26776C7C0CA2";
    for (let i = 0; i < 16; i++) {
      this.costumeNumber++;
      yield* this.wait(0.2);
      yield;
    }
    this.deleteThisClone();
  }

  *whenIReceiveUltraExplode() {
    while (true) {
      this.broadcast("Explode");
      yield;
    }
  }

  *whenIReceiveSadExplosion() {
    this.goto(this.sprites["Sprite67"].x, this.sprites["Sprite67"].y);
    this.createClone();
  }

  *whenIReceiveRadExplosion() {
    this.goto(this.sprites["Sprite83"].x, this.sprites["Sprite83"].y);
    this.createClone();
  }
}
