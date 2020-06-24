const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES"))
        return message.channel.send(`Sorry ${message.author}, you do not have permission: **Manage Roles**`);

    if (!args[1])
        return message.channel.send(`Insufficient arguments. ( ${config.prefix}addrole [user] [role] )`)

    let member = message.mentions.members.first();
    let role = message.mentions.roles.first();

    roleid = args[1];

    if (message.mentions.roles.first()) {
        roleid = role.id
    }

    if (!member.roles.has(roleid))
        return message.channel.send(`This user does not have that role`)

    let unassignedrole = message.guild.roles.get(roleid);

    try {
        await member.removeRole(roleid)
        return message.channel.send(`**${member.displayName}** has lost the role **${unassignedrole.name}**`);
    } catch (err) {
        return message.channel.send(`**ERROR:** ${err}`);
    }
}

module.exports.help = {
    name: "removerole",
    aliases: ['delrole']
}