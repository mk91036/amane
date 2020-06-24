const config = require('../../assets/json/config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.id !== config.ownerID) return message.channel.send("Only bot owner can use this command.");

    let argsresult;
    let mChannel = message.mentions.channels.first()

    message.delete()
    if (mChannel) {
        argsresult = args.slice(1).join(" ")
        mChannel.send(argsresult)
    } else {
        argsresult = args.join(" ")
        message.channel.send(argsresult)
    }

}

module.exports.help = {
    name: "text",
    aliases: []
}