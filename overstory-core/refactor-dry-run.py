import os
import re
import json

# Paths
BASE_DIR = r"c:\Users\transmacsual\projects\overstory all chapters\daskoon.github.io"
CORE_DIR = os.path.join(BASE_DIR, "overstory-core")
MASTER_JSON = os.path.join(CORE_DIR, "asset-master.json")
REPORT_FILE = os.path.join(CORE_DIR, "refactor-proposal-report.md")

def load_master():
    if not os.path.exists(MASTER_JSON):
        return None
    with open(MASTER_JSON, 'r', encoding='utf-8') as f:
        return json.load(f)

def generate_report():
    print("🚜 Starting Dry-Run Propagator (v2)...")
    master = load_master()
    if not master:
        print("❌ Error: asset-master.json not found.")
        return

    report = []
    report.append("# Overstory Refactor Proposal Report (v2)")
    report.append(f"**Date:** 2026-03-30")
    report.append(f"**Source:** asset-master.json")
    report.append("\n## Executive Summary")
    report.append("This report simulates the propagation of human-readable names across the modular codebase. "
                  "It now includes Sprite renames (folders, imports, classes) and Asset renames (hashes).")

    analysis = {
        "files_affected": set(),
        "total_matches": 0,
        "details": []
    }

    # Build a master list of search terms
    # 1. Assets (Hashes)
    asset_search_map = {}
    for hash_val, name in master.get("costumes", {}).items():
        base_hash = hash_val.split('.')[0]
        asset_search_map[base_hash] = name
    for hash_val, name in master.get("sounds", {}).items():
        base_hash = hash_val.split('.')[0]
        asset_search_map[base_hash] = name

    # 2. Sprites (Generic names)
    sprite_search_map = master.get("sprites", {})

    # Scan codebase
    for root, dirs, files in os.walk(CORE_DIR):
        for file in files:
            if file.endswith('.js') and file not in ['bestiary_bridge.js', 'asset-discovery-v2.py']:
                path = os.path.join(root, file)
                rel_path = os.path.relpath(path, CORE_DIR)
                
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    
                file_matches = []
                
                # Check Assets
                for search_term, replace_name in asset_search_map.items():
                    pattern = f'"{search_term}"|\'{search_term}\''
                    matches = re.findall(pattern, content)
                    if matches:
                        file_matches.append({
                            "type": "Asset",
                            "term": search_term,
                            "replacement": replace_name,
                            "count": len(matches)
                        })
                        analysis["total_matches"] += len(matches)
                        analysis["files_affected"].add(rel_path)

                # Check Sprites
                for search_term, replace_name in sprite_search_map.items():
                    # Match Sprite name as a word (e.g. Sprite132 but not Sprite1322)
                    # Also match in strings like "./Sprite132/"
                    pattern = r'\b' + re.escape(search_term) + r'\b'
                    matches = re.findall(pattern, content)
                    if matches:
                        # Skip if it's the file itself or if it's already the right name
                        if search_term == replace_name:
                            continue
                            
                        file_matches.append({
                            "type": "Sprite",
                            "term": search_term,
                            "replacement": replace_name,
                            "count": len(matches)
                        })
                        analysis["total_matches"] += len(matches)
                        analysis["files_affected"].add(rel_path)
                
                if file_matches:
                    analysis["details"].append({
                        "file": rel_path,
                        "matches": file_matches
                    })

    # Build the report content
    report.append(f"\n- **Total Potential Changes:** {analysis['total_matches']}")
    report.append(f"- **Files to be Modified:** {len(analysis['files_affected'])}")

    report.append("\n## Detailed Impact")
    for detail in analysis["details"]:
        report.append(f"\n### `{detail['file']}`")
        report.append("| Type | Original | Proposed Name | Occurrences |")
        report.append("| --- | --- | --- | --- |")
        for m in detail["matches"]:
            report.append(f"| {m['type']} | `{m['term']}` | **{m['replacement']}** | {m['count']} |")

    report.append("\n## Next Steps")
    report.append("1. **Review** this report for any 'hallucinated' or incorrect mappings.")
    report.append("2. **Commit** the changes using `refactor-apply.py` (to be generated).")
    report.append("3. **Test** the game for broken asset loads.")

    with open(REPORT_FILE, 'w', encoding='utf-8') as f:
        f.write("\n".join(report))

    print(f"✨ Report generated: {REPORT_FILE}")

if __name__ == "__main__":
    generate_report()
