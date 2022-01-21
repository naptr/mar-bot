const fs = require('fs');
const path = require('path');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
/* eslint no-inline-comments: "warn" */
const botConfig = require('../config/bot.config.json'); // if it doesn't exist create new one with your own credential
require('dotenv').config();

const { PUBLIC_DISCORD_GUILD_ID: GUILD_ID } = process.env;
const { application_id: CLIENT_ID, private_token: TOKEN } = botConfig;

const commands = [];
const commandFiles = fs.readdirSync(path.resolve('data/commands')).filter(file => file.endsWith('js'));
const rest = new REST({ version: '9' }).setToken(TOKEN);

for (const file of commandFiles) {
  const command = require(`../data/commands/${file}`);
  commands.push(command.data.toJSON());
}

// intialize commands registration
(async () => {
  try {
    console.log('Started refreshing application (/) commands');

    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands });
    /* eslint-disable-line */
    console.log('Sucessfully reloaded application (/) commands');
    /* eslint-disable-next-line */
  } catch (error) {
    console.error(error);
  }
})();