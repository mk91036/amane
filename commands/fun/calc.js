const math = require("mathjs");
const config = require('../../assets/json/config.json');

module.exports.run = (client, message, args) => {
  if (!args.join(" ")) return message.channel.send(`Usage: ${config.prefix}calculator [rangeNumber * + - / rangeNumber]`)
  try {
    //console.log(args);
    message.channel.send(math.evaluate(args));
  } catch (err) {
    if (err) message.channel.send(`**${err.message}**`);
  }
};

module.exports.help = {
  name: "calculator",
  aliases: ['calc']
};