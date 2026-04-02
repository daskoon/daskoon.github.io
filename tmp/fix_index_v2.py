import re

index_path = r"c:\Users\transmacsual\projects\overstory all chapters\daskoon.github.io\overstory-core\index.js"

def fix_index():
    with open(index_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Deduplicate Imports
    # This regex matches 'import Name from "./path/path.js";'
    import_pattern = re.compile(r'import\s+(\w+)\s+from\s+["\'](\./[^"\']+)["\'];')
    
    seen_paths = {} # path -> var_name
    
    def repl_import(match):
        var_name = match.group(1)
        path = match.group(2)
        if path in seen_paths:
            return "" # Remove duplicate
        seen_paths[path] = var_name
        return match.group(0)

    # We need to be careful with global replacements because of multi-line things
    # Let's split by lines for imports
    lines = content.splitlines()
    new_lines = []
    seen_imports = set()
    
    in_leopard_import = False
    
    for line in lines:
        if "from \"https://unpkg.com/leopard" in line:
            new_lines.append(line)
            in_leopard_import = False
            continue
        if "import {" in line and "leopard" not in line: # Start of leopard probably
            in_leopard_import = True
            new_lines.append(line)
            continue
        if in_leopard_import:
            new_lines.append(line)
            if "}" in line: in_leopard_import = False
            continue

        match = import_pattern.search(line)
        if match:
            var_name = match.group(1)
            path = match.group(2).lower() # Paths should be case-insensitive for dedupe
            if path in seen_imports:
                continue
            seen_imports.add(path)
            new_lines.append(line)
        else:
            new_lines.append(line)

    content = "\n".join(new_lines)

    # 2. Deduplicate Sprite Object Keys
    # The object looks like:
    # const sprites = {
    #   Key: new Class({ ... }),
    #   Key: new Class({ ... }),
    # }
    
    # Let's find the sprites object block
    sprites_match = re.search(r'const sprites = \{([\s\S]*?)\n\};', content)
    if sprites_match:
        sprites_block = sprites_match.group(1)
        # Each entry is like '  Key: new Class({\n ... \n  }),'
        # Regex to match individual sprite definitions
        entry_pattern = re.compile(r'(\s{2}(\w+):\s+new\s+(\w+)\(\{[\s\S]*?\n\s{2}\),)', re.MULTILINE)
        entries = entry_pattern.findall(sprites_block)
        
        seen_keys = set()
        unique_entries = []
        for full_text, key, cls in entries:
            if key in seen_keys:
                continue
            seen_keys.add(key)
            unique_entries.append(full_text)
            
        new_sprites_block = "\n".join(unique_entries)
        content = content.replace(sprites_block, new_sprites_block)

    with open(index_path, "w", encoding="utf-8") as f:
        f.write(content)

if __name__ == "__main__":
    fix_index()
