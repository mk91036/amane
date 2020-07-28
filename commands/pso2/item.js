const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require('../../assets/json/config.json');
const utils = require('../../assets/utils/majUtils.js')

module.exports.run = (bot, message, args) => {
    if (!args.join(" ")) return message.channel.send(`Usage: ${config.prefix}item [name]`)
    let item = args.join(" ")

    fetch(`http://db.kakia.org/item/search?name=${encodeURIComponent(item)}`).then(res => res.json()).then(data => {

        embedResults(data).then(embeds => {

            message.channel.send(embeds[0]).then(async (msg) => {
                const collector = await msg.createReactionCollector((reaction, user) => user.id === message.author.id)
                let reactions = ['◀', '▶', '❌'];
                for (let i = 0; i < reactions.length; i++) await msg.react(reactions[i]);

                let timeout = setTimeout(function () {
                    return collector.stop('timeout');
                }, 120000);

                let n = 0;

                collector.on('collect', async (r) => {
                    if (r.emoji.name === '◀') {
                        if (n < 1) {
                            n = embeds.length
                        }
                        clearTimeout(timeout)
                        n--;
                        await msg.edit(embeds[n])
                    } else if (r.emoji.name === "▶") {
                        if (n === embeds.length - 1) {
                            n = -1
                        }
                        clearTimeout(timeout)
                        n++;
                        await msg.edit(embeds[n])
                    } else if (r.emoji.name === "❌") {
                        collector.stop('terminated')
                    }

                    await r.remove(message.author.id); //Delete user reaction

                    timeout = setTimeout(function () {
                        collector.stop('timeout');
                    }, 120000);

                })

                collector.on('end', async (collected, reason) => {
                    msg.clearReactions()
                    if (reason === 'timeout') {
                        return
                    } else if (reason === 'terminated') {
                        return
                    }
                })
            })

        })

    }).catch(() => { message.channel.send(`404 Not Found`) })

}

module.exports.help = {
    name: 'item',
    aliases: []
}

function embedResults(data) {
    return new Promise((resolve, reject) => {
        let embeds = []
        data.forEach(item => {
            let n = new Discord.RichEmbed()
                .setColor('#00b8ff')
                .setDescription(`**EN :** ${item.EnName}\n**JP :** ${item.JpName}`)
                .addField(`Description`, item.EnDesc || item.JpDesc)
                .addField(`Price`, extract(item.PriceInfo))
            embeds.push(n)
        })
        for (let x = 0; x < embeds.length; x++) {
            embeds[x].setFooter(`Page ${x + 1} / ${embeds.length} | Powered by Kakia.org`, `https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024`)
            embeds[x].setTitle(`Item Search Result! : ${embeds.length}`)
        }
        resolve(embeds)
    })
}

function extract(data) {
    if (data.length < 1) return 'No Information.'
    let res = []
    let output;
    data.forEach(d => {
        res.push(`\`Ship ${d.Ship} :  ${utils.commatize(d.Price)} (${d.LastUpdated}) \`\n`)
        res.sort()
    })
    if (res.length > 1) {
        output = res.join(" ")
    } else if (res.length === 1) {
        output = res.toString()
    }
    return output
}