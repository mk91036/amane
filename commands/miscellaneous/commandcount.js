module.exports.run = (bot, message, args, funcs) => {
    message.channel.send(`I currently have: ${bot.commands.size} commands.`);
};

module.exports.help = {
    name: "commandcount",
    aliases: ["ccount"]
  };