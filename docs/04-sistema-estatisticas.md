# 📊 Sistema de Estatísticas

O bot possui um sistema de estatísticas completo que rastreia atividades dos membros e oferece recompensas por participação.

## Funcionalidades do Sistema

### 🎯 Rastreamento de Atividades
*   **Mensagens** - Contagem de mensagens enviadas
*   **Comandos** - Uso de comandos de prefixo e slash
*   **Context Menus** - Uso de context menus
*   **Tempo de Voz** - Tempo gasto em canais de voz
*   **Conexões de Voz** - Número de vezes que entrou em canais de voz

### 💰 Sistema de Moedas
*   **Ganho Automático** - Moedas por atividades
*   **Transferências** - Transferir moedas entre usuários
*   **Economia Virtual** - Sistema de economia do servidor

### ⭐ Sistema de XP e Níveis
*   **Ganho de XP** - XP por mensagens, comandos e voz
*   **Progressão de Níveis** - Subida automática de nível
*   **Mensagens de Level Up** - Notificações personalizáveis
*   **Cálculo de XP** - Fórmula configurável para XP necessário

## Como Funciona

### 📈 Ganho de XP

#### Por Mensagens
*   **Cooldown**: 5 segundos (configurável)
*   **XP por Mensagem**: 1-20 XP aleatório
*   **Prevenção de Spam**: Sistema de cooldown inteligente

#### Por Comandos
*   **Comandos de Prefixo**: 1-5 XP
*   **Slash Commands**: 1-5 XP
*   **Context Menus**: 1-5 XP

#### Por Tempo de Voz
*   **Tempo Mínimo**: 5 minutos
*   **XP por Bloco**: 100 XP a cada 5 minutos
*   **Rastreamento Automático**: Entrada e saída de canais

### 🎯 Fórmula de Níveis

```javascript
XP_Necessário = Nível × Nível × 100
```

**Exemplos:**
- Nível 1 → 100 XP
- Nível 2 → 400 XP
- Nível 3 → 900 XP
- Nível 10 → 10.000 XP

### 💰 Sistema de Moedas

#### Ganho Automático
*   **Por Atividade**: Moedas baseadas em roles
*   **Configurável**: Valores personalizáveis
*   **Roles Especiais**: Roles que dão bônus de moedas

#### Transferências
*   **Entre Usuários**: Transferir moedas para outros membros
*   **Limites**: Valores mínimos e máximos
*   **Logs**: Registro de todas as transferências

## Configuração

### ⚙️ Configurações Básicas

No arquivo `config.js`:

```javascript
STATS: {
  ENABLED: true, // Habilita/desabilita sistema de estatísticas
  XP_COOLDOWN: 5, // Cooldown em segundos para ganho de XP
  DEFAULT_LVL_UP_MSG: "{member:tag}, você acabou de avançar para o **Nível {level}**",
},
```

### 🎨 Personalização de Mensagens

#### Variáveis Disponíveis
*   `{member:tag}` - Tag do membro
*   `{member:name}` - Nome do membro
*   `{member:mention}` - Menção do membro
*   `{member:id}` - ID do membro
*   `{level}` - Novo nível
*   `{server}` - Nome do servidor
*   `{count}` - Número de membros

#### Exemplo de Configuração
```javascript
DEFAULT_LVL_UP_MSG: "🎉 {member:mention} subiu para o **Nível {level}**! Parabéns! 🎉"
```

### 📊 Configuração de Canais

#### Canal de Level Up
```bash
!setup
# Selecione "Sistema de Estatísticas"
# Configure o canal para mensagens de level up
```

#### Canal de Logs
```bash
!setlogchannel #canal-de-logs
```

## Comandos de Estatísticas

### 👤 Comandos de Usuário

#### `!stats [usuário]`
Mostra as estatísticas de um usuário ou suas próprias.

**Exemplo:** `!stats`, `!stats @Usuário`

#### `!leaderboard [tipo] [página]`
Mostra a classificação dos membros.

**Tipos disponíveis:**
*   `xp` - Por XP total
*   `level` - Por nível
*   `messages` - Por mensagens
*   `voice` - Por tempo de voz
*   `coins` - Por moedas

**Exemplo:** `!leaderboard xp`, `!leaderboard level 2`

#### `!coins [usuário]`
Mostra o saldo de moedas de um usuário.

**Exemplo:** `!coins`, `!coins @Usuário`

#### `!transfer <usuário> <quantidade>`
Transfere moedas para outro usuário.

**Exemplo:** `!transfer @Usuário 100`

### ⚙️ Comandos de Administração

#### `!addcoins <usuário> <quantidade> [razão]`
Adiciona moedas ao saldo de um usuário.

**Exemplo:** `!addcoins @Usuário 500 "Recompensa por evento"`

#### `!setcoins <usuário> <quantidade> [razão]`
Define o saldo de moedas de um usuário.

**Exemplo:** `!setcoins @Usuário 1000 "Ajuste de saldo"`

#### `!resetcoins <usuário> [razão]`
Zera o saldo de moedas de um usuário.

**Exemplo:** `!resetcoins @Usuário "Punição"`

#### `!resetallcoins [razão]`
Zera o saldo de moedas de todos os usuários.

**Exemplo:** `!resetallcoins "Reinício da economia"`

## Sistema de Recompensas

### 🏆 Recompensas por Nível

#### Configuração de Cargos
```bash
!setup
# Selecione "Sistema de Recompensas"
# Configure cargos automáticos por nível
```

#### Exemplo de Configuração
*   Nível 5 → Cargo "Novato"
*   Nível 10 → Cargo "Ativo"
*   Nível 25 → Cargo "Veterano"
*   Nível 50 → Cargo "Lenda"

### 💎 Recompensas por Moedas

#### Sistema de Economia
*   **Compras** - Usar moedas para comprar itens
*   **Recompensas** - Moedas por participação em eventos
*   **Transferências** - Sistema de doações entre membros

## Monitoramento e Logs

### 📝 Logs de Estatísticas

#### Tipos de Logs
*   **Level Up** - Quando um membro sobe de nível
*   **Transferências** - Transferências de moedas
*   **Recompensas** - Cargos automáticos concedidos
*   **Atividades** - Resumo de atividades diárias

#### Configuração de Logs
```bash
!setlogchannel #canal-de-logs
```

### 📊 Relatórios de Estatísticas

#### Relatórios Automáticos
*   **Diários** - Resumo de atividades do dia
*   **Semanais** - Estatísticas da semana
*   **Mensais** - Relatório mensal completo

#### Relatórios Manuais
```bash
!stats report
!stats summary
```

## Troubleshooting

### ❌ Problemas Comuns

#### XP não está sendo ganho
*   Verifique se `STATS.ENABLED` está `true`
*   Confirme se o cooldown não está muito alto
*   Verifique se o membro não está em cooldown

#### Moedas não estão sendo ganhas
*   Verifique se o sistema de moedas está ativo
*   Confirme se o membro tem os roles necessários
*   Verifique a configuração de roles especiais

#### Level Up não está funcionando
*   Verifique se o canal de level up está configurado
*   Confirme se o bot tem permissão para enviar mensagens
*   Verifique se a mensagem de level up está configurada

### 🔧 Soluções

#### Reiniciar Sistema de Estatísticas
```bash
# Reinicie o bot para aplicar mudanças
npm run dev
```

#### Verificar Configurações
```bash
# Verifique as configurações do servidor
!setup
```

#### Limpar Cache de Estatísticas
```bash
# Limpe o cache do banco de dados
# Reinicie o bot
```

## Personalização Avançada

### 🎨 Temas Personalizados

#### Cores dos Embeds
```javascript
EMBED_COLORS: {
  SUCCESS: "#00A56A", // Verde para sucessos
  ERROR: "#D61A3C",   // Vermelho para erros
  WARNING: "#F7E919", // Amarelo para avisos
  INFO: "#0099FF",    // Azul para informações
},
```

#### Ícones e Emojis
```javascript
// Personalize emojis para diferentes níveis
LEVEL_EMOJIS: {
  1: "🌱",   // Iniciante
  10: "⭐",  // Estrela
  25: "🔥",  // Fogo
  50: "💎",  // Diamante
  100: "👑", // Coroa
},
```

### 📈 Métricas Personalizadas

#### Adicionar Novas Métricas
```javascript
// Exemplo: Sistema de pontos por participação em eventos
EVENT_POINTS: {
  ENABLED: true,
  POINTS_PER_EVENT: 50,
  BONUS_POINTS: 25,
},
```

---

**Sistema de Estatísticas completo para engajar seus membros!** 📊✨
