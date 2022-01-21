const marbot = require('./src/marbot.js');
const { private_token: TOKEN } = require('./config/bot.config.json');

marbot.start(TOKEN);