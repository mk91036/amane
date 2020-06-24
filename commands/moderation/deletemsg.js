module.exports.run = (bot, message, args) => {
    const deleteCount = parseInt(args[0], 10);
    async function clear() {
        // get the delete count, as an actual number.
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            message.reply("You don't have the permissions to use this command!");
        }

        else {
            // Ooooh nice, combined conditions. <3
            if (!deleteCount || deleteCount < 1 || deleteCount > 100)
                return message.channel.send("Please provide a number between 1 and 100 for the number of messages to delete");

            message.delete();
            const fetched = await message.channel.fetchMessages({ limit: deleteCount });
            message.channel.bulkDelete(fetched).catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
        }
    }
    clear();
}

module.exports.help = {
    name: "deletemsg",
    aliases: ['purge', 'clear']
}