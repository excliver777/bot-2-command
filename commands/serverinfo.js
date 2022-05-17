const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const sqlite3 = require('sqlite3').verbose()
const path = require('path')
const dbPath = path.resolve(__dirname, '../data/data.db')
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if(err) return console.log(err)
})

module.exports.run = async(client, message) => {
    db.serialize()
    db.all(`SELECT * FROM data WHERE guild_id = '${message.guild.id}'`, (err, rows) => {
    const { guild } = message
    
    const { name, region, memberCount, owner } = guild
    let bot = message.guild.members.cache.filter(m => m.user.bot).size
    let guildmembers = message.guild.memberCount
    const icon = message.guild.iconURL()
    const embed = new MessageEmbed()
    .setTitle(`${name} server info`)
    .setThumbnail(icon)
    .setTimestamp()
    .setColor("RANDOM")
    .addFields(
        {
            name: ":crown: owner: ",
            value: message.guild.owner.user.tag,
        },
        {
            name: ":ballot_box_with_check: all member: ",
            value: `${guildmembers}!`,
        },
        {
            name: "😶 user: ",
            value: `${guildmembers - bot}!`,
        },
        {
            name: ":robot: bot: ",
            value: `${bot}!`,
        },
        {
            name: ":eyes: channel:",
            value: `${message.guild.channels.cache.size}!`,
        },
        {
            name: ":id: server ID:",
            value: `${message.guild.id}`,
        },
        {
            name: "\:QueenEZ: server birth day",
            value: message.guild.createdAt.toLocaleDateString(),
        },
        {
            name: ":pick: role number",
            value: `${message.guild.roles.cache.size}`,
        },
        {
            name: ":flag_white: server country",
            value: region,
        },
        {
            name: ":coin: boosting",
            value: `${message.guild.premiumSubscriptionCount} booster!`,
        },
        {
            name: ":camera: number of emoji",
            value: `${message.guild.emojis.cache.size}emoji!`,
        }

    )
    message.channel.send(embed)
})
}

exports.callSign = ['serverinfo', 'serverinfo', 'si']
exports.helps = {
    description: 'show information of server\n',
    uses: 'server information'
}