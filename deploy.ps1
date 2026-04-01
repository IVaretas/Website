$ServerIP = "192.168.1.253"
$SshUser = "var3tas"
$WebDir = "/var/www/html"

Write-Host "-> A iniciar o processo de deploy para ${ServerIP}..." -ForegroundColor Cyan

Write-Host "-> A compilar a aplicacao (npm run build)..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "[X] O build falhou! Deploy abortado." -ForegroundColor Red
    exit 1
}

Write-Host "[V] Build concluido com sucesso!" -ForegroundColor Green
Write-Host "-> A transferir ficheiros para ${SshUser}@${ServerIP}:${WebDir}..." -ForegroundColor Yellow

# Entrar na pasta dist para copiar apenas o conteudo
Set-Location -Path "dist"

# Usar SCP (nativo no Windows 10/11) para transferir os ficheiros
scp -r * ${SshUser}@${ServerIP}:${WebDir}

# Voltar a pasta original
Set-Location -Path ".."

if ($LASTEXITCODE -ne 0) {
    Write-Host "[X] Falha na transferencia de ficheiros." -ForegroundColor Red
    exit 1
}

Write-Host "[V] Deploy concluido com sucesso! O teu website esta online." -ForegroundColor Green
