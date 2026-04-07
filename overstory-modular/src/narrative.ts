import { EventBus } from './events';
import { GameStore } from './state';

/**
 * DialogueNode: Structure for a single conversation block.
 *
 * Replaces the Scratch "Say" and "Wait" blocks with a dynamic, data-driven system.
 * This makes it incredibly easy to add new narrative or funny sarcasm without
 * writing more code.
 */
export interface DialogueNode {
  /** Unique ID for this dialogue piece */
  id: string;
  /** Name of the speaker (e.g., 'Zork', 'Horse') */
  speaker: string;
  /** The text content to display */
  text: string;
  /** Optional interactive choices for the player to select */
  choices?: { text: string; nextId: string }[];
  /** The next node to automatically jump to after this one is finished */
  nextId?: string;
  /** Custom logic to execute when this dialogue is finished (e.g., 'startBattle') */
  onComplete?: () => void;
}

/**
 * DialogueManager: The "Narrative System" for OverStory.
 *
 * This module is perfect for React Native, as it can be directly tied to
 * a Text/Dialogue component that updates whenever the manager emits 'onDialogStart'.
 */
export class DialogueManager {
  private currentDialog: DialogueNode | null = null;

  /**
   * Initializes the manager and listens for narrative triggers.
   */
  constructor(_store: GameStore) {
    /**
     * HOOK: Narrative Entrance
     * When any system (e.g., an NPC collision or a story event) triggers dialogue,
     * the manager starts the narrative sequence and pauses other inputs.
     */
    EventBus.on('onDialogStart', (node: DialogueNode) => {
      this.startDialog(node);
    });
  }

  /**
   * Internal logic for processing a new dialogue sequence.
   */
  private startDialog(node: DialogueNode) {
    this.currentDialog = node;

    // Sarcasm and tone check based on PRD requirements.
    // In a real app, this could trigger different voice/font assets.
    if (node.text.includes('horse') || node.text.includes('dog')) {
      console.log('[NARRATIVE] Tone: Sarcastic/Deep Lore detected.');
    }

    // Displays the dialogue to the console, but would be the main React UI in a mobile app.
    console.log(`[DIALOG] [${node.speaker}] : ${node.text}`);

    if (node.choices) {
      console.log('[DIALOG] Player Choice required: ', node.choices.map(c => c.text).join(' | '));
    }
  }

  /**
   * Progresses the conversation forward.
   *
   * @param choiceIndex (Optional) The index of the choice selected by the player.
   */
  public advanceDialog(choiceIndex: number = 0) {
    if (!this.currentDialog) return;

    // Handle branching logic based on choices.
    if (this.currentDialog.choices && this.currentDialog.choices[choiceIndex]) {
      const nextId = this.currentDialog.choices[choiceIndex].nextId;
      this.advanceTo(nextId);
    } else if (this.currentDialog.nextId) {
      this.advanceTo(this.currentDialog.nextId);
    } else {
      // If there's no next node, the conversation is over.
      this.endDialog();
    }
  }

  /**
   * Logic for transitioning to the next dialogue node.
   * In a production app, this would fetch the next node from a 'DialogueDatabase'.
   */
  private advanceTo(nextId: string) {
    console.log(`[NARRATIVE] Transitioning to dialogue ID: ${nextId}`);
  }

  /**
   * Cleanly finishes the narrative sequence and releases the game to exploration.
   */
  private endDialog() {
    console.log('[NARRATIVE] Sequence finished.');

    // Execute any completion callbacks (e.g., triggering a shop save or battle).
    this.currentDialog?.onComplete?.();
    this.currentDialog = null;

    // HOOK: Notify the Game that it's safe to resume exploration.
    EventBus.emit('onDialogComplete');
  }
}
