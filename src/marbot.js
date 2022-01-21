// Require the necessary discord.js Classes
// /* eslint no-unused-var: "warn" */
const fs = require('fs');
const path = require('path');
const { Client, Collection, Intents } = require('discord.js');
require('dotenv').config();
const { DEBUG_MODE } = require('./lib/constants.js');

// Create a new client instance
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
  ],
});

client.once('ready', () => {
  console.log('Bot is Ready!');
});

client.commands = new Collection();

const commandFiles = fs.readdirSync(path.resolve('data/commands')).filter(file => file.endsWith('.js'));

/* eslint-disable */
debugger;
DEBUG_MODE && console.log(commandFiles);
/* eslint-enable */

for (const file of commandFiles) {
  const command = require(`../data/commands/${file}`);

  client.commands.set(command.data.name, command);
}

/* eslint-disable-next-line */

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  const command = client.commands.get(commandName);

  try {
    await command.execute(interaction, client);
    /* eslint-disable-next-line */
  } catch (error) {
    console.error(error);
    /* esling-disable-next-line */
    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
  }
});

module.exports = {
  start: function(token) {
    client.login(token);
  },
};