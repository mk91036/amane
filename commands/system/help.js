const Discord = require('discord.js');
const config = require('../../assets/json/config.json');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {

    const command = message.content.split(' ');

    if (command[1] == undefined) {
        let embed = new Discord.RichEmbed()
            .setAuthor(`${bot.user.username}'s Help Menu`, bot.user.displayAvatarURL)
            .setColor('#A65EA5')
            .setDescription([`
            All commands uses \`${config.prefix}\` as prefix.
            You can see more about commands, so use this command ${config.prefix}help {command}.
            Example: >help anime
            `])
            .addField('Fun Command', `**${config.prefix}dm** | **${config.prefix}calculator**`)
            .addField('Miscellaneous Command', `**${config.prefix}commandcount** | **${config.prefix}reminder** | **${config.prefix}dmreminder** | **${config.prefix}nitro** | **${config.prefix}npm**`)
            .addField('Moderation Command', `**${config.prefix}ban** | **${config.prefix}kick** | **${config.prefix}report** | **${config.prefix}lockdown** | **${config.prefix}deletemsg** | **${config.prefix}addrole** | **${config.prefix}removerole** | **${config.prefix}config** | **${config.prefix}welcome** | **${config.prefix}welcomemessage** | **${config.prefix}welcomedm** | **${config.prefix}welcomechannel** | **${config.prefix}welcomeleave** | **${config.prefix}welcomerole** | **${config.prefix}welcomeremove**`)
            .addField('Otaku Command', `**${config.prefix}anime** | **${config.prefix}manga** | **${config.prefix}mal**`)
            .addField('Owner Command', `**${config.prefix}prefix** | **${config.prefix}guildlist** | **${config.prefix}reboot** | **${config.prefix}setstatus** | **${config.prefix}resetstatus** | **${config.prefix}text**`)
            .addField('Phantasy Star Online 2 Command', `**${config.prefix}error** | **${config.prefix}builds** | **${config.prefix}eqall** | **${config.prefix}candy** | **${config.prefix}status** | **${config.prefix}item** | **${config.prefix}price**`)
            .addField('System Command', `**${config.prefix}information** | **${config.prefix}invite**  | **${config.prefix}serverinfo** | **${config.prefix}ownerserver** | **${config.prefix}uptime** | **${config.prefix}userinfo** | **${config.prefix}membercount**`)
        return message.channel.send(embed);
    }

    else if (command[1] != undefined) {
        fs.readFile(__dirname + '/../../assets/json/commands.json', (err, dataJson) => {
            if (err) throw err;
            let helpMe = JSON.parse(dataJson);
            var commandName = command[1];

            try {
                const embed = new Discord.RichEmbed()
                    .setColor("#FF4500")
                    .addField(`Command: ${config.prefix}${helpMe[commandName].name}`, `Group: ${helpMe[commandName].group}\n` + `Desc: ${helpMe[commandName].desc}\n` + `Usage: ${config.prefix}${helpMe[commandName].usage}\n` + `Aliases: ${helpMe[commandName].aliases}\n` + `Example: ${config.prefix}${helpMe[commandName].example}\n`);
                message.channel.send(embed);
            }
            catch (error) {
                message.channel.send("I could not find that command!");
            }
        });
    }

};

module.exports.help = {
    name: "help",
    aliases: ['h', 'cmd']
};