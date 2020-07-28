const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports.run = async (bot, message, args) => {

    try {
        const data = await (await fetch('https://snjwgcmip9ejbvlhrxdv6ivfhfor0m8fzhz0e8b1--mk91036mk.repl.co/daily')).json();

        let embed = new Discord.RichEmbed()
            .setTitle("Daily Orders Today!")
            .setColor('#00b8ff')
            .setDescription(data.join('\n'))
            .setFooter('Powered By Team「Another」', 'https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024')
            .setTimestamp()
        message.channel.send(embed);

    } catch (err) {
        message.channel.send(err);
    }

}

module.exports.help = {
    name: "daily",
    aliases: []
}