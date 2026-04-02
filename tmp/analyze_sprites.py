import os
import re
import json

core_dir = r"c:\Users\transmacsual\projects\overstory all chapters\daskoon.github.io\overstory-core"

def analyze():
    results = []
    for item in os.listdir(core_dir):
        item_path = os.path.join(core_dir, item)
        if os.path.isdir(item_path):
            js_file = os.path.join(item_path, item + ".js")
            if os.path.exists(js_file):
                with open(js_file, 'r', encoding='utf-8') as f:
                    content = f.read()
                    class_match = re.search(r'class\s+(\w+)\s+extends\s+Sprite', content)
                    name_match = re.search(r'this\.name\s*=\s*["\']([^"\']+)["\']', content)
                    
                    class_name = class_match.group(1) if class_match else "Unknown"
                    sprite_name = name_match.group(1) if name_match else "Unknown"
                    
                    results.append({
                        "folder": item,
                        "class": class_name,
                        "internal_name": sprite_name
                    })
    
    # Check index.js imports
    index_js = os.path.join(core_dir, "index.js")
    imports = []
    if os.path.exists(index_js):
        with open(index_js, 'r', encoding='utf-8') as f:
            for line in f:
                import_match = re.search(r'import\s+(\w+)\s+from\s+["\']\./([^/]+)/\w+\.js["\']', line)
                if import_match:
                    imports.append({
                        "class": import_match.group(1),
                        "folder": import_match.group(2)
                    })
                    
    return {"sprites": results, "imports": imports}

if __name__ == "__main__":
    data = analyze()
    print(json.dumps(data, indent=2))
