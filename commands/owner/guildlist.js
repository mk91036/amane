const { RichEmbed } = require('discord.js');
const config = require('../../assets/json/config.json');

module.exports.run = (bot, message, args, funcs) => {
    if (message.author.id !== config.ownerID) return message.reply("Only bot owner can use this command.");
    try {
        let guilds = bot.guilds.map(g => `Name: ${g.name}, Membercount: ${g.members.size}, ID: ${g.id}`).join('\n');
        if (bot.guilds.size >= 1) {
            message.channel.send("```" + guilds + "```", {
                split: {
                    prepend: "```",
                    append: "```"
                }
            });
            return;
        }
        let embed = new RichEmbed()
            .setTimestamp()
            .setThumbnail(bot.user.avatarURL)
            .setFooter(`Total guilds: ${bot.guilds.size}`)
            .setColor(funcs.rc())
        bot.guilds.forEach(guild => {
            embed.addField(`__**${guild.name}**__`, `Owner: ${guild.owner.user.tag}\nMembercount: ${guild.members.size}\nID: ${guild.id}`)
        });
        message.channel.send(embed);
    } catch (e) {
        console.log(e);
        funcs.send(`Oh no, an error occurred!\n${e.message}`);
    }
};

module.exports.help = {
    name: "guildlist",
    aliases: [],
};