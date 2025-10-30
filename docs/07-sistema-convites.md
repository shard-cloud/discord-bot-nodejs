# 📈 Sistema de Convites

O bot possui um sistema inteligente de rastreamento de convites que permite identificar quem convidou quem, oferecer recompensas por convites e manter estatísticas detalhadas.

## Funcionalidades do Sistema

### 🔍 Rastreamento de Convites
*   **Identificação de Convites** - Detecta quem convidou cada membro
*   **Rastreamento de Vanity** - Suporte a URLs personalizadas
*   **Detecção de Convites Falsos** - Identifica convites inválidos
*   **Cache Inteligente** - Sistema de cache para performance

### 🏆 Sistema de Recompensas
*   **Cargos Automáticos** - Cargos baseados no número de convites
*   **Recompensas Configuráveis** - Recompensas personalizáveis
*   **Sistema de Níveis** - Diferentes níveis de recompensas
*   **Recompensas Temporárias** - Recompensas com tempo limitado

### 📊 Estatísticas Detalhadas
*   **Leaderboard de Convites** - Classificação por convites
*   **Estatísticas por Usuário** - Métricas individuais
*   **Estatísticas Globais** - Métricas do servidor
*   **Relatórios de Atividade** - Análise de tendências

## Como Funciona

### 🎯 Processo de Rastreamento

1. **Cache de Convites** - Bot armazena convites existentes
2. **Membro Entra** - Novo membro entra no servidor
3. **Comparação** - Compara convites antigos com novos
4. **Identificação** - Identifica qual convite foi usado
5. **Atualização** - Atualiza estatísticas do convidador
6. **Recompensas** - Aplica recompensas automáticas

### 📈 Tipos de Convites

#### Convites Normais
*   **Convites de Usuários** - Convites criados por membros
*   **Convites Temporários** - Convites com tempo limitado
*   **Convites com Limite** - Convites com número limitado de usos

#### Convites Especiais
*   **Vanity URL** - URL personalizada do servidor
*   **Convites de Bots** - Convites criados por bots
*   **Convites de Administradores** - Convites com permissões especiais

### 🏆 Sistema de Recompensas

#### Configuração de Recompensas
```javascript
invite: {
  tracking: true,
  ranks: [
    {
      invites: 5,
      _id: "role_id_5_invites"
    },
    {
      invites: 10,
      _id: "role_id_10_invites"
    },
    {
      invites: 25,
      _id: "role_id_25_invites"
    }
  ],
},
```

#### Tipos de Recompensas
*   **Cargos Automáticos** - Cargos baseados em convites
*   **Moedas Virtuais** - Moedas por convites
*   **XP Bonus** - XP adicional por convites
*   **Acesso Especial** - Acesso a canais exclusivos

## Configuração

### ⚙️ Configurações Básicas

No arquivo `config.js`:

```javascript
// Sistema de convites é habilitado automaticamente
// Configurações são feitas via comandos
```

### 🏆 Configuração de Recompensas

#### Habilitar Rastreamento
```bash
!setup
# Selecione "Sistema de Convites"
# Configure recompensas por convites
```

#### Configurar Cargos
```bash
!inviterewards add <cargo> <convites>
```

#### Exemplo de Configuração
```bash
!inviterewards add @Novato 5
!inviterewards add @Ativo 10
!inviterewards add @Veterano 25
!inviterewards add @Lenda 50
```

### 📊 Configuração de Estatísticas

#### Canal de Logs
```bash
!setlogchannel #canal-de-convites
```

#### Configuração de Leaderboard
```bash
!setup
# Selecione "Sistema de Estatísticas"
# Configure o canal de leaderboard
```

## Comandos de Convites

### 👤 Comandos de Usuário

#### `!invites [usuário]`
Mostra o número de convites de um usuário.

**Exemplo:** `!invites`, `!invites @Usuário`

#### `!inviteleaderboard [página]`
Mostra a classificação de convites.

**Exemplo:** `!inviteleaderboard`, `!inviteleaderboard 2`

#### `!invitestats`
Mostra estatísticas detalhadas de convites.

**Exemplo:** `!invitestats`

### ⚙️ Comandos de Administração

#### `!inviterewards add <cargo> <convites>`
Adiciona uma recompensa por convites.

**Exemplo:** `!inviterewards add @Novato 5`

#### `!inviterewards remove <cargo>`
Remove uma recompensa por convites.

**Exemplo:** `!inviterewards remove @Novato`

#### `!inviterewards list`
Lista todas as recompensas configuradas.

**Exemplo:** `!inviterewards list`

#### `!invitereset <usuário>`
Reseta os convites de um usuário.

**Exemplo:** `!invitereset @Usuário`

#### `!inviteresetall`
Reseta todos os convites do servidor.

**Exemplo:** `!inviteresetall`

## Sistema de Logs

### 📋 Tipos de Logs

#### Logs de Convites
*   **Novo Membro** - Quando um membro entra via convite
*   **Convite Usado** - Qual convite foi usado
*   **Recompensas Aplicadas** - Cargos concedidos automaticamente
*   **Estatísticas Atualizadas** - Atualizações de contadores

#### Logs de Atividades
*   **Entrada de Membros** - Membros entrando no servidor
*   **Saída de Membros** - Membros saindo do servidor
*   **Convites Criados** - Novos convites criados
*   **Convites Deletados** - Convites removidos

### 🎨 Formato dos Logs

#### Embed de Novo Membro
```javascript
const embed = new EmbedBuilder()
  .setColor(EMBED_COLORS.SUCCESS)
  .setTitle("👋 Novo Membro")
  .addFields(
    { name: "Membro", value: `${membro.tag}`, inline: true },
    { name: "Convidador", value: `${convidador.tag}`, inline: true },
    { name: "Convites Totais", value: `${totalConvites}`, inline: true }
  )
  .setTimestamp();
```

## Troubleshooting

### ❌ Problemas Comuns

#### Convites não são rastreados
*   Verifique se o bot tem permissão `Manage Guild`
*   Confirme se o sistema de convites está habilitado
*   Verifique se o cache de convites está funcionando

#### Recompensas não são aplicadas
*   Verifique se os cargos estão configurados corretamente
*   Confirme se o bot tem permissão para gerenciar cargos
*   Verifique se o sistema de recompensas está ativo

#### Estatísticas incorretas
*   Limpe o cache de convites
*   Verifique se não há convites duplicados
*   Confirme se o banco de dados está sincronizado

### 🔧 Soluções

#### Verificar Configurações
```bash
# Verifique se o sistema está ativo
!invitestats
```

#### Testar Rastreamento
```bash
# Teste com um convite novo
!invites
```

#### Verificar Logs
```bash
# Verifique os logs de convites
!invitelogs
```

## Personalização Avançada

### 🎨 Temas Personalizados

#### Cores dos Embeds
```javascript
// Personalize cores para diferentes tipos de convites
INVITE_COLORS: {
  NEW_MEMBER: "#00FF00",    // Verde para novos membros
  REWARD: "#FFD700",        // Dourado para recompensas
  STATS: "#0099FF",         // Azul para estatísticas
  LEADERBOARD: "#FF6600",   // Laranja para leaderboard
},
```

#### Ícones Personalizados
```javascript
// Personalize ícones para diferentes ações
INVITE_ICONS: {
  NEW_MEMBER: "👋",
  REWARD: "🏆",
  STATS: "📊",
  LEADERBOARD: "🏅",
},
```

### 📊 Métricas Avançadas

#### Estatísticas Detalhadas
*   **Convites por Hora** - Quantos convites por hora
*   **Taxa de Conversão** - Percentual de convites que resultam em membros
*   **Retenção de Membros** - Quantos membros convidados permanecem
*   **Tendências de Crescimento** - Padrões de crescimento do servidor

#### Relatórios Automáticos
*   **Relatórios Diários** - Resumo dos convites do dia
*   **Relatórios Semanais** - Estatísticas da semana
*   **Relatórios Mensais** - Análise mensal completa

### 🔧 Configurações Avançadas

#### Filtros Personalizados
```javascript
// Filtros para diferentes tipos de convites
INVITE_FILTERS: {
  MIN_INVITES: 1,           // Mínimo de convites para recompensa
  MAX_INVITES: 1000,        // Máximo de convites por usuário
  ALLOWED_CHANNELS: [],     // Canais permitidos para convites
  BLOCKED_CHANNELS: [],     // Canais bloqueados para convites
},
```

#### Rate Limiting
```javascript
// Limites de taxa para prevenir abuso
INVITE_LIMITS: {
  PER_USER: 50,             // 50 convites por usuário por dia
  PER_CHANNEL: 100,         // 100 convites por canal por dia
  GLOBAL: 5000,             // 5000 convites globais por dia
},
```

## Integração com Outros Sistemas

### 🔗 Sistema de Estatísticas
*   **XP por Convites** - XP adicional por convites
*   **Moedas por Convites** - Moedas virtuais por convites
*   **Níveis por Convites** - Níveis baseados em convites

### 🔗 Sistema de Moderação
*   **Logs de Convites** - Logs de atividades de convites
*   **Moderação de Convites** - Ferramentas para moderar convites
*   **Anti-Spam de Convites** - Prevenção de spam de convites

### 🔗 Sistema de Logs
*   **Logs Detalhados** - Logs completos de atividades
*   **Webhooks de Convites** - Envio de logs para canais externos
*   **Relatórios Automáticos** - Relatórios automáticos de atividades

---

**Sistema de Convites inteligente para crescer e engajar sua comunidade!** 📈✨
