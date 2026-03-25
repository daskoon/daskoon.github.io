import { EventBus } from './events';
import { GameStore } from './state';

export interface DialogueNode {
  id: string;
  speaker: string;
  text: string;
  choices?: { text: string; nextId: string }[];
  nextId?: string;
  onComplete?: () => void;
}

export class DialogueManager {
  private currentDialog: DialogueNode | null = null;
  constructor(_store: GameStore) {

    // Listen for narrative-related event triggers
    EventBus.on('onDialogStart', (node: DialogueNode) => {
      this.startDialog(node);
    });
  }

  private startDialog(node: DialogueNode) {
    this.currentDialog = node;
    console.log(`[${node.speaker}] : ${node.text}`);

    if (node.choices) {
      console.log('Choices: ', node.choices.map(c => c.text).join(' | '));
    }

    // Integration for PRD sarcasm/humor
    if (node.text.includes('horse') || node.text.includes('dog')) {
      console.log('Deep lore about horses/dogs detected! Sarcastic tone activated.');
    }
  }

  public advanceDialog(choiceIndex: number = 0) {
    if (!this.currentDialog) return;

    if (this.currentDialog.choices && this.currentDialog.choices[choiceIndex]) {
      const nextId = this.currentDialog.choices[choiceIndex].nextId;
      this.advanceTo(nextId);
    } else if (this.currentDialog.nextId) {
      this.advanceTo(this.currentDialog.nextId);
    } else {
      this.endDialog();
    }
  }

  private advanceTo(nextId: string) {
    // In a real implementation, would look up the node by ID in a registry
    console.log(`Advancing to dialog node: ${nextId}`);
  }

  private endDialog() {
    console.log('Dialogue complete.');
    this.currentDialog?.onComplete?.();
    this.currentDialog = null;
    EventBus.emit('onDialogComplete');
  }
}
