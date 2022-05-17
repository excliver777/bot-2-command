const { MessageEmbed } = require('discord.js')

module.exports.run = async (yugbot, message, client) => {
    const { guild, channel } = message

    const user = message.mentions.users.first() || message.member.user
    const member = guild.members.cache.get(user.id)

    const embed = new MessageEmbed()
    .setAuthor(`${user.username} this guy information`)
    .setColor('RANDOM')
    .setThumbnail(user.displayAvatarURL())
    .addFields(
        {
            name: 'tag',
            value: user.tag,
        },
        {
            name: ' ID',
            value: user.id,
        },
        {
            name: 'nickname',
            value: member.nickname || 'none'
        },
        {
            name: 'server when you in',
            value: new Date(member.joinedTimestamp).toLocaleDateString(),
        },
        {
            name: 'role number',
            value: member.roles.cache.size - 1,
        }

    )

    channel.send(embed)
}

exports.callSign = ['userinfo', 'ui']
exports.helps = {
    description: 'unser information\n',
    uses: 'user info [@user]'
}