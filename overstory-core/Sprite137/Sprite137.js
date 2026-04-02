import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite137 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite137/costumes/costume1.png", {
        x: 53,
        y: 69,
      }),
      new Costume("costume2", "./Sprite137/costumes/costume2.png", {
        x: 53,
        y: 69,
      }),
    ];

    this.sounds = [new Sound("pop", "./Sprite137/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room19" },
        this.whenIReceiveRoom19
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room19" },
        this.whenIReceiveRoom20
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ride across" },
        this.whenIReceiveRideAcross
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Spawn button" },
        this.whenIReceiveSpawnButton
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ride on back" },
        this.whenIReceiveRideOnBack
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Open dat door" },
        this.whenIReceiveOpenDatDoor
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room20" },
        this.whenIReceiveRoom21
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Stool attack 2 because not funni >:(" },
        this.whenIReceiveStoolAttack2BecauseNotFunni
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveRoom19() {
    this.moveBehind();
    this.goto(-73, -6);
    this.visible = true;
    while (true) {
      this.costumeNumber++;
      yield* this.wait(0.1);
      yield;
    }
  }

  *whenIReceiveRoom20() {
    while (true) {
      if (this.touching(this.sprites["Player"].andClones())) {
        this.broadcast("Ride across");
        return;
      }
      yield;
    }
  }

  *whenIReceiveRideAcross() {
    this.stage.vars.speed = 0;
    yield* this.wait(1.5);
    yield* this.glide(5, 77, -6);
  }

  *whenIReceiveSpawnButton() {
    while (true) {
      if (this.touching(this.sprites["Player"].andClones())) {
        this.broadcast("Ride on back");
        return;
      }
      yield;
    }
  }

  *whenIReceiveRideOnBack() {
    this.stage.vars.speed = 0;
    yield* this.wait(1.5);
    yield* this.glide(5, -73, -6);
  }

  *whenIReceiveOpenDatDoor() {
    while (true) {
      if (this.touching(this.sprites["Player"].andClones())) {
        this.broadcast("Ride across");
        return;
      }
      yield;
    }
  }

  *whenIReceiveRoom21() {
    this.visible = false;
  }

  *whenIReceiveStoolAttack2BecauseNotFunni() {}
}
