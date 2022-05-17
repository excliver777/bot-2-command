const discord = require('discord.js')
const error = require('../utils/embed.js')

module.exports.run = async (yugbot, message, query) => {
    let filter = (reaction, user) => (reaction.emoji.name === '❌' || reaction.emoji.name === '⭕') && user.id === message.author.id
    const text = query.message.slice(query.command.length + 1)
    if(text === undefined || text === "") {
        return error.wrongcmd(message, "`!feedback [message]`")
    } else {
	    let embed = new (discord.MessageEmbed)
		embed.setColor("RANDOM")
		embed.setTitle("last checking!")
		embed.setDescription(`jibai you sure u send \n**${text}**\n this message?\n`)
		embed.addField("pls choose wheather you like to send anot", "⭕ - ye \n❌ - no")
		message.channel.send(embed).then((th) => { 
		    th.react('⭕') 
		    th.react('❌') 
		    th.awaitReactions(filter, { 
		        max: 1 
		    }).then((collected) => { 
		        if (collected.array()[0].emoji.name === '⭕') { 
		            try {
		                yugbot.users.fetch('702024346293501972').then((develop) => {
		                    develop.send(`${message.member.user.tag} (${message.author.id})feedback!\n\`${text}\``)
		                })
		                let embed2 = new (discord.MessageEmbed)
		                    embed2.setColor("RANDOM")
		                    embed2.setTitle("sended")
		                    embed2.addField(`u said this to my dad`, text)
		                th.edit(embed2)
		            } catch (err) {
		                message.channel.send(`<@${message.author.id}> WOI GET GOOD FAIL TO SEND LMAOLMAOLMAO`)
		            }
		        } else {
		            let embed3 = new (discord.MessageEmbed)
		                embed3.setColor("RANDOM")
		                embed3.setTitle("FAIL")
		                embed3.setDescription("u cancelled it")
		            th.edit(embed3)
		        }
		    })
		})
	}
}

exports.callSign = ['feedback', 'issue', 'messagefeedback','feed back','Feed back' ]
exports.helps = {
    description: 'Send feedback to my dad\n',
    uses: 'feedback (messsage)'
}
