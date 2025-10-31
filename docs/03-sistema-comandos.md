O bot possui um sistema de comandos completo e modular, suportando tanto comandos de prefixo quanto slash commands, além de context menus.

## Tipos de Comandos

### 📝 Comandos de Prefixo
Comandos tradicionais que usam um prefixo (padrão: `!`)

**Exemplo:**
```bash
!ping
!help
!setprefix ?
```

### ⚡ Slash Commands
Comandos modernos integrados ao Discord

**Exemplo:**
```bash
/ping
/help
/setprefix newprefix:?
```

### 🎯 Context Menus
Comandos de contexto para usuários e mensagens

**Exemplo:**
- Clique com botão direito em um usuário → "Avatar"
- Clique com botão direito em uma mensagem → "Traduzir"

## Categorias de Comandos

### ⚙️ Admin
Comandos para administradores do servidor

*   **`!setprefix <novo_prefixo>`** - Define um novo prefixo para o servidor
*   **`!modlog <#canal>`** - Configura o canal de logs de moderação
*   **`!setlogchannel <#canal>`** - Configura o canal de logs gerais

### 🪧 Informações
Comandos informativos

*   **`!ping`** - Mostra a latência do bot
*   **`!help [comando]`** - Menu de ajuda ou ajuda específica de um comando

### 🛠 Utilidade
Comandos de utilidade geral

*   **`!help`** - Menu de ajuda interativo
*   **`!avatar`** - Mostra o avatar de um usuário (context menu)

### 🤴 Owner
Comandos exclusivos para os proprietários do bot

*   **`!eval <código>`** - Executa código JavaScript
*   **`!listservers [filtro]`** - Lista todos os servidores do bot

## Sistema de Permissões

### 🔐 Níveis de Permissão

1. **Usuário** - Qualquer membro do servidor
2. **Moderador** - Membros com permissões de moderação
3. **Administrador** - Membros com permissões de administrador
4. **Proprietário** - Proprietários do bot (definidos em `OWNER_IDS`)

### 🛡️ Verificações de Permissão

O bot verifica automaticamente:

*   **Permissões do Usuário** - Se o usuário tem permissão para usar o comando
*   **Permissões do Bot** - Se o bot tem permissão para executar a ação
*   **Cooldowns** - Prevenção de spam de comandos
*   **Validações** - Validação de argumentos e contexto

## Sistema de Cooldown

### ⏱️ Tipos de Cooldown

*   **Por Comando** - Cada comando pode ter seu próprio cooldown
*   **Por Usuário** - Cooldown individual por usuário
*   **Global** - Cooldown global para todos os usuários

### 🔄 Configuração de Cooldown

```javascript
module.exports = {
  name: "comando",
  cooldown: 5, // 5 segundos de cooldown
  // ... outras configurações
};
```

## Sistema de Validação

### ✅ Validações Automáticas

*   **Número de Argumentos** - Verifica se o número de argumentos está correto
*   **Tipos de Argumentos** - Valida tipos de dados (string, number, etc.)
*   **Permissões** - Verifica permissões do usuário e bot
*   **Contexto** - Valida se o comando pode ser executado no contexto atual

### 🎯 Validações Personalizadas

```javascript
module.exports = {
  name: "comando",
  validations: [
    {
      callback: (message) => message.guild !== null,
      message: "Este comando só pode ser usado em servidores!"
    }
  ],
  // ... outras configurações
};
```

## Sistema de Help

### 📖 Menu de Ajuda Interativo

O comando `!help` oferece:

*   **Menu de Categorias** - Seletor de categorias de comandos
*   **Paginação** - Navegação entre páginas de comandos
*   **Informações Detalhadas** - Descrição e uso de cada comando
*   **Exemplos** - Exemplos de uso dos comandos

### 🔍 Busca de Comandos

*   **`!help`** - Menu principal de ajuda
*   **`!help <comando>`** - Ajuda específica de um comando
*   **`!help <categoria>`** - Comandos de uma categoria específica

## Comandos Disponíveis

### ⚙️ Comandos de Administração

#### `!setprefix <novo_prefixo>`
Define um novo prefixo para comandos de mensagem no servidor.

**Permissões:** `Manage Guild`
**Exemplo:** `!setprefix ?`

#### `!modlog <#canal>`
Configura o canal para logs de moderação.

**Permissões:** `Manage Guild`
**Exemplo:** `!modlog #logs-moderacao`

#### `!setlogchannel <#canal>`
Configura o canal para logs gerais do bot.

**Permissões:** `Manage Guild`
**Exemplo:** `!setlogchannel #logs-bot`

### 🪧 Comandos de Informação

#### `!ping`
Mostra a latência atual do bot para os servidores Discord.

**Permissões:** Nenhuma
**Exemplo:** `!ping`

### 🛠 Comandos de Utilidade

#### `!help [comando]`
Menu de ajuda interativo ou ajuda específica de um comando.

**Permissões:** Nenhuma
**Exemplo:** `!help`, `!help ping`

### 🤴 Comandos de Proprietário

#### `!eval <código>`
Executa código JavaScript diretamente no bot. **Extremamente perigoso se usado incorretamente.**

**Permissões:** Owner apenas
**Exemplo:** `!eval client.guilds.cache.size`

#### `!listservers [filtro]`
Lista todos os servidores onde o bot está presente.

**Permissões:** Owner apenas
**Exemplo:** `!listservers`, `!listservers teste`

## Context Menus

### 👤 Context Menu de Usuário

#### Avatar
Mostra o avatar de um usuário em diferentes tamanhos.

**Como usar:** Clique com botão direito em um usuário → "Avatar"

### 💬 Context Menu de Mensagem

*   **Traduzir** - Traduz mensagens usando reações de bandeiras
*   **Informações** - Mostra informações detalhadas da mensagem

## Configuração de Comandos

### 🔧 Habilitar/Desabilitar Comandos

No arquivo `config.js`:

```javascript
module.exports = {
  PREFIX_COMMANDS: {
    ENABLED: true, // Habilita comandos de prefixo
  },
  INTERACTIONS: {
    SLASH: false, // Habilita slash commands
    CONTEXT: false, // Habilita context menus
    GLOBAL: false, // Registra comandos globalmente
  },
};
```

### 📝 Adicionar Novos Comandos

1. Crie um arquivo na pasta `src/commands/[categoria]/`
2. Use a estrutura base:

```javascript
/**
 * @type {import("@structures/Command")}
 */
module.exports = {
  name: "nome_do_comando",
  description: "Descrição do comando",
  category: "CATEGORIA",
  userPermissions: ["ManageGuild"], // Permissões necessárias
  command: {
    enabled: true,
    usage: "<argumento>",
    minArgsCount: 1,
  },
  slashCommand: {
    enabled: true,
    options: [
      {
        name: "argumento",
        description: "Descrição do argumento",
        type: ApplicationCommandOptionType.String,
        required: true,
      },
    ],
  },
  async messageRun(message, args, data) {
    // Lógica do comando de prefixo
  },
  async interactionRun(interaction, data) {
    // Lógica do slash command
  },
};
```

## Troubleshooting

### ❌ Problemas Comuns

#### Comando não responde
*   Verifique se o prefixo está correto
*   Confirme se o comando está habilitado
*   Verifique as permissões do usuário e bot

#### Slash Commands não aparecem
*   Verifique se `INTERACTIONS.SLASH` está `true`
*   Confirme se o bot tem permissão `Use Slash Commands`
*   Aguarde até 1 hora para propagação global

#### Context Menus não funcionam
*   Verifique se `INTERACTIONS.CONTEXT` está `true`
*   Confirme se o bot tem permissão `Use Slash Commands`
*   Reinicie o bot após mudanças

### 🔧 Soluções

#### Reiniciar Comandos
```bash
# Reinicie o bot para aplicar mudanças
npm run dev
```

#### Verificar Logs
```bash
# Verifique os logs para erros
tail -f logs/combined-*.log
```

#### Testar Comandos
```bash
# Teste comandos básicos
!ping
!help
```

---

**Sistema de Comandos completo e flexível para seu servidor Discord!** 🎮✨
