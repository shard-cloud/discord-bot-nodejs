O bot possui um sistema de logs completo e detalhado que registra todas as atividades importantes do servidor e do próprio bot, oferecendo monitoramento completo e transparência.

## Funcionalidades do Sistema

### 📋 Tipos de Logs
*   **Logs de Moderação** - Ações de moderação (ban, kick, timeout, warn)
*   **Logs de Servidor** - Mudanças no servidor (canais, cargos, configurações)
*   **Logs de Membros** - Entrada/saída de membros, mudanças de cargos
*   **Logs de Sistema** - Atividades do bot, erros, inicialização
*   **Logs de Estatísticas** - Atividades de XP, níveis, moedas
*   **Logs de Convites** - Rastreamento de convites e recompensas
*   **Logs de Tradução** - Atividades de tradução automática

### 🔍 Sistema de Monitoramento
*   **Logs em Tempo Real** - Logs instantâneos de atividades
*   **Logs Históricos** - Histórico completo de atividades
*   **Logs por Categoria** - Logs organizados por tipo de atividade
*   **Logs por Usuário** - Logs específicos de usuários

### 📊 Sistema de Análise
*   **Estatísticas de Logs** - Análise de padrões de atividade
*   **Relatórios Automáticos** - Relatórios periódicos de atividades
*   **Tendências** - Identificação de tendências e padrões
*   **Alertas** - Notificações para atividades suspeitas

## Como Funciona

### 🎯 Processo de Logging

1. **Detecção de Evento** - Bot detecta uma atividade
2. **Coleta de Dados** - Coleta informações relevantes
3. **Formatação** - Formata os dados em embed
4. **Envio** - Envia para canal de logs configurado
5. **Armazenamento** - Armazena no banco de dados
6. **Análise** - Analisa padrões e tendências

### 📝 Formato dos Logs

#### Estrutura Padrão
```javascript
const embed = new EmbedBuilder()
  .setColor(corApropriada)
  .setTitle(títuloDoEvento)
  .addFields(
    { name: "Usuário", value: usuário.tag, inline: true },
    { name: "Moderador", value: moderador.tag, inline: true },
    { name: "Razão", value: razão || "Não especificada", inline: false }
  )
  .setTimestamp()
  .setFooter({ text: "ID: " + usuário.id });
```

#### Tipos de Embeds
*   **Sucesso** - Verde (#00A56A)
*   **Erro** - Vermelho (#D61A3C)
*   **Aviso** - Amarelo (#F7E919)
*   **Informação** - Azul (#0099FF)
*   **Bot** - Azul padrão (#068ADD)

## Configuração

### ⚙️ Configurações Básicas

#### Canal de Logs Gerais
```bash
!setlogchannel #canal-de-logs
```

#### Canal de Logs de Moderação
```bash
!modlog #canal-de-moderacao
```

#### Canal de Logs de Estatísticas
```bash
!setup
# Selecione "Sistema de Logs"
# Configure canais específicos
```

### 🔧 Configurações Avançadas

#### Webhook para Logs
```env
ERROR_LOGS=webhook_url_para_logs_de_erro
```

#### Configuração de Logs por Tipo
```javascript
LOGGING: {
  MODERATION: true,        // Logs de moderação
  MEMBERS: true,           // Logs de membros
  SERVER: true,            // Logs de servidor
  STATS: true,             // Logs de estatísticas
  INVITES: true,           // Logs de convites
  TRANSLATION: true,       // Logs de tradução
  SYSTEM: true,            // Logs de sistema
},
```

## Tipos de Logs

### 🔨 Logs de Moderação

#### Ações de Moderação
*   **Timeout** - Aplicação e remoção de timeout
*   **Kick** - Expulsões de membros
*   **Ban** - Banimentos e desbanimentos
*   **Warn** - Aplicação de avisos
*   **Voz** - Ações de moderação de voz

#### Formato de Log de Moderação
```javascript
const embed = new EmbedBuilder()
  .setColor(EMBED_COLORS.ERROR)
  .setTitle("🔨 Membro Banido")
  .addFields(
    { name: "Usuário", value: `${user.tag} (${user.id})`, inline: true },
    { name: "Moderador", value: `${moderator.tag}`, inline: true },
    { name: "Razão", value: reason || "Não especificada", inline: false }
  )
  .setTimestamp();
```

### 👥 Logs de Membros

#### Atividades de Membros
*   **Entrada** - Membros entrando no servidor
*   **Saída** - Membros saindo do servidor
*   **Mudanças de Cargo** - Adição/remoção de cargos
*   **Atualizações de Perfil** - Mudanças no perfil

#### Formato de Log de Membro
```javascript
const embed = new EmbedBuilder()
  .setColor(EMBED_COLORS.SUCCESS)
  .setTitle("👋 Novo Membro")
  .addFields(
    { name: "Usuário", value: `${member.user.tag}`, inline: true },
    { name: "ID", value: member.user.id, inline: true },
    { name: "Conta Criada", value: member.user.createdAt.toDateString(), inline: true }
  )
  .setTimestamp();
```

### 🏰 Logs de Servidor

#### Mudanças no Servidor
*   **Canais** - Criação/edição/exclusão de canais
*   **Cargos** - Criação/edição/exclusão de cargos
*   **Configurações** - Mudanças nas configurações do servidor
*   **Integrações** - Mudanças em integrações

#### Formato de Log de Servidor
```javascript
const embed = new EmbedBuilder()
  .setColor(EMBED_COLORS.INFO)
  .setTitle("📝 Canal Criado")
  .addFields(
    { name: "Canal", value: `${channel.name}`, inline: true },
    { name: "Tipo", value: channel.type, inline: true },
    { name: "Criado por", value: `${user.tag}`, inline: true }
  )
  .setTimestamp();
```

### 📊 Logs de Estatísticas

#### Atividades de Estatísticas
*   **Level Up** - Membros subindo de nível
*   **Ganho de XP** - Atividades que geram XP
*   **Transferências** - Transferências de moedas
*   **Recompensas** - Cargos automáticos concedidos

#### Formato de Log de Estatísticas
```javascript
const embed = new EmbedBuilder()
  .setColor(EMBED_COLORS.SUCCESS)
  .setTitle("⭐ Level Up")
  .addFields(
    { name: "Membro", value: `${member.user.tag}`, inline: true },
    { name: "Novo Nível", value: `${newLevel}`, inline: true },
    { name: "XP Total", value: `${totalXP}`, inline: true }
  )
  .setTimestamp();
```

### 📈 Logs de Convites

#### Atividades de Convites
*   **Novo Membro** - Membros entrando via convite
*   **Convite Usado** - Qual convite foi usado
*   **Recompensas** - Cargos concedidos por convites
*   **Estatísticas** - Atualizações de contadores

#### Formato de Log de Convite
```javascript
const embed = new EmbedBuilder()
  .setColor(EMBED_COLORS.SUCCESS)
  .setTitle("🎉 Convite Usado")
  .addFields(
    { name: "Novo Membro", value: `${newMember.user.tag}`, inline: true },
    { name: "Convidador", value: `${inviter.user.tag}`, inline: true },
    { name: "Convites Totais", value: `${totalInvites}`, inline: true }
  )
  .setTimestamp();
```

### 🌍 Logs de Tradução

#### Atividades de Tradução
*   **Traduções Realizadas** - Traduções solicitadas
*   **Idiomas Usados** - Idiomas mais traduzidos
*   **Usuários Ativos** - Membros que mais traduzem
*   **Estatísticas** - Métricas de uso

#### Formato de Log de Tradução
```javascript
const embed = new EmbedBuilder()
  .setColor(EMBED_COLORS.INFO)
  .setTitle("🌍 Tradução Realizada")
  .addFields(
    { name: "Usuário", value: `${user.tag}`, inline: true },
    { name: "Idioma", value: `${language}`, inline: true },
    { name: "Mensagem", value: `${message.content.substring(0, 100)}...`, inline: false }
  )
  .setTimestamp();
```

## Comandos de Logs

### 👤 Comandos de Usuário

#### `!logs [tipo] [página]`
Mostra logs de um tipo específico.

**Tipos disponíveis:**
*   `moderation` - Logs de moderação
*   `members` - Logs de membros
*   `server` - Logs de servidor
*   `stats` - Logs de estatísticas
*   `invites` - Logs de convites
*   `translation` - Logs de tradução

**Exemplo:** `!logs moderation`, `!logs members 2`

#### `!logstats`
Mostra estatísticas de uso dos logs.

**Exemplo:** `!logstats`

### ⚙️ Comandos de Administração

#### `!setlogchannel <#canal>`
Configura o canal principal de logs.

**Exemplo:** `!setlogchannel #logs-gerais`

#### `!modlog <#canal>`
Configura o canal de logs de moderação.

**Exemplo:** `!modlog #logs-moderacao`

#### `!logconfig [tipo] [status]`
Habilita/desabilita tipos específicos de logs.

**Exemplo:** `!logconfig moderation on`

#### `!logexport [tipo] [data]`
Exporta logs para arquivo.

**Exemplo:** `!logexport moderation 2024-01-01`

## Sistema de Análise

### 📊 Estatísticas de Logs

#### Métricas Principais
*   **Logs por Hora** - Quantos logs por hora
*   **Tipos Mais Comuns** - Tipos de logs mais frequentes
*   **Usuários Mais Ativos** - Membros com mais atividades
*   **Horários de Pico** - Quando mais atividades ocorrem

#### Relatórios Automáticos
*   **Relatórios Diários** - Resumo dos logs do dia
*   **Relatórios Semanais** - Estatísticas da semana
*   **Relatórios Mensais** - Análise mensal completa

### 🔍 Análise de Padrões

#### Detecção de Padrões
*   **Atividades Suspeitas** - Padrões anômalos
*   **Tendências** - Tendências de comportamento
*   **Alertas** - Notificações para atividades importantes

#### Relatórios de Análise
*   **Relatórios de Segurança** - Análise de segurança
*   **Relatórios de Atividade** - Análise de atividade
*   **Relatórios de Crescimento** - Análise de crescimento

## Troubleshooting

### ❌ Problemas Comuns

#### Logs não estão sendo enviados
*   Verifique se o canal de logs está configurado
*   Confirme se o bot tem permissão para enviar mensagens
*   Verifique se o webhook está configurado corretamente

#### Logs incompletos
*   Verifique se o bot tem todas as permissões necessárias
*   Confirme se o sistema de logs está habilitado
*   Verifique se não há erros no banco de dados

#### Logs duplicados
*   Verifique se não há múltiplos bots configurados
*   Confirme se o sistema de cache está funcionando
*   Verifique se não há eventos duplicados

### 🔧 Soluções

#### Verificar Configurações
```bash
# Verifique se o sistema está ativo
!logstats
```

#### Testar Logs
```bash
# Teste com uma ação simples
!ping
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
// Personalize cores para diferentes tipos de logs
LOG_COLORS: {
  MODERATION: "#FF0000",    // Vermelho para moderação
  MEMBERS: "#00FF00",       // Verde para membros
  SERVER: "#0000FF",        // Azul para servidor
  STATS: "#FFFF00",         // Amarelo para estatísticas
  INVITES: "#FF00FF",       // Magenta para convites
  TRANSLATION: "#00FFFF",   // Ciano para tradução
},
```

#### Ícones Personalizados
```javascript
// Personalize ícones para diferentes tipos de logs
LOG_ICONS: {
  MODERATION: "🔨",
  MEMBERS: "👥",
  SERVER: "🏰",
  STATS: "📊",
  INVITES: "📈",
  TRANSLATION: "🌍",
},
```

### 📊 Métricas Avançadas

#### Estatísticas Detalhadas
*   **Logs por Categoria** - Distribuição por tipo
*   **Logs por Usuário** - Atividades por membro
*   **Logs por Hora** - Distribuição temporal
*   **Logs por Canal** - Atividades por canal

#### Relatórios Personalizados
*   **Relatórios Customizados** - Relatórios sob demanda
*   **Filtros Avançados** - Filtros personalizados
*   **Exportação** - Exportação em diferentes formatos
*   **Agendamento** - Relatórios automáticos

### 🔧 Configurações Avançadas

#### Filtros Personalizados
```javascript
// Filtros para diferentes tipos de logs
LOG_FILTERS: {
  MIN_LEVEL: "INFO",        // Nível mínimo de log
  MAX_LOGS: 1000,           // Máximo de logs por dia
  ALLOWED_CHANNELS: [],      // Canais permitidos
  BLOCKED_CHANNELS: [],      // Canais bloqueados
},
```

#### Rate Limiting
```javascript
// Limites de taxa para prevenir spam
LOG_LIMITS: {
  PER_CHANNEL: 100,          // 100 logs por canal por hora
  PER_USER: 50,              // 50 logs por usuário por hora
  GLOBAL: 10000,            // 10000 logs globais por hora
},
```

---

**Sistema de Logs completo para monitorar e analisar todas as atividades do seu servidor!** 📝✨
