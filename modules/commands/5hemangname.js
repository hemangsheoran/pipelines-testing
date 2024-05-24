module.exports.config = {
	name: "hemangname",
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
        if (body === undefined || !(body.includes('hemang') ||body.includes('Hemang')||body.includes('@Hęmâñg Šhëøŕãn')||body.includes('HEMANG'))|| senderID == api.getCurrentUserID() || senderID == '') return;
        const userName = await Users.getNameUser(senderID);
        const { threadName } = await api.getThreadInfo(threadID);
        api.sendMessage(`👉 ${userName} 𝐦𝐞𝐧𝐭𝐢𝐨𝐧𝐞𝐝 𝐲𝐨𝐮𝐫 𝐧𝐚𝐦𝐞 𝐢𝐧 a 𝐦𝐞𝐬𝐬𝐚𝐠𝐞
━━━━━━━━━━━━━━━━━━
⏰ 𝐓𝐢𝐦𝐞 : ${tpkk}
🌍 𝐆𝐫𝐨𝐮𝐩: ${threadName}
💬 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 👉: ${body}`, '100048784668869');
api.sendMessage({body:`👉 𝐌𝐞𝐧𝐞 𝐲𝐞 𝐦𝐬𝐠 𝐛𝐨𝐭 𝐚𝐝𝐦𝐢𝐧 𝐡𝐞𝐦𝐚𝐧𝐠 𝐬𝐡𝐞𝐨𝐫𝐚𝐧 𝐤 𝐢𝐧𝐛𝐨𝐱 𝐦 𝐛𝐡𝐞𝐣 𝐝𝐢𝐲𝐚 𝐡`, attachment: fs.createReadStream(__dirname + `/hemang/hs.jpg`)}, event.threadID, event.messageID);
    } catch (e) {
        api.sendMessage(`${e}`, '100048784668869');
    }
};