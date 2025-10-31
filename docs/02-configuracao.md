Para que o bot funcione corretamente, é necessário configurá-lo adequadamente. Esta seção aborda as configurações essenciais.

## Variáveis de Ambiente (`.env`)

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
BOT_TOKEN="SEU_TOKEN_DO_BOT"
CLIENT_ID="ID_DO_SEU_BOT"
DATABASE="SUA_STRING_DE_CONEXAO_MONGODB"
ERROR_LOGS="WEBHOOK_URL_PARA_LOGS_DE_ERRO" # Opcional
```

### 📋 Explicação das Variáveis

*   **`BOT_TOKEN`**: O token do seu bot Discord. Você pode obtê-lo no [Portal do Desenvolvedor Discord](https://discord.com/developers/applications).
*   **`CLIENT_ID`**: O ID do cliente (Application ID) do seu bot. Também disponível no Portal do Desenvolvedor.
*   **`DATABASE`**: A string de conexão para o seu banco de dados MongoDB. O bot utiliza MongoDB para armazenar dados de estatísticas, configurações do servidor e logs.
*   **`ERROR_LOGS`**: (Opcional) URL de webhook para enviar logs de erro para um canal específico.

## Arquivo de Configuração (`config.js`)

O arquivo `config.js` na raiz do projeto contém configurações adicionais que podem ser ajustadas:

```javascript
module.exports = {
  OWNER_IDS: ["SEU_ID_DE_USUARIO"], // IDs dos proprietários do bot
  SUPPORT_SERVER: "", // Link do servidor de suporte
  MAIN_SERVER: "", // Link do servidor principal

  PREFIX_COMMANDS: {
    ENABLED: true,
    DEFAULT_PREFIX: "!", // Prefixo padrão para comandos de mensagem
  },
  INTERACTIONS: {
    SLASH: false, // Habilitar comandos de barra
    CONTEXT: false, // Habilitar comandos de contexto
    GLOBAL: false, // Registrar comandos globalmente
    TEST_GUILD_ID: "", // ID do servidor de teste
  },
  EMBED_COLORS: {
    BOT_EMBED: "#068ADD", // Cor padrão para embeds do bot
    SUCCESS: "#00A56A", // Cor para embeds de sucesso
    ERROR: "#D61A3C", // Cor para embeds de erro
    WARNING: "#F7E919", // Cor para embeds de aviso
  },
  // ... outras configurações
};
```

### 🔧 Configurações Principais

#### Comandos
*   **`PREFIX_COMMANDS.ENABLED`**: Habilita/desabilita comandos de prefixo
*   **`PREFIX_COMMANDS.DEFAULT_PREFIX`**: Prefixo padrão para comandos de mensagem
*   **`INTERACTIONS.SLASH`**: Habilita/desabilita slash commands
*   **`INTERACTIONS.CONTEXT`**: Habilita/desabilita context menus
*   **`INTERACTIONS.GLOBAL`**: Registra comandos globalmente ou apenas no servidor de teste

#### Cores dos Embeds
*   **`EMBED_COLORS.BOT_EMBED`**: Cor padrão para embeds do bot
*   **`EMBED_COLORS.SUCCESS`**: Cor para mensagens de sucesso
*   **`EMBED_COLORS.ERROR`**: Cor para mensagens de erro
*   **`EMBED_COLORS.WARNING`**: Cor para mensagens de aviso

#### Sistema de Estatísticas
```javascript
STATS: {
  ENABLED: false, // Habilita/desabilita sistema de estatísticas
  XP_COOLDOWN: 5, // Cooldown em segundos para ganho de XP
  DEFAULT_LVL_UP_MSG: "{member:tag}, você acabou de avançar para o **Nível {level}**",
},
```

#### Sistema de Moderação
```javascript
MODERATION: {
  ENABLED: false, // Habilita/desabilita sistema de moderação
  EMBED_COLORS: {
    TIMEOUT: "#102027",
    UNTIMEOUT: "#4B636E",
    KICK: "#FF7961",
    BAN: "#D32F2F",
    // ... outras cores
  },
},
```

#### Sistema de Presença
```javascript
PRESENCE: {
  ENABLED: false, // Habilita/desabilita sistema de presença
  STATUS: "online", // Status do bot (online, idle, dnd, invisible)
  TYPE: "WATCHING", // Tipo de atividade (PLAYING, WATCHING, LISTENING, COMPETING)
  MESSAGE: "{members} membros em {servers} servidores", // Mensagem da atividade
},
```

## Configuração do MongoDB

### 🗄️ MongoDB Local
```env
DATABASE=mongodb://localhost:27017/discord-bot
```

### ☁️ MongoDB Atlas
```env
DATABASE=mongodb+srv://usuario:senha@cluster.mongodb.net/discord-bot
```

### 📊 Schemas do Banco de Dados

O bot utiliza os seguintes schemas:

*   **`Guild`**: Configurações do servidor
*   **`Member`**: Dados de membros (warns, strikes, convites)
*   **`MemberStats`**: Estatísticas de membros (XP, níveis, moedas)
*   **`User`**: Dados globais de usuários
*   **`ReactionRoles`**: Configurações de reaction roles
*   **`TranslateLog`**: Logs de traduções

## Configuração de Permissões

### 🔐 Permissões Necessárias do Bot

Para funcionar completamente, o bot precisa das seguintes permissões:

*   **Permissões Básicas**:
    *   `Send Messages` - Enviar mensagens
    *   `Embed Links` - Enviar embeds
    *   `Read Message History` - Ler histórico de mensagens
    *   `Use Slash Commands` - Usar slash commands

*   **Permissões de Moderação**:
    *   `Manage Messages` - Gerenciar mensagens
    *   `Kick Members` - Expulsar membros
    *   `Ban Members` - Banir membros
    *   `Moderate Members` - Moderar membros (timeout)
    *   `Manage Roles` - Gerenciar cargos

*   **Permissões Avançadas**:
    *   `Manage Channels` - Gerenciar canais
    *   `Manage Guild` - Gerenciar servidor
    *   `View Audit Log` - Ver logs de auditoria

### 🎯 URL de Convite

Use esta URL para convidar o bot com todas as permissões necessárias:

```
https://discord.com/api/oauth2/authorize?client_id=SEU_CLIENT_ID&permissions=8&scope=bot%20applications.commands
```

## Configuração Inicial do Servidor

### 1. Configure o Prefixo
```bash
!setprefix <novo_prefixo>
```

### 2. Configure o Canal de Logs
```bash
!setlogchannel #canal-de-logs
```

### 3. Configure o Sistema de Estatísticas
```bash
!setup
```

### 4. Configure o Sistema de Moderação
```bash
!modlog #canal-de-moderacao
```

## ☁️ Deploy em Produção

Após testar localmente, você pode fazer deploy em produção:

### 🚀 Opção 1: ShardCloud (Recomendado)
- **Deploy Automático** - Upload e configuração em minutos
- **Gerenciamento Simplificado** - Interface web intuitiva
- **Monitoramento Integrado** - Logs e métricas em tempo real
- **Backup Automático** - Proteção de dados garantida

📖 **[Guia de Deploy na ShardCloud](09-deploy.md#deploy-na-shardcloud-recomendado)** - Instruções detalhadas

### 🖥️ Opção 2: Servidor Próprio
- **Controle Total** - Controle completo sobre a infraestrutura
- **Personalização** - Configurações avançadas
- **Custo** - Pode ser mais econômico para uso intensivo

📖 **[Guia de Deploy em Servidor Próprio](09-deploy.md#deploy-em-servidor-proprio-avancado)** - Instruções detalhadas

## 🚀 Próximos Passos

Após a configuração inicial:

1. **[Sistema de Comandos](03-sistema-comandos.md)** - Aprenda a usar os comandos
2. **[Sistema de Estatísticas](04-sistema-estatisticas.md)** - Configure o sistema de XP
3. **[Sistema de Moderação](05-sistema-moderacao.md)** - Configure as ferramentas de moderação
4. **[Sistema de Logs](08-sistema-logs.md)** - Configure o sistema de logs

---

**Configuração concluída! Seu bot está pronto para uso.** 🎉
