const Discord = require('discord.js')

module.exports.run = async (yugbot, message, query) => {
    message.channel.send(" ```Noodle / 누들#7530```")
}

exports.callSign = ['who make you', 'developer', 'dev']
exports.helps = {
    description: 'show bot developers\n',
    uses: 'developer'
}
