import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class attackbuttons extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./attackbuttons/costumes/costume1.png", {
        x: 24,
        y: 24,
      }),
    ];

    this.sounds = [
      new Sound("pop", "./attackbuttons/sounds/pop.wav"),
      new Sound("Cant Select", "./attackbuttons/sounds/Cant Select.wav"),
      new Sound(
        "undertale-heal-made-with-Voicemod",
        "./attackbuttons/sounds/undertale-heal-made-with-Voicemod.mp3"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ur turn" },
        this.whenIReceiveUrTurn
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Next party member turn" },
        this.whenIReceiveNextPartyMemberTurn
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Next party member turn" },
        this.whenIReceiveNextPartyMemberTurn2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jone defeat" },
        this.whenIReceiveJoneDefeat
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jone defeat" },
        this.whenIReceiveJoneDefeat2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Door death" },
        this.whenIReceiveDoorDeath
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Foe cutscene" },
        this.whenIReceiveFoeCutscene
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Foe end" },
        this.whenIReceiveFoeEnd
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jimmy dies" },
        this.whenIReceiveJimmyDies
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Snake dead" },
        this.whenIReceiveSnakeDead
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Shadow zork dead" },
        this.whenIReceiveShadowZorkDead
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Shadow jone dead" },
        this.whenIReceiveShadowJoneDead
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Shadow dead" },
        this.whenIReceiveShadowDead
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Various guys dead" },
        this.whenIReceiveVariousGuysDead
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Doordevil dies lmao" },
        this.whenIReceiveDoordevilDiesLmao
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Boopley dead" },
        this.whenIReceiveBoopleyDead
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Gary dead" },
        this.whenIReceiveGaryDead
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ã¢â‚¬Â¦Ã¢â‚¬Â¦abattoeend" },
        this.whenIReceiveAbattoeend
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.grilledCheese = 1;
    this.stage.watchers.grilledCheese.visible = false;
    this.visible = false;
    while (true) {
      if (this.toNumber(this.stage.vars.grilledCheese) === 0) {
        this.costume = "costume2";
      } else {
        this.costume = "costume1";
      }
      yield;
    }
  }

  *whenIReceiveUrTurn() {
    yield* this.wait(1);
    this.goto(20, 20);
    if (this.toNumber(this.stage.vars.battle) === 1000) {
      this.goto(6, 0);
    }
    if (this.toNumber(this.stage.vars.battle) === 666) {
      this.goto(-25, -30);
    }
    this.visible = true;
    this.stage.watchers.grilledCheese.visible = true;
    this.moveAhead();
  }

  *whenthisspriteclicked() {
    if (this.toNumber(this.stage.vars.grilledCheese) === 0) {
      yield* this.startSound("Cant Select");
    } else {
      if (
        this.toNumber(this.stage.vars.turn) === 3 ||
        this.toNumber(this.stage.vars.turn) === 4
      ) {
        if (this.toNumber(this.stage.vars.burntPan) === 1) {
          this.stage.vars.burntSlaps = 4;
        }
      }
      this.stage.vars.turn++;
      this.stage.vars.hp += 35;
      if (
        this.toNumber(this.stage.vars.amuletAvalible) === 5 ||
        this.toNumber(this.stage.vars.amuletAvalible) === 4
      ) {
        if (this.toNumber(this.stage.vars.chapter) === 2) {
          this.stage.vars.hp += 30;
        }
        if (this.toNumber(this.stage.vars.chapter) === 3) {
          this.stage.vars.hp += 30;
        }
      }
      yield* this.startSound("undertale-heal-made-with-Voicemod");
      this.stage.vars.grilledCheese--;
      yield* this.wait(0.1);
      this.broadcast("Next party member turn");
    }
  }

  *whenIReceiveNextPartyMemberTurn() {
    this.goto(20, -55);
    if (this.toNumber(this.stage.vars.battle) === 666) {
      this.goto(85, -15);
    }
    if (
      this.toNumber(this.stage.vars.turn) === 3 &&
      this.toNumber(this.stage.vars.jone) === 1
    ) {
      if (this.toNumber(this.stage.vars.burntPan) === 1) {
        this.visible = false;
        this.stage.watchers.grilledCheese.visible = false;
      } else {
        this.goto(20, -15);
        if (this.toNumber(this.stage.vars.battle) === 666) {
          this.goto(-85, -10);
        }
      }
    }
    if (
      this.toNumber(this.stage.vars.turn) === 4 &&
      this.toNumber(this.stage.vars.goopley) === 1
    ) {
      this.goto(-180, 110);
    }
  }

  *whenIReceiveNextPartyMemberTurn2() {
    if (this.toNumber(this.stage.vars.turn) === 2) {
      if (this.toNumber(this.stage.vars.battle) === 1000) {
        this.stage.watchers.grilledCheese.visible = false;
        this.visible = false;
        if (this.toNumber(this.stage.vars.youGoingToHit) === 1) {
          yield* this.broadcastAndWait("You attack");
        }
        this.broadcast("Enemy turn");
      }
    } else {
      if (this.toNumber(this.stage.vars.chapter) === 3) {
        if (this.toNumber(this.stage.vars.goopley) === 1) {
          if (this.toNumber(this.stage.vars.turn) === 5) {
            this.stage.watchers.grilledCheese.visible = false;
            this.visible = false;
            if (this.toNumber(this.stage.vars.youGoingToHit) === 1) {
              yield* this.broadcastAndWait("You attack");
            }
            if (this.toNumber(this.stage.vars.zorkGoingToHit) === 1) {
              yield* this.broadcastAndWait("Zork attack");
            }
            if (this.toNumber(this.stage.vars.joneGoingToAttack) === 1) {
              yield* this.broadcastAndWait("Jone attack");
            }
            if (this.toNumber(this.stage.vars.goopleyGoingToAttack) === 1) {
              yield* this.broadcastAndWait("Goopley attack");
            }
          }
        } else {
          if (
            (this.toNumber(this.stage.vars.jone) === 0 &&
              this.toNumber(this.stage.vars.turn) === 3) ||
            (this.toNumber(this.stage.vars.jone) === 1 &&
              this.toNumber(this.stage.vars.turn) === 4)
          ) {
            this.stage.watchers.grilledCheese.visible = false;
            this.stage.vars.burntSlaps = 0;
            this.visible = false;
            if (this.toNumber(this.stage.vars.youGoingToHit) === 1) {
              yield* this.broadcastAndWait("You attack");
            }
            if (this.toNumber(this.stage.vars.zorkGoingToHit) === 1) {
              yield* this.broadcastAndWait("Zork attack");
            }
            if (this.toNumber(this.stage.vars.joneGoingToAttack) === 1) {
              yield* this.broadcastAndWait("Jone attack");
            }
            yield* this.wait(0.1);
            if (this.toNumber(this.stage.vars.burntPan) === 1) {
              if (this.toNumber(this.stage.vars.burntSlaps) === 4) {
                this.broadcast("Enemy turn");
              }
            } else {
              this.broadcast("Enemy turn");
            }
          }
        }
      } else {
        if (this.toNumber(this.stage.vars.goopley) === 1) {
          if (this.toNumber(this.stage.vars.turn) === 5) {
            this.stage.watchers.grilledCheese.visible = false;
            this.visible = false;
            if (this.toNumber(this.stage.vars.youGoingToHit) === 1) {
              yield* this.broadcastAndWait("You attack");
            }
            if (this.toNumber(this.stage.vars.zorkGoingToHit) === 1) {
              yield* this.broadcastAndWait("Zork attack");
            }
            if (this.toNumber(this.stage.vars.joneGoingToAttack) === 1) {
              yield* this.broadcastAndWait("Jone attack");
            }
            if (this.toNumber(this.stage.vars.goopleyGoingToAttack) === 1) {
              yield* this.broadcastAndWait("Goopley attack");
            }
            this.broadcast("Enemy turn");
          }
        } else {
          if (
            (this.toNumber(this.stage.vars.jone) === 0 &&
              this.toNumber(this.stage.vars.turn) === 3) ||
            (this.toNumber(this.stage.vars.jone) === 1 &&
              this.toNumber(this.stage.vars.turn) === 4)
          ) {
            this.stage.watchers.grilledCheese.visible = false;
            this.visible = false;
            if (this.toNumber(this.stage.vars.youGoingToHit) === 1) {
              yield* this.broadcastAndWait("You attack");
            }
            if (this.toNumber(this.stage.vars.zorkGoingToHit) === 1) {
              yield* this.broadcastAndWait("Zork attack");
            }
            if (this.toNumber(this.stage.vars.joneGoingToAttack) === 1) {
              yield* this.broadcastAndWait("Jone attack");
            }
            yield* this.wait(0.1);
            this.broadcast("Enemy turn");
          }
        }
      }
    }
  }

  *whenIReceiveJoneDefeat() {
    this.visible = false;
  }

  *whenIReceiveJoneDefeat2() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveDoorDeath() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveFoeCutscene() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveFoeEnd() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveJimmyDies() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveSnakeDead() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveShadowZorkDead() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveShadowJoneDead() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveShadowDead() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveVariousGuysDead() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveDoordevilDiesLmao() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveBoopleyDead() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveGaryDead() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveAbattoeend() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
