import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite130 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./sprite130/costumes/costume1.png", {
        x: 46,
        y: 46,
      }),
    ];

    this.sounds = [new Sound("pop", "./sprite130/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room21" },
        this.whenIReceiveRoom21
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room22" },
        this.whenIReceiveRoom22
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveRoom21() {
    this.visible = false;
    /* TODO: Implement sensing_setdragmode */ null;
    yield* this.generateBlocks();
  }

  *startAsClone() {
    /* TODO: Implement sensing_setdragmode */ null;
    this.visible = true;
    this.moveBehind();
    this.moveAhead(1);
  }

  *generateBlocks() {
    this.goto(-80, 80);
    for (let i = 0; i < 5; i++) {
      for (let i = 0; i < 5; i++) {
        this.createClone();
        this.x += 43;
      }
      this.y -= 43;
      this.x = -80;
    }
  }

  *whenIReceiveRoom22() {
    this.deleteThisClone();
  }
}
