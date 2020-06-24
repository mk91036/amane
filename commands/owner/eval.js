const Discord = require("discord.js");
const config = require('../../assets/json/config.json');

function clean(text) {
  if (typeof (text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
    return text;
}

module.exports.run = async (client, message, args) => {
  if (message.author.id !== config.ownerID)
    return message.reply(`You must be the bot owner to run this command`)

  try {
    const code = args.join(" ");
    let evaled = eval(code);

    if (typeof evaled !== "string")
      evaled = require("util").inspect(evaled);

    message.channel.send(clean(evaled), { code: "xl" });
  } catch (err) {
    message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
  }
}

module.exports.help = {
  name: "eval",
  aliases: []
}