const error = require('../utils/embed.js')
const Discord = require('discord.js')

module.exports.run = async (yugbot, message) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) return error.notper(message)
        let args = message.mentions.members.first()
        const embed = new Discord.MessageEmbed()
        .setTitle("that giu successfully fucked off")
        .setColor("RANDOM")
        .setDescription(`fucked off user : ${args.user.username}`)
        .setThumbnail(args.user.displayAvatarURL())
        .setTimestamp()
        .setFooter("kicked!")
    

        if (!args) {
            return error.wrongcmd(message, ".추방 @멘션`")
        }
        let member = message.mentions.members.first()
        member.kick().then(() => {
            return message.channel.send(embed)
        }).catch(() => {
            return error.equalPerms(message)
        })
}

exports.callSign = ['kick', 'fuck off']
exports.helps = {
    description: 'kick out use.\n',
    uses: 'kick [mention]',
    permission: 'KICK_MEMBERS'   
}