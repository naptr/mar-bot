module.exports = {
  name: 'interactionCreate',
  once: false,
  async execute(interaction, client) {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);
    /* eslint-disable */
    try {
      await command.execute(interaction, client);
    } catch (error) {
      console.error(error);
      await interaction.reply(`\`${error}\``);
    }
    /* eslint-enable */
  },
};