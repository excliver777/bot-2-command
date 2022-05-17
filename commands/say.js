const discord = require('discord.js')
const error = require('../utils/embed.js')

module.exports.run = async (yugbot, message, query) => {
    var id = message.author.id
    var sayMessage = query.message.slice(query.command.length + 1).replace("@everyone", "`@everyone`").replace("@here", "`@here`") // 멘션 못하도록 막음

    if (sayMessage == "") {
        return error.wrongcmd(message, "`yoru say [message]`")
    } else {
        let embed = new (discord.MessageEmbed)
        embed.setColor("RANDOM")
        embed.setAuthor(message.author.username, message.author.avatarURL())
        embed.setDescription(sayMessage)
        message.delete()
        id === '764644897591656449'
            ? message.channel.send(sayMessage)
            : message.channel.send({ embed: embed })
    }
}

exports.callSign = ['say']
exports.helps = {
    description: 'I say what you say.\n',
    uses: 'say [message]'
}