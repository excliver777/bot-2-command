const Discord = require('discord.js')
let request = require('request');
const db = require('quick.db')
let headers = {'Authorization': 'Basic Key', 'Content-Type': 'application/json'};
const config = require('../data/config.json')

module.exports = async message => {
    let balckuser = db.get(`블랙리스트_${message.author.id}`)
    if(message.author.id === `${balckuser}`) {
       return;
    }
    if(message.content.startsWith(config.prefix)) {
        const text = message.content.split(config.prefix)[1]
        const command = message.content.split(config.prefix)[1].split(' ')[0]
        var id = message.author.id
        const commands = require("../commands")
        let keys = Object.keys(commands)
        let str = ""
        for(let k of keys) {
            str += commands[k].callSign +","+ commands[k].helps.uses
        }

        if(str.includes(command) === false) {
            let dataString = "{request: {query: " + text + "}}";

                

            let options = {
                url: 'https://builder.pingpong.us/api/builder/601f915de4b078d8739e3544/integration/v0.2/custom/apikey',
                method: 'POST',
                headers: headers,
                body: dataString
            };
            function callback(error, response, body) {
                if (!error && response.statusCode == 200) {
                    let msg = JSON.parse(body, null, 1).response.replies[0].text;
                    let embed = new (Discord.MessageEmbed)
                    embed.setTitle(msg)
                    embed.setDescription("POWERED BY https://pingpong.us")
                    embed.setAuthor(message.author.username, message.author.avatarURL())
                    embed.setColor("RANDOM")
                    message.channel.send({ embed: embed })
                }
            }
            request(options, callback); 
        }
    }
}
