const Discord = require('discord.js');
const request = require('request');

module.exports.run = (bot, message, args) => {
    request('http://kakia.org/pso2_status.json', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const response = JSON.parse(body);

            let embed = {
                embed: {
                    color: 3447050,
                    title: `**Status Phantasy Star Online 2 JP**`,
                    timestamp: new Date(),
                    footer: {
                        icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                        text: "「Another」Team | Powered by Kakia.org"
                    },
                    fields: []
                }
            }

            for (const ship in response) {
                if (ship != "20") {
                    embed.embed.fields.push({ name: response[ship]['Ship'], value: response[ship]['Status'], inline: true })
                }
            }
            return message.channel.send(embed)
        } else {
            message.channel.send("ERROR")
        }
    })
}

module.exports.help = {
    name: "status",
    aliases: []
}