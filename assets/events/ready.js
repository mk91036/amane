const {bot} = require('../../index');
const config = require("../json/config.json");
const db = require('quick.db');

bot.on("ready", async () => {
    console.log(`${bot.user.username} Logged in!`);
    let statuses = [
        `in ${bot.guilds.size} servers!`,
        `${config.prefix}` + config.activity.game,
        `https://discord.gg/eJeFXcD`
    ]
    if (config.activity.streaming == true) {
        setInterval(function() {
            let status = statuses[Math.floor(Math.random() * statuses.length)];
            bot.user.setActivity(status, {
                type: config.activity.type,
                url: config.activity.streamLink
            });
    
        }, 5000)
    } else {
        bot.user.setActivity(`${config.prefix}` + config.activity.game, {
            type: config.activity.typle
        }); //PLAYING, LISTENING, WATCHING
        bot.user.setStatus(config.activity.status); // dnd, idle, online, invisible
    }
});

// Welcome Stuff
bot.on('guildMemberAdd', member => {
    //Welcome Channel Set
    let i = db.get(`welcomeChannel_${member.guild.id}`)
    if (!member.guild.channels.get(i)) {
        console.log("channel not found")
    }

    //Welcome DM Text
    let o = db.get(`welcomeDMText_${member.guild.id}`)
    if (!o){
        console.log("welcomeDMText not found")
    } else {
        member.send(o.replace('%USER%', member).replace('%GUILD_MEMBER_COUNT%', member.guild.memberCount).replace('%USER_TAG%', member.tag).replace('%GUILD_NAME%', member.guild.name))
    }

    //Welcome Message Text
    let p = db.get(`welcomeText_${member.guild.id}`)
    if (!p) {
        console.log("welcomeText not found")
    } else {
        member.guild.channels.get(i).send(p.replace('%USER%', member).replace('%GUILD_MEMBER_COUNT%', member.guild.memberCount).replace('%USER_TAG%', member.user.tag).replace('%GUILD_NAME%', member.guild.name))
    }

    //Welcome Auto-role
    let r = db.get(`welcomeRole_${member.guild.id}`)
    if(!r || r.toLowerCase() === 'none') return;
    else {
        try {
            member.addRole(member.guild.roles.find(x => x.name === `${r}`));
        } catch(e) {
            console.log('ERROR Invalid auto-role to give member')
        }
    }
});

bot.on('guildMemberRemove', member => {
    //Welcome Leave Channel
    let i = db.get(`welcomeChannel_${member.guild.id}`)
    if (!member.guild.channels.get(i)) {
        console.log("channel not found")
    }

    //Welcome Leave Message
    let o = db.get(`welcomeLeaveText_${member.guild.id}`)
    if (!o) {
        console.log("welcomeLeaveText not found")
    } else {
        member.guild.channels.get(i).send(o.replace('%USER%', member).replace('%GUILD_MEMBER_COUNT%', member.guild.memberCount).replace('%USER_TAG%', member.user.tag).replace('%GUILD_NAME%', member.guild.name))
    }
});