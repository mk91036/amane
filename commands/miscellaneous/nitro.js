const Discord = require('discord.js');

module.exports.run = async (client, msg) => {
    var nitro = '';
    msg.guild.members.map(usr => {
        if (usr.avatar != null) {
            if (usr.avatar.startsWith("a_")) {
                nitro += usr.mention + "\n";
            }
        }
    });

    var nitro = new Discord.RichEmbed()
        .setAuthor("Nitro Users", "http://i.imgur.com/H5CwSY2.png")
        .setDescription("The following users on this guild have nitro:\n\n" + nitro)
        .setColor("RANDOM")
        .setThumbnail("http://i.imgur.com/Ls5pRMF.png")

    msg.channel.send({ embed: nitro })
};

module.exports.help = {
    name: 'nitro',
    aliases: []
};