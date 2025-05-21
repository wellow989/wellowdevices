import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current file path (ES modules don't have __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const APP_NAME = 'Wellow';
const ANDROID_STUDIO_PATH = 'C:\\Program Files\\Android\\Android Studio\\bin\\studio64.exe'; // Default path, update if needed

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  red: '\x1b[31m'
};

// Helper function to execute commands
function runCommand(command, errorMessage) {
  try {
    console.log(`${colors.dim}> ${command}${colors.reset}`);
    execSync(command, { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.error(`${colors.red}${errorMessage || 'Command failed'}${colors.reset}`);
    console.error(`${colors.dim}${error}${colors.reset}`);
    return false;
  }
}

// Main build function
async function buildForAndroid() {
  console.log(`\n${colors.bright}${colors.cyan}===== Building ${APP_NAME} for Android =====${colors.reset}\n`);
  
  // Step 1: Build the web app
  console.log(`\n${colors.yellow}Step 1: Building web app...${colors.reset}`);
  if (!runCommand('npm run build', 'Failed to build the web app')) {
    return false;
  }
  
  // Step 2: Copy web assets to Capacitor
  console.log(`\n${colors.yellow}Step 2: Syncing with Capacitor...${colors.reset}`);
  if (!runCommand('npx cap sync android', 'Failed to sync with Capacitor')) {
    return false;
  }
  
  // Step 3: Update Android files
  console.log(`\n${colors.yellow}Step 3: Updating Android files...${colors.reset}`);
  
  // Step 4: Open in Android Studio
  console.log(`\n${colors.yellow}Step 4: Opening in Android Studio...${colors.reset}`);
  if (fs.existsSync(ANDROID_STUDIO_PATH)) {
    const androidPath = path.resolve('./android');
    runCommand(`"${ANDROID_STUDIO_PATH}" "${androidPath}"`, 'Failed to open Android Studio');
  } else {
    console.log(`${colors.yellow}Android Studio not found at "${ANDROID_STUDIO_PATH}".${colors.reset}`);
    console.log(`${colors.yellow}Please open Android Studio manually and open the project at:${colors.reset}`);
    console.log(`${colors.cyan}${path.resolve('./android')}${colors.reset}\n`);
  }
  
  console.log(`\n${colors.green}${colors.bright}Build process completed!${colors.reset}`);
  console.log(`${colors.blue}Your app is now ready to be loaded in Android Studio.${colors.reset}\n`);
  
  return true;
}

// Run the build
buildForAndroid().then(success => {
  if (!success) {
    console.error(`\n${colors.red}${colors.bright}Build process failed.${colors.reset}\n`);
    process.exit(1);
  }
});
