const fs = require("fs");
module.exports.config = {
	name: "pyar",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Candy", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("pyar") ||
     react.includes("Pyar") || 
react.includes("PYAR")) {
		var msg = {
				body: "pyar ka saya",
				attachment: fs.createReadStream(__dirname + `/noprefix/candy.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }