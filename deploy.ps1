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

# Obter todos os ficheiros e pastas dentro da pasta dist
$items = Get-ChildItem -Path "dist" | Select-Object -ExpandProperty FullName

# Construir os argumentos para o scp
$scpArgs = @("-r") + $items + "${SshUser}@${ServerIP}:${WebDir}"

# Executar o scp com os argumentos
& scp $scpArgs

if ($LASTEXITCODE -ne 0) {
    Write-Host "[X] Falha na transferencia de ficheiros." -ForegroundColor Red
    exit 1
}

Write-Host "[V] Deploy concluido com sucesso! O teu website esta online." -ForegroundColor Green
