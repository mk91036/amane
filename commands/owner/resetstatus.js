const config = require('../../assets/json/config.json');

module.exports.run = (bot, message, args) => {
    try {
        if (message.author.id !== config.ownerID) return message.reply("Only bot owner can use this command.");
        bot.user.setPresence({
          game: {
            name: `in ${bot.guilds.size} servers | ${config.prefix}help`,
            type: config.activity.type,
            url: config.activity.streamLink
          }
        });
        message.channel.send(`Status reset!`);
      } catch (e) {
        console.error;
        message.channel.send(`Oh no, an error occurred!\n${e.message}`);
      }
};

module.exports.help = {
  name: "resetstatus",
  aliases: []
};