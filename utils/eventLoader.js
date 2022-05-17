const yugbot = require("../classes/YUGBOT")

const reqEvent = (event) => require(`../events/${event}`)

module.exports = yugbot => {
    yugbot.on('ready', () => reqEvent('ready')(yugbot))
    yugbot.on('message', (message) => reqEvent('message')(message))
    yugbot.on('messageDelete', (message) => reqEvent('messageDelete')(message))
    yugbot.on('messageUpdate', (oldMessage, newMessage) => reqEvent('messageUpdate')(oldMessage, newMessage))
    yugbot.on('channelCreate', (channel) => reqEvent('channelCreate')(channel))
    yugbot.on('channelDelete', (channel) => reqEvent('channelDelete')(channel))
    yugbot.on('channelUpdate', (oldChannel, newChannel) => reqEvent('channelUpdate')(oldChannel, newChannel))
    yugbot.on('roleCreate', (role) => reqEvent('roleCreate')(role))
    yugbot.on('roleDelete', (role) => reqEvent('roleDelete')(role))
    yugbot.on('guildMemberAdd', (member) => reqEvent('guildMemberAdd')(member))
    yugbot.on('guildMemberRemove', (member) => reqEvent('guildMemberRemove')(member))
}
