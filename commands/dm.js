const Discord = require('discord.js')
const error = require('../utils/embed.js')

exports.run = async (yugbot, message) => {
    const argss = message.content.slice(".").split(" ")
    const args = message.content.slice(" ").split(" ")
    if(!argss[1]) return error.wrongcmd(message, "`yoru dm <user id> <message>`")
    const user = argss[1]
    if(!user) return error.sendEmbed(message, "Cannot find that user u lanjaio!")
    const reason = args.slice(2).join(" ");
    if(!reason) return error.wrongcmd(message, "`yoru dm <user ID> <message>`")
    try {
        yugbot.users.fetch(user).then((th) => {
            th.send(`${message.author.tag}this guy said to you \n**${reason}**`);
            return error.sendEmbed(message, `"${reason}" sended`)
        })
    } catch {
        return error.sendEmbed(message, `ERROR!\ngetgood it failed`)
    }
}


exports.callSign = ['dm', 'DM', 'dm']
exports.helps = {
    description: 'dm\n',
    uses: 'dm'
}
