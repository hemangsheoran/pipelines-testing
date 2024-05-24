const chalk = require('chalk');
module.exports.config = {
    name: "join",
    version: "1.0.1",
    hasPermssion: 2,
    credits: "Hemang Sheoran",
    description: "Join the Bot boxes are in",
    commandCategory: "System",
    usages: "",
    cooldowns: 5
};
 module.exports.onLoad = () => {
  console.log(chalk.bold.hex("#00c300").bold("============ SUCCESFULLY LOADED THE JOIN COMMAND ============"));
  }
module.exports.handleReply = async function({ api, event, handleReply, Threads }) {
  var { threadID, messageID, senderID, body } = event;
  var { ID } = handleReply;
  console.log(ID)
  if (!body || !parseInt(body)) return api.sendMessage('Your selection must be a number.', threadID, messageID);
  if ((parseInt(body) - 1) > ID.length) return api.sendMessage("Your pick is not on the list", threadID, messageID);
  try {
    var threadInfo = await Threads.getInfo(ID[body - 1]);
    var { participantIDs, approvalMode, adminIDs } = threadInfo;
    if (participantIDs.includes(senderID)) return api.sendMessage(`You are already in this group.`, threadID, messageID);
    api.addUserToGroup(senderID, ID[body - 1]);
    if (approvalMode == true && !adminIDs.some(item => item.id) == api.getCurrentUserID()) return api.sendMessage("Added you to the group's approval list...Custom yourself.\n\n𝑻𝒉𝒊𝒔 𝒄𝒐𝒎𝒎𝒂𝒏𝒅 𝒊𝒔 𝒇𝒊𝒙𝒆𝒅 𝒃𝒚 ©- 𝑯𝒆𝒎𝒂𝒏𝒈 𝑺𝒉𝒆𝒐𝒓𝒂𝒏", threadID, messageID);
    else return api.sendMessage(`Bot just added you to the group ${threadInfo.threadName} already. Check in the waiting or spam message section if you don't see the box\n\n𝑻𝒉𝒊𝒔 𝒄𝒐𝒎𝒎𝒂𝒏𝒅 𝒊𝒔 𝒇𝒊𝒙𝒆𝒅 𝒃𝒚 ©- 𝑯𝒆𝒎𝒂𝒏𝒈 𝑺𝒉𝒆𝒐𝒓𝒂𝒏`, threadID, messageID);
  } catch (error) {
    return api.sendMessage(`I'm wrong so I can't add you to that group:<.\n\n${error}`, threadID, messageID);
  }
}

module.exports.run = async function({ api, event, Threads }) {
  try{
    const botID = api.getCurrentUserID();
  var { threadID, messageID, senderID } = event;
  var msg = `🔰==[ BOX LIST ]==🔰\n\n`, number = 0, ID = [];
  var allThreads = await Threads.getAll();
  for (var i of allThreads) {
    
    if(i.threadInfo && i.threadInfo.participantIDs){

if(i.threadInfo.participantIDs.includes(botID)){

      
    number++;
    msg += `${number}. ${i.threadInfo.threadName}\n`;
    ID.push(i.threadID) }
    } else {
      continue;
    }
  }
  msg += `\n👉 Reply this message with the number corresponding to the group you want to enter\n\n𝑻𝒉𝒊𝒔 𝒄𝒐𝒎𝒎𝒂𝒏𝒅 𝒊𝒔 𝒇𝒊𝒙𝒆𝒅 by ©- 𝑯𝒆𝒎𝒂𝒏𝒈 𝑺𝒉𝒆𝒐𝒓𝒂𝒏 `


if(msg.includes(" by ©- 𝑯𝒆𝒎𝒂𝒏𝒈 𝑺𝒉𝒆𝒐𝒓𝒂𝒏 ")){

    
  return api.sendMessage(msg, threadID, (error, info) => {
    global.client.handleReply.push({
      name: this.config.name,
      author: senderID,
     messageID: info.messageID,
      ID: ID      
    })
  }, messageID)

}
    else{
      return api.sendMessage("Ha krle nam change bsdike ese nam badal badal k bn gya tu bot ka owner kbhi khud se mt krlio kuch jo bnda 3 ghnta lgake command thik kre uska credit bhi churale ab tu nam badal k",threadID,messageID)
    }



  } catch (error) {
    // Send the exact error message to the chat
    api.sendMessage(`Error: ${error.message}`, event.threadID, event.messageID);
}
}