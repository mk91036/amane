module.exports.run = async (bot, message, args) => {
    try {
        let dmUser = message.channel.members.find(c => c.id == args[0]);
        if (!dmUser) return message.channel.send(`I can\'t seem to find a user with ID: ${args[0]}, make sure thats a valid users id and try again.`);
        //con.query(`SELECT * FROM userSettings WHERE guildId ="${message.guild.id}" AND userId ="${whoto.id}"`).then(row1 => {
            //if (row1 !== undefined && row1.dms == "false") return send(`User doesn't want to receive any dms right now.`);
            let userMessage = args.slice(1).join(` `);
            if (!userMessage) return message.channel.send(`Please provide something to dm that user!`);
            message.channel.send(`Message sent!`);
            dmUser.send(`**${message.author.username}** says: ${userMessage}`);
        //});
    } catch (err) {
        console.log(err);
        message.channel.send(`Oh no! An error occurred! \`${err.message}\`.`);
    }
};

module.exports.help = {
    name: "dm",
    aliases: []
};