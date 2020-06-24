const request = require('request');
const config = require('../../assets/json/config.json');

module.exports.run = (bot, message, args) => {
    if (!args.join(" ")) return message.channel.send(`Usage: ${config.prefix}price [name]`)
    let item = message.content.substr(7);
    request(`http://db.kakia.org/item/search?name=${encodeURIComponent(item)}`, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let js = JSON.parse(body);

            try {
                if (js.length > 0) {
                    let embed = {
                        embed: {
                            color: 16665157,
                            title: "",
                            url: "",
                            footer: {
                                icon_url: "https://cdn.discordapp.com/icons/504020939827314689/c40a838d1a9b0d3a3c197b71ff243462.webp?size=1024",
                                text: "「Another」Team | Powered by Kakia.org"
                            },
                            fields: []
                        }
                    }

                    js.slice(0, 1).forEach(function (item) {
                        if (item['PriceInfo'].find(x => x['Ship'] === 1) && item['PriceInfo'].find(x => x['Ship'] === 2) && item['PriceInfo'].find(x => x['Ship'] === 3) && item['PriceInfo'].find(x => x['Ship'] === 4) && item['PriceInfo'].find(x => x['Ship'] === 5) && item['PriceInfo'].find(x => x['Ship'] === 6) && item['PriceInfo'].find(x => x['Ship'] === 7) && item['PriceInfo'].find(x => x['Ship'] === 8) && item['PriceInfo'].find(x => x['Ship'] === 9) && item['PriceInfo'].find(x => x['Ship'] === 10)) {
                            //Success
                            //embed['embed']['fields'].push({name: "Success", value: "Here are your search results"})
                            //Engname
                            embed['embed']['fields'].push({ name: "Eng Name", value: `\`\`${item['EnName']}\`\``, inline: true })
                            //JpName
                            embed['embed']['fields'].push({ name: "JP Name", value: `\`\`${item['JpName']}\`\``, inline: true })
                            //Last Check
                            embed['embed']['fields'].push({ name: "Last Check", value: `${item['PriceInfo'].find(x => x['Ship'] === 1)['LastUpdated'].valueOf().replace(/\B(?=(\d{3})+(?!\d))/g, "")}` })
                            //Ship01
                            embed['embed']['fields'].push({ name: "Ship 1", value: `${item['PriceInfo'].find(x => x['Ship'] === 1)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //Ship02
                            embed['embed']['fields'].push({ name: "Ship 2", value: `${item['PriceInfo'].find(x => x['Ship'] === 2)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 03
                            embed['embed']['fields'].push({ name: "Ship 3", value: `${item['PriceInfo'].find(x => x['Ship'] === 3)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 04
                            embed['embed']['fields'].push({ name: "Ship 4", value: `${item['PriceInfo'].find(x => x['Ship'] === 4)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 05
                            embed['embed']['fields'].push({ name: "Ship 5", value: `${item['PriceInfo'].find(x => x['Ship'] === 5)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 06
                            embed['embed']['fields'].push({ name: "Ship 6", value: `${item['PriceInfo'].find(x => x['Ship'] === 6)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 07
                            embed['embed']['fields'].push({ name: "Ship 7", value: `${item['PriceInfo'].find(x => x['Ship'] === 7)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 08
                            embed['embed']['fields'].push({ name: "Ship 8", value: `${item['PriceInfo'].find(x => x['Ship'] === 8)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 09
                            embed['embed']['fields'].push({ name: "Ship 9", value: `${item['PriceInfo'].find(x => x['Ship'] === 9)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 10
                            embed['embed']['fields'].push({ name: "Ship 10", value: `${item['PriceInfo'].find(x => x['Ship'] === 10)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                        }
                        else if (item['PriceInfo'].find(x => x['Ship'] === 1) && item['PriceInfo'].find(x => x['Ship'] === 3) && item['PriceInfo'].find(x => x['Ship'] === 4) && item['PriceInfo'].find(x => x['Ship'] === 5) && item['PriceInfo'].find(x => x['Ship'] === 7) && item['PriceInfo'].find(x => x['Ship'] === 8) && item['PriceInfo'].find(x => x['Ship'] === 9) && item['PriceInfo'].find(x => x['Ship'] === 10)) {
                            //Engname
                            embed['embed']['fields'].push({ name: "Eng Name", value: `${item['EnName']}`, inline: true })
                            //JpName
                            embed['embed']['fields'].push({ name: "JP Name", value: `${item['JpName']}`, inline: true })
                            //Last Check
                            embed['embed']['fields'].push({ name: "Last Check", value: `${item['PriceInfo'].find(x => x['Ship'] === 1)['LastUpdated'].valueOf().replace(/\B(?=(\d{3})+(?!\d))/g, "")}` })
                            //Ship01
                            embed['embed']['fields'].push({ name: "Ship 1", value: `${item['PriceInfo'].find(x => x['Ship'] === 1)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //Ship02
                            embed['embed']['fields'].push({ name: "Ship 2", value: `Search yielded no results`, inline: true })
                            //ship 03
                            embed['embed']['fields'].push({ name: "Ship 3", value: `${item['PriceInfo'].find(x => x['Ship'] === 3)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 04
                            embed['embed']['fields'].push({ name: "Ship 4", value: `${item['PriceInfo'].find(x => x['Ship'] === 4)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 05
                            embed['embed']['fields'].push({ name: "Ship 5", value: `${item['PriceInfo'].find(x => x['Ship'] === 5)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 06
                            embed['embed']['fields'].push({ name: "Ship 6", value: `Search yielded no results`, inline: true })
                            //ship 07
                            embed['embed']['fields'].push({ name: "Ship 7", value: `${item['PriceInfo'].find(x => x['Ship'] === 7)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 08
                            embed['embed']['fields'].push({ name: "Ship 8", value: `${item['PriceInfo'].find(x => x['Ship'] === 8)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 09
                            embed['embed']['fields'].push({ name: "Ship 9", value: `${item['PriceInfo'].find(x => x['Ship'] === 9)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 10
                            embed['embed']['fields'].push({ name: "Ship 10", value: `${item['PriceInfo'].find(x => x['Ship'] === 10)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                        }
                        else if (item['PriceInfo'].find(x => x['Ship'] === 2) && item['PriceInfo'].find(x => x['Ship'] === 3) && item['PriceInfo'].find(x => x['Ship'] === 4) && item['PriceInfo'].find(x => x['Ship'] === 5) && item['PriceInfo'].find(x => x['Ship'] === 6) && item['PriceInfo'].find(x => x['Ship'] === 7) && item['PriceInfo'].find(x => x['Ship'] === 8) && item['PriceInfo'].find(x => x['Ship'] === 9) && item['PriceInfo'].find(x => x['Ship'] === 10)) {
                            //Engname
                            embed['embed']['fields'].push({ name: "Eng Name", value: `${item['EnName']}`, inline: true })
                            //JpName
                            embed['embed']['fields'].push({ name: "JP Name", value: `${item['JpName']}`, inline: true })
                            //Last Check
                            embed['embed']['fields'].push({ name: "Last Check", value: `${item['PriceInfo'].find(x => x['Ship'] === 2)['LastUpdated'].valueOf().replace(/\B(?=(\d{3})+(?!\d))/g, "")}` })
                            //Ship01
                            embed['embed']['fields'].push({ name: "Ship 1", value: `Search yielded no results`, inline: true })
                            //Ship02
                            embed['embed']['fields'].push({ name: "Ship 2", value: `${item['PriceInfo'].find(x => x['Ship'] === 2)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 03
                            embed['embed']['fields'].push({ name: "Ship 3", value: `${item['PriceInfo'].find(x => x['Ship'] === 3)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 04
                            embed['embed']['fields'].push({ name: "Ship 4", value: `${item['PriceInfo'].find(x => x['Ship'] === 4)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 05
                            embed['embed']['fields'].push({ name: "Ship 5", value: `${item['PriceInfo'].find(x => x['Ship'] === 5)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 06
                            embed['embed']['fields'].push({ name: "Ship 6", value: `${item['PriceInfo'].find(x => x['Ship'] === 6)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 07
                            embed['embed']['fields'].push({ name: "Ship 7", value: `${item['PriceInfo'].find(x => x['Ship'] === 7)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 08
                            embed['embed']['fields'].push({ name: "Ship 8", value: `${item['PriceInfo'].find(x => x['Ship'] === 8)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 09
                            embed['embed']['fields'].push({ name: "Ship 9", value: `${item['PriceInfo'].find(x => x['Ship'] === 9)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 10
                            embed['embed']['fields'].push({ name: "Ship 10", value: `${item['PriceInfo'].find(x => x['Ship'] === 10)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                        }
                        else if (item['PriceInfo'].find(x => x['Ship'] === 2) && item['PriceInfo'].find(x => x['Ship'] === 3) && item['PriceInfo'].find(x => x['Ship'] === 5) && item['PriceInfo'].find(x => x['Ship'] === 6) && item['PriceInfo'].find(x => x['Ship'] === 8) && item['PriceInfo'].find(x => x['Ship'] === 9) && item['PriceInfo'].find(x => x['Ship'] === 10)) {
                            //Engname
                            embed['embed']['fields'].push({ name: "Eng Name", value: `${item['EnName']}`, inline: true })
                            //JpName
                            embed['embed']['fields'].push({ name: "JP Name", value: `${item['JpName']}`, inline: true })
                            //Last Check
                            embed['embed']['fields'].push({ name: "Last Check", value: `${item['PriceInfo'].find(x => x['Ship'] === 2)['LastUpdated'].valueOf().replace(/\B(?=(\d{3})+(?!\d))/g, "")}` })
                            //Ship01
                            embed['embed']['fields'].push({ name: "Ship 1", value: `Search yielded no results`, inline: true })
                            //Ship02
                            embed['embed']['fields'].push({ name: "Ship 2", value: `${item['PriceInfo'].find(x => x['Ship'] === 2)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 03
                            embed['embed']['fields'].push({ name: "Ship 3", value: `${item['PriceInfo'].find(x => x['Ship'] === 3)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 04
                            embed['embed']['fields'].push({ name: "Ship 4", value: `Search yielded no results`, inline: true })
                            //ship 05
                            embed['embed']['fields'].push({ name: "Ship 5", value: `${item['PriceInfo'].find(x => x['Ship'] === 5)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 06
                            embed['embed']['fields'].push({ name: "Ship 6", value: `${item['PriceInfo'].find(x => x['Ship'] === 6)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 07
                            embed['embed']['fields'].push({ name: "Ship 7", value: `Search yielded no results`, inline: true })
                            //ship 08
                            embed['embed']['fields'].push({ name: "Ship 8", value: `${item['PriceInfo'].find(x => x['Ship'] === 8)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 09
                            embed['embed']['fields'].push({ name: "Ship 9", value: `${item['PriceInfo'].find(x => x['Ship'] === 9)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 10
                            embed['embed']['fields'].push({ name: "Ship 10", value: `${item['PriceInfo'].find(x => x['Ship'] === 10)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                        }
                        else if (item['PriceInfo'].find(x => x['Ship'] === 1) && item['PriceInfo'].find(x => x['Ship'] === 2) && item['PriceInfo'].find(x => x['Ship'] === 3) && item['PriceInfo'].find(x => x['Ship'] === 4) && item['PriceInfo'].find(x => x['Ship'] === 6) && item['PriceInfo'].find(x => x['Ship'] === 9) && item['PriceInfo'].find(x => x['Ship'] === 10)) {
                            //Engname
                            embed['embed']['fields'].push({ name: "Eng Name", value: `${item['EnName']}`, inline: true })
                            //JpName
                            embed['embed']['fields'].push({ name: "JP Name", value: `${item['JpName']}`, inline: true })
                            //Last Check
                            embed['embed']['fields'].push({ name: "Last Check", value: `${item['PriceInfo'].find(x => x['Ship'] === 1)['LastUpdated'].valueOf().replace(/\B(?=(\d{3})+(?!\d))/g, "")}` })
                            //Ship01
                            embed['embed']['fields'].push({ name: "Ship 1", value: `${item['PriceInfo'].find(x => x['Ship'] === 1)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //Ship02
                            embed['embed']['fields'].push({ name: "Ship 2", value: `${item['PriceInfo'].find(x => x['Ship'] === 2)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 03
                            embed['embed']['fields'].push({ name: "Ship 3", value: `${item['PriceInfo'].find(x => x['Ship'] === 3)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 04
                            embed['embed']['fields'].push({ name: "Ship 4", value: `${item['PriceInfo'].find(x => x['Ship'] === 4)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 05
                            embed['embed']['fields'].push({ name: "Ship 5", value: `Search yielded no results`, inline: true })
                            //ship 06
                            embed['embed']['fields'].push({ name: "Ship 6", value: `${item['PriceInfo'].find(x => x['Ship'] === 6)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 07
                            embed['embed']['fields'].push({ name: "Ship 7", value: `Search yielded no results`, inline: true })
                            //ship 08
                            embed['embed']['fields'].push({ name: "Ship 8", value: `Search yielded no results`, inline: true })
                            //ship 09
                            embed['embed']['fields'].push({ name: "Ship 9", value: `${item['PriceInfo'].find(x => x['Ship'] === 9)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 10
                            embed['embed']['fields'].push({ name: "Ship 10", value: `${item['PriceInfo'].find(x => x['Ship'] === 10)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                        }
                        else if (item['PriceInfo'].find(x => x['Ship'] === 1) && item['PriceInfo'].find(x => x['Ship'] === 2) && item['PriceInfo'].find(x => x['Ship'] === 3) && item['PriceInfo'].find(x => x['Ship'] === 4) && item['PriceInfo'].find(x => x['Ship'] === 5) && item['PriceInfo'].find(x => x['Ship'] === 6) && item['PriceInfo'].find(x => x['Ship'] === 7) && item['PriceInfo'].find(x => x['Ship'] === 8) && item['PriceInfo'].find(x => x['Ship'] === 10)) {
                            //Engname
                            embed['embed']['fields'].push({ name: "Eng Name", value: `${item['EnName']}`, inline: true })
                            //JpName
                            embed['embed']['fields'].push({ name: "JP Name", value: `${item['JpName']}`, inline: true })
                            //Last Check
                            embed['embed']['fields'].push({ name: "Last Check", value: `${item['PriceInfo'].find(x => x['Ship'] === 1)['LastUpdated'].valueOf().replace(/\B(?=(\d{3})+(?!\d))/g, "")}` })
                            //Ship01
                            embed['embed']['fields'].push({ name: "Ship 1", value: `${item['PriceInfo'].find(x => x['Ship'] === 1)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //Ship02
                            embed['embed']['fields'].push({ name: "Ship 2", value: `${item['PriceInfo'].find(x => x['Ship'] === 2)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 03
                            embed['embed']['fields'].push({ name: "Ship 3", value: `${item['PriceInfo'].find(x => x['Ship'] === 3)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 04
                            embed['embed']['fields'].push({ name: "Ship 4", value: `${item['PriceInfo'].find(x => x['Ship'] === 4)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 05
                            embed['embed']['fields'].push({ name: "Ship 5", value: `${item['PriceInfo'].find(x => x['Ship'] === 5)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 06
                            embed['embed']['fields'].push({ name: "Ship 6", value: `${item['PriceInfo'].find(x => x['Ship'] === 6)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 07
                            embed['embed']['fields'].push({ name: "Ship 7", value: `${item['PriceInfo'].find(x => x['Ship'] === 7)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 08
                            embed['embed']['fields'].push({ name: "Ship 8", value: `${item['PriceInfo'].find(x => x['Ship'] === 8)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 09
                            embed['embed']['fields'].push({ name: "Ship 9", value: `Search yielded no results`, inline: true })
                            //ship 10
                            embed['embed']['fields'].push({ name: "Ship 10", value: `${item['PriceInfo'].find(x => x['Ship'] === 10)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                        }
                        else if (item['PriceInfo'].find(x => x['Ship'] === 1) && item['PriceInfo'].find(x => x['Ship'] === 2) && item['PriceInfo'].find(x => x['Ship'] === 3) && item['PriceInfo'].find(x => x['Ship'] === 4) && item['PriceInfo'].find(x => x['Ship'] === 5) && item['PriceInfo'].find(x => x['Ship'] === 6) && item['PriceInfo'].find(x => x['Ship'] === 7) && item['PriceInfo'].find(x => x['Ship'] === 8) && item['PriceInfo'].find(x => x['Ship'] === 9)) {
                            //Engname
                            embed['embed']['fields'].push({ name: "Eng Name", value: `${item['EnName']}`, inline: true })
                            //JpName
                            embed['embed']['fields'].push({ name: "JP Name", value: `${item['JpName']}`, inline: true })
                            //Last Check
                            embed['embed']['fields'].push({ name: "Last Check", value: `${item['PriceInfo'].find(x => x['Ship'] === 1)['LastUpdated'].valueOf().replace(/\B(?=(\d{3})+(?!\d))/g, "")}` })
                            //Ship01
                            embed['embed']['fields'].push({ name: "Ship 1", value: `${item['PriceInfo'].find(x => x['Ship'] === 1)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //Ship02
                            embed['embed']['fields'].push({ name: "Ship 2", value: `${item['PriceInfo'].find(x => x['Ship'] === 2)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 03
                            embed['embed']['fields'].push({ name: "Ship 3", value: `${item['PriceInfo'].find(x => x['Ship'] === 3)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 04
                            embed['embed']['fields'].push({ name: "Ship 4", value: `${item['PriceInfo'].find(x => x['Ship'] === 4)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 05
                            embed['embed']['fields'].push({ name: "Ship 5", value: `${item['PriceInfo'].find(x => x['Ship'] === 5)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 06
                            embed['embed']['fields'].push({ name: "Ship 6", value: `${item['PriceInfo'].find(x => x['Ship'] === 6)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 07
                            embed['embed']['fields'].push({ name: "Ship 7", value: `${item['PriceInfo'].find(x => x['Ship'] === 7)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 08
                            embed['embed']['fields'].push({ name: "Ship 8", value: `${item['PriceInfo'].find(x => x['Ship'] === 8)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 09
                            embed['embed']['fields'].push({ name: "Ship 9", value: `${item['PriceInfo'].find(x => x['Ship'] === 9)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 10
                            embed['embed']['fields'].push({ name: "Ship 10", value: `Search yielded no results`, inline: true })
                        }
                        else if (item['PriceInfo'].find(x => x['Ship'] === 1) && item['PriceInfo'].find(x => x['Ship'] === 2) && item['PriceInfo'].find(x => x['Ship'] === 4) && item['PriceInfo'].find(x => x['Ship'] === 5) && item['PriceInfo'].find(x => x['Ship'] === 6) && item['PriceInfo'].find(x => x['Ship'] === 7) && item['PriceInfo'].find(x => x['Ship'] === 8) && item['PriceInfo'].find(x => x['Ship'] === 10)) {
                            //Success
                            //embed['embed']['fields'].push({name: "Success", value: "Here are your search results"})
                            //Engname
                            embed['embed']['fields'].push({ name: "Eng Name", value: `${item['EnName']}`, inline: true })
                            //JpName
                            embed['embed']['fields'].push({ name: "JP Name", value: `${item['JpName']}`, inline: true })
                            //Last Check
                            embed['embed']['fields'].push({ name: "Last Check", value: `${item['PriceInfo'].find(x => x['Ship'] === 1)['LastUpdated'].valueOf().replace(/\B(?=(\d{3})+(?!\d))/g, "")}` })
                            //Ship01
                            embed['embed']['fields'].push({ name: "Ship 1", value: `${item['PriceInfo'].find(x => x['Ship'] === 1)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //Ship02
                            embed['embed']['fields'].push({ name: "Ship 2", value: `${item['PriceInfo'].find(x => x['Ship'] === 2)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 03
                            embed['embed']['fields'].push({ name: "Ship 3", value: `Search yielded no results`, inline: true })
                            //ship 04
                            embed['embed']['fields'].push({ name: "Ship 4", value: `${item['PriceInfo'].find(x => x['Ship'] === 4)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 05
                            embed['embed']['fields'].push({ name: "Ship 5", value: `${item['PriceInfo'].find(x => x['Ship'] === 5)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 06
                            embed['embed']['fields'].push({ name: "Ship 6", value: `${item['PriceInfo'].find(x => x['Ship'] === 6)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 07
                            embed['embed']['fields'].push({ name: "Ship 7", value: `${item['PriceInfo'].find(x => x['Ship'] === 7)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 08
                            embed['embed']['fields'].push({ name: "Ship 8", value: `${item['PriceInfo'].find(x => x['Ship'] === 8)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                            //ship 09
                            embed['embed']['fields'].push({ name: "Ship 9", value: `Search yielded no results`, inline: true })
                            //ship 10
                            embed['embed']['fields'].push({ name: "Ship 10", value: `${item['PriceInfo'].find(x => x['Ship'] === 10)['Price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`, inline: true })
                        }
                        else {
                            embed['embed']['fields'].push({ name: "ERROR 404", value: `**Sorry, Price not Found!**` })
                        }

                    })

                    message.channel.send(embed)
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
    name: "price",
    aliases: []
}