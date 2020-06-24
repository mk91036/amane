const config = require('../../assets/json/config.json');

module.exports.run = async (bot, message, args, funcs) => {
    if (message.author.id !== config.ownerID) return message.reply("Only bot owner can use this command.");
    await message.reply('Bot is rebooting');
    process.exit(1);
};

module.exports.help = {
  name: "reboot",
  aliases: []
};