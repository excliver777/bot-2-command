const { MessageEmbed } = require('discord.js')

exports.run = async (yugbot, message) => {
    let pp = await message.channel.send('loading...')
    let msgp = "message ping!:"
    let p = "Bot ping!"
    let api = "delay time :"
    let upt = "uptime :"
    String.prototype.toHHMMSS = function() {
        let sec_num = parseInt(this, 10)
        let hours = Math.floor(sec_num / 3600)
        let minutes = Math.floor((sec_num - (hours * 3600)) / 60)
        let seconds = sec_num - (hours * 3600) - (minutes * 60)

        if(hours < 10) hours = "0" + hours
        if(minutes < 10) minutes = "0" + minutes
        if(seconds < 10) seconds = "0" + seconds

        let time = `${hours}Hour ${minutes}minutes ${seconds}second`
        return time
    }
    let time = process.uptime()
    let uptime = (time + "").toHHMMSS()
    
    let pingembed = new MessageEmbed()
        .setTitle(p)
        .setColor('RANDOM')
        .setDescription(`${msgp} ${pp.createdTimestamp - message.createdTimestamp}ms\n${api} ${Math.round(yugbot.ws.ping)}ms\n${upt} ${uptime}`)
        .setFooter(message.author.username, message.author.avatarURL)
        .setTimestamp()
    pp.edit("Bot ping", { embed: pingembed })
}

exports.callSign = ['ping']
exports.helps = {
    description: 'Show bot ping\n',
    uses: 'ping'
}
