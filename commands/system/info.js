const Discord = require('discord.js');
const config = require('../../assets/json/config.json');

let days = 0;
let week = 0;

module.exports.run = async (bot, message, args) => {
    let uptime = ``;
    let totalSeconds = (bot.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    if (hours > 23) {
        days = days + 1;
        hours = 0;
    }

    if (days == 7) {
        days = 0;
        week = week + 1;
    }

    if (week > 0) {
        uptime += `${week} week, `;
    }

    if (minutes > 60) {
        minutes = 0;
    }

    uptime += `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

    let serverembed = new Discord.RichEmbed()
        .setColor("#9400D3")
        .setAuthor(bot.user.username, bot.user.displayAvatarURL)
        .addField(`Version`, `1.0`, true)
        .addField(`Library`, `Discord.js`, true)
        .addField(`Creator`, bot.users.get("239824172614680576"), true)
        .addField(`Servers`, `${bot.guilds.size}`, true)
        .addField(`Users`, `${bot.users.size}`, true)
        .addField(`Invite`, `[Invite This Bot](https://discordapp.com/oauth2/authorize?client_id=647922349034831895&permissions=2147483127&scope=bot)`, true)
        .setFooter(`Uptime: ${uptime}`);

    message.channel.send(serverembed);

}

module.exports.help = {
    name: "information",
    aliases: ['info']
};