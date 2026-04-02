/**
 * Overstory Bestiary Bridge
 * 
 * This script dynamically injects renaming and audio playback capabilities
 * into the legacy Bestiary. It serves as a bridge for developers to 
 * identify cryptic assets and map them to human-readable names.
 */

(function() {
    console.log("🌌 Overstory Bestiary Bridge Initialized");

    // Initialize Local Storage for renames
    const STORAGE_KEY = 'overstory_asset_renames';
    let assetRenames = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

    // Create a hidden global audio player
    const audioPlayer = new Audio();
    
    // Inject Styles
    const style = document.createElement('style');
    style.textContent = `
        .magic-action-bar {
            display: flex;
            gap: 8px;
            margin-top: 10px;
            padding-top: 10px;
            border-top: 1px solid #444;
            align-items: center;
        }
        .rename-input {
            flex: 1;
            background: #222;
            border: 1px solid #555;
            color: #fff;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
        }
        .btn-play {
            background: #4a90e2;
            color: white;
            border: none;
            padding: 4px 10px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 12px;
            transition: background 0.2s;
        }
        .btn-play:hover { background: #357abd; }
        .btn-play.playing { background: #e94e77; }
        
        .btn-export {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #27ae60;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 50px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            cursor: pointer;
            z-index: 1000;
            font-weight: bold;
        }
        .btn-export:hover { background: #2ecc71; transform: scale(1.05); }
    `;
    document.head.appendChild(style);

    // Main Injection Logic
    function injectUI() {
        const spriteCards = document.querySelectorAll('.sprite-card');
        console.log(`🔍 Found ${spriteCards.length} sprite cards`);

        spriteCards.forEach(card => {
            // Check if already injected
            if (card.querySelector('.magic-action-bar')) return;

            const nameElement = card.querySelector('h3') || card.querySelector('.sprite-name');
            if (!nameElement) return;

            const spriteId = nameElement.textContent.trim();
            const currentAlias = assetRenames[spriteId] || '';

            // Create Action Bar
            const bar = document.createElement('div');
            bar.className = 'magic-action-bar';

            // Rename Input
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'rename-input';
            input.placeholder = 'Set Human Name...';
            input.value = currentAlias;
            input.title = `Original: ${spriteId}`;
            
            input.addEventListener('change', (e) => {
                const newName = e.target.value.trim();
                if (newName) {
                    assetRenames[spriteId] = newName;
                } else {
                    delete assetRenames[spriteId];
                }
                localStorage.setItem(STORAGE_KEY, JSON.stringify(assetRenames));
                console.log(`✅ Assigned: ${spriteId} -> ${newName || 'RESTORED'}`);
            });

            // Play Button (if audio exists)
            // Note: In bestiary.html, we look for data-sound or similar.
            // Since it's a visual bestiary, we might need a mapping.
            // Most costumes in bestiary.html have <img> with src like assets/HASH.png
            // We can guess the .wav with the same HASH.
            const img = card.querySelector('img');
            if (img && img.src) {
                const hash = img.src.split('/').pop().split('.')[0];
                const playBtn = document.createElement('button');
                playBtn.className = 'btn-play';
                playBtn.innerHTML = '▶';
                playBtn.title = `Play audio trace (${hash})`;

                playBtn.addEventListener('click', () => {
                    if (audioPlayer.src.includes(hash) && !audioPlayer.paused) {
                        audioPlayer.pause();
                        playBtn.innerHTML = '▶';
                        playBtn.classList.remove('playing');
                    } else {
                        // Reset all buttons
                        document.querySelectorAll('.btn-play').forEach(b => {
                            b.innerHTML = '▶';
                            b.classList.remove('playing');
                        });

                        // Trigger through sw.js proxy
                        audioPlayer.src = `assets/${hash}.wav`;
                        audioPlayer.play().catch(err => {
                            console.warn(`🔇 No audio found for ${hash}`);
                            // Try mp3
                            audioPlayer.src = `assets/${hash}.mp3`;
                            audioPlayer.play().catch(() => {
                                playBtn.innerHTML = '❌';
                                setTimeout(() => playBtn.innerHTML = '▶', 1000);
                            });
                        });
                        
                        playBtn.innerHTML = '⏸';
                        playBtn.classList.add('playing');
                    }
                });

                bar.appendChild(playBtn);
            }

            bar.appendChild(input);
            card.appendChild(bar);
        });

        // Add Export Button
        if (!document.querySelector('.btn-export')) {
            const exportBtn = document.createElement('button');
            exportBtn.className = 'btn-export';
            exportBtn.textContent = '📦 Export to asset-master.json';
            exportBtn.onclick = () => {
                const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(assetRenames, null, 2));
                const downloadAnchorNode = document.createElement('a');
                downloadAnchorNode.setAttribute("href", dataStr);
                downloadAnchorNode.setAttribute("download", "asset-master-proposal.json");
                document.body.appendChild(downloadAnchorNode);
                downloadAnchorNode.click();
                downloadAnchorNode.remove();
                alert("Proposal exported! Please provide 'asset-master-proposal.json' to the AI Orchestrator to finalize renames.");
            };
            document.body.appendChild(exportBtn);
        }
    }

    // Run on load and after 1s (to catch dynamically rendered components)
    window.addEventListener('load', injectUI);
    setTimeout(injectUI, 1000);

    // Watch for DOM changes (if the bestiary uses a framework)
    const observer = new MutationObserver(injectUI);
    observer.observe(document.body, { childList: true, subtree: true });

})();
