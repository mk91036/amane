const discord = require("discord.js");
const token = require("./assets/json/token.json").token;
const bot = new discord.Client({
  disableEveryone: true
});
const lib = require("./assets/lib/functions");

const keepAlive = require("./assets/events/keepAlive.js");
keepAlive();

bot.commands = new discord.Collection(); // Collection for all commands
bot.aliases = new discord.Collection(); // Collection for all aliases of every command

lib.setup(bot);

module.exports.bot = bot;

bot.login(token);