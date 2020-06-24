const ms = require('ms');

module.exports.run = (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`You don't have permissions to execute this command!\nYou require **MANAGE_MESSAGES** permission!`)

    if (!bot.lockit) bot.lockit = [];
    let time = args.join(' ');
    let validUnlocks = ['release', 'unlock'];
    if (!time) return message.channel.send('You must set a duration for the lockdown in either hours, minutes or seconds');

    if (validUnlocks.includes(time)) {
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
        }).then(() => {
            message.channel.sendMessage('Lockdown lifted.');
            clearTimeout(bot.lockit[message.channel.id]);
            delete bot.lockit[message.channel.id];
        }).catch(error => {
            console.log(error);
        });
    } else {
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
        }).then(() => {
            message.channel.sendMessage(`Channel locked down for ${ms(ms(time), { long: true })}`).then(() => {

                bot.lockit[message.channel.id] = setTimeout(() => {
                    message.channel.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: null
                    }).then(message.channel.sendMessage('Lockdown lifted.')).catch(console.error);
                    delete bot.lockit[message.channel.id];
                }, ms(time));

            }).catch(error => {
                console.log(error);
            });
        });
    }
};

module.exports.help = {
    name: "lockdown",
    aliases: ['ld']
}