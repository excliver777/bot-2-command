module.exports = async message => {
    if(console.error) {
        message.channel.send(console.error)
    }
}