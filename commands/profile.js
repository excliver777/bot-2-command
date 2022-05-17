const discord = require('discord.js')

module.exports.run = async (bot, message) => {
    const user = message.mentions.users.first() || message.author
    if (!user) {
        let embed = new (discord.MessageEmbed)
            embed.setAuthor(message.author.username, message.author.avatarURL())
            embed.setTitle(`${user.username}Profile`)
            embed.setImage(user.displayAvatarURL({ size: 2048, dynamic: true }))
            embed.setColor("#5fe9ff")
            message.channel.send(embed)
    }
    let embed = new (discord.MessageEmbed)
        embed.setAuthor(message.author.username, message.author.avatarURL())
        embed.setTitle(`${user.username}Your profile`)
        embed.setImage(user.displayAvatarURL({ size: 2048, dynamic: true }))
        embed.setColor("#5fe9ff")
        message.channel.send(embed)
}

exports.callSign = ['profile', 'avatar','pfp']
exports.helps = {
    description: 'Show User profile',
    uses: 'pfp [mention]'
}
