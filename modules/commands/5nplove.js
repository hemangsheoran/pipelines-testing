const fs = require("fs");
module.exports.config = {
	name: "love you",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "ABHISHEK", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("i love you") ||
     react.includes("love u") || react.includes("I LOVE YOU BOT") || react.includes("love you") ||
react.includes("Love you bot") ||
react.includes("love u bot")) {
		var msg = {
				body: `𝗞𝘆𝗮 𝗿𝗮𝗸𝗵𝗮 𝗵 𝘆𝗿 𝘆𝗲 𝗹𝗼𝘃𝗲 𝘃𝗴𝗲𝗿𝗮𝗵 𝗺 𝘆𝗲 𝘀𝗯 𝘁𝗼 𝗰𝗵𝗹𝘁𝗮 𝗿𝗲𝗵𝘁𝗮 𝗵,\n 𝗟𝗼𝘃𝗲 𝘆𝗼𝘂 𝘁𝗼𝗼 😜😜 `,
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤩", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }