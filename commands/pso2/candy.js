const { RichEmbed } = require('discord.js')

module.exports.run = (bot, message, args) => {

    const embed = new RichEmbed()
        .setColor('RANDOM')
        .setAuthor('BUILD PET CANDY')
        .setFooter('Developer By Team「Another」', 'https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024')
        .addField('REDRAN', '[Redran Candy | Powered By Kim Jong Wil](https://cdn.discordapp.com/attachments/286103219426557952/443321469880238080/1524584621932.jpg)')
        .addField('SYNCHRO', '[Synchro Candy | Powered By Kim Jong Wil](https://cdn.discordapp.com/attachments/286103219426557952/443321468160442368/1524584619023.jpg)')
        .addField('RAPPY', '[Rappy Candy | Powered By Kim Jong Wil](https://cdn.discordapp.com/attachments/286103219426557952/443321460656963585/1524584593380.jpg)')
        .addField('MAROON', '[Maroon Candy | Powered By Kim Jong Wil](https://cdn.discordapp.com/attachments/286103219426557952/443321460166098955/1524584536366.jpg)')
        .addField('POPPLE', '[Popple Candy | Powered By Kim Jong Wil](https://cdn.discordapp.com/attachments/286103219426557952/443321456118726669/1524584533030.jpg)')
        .addField('AERO', '[Aero Candy | Powered By Kim Jong Wil](https://cdn.discordapp.com/attachments/286103219426557952/443321454239678466/1524584529628.jpg)')
        .addField('JINGA', '[Jinga Candy | Powered By Kim Jong Wil](https://cdn.discordapp.com/attachments/286103219426557952/443321454159724556/1524584519846.jpg)')
        .addField('ALL CANDY PET', '[All Candy Pet | Powered By Kim Jong Wil](https://docs.google.com/spreadsheets/d/1Z2RjBvPqtasQOYVWWsEeC-aVQZ1IBIpEb_Difltv0mw/edit#gid=0)')
        .addField('Pet Guide / Candy / Manymore', '[Pet Guide / Candy / Manymore | Powered By Schyon](https://docs.google.com/spreadsheets/d/11Xc6jrxgVFmJLQZZ7XcDS04i01dhUjjDXMSFFQr6pbo/edit?usp=sharing)')
    return message.channel.send({ embed });
}

module.exports.help = {
    name: "candy",
    aliases: []
}