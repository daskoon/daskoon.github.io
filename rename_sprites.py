import os

def rename_sprites():
    file_path = 'sprite_map.txt'
    if not os.path.exists(file_path):
        print(f"Error: {file_path} not found.")
        return

    # Map of names to replace
    # Format: "=== SpriteX (Target #Y) ===" -> "=== NewName (Target #Y) ==="
    replacements = {
        'Sprite1 ': 'TextBox ',
        'Sprite16 ': 'Jone ',
        'Sprite20 ': 'Heart ',
        'Sprite26 ': 'PlayButton ',
        'Sprite27 ': 'LoadButton '
    }

    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    new_lines = []
    for line in lines:
        for old, new in replacements.items():
            if f"=== {old}" in line:
                line = line.replace(f"=== {old}", f"=== {new}")
        new_lines.append(line)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    
    print("Successfully updated sprite_map.txt with manual identifications.")

if __name__ == "__main__":
    rename_sprites()
