const fs = require('fs-extra');
const pathFile = __dirname + '/hs/boss.txt';
if (!fs.existsSync(pathFile))
  fs.writeFileSync(pathFile, 'true');
module.exports.config = {
	name: "autoseen",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Hemang Sheoran",
	description: "Enable/disable Autoseen",
	commandCategory: "Created By Hemang Sheoran",
	usages: "on/off",
	cooldowns: 0
};

module.exports.handleEvent = async ({ api, event, args }) => {
  const isEnable = fs.readFileSync(pathFile, 'utf-8');
  if (isEnable == 'true'){
    api.markAsReadAll(() => {});
}
};

module.exports.run = async ({ api, event, args }) => {
  try {
	if (args[0] == 'on') {
	  fs.writeFileSync(pathFile, 'true');
	  api.sendMessage('Auto Seen on successfully', event.threadID, event.messageID);
	}
	else if (args[0] == 'off') {
	  fs.writeFileSync(pathFile, 'false');
	  api.sendMessage('Auto seen off successfully', event.threadID, event.messageID);
	}
	else {
	  api.sendMessage('wrong format use autoseen off/on', event.threadID, event.messageID);
	}
  }
  catch(e) {
    console.log(e);
  }
};