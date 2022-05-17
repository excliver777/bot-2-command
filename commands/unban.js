const error = require('../utils/embed.js')
const Discord = require('discord.js')

module.exports.run = async (yugbot, message) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return error.notper(message)
        let args = message.content.slice(" ").split(" ")
        let id = args.slice(1).join(" ")
        const embed = new Discord.MessageEmbed()
        .setTitle("flashed cancelled")
        .setDescription(`the user who get cancelled flash : ${id}`)
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("cancelled")

        if (!id) {
            return error.wrongcmd(message, "yoru unabn <id>`")
        }
        message.guild.members.unban(id).then(() => {
            return message.channel.send(embed)
        }).catch(() => {
            return error.equalPerms(message)
        })
}

exports.callSign = ['unban', 'cancel ban', 'un flash']
exports.helps = {
    description: 'unban user\n',
    uses: 'unabn <@user>',
    permission: 'BAN_MEMBERS'
}