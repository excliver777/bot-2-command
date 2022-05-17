const img = require('images-scraper')
const error = require('../utils/embed.js')

const google = new img({
    puppeteer : {
        headless : true,
    }
})
exports.run = async (yugbot, message) => {
    const args = message.content.slice(" ").split(" ")
    const query = args.slice(1).join(" ")

    if(!query) return error.wrongcmd(message, "`yoru pic [name of pic]`")

    let pp = await message.channel.send("finding pic (wait liao) there will be no result if you type nothing")
    let aa = await message.channel.send("loading....")
    const results = await google.scrape(query, 1)
    pp.edit('nah')
    aa.delete()
    message.channel.send(results[0].url);
}

exports.callSign = ['pic', 'picture','Pic','Picture']
exports.helps = {
    description: 'finding picture that you want to search\n',
    uses: 'pic'
}