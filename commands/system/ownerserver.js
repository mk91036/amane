const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    const setChannelID = message.content.split(' ');

    let sicon = "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024";
    let serverembed = new Discord.RichEmbed()
        .setAuthor(`「Another」 - Informations`, sicon)
        .setColor("RANDOM")
        .addField("This link invite to owner bot server", "「Another」\nhttps://discord.gg/eJeFXcD", true)
        .setThumbnail(sicon)
        .setFooter('「Another」Team', sicon)

    return message.channel.send(serverembed);
}

module.exports.help = {
    name: "ownerserver",
    aliases: ['os']
};