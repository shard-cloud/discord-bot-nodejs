O bot possui um sistema de moderação completo e robusto, oferecendo ferramentas avançadas para manter a ordem e segurança do servidor.

## Funcionalidades do Sistema

### 🛡️ Ferramentas de Moderação
*   **Timeout** - Silenciar membros temporariamente
*   **Kick** - Expulsar membros do servidor
*   **Ban** - Banir membros permanentemente
*   **Softban** - Banir e desbanir automaticamente
*   **Warn** - Sistema de avisos com limite
*   **Unban** - Desbanir membros

### 🎤 Moderação de Voz
*   **Voice Mute** - Silenciar membros em canais de voz
*   **Voice Unmute** - Remover silêncio de voz
*   **Deafen** - Ensurdecer membros
*   **Undeafen** - Remover ensurdecimento
*   **Disconnect** - Desconectar membros de canais de voz
*   **Move** - Mover membros entre canais de voz

### 📝 Sistema de Logs
*   **Logs de Moderação** - Registro detalhado de todas as ações
*   **Logs de Auditoria** - Histórico de mudanças no servidor
*   **Logs de Atividades** - Monitoramento de atividades suspeitas

## Como Funciona

### 🔐 Sistema de Permissões

#### Hierarquia de Moderação
1. **Proprietário do Servidor** - Máxima autoridade
2. **Administradores** - Permissões administrativas
3. **Moderadores** - Permissões de moderação
4. **Membros** - Sem permissões de moderação

#### Verificações Automáticas
*   **Hierarquia de Cargos** - Não pode moderar membros com cargo igual ou superior
*   **Permissões do Bot** - Verifica se o bot tem permissões necessárias
*   **Permissões do Usuário** - Verifica se o usuário pode executar a ação

### ⚠️ Sistema de Warns

#### Configuração de Warns
```javascript
max_warn: {
  action: "KICK", // Ação após atingir limite (TIMEOUT, KICK, BAN)
  limit: 5,       // Número máximo de warns
},
```

#### Ações Automáticas
*   **Após 3 warns** - Timeout de 1 hora
*   **Após 5 warns** - Kick do servidor
*   **Após 7 warns** - Ban permanente

### 🚫 Sistema Anti-Spam

#### Proteções Automáticas
*   **Anti-Spam de Mensagens** - Detecção de mensagens repetitivas
*   **Anti-Mass Mention** - Prevenção de menções em massa
*   **Anti-Ghost Ping** - Detecção de menções deletadas
*   **Anti-Links** - Bloqueio de links suspeitos
*   **Anti-Invites** - Bloqueio de convites de outros servidores

## Comandos de Moderação

### ⏰ Comandos de Timeout

#### `!timeout <usuário> <tempo> [razão]`
Aplica timeout (silêncio) a um membro.

**Tempos aceitos:**
*   `1m`, `5m`, `10m`, `30m` - Minutos
*   `1h`, `2h`, `6h`, `12h` - Horas
*   `1d`, `2d`, `7d` - Dias

**Exemplo:** `!timeout @Usuário 1h Spam`

#### `!untimeout <usuário> [razão]`
Remove timeout de um membro.

**Exemplo:** `!untimeout @Usuário Punição removida`

### 👢 Comandos de Kick/Ban

#### `!kick <usuário> [razão]`
Expulsa um membro do servidor.

**Exemplo:** `!kick @Usuário Comportamento inadequado`

#### `!ban <usuário> [razão]`
Banir um membro permanentemente.

**Exemplo:** `!ban @Usuário Violação das regras`

#### `!softban <usuário> [razão]`
Banir e desbanir automaticamente (limpeza de mensagens).

**Exemplo:** `!softban @Usuário Limpeza de spam`

#### `!unban <usuário> [razão]`
Desbanir um membro.

**Exemplo:** `!unban Usuário#1234 Segunda chance`

### ⚠️ Comandos de Warn

#### `!warn <usuário> <razão>`
Aplicar um aviso a um membro.

**Exemplo:** `!warn @Usuário Linguagem inadequada`

#### `!warns <usuário>`
Mostrar avisos de um membro.

**Exemplo:** `!warns @Usuário`

#### `!clearwarns <usuário> [razão]`
Limpar todos os avisos de um membro.

**Exemplo:** `!clearwarns @Usuário Avisos removidos`

### 🎤 Comandos de Voz

#### `!vmute <usuário> [razão]`
Silenciar membro em canais de voz.

**Exemplo:** `!vmute @Usuário Ruído excessivo`

#### `!vunmute <usuário> [razão]`
Remover silêncio de voz.

**Exemplo:** `!vunmute @Usuário Silêncio removido`

#### `!deafen <usuário> [razão]`
Ensurdecer membro em canais de voz.

**Exemplo:** `!deafen @Usuário Não escutava avisos`

#### `!undeafen <usuário> [razão]`
Remover ensurdecimento.

**Exemplo:** `!undeafen @Usuário Ensurdecimento removido`

#### `!disconnect <usuário> [razão]`
Desconectar membro de canal de voz.

**Exemplo:** `!disconnect @Usuário Comportamento inadequado`

#### `!move <usuário> <canal> [razão]`
Mover membro para outro canal de voz.

**Exemplo:** `!move @Usuário #geral Mover para canal apropriado`

## Configuração

### ⚙️ Configurações Básicas

No arquivo `config.js`:

```javascript
MODERATION: {
  ENABLED: true, // Habilita/desabilita sistema de moderação
  EMBED_COLORS: {
    TIMEOUT: "#102027",
    UNTIMEOUT: "#4B636E",
    KICK: "#FF7961",
    BAN: "#D32F2F",
    UNBAN: "#00C853",
    // ... outras cores
  },
},
```

### 📝 Configuração de Logs

#### Canal de Logs de Moderação
```bash
!modlog #canal-de-moderacao
```

#### Canal de Logs Gerais
```bash
!setlogchannel #canal-de-logs
```

### ⚠️ Configuração de Warns

#### Limite de Warns
```bash
!setup
# Selecione "Sistema de Moderação"
# Configure o limite de warns e ações
```

#### Ações Automáticas
*   **Após 3 warns** - Timeout automático
*   **Após 5 warns** - Kick automático
*   **Após 7 warns** - Ban automático

## Sistema de Logs

### 📋 Tipos de Logs

#### Logs de Moderação
*   **Timeout** - Aplicação e remoção de timeout
*   **Kick** - Expulsões de membros
*   **Ban** - Banimentos e desbanimentos
*   **Warn** - Aplicação de avisos
*   **Voz** - Ações de moderação de voz

#### Logs de Auditoria
*   **Mudanças de Cargos** - Adição/remoção de cargos
*   **Mudanças de Canais** - Criação/edição/exclusão de canais
*   **Mudanças de Servidor** - Atualizações do servidor

#### Logs de Atividades
*   **Entrada/Saída** - Membros entrando e saindo
*   **Atividades Suspeitas** - Comportamentos anômalos
*   **Violações** - Tentativas de violação de regras

### 🎨 Personalização de Logs

#### Cores dos Embeds
```javascript
EMBED_COLORS: {
  TIMEOUT: "#102027",    // Azul escuro
  UNTIMEOUT: "#4B636E",  // Azul claro
  KICK: "#FF7961",       // Laranja
  BAN: "#D32F2F",        // Vermelho
  UNBAN: "#00C853",      // Verde
  WARN: "#F7E919",       // Amarelo
},
```

#### Formato das Mensagens
```javascript
// Exemplo de log personalizado
const logEmbed = new EmbedBuilder()
  .setColor(EMBED_COLORS.BAN)
  .setTitle("🔨 Membro Banido")
  .addFields(
    { name: "Usuário", value: `${user.tag} (${user.id})`, inline: true },
    { name: "Moderador", value: `${moderator.tag}`, inline: true },
    { name: "Razão", value: reason || "Não especificada", inline: false }
  )
  .setTimestamp();
```

## Sistema Anti-Spam

### 🚫 Proteções Automáticas

#### Anti-Spam de Mensagens
```javascript
automod: {
  anti_spam: true,        // Habilita anti-spam
  strikes: 10,           // Número de strikes para ação
  action: "TIMEOUT",     // Ação após atingir limite
  wh_channels: [],       // Canais ignorados
},
```

#### Anti-Mass Mention
```javascript
automod: {
  anti_massmention: 5,   // Máximo de menções por mensagem
},
```

#### Anti-Ghost Ping
```javascript
automod: {
  anti_ghostping: true,  // Detecta menções deletadas
},
```

#### Anti-Links
```javascript
automod: {
  anti_links: true,      // Bloqueia links suspeitos
},
```

#### Anti-Invites
```javascript
automod: {
  anti_invites: true,    // Bloqueia convites de outros servidores
},
```

### ⚙️ Configuração de Anti-Spam

#### Habilitar Anti-Spam
```bash
!setup
# Selecione "Sistema de Automod"
# Configure as proteções desejadas
```

#### Canais Ignorados
```bash
!automod whitelist #canal-ignorado
```

## Troubleshooting

### ❌ Problemas Comuns

#### Comandos de moderação não funcionam
*   Verifique se `MODERATION.ENABLED` está `true`
*   Confirme se o bot tem as permissões necessárias
*   Verifique se o usuário tem permissão para moderar

#### Logs não estão sendo enviados
*   Verifique se o canal de logs está configurado
*   Confirme se o bot tem permissão para enviar mensagens
*   Verifique se o webhook está configurado corretamente

#### Anti-spam muito agressivo
*   Ajuste o número de strikes
*   Configure canais ignorados
*   Ajuste o tempo de cooldown

### 🔧 Soluções

#### Verificar Permissões
```bash
# Verifique se o bot tem todas as permissões
!ping
```

#### Testar Comandos
```bash
# Teste comandos básicos
!timeout @Usuário 1m Teste
!untimeout @Usuário
```

#### Verificar Logs
```bash
# Verifique os logs do bot
tail -f logs/combined-*.log
```

## Personalização Avançada

### 🎨 Temas Personalizados

#### Cores dos Embeds
```javascript
// Personalize cores para diferentes ações
CUSTOM_COLORS: {
  TIMEOUT: "#FFA500",    // Laranja
  KICK: "#FF4500",       // Vermelho laranja
  BAN: "#DC143C",        // Vermelho escuro
  WARN: "#FFD700",       // Dourado
},
```

#### Ícones Personalizados
```javascript
// Personalize ícones para diferentes ações
ACTION_ICONS: {
  TIMEOUT: "⏰",
  KICK: "👢",
  BAN: "🔨",
  WARN: "⚠️",
  VOICE: "🎤",
},
```

### 📊 Métricas de Moderação

#### Estatísticas de Moderação
*   **Ações por Moderador** - Quantas ações cada moderador executou
*   **Tipos de Ações** - Distribuição de tipos de moderação
*   **Tendências** - Padrões de comportamento no servidor

#### Relatórios Automáticos
*   **Relatórios Diários** - Resumo das ações do dia
*   **Relatórios Semanais** - Estatísticas da semana
*   **Relatórios Mensais** - Análise mensal completa

---

**Sistema de Moderação robusto para manter a ordem no seu servidor!** 🔨✨
