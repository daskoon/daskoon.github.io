import re
import os

def parse_sprite_map(file_path):
    sprites = []
    current_sprite = None
    
    if not os.path.exists(file_path):
        return []
        
    section = None
    with open(file_path, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            # Match Sprite/Target header
            sprite_match = re.match(r'=== (.+) \(Target #(\d+)\) ===', line)
            if sprite_match:
                if current_sprite:
                    sprites.append(current_sprite)
                current_sprite = {
                    'name': sprite_match.group(1),
                    'target_id': sprite_match.group(2),
                    'costumes': []
                }
                continue
            
            # Track sections to avoid mixing sounds into costumes
            if "Costumes" in line:
                section = "costumes"
                continue
            elif "Sounds" in line:
                section = "sounds"
                continue
                
            # Match costumes only if in the correct section
            costume_match = re.match(r'\d+\. "(.+)" -> (.+)', line)
            if costume_match and current_sprite and section == "costumes":
                current_sprite['costumes'].append({
                    'name': costume_match.group(1).replace('"', ''),
                    'hash': costume_match.group(2)
                })
        
        if current_sprite:
            sprites.append(current_sprite)
            
    return sprites

def generate_bestiary_html(sprites, output_path):
    # Sort sprites: Special names first, then numeric Sprite names
    def sort_key(s):
        name = s['name']
        if name.startswith('Sprite') and name[6:].isdigit():
            return (1, int(name[6:]))
        return (0, name.lower())
    
    sprites.sort(key=sort_key)

    html = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OverStory Game Asset Bestiary</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&family=JetBrains+Mono&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg: #030712;
            --card-bg: rgba(17, 24, 39, 0.7);
            --border: rgba(255, 255, 255, 0.1);
            --text-primary: #f8fafc;
            --text-secondary: #94a3b8;
            --header: #38bdf8;
            --accent: #6366f1;
            --vibrant-glow: 0 0 15px rgba(56, 189, 248, 0.2);
            --glass: rgba(255, 255, 255, 0.05);
        }
        
        body { 
            background: var(--bg); 
            color: var(--text-primary); 
            font-family: 'Outfit', sans-serif; 
            margin: 0; 
            padding: 40px; 
            background-image: radial-gradient(circle at 50% 0%, #1e1b4b 0%, #030712 100%);
            min-height: 100vh;
        }

        header {
            max-width: 1200px;
            margin: 0 auto 60px;
            text-align: center;
        }

        h1 { 
            background: linear-gradient(to right, #38bdf8, #818cf8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 3.5rem; 
            margin-bottom: 10px;
            font-weight: 600;
        }

        .subtitle {
            color: var(--text-secondary);
            font-size: 1.1rem;
            margin-bottom: 30px;
            letter-spacing: 0.05em;
        }

        .search-container {
            position: relative;
            max-width: 600px;
            margin: 0 auto;
        }

        .search-bar {
            width: 100%;
            padding: 16px 24px;
            border-radius: 99px;
            border: 1px solid var(--border);
            background: var(--glass);
            color: white;
            font-size: 1rem;
            outline: none;
            backdrop-filter: blur(12px);
            transition: all 0.3s ease;
            box-shadow: var(--vibrant-glow);
        }

        .search-bar:focus { 
            border-color: var(--header); 
            background: rgba(255, 255, 255, 0.1);
            box-shadow: 0 0 25px rgba(56, 189, 248, 0.4);
        }

        .sprite-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
            gap: 32px;
            max-width: 1600px;
            margin: 0 auto;
        }

        .sprite-card {
            background: var(--card-bg);
            backdrop-filter: blur(20px);
            border: 1px solid var(--border);
            border-radius: 24px;
            padding: 32px;
            display: flex; 
            flex-direction: column;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
        }

        .sprite-card:hover {
            transform: translateY(-8px) scale(1.02);
            border-color: var(--header);
            box-shadow: 0 20px 40px rgba(0,0,0,0.4), var(--vibrant-glow);
        }

        .sprite-name { 
            font-family: 'JetBrains Mono', monospace;
            font-weight: 600; 
            font-size: 1.4rem; 
            margin-bottom: 24px; 
            color: var(--header); 
            letter-spacing: -0.02em;
        }

        .id-badge { 
            position: absolute; 
            top: 24px; 
            right: 24px; 
            font-size: 0.8rem; 
            color: var(--accent);
            background: rgba(99, 102, 241, 0.1);
            padding: 4px 12px;
            border-radius: 99px;
            border: 1px solid rgba(99, 102, 241, 0.2);
        }

        /* All Costumes Gallery */
        .costume-gallery {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
            gap: 16px;
            margin-bottom: 24px;
            padding: 16px;
            background: rgba(0,0,0,0.2);
            border-radius: 16px;
            border: 1px solid var(--border);
        }

        .costume-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            padding: 8px;
            background: var(--glass);
            border-radius: 12px;
            border: 1px solid transparent;
            transition: all 0.2s;
        }

        .costume-box:hover {
            background: rgba(255,255,255,0.1);
            border-color: var(--header);
        }

        .img-wrapper {
            width: 80px; 
            height: 80px; 
            display: flex; 
            align-items: center; 
            justify-content: center;
        }

        img { 
            max-width: 80px; 
            max-height: 80px; 
            image-rendering: pixelated; 
            filter: drop-shadow(0 4px 8px rgba(0,0,0,0.5));
        }

        .costume-label {
            font-size: 0.65rem;
            color: var(--text-secondary);
            text-align: center;
            font-family: 'JetBrains Mono', monospace;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 100%;
        }

        .meta-stats {
            margin-top: auto;
            border-top: 1px solid var(--border);
            padding-top: 16px;
            display: flex;
            justify-content: space-between;
            font-size: 0.8rem;
            color: var(--text-secondary);
        }

        .stat-badge {
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .stat-dot {
            width: 6px;
            height: 6px;
            background: var(--accent);
            border-radius: 50%;
        }

    </style>
</head>
<body>
    <header>
        <h1>OverStory Asset Bestiary</h1>
        <p class="subtitle">PREMIUM ASSET EXPLORER & MAPPING VERIFICATION</p>
        <div class="search-container">
            <input type="text" id="searchInput" class="search-bar" placeholder="Search by name, ID, or costume..." onkeyup="filterSprites()">
        </div>
    </header>

    <div class="sprite-grid" id="spriteGrid">
    """
    
    for sprite in sprites:
        if not sprite['costumes']: continue
        
        html += f"""
        <div class="sprite-card" data-name="{sprite['name'].lower()}" data-costumes="{' '.join([c['name'].lower() for c in sprite['costumes']])}">
            <div class="id-badge">Target #{sprite['target_id']}</div>
            <div class="sprite-name">{sprite['name'].upper()}</div>
            
            <div class="costume-gallery">
        """
        
        for costume in sprite['costumes']:
            html += f"""
                <div class="costume-box" title="{costume['name']}">
                    <div class="img-wrapper">
                        <img src="assets/{costume['hash']}" alt="{costume['name']}" loading="lazy">
                    </div>
                    <div class="costume-label">{costume['name']}</div>
                </div>
            """
            
        html += f"""
            </div>
            
            <div class="meta-stats">
                <div class="stat-badge"><span class="stat-dot"></span> {len(sprite['costumes'])} Costumes</div>
                <div class="stat-badge">SPRITE_ID: {sprite['target_id']}</div>
            </div>
        </div>
        """
        
    html += """
    </div>
    <script>
        function filterSprites() {
            let input = document.getElementById('searchInput').value.toLowerCase();
            let grid = document.getElementById('spriteGrid');
            let cards = grid.getElementsByClassName('sprite-card');
            for (let card of cards) {
                let name = card.getAttribute('data-name');
                let costumes = card.getAttribute('data-costumes');
                card.style.display = (name.includes(input) || costumes.includes(input)) ? "" : "none";
            }
        }
    </script>
    <script src="overstory-core/bestiary_bridge.js"></script>
</body>
</html>
"""
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html)

if __name__ == "__main__":
    sprite_map_file = os.path.join(os.getcwd(), "sprite_map.txt")
    output_html = os.path.join(os.getcwd(), "bestiary.html")
    if os.path.exists(sprite_map_file):
        sprites = parse_sprite_map(sprite_map_file)
        generate_bestiary_html(sprites, output_html)
        print("Success: Premium bestiary.html generated with all costumes.")
    else:
        print(f"Error: {sprite_map_file} not found.")
