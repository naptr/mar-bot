const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Check if the bot respons or not'),
  async execute(interaction, client = undefined) { // eslint-disable-line
    const message = await interaction.reply({ content: `Hi <@!${interaction.user.id}>!, The bot is here, replying to your command!`, fetchReply: true });
    message.react('💖');
  },
};