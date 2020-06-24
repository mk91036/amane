const config = require('../../assets/json/config.json');
const fs = require("fs")

module.exports.run = (bot, message, args) => {
  if (message.author.id !== config.ownerID) return message.reply('Sorry! Seems like you tried to run owner-only command!');;
  if (message.content.startsWith(config.prefix + "prefix")) {
    // Gets the prefix from the command (eg. ">prefix +" it will take the "+" from it)
    let newPrefix = message.content.split(" ").slice(1, 2)[0];
    // change the configuration in memory
    config.prefix = newPrefix;
    message.channel.send(`Prefix has been updated to **${newPrefix}**`).catch(console.error);

    // Now we have to save the file.
    fs.writeFile("./assets/json/config.json", JSON.stringify(config), (err) => console.error);
  }
}

module.exports.help = {
  name: "prefix",
  aliases: []
}