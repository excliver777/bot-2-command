const error = require('../utils/embed.js')

module.exports.run = async (yugbot, message, query) => {	
    let purge = query.message.slice(query.command.length + 1)
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return error.notper(message)
    if (!purge) return error.wrongcmd(message, "`yoru clean [1~100]`")
    if (purge > 100) return error.wrongcmd(message, "`yoru clean [1~100]`")
    if (purge < 1) return error.wrongcmd(message, "`yoru clean [1~100]`")
    if (isNaN(purge) == true || message.content.indexOf('.') != -1) return error.wrongcmd(message, "`yoru clean [1~100]`")
    try {
        message.delete() // 청소 메세지 삭제
        message.channel.bulkDelete(purge)
        message.channel.send(`<@${message.author.id}> ${purge} deleted`).then(msg => msg.delete({ timeout: 3000 }))
    } catch {
        message.channel.send(`<@${message.author.id}> get good`)
    }     
}

exports.callSign = ['purge', 'delete','clean']
exports.helps = {
    description: 'delete message',
    uses: 'clean [1~100]',
    permission: 'MANAGE_MESSAGES'
}
