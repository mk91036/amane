const Discord = require('discord.js');
const config = require('../../assets/json/config.json');

module.exports.run = async (client, msg, args) => {
    if (msg.content.startsWith(config.prefix + "error 630")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 630",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Your connection to the server was lost.",
                    },
                    {
                        name: "How to Fix",
                        value: "Check your connection and try again."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 203")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 203",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "You cannot be logged into both PSO2 and PSO2es at the same time.",

                    },
                    {
                        name: "How to Fix",
                        value: "Please log out one of PSO2 and PSO2es"
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 220")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 220",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Failed to connect to the server. Please wait a while, then try logging in again.",

                    },
                    {
                        name: "How to Fix",
                        value: "This is typically caused by an ``out of date`` client. Please Update your client."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 221")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 221",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Failed to download the latest version of the game.",

                    },
                    {
                        name: "How to Fix",
                        value: "Please check your connection, then try again."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 222")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 222",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Failed to download the latest version of the game.",

                    },
                    {
                        name: "How to Fix",
                        value: "Please check your connection, then try again."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 223")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 223",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Failed to verify the client version.",

                    },
                    {
                        name: "How to Fix",
                        value: "Please update your client version."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 224")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 224",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "The server could not be found.",

                    },
                    {
                        name: "How to Fix",
                        value: "Please wait a few minutes and then try to connect again."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 240")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 240",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Unable to connect to the server.",

                    },
                    {
                        name: "How to Fix",
                        value: "This usually means your ISP is unable to connect to the game. Just use the super easy [PCP Network Proxy](http://107.191.53.11:9999/config.json) to connect!"
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 242")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 242",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Logged in to many times.",

                    },
                    {
                        name: "How to Fix",
                        value: "Wait a while to attempt to log in again."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 404")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 404",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Girlfriend or Boyfriend not found :sob: ",

                    },
                    {
                        name: "How to Fix",
                        value: "Log out your game and shut down your computer, then go looking for couples."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 249")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 249",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Unable to connect to the server.",

                    },
                    {
                        name: "How to Fix",
                        value: "This usually means you may have to use a PCP Network Proxy or other methods to connect, but may also be related to your internet or proxy host."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 601")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 601",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Server may be under maintenance. Please check the official website for the status of the server.",

                    },
                    {
                        name: "How to Fix",
                        value: "This error means that the server failed to authenticate your SEGA ID. Try logging in again."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 602")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 602",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Please check your SEGA ID then reconnect.",

                    },
                    {
                        name: "How to Fix",
                        value: "The SEDA ID you typed does not exist. Make sure it's correct, and that it is in all lowercase, otherwise it will not work."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 603")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 603",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Please check your SEGA Password then reconnect.",

                    },
                    {
                        name: "How to Fix",
                        value: "Try your password again! If you've forgotten your password, you can reset it [Click Here](https://cha.isao.net/profile_oem/OEM...duct_name=sega)."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 604")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 604",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Login authentification failed more than the allowed times within a certain time frame.",

                    },
                    {
                        name: "How to Fix",
                        value: "You've tried to login with an incorrect password too many times, the system won't let you log in at all. Please wait 1 hour to login"
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 605")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 605",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "The server that manages your Partnership ID may be down for maintenace. Please check with the service company that issued you your Partnership ID.",

                    },
                    {
                        name: "How to Fix",
                        value: "If I had to guess, I'd say a Partnership ID is a special ID that dengeki and other companies can use to login - and this error is saying their access has been revoked/modified by their company."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 606")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 606",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Partnership ID failed to authenticate. Please check with your service company for the Parternship ID details.",

                    },
                    {
                        name: "How to Fix",
                        value: "If I had to guess, I'd say a Partnership ID is a special ID that dengeki and other companies can use to login - and this error is saying their password is incorrect, and to check with the company for the correct password."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 611")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 611",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Server may be under maintenance. Please check the official website for the status of the server.",

                    },
                    {
                        name: "How to Fix",
                        value: "No more information exists on this error yet."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 612")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 612",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "The server is extremely busy at the moment, please reconnect later.",

                    },
                    {
                        name: "How to Fix",
                        value: "No more information exists on this error yet."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 615")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 615",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Failed to move to the selected block because it is full.",

                    },
                    {
                        name: "How to Fix",
                        value: "Keep trying to get in, or simply choose another block."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 616")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 616",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Failed to move to the selected block because it is full.",

                    },
                    {
                        name: "How to Fix",
                        value: "Keep trying to get in, or simply choose another block."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 617")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 617",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Ship/Block could not be found.",

                    },
                    {
                        name: "How to Fix",
                        value: "Try closing/reopening the client to download the latest ship/block list. If this does not fix it, the ship/block may be currently inaccessible due to issues on SEGA's side."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 620")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 620",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Because your connection was terminated abnormally, your data is locked. Please wait 10 minutes and reconnect.",

                    },
                    {
                        name: "How to Fix",
                        value: "This error means you didn't log out or exit in a normal manner, and the system locked your data for it's own stability. Just wait 10 minutes, then log in."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 622")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 622",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "The selected My Room is full, and you could not be moved there.",

                    },
                    {
                        name: "How to Fix",
                        value: "The room you are trying to enter is full. wait few a minutes then try again."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 623")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 623",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Cannot find room server.",

                    },
                    {
                        name: "How to Fix",
                        value: "No more information exists on this error yet."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 624")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 624",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Because of a restriction, you cannot enter this room.",

                    },
                    {
                        name: "How to Fix",
                        value: "No more information exists on this error yet."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 625")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 625",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Because of the limit of people set, you cannot enter your room.",

                    },
                    {
                        name: "How to Fix",
                        value: "Your room is full of people, and you cannot enter it until someone leaves."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 626")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 626",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Due to an issue with the server, you cannot enter your room.",

                    },
                    {
                        name: "How to Fix",
                        value: "Try closing/reopening the client. If this does not fix it, the room server may be currently inaccessible due to issues on SEGA's side."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 627")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 627",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "The right to use ``My room`` has expired, and you cannot be moved there.",

                    },
                    {
                        name: "How to Fix",
                        value: "This occurs when you've lost the right to access your room 3 day pass ran out, your 30 day pass expired, or you're no longer premium. You'll need to earn a 3 day pass through the Fun scratch, or buy a 30 day pass/Premium with Arks Cash to go back in."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 628")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 628",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "The right to use ``My room`` has expired, and you cannot be moved there.",

                    },
                    {
                        name: "How to Fix",
                        value: "This occurs when you've lost the right to access your room 3 day pass ran out, your 30 day pass expired, or you're no longer premium. You'll need to earn a 3 day pass through the Fun scratch, or buy a 30 day pass/Premium with Arks Cash to go back in."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 632")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 632",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "This means your account is already logged in. Common causes are game crashes, sudden exits of the game, and computer crashes.",

                    },
                    {
                        name: "How to Fix",
                        value: "Simply wait a few minutes and try logging in again."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 633")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 633",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "The room you've selected is full, and you cannot enter it.",

                    },
                    {
                        name: "How to Fix",
                        value: "This happens when a certain number of people are in a room - The room won't allow any more people to join until some leave. Simply wait a bit, then try entering it again."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 634")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 634",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Failed to connect to the My Room server.",

                    },
                    {
                        name: "How to Fix",
                        value: "No more information exists on this error yet."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 635")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 635",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "There is a restriction on this my room. Cannot transfer.",

                    },
                    {
                        name: "How to Fix",
                        value: "No more information exists on this error yet."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 636")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 636",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "There is a restriction on this my room. Cannot transfer.",

                    },
                    {
                        name: "How to Fix",
                        value: "No more information exists on this error yet."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 637")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 637",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "A problem on the server's side has occurred, you were unable to warp.",

                    },
                    {
                        name: "How to Fix",
                        value: "No more information exists on this error yet."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 638")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 638",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Because billing has expired, you could not be moved.",

                    },
                    {
                        name: "How to Fix",
                        value: "No more information exists on this error yet."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 639")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 639",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Because billing has expired, you could not be moved.",

                    },
                    {
                        name: "How to Fix",
                        value: "No more information exists on this error yet."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 640")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 640",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "The game did not successfully update. Please run a file check. If necessary, please un-install and re-install.",

                    },
                    {
                        name: "How to Fix",
                        value: "Open the PSO2 Tweaker and click ``Check for PSO2 Updates`` to fix this. or Update via Launcher."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 641")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 641",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "The game did not successfully update. Please run a file check. If necessary, please un-install and re-install.",

                    },
                    {
                        name: "How to Fix",
                        value: "Open the PSO2 Tweaker and click ``Check for PSO2 Updates`` to fix this. or Update via Launcher."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 642")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 642",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Ship/Block could not be found.",

                    },
                    {
                        name: "How to Fix",
                        value: "Try closing/reopening the client to download the latest ship/block list. If this does not fix it, the ship/block may be currently inaccessible due to issues on SEGA's side."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 643")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 643",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Due to limitations on the selected block, you could not be moved.",

                    },
                    {
                        name: "How to Fix",
                        value: "This happens when the block you are trying to enter is full. Choose another block, or wait a few minutes for people to leave it."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 644")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 644",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "There was a problem with the server, couldn't move to the specified block.",

                    },
                    {
                        name: "How to Fix",
                        value: "No more information exists on this error yet."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 645")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 645",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Failed to transfer to the selected server, it's full.",

                    },
                    {
                        name: "How to Fix",
                        value: "Select a different server to transfer to, or wait until the server allows more transfers."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 646")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 646",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Ship/Block could not be found.",

                    },
                    {
                        name: "How to Fix",
                        value: "Try closing/reopening the client to download the latest ship/block list. If this does not fix it, the ship/block may be currently inaccessible due to issues on SEGA's side."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 647")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 647",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "And issue occurred server side - You could not be moved.",

                    },
                    {
                        name: "How to Fix",
                        value: "No more information exists on this error yet."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 648")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 648",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Could not be moved to the selected server because of a problem with the system.",

                    },
                    {
                        name: "How to Fix",
                        value: "No more information exists on this error yet."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 649")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 649",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Server is under Maintenance.",

                    },
                    {
                        name: "How to Fix",
                        value: "Wait until the server comes back up!."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 650")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 650",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Computer is not authorized for use with this account.",

                    },
                    {
                        name: "How to Fix",
                        value: "This error occurs the first time you attempt to log on to PSO2 using a computer that you've never used before, similar to Steam Guard. It will give you this error, then return you to the login screen. Login with the same information, and SEGA will send an e-mail to the registered address you used when you created the account. You'll need to open the e-mail and copy the code inside. Then return to PSO2 and paste the code to verify account ownership, and allow access."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 651")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 651",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Authorization Code timeout.",

                    },
                    {
                        name: "How to Fix",
                        value: "This happens when you get error 650, and take too long to put in the code you receive in the e-mail. You'll need to repeat the steps of alternate error 650 in order to login."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 652")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 652",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "The team you belong to does not have a team room. Cannot transfer to team room.",

                    },
                    {
                        name: "How to Fix",
                        value: "Your team will need to purchase a team room before you can visit it."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 653")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 653",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Because of a communication error, you cannot be moved to the team room. Please wait a while and try again.",

                    },
                    {
                        name: "How to Fix",
                        value: "No more information exists on this error yet."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 654")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 654",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Because you do not have administrator privileges, you are unable to enter the team room.",

                    },
                    {
                        name: "How to Fix",
                        value: "No more information exists on this error yet."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 655")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 655",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Because the team room is full, you are unable to warp there.",

                    },
                    {
                        name: "How to Fix",
                        value: "Wait a few minutes for the some of your team members to leave, then try again."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 656")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 656",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Because the system could not locate the team room, you could not be moved.",

                    },
                    {
                        name: "How to Fix",
                        value: "No more information exists on this error yet."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 657")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 657",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Because the system could not locate the team room, you could not be moved.",

                    },
                    {
                        name: "How to Fix",
                        value: "No more information exists on this error yet."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 658")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 658",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "The team you belong to does not have a team room. Cannot transfer to team room.",

                    },
                    {
                        name: "How to Fix",
                        value: "Your team will need to purchase a team room before you can visit it."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 659")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 659",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Because of a communication error, you cannot move the team room. Please wait a while and try again.",

                    },
                    {
                        name: "How to Fix",
                        value: "No more information exists on this error yet."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 660")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 660",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Because you do not have administrator privileges, you are unable to enter the team room.",

                    },
                    {
                        name: "How to Fix",
                        value: "No more information exists on this error yet."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 674")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 674",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Go to the SEGA ID box and start typing, making sure it's typing in english, not japanese. My issue was that the Japanese IME was going nuts.",

                    },
                    {
                        name: "How to Fix",
                        value: "Fix it so you're typing in english."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 678")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 678",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Need to accept the Terms of Use.",

                    },
                    {
                        name: "How to Fix",
                        value: "Head to [Click Here](https://cha.isao.net/profile_oem/OEMLogin.php?product_name=sega) and accept the terms of use for PSO2."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 700")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 700",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "You can only move to this block if you have the premium set. You do not have an activated ticket, or your premium set has expired. You cannot be moved to this block.",

                    },
                    {
                        name: "How to Fix",
                        value: "Buy the premium set."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 704")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 704",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "You cannot be moved to this block until you have acquired a specific title. Please check the official website for details.",

                    },
                    {
                        name: "How to Fix",
                        value: "For this, you do not meet the requirements to connect to Expert Blocks. You need to complete\n1). Stages 1-5 of the solo XQ Heaven and Hell.\n2). Weapon *13 +35\n3). Armor *12 +10 Use them same time."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 810")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 810",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "If you cannot behave in a correct manner in the future, your use of the service may be in jeopardy. Please refer to the Phantasy Star Online 2 contact page if you have any questions/inquires.",

                    },
                    {
                        name: "How to Fix",
                        value: "This means that someone complained about you, and this is management warning you to behave."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 811")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 811",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "If you cannot behave properly from now on, we will terminate your access to the server. Please refer to the Phantasy Star Online 2 contact page if you have any questions/inquires.",

                    },
                    {
                        name: "How to Fix",
                        value: "This is management telling you to shape up, or they'll ban you. This is your final warning before being suspended permanently."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 812")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 812",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "You have been banned from using the service. Please refer to the Phantasy Star Online 2 contact page if you have any questions/inquires.",

                    },
                    {
                        name: "How to Fix",
                        value: "You have been banned, and your access to the server on your SEGA ID is permanently disallowed."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 813")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 813",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Your access to the Phantasy Star Online 2 server has been temporarily suspended until any time. Please refer to the Phantasy Star Online 2 contact page if you have any questions/inquires.",

                    },
                    {
                        name: "How to Fix",
                        value: "Simply wait until you're allowed back on. And behave this time!"
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 814")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 814",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "We are more than happy to stop you from connecting to our service. Please refer to the Phantasy Star Online 2 contact page if you have any questions/inquires.",

                    },
                    {
                        name: "How to Fix",
                        value: "You have been banned, and your access to the server on your SEGA ID is permanently disallowed."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 815")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 815",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "We are more than happy to stop you from connecting to our service. Please refer to the Phantasy Star Online 2 contact page if you have any questions/inquires.",

                    },
                    {
                        name: "How to Fix",
                        value: "You have been banned, and your access to the server on your SEGA ID is permanently disallowed."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 816")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 816",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "We have taken the liberty of terminating your service.",

                    },
                    {
                        name: "How to Fix",
                        value: "From what I can tell, this is a special error that says the Japanese equivalent of **We're happy to ban you, you deserve it, get out.**"
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error 818")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR 818",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "We have taken the liberty of terminating your service temporarily. Your access will be restored in few hours.",

                    },
                    {
                        name: "How to Fix",
                        value: "This is a variant of error 816 in which you're only temporarily banned."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error np0") || (msg.content.startsWith(config.prefix + "error NP0"))) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR np0",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Generic GameGuard error which occurs when GameGuard files are corrupt.",

                    },
                    {
                        name: "How to Fix",
                        value: "Open the Tweaker > click [!] Button > Troubleshooting > Fix GameGuard Errors."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error np1002") || (msg.content.startsWith(config.prefix + "error NP1002"))) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR np1002",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [{
                    name: "Description",
                    value: "Your system files are either outdated, corrupt, or newer than GameGuard expects.",
                },
                {
                    name: "How to Fix",
                    value: "1) Reset GameGuard using the Tweaker ([!] Button > Troubleshooting > Fix GameGuard errors) to ensure you have the latest version.\n2) Make sure pso2.exe and the entire pso2_bin folder are set as exceptions in your Antivirus.\n3) Disable the Windows 10 insider program.\n4) Run Windows Update and ensure your PC is up-to date.\n5) Check if you have any of the programs on this list: https://goo.gl/xET0tr \n6) Open command prompt as administrator and do sfc /scannow to fix system files.",
                },
                {
                    name: "Note",
                    value: "1) If you are using a pirated version of Windows it is possible that GameGuard has found your activation crack.\n2) SEGA has dropped support for Windows XP, Vista, early versions of Windows 7, and Windows 8.0 (not 8.1)",
                }]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error np1003") || (msg.content.startsWith(config.prefix + "error NP1003"))) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR np1003",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Gameguard detected a program it doesn't like. Please try closing all open programs and try again.",

                    },
                    {
                        name: "How to Fix",
                        value: "Bad Applications found: [here](https://goo.gl/xET0tr)"
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error np1004") || (msg.content.startsWith(config.prefix + "error NP1004"))){
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR np1004",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "Invalid Access.",

                    },
                    {
                        name: "How to Fix",
                        value: "A program attempted to modify PSO2 or Gameguard in a way that Gameguard doesn't allow. Please close all open programs, disable all anti-virus programs, ``all firewalls``,``boosters``, ``graphical enhancers``, or any other types of programs that change other programs and try again.\nBad Applications found: [here](https://goo.gl/xET0tr)"
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error np1013") || (msg.content.startsWith(config.prefix + "error NP1013"))) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR np1013",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "GameGuard has found an application it does not like on your PC.",

                    },
                    {
                        name: "How to Fix",
                        value: "List of applications that are known to cause issues with PSO2.\nBad Applications found: [here](https://goo.gl/xET0tr)"
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error np1014") || (msg.content.startsWith(config.prefix + "error NP1014"))) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR np1014",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [
                    {
                        name: "Description",
                        value: "GameGuard tamper failsafe.",

                    },
                    {
                        name: "How to Fix",
                        value: "Gameguard has detected a possible hack on itself and refuses to load. This can typically be solved by going to ``Troubleshooting -> Fix GameGuard Errors`` in the PSO2 Tweaker."
                    }
                ]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error np1015") || (msg.content.startsWith(config.prefix + "error NP1015"))) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR np1015",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [{
                    name: "Description",
                    value: "There is an issue with your plugins.",
                },
                {
                    name: "How to Fix",
                    value: "1) Make sure pso2.exe and the entire pso2_bin folder are set as exceptions in your Antivirus.\n2) Check if you have any of the programs on this list: https://goo.gl/xET0tr \n3) Delete pso2h.dll and the Plugins folder from pso2_bin then re-open the Tweaker and launch.",
                },
                {
                    name: "Note",
                    value: "If you also use the SEA version of PSO2 then your GameGuard will conflict with the older version present in SEA.",
                }]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error blank" || "error blank screen") || msg.content.startsWith(config.prefix + "error black" || "error black screen")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR Blank/Black Screen",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [{
                    name: "Description",
                    value: "You get blank/black screen",
                },
                {
                    name: "How to Fix",
                    value: "1) Open the Tweaker > click [!] Button > Troubleshooting > Check for Old/Missing files.\n2) Tweaker > Click [!] Button > Install English Patches (New Method).\n3) Tweaker > Plugins > Force plugin check.",
                }]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error pso2") || (msg.content.startsWith(config.prefix + "error pso2.exe"))) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR PSO2.exe",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [{
                    name: "Description",
                    value: "PSO2 Not Launching",
                },
                {
                    name: "How to Fix",
                    value: "1) Open the [!] Button > Troubleshooting > Fix PSO2 EXEs.\n2) Open the [!] Button > Troubleshooting > Fix GameGuard Errors.",
                }]
            }
        });
    }
    else if (msg.content.startsWith(config.prefix + "error gameguard")) {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR Gameguard",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [{
                    name: "Description",
                    value: "Gameguard error or No Respond",
                },
                {
                    name: "How to Fix",
                    value: "1) Download Gameguard [HERE](https://drive.google.com/open?id=1PKx5cml1UP3j0zdXE_MNOKiFJBN3xTOR).\n2) Replace folder ``gameguard`` into ``pso2_bin``",
                }]
            }
        });
    }
    else {
        return msg.channel.send({
            embed: {
                color: 11459135,
                title: "ERROR",
                footer: {
                    icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                    text: "「Another」Team | Powered by 「Another」"
                },
                fields: [{
                    name: "Description",
                    value: "No more information exists on this error yet.",
                }]
            }
        });
    }
}

module.exports.help = {
    name: "error",
    aliases: []
}