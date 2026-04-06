import json
import os
import re

def leopard_sanitize(s):
    # Match make_index.js logic:
    # varName = name.replace(/[^a-zA-Z0-9]/g, "");
    # varName = varName.charAt(0).toUpperCase() + varName.slice(1);
    var_name = re.sub(r'[^a-zA-Z0-9]', '', s)
    if var_name:
        var_name = var_name[0].upper() + var_name[1:]
    return var_name

def main():
    project_path = r'c:\Users\transmacsual\projects\overstory all chapters\daskoon.github.io\sb3-temp\project.json'
    output_path = r'c:\Users\transmacsual\projects\overstory all chapters\daskoon.github.io\overstory-core\asset-map.json'
    
    with open(project_path, 'r', encoding='utf-8') as f:
        project = json.load(f)
    
    asset_map = {}
    
    # Manual overrides for engine-specific sprite names
    manual_overrides = {
        "text": "LETTER",
        "Sprite2": "SHADOW_LETTER",
        "text box": "TEXTBOX",
        "player": "Player",
        "sans.": "Sans"
    }
    
    for target in project.get('targets', []):
        raw_name = target.get('name')
        sanitized_name = leopard_sanitize(raw_name)
        
        # Determine the name to use in the map
        # Priority: Manual Override > Sanitized Name
        map_name = manual_overrides.get(raw_name, sanitized_name)
        
        costumes = {}
        for costume in target.get('costumes', []):
            costumes[costume['name'] + '.' + costume['dataFormat']] = costume['md5ext']
            
        sounds = {}
        for sound in target.get('sounds', []):
            sounds[sound['name'] + '.' + sound['dataFormat']] = sound['md5ext']
            
        asset_info = {
            "costumes": costumes,
            "sounds": sounds
        }
        
        # Store under the map name
        asset_map[map_name] = asset_info
        
        # Also store under raw name IF it's different, to ensure SW find it either way
        if raw_name != map_name:
            asset_map[raw_name] = asset_info
        
        # And under sanitized name if it's different from both
        if sanitized_name != map_name and sanitized_name != raw_name:
            asset_map[sanitized_name] = asset_info

    
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(asset_map, f, indent=2)
    
    print(f"Asset map generated at {output_path}")

if __name__ == '__main__':
    main()
