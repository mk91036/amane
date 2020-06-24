const db = require('quick.db')
const Discord = require("discord.js");
const config = require('../../assets/json/config.json');

module.exports.run = (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('This command requires the **ADMINISTRATOR** permission')
    //Remove Chnannel
    let newChannel = message.content.split(" ").slice(2, 4)[0];;

    if (args.join(" ").toUpperCase() === 'NONE') {
        newChannel = '';
    } else {
        newChannel = null;
    }

    db.set(`welcomeChannel_${message.guild.id}`, newChannel)
    message.channel.send(`**Successfully remove welcome channel to**\n > *${newChannel}*`)
    //Remove Message

    let newMessage = message.content.split(" ").slice(2, 4)[0];

    if (args.join(" ").toUpperCase() === 'NONE') {
        newMessage = '';
    } else {
        newMessage = null;
    }

    db.set(`welcomeText_${message.guild.id}`, newMessage)
    message.channel.send(`**Successfully remove welcome text to:**\n > *${newMessage}*`)

    //Remove Message DM
    let newMessageDM = message.content.split(" ").slice(2, 4)[0];

    if (args.join(" ").toUpperCase() === 'NONE') {
        newMessageDM = '';
    } else {
        newMessageDM = null;
    }

    db.set(`welcomeDMText_${message.guild.id}`, newMessageDM)
    message.channel.send(`**Successfully remove welcome dm text to:**\n > *${newMessageDM}*`)

    //Remove Leave
    let newMessageLeave = message.content.split(" ").slice(2, 4)[0];

    if (args.join(" ").toUpperCase() === 'NONE') {
        newMessageLeave = '';
    } else {
        newMessageLeave = null;
    }

    db.set(`welcomeLeaveText_${message.guild.id}`, newMessageLeave)
    message.channel.send(`**Successfully remove welcome leave text to:**\n > *${newMessageLeave}*`)

    //Remove Auto-role
    let newRole = message.content.split(" ").slice(2, 4)[0];

    if (args.join(" ").toUpperCase() === 'NONE') {
        newRole = '';
    } else {
        newRole = null;
    }

    db.set(`welcomeRole_${message.guild.id}`, newRole)
    message.channel.send(`**Successfully updated welcome auto-role to:**\n > *${newRole}*`)

}

module.exports.help = {
    name: "welcomeremove",
    aliases: []
}