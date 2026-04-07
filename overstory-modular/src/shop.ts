import { EventBus } from './events';
import { GameStore } from './state';

/**
 * ShopItem: Interface for items sold in the Tower Store.
 */
export interface ShopItem {
  id: string;
  name: string;
  description: string;
  price: number;
  onBuy?: (store: GameStore) => void;
}

/**
 * ShopSystem: Modular logic for the game's economy and saving.
 *
 * According to the PRD:
 * - The Shop is the only place the player can Save their game.
 * - Items like 'Grilled Cheese' can be purchased here.
 */
export class ShopSystem {
  private store: GameStore;
  private inventory: ShopItem[] = [
    {
      id: 'grilled_cheese',
      name: 'Grilled Cheese',
      description: 'A warm, gooey snack. Heals 10 HP.',
      price: 15,
      onBuy: (store) => {
        const currentCount = store.getState().grilledCheeseCount;
        store.update({ grilledCheeseCount: currentCount + 1 });
      }
    },
    {
      id: 'zork_trinket',
      name: 'Zork Trinket',
      description: 'A sarcastic little pin. Looks cool.',
      price: 50
    }
  ];

  constructor(store: GameStore) {
    this.store = store;

    /**
     * HOOK: Enter Shop
     * Transitions the game from exploration to the Shop UI.
     */
    EventBus.on('onShopEnter', () => {
      console.log('[SHOP] Welcome to the Tower Store! Browse our sarcastic wares.');
    });

    /**
     * HOOK: Save Point
     * According to the PRD, saving is exclusive to the Shop.
     */
    EventBus.on('onSave', () => {
      this.saveGame();
    });
  }

  /**
   * Logic for purchasing an item.
   * In a React Native context, this would be tied to a List/Button component.
   */
  public purchaseItem(itemId: string) {
    const item = this.inventory.find(i => i.id === itemId);
    if (!item) return;

    // Placeholder for gold/currency logic (not explicitly in current state)
    console.log(`[SHOP] You bought the ${item.name} for ${item.price} coins!`);
    item.onBuy?.(this.store);
  }

  /**
   * Encapsulated Save Logic.
   * This handles the persistence of the 'GameState' to local storage.
   */
  private saveGame() {
    const currentState = this.store.getState();
    const saveData = JSON.stringify(currentState);

    // For Web, we use localStorage. In React Native, this would use AsyncStorage.
    localStorage.setItem('overstory_save', saveData);

    console.log('[SAVE] Game saved successfully at the Shop!');
    EventBus.emit('onDialogStart', {
      id: 'save_confirm',
      speaker: 'System',
      text: 'Game saved successfully.'
    });
  }

  /**
   * Loads a saved game state.
   */
  public loadGame(): boolean {
    const savedData = localStorage.getItem('overstory_save');
    if (!savedData) return false;

    try {
      const parsedState = JSON.parse(savedData);
      this.store.update(parsedState);
      console.log('[SAVE] Game loaded successfully!');
      return true;
    } catch (e) {
      console.error('[SAVE] Failed to load save data.', e);
      return false;
    }
  }
}
