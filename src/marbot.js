// Require the necessary discord.js Classes
// /* eslint no-unused-var: "warn" */
const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
require('dotenv').config();

// Create a new client instance
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
  ],
});

client.commands = new Collection();

const commandFiles = fs.readdirSync('./data/commands').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./data/events').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`../data/commands/${file}`);

  client.commands.set(command.data.name, command);
}

for (const file of eventFiles) {
  const event = require(`../data/events/${file}`);

  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else { // eslint-disable-line
    client.on(event.name, (...args) => event.execute(...args, client));
  }
}

module.exports = {
  start: function(token) {
    client.login(token);
  },
};