import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite93 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./sprite93/costumes/costume1.png", {
        x: 15,
        y: 11,
      }),
      new Costume("costume3", "./sprite93/costumes/costume3.png", {
        x: 28,
        y: 26,
      }),
      new Costume("costume2", "./sprite93/costumes/costume2.png", {
        x: 29,
        y: 23,
      }),
      new Costume("costume4", "./sprite93/costumes/costume4.png", {
        x: 28,
        y: 26,
      }),
    ];

    this.sounds = [
      new Sound("pop", "./sprite93/sounds/pop.wav"),
      new Sound("savepoint", "./sprite93/sounds/savepoint.mp3"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Shop" }, this.whenIReceiveShop),
      new Trigger(Trigger.BROADCAST, { name: "Shop" }, this.whenIReceiveShop2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Mawege" },
        this.whenIReceiveMawege
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Back 2 normal :3" },
        this.whenIReceiveBack2Normal3
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.BROADCAST, { name: "Do" }, this.whenIReceiveDo),
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.watchers.copyAndPasteYourCode.visible = false;
    this.stage.vars.marrying = 0;
    this.visible = false;
  }

  *whenIReceiveShop() {
    this.goto(-70, 130);
    this.costume = "costume1";
    this.visible = true;
    while (true) {
      if (this.stage.costumeNumber === 6) {
        if (this.toNumber(this.stage.vars.marrying) === 0) {
          this.visible = true;
        }
      } else {
        this.visible = false;
      }
      yield;
    }
  }

  *whenIReceiveShop2() {
    while (true) {
      while (!this.touching(this.sprites["Player"].andClones())) {
        yield;
      }
      this.stage.vars.speed = 0;
      yield* this.sayAndWait("Heya.", 2);
      yield* this.startSound("savepoint");
      this.stage.watchers.copyAndPasteYourCode.visible = true;
      this.stage.vars.copyAndPasteYourCode = [];
      if (this.toNumber(this.stage.vars.chapter) === 2) {
        this.stage.vars.copyAndPasteYourCode.push(
          "C" +
            (this.toString(this.toNumber(this.stage.vars.shop) - 1) +
              (this.toString(this.stage.vars.grilledCheese) +
                (this.toString(this.stage.vars.married) +
                  (this.toString(this.stage.vars.crackleWhip) +
                    (this.toString(this.stage.vars.spindoor) +
                      (this.toString(this.stage.vars.thornDagger) +
                        (this.toString(this.stage.vars.amuletAvalible) +
                          (this.toString(this.stage.vars.moneymaker) +
                            this.toString(this.stage.vars.armor) +
                            ("A" +
                              this.toString(this.stage.vars.yunuchi))))))))))
        );
      } else {
        if (this.toNumber(this.stage.vars.chapter) === 3) {
          this.stage.vars.copyAndPasteYourCode.push(
            "S" +
              (this.toString(this.toNumber(this.stage.vars.shop) - 1) +
                (this.toString(this.stage.vars.grilledCheese) +
                  (this.toString(this.stage.vars.married) +
                    (this.toString(this.stage.vars.crackleWhip) +
                      (this.toString(this.stage.vars.spindoor) +
                        (this.toString(this.stage.vars.thornDagger) +
                          (this.toString(this.stage.vars.amuletAvalible) +
                            (this.toString(this.stage.vars.attackssss) +
                              (this.toString(this.stage.vars.vampireKnife) +
                                (this.toString(this.stage.vars.batter) +
                                  (this.toString(this.stage.vars.burntPan) +
                                    (this.toString(
                                      this.stage.vars.chapter3Variable5
                                    ) +
                                      this.toString(
                                        this.stage.vars.chapter3Variable6
                                      )))) +
                                this.toString(this.stage.vars.armor)) +
                              ("A" +
                                this.toString(this.stage.vars.yunuchi))))))))))
          );
        } else {
          this.stage.vars.copyAndPasteYourCode.push(
            this.toString(this.toNumber(this.stage.vars.shop) - 1) +
              (this.toString(this.stage.vars.grilledCheese) +
                (this.toString(this.stage.vars.married) +
                  (this.toString(this.stage.vars.crackleWhip) +
                    (this.toString(this.stage.vars.spindoor) +
                      (this.toString(this.stage.vars.thornDagger) +
                        (this.toString(this.stage.vars.amuletAvalible) +
                          ("A" + this.toString(this.stage.vars.yunuchi))))))))
          );
        }
      }
      yield* this.wait(5);
      this.stage.vars.speed = 4;
      this.stage.watchers.copyAndPasteYourCode.visible = false;
      yield* this.wait(3);
      while (!!this.touching(this.sprites["Player"].andClones())) {
        yield;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.costumeNumber++;
      yield* this.wait(0.3);
      yield;
    }
  }

  *whenIReceiveMawege() {
    this.stage.vars.marrying = 1;
    this.stage.vars.speed = 0;
    this.visible = false;
  }

  *whenIReceiveBack2Normal3() {
    this.stage.vars.marrying = 0;
    this.visible = true;
  }

  *whenGreenFlagClicked3() {
    this.stage.vars.extraMarried = 0;
  }

  *whenIReceiveDo() {
    this.stage.vars.extraMarried = 1;
  }
}
