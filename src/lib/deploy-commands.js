const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
require('dotenv').config();

const { 
  PUBLIC_DISCORD_GUILD_ID: GUILD_ID, 
  PUBLIC_DISCORD_CLIENT_ID: CLIENT_ID, 
  PRIVATE_DISCORD_BOT_TOKEN: TOKEN 
} = process.env;

const commands = [
  new SlashCommandBuilder().setName('test').setDescription('Test message for bot'),
  new SlashCommandBuilder().setName('whoami').setDescription('Who am I but Robot')
]
  .map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(TOKEN);

rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands })
  .then(() => console.log('Sucessfully registered application commands.'))
  .catch(console.error);