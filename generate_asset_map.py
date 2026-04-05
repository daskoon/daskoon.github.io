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
    
    for target in project.get('targets', []):
        raw_name = target.get('name')
        sanitized_name = leopard_sanitize(raw_name)
        
        costumes = {}
        for costume in target.get('costumes', []):
            costumes[costume['name'] + '.' + costume['dataFormat']] = costume['md5ext']
            
        sounds = {}
        for sound in target.get('sounds', []):
            sounds[sound['name'] + '.' + sound['dataFormat']] = sound['md5ext']
            
        # Store under both names just in case
        asset_map[sanitized_name] = {
            "costumes": costumes,
            "sounds": sounds
        }
        if raw_name != sanitized_name:
            asset_map[raw_name] = asset_map[sanitized_name]

    
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(asset_map, f, indent=2)
    
    print(f"Asset map generated at {output_path}")

if __name__ == '__main__':
    main()
