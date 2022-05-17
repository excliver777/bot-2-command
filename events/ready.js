'--unhandled-rejections=strict'

module.exports = async client => {
	console.log(client.user.username + "이 활성화 되었습니다!\n")
	let statuses = [`yoru help`, `with ${client.guilds.cache.size} servers trolling with me`, `with ${client.users.cache.size} users sabotage team with me`];
	setInterval(function() {
		let status = statuses[Math.floor(Math.random()*statuses.length)];
		client.user.setPresence({ activity: {name:status}, status: 'idle' });
	}, 3000)
}
