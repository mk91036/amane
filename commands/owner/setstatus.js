const config = require('../../assets/json/config.json');

module.exports.run = (bot, message, args) => {
    if (message.author.id !== config.ownerID) return message.reply("Only bot owner can use this command.");
    try {
        bot.user.setPresence({
            game: {
                name: args.join(` `)
            }
        }).catch((e) => {
            message.channel.send(`Oh no, an error occurred!\n${e.message}`);
        });
        message.channel.send(`Status set to ${args.join(` `)}.`);
    } catch (e) {
        console.error;
        message.channel.send(`Oh no, an error occurred!\n${e.message}`);
    }
};

module.exports.help = {
    name: "setstatus",
    aliases: []
};