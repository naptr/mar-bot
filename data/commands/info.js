const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('info')
    .setDescription('Bot Command for get informations')
    .addSubcommand(subcommand =>
      subcommand
        .setName('user')
        .setDescription('User Information')
        .addUserOption(option => option.setName('target').setDescription('The User'))
        .addBooleanOption(option => option.setName('tag').setDescription('Should I tag Him/ Her?')))
    .addSubcommand(subcommand => 
      subcommand
        .setName('server')
        .setDescription('Server Information')),
  async execute(interaction, client = undefined) { // eslint-disable-line
    if (interaction.options.getSubcommand() == 'user') {
      const user = interaction.options.getUser('target');
      const boolean = interaction.options.getBoolean('tag');

      if (user) {
        await interaction.reply(`Username: ${user.username}\nID: ${user.id}\n${boolean && `<@!${user.id}>`}`);
      } else {
        await interaction.reply(`Your Username: ${interaction.user.username}\nYour ID: ${interaction.user.id}\n`);
        console.log(interaction.user);
      }
    } else if (interaction.options.getSubcommand() == 'server') {
      await interaction.reply(`${interaction.guild.iconURL()}`);
    }
  },
};