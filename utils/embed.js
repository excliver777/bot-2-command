const Discord = require("discord.js")

module.exports.notdev = (message) => {
    let embed = new Discord.MessageEmbed()
        embed.setColor("RANDOM")
        embed.setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        embed.setDescription("get good")
    message.channel.send({ embed: embed })
}

module.exports.notown = (message) => {
    let embed = new Discord.MessageEmbed()
        embed.setColor("RANDOM")
        embed.setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        embed.setDescription("get godd")
    message.channel.send({ embed: embed })
}

module.exports.notper = (message) => {
    let embed = new Discord.MessageEmbed()
        embed.setColor("RANDOM")
        embed.setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        embed.setDescription("I dont have perm")
    message.channel.send({ embed: embed })
}

module.exports.equalPerms = (message) => {
    let embed = new Discord.MessageEmbed()
        embed.setColor("RANDOM")
        embed.setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        embed.setDescription("I need perm")
    message.channel.send({ embed: embed })
}

module.exports.wrongcmd = (message, input) => {
    let embed = new Discord.MessageEmbed()
        embed.setColor("RANDOM")
        embed.setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        embed.setDescription( input +     "is correct command !" )
    message.channel.send({ embed: embed }) 
}

module.exports.sendEmbed = (message, input) => {
    let embed = new Discord.MessageEmbed()
        embed.setColor("RANDOM")
        embed.setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        embed.setDescription(input)
    message.channel.send({ embed: embed })
}
