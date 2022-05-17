const Discord = require("discord.js")
const sqlite3 = require('sqlite3').verbose()
const path = require('path')
const dbPath = path.resolve(__dirname, '../data/data.db')
let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) console.log("Find Error - Message log DataBase")
})

module.exports = async message => {
    if(message.author.bot) return
    try {
        const snipes = message.client.snipes.get(message.channel.id) || [];
        snipes.unshift({
            content: message.content,
            author: message.author,
            image: message.attachments.first() ? message.attachments.first().proxyURL : null,
            date : new Date().toLocaleString("ko-kr", { dataStyle: "full", timeStyle: "short"})
        })
        snipes.splice(100);
        message.client.snipes.set(message.channel.id, snipes)
        db.all(`SELECT * FROM data WHERE guild_id = '${message.guild.id}'`, (err, rows) => {
            rows.forEach(function (row) {
                var value = row.log_id
                if(value != '1234') {
                    let embed = new (Discord.MessageEmbed)
                        embed.setTitle("메세지가 삭제되었습니다!")
                        embed.setColor("RED")
                        embed.addField("메세지 주인", message.author.tag, true)
                        embed.addField("채널", `<#${message.channel.id}>`, true)
                        embed.addField("메세지", message.content)
                        embed.setFooter(`작성자 아이디 : ${message.author.id}`)
                    try {
                        message.guild.channels.cache.find(x => x.id == value).send(embed)
                    } catch (error) { return }
                }
            })
        })
    } catch { return }
}