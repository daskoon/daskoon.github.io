---
description: Submit manual asset name mappings to resolve cryptic hashes (The Baton Pass)
---

# Baton Pass Workflow
Use this workflow to identify a specific asset based on its hash.

## Steps
1. **Model**: Provides a list of "Undefined Hashes" found in the project.
2. **User**: Provides the human-readable name (Example: "all 6's" = "Shady Snake eyes").
3. **Model**:
    - Updates `core/asset-master.json` with the new mapping.
    - Proactively re-indexes `bestiary.html` to reflect the change.
    - Reports back on which combat or state-machine blocks now have "readable" names.
