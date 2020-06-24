const db = require('quick.db')
const Discord = require('discord.js')
const randomColor = parseInt(`0x${(Math.random() * 0xFFFFFF << 0).toString(16)}`);

module.exports.run = (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('This command requires the **ADMINISTRATOR** permission')
    let welcomeChannel = db.get(`welcomeChannel_${message.guild.id}`)
    let welcomeText = db.get(`welcomeText_${message.guild.id}`)
    let leaveText = db.get(`welcomeLeaveText_${message.guild.id}`)
    let welcomeDMText = db.get(`welcomeDMText_${message.guild.id}`)
    let welcomeRole = db.get(`welcomeRole_${message.guild.id}`)

        const embed = new Discord.RichEmbed()
            .setColor(randomColor)
            .addField(`**Welcome Channel**`, `> <#${welcomeChannel}>\n`)
            .addField(`**Welcome Message**`, `> ${welcomeText}\n`)
            .addField(`**Leave Message**`, `> ${leaveText}\n`)
            .addField(`**Welcome DM Message**`, `> ${welcomeDMText}\n`)
            .addField(`**Welcome Role**`, `> ${welcomeRole}\n`)
        message.channel.send(embed)
}

module.exports.help = {
    name: "config",
    aliases: []
}