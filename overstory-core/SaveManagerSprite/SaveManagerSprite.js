import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import SaveManager from "../systems/save_mgr.js?v=v2";

/**
 * SaveManagerSprite (formerly Sprite27)
 * Handles user interaction for loading and processing save codes.
 * Bridges the UI requests to the SaveManager system.
 */
export default class SaveManagerSprite extends Sprite {
  constructor(...args) {
    super(...args);

    // Initializing costumes with updated paths to the new directory structure
    this.costumes = [
      new Costume("costume1", "./SaveManagerSprite/costumes/costume1.png", {
        x: 42,
        y: 43,
      }),
    ];

    // Initializing sounds
    this.sounds = [new Sound("pop", "./SaveManagerSprite/sounds/pop.wav")];

    // Define triggers for game events and user clicks
    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start with save tho" },
        this.whenIReceiveStartWithSaveTho
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Chapter 1 title" },
        this.whenIReceiveChapter1Title
      ),
    ];

    // Default list values used during save code parsing
    this.vars.list = [6, 6, 6];
  }

  /**
   * Hide the sprite when the 'Start' broadcast is received.
   */
  *whenIReceiveStart() {
    this.visible = false;
  }

  /**
   * Core interaction handler: Triggered when the player clicks the save/load button.
   * Checks for existing auto-saves and prompts for manual code entry.
   */
  *whenthisspriteclicked() {
    // Check if the SaveManager has an existing valid save in localStorage
    if (SaveManager.hasValidSave()) {
      // Ask the user if they want to use their local save
      yield* this.askAndWait("Load Auto-Save? (yes/no)");
      if (this.toString(this.answer).toLowerCase() === "yes") {
        // Load the string from localStorage into the internal response variable
        this.answer = SaveManager.getLastSave();
      } else {
        // Fallback to manual entry if they decline
        yield* this.askAndWait("Enter save code:");
      }
    } else {
      // Direct prompt if no local save exists
      yield* this.askAndWait("Save file?");
    }

    // Basic validation: Scratch save codes are typically long strings of digits/letters
    if (this.compare(this.answer.length, 7) > 0) {
      // Notify the system that we are starting from a saved state
      this.broadcast("Start with save tho");
      
      // Update global stage variables based on the positional characters in the save string
      this.stage.watchers._.visible = true;
      this.stage.vars.shopped = 1;
      this.broadcast("Shop");
      this.stage.vars.jone = 1;

      // Extract game state from the first 7 characters of the save string
      this.stage.vars.shop = this.letterOf(this.answer, 0);           // Flag for current shop location
      this.stage.vars.grilledCheese = this.letterOf(this.answer, 1);  // Inventory item: Grilled Cheese count
      this.stage.vars.married = this.letterOf(this.answer, 2);        // Story flag: Interaction state
      this.stage.vars.crackleWhip = this.letterOf(this.answer, 3);    // Equipment flag
      this.stage.vars.spindoor = this.letterOf(this.answer, 4);       // Progression flag
      this.stage.vars.thornDagger = this.letterOf(this.answer, 5);    // Equipment flag
      this.stage.vars.amuletAvalible = this.letterOf(this.answer, 6); // Item availability flag

      // Parse and add money/currency from the remainder of the string
      yield* this.addMoney();
    }
  }

  /**
   * Ensure sprite is hidden during special start broadcast.
   */
  *whenIReceiveStartWithSaveTho() {
    this.visible = false;
  }

  /**
   * Parses the remaining parts of the save code to calculate specific game currency (Yunuchi).
   * It reconstructs the list and searches for the 'A' marker used in the original Scratch logic.
   */
  *addMoney() {
    this.stage.vars.numberOn = 0;
    this.vars.list = [];

    // Loop through every character in the answer string
    for (let i = 0; i < this.answer.length; i++) {
      // Push characters into a working list for transformation
      this.vars.list.push(
        this.letterOf(this.answer, this.stage.vars.numberOn - 1)
      );
      this.stage.vars.numberOn++;
    }

    // Final character push
    this.vars.list.push(
      this.letterOf(this.answer, this.stage.vars.numberOn - 1)
    );
    this.stage.vars.numberOn++;

    // Scratch logic: Remove items until we hit the 'A' delimiter
    while (!(this.toString(this.itemOf(this.vars.list, 0)) === "A")) {
      this.vars.list.splice(0, 1);
    }
    
    // Remove the 'A' itself
    this.vars.list.splice(0, 1);

    // Join the remaining characters into the final currency value
    this.stage.vars.yunuchi = this.vars.list.join(" ");
  }

  /**
   * Reset visibility when the project starts.
   */
  *whenGreenFlagClicked() {
    this.visible = false;
  }

  /**
   * Animation logic for showing the Save choice when transitioning to the title.
   */
  *whenIReceiveChapter1Title() {
    this.size = 130;  // Scale up for visibility
    this.visible = true;
    this.goto(-194, 192); // Position at top left
    yield* this.glide(0.5, -194, 0); // Drop down into view
    this.goto(-194, 0); // Final locking position
  }
}
