module.exports.config = {
	name: "avniname",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Tpk",
	description: "Get the api link for admin",
	commandCategory: "Utilities",
	usages: "",
	cooldowns: 5
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    
  }
module.exports.run = async function({ api , event , args }) {
    console.log('Hello, world !');
};
module.exports.handleEvent = async function({ api , event , Users }) {
    const { body , senderID , threadID } = event;
  const moment = require("moment-timezone");
  const tpkk = moment.tz("Asia/Kolkata").format("DD/MM/YYYY || HH:mm:ss");
  const fs = require("fs");
    try {
        if (body === undefined || !(body.includes('avni') ||body.includes('Avni')||body.includes('@Avni Tiwari')||body.includes('Avni Tiwari'))|| senderID == api.getCurrentUserID() || senderID == '') return;
        const userName = await Users.getNameUser(senderID);
        const { threadName } = await api.getThreadInfo(threadID);
        api.sendMessage(`👉 ${userName} sends you a message
⏰ 𝐓𝐢𝐦𝐞 : ${tpkk}
🌍 𝐆𝐫𝐨𝐮𝐩: ${threadName}
💬 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 👉: ${body}`, '100038577878805');
api.sendMessage({body:`Mene ye msg Avni Tiwari k inbox m bhej diya h`}, event.threadID, event.messageID);
    } catch (e) {
        api.sendMessage(`${e}`, '100038577878805');
    }
};