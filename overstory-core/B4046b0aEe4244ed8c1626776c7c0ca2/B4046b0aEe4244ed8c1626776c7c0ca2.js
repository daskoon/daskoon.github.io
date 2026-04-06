import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class B4046b0aEe4244ed8c1626776c7c0ca2 extends Sprite {
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
        "./sounds/deltarune-explosion 2.mp3"
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
        { name: "Anemone" },
        this.whenIReceiveAnemone
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Enemy hurt" },
        this.whenIReceiveEnemyHurt
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "End battle of amber" },
        this.whenIReceiveEndBattleOfAmber
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ok IÃ¢â‚¬â„¢ve schemed" },
        this.whenIReceiveOkIVeSchemed
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "White board" },
        this.whenIReceiveWhiteBoard
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Explode dooor :3" },
        this.whenIReceiveExplodeDooor3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "No i do not." },
        this.whenIReceiveNoIDoNot
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jimmy explode, like normal" },
        this.whenIReceiveJimmyExplodeLikeNormal
      ),
    ];

    this.vars.huhhhh = 0;
  }

  *whenGreenFlagClicked() {
    this.vars.huhhhh = 0;
    this.visible = false;
  }

  *startAsClone() {
    yield* this.startSound("deltarune-explosion 2");
    this.size = 50;
    this.moveAhead();
    this.visible = true;
    this.costume = "B4046B0A-EE42-44ED-8C16-26776C7C0CA2";
    for (let i = 0; i < 16; i++) {
      this.costumeNumber++;
      yield* this.wait(0);
      yield* this.wait(0);
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

  *whenIReceiveAnemone() {
    this.goto(200, -15);
    this.createClone();
  }

  *whenIReceiveEnemyHurt() {
    if (this.toNumber(this.stage.vars.battle) === 3) {
      this.vars.huhhhh = 1;
      this.goto(this.sprites["Sprite45"].x, this.sprites["Sprite45"].y);
      this.createClone();
      this.vars.huhhhh = 0;
    }
  }

  *startAsClone2() {
    if (this.toNumber(this.vars.huhhhh) === 1) {
      while (true) {
        this.goto(this.sprites["Sprite45"].x, this.sprites["Sprite45"].y);
        yield;
      }
    }
  }

  *whenIReceiveEndBattleOfAmber() {
    this.vars.huhhhh = 1;
    this.goto(this.sprites["Sprite45"].x, this.sprites["Sprite45"].y);
    this.createClone();
    this.vars.huhhhh = 0;
  }

  *whenIReceiveOkIVeSchemed() {
    yield* this.wait(1);
    this.goto(this.sprites["Sprite67"].x, this.sprites["Sprite67"].y);
    this.createClone();
  }

  *whenIReceiveWhiteBoard() {
    yield* this.wait(3);
    this.goto(40, -35);
    this.createClone();
    this.goto(0, -35);
    this.createClone();
    this.goto(-40, -35);
    this.createClone();
  }

  *whenIReceiveExplodeDooor3() {
    this.goto(this.sprites["Sprite5"].x, this.sprites["Sprite5"].y);
    this.createClone();
  }

  *whenIReceiveNoIDoNot() {
    this.goto(this.sprites["Sprite67"].x, this.sprites["Sprite67"].y);
    this.createClone();
    yield* this.wait(0.5);
    this.stage.vars.speed = 4;
  }

  *whenIReceiveJimmyExplodeLikeNormal() {
    this.goto(this.sprites["Sprite67"].x, this.sprites["Sprite67"].y);
    this.createClone();
  }
}
