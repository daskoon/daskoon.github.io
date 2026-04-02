import os
import re
import json

# Paths
BASE_DIR = r"c:\Users\transmacsual\projects\overstory all chapters\daskoon.github.io"
CORE_DIR = os.path.join(BASE_DIR, "overstory-core")
SPRITE_MAP = os.path.join(BASE_DIR, "sprite_map.txt")
BESTIARY = os.path.join(BASE_DIR, "bestiary.html")
MASTER_JSON = os.path.join(CORE_DIR, "asset-master.json")

def parse_sprite_map():
    """Parses sprite_map.txt for sprite name -> costume/sound -> hash mappings."""
    registry = {}
    if not os.path.exists(SPRITE_MAP):
        return registry

    current_sprite = None
    with open(SPRITE_MAP, 'r', encoding='utf-8') as f:
        content = f.read()

    # Match Sprites
    sprite_blocks = re.split(r'=== (.*?) \(Target #\d+\) ===', content)
    for i in range(1, len(sprite_blocks), 2):
        sprite_name = sprite_blocks[i]
        block_content = sprite_blocks[i+1]
        
        registry[sprite_name] = {
            "costumes": {},
            "sounds": {}
        }

        # Parse Costumes
        costume_matches = re.findall(r'"(.*?)" -> ([a-f0-9]+\.png)', block_content)
        for name, hash_val in costume_matches:
            registry[sprite_name]["costumes"][hash_val] = name

        # Parse Sounds
        sound_matches = re.findall(r'"(.*?)" -> ([a-f0-9]+\.wav)', block_content)
        for name, hash_val in sound_matches:
            registry[sprite_name]["sounds"][hash_val] = name

    return registry

def parse_bestiary():
    """Parses bestiary.html for manually assigned names."""
    bestiary_renames = {}
    if not os.path.exists(BESTIARY):
        return bestiary_renames

    with open(BESTIARY, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract sprite cards and their names
    # Simple regex to find sprite names in <h3> or .sprite-name
    matches = re.findall(r'(?:<h3 class="sprite-name">|<div class="sprite-name">)(.*?)(?:</h3>|</div>)', content)
    # This might find generic names like "Sprite10", but also "Sans", "Player", etc.
    return matches

def scan_js_context():
    """Scans all JS files in overstory-core for clues."""
    clues = {}
    for root, dirs, files in os.walk(CORE_DIR):
        for file in files:
            if file.endswith('.js') and file != 'index.js':
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    
                    # Look for sound triggers
                    # this.startSound("hash")
                    sound_calls = re.findall(r'this\.startSound\("(.*?)"\)', content)
                    for call in sound_calls:
                        if call not in clues:
                            clues[call] = []
                        clues[call].append(f"Used in {file}")

    return clues

def generate_master():
    print("🚀 Starting Asset Discovery...")
    
    # 1. Get registry from sprite_map (The Gold Standard)
    sprite_registry = parse_sprite_map()
    print(f"✅ Parsed {len(sprite_registry)} base sprites from map.")

    # 2. Build flat hash-to-name mapping
    master_mapping = {
        "costumes": {},
        "sounds": {},
        "sprites": {}
    }

    for sprite, data in sprite_registry.items():
        # Store sprite rename if it's not generic
        is_generic = re.match(r'^(Sprite|Bullet)\d+$', sprite) or sprite in ['Bullet', 'Player']
        if not is_generic:
            master_mapping["sprites"][sprite] = sprite # Identity mapping for now
        
        # Consolidate costumes
        for hash_val, name in data["costumes"].items():
            # Only store if name is descriptive
            if not re.match(r'^(costume|backdrop|A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\d*$', name):
                master_mapping["costumes"][hash_val] = name

        # Consolidate sounds
        for hash_val, name in data["sounds"].items():
             master_mapping["sounds"][hash_val] = name

    # 3. Save to asset-master.json
    with open(MASTER_JSON, 'w', encoding='utf-8') as f:
        json.dump(master_mapping, f, indent=2)
    
    print(f"✨ Master Registry generated: {MASTER_JSON}")
    print(f"📊 Summary: {len(master_mapping['costumes'])} costumes, {len(master_mapping['sounds'])} sounds registered.")

if __name__ == "__main__":
    generate_master()
