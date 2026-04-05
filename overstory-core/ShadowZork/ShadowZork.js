import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

/**
 * ShadowZork Sprite
 * Represents an enemy entity with battle logic, movement, and special attacks.
 */
export default class ShadowZork extends Sprite {
  constructor(...args) {
    super(...args);

    // Initialize costumes with updated paths
    this.costumes = [
      new Costume("costume1", "./ShadowZork/costumes/costume1.png", {
        x: 20,
        y: 45,
      }),
      new Costume("costume2", "./ShadowZork/costumes/costume2.png", {
        x: 22,
        y: 45,
      }),
    ];

    // Initialize sound effects
    this.sounds = [
      new Sound("Shadow Zork", "./ShadowZork/sounds/Shadow Zork.wav"),
      new Sound("Shadow Zork2", "./ShadowZork/sounds/Shadow Zork2.wav"),
    ];

    // Define triggers for game events, including room transitions and battle phases
    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room20" },
        this.whenIReceiveRoom20
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Shadow zork fight" },
        this.whenIReceiveShadowZorkFight
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Enemy hurt" },
        this.whenIReceiveEnemyHurt
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Enemy turn" },
        this.whenIReceiveEnemyTurn
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ur turn" },
        this.whenIReceiveUrTurn
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Shadow zork fight" },
        this.whenIReceiveShadowZorkFight2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Shadow zork fight" },
        this.whenIReceiveShadowZorkFight3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Room27" },
        this.whenIReceiveRoom27
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Various battle" },
        this.whenIReceiveVariousBattle
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Various battle" },
        this.whenIReceiveVariousBattle2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Ur turn" },
        this.whenIReceiveUrTurn2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Papier airplanes attack like 4" },
        this.whenIReceivePapierAirplanesAttackLike4
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Stool attack 3 wowza" },
        this.whenIReceiveStoolAttack3Wowza
      ),
    ];

    // Local variable to determine attack pattern
    this.vars.attackOfShadown = 3;
  }

  /**
   * Hide the sprite when the green flag is clicked (initial state).
   */
  *whenGreenFlagClicked() {
    this.visible = false;
  }

  /**
   * Logic for Room 20 transition.
   * Resets position and waits for player contact to trigger dialogue.
   */
  *whenIReceiveRoom20() {
    this.costume = "costume1"; // Set to default pose
    this.goto(120, 0); // Position at room coordinates
    this.visible = true; // Show sprite
    // Wait until the player sprite touches this sprite
    while (!this.touching(this.sprites["Player"].andClones())) {
      yield;
    }
    // Trigger interaction dialogue
    this.broadcast("Shadow zork talk");
  }

  /**
   * Logic for starting the Shadow Zork fight.
   * Sets up battle variables and starts visual effect cloning.
   */
  *whenIReceiveShadowZorkFight() {
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE; // Keep sprite upright
    this.stage.vars.enemyHp = 1000; // Initialize high health pool
    while (true) {
      if (window.GAMEOVER) return;
      this.createClone(); // Create constant ghosting/visual effect particles
      yield* this.wait(0.1);
      yield;
    }
  }

  /**
   * Clone logic for visual effects.
   * Clones move slightly randomly and fade out.
   */
  *startAsClone() {
    this.direction = 90; // Face right
    this.direction += this.random(-10, 10); // Add jitter to movement
    for (let i = 0; i < 20; i++) {
      this.effects.ghost += 5; // Gradually become transparent
      this.move(3); // Move outward
      yield;
    }
    this.deleteThisClone(); // Cleanup
  }

  /**
   * Change costume momentarily when hit by the player.
   */
  *whenIReceiveEnemyHurt() {
    this.costume = "costume2"; // Flash 'hurt' costume
    yield* this.wait(0.5); // Hold for 0.5s
    this.costume = "costume1"; // Revert to idle
  }

  /**
   * Enemy AI during 'Enemy turn'.
   * Randomly selects an attack pattern if it hasn't acted yet.
   */
  *whenIReceiveEnemyTurn() {
    // Only act if battle room #10 is active
    if (this.toNumber(this.stage.vars.battle) === 10) {
      yield* this.wait(0.5); // Slight delay for tension
      // Ensure only one attack broadcast occurs
      if (this.toNumber(this.stage.vars.popipo) === 0) {
        this.stage.vars.popipo = 1; // Mark as 'attacking'
        this.vars.attackOfShadown = this.random(1, 5); // Pick random move
        
        // Broadcast based on chosen attack number
        if (this.toNumber(this.vars.attackOfShadown) === 1) {
          this.broadcast("Stool");
        }
        if (this.toNumber(this.vars.attackOfShadown) === 2) {
          this.broadcast("Planes :3");
        }
        if (this.toNumber(this.vars.attackOfShadown) === 3) {
          this.broadcast("Dash attack");
        }
        if (this.toNumber(this.vars.attackOfShadown) === 4) {
          this.broadcast("Half and half");
        }
        if (this.toNumber(this.vars.attackOfShadown) === 5) {
          this.broadcast("Half and half");
        }
      }
    }
  }

  /**
   * Handle the player's turn start.
   */
  *whenIReceiveUrTurn() {
    this.stage.vars.popipo = 0; // Reset turn action flag
  }

  /**
   * Win condition logic for the Shadow Zork fight.
   * Monitors health and executes death animation/cleanup.
   */
  *whenIReceiveShadowZorkFight2() {
    // Wait until health reaches zero
    while (!(this.compare(this.stage.vars.enemyHp, 1) < 0)) {
      yield;
    }
    this.broadcast("Shadow zork dead"); // Notify world of defeat
    this.stage.watchers.enemyHp.visible = false; // Cleanup UI
    this.stage.watchers._.visible = true;
    this.stage.watchers.hp.visible = false;
    this.stage.vars.hp = 100; // Reset player health after victory
    
    // Fade out effect
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.visible = false;
    this.effects.clear(); // Important to clear effects for reuse
  }

  /**
   * Loop for boss battle music.
   */
  *whenIReceiveShadowZorkFight3() {
    while (true) {
      if (window.GAMEOVER) return;
      yield* this.playSoundUntilDone("Shadow Zork"); // Play theme in loop
      yield;
    }
  }

  /**
   * Logic for Room 27 appearance.
   */
  *whenIReceiveRoom27() {
    this.goto(160, -50); // Move to specific room location
    this.visible = true;
  }

  /**
   * General battle effect handler.
   */
  *whenIReceiveVariousBattle() {
    while (true) {
      if (window.GAMEOVER) return;
      this.createClone();
      yield* this.wait(0.1);
      yield;
    }
  }

  /**
   * Victory condition for miscellaneous battles.
   */
  *whenIReceiveVariousBattle2() {
    // Wait for hp to drop below initial high state
    while (!(this.compare(this.stage.vars.enemyHp, 999) < 0)) {
      yield;
    }
    // Execution termination and cleanup
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.visible = false;
    this.effects.clear();
  }

  /**
   * Turn logic for battle state 16.
   */
  *whenIReceiveUrTurn2() {
    if (this.toNumber(this.stage.vars.battle) === 16) {
      this.visible = false; // Hide if in specific battle phase
    }
  }

  /**
   * Special reveal animation for airplane attack trigger.
   */
  *whenIReceivePapierAirplanesAttackLike4() {
    this.effects.ghost += 100; // Set to transparent
    this.goto(210, 60); // Reposition
    this.visible = true;
    // Fade in effect
    for (let i = 0; i < 10; i++) {
      this.effects.ghost -= 10;
      yield;
    }
  }

  /**
   * Special reveal animation for stool attack trigger.
   */
  *whenIReceiveStoolAttack3Wowza() {
    this.effects.ghost += 100; // Set to transparent
    this.goto(210, 60); // Reposition
    this.visible = true;
    // Fade in effect
    for (let i = 0; i < 10; i++) {
      this.effects.ghost -= 10;
      yield;
    }
  }
}
