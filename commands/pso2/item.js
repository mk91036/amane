const Discord = require('discord.js');
const request = require('request');
const config = require('../../assets/json/config.json');

module.exports.run = (bot, message, args) => {
  if (!args.join(" ")) return message.channel.send(`Usage: ${config.prefix}item [name]`)
  let item = message.content.substr(6);
  request(`http://db.kakia.org/item/search?name=${encodeURIComponent(item)}`, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      let js = JSON.parse(body);

      try {
        if (js.length > 0) {
          let embed = {
            embed: {
              color: 0x00bfff,
              title: "",
              url: "",
              footer: {
                icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                text: "「Another」Team | Powered by Kakia.org"
              },
              fields: []
            }
          }

          js.slice(0, 40).forEach(function(item) {
            if (item['PriceInfo'].length > 0) {
              embed['embed']['fields'].push({ name: `EN: ${item['EnName']}`, value: `JP: ${item['JpName']}\n${item['EnDesc']}`, inline: true })
            }
          })
          message.channel.send(embed);
        }
        else {
          message.reply("Sorry, you put wrong item name")
        }
      }
      catch (err) {
        console.log(err);
      }
    }
  });
}

module.exports.help = {
  name: "item",
  aliases: []
}