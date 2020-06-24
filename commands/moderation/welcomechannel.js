const db = require('quick.db')
const Discord = require("discord.js");
const config = require('../../assets/json/config.json');

module.exports.run = (client, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("This command requires the **ADMINISTRATOR** permission")
    if (!message.mentions.channels.first() && args.join(" ").toUpperCase() !== 'NONE') return message.channel.send(`Usage: ${config.prefix}welcomechannel #channel`)

    let newChannel;
    if (args.join(" ").toUpperCase() === 'NONE') {
        newChannel = '';
    } else {
        newChannel = message.mentions.channels.first().id;
    }

    db.set(`welcomeChannel_${message.guild.id}`, newChannel)
    message.channel.send(`Successfully updated welcome channel to **${message.mentions.channels.first()}**`)
}

module.exports.help = {
    name: "welcomechannel",
    aliases: []
}