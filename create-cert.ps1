# PowerShell script to create a self-signed certificate for HTTPS
$certPath = ".\cert.pem"
$keyPath = ".\key.pem"

Write-Host "Creating self-signed certificate for HTTPS development..."

# Create a self-signed certificate using OpenSSL-like syntax
$cert = New-SelfSignedCertificate -DnsName "localhost", "192.168.0.108" -CertStoreLocation "Cert:\LocalMachine\My"

# Export certificate to PEM format
$certPassword = ConvertTo-SecureString -String "password" -Force -AsPlainText
Export-PfxCertificate -Cert $cert -FilePath "temp.pfx" -Password $certPassword

# Instructions to convert .pfx to .pem format
Write-Host "Certificate created. You need to manually convert it to .pem format using OpenSSL:"
Write-Host "1. Download OpenSSL for Windows if you don't have it"
Write-Host "2. Run these commands:"
Write-Host "   openssl pkcs12 -in temp.pfx -out $certPath -nodes -password pass:password"
Write-Host "   openssl pkcs12 -in temp.pfx -out $keyPath -nodes -nocerts -password pass:password"

Write-Host "Or use http-server with the --ssl flag which will auto-generate certificates"
