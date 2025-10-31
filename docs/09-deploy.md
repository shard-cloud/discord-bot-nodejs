Esta seção descreve como colocar seu bot Discord Node.js online em produção, incluindo deploy na ShardCloud e em servidor próprio.

## ☁️ Deploy na ShardCloud (Recomendado)

A ShardCloud é uma plataforma especializada em hospedagem de bots Discord que oferece deploy simplificado e gerenciamento automático.

### 🎯 Vantagens da ShardCloud
- **Deploy Automático** - Upload e configuração em minutos
- **Gerenciamento Simplificado** - Interface web intuitiva
- **Escalabilidade Automática** - Recursos ajustados conforme necessário
- **Monitoramento Integrado** - Logs e métricas em tempo real
- **Backup Automático** - Proteção de dados garantida
- **Suporte 24/7** - Suporte técnico especializado

### 📋 Pré-requisitos
- Bot Discord criado no [Portal do Desenvolvedor](https://discord.com/developers/applications)
- Conta na [ShardCloud](https://shardcloud.app)
- Banco de dados MongoDB (MongoDB Atlas recomendado)

### 🚀 Passos para Deploy

#### 1. Preparar o Projeto
```bash
# Clone o repositório
git clone <url_do_repositorio>
cd discord-bot-nodejs

# Instale as dependências
npm install
```

#### 2. Configurar Variáveis de Ambiente
Crie um arquivo `.env` com as variáveis necessárias:

```env
BOT_TOKEN=seu_token_do_bot
CLIENT_ID=seu_client_id
DATABASE=mongodb+srv://usuario:senha@cluster.mongodb.net/discord-bot
ERROR_LOGS=webhook_url_para_logs_de_erro
```

#### 3. Criar Arquivo de Configuração
Crie um arquivo `.shardcloud` na raiz do projeto:

```ini
DISPLAY_NAME=Discord Bot Node.js
MAIN=bot.js
MEMORY=512
VERSION=recommended
DESCRIPTION=Bot Discord completo com sistema modular, economia, estatísticas, moderação e muito mais
```

#### 4. Fazer Upload na ShardCloud
1. Acesse o painel da ShardCloud
2. Clique em "Novo Projeto"
3. Faça upload do arquivo `.zip` do projeto
4. Configure as variáveis de ambiente
5. Clique em "Deploy"

#### 5. Configurar Recursos
```ini
# Para servidores pequenos (até 1000 membros)
MEMORY=256
CPU=0.5

# Para servidores médios (1000-5000 membros)
MEMORY=512
CPU=1.0

# Para servidores grandes (5000+ membros)
MEMORY=1024
CPU=2.0
```

### 🔧 Configuração Avançada na ShardCloud

#### Variáveis de Ambiente
```env
# Variáveis obrigatórias
BOT_TOKEN=seu_token_do_bot
CLIENT_ID=seu_client_id
DATABASE=mongodb+srv://usuario:senha@cluster.mongodb.net/discord-bot

# Variáveis opcionais
MAIN_SERVER=id_do_servidor_principal
SUPPORT_SERVER=id_do_servidor_de_suporte
ERROR_LOGS=webhook_url_para_logs_de_erro
```

#### Configuração de Recursos
```ini
# Configuração para diferentes tamanhos de servidor
DISPLAY_NAME=Discord Bot Node.js
MAIN=bot.js
MEMORY=512
VERSION=recommended
DESCRIPTION=Bot Discord completo com sistema modular

# Configurações adicionais
NODE_ENV=production
LOG_LEVEL=info
```

### 📊 Monitoramento na ShardCloud

#### Métricas Disponíveis
- **CPU Usage** - Uso de CPU em tempo real
- **Memory Usage** - Uso de memória
- **Network** - Tráfego de rede
- **Uptime** - Tempo de funcionamento
- **Logs** - Logs em tempo real

#### Alertas Automáticos
- **Alto uso de CPU** - Notificação quando CPU > 80%
- **Alto uso de memória** - Notificação quando RAM > 90%
- **Bot offline** - Notificação quando bot desconecta
- **Erros críticos** - Notificação de erros importantes

## 🖥️ Deploy em Servidor Próprio (Avançado)

Para usuários que preferem ter controle total sobre a infraestrutura.

### 🎯 Pré-requisitos
- Servidor VPS ou dedicado
- Node.js 16.11.0 ou superior
- MongoDB (local ou MongoDB Atlas)
- PM2 para gerenciamento de processos
- Nginx para proxy reverso (opcional)

### 🚀 Passos para Deploy

#### 1. Preparar o Servidor
```bash
# Atualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Instalar PM2
sudo npm install -g pm2

# Instalar MongoDB (opcional)
sudo apt install mongodb
```

#### 2. Configurar o Projeto
```bash
# Clonar repositório
git clone <url_do_repositorio>
cd discord-bot-nodejs

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env
nano .env
```

#### 3. Configurar PM2
Crie um arquivo `ecosystem.config.js`:

```javascript
module.exports = {
  apps: [{
    name: 'discord-bot',
    script: 'bot.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production'
    }
  }]
};
```

#### 4. Iniciar o Bot
```bash
# Iniciar com PM2
pm2 start ecosystem.config.js

# Salvar configuração
pm2 save

# Configurar para iniciar automaticamente
pm2 startup
```

#### 5. Configurar Nginx (Opcional)
```nginx
server {
    listen 80;
    server_name seu-dominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 🔧 Configuração Avançada

#### Configuração de Logs
```bash
# Configurar logs do PM2
pm2 logs discord-bot

# Configurar rotação de logs
pm2 install pm2-logrotate
```

#### Configuração de Backup
```bash
# Script de backup automático
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
mongodump --out /backup/mongodb_$DATE
tar -czf /backup/bot_$DATE.tar.gz /path/to/bot
```

#### Configuração de Monitoramento
```bash
# Instalar ferramentas de monitoramento
sudo apt install htop iotop nethogs

# Configurar alertas
# Adicionar ao crontab
*/5 * * * * /path/to/check_bot.sh
```

## 🐳 Deploy com Docker

### 📋 Pré-requisitos
- Docker instalado
- Docker Compose instalado
- Arquivo `docker-compose.yml`

### 🚀 Configuração Docker

#### Dockerfile
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["node", "bot.js"]
```

#### docker-compose.yml
```yaml
version: '3.8'

services:
  bot:
    build: .
    environment:
      - BOT_TOKEN=${BOT_TOKEN}
      - CLIENT_ID=${CLIENT_ID}
      - DATABASE=${DATABASE}
    restart: unless-stopped
    depends_on:
      - mongodb

  mongodb:
    image: mongo:latest
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=password
    volumes:
      - mongodb_data:/data/db
    ports:
      - "27017:27017"

volumes:
  mongodb_data:
```

#### Deploy com Docker
```bash
# Construir e iniciar
docker-compose up -d

# Ver logs
docker-compose logs -f bot

# Parar
docker-compose down
```

## 🔧 Configuração de Produção

### ⚙️ Configurações Essenciais

#### Variáveis de Ambiente
```env
# Produção
NODE_ENV=production
LOG_LEVEL=info

# Bot
BOT_TOKEN=seu_token_do_bot
CLIENT_ID=seu_client_id

# Banco de dados
DATABASE=mongodb+srv://usuario:senha@cluster.mongodb.net/discord-bot

# Logs
ERROR_LOGS=webhook_url_para_logs_de_erro

# Servidores
MAIN_SERVER=id_do_servidor_principal
SUPPORT_SERVER=id_do_servidor_de_suporte
```

#### Configuração do Bot
```javascript
// config.js para produção
module.exports = {
  OWNER_IDS: ["seu_id"],
  SUPPORT_SERVER: "https://discord.gg/seu-servidor",
  MAIN_SERVER: "https://discord.gg/seu-servidor-principal",

  PREFIX_COMMANDS: {
    ENABLED: true,
    DEFAULT_PREFIX: "!",
  },
  INTERACTIONS: {
    SLASH: true,
    CONTEXT: true,
    GLOBAL: true,
  },
  // ... outras configurações
};
```

### 📊 Monitoramento e Logs

#### Configuração de Logs
```javascript
// Sistema de logs para produção
const pino = require('pino');

const logger = pino({
  level: 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'yyyy-mm-dd HH:mm:ss',
      ignore: 'pid,hostname'
    }
  }
});
```

#### Monitoramento de Saúde
```javascript
// Endpoint de saúde
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage()
  });
});
```

## 🚨 Troubleshooting

### ❌ Problemas Comuns

#### Bot não conecta
*   Verifique se o token está correto
*   Confirme se o bot tem as permissões necessárias
*   Verifique se o servidor está acessível

#### Erros de memória
*   Aumente a memória alocada
*   Verifique se há vazamentos de memória
*   Configure restart automático

#### Problemas de banco de dados
*   Verifique a string de conexão
*   Confirme se o banco está acessível
*   Verifique se as credenciais estão corretas

### 🔧 Soluções

#### Verificar Status
```bash
# PM2
pm2 status
pm2 logs discord-bot

# Docker
docker-compose ps
docker-compose logs bot

# ShardCloud
# Verificar no painel da ShardCloud
```

#### Reiniciar Bot
```bash
# PM2
pm2 restart discord-bot

# Docker
docker-compose restart bot

# ShardCloud
# Reiniciar via painel
```

#### Verificar Logs
```bash
# Logs do sistema
tail -f logs/combined-*.log

# Logs do PM2
pm2 logs discord-bot

# Logs do Docker
docker-compose logs -f bot
```

## 📈 Otimização de Performance

### 🚀 Otimizações Gerais

#### Configuração de Cache
```javascript
// Configuração de cache
CACHE_SIZE: {
  GUILDS: 100,
  USERS: 10000,
  MEMBERS: 10000,
},
```

#### Configuração de Rate Limits
```javascript
// Rate limits para APIs
RATE_LIMITS: {
  COMMANDS: 5,        // 5 comandos por minuto
  MESSAGES: 100,      // 100 mensagens por minuto
  INTERACTIONS: 50,   // 50 interações por minuto
},
```

#### Configuração de Cooldowns
```javascript
// Cooldowns para comandos
COOLDOWNS: {
  DAILY: 24 * 60 * 60 * 1000,    // 24 horas
  SHOP: 30 * 1000,               // 30 segundos
  STATS: 5 * 1000,               // 5 segundos
},
```

### 📊 Monitoramento de Performance

#### Métricas Importantes
- **CPU Usage** - Uso de CPU
- **Memory Usage** - Uso de memória
- **Network I/O** - Tráfego de rede
- **Database Queries** - Consultas ao banco
- **Response Time** - Tempo de resposta

#### Alertas de Performance
- **Alto uso de CPU** - CPU > 80%
- **Alto uso de memória** - RAM > 90%
- **Muitas consultas** - DB queries > 1000/min
- **Tempo de resposta alto** - Response time > 5s

---

**Deploy completo e otimizado para seu bot Discord Node.js!** 🚀✨
