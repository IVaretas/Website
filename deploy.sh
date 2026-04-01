#!/bin/bash

# ==========================================
# Script de Deploy Automático (Vite/React -> Nginx)
# ==========================================

# Configurações do Servidor
SERVER_IP="192.168.1.253"
SSH_USER="var3tas"
WEB_DIR="/var/www/html"
BUILD_DIR="dist/"

echo "🚀 A iniciar o processo de deploy para $SERVER_IP..."

# Passo 1: Fazer o build da aplicação React/Vite
echo "📦 A compilar a aplicação (npm run build)..."
npm run build

# Verificar se o build falhou
if [ $? -ne 0 ]; then
  echo "❌ O build falhou! Deploy abortado."
  exit 1
fi

echo "✅ Build concluído com sucesso!"

# Passo 2: Sincronizar os ficheiros com o servidor usando rsync
# -a: archive mode (preserva permissões, links, etc.)
# -v: verbose (mostra o que está a ser copiado)
# -z: comprime os dados durante a transferência
# --delete: apaga ficheiros no destino que já não existem na origem (mantém o diretório limpo)
echo "🔄 A transferir ficheiros para $SSH_USER@$SERVER_IP:$WEB_DIR..."

rsync -avz --delete $BUILD_DIR $SSH_USER@$SERVER_IP:$WEB_DIR

# Verificar se a transferência falhou
if [ $? -ne 0 ]; then
  echo "❌ Falha na transferência de ficheiros."
  echo ""
  echo "💡 DICA DE PERMISSÕES:"
  echo "Certifica-te de que o utilizador '$SSH_USER' tem permissões de escrita no diretório '$WEB_DIR'."
  echo "Podes resolver isso correndo o seguinte comando no teu servidor:"
  echo "  sudo chown -R $SSH_USER:www-data $WEB_DIR"
  echo "  sudo chmod -R 775 $WEB_DIR"
  exit 1
fi

echo "🎉 Deploy concluído com sucesso! O teu website está online."
