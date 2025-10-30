const { MessageFlags } = require("discord.js");
const { getSettings } = require("@schemas/Guild");
const { commandHandler, contextHandler, statsHandler } = require("@src/handlers");

/**
 * @param {import('@src/structures').BotClient} client
 * @param {import('discord.js').BaseInteraction} interaction
 */
module.exports = async (client, interaction) => {
  // if (!interaction.guild) {
  //   return interaction
  //     .reply({ content: "Command can only be executed in a discord server", ephemeral: true })
  //     .catch(() => {});
  // }

  // Slash Commands
  if (interaction.isChatInputCommand()) await commandHandler.handleSlashCommand(interaction);
  // Context Menu
  else if (interaction.isContextMenuCommand()) {
    const context = client.contextMenus.get(interaction.commandName);
    if (context) await contextHandler.handleContext(interaction, context);
    else return interaction.reply({ content: "An error has occurred", flags: MessageFlags.Ephemeral }).catch(() => {});
  }

  // Auto-complete
  else if (interaction.isAutocomplete()) await commandHandler.handleAutoComplete(interaction);
  // Buttons
  else if (interaction.isButton()) {
    // switch (interaction.customId) {
    //   case "ID_CLICKED":
    //     return idHandler.handleIdClicked(interaction);
    // }
  }

  // Modals
  // else if (interaction.type === InteractionType.ModalSubmit) {
  //   switch (interaction.customId) {
  //     case "SUGGEST_APPROVE_MODAL":
  //       return suggestionHandler.handleApproveModal(interaction);
  //   }
  // }

  if (interaction.guild) {
    const settings = await getSettings(interaction.guild);

    if (settings.stats.enabled) statsHandler.trackInteractionStats(interaction).catch(() => {});
  }
};
