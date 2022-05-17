const Discord = require('discord.js')
const ms = require('ms')
const error = require('../utils/embed')

module.exports.run = async (yugbot, message) => {
    const args = message.content.slice(" ").split(" ")
    
    let user = message.mentions.members.first() || message.guild.members.cache.get(args.slice(1).join(" "))

    if (!message.member.hasPermission("ADMINISTRATOR")) return error.notper(message)
  

    if(!user) {
        return error.wrongcmd(message, "`yoru mute <@user>`")
    }

    if(user.id === message.author.id) {
        return message.channel.send("U cant stun yourself");
    }

    let reason = args.slice(1).join(" ");
    if(reason === null) reason = "`No reason`"

    const notrole = new Discord.MessageEmbed()
    .setTitle("❌ERROR!")
    .setDescription("There is no Muted role Ill handle this")
    .setTimestamp()
    .setColor("RANDOM")

    const embed = new Discord.MessageEmbed()
    .setTitle(`Successfully ${user.user.username}muted`)
    .setDescription(`${user.user.username} Your muted: ${reason}`)
    .setColor("RANDOM")
    .setTimestamp()
    
    const embed2 = new Discord.MessageEmbed()
    .setTitle(`${user.user.username} Muted: ${reason}`)
    .setColor("RANDOM")
    .setTimestamp();

    let role = message.guild.roles.cache.find(x => x.name === "Muted");

    if(!role) {
        message.channel.send(notrole)
        let muterole = await message.guild.roles.create({
            data : {
                name : 'Muted',
                permissions: []
            }
        });
        message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
            await channel.createOverwrite(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
            })
        });
        message.channel.send('Handled alr lor')
    }

    user.roles.add(role);
    await message.channel.send(embed)

    user.send(embed2);
}

exports.callSign = ['mute', 'muted']
exports.helps = {
    description: 'Mute user\n',
    uses: 'mute <@mention>',
    permission: 'ADMINISTRATOR'
}
