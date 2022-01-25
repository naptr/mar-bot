const { SlashCommandBuilder } = require('@discordjs/builders');
const { getCurrentPeriod } = require('../../src/utils/time.js');
// const { DEBUG_MODE } = require('../../src/lib/constants.js');

/* eslint-disable-next-line */
debugger;
// DEBUG_MODE && console.log(hour);

module.exports = {
  data: new SlashCommandBuilder()
    .setName('owner')
    .setDescription('Mention the owner of server'),
  async execute(interaction, client = undefined) {
    await interaction.reply(`Halo Pak!! <@!${(await interaction.guild.fetchOwner()).id}>`);
    client.channels.cache.get(interaction.channel.id).send(`Selamat ${getCurrentPeriod()}.`);
  },
};