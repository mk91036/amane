const Discord = require('discord.js')
const randomColor = parseInt(`0x${(Math.random() * 0xFFFFFF << 0).toString(16)}`);
const status = {
    online: "Online",
    idle: "Idle",
    dnd: "Do Not Disturb",
    offline: "Offline/Invisible"
};

module.exports.run = (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setColor(randomColor)
    .setAuthor(`${client.user.tag} - Informations`)
    .setTimestamp()
    .setFooter(`ID: ${client.user.id}`)
    .setThumbnail(client.user.displayAvatarURL)
    .setTitle("Invite me to your discord server!")
    .setURL(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=1576529015`)
    .addField("Status", `${status[client.user.presence.status]}`, true)
    message.channel.send({embed})
}

module.exports.help = {
    name: "invite",
    aliases: []
}