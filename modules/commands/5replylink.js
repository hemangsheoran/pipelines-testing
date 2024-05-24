module.exports.config = {
 name: "replylink",
 version: "1.1.1",
 hasPermission: 0,
 credits: "Zeus",
 description: "Get the reply link to admin",
 commandCategory: "No Prefix",
 cooldowns: 0,
};
const fs = require("fs");
module.exports.handleEvent = async function({ api, event, Users, client, __GLOBAL }) {
  try{
 var { threadID, messageID } = event;
    const axios = require('axios')
  const moment = require("moment-timezone");
    const dtai = moment.tz("Asia/Kolkata").format("DD/MM/YYYY - HH:mm:ss");
const picture = (await axios.get(`https://i.imgur.com/gEYDfw7.jpg`, { responseType: "stream"})).data
  //'body === undefined || !body.includes('replit.com/') || senderID == api.getCurrentUserID() || senderID == '') return; 
var name = await Users.getNameUser(event.senderID); const { threadName } = await api.getThreadInfo(threadID); 
if(event.body.indexOf("https://replit.com/")==0) {
     api.sendMessage({body: `📥== [ 𝗟𝗜𝗡𝗞 𝗙𝗜𝗟𝗘 𝗥𝗘𝗣𝗟𝗜𝗧 ] ==📥\n━━━━━━━━━━━━━━━━━━\n⏰ 𝗔𝘁:  ${dtai}\n⚙️ 𝗕𝗼𝘁 𝗗𝗲𝘁𝗲𝗰𝘁𝗲𝗱 𝗔 𝗹𝗶𝗻𝗸 𝗛𝗮𝘀 𝗦𝗲𝗻𝘁 𝗪𝗶𝘁𝗵 𝗥𝗲𝗽𝗹𝗶𝘁\n💓 𝗠𝗲𝘀𝘀𝗮𝗴𝗲 𝗦𝗲𝗻𝘁 𝗧𝗼 𝗔𝗱𝗺𝗶𝗻🤣🤣🤣`,attachment: (picture)}, threadID, messageID);
    api.sendMessage({body: `📥== [ 𝗟𝗜𝗡𝗞 𝗙𝗜𝗟𝗘 𝗥𝗘𝗣𝗟𝗜𝗧 ] ==📥\n━━━━━━━━━━━━━━━━━━\n⏰ 𝗔𝘁: ${dtai}\n👥 𝗡𝗮𝗺𝗲: ${name} \n🌍 𝗚𝗿𝗼𝘂𝗽: ${threadName}\n🌸 𝗚𝗼𝘁 𝗔 𝗥𝗲𝗽𝗹𝗶𝘁 𝗟𝗶𝗻𝗸\n💬 𝗖𝗼𝗻𝘁𝗲𝗻𝘁: \n${event.body} `, attachment: (picture)}, '100048784668869');
  }
        }
  catch(e){
    console.log(e)
  }}
 module.exports.run = function({ api, event, client, o, __GLOBAL }) {
  }
// nguyễn đức tài