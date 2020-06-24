const db = require('quick.db')
const Discord = require("discord.js");
const config = require('../../assets/json/config.json');

module.exports.run = (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('This command requires the **ADMINISTRATOR** permission')
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField("All Available Welcome Commands", `${config.prefix}welcomemessage - Set's welcome message\n ${config.prefix}welcomechannel - Set's welcome channel\n ${config.prefix}welcomedm - Set's welcome DM message\n ${config.prefix}welcomeleave - Set's welcome leave message\n ${config.prefix}welcomerole - Set's welcome auto-role\n ${config.prefix}welcomeremove - Remove all welcome configuration.`)
    message.channel.send({embed})
}

module.exports.help = {
    name: "welcome",
    aliases: []
}