const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const db = require("quick.db")
const error = require("../utils/embed")

exports.run = async (yugbot, message) => {
      const args = message.content.slice(" ").split(" ")
      const user = message.mentions.members.first()
      

      let maxwarnings = db.get(`Max warn${message.guild.id}`)
      if (!message.member.hasPermission("ADMINISTRATOR")) return error.notper(message)
      if(!user) {
        return error.wrongcmd(message, "yoru warn @mention <reason>")
      }
      
      if(message.mentions.users.first().bot) {
        return message.channel.send("u cant wanr bot")
      }
      
      if(message.author.id === user.id) {
        return message.channel.send("u retarded?")
      }
      
      if(user.id === message.guild.owner.id) {
        return message.channel.send("atleast u try")
      }

      const reason = args.slice(1).join(" ")
      
      if(!reason) {
        return error.wrongcmd(message, "yoru warn @user <reason>")
      }
      let warnings = db.get(`Warn_${message.guild.id}_${user.id}`)

      if(warnings === null) warnings = 0;

      if(maxwarnings === null) maxwarnings = 5;
      
      let kickwarnings = maxwarnings - 1

      if(warnings === kickwarnings) {
        message.channel.send(`${message.mentions.users.first().username}U blocked cause u gey max warn`)
        db.delete(`warn_${message.guild.id}_${user.id}`)
        user.ban().then(() => {
          return message.channel.send("if you want cancel type \n ``` yoru unban [user id]``` ")
      }).catch(() => {
          return error.equalPerms(message)
      })
      }
      

      const embed = new Discord.MessageEmbed()
      .setTitle("U get warn")
      .setDescription(`because you ${reason}  ${message.author.username} fwarned**`)
      .addField(`${message.mentions.users.first().username} number of warn \n`, `📌 you have **${warnings + 1}/${maxwarnings}** warning `)
      .setColor("RANDOM")
      .setFooter(`success`)
      .setThumbnail(message.mentions.users.first ().displayAvatarURL({ dynamic : true }))
      .setTimestamp()

      if(warnings === null) {
        db.set(`Warn_${message.guild.id}_${user.id}`, 1)
        await message.channel.send(embed)
      } else if(warnings !== null) {
          db.add(`Warn_${message.guild.id}_${user.id}`, 1)
        await message.channel.send(embed)
      }
      
    
} 

exports.callSign = ['warn']
exports.helps = {
    description: 'Warn\n',
    uses: 'Warn',
}
