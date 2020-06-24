const db = require('quick.db')
const Discord = require("discord.js");
const config = require('../../assets/json/config.json');

module.exports.run = (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('This command requires the **ADMINISTRATOR** permission')
    if (!args.join(" ") && args.join(" ").toUpperCase() !== 'NONE') return message.channel.send(`Usage: ${config.prefix}welcomedm [message]\n\nText Formatting:\n%GUILD_MEMBER_COUNT% - Returns guild's member count ex. ${message.guild.memberCount}\n%USER% - Returns user's tag ex. <@${message.author.id}>\n%USER_TAG% - Returns user's tag ex. ${message.author.tag}\n%GUILD_NAME% - Returns guild's name ex. ${message.guild.name}`)

    let newMessage;
    if (args.join(" ").toUpperCase() === 'NONE') {
        newMessage = '';
    } else {
        newMessage = args.join(" ").trim();
    }

    db.set(`welcomeDMText_${message.guild.id}`, newMessage)
    message.channel.send(`**Successfully updated welcome dm text to:**\n > *${args.join(" ").trim()}*`)
}

module.exports.help = {
    name: "welcomedm",
    aliases: []
}