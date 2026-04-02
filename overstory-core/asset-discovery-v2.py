import os
import re
import json

# Paths
BASE_DIR = r"c:\Users\transmacsual\projects\overstory all chapters\daskoon.github.io"
CORE_DIR = os.path.join(BASE_DIR, "overstory-core")
MASTER_JSON = os.path.join(CORE_DIR, "asset-master.json")

def load_master():
    if os.path.exists(MASTER_JSON):
        with open(MASTER_JSON, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {"costumes": {}, "sounds": {}, "sprites": {}}

def scan_for_sprite_names():
    print("🔍 Scanning overstory-core for sprite identity clues (v3)...")
    master = load_master()
    
    proposed_names = {} # target_dir -> name
    name_counts = {}
    
    # We'll look at each directory in overstory-core
    for sprite_dir in sorted(os.listdir(CORE_DIR)):
        dir_path = os.path.join(CORE_DIR, sprite_dir)
        if not os.path.isdir(dir_path) or sprite_dir in ['Stage', 'Background', 'Joystick', 'Player', 'Sans', 'Text', 'TextBox', 'SaveManagerSprite', 'Bullet', 'Bullet1', 'Bullet2', 'Bullet3', 'Bullet4', 'Bullet5', 'Bullet6', 'Bullet7', 'Bullet8', 'Bullet9', 'Bullet10']:
            continue
            
        js_file = os.path.join(dir_path, f"{sprite_dir}.js")
        if not os.path.exists(js_file):
            continue
            
        with open(js_file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        costume_names = re.findall(r'new Costume\("([^"]+)"', content)
        broadcasts = re.findall(r'\{ name: "([^"]+)" \}', content)
        
        best_guess = None
        
        # Priority 1: Specific costume name
        descriptive_costumes = [n for n in costume_names if not re.match(r'^(costume|backdrop|A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\d*$', n)]
        if descriptive_costumes:
            best_guess = descriptive_costumes[0]
            
        # Priority 2: Broadcast clues
        if not best_guess:
            if "Shop" in broadcasts:
                best_guess = "ShopNPC"
            elif any("Fight" in b for b in broadcasts):
                best_guess = "EnemyNPC"
        
        if best_guess:
            # Clean name
            best_guess = re.sub(r'[^a-zA-Z0-9]', '', best_guess)
            if not best_guess:
                continue
                
            # Handle duplicates
            if best_guess in name_counts:
                name_counts[best_guess] += 1
                unique_name = f"{best_guess}{name_counts[best_guess]}"
            else:
                name_counts[best_guess] = 1
                unique_name = best_guess
                
            proposed_names[sprite_dir] = unique_name
            print(f"💡 Found clue: {sprite_dir} -> {unique_name}")

    # Update master['sprites']
    for old, new in proposed_names.items():
        master["sprites"][old] = new
        
    with open(MASTER_JSON, 'w', encoding='utf-8') as f:
        json.dump(master, f, indent=2)
    print("✅ asset-master.json updated with unique sprite suggestions.")

if __name__ == "__main__":
    scan_for_sprite_names()
