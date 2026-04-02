import os
import re

index_js_path = r"c:\Users\transmacsual\projects\overstory all chapters\daskoon.github.io\overstory-core\index.js"

def deduplicate_index():
    with open(index_js_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    unique_imports = []
    seen_imports = set()
    other_lines = []
    
    in_sprites = False
    sprites_lines = []
    seen_sprite_keys = set()
    
    header_lines = []
    
    for line in lines:
        # Import deduplication
        if line.strip().startswith("import "):
            # Normalize for comparison: 'import Name from "path";'
            # We care about the path mostly
            match = re.search(r'import\s+(\w+)\s+from\s+["\'](.*)["\'];', line)
            if match:
                var_name = match.group(1)
                path = match.group(2)
                key = (var_name, path)
                if key not in seen_imports:
                    unique_imports.append(line)
                    seen_imports.add(key)
                continue
            else:
                # Handle leopard imports (multi-line)
                unique_imports.append(line)
                continue

        if "const sprites = {" in line:
            in_sprites = True
            other_lines.append(line)
            continue
        
        if in_sprites:
            if "};" in line and len(line.strip()) < 5:
                in_sprites = False
                # Deduplicate sprites
                # Sprite lines look like '  Key: new Class({', '    x: 0,', '  }),'
                # This is tricky because it's multi-line.
                # Let's just collect all sprite definitions.
                pass
            else:
                sprites_lines.append(line)
                continue
        
        if not in_sprites:
            other_lines.append(line)

    # Simple approach for sprites: since it's a mess, let's just find the 'Key: new Class(...)' blocks
    full_sprites_text = "".join(sprites_lines)
    # Split by blocks: '  Key: new Class({\n...\n  }),'
    blocks = re.findall(r'\s{2}(\w+):\s+new\s+(\w+)\({\n?([\s\S]*?)\n?\s{2}\),', full_sprites_text)
    
    unique_sprite_blocks = []
    seen_keys = set()
    for key, cls, body in blocks:
        if key not in seen_keys:
            block = f"  {key}: new {cls}({{\n{body}\n  }}),"
            unique_sprite_blocks.append(block)
            seen_keys.add(key)

    # Reconstruct
    with open(index_js_path, 'w', encoding='utf-8') as f:
        # Write imports first
        for imp in unique_imports:
            f.write(imp)
        
        # Write other lines until sprites
        for line in other_lines:
            f.write(line)
            if "const sprites = {" in line:
                for block in unique_sprite_blocks:
                    f.write("\n" + block)
                f.write("\n};\n")
                # Skip the old sprites block which we already filtered out of other_lines
                break
        
        # Write remaining lines
        write_rest = False
        for line in other_lines:
            if "const project = new Project" in line:
                write_rest = True
            if write_rest:
                f.write(line)

if __name__ == "__main__":
    deduplicate_index()
