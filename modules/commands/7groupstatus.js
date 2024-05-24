module.exports.config = {
    name: "groupstatus",
    version: "1.0.0",
    credits: "Hemang Sheoran",
    hasPermssion: 2,
    description: "Check the group status ",
    usages: ".groupstatus",
    commandCategory: "createdbyHemang",
    cooldowns: 0
};







module.exports.run = async({ api, event, Users, Threads}) => {
try{
let datahs = (await Threads.getData(event.threadID)).data || {};
 
  
var msg = `The status of this Group is\n
[1] 𝗥𝗲𝗽𝗹𝘆𝗴𝗮𝗹𝗶➣ ${datahs.reply}\n[2] 𝗥𝗲𝗽𝗹𝘆𝗰𝗽➣ ${datahs.replycp}\n[3] 𝗔𝗻𝘁𝗶𝗼𝘂𝘁➣ ${datahs.antiout}\n[4] 𝗔𝗻𝘁𝗶𝗷𝗼𝗶𝗻➣ ${datahs.newMember}\n[5] 𝗔𝗻𝘁𝗶𝗡𝗶𝗰𝗸𝗻𝗮𝗺𝗲➣ ${datahs.antinickname}\n[6] 𝗔𝗻𝘁𝗶𝗚𝗿𝗼𝘂𝗽𝗡𝗮𝗺𝗲➣ ${datahs.antigroup}\n[7] 𝗔𝘂𝘁𝗼𝗦𝗲𝘁𝗕𝗼𝘁𝗡𝗮𝗺➣ ${datahs.cnamebot} \n[8] 𝗥𝗲𝗮𝗰𝘁➣ ${datahs.react}\n[9] 𝗥𝗲𝘀𝗲𝗻𝗱➣ ${datahs.resend}\n[10] 𝗙𝘆𝘁𝗦𝘁𝗼𝗽𝗽𝗲𝗿➣ ${datahs.fytstopper}\n[11] 𝗥𝗲𝗽𝗹𝘆𝗶𝗺𝗴➣ ${datahs.replyimg}\n[12] 𝗥𝗲𝗽𝗹𝘆𝗵𝗮𝗻𝗴➣ ${datahs.replyhang}\n[13] 𝗥𝗲𝗽𝗹𝘆𝗶𝗺𝗴𝘁𝘅𝘁➣ ${datahs.replyimgtxt}\n\n[𝘂𝗻𝗱𝗲𝗳𝗶𝗻𝗲𝗱 = 𝒀𝑬 𝑪𝑶𝑴𝑴𝑨𝑵𝑫 𝑰𝑺 𝑮𝑹𝑶𝑼𝑷 𝑴 𝑲𝑩𝑯𝑰 𝑩𝑯𝑰 𝑼𝑺𝑬 𝑵𝑯𝑰 𝑯𝑼𝑰 𝑯]\n\nThis Commamd is Created BY 𝑯𝑬𝑴𝑨𝑵𝑮 𝑺𝑯𝑬𝑶𝑹𝑨𝑵 𝑱𝑨𝑨𝑻\n𝗜𝗗 𝗟𝗜𝗡𝗞- https://www.facebook.com/hemang.sheoran.16`
  
  

msg = msg.replace(/true/g,'✅Activated').replace(/false/g,'❌Deactivate');

  

api.sendMessage(`${msg}`, event.threadID,event.messageID); 
  
    } catch (error) {
    // Send the exact error message to the chat
    api.sendMessage(`Error: ${error.message}`, event.threadID, event.messageID);
}

}