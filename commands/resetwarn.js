const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const db = require("quick.db")
const error = require("../utils/embed")

exports.run = async (yugbot, message) => {

      const user = message.mentions.members.first()
      let maxwarnings = db.get(`Maxwarn_${message.guild.id}`)
      
      if(!user) {
      return error.wrongcmd(message, "yoru resetwarn [@mention]")
      }
      if (!message.member.hasPermission("ADMINISTRATOR")) return error.notper(message)
      if(message.mentions.users.first().bot) {
        return message.channel.send("not bot")
      }
      
      let warnings = db.get(`Warn_${message.guild.id}_${user.id}`)
      if(maxwarnings === null) maxwarnings = 5;
      if(warnings === null) {
        return message.channel.send(`${message.mentions.users.first().username}no warn`)
      }

      
      const embed = new Discord.MessageEmbed()
      .setTitle("Success")
      .setThumbnail(message.mentions.users.first ().displayAvatarURL({ dynamic : true }))
      .setDescription(`Cancelled user: ${message.mentions.users.first (). username}`)
      .setFooter(`${message.mentions.users.first (). username} Reseted`)
      .setTimestamp()
      .setColor("RANDOM")

      
      db.delete(`warn_${message.guild.id}_${user.id}`)
      message.channel.send(embed)
      
    
      
      
    
} 

exports.callSign = [ 'resetwarn']
exports.helps = {
    description: 'Reset Warn\n',
    uses: 'resetwarn',
    permission: 'ADMINISTRATOR'
}