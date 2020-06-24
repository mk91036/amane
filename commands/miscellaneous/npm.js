const npm = require('npm-module-search');
const Discord = require('discord.js');

module.exports.run = async(client, msg) => {
    return new Promise(async(resolve, reject) => {
        try {
            let args = msg.content.split(' ').splice(1).join(' ');
            if (!args) return msg.reply("Please search a package");
            if (!args[0]) {
                return msg.channel.send(":x: You must specify at least one argument");
            }
            await npm.search(args, async function(err, modules) {
              if (!modules[0]) return resolve(await message.channel.send(":x: Your search did not return any result"));
              var npmembed = new Discord.RichEmbed()
              .setColor("#32CD32")
              .setTitle('NPM')
              .setURL(`https://www.npmjs.com/search?q=${args}`)
              .setThumbnail('https://raw.githubusercontent.com/isaacs/npm/master/html/npm-256-square.png')
              .addField("Name", modules[0].name, true)
              .addField("Version", modules[0].version, true)
              .addField("Author", modules[0].author)
              .addField("Description", modules[0].description)
              .setFooter(`Searched by ${msg.author.username}`);
        
              msg.channel.send( {embed: npmembed});
            })
        } catch (err) {
            reject(client.emit('commandFail', message, err));
        }
    });
};

module.exports.help = {
    name: 'npm',
    aliases: []
};