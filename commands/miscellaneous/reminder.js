const ms = require("ms");

module.exports.run = (bot, message, args) => {
    const time = args[0];
    if (!time) return message.channel.send(`Missing argument: --> time + s (seconds) / m (minutes) / h (hours) / d (days) <-- reminder\nExample: reminder 2m to eat`);
    if (!time.endsWith("s") && !time.endsWith("m") && !time.endsWith("h") && !time.endsWith("d")) return message.channel.send(`Not a valid time.`);
    const actualTime = parseInt(ms(time));
    if (isNaN(actualTime) || actualTime <= parseInt(ms('1s'))) return message.channel.send(`Not a valid time.`);
    if (actualTime >= parseInt(ms("5d"))) return message.channel.send(`Time cannot be higher than 5 days.`);
    const reminder = args.slice(1).join(` `);
    if (!reminder) return message.channel.send(`Missing argument: time --> reminder <--`);
    const rmd = reminder.substr(0, 700);
    message.channel.send(`:alarm_clock: I will remind you in ${time}!`)
    setTimeout(() => {
        message.channel.send(`${message.member}, you asked me to remind you:\n${rmd}`);
    }, actualTime);
};

module.exports.help = {
    name: "reminder",
    aliases: ["rmd"]
};