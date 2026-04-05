import os
from PIL import Image
import json

base_path = r"overstory-core\Text\costumes"
widths = {}

if not os.path.exists(base_path):
    # Try absolute path
    base_path = r"c:\Users\transmacsual\projects\overstory all chapters\daskoon.github.io\overstory-core\Text\costumes"

for filename in os.listdir(base_path):
    if filename.lower().endswith(".png"):
        try:
            with Image.open(os.path.join(base_path, filename)) as img:
                name = os.path.splitext(filename)[0]
                widths[name] = img.width
        except Exception:
            widths[os.path.splitext(filename)[0]] = 10
    elif filename.lower().endswith(".svg"):
         widths[os.path.splitext(filename)[0]] = 15 # Default for SVG

# Add space width manually (usually not an image)
widths[" "] = 8

print(json.dumps(widths, indent=2))
