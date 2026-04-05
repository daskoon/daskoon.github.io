const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const SOURCE_ICON = 'icon-512.png';
const RES_DIR = 'android/app/src/main/res';

const DENSITIES = [
  { name: 'mipmap-mdpi', size: 48 },
  { name: 'mipmap-hdpi', size: 72 },
  { name: 'mipmap-xhdpi', size: 96 },
  { name: 'mipmap-xxhdpi', size: 144 },
  { name: 'mipmap-xxxhdpi', size: 192 }
];

function generateIcons() {
  if (!fs.existsSync(SOURCE_ICON)) {
    console.error(`❌ Source icon ${SOURCE_ICON} not found.`);
    process.exit(1);
  }

  console.log('🚀 Starting Automated Icon Generation...');

  DENSITIES.forEach(density => {
    const targetDir = path.join(RES_DIR, density.name);
    if (!fs.existsSync(targetDir)) {
      console.log(`Creating directory: ${targetDir}`);
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const files = ['ic_launcher.png', 'ic_launcher_round.png', 'ic_launcher_foreground.png'];
    files.forEach(file => {
      const outputPath = path.join(targetDir, file);
      console.log(`Generating ${density.name} (${density.size}x${density.size}) -> ${file}`);
      
      try {
        // Use ffmpeg to scale with high quality (lanczos)
        execSync(`ffmpeg -y -i "${SOURCE_ICON}" -vf "scale=${density.size}:${density.size}:flags=lanczos" "${outputPath}"`, { stdio: 'inherit' });
      } catch (err) {
        console.error(`❌ Failed to generate ${file} for ${density.name}:`, err.message);
      }
    });
  });

  console.log('✅ Icon generation complete!');
}

generateIcons();
