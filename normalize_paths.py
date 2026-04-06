import os
import re

def normalize_paths():
    root_dir = 'overstory-core'
    fixed_count = 0
    
    for subdir, dirs, files in os.walk(root_dir):
        # Skip the root itself and system/Stage directories if they don't follow the pattern
        # Actually, Stage also has costumes/sounds, so we should fix it too if it's nested
        
        for file in files:
            if file.endswith('.js'):
                file_path = os.path.join(subdir, file)
                
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Broad pattern: find "./something/(costumes|sounds)/" and replace with "./$1/"
                # This removes the redundant folder prefix that causes double-nesting
                pattern = r'\.\/[^/]+\/(costumes|sounds)\/'
                replacement = r'./\1/'
                
                new_content = re.sub(pattern, replacement, content)
                
                if content != new_content:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    fixed_count += 1
                    print(f"✅ Fixed paths in {file_path}")

    print(f"\nFinished! Normalized paths in {fixed_count} files.")

if __name__ == '__main__':
    normalize_paths()
