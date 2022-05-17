const Discord = require('discord.js')
const error = require('../utils/embed.js')


module.exports.run = async (yugbot, message) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return error.notper(message)
        let args = message.mentions.members.first()

        const embed = new Discord.MessageEmbed()
        .setTitle("Successfully banned")
        .setDescription(`user get flashed : ${args.user.username}`)
        .setColor("RANDOM")
        .setThumbnail(args.user.displayAvatarURL())
        .setTimestamp()
        .setFooter("Flashed")

        if (!args) {
            return error.wrongcmd(message, "`yoru ban @mention user`")
        }
        let member = message.mentions.members.first()
        member.ban().then(() => {
            return message.channel.send(embed)
        }).catch(() => {
            return error.equalPerms(message)
        })
}

exports.callSign = ['ban', 'flash', 'sabotage', 'ipban','Ban','Flash']
exports.helps = {
    description: 'Kicked out user with flash\n',
    uses: 'ban',
    permission: 'BAN_MEMBERS'
}