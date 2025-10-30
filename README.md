# Discord Bot Node.js

Bot Discord completo desenvolvido em Node.js com sistema modular, economia, estatísticas, moderação e muito mais.

## ✨ Funcionalidades Principais

- **Sistema de Comandos**: Prefix e Slash Commands
- **Sistema de Estatísticas**: XP, níveis, moedas e tempo de voz
- **Sistema de Moderação**: Timeout, kick, ban, warn e logs
- **Sistema de Tradução**: Tradução automática por reações de bandeiras
- **Sistema de Convites**: Rastreamento de convites e recompensas
- **Sistema de Contadores**: Canais de contagem automática
- **Sistema de Logs**: Logs detalhados de atividades
- **Sistema de Presença**: Status personalizável do bot
- **Context Menus**: Comandos de contexto para usuários e mensagens

## 🚀 Início Rápido

### 1. Instale as Dependências
```bash
npm install
```

### 2. Configure as Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto:
```env
BOT_TOKEN=seu_token_do_bot
CLIENT_ID=seu_client_id
DATABASE=mongodb+srv://usuario:senha@cluster.mongodb.net/discord-bot
```

### 3. Configure o Bot
Edite o arquivo `config.js` para personalizar as configurações do bot.

### 4. Inicie o Bot
```bash
npm run dev
```

## ☁️ Deploy na ShardCloud (Recomendado)

Para deploy rápido e gerenciamento simplificado, recomendamos usar a **ShardCloud**:

### 🚀 Deploy em 3 Passos
1. **Crie o arquivo `.shardcloud`** (já incluído no projeto)
2. **Configure as variáveis** no painel da ShardCloud
3. **Faça upload e deploy** - Pronto!

### 📋 Configuração na ShardCloud
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

### 🎯 Vantagens da ShardCloud
- ✅ **Deploy Automático** - Upload e configuração em minutos
- ✅ **Gerenciamento Simplificado** - Interface web intuitiva
- ✅ **Monitoramento Integrado** - Logs e métricas em tempo real
- ✅ **Backup Automático** - Proteção de dados garantida
- ✅ **Escalabilidade** - Recursos ajustados conforme necessário

📖 **[Guia de Deploy Completo](docs/08-deploy.md)** - Instruções detalhadas

## 📚 Documentação Completa

Para a documentação completa, visite: [Documentação](docs/README.md)

## 🛠️ Scripts Disponíveis

- `npm run dev` – Modo de desenvolvimento (com reinício automático)
- `npm start` – Modo de produção
- `npm run format` – Formatar código com Prettier

## 📋 Estrutura do Projeto

```
discord-bot-nodejs/
├── src/
│   ├── commands/          # Comandos do bot
│   ├── contexts/          # Context menus
│   ├── database/          # Schemas e conexão MongoDB
│   ├── events/            # Eventos do Discord
│   ├── handlers/          # Handlers para diferentes funcionalidades
│   ├── helpers/           # Utilitários e extensões
│   └── structures/        # Estruturas base do bot
├── docs/                  # Documentação completa
├── logs/                  # Logs do bot
└── config.js             # Configurações do bot
```

## 🔧 Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Discord.js v14** - Biblioteca para Discord API
- **MongoDB** - Banco de dados
- **Mongoose** - ODM para MongoDB
- **Pino** - Sistema de logs
- **Google Translate API** - Tradução automática

## 📄 Licença

Apache License 2.0

---

**Bot Discord Node.js** - Desenvolvido para ser modular, escalável e fácil de personalizar! 🚀
