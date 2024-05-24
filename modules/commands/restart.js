module.exports.config = {
	name: "stop",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "manhIT",
	description: "Restart the Bot",
	commandCategory: "system",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
	return api.sendMessage(`𝗪𝗮𝗶𝘁 𝗛𝗘𝗠𝗔𝗡𝗚 𝗦𝗛𝗘𝗢𝗥𝗔𝗡 𝗕𝗢𝗦𝗦 I am Stopping....✅`, threadID, () => process.exit(1));
}