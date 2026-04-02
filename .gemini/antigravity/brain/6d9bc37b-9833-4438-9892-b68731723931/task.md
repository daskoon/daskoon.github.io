# Overstory Lifecycle Refactor - Task List

## 🛑 Critical System Rules (Windows Environment)
1. **OS Awareness**: No `sed`. Use `node -e` or native file tools for all replacements. 
2. **No Command Chaining**: Execute exactly ONE verifiable action per turn (no `&&` or `;`).
3. **Strict Path Quoting**: Wrap all paths in double quotes (e.g., `"c:\path with spaces\file.txt"`).
4. **No Generic Fallbacks**: Use context-accurate names ONLY (no `ShopNPC1`, `ShopNPC2`).

## Phase 2: Mapping Verification (Complete for Manual IDs)
- [x] Rename Sprite1 to TextBox
- [x] Rename Sprite16 to Jone
- [x] Rename Sprite20 to Heart
- [x] Rename Sprite26 to PlayButton
- [x] Rename Sprite27 to LoadButton
- [x] Rename Item Sprites (GrilledCheese, CrackleWhip, VampireKnife, BurntPan)
- [x] Rename Utility Sprites (SaveStation, CutesyShopNPC, CombatManager)
- [x] Fix Bestiary sound-parsing bug (ignore 'Sounds' array)
- [x] Re-run visual verification report

## Phase 3: Physical Rename (Tomorrow)
- [ ] Execute `refactor-apply.py` (Wait for final user approval of Bestiary)
- [ ] Update imports and class names in `overstory-core/`
- [ ] Append refactor notes to all modified files
