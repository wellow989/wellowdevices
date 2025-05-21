// Script to generate self-signed certificates for local HTTPS development
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create the certificate directory if it doesn't exist
const certDir = path.join(__dirname, '.cert');
if (!fs.existsSync(certDir)) {
  fs.mkdirSync(certDir, { recursive: true });
}

// Define file paths
const keyPath = path.join(certDir, 'key.pem');
const certPath = path.join(certDir, 'cert.pem');

try {
  // Generate key and certificate in one command
  console.log('Generating self-signed certificates...');
  execSync(
    `openssl req -x509 -newkey rsa:2048 -keyout "${keyPath}" -out "${certPath}" -days 365 -nodes -subj "/CN=localhost" -addext "subjectAltName=DNS:localhost,IP:127.0.0.1"`,
    { stdio: 'inherit' }
  );
  
  console.log('\n✅ Certificates generated successfully!');
  console.log(`Key: ${keyPath}`);
  console.log(`Certificate: ${certPath}`);
  console.log('\nRestart your dev server with npm run dev to use HTTPS');
  console.log('Note: You will need to accept the self-signed certificate in your browser');
} catch (error) {
  console.error('\n❌ Error generating certificates:', error.message);
  console.log('\nAlternative method:');
  console.log('1. Create .cert/key.pem and .cert/cert.pem manually using a tool like mkcert');
  console.log('2. Or modify vite.config.ts to remove the HTTPS configuration');
}
