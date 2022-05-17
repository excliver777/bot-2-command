const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const client = new Discord.Client

module.exports.run = async (client, message, args) => {
    const embed = new MessageEmbed()
    .setThumbnail(client.user.displayAvatarURL())
    .setTitle('bot information')
    .setColor('RANDOM')
    .addFields(
        {
            name: '📎bot tag',
            value: client.user.tag,
        },
        {
            name: '🆔bot ID',
            value: client.user.id,
        },
        {
            name: '🌐 server',
            value: `has ${client.guilds.cache.size} joined`
        },
        {
            name: '💻 channel',
            value: `has ${client.channels.cache.size} channel`
        },
        {
            name: '👥 Server user',
            value: `has ${client.users.cache.size} users with trolling`,
            inline: true
        }
    )

    await message.channel.send(embed)
}

exports.callSign = ['info', 'bot info', 'botinfo', 'bot info']
exports.helps = {
    description: 'show bot information\n',
    uses: 'info'
}