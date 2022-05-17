const Discord = require("discord.js")
const sqlite3 = require('sqlite3').verbose()
const path = require('path')
const dbPath = path.resolve(__dirname, '../data/data.db')
let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) console.log("Find Error - Message log DataBase")
})

module.exports = async (oldMessage, newMessage) => {
    if(oldMessage.author.bot) return
    try {
        db.all(`SELECT * FROM data WHERE guild_id = '${oldMessage.guild.id}'`, (err, rows) => {
            rows.forEach(function (row) {
                var value = row.log_id
                if(value != '1234') {
                    let embed = new (Discord.MessageEmbed)
                    embed.setTitle("메세지가 수정되었습니다!")
                    embed.setColor("GREEN")
                    embed.addField("메세지 주인", oldMessage.author.tag, true)
                    embed.addField("채널", `<#${oldMessage.channel.id}>`, true)
                    embed.addField("이전 메세지", oldMessage.content, false)
                    embed.addField("수정된 메세지", newMessage.content, true)
                    embed.setFooter(`메세지 아이디: ${oldMessage.id} | 작성자 아이디: ${oldMessage.author.id}`)
                    try {
                        oldMessage.guild.channels.cache.find(x => x.id == value).send(embed)
                    } catch (error) { return }
                }
            })
        })
    } catch { return }
}
