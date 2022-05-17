const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const db = require("quick.db")
const error = require("../utils/embed")

exports.run = async (yugbot, message) => {
    const user = message.mentions.members.first() || message.member;
    
    let maxwarnings = db.get(`최대경고_${message.guild.id}`)
    let warnings = db.get(`경고_${message.guild.id}_${user.id}`)

    if(maxwarnings === null) maxwarnings = 5;
    if(warnings === null) warnings = 0;

    const embed2 = new Discord.MessageEmbed()
    .setTitle("Check warning")
    .setColor("RANDOM")
    .setDescription(`${user}You dont even have warn wtf `)
    .setFooter("jibai")
    .setTimestamp()
    .setThumbnail(user.user.displayAvatarURL({ dynamic : true }))

    const embed = new Discord.MessageEmbed()
    .setTitle("Check warning")
    .setColor("RED")
    .setDescription(`you have ${user}  **${warnings}/${maxwarnings}** Warning`)
    .setFooter(`got ${user.user.username}warn`)
    .setTimestamp()
    .setThumbnail(user.user.displayAvatarURL({ dynamic : true }))


    if(warnings === 0) {
        message.channel.send(embed2)
    }
    else {
        message.channel.send(embed)
    }
} 

exports.callSign = ['check warn', 'check']
exports.helps = {
    description: 'check\n',
    uses: 'check [@mention] ',
}
