# 🌍 Sistema de Tradução

O bot possui um sistema de tradução automática que permite aos membros traduzir mensagens usando reações de bandeiras, facilitando a comunicação entre membros de diferentes idiomas.

## Funcionalidades do Sistema

### 🏳️ Tradução por Reações
*   **Reações de Bandeiras** - Reaja com bandeiras para traduzir mensagens
*   **Múltiplos Idiomas** - Suporte a diversos idiomas
*   **Tradução Automática** - Tradução instantânea usando Google Translate
*   **Cooldown Inteligente** - Prevenção de spam de traduções

### 🔄 Sistema de Cache
*   **Cache de Traduções** - Evita traduzir a mesma mensagem múltiplas vezes
*   **Logs de Tradução** - Registro de todas as traduções realizadas
*   **Prevenção de Duplicatas** - Sistema inteligente para evitar traduções repetidas

### 📊 Estatísticas de Tradução
*   **Idiomas Mais Usados** - Estatísticas de idiomas mais traduzidos
*   **Usuários Mais Ativos** - Membros que mais solicitam traduções
*   **Relatórios de Uso** - Análise do uso do sistema de tradução

## Como Funciona

### 🎯 Processo de Tradução

1. **Reação com Bandeira** - Usuário reage com bandeira de um país
2. **Detecção de Idioma** - Bot identifica o idioma da bandeira
3. **Verificação de Cache** - Verifica se já foi traduzida
4. **Tradução Automática** - Usa Google Translate para traduzir
5. **Envio da Tradução** - Envia tradução em embed formatado
6. **Registro no Log** - Registra a tradução no banco de dados

### 🌐 Idiomas Suportados

#### Idiomas Principais
*   **Inglês** 🇺🇸 - English
*   **Português** 🇧🇷 - Português
*   **Espanhol** 🇪🇸 - Español
*   **Francês** 🇫🇷 - Français
*   **Alemão** 🇩🇪 - Deutsch
*   **Italiano** 🇮🇹 - Italiano
*   **Russo** 🇷🇺 - Русский
*   **Japonês** 🇯🇵 - 日本語
*   **Chinês** 🇨🇳 - 中文
*   **Coreano** 🇰🇷 - 한국어

#### Idiomas Adicionais
*   **Árabe** 🇸🇦 - العربية
*   **Hindi** 🇮🇳 - हिन्दी
*   **Turco** 🇹🇷 - Türkçe
*   **Polonês** 🇵🇱 - Polski
*   **Holandês** 🇳🇱 - Nederlands
*   **Sueco** 🇸🇪 - Svenska
*   **Norueguês** 🇳🇴 - Norsk
*   **Dinamarquês** 🇩🇰 - Dansk
*   **Finlandês** 🇫🇮 - Suomi
*   **Grego** 🇬🇷 - Ελληνικά

### ⏱️ Sistema de Cooldown

#### Cooldown por Usuário
*   **Tempo**: 2 minutos (120 segundos)
*   **Prevenção**: Evita spam de traduções
*   **Mensagem**: Notifica quando em cooldown

#### Cooldown por Mensagem
*   **Cache**: Evita traduzir a mesma mensagem múltiplas vezes
*   **Eficiência**: Reduz uso desnecessário da API
*   **Performance**: Melhora a velocidade de resposta

## Configuração

### ⚙️ Configurações Básicas

No arquivo `config.js`:

```javascript
// Sistema de tradução é habilitado automaticamente
// Não requer configuração adicional no config.js
```

### 🏳️ Configuração de Idiomas

#### Habilitar Tradução por Bandeiras
```bash
!setup
# Selecione "Sistema de Tradução"
# Configure o canal para traduções
```

#### Configuração de Canais
```bash
!setlogchannel #canal-de-traducoes
```

### 🔧 Configuração Avançada

#### Cooldown Personalizado
```javascript
// No arquivo de configuração do sistema de tradução
TRANSLATE_COOLDOWN: 120, // 2 minutos em segundos
```

#### Idiomas Ignorados
```javascript
// Idiomas que não devem ser traduzidos
IGNORED_LANGUAGES: ["en"], // Ignorar inglês
```

## Como Usar

### 🎯 Uso Básico

1. **Envie uma mensagem** em qualquer idioma
2. **Reaja com uma bandeira** do país do idioma desejado
3. **Aguarde a tradução** aparecer automaticamente
4. **A tradução será enviada** em um embed formatado

### 📝 Exemplo de Uso

#### Mensagem Original
```
Olá! Como você está hoje?
```

#### Reação com Bandeira
```
🇺🇸 (bandeira dos Estados Unidos)
```

#### Tradução Resultante
```
Hello! How are you today?
```

### 🔄 Múltiplas Traduções

#### Traduzir para Vários Idiomas
1. Reaja com múltiplas bandeiras
2. Cada bandeira gerará uma tradução
3. Todas as traduções aparecerão no mesmo embed

#### Exemplo
```
Mensagem: "Bom dia!"
Reações: 🇺🇸 🇫🇷 🇩🇪

Resultado:
🇺🇸 Good morning!
🇫🇷 Bonjour!
🇩🇪 Guten Morgen!
```

## Comandos de Tradução

### 🌍 Comandos de Usuário

#### `!translate <texto> <idioma>`
Traduz texto diretamente para um idioma específico.

**Exemplo:** `!translate Hello world pt`

#### `!languages`
Lista todos os idiomas suportados.

**Exemplo:** `!languages`

### ⚙️ Comandos de Administração

#### `!translatestats`
Mostra estatísticas de uso do sistema de tradução.

**Exemplo:** `!translatestats`

#### `!translatelogs [usuário]`
Mostra logs de traduções de um usuário específico.

**Exemplo:** `!translatelogs @Usuário`

## Sistema de Logs

### 📋 Tipos de Logs

#### Logs de Tradução
*   **Mensagem Original** - Texto original traduzido
*   **Idioma de Destino** - Idioma para o qual foi traduzido
*   **Usuário** - Quem solicitou a tradução
*   **Timestamp** - Quando a tradução foi realizada

#### Logs de Uso
*   **Estatísticas por Usuário** - Quantas traduções cada usuário fez
*   **Idiomas Mais Usados** - Idiomas mais traduzidos
*   **Horários de Pico** - Quando o sistema é mais usado

### 🎨 Formato dos Logs

#### Embed de Tradução
```javascript
const embed = new EmbedBuilder()
  .setColor(EMBED_COLORS.INFO)
  .setAuthor({ name: `Tradução de ${idiomaOrigem}` })
  .setDescription(tradução)
  .setFooter({
    text: `Solicitado por ${usuário.tag}`,
    iconURL: usuário.displayAvatarURL(),
  })
  .setTimestamp();
```

## Troubleshooting

### ❌ Problemas Comuns

#### Tradução não funciona
*   Verifique se o sistema de tradução está habilitado
*   Confirme se a bandeira representa um idioma suportado
*   Verifique se o usuário não está em cooldown

#### Tradução incorreta
*   O Google Translate pode ter limitações
*   Textos muito curtos podem ser traduzidos incorretamente
*   Gírias e expressões locais podem não ser traduzidas

#### Cooldown muito longo
*   Ajuste o tempo de cooldown nas configurações
*   Verifique se não há múltiplas traduções da mesma mensagem

### 🔧 Soluções

#### Verificar Configurações
```bash
# Verifique se o sistema está ativo
!translatestats
```

#### Testar Tradução
```bash
# Teste com uma mensagem simples
!translate Hello world pt
```

#### Verificar Logs
```bash
# Verifique os logs de tradução
!translatelogs
```

## Personalização Avançada

### 🎨 Temas Personalizados

#### Cores dos Embeds
```javascript
// Personalize cores para diferentes idiomas
LANGUAGE_COLORS: {
  "en": "#FF0000",  // Vermelho para inglês
  "pt": "#00FF00",  // Verde para português
  "es": "#0000FF",  // Azul para espanhol
  "fr": "#FFFF00",  // Amarelo para francês
},
```

#### Ícones Personalizados
```javascript
// Personalize ícones para diferentes idiomas
LANGUAGE_ICONS: {
  "en": "🇺🇸",
  "pt": "🇧🇷",
  "es": "🇪🇸",
  "fr": "🇫🇷",
},
```

### 📊 Métricas Avançadas

#### Estatísticas Detalhadas
*   **Traduções por Hora** - Quantas traduções por hora
*   **Idiomas Mais Populares** - Ranking de idiomas
*   **Usuários Mais Ativos** - Membros que mais traduzem
*   **Tendências de Uso** - Padrões de uso ao longo do tempo

#### Relatórios Automáticos
*   **Relatórios Diários** - Resumo das traduções do dia
*   **Relatórios Semanais** - Estatísticas da semana
*   **Relatórios Mensais** - Análise mensal completa

### 🔧 Configurações Avançadas

#### Filtros Personalizados
```javascript
// Filtros para diferentes tipos de conteúdo
TRANSLATION_FILTERS: {
  MAX_LENGTH: 2000,        // Máximo de caracteres
  MIN_LENGTH: 5,           // Mínimo de caracteres
  ALLOWED_CHANNELS: [],    // Canais permitidos
  BLOCKED_CHANNELS: [],    // Canais bloqueados
},
```

#### Rate Limiting
```javascript
// Limites de taxa para prevenir abuso
RATE_LIMITS: {
  PER_USER: 10,            // 10 traduções por usuário por hora
  PER_CHANNEL: 50,         // 50 traduções por canal por hora
  GLOBAL: 1000,            // 1000 traduções globais por hora
},
```

---

**Sistema de Tradução automática para conectar membros de diferentes idiomas!** 🌍✨
