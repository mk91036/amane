const malScraper = require('mal-scraper');
const Discord = require("discord.js");
const config = require('../../assets/json/config.json');

module.exports.run = async (bot, message, args) => {
  if (!args.join(" ")) return message.channel.send(`Usage: ${config.prefix}mal [name]`)
  malScraper.getInfoFromName(args.join(" ").toLowerCase())
    .then((data) => {
      message.channel.send({
        "content": "Results from MyAnimeList search.",
        "embed": {
          "title": `${data.title}`,
          "description": `${data.synopsis}`,
          "url": `${data.url}`,
          "color": 15955699,
          "footer": {
            "icon_url": `${data.picture}`,
            "text": "Powered by MyAnimeList"
          },
          "image": {
            "url": `${data.picture}`
          }
        }
      });
      if (data.trailer) message.channel.send(`Trailer: ${data.trailer}`);
    })
    .catch((err) => console.log(err));
}

module.exports.help = {
  name: "mal",
  aliases: []
}