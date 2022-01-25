const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Logging bot commands'),
  async execute(interaction, client = undefined) { // eslint-disable-line
    await interaction.reply(`\ntest\n\`\`\`javascript\n${JSON.stringify(interaction.guild, null, 2)}\n\`\`\``);
  },
};