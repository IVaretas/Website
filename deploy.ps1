$ServerIP = "192.168.1.253"
$SshUser = "var3tas"
$WebDir = "/var/www/html"

Write-Host "🚀 A iniciar o processo de deploy para $ServerIP..." -ForegroundColor Cyan

Write-Host "📦 A compilar a aplicação (npm run build)..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ O build falhou! Deploy abortado." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build concluído com sucesso!" -ForegroundColor Green
Write-Host "🔄 A transferir ficheiros para $SshUser@$ServerIP:$WebDir..." -ForegroundColor Yellow

# Entrar na pasta dist para copiar apenas o conteúdo
Set-Location -Path "dist"

# Usar SCP (nativo no Windows 10/11) para transferir os ficheiros
scp -r . $SshUser@${ServerIP}:$WebDir

# Voltar à pasta original
Set-Location -Path ".."

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Falha na transferência de ficheiros." -ForegroundColor Red
    exit 1
}

Write-Host "🎉 Deploy concluído com sucesso! O teu website está online." -ForegroundColor Green
