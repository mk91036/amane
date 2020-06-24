const Sherlock = require('sherlockjs');
const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (client, msg) => {
  let embed = new Discord.RichEmbed()
  const s = Sherlock.parse(msg.content.split(' ').slice(1).join(' '));
  const relative = s.startDate.getTime() - Date.now();
  s.eventTitle = s.eventTitle.replace(/^me to ?|^me ?|^to ?/, '');
  msg.channel.send(`I will remind you to \`${s.eventTitle} ${moment().add(relative, 'ms').fromNow()}\`.`);
  setTimeout(() => {
    let final = `${s.eventTitle}`;
    embed.setAuthor("REMINDER")
      .setColor('RANDOM')
      .setDescription(final)
      .addField('Guild Reminder Was Created In:', msg.guild.name)
      .addField('Channel Reminder Was Created In:', msg.channel.name)
      .setTimestamp()
    msg.author.send({ embed })
  }, relative);
};

exports.help = {
  name: "dmreminder",
  aliases: ['dmrmd']
};