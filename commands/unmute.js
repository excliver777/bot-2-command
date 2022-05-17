const Discord = require('discord.js')
const ms = require('ms')
const error = require('../utils/embed')

module.exports.run = async (yugbot, message) => {
    const args = message.content.slice(" ").split(" ")

    if(!message.member.hasPermission("MANAGE_ROLES")) return error.notper(message)

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    let role = message.guild.roles.cache.find(x => x.name === "Muted");

    if(!user) {
        return error.wrongcmd(message, "yoru unmute <@user>")
    }

    if(user.roles.cache.has(role)) return message.channel.send("this user didnt got mute");
 
    const embed = new Discord.MessageEmbed()
    .setTitle(`successfully ${user.user.username} unmuted`)
    .setDescription(`${user.user.username} unmuted`)
    .setColor("RANDOM")
    .setTimestamp()
    
    const embed2 = new Discord.MessageEmbed()
    .setTitle(`${user.user.username}unmuted`)
    .setColor("RANDOM")
    .setTimestamp();

    user.roles.remove(role);

    message.channel.send(embed)
    user.send(embed2)
}

exports.callSign = [ 'unmute', 'unmuted']
exports.helps = {
    description: 'cancel mute\n',
    uses: 'unmute <@user>',
    permission: 'MANAGE_ROLES'
}
