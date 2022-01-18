// Require the necessary discord.js Classes
const { Client, Intents } = require('discord.js');
require('dotenv').config();
const TOKEN = process.env.PRIVATE_DISCORD_BOT_TOKEN;

// Create a new client instance
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
  ],
});

// // basic commands
// client.on('messageCreate', message => {
//   const { content, author } = message;

//   switch (content) {
//   case 'test':
//     message.react('😍');
//     message.reply(`I'm replying to <@!${author.id}>`);
//     break;
//   case 'whoami':
//     message.reply(`\nI'm a bot 🤖\n`);
//     message.react('🤖');
//     break;
//   }
// });

client.once('ready', () => {
  console.log('Bot is Ready!');
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  switch (commandName) {
    case 'test':
      interaction.reply('😍');
  }
});

client.login(TOKEN);