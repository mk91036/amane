const Discord = require('discord.js');
const request = require('request');

module.exports.run = (bot, message, args) => {

    request('http://pso2emq.flyergo.eu/api/v2/', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            let js = JSON.parse(body);

            try {
                if (js.length > 0) {
                    let embed = {
                        embed: {
                            color: 15844367,
                            title: "",
                            url: "",
                            footer: {
                                icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                                text: "「Another」Team | Powered by pso2emq"
                            },
                            fields: []
                        }
                    }

                    js.slice(0, 1).forEach(function (item) {
                        //
                        if (item['jst'] != 25) {
                            var x = 2;
                            var wib = item['jst'] - 2;
                            var str = item['text'];
                            var res = str.substr(33);

                            embed['embed']['fields'].push({ name: "Upcoming Emergency Quest [ JST Timezone ]", value: res })
                        }
                        else {
                            var x = 2;
                            var wib = item['jst'] - 2;
                            var str = item.text[0];
                            //var res = str.substr(15);
                            if (wib === -2) {

                                embed['embed']['fields'].push({ name: "Upcoming Emergency Quest [ 22 GMT+7 ]", value: `${item['text']}` })
                            }
                            else if (wib === -1) {

                                embed['embed']['fields'].push({ name: "Upcoming Emergency Quest [ 23 GMT+7 ]", value: `${item['text']}` })
                            }
                            else {
                                embed['embed']['fields'].push({ name: "Upcoming Emergency Quest [ " + wib + " GMT+7 ]", value: `${item['text']}` })
                            }
                            //embed['embed']['fields'].push({name: "[ "+wib+" GMT+7 Emergency Quest ]", value: `${item['text']}`})
                        }

                    })
                    message.channel.send(embed)
                }
                else {
                    message.channel.send("404 Not Found")
                }
            }
            catch (err) {
                console.log(err);
            }
        }
    });
}

module.exports.help = {
    name: "eqall",
    aliases: []
}