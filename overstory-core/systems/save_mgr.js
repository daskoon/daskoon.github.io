/**
 * OverStory Save Manager (Phase 3: Sub-Subsystem)
 * 
 * Bridges the original Scratch password-based save string to a modern storage layer.
 * Specifically hooks into the Shop Area save points.
 */
export default class SaveManager {
  /**
   * The unique key used to identify the game save in the browser's localStorage.
   * @type {string}
   */
  static SAVE_KEY = "overstory_autosave";

  /**
   * Captures the generated save string from the Leopard project and commits it to disk.
   * This replaces the legacy Scratch "Password" prompt in the Shop Area.
   * @param {string} saveString The formatted Scratch save code.
   */
  static autoSave(saveString) {
    // 1. Validate the input save string before processing.
    if (!saveString || typeof saveString !== "string") return;
    
    // 2. Commit the save string to the browser's persistent localStorage API.
    localStorage.setItem(this.SAVE_KEY, saveString);
    
    // 3. Log the successful capture of the Shop Area save point.
    console.log("OverStory: Auto-save successful at Shop Area.");
  }

  /**
   * Retrieves the last captured save string from local storage.
   * Used to automatically populate the 'Save Code' prompt on game reload.
   * @returns {string|null} The raw Scratch-compatible save string or null if empty.
   */
  static getLastSave() {
    return localStorage.getItem(this.SAVE_KEY);
  }

  /**
   * Verification utility to check if a usable save exists in the current environment.
   * The original Scratch project expects strings > 7 characters for valid stage data.
   * @returns {boolean} True if a valid save point is detected.
   */
  static hasValidSave() {
    const save = this.getLastSave();
    return !!(save && save.length > 7);
  }

  /**
   * Utility to clear local persistence (e.g., when the user selects 'New Game').
   */
  static clearSave() {
    localStorage.removeItem(this.SAVE_KEY);
  }
}
