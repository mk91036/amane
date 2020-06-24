const db = require('quick.db')
const Discord = require("discord.js");
const config = require('../../assets/json/config.json');

module.exports.run = (client, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("This command requires the **ADMINISTRATOR** permission")
    if (!args.join(" ")) return message.channel.send(`Usage: ${config.prefix}welcomerole [roleName]`)

    db.set(`welcomeRole_${message.guild.id}`, args.join(" ").trim())
        message.channel.send(`Successfully updated welcome auto-role to **${args.join(" ")}**`)
}

module.exports.help = {
    name: "welcomerole",
    aliases: []
}