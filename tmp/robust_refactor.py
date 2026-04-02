import os
import re
import json
import shutil

core_dir = r"c:\Users\transmacsual\projects\overstory all chapters\daskoon.github.io\overstory-core"
tasks_file = r"c:\Users\transmacsual\projects\overstory all chapters\daskoon.github.io\rename_tasks_v3.json"
index_js_path = os.path.join(core_dir, "index.js")

def robust_refactor():
    with open(tasks_file, 'r', encoding='utf-8') as f:
        tasks = json.load(f)

    folder_mapping = {}
    class_mapping = {}

    for task in tasks:
        old = task['oldFolder']
        new = task['newName']
        if old.lower() == new.lower():
            continue
        new_class = new[0].upper() + new[1:] if len(new) > 0 else new
        folder_mapping[old] = new
        class_mapping[old] = new_class

    print(f"Loaded {len(folder_mapping)} potential renames.")

    # 1. Rename Folders and Files
    for old, new in folder_mapping.items():
        try:
            old_path = os.path.join(core_dir, old)
            new_path = os.path.join(core_dir, new)
            
            # Handle folder renaming
            if os.path.exists(old_path) and os.path.exists(new_path):
                print(f"Conflict: Both {old} and {new} exist. Checking contents...")
                # If new exists, we see if we can just delete old
                old_js = os.path.join(old_path, old + ".js")
                if not os.path.exists(old_js):
                    print(f"Removing redundant folder {old} (no JS file)")
                    shutil.rmtree(old_path)
                    active_path = new_path
                else:
                    # Both have JS files. Let's try to merge/overwrite.
                    print(f"Overwriting {new} with {old} contents (assuming old is the source)")
                    shutil.rmtree(new_path)
                    os.rename(old_path, new_path)
                    active_path = new_path
            elif os.path.exists(old_path):
                os.rename(old_path, new_path)
                active_path = new_path
            elif os.path.exists(new_path):
                active_path = new_path
            else:
                continue

            # Rename file inside
            old_js = os.path.join(active_path, old + ".js")
            new_js = os.path.join(active_path, new + ".js")
            if os.path.exists(old_js):
                if os.path.exists(new_js):
                    os.remove(new_js)
                os.rename(old_js, new_js)

            # Update Class and Internal Paths
            if os.path.exists(new_js):
                with open(new_js, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_class = class_mapping[old]
                updated = content.replace(f"class {old} extends Sprite", f"class {new_class} extends Sprite")
                # Handle lowercase or already renamed cases
                updated = updated.replace(f"class {new} extends Sprite", f"class {new_class} extends Sprite")
                updated = updated.replace(f"./{old}/", f"./{new}/")
                
                if updated != content:
                    with open(new_js, 'w', encoding='utf-8') as f:
                        f.write(updated)
                    print(f"Updated JS in {new}")

        except Exception as e:
            print(f"Error processing {old}: {e}")

    # 2. Update index.js
    if os.path.exists(index_js_path):
        with open(index_js_path, 'r', encoding='utf-8') as f:
            index_content = f.read()
            
        original_index = index_content
        for old, new in folder_mapping.items():
            new_class = class_mapping[old]
            
            # import Patterns
            index_content = index_content.replace(f'import {old} from "./{old}/{old}.js";', f'import {new_class} from "./{new}/{new}.js";')
            index_content = index_content.replace(f'import {new} from "./{new}/{new}.js";', f'import {new_class} from "./{new}/{new}.js";')
            
            # Instantiation Patterns
            index_content = index_content.replace(f'  {old}: new {old}({{', f'  {new_class}: new {new_class}({{')
            index_content = index_content.replace(f'  {new}: new {new}({{', f'  {new_class}: new {new_class}({{')
            
            # Key/Value patterns if different
            index_content = index_content.replace(f'  {old}: new {new_class}({{', f'  {new_class}: new {new_class}({{')

        if index_content != original_index:
            with open(index_js_path, 'w', encoding='utf-8') as f:
                f.write(index_content)
            print("Successfully updated index.js")

if __name__ == "__main__":
    robust_refactor()
