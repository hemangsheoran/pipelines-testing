module.exports.config = {
	name: "log",
	eventType: ["log:unsubscribe","log:subscribe","log:thread-name"],
	version: "1.0.0",
	credits: "Mirai Team",
	description: "Ghi lại thông báo các hoạt đông của bot!",
    envConfig: {
        enable: true
    }
};

module.exports.run = async function({ api, event, Users, Threads }) {
  const fs = require('fs');
    const logger = require("../../utils/log");
    if (!global.configModule[this.config.name].enable) return;
    let botID = api.getCurrentUserID();
    var allThreadID = global.data.allThreadID;
    for (const singleThread of allThreadID) {
      const thread = global.data.threadData.get(singleThread) || {};
      if (typeof thread["log"] != "undefined" && thread["log"] == false) return;
    } 
    
    const moment = require("moment-timezone");
    const time = moment.tz("Asia/Kolkata").format("D/MM/YYYY HH:mm:ss");
    //let nameThread = (await Threads.getData(event.threadID)).threadInfo.threadName || "Tên không tồn tại";
    let nameThread = global.data.threadInfo.get(event.threadID).threadName || "Name does not exist"; 
  
    let threadInfo = await api.getThreadInfo(event.threadID);
    nameThread =threadInfo.threadName;
    const nameUser = global.data.userName.get(event.author) || await Users.getNameUser(event.author);
  
    console.log(nameThread)
  
    var formReport = "[⚜️] 𝙉𝙤𝙩𝙞𝙘𝙚 𝙁𝙧𝙤𝙢 𝘼 𝙂𝙧𝙤𝙪𝙥 [⚜️]" +
      "\n\n[⚜️] 𝙂𝙧𝙤𝙪𝙥 𝙉𝙖𝙢𝙚: " + nameThread +
      "\n\n[⚜️] 𝙂𝙧𝙤𝙪𝙥 𝙐𝙞𝙙: " + event.threadID +
      "\n\n[⚜️] 𝘼𝙘𝙩𝙞𝙤𝙣: {task}" +
      "\n\n[⚜️] 𝙋𝙚𝙧𝙨𝙤𝙣 𝙉𝙖𝙢𝙚: " + nameUser +
      "\n\n[⚜️] 𝙃𝙞𝙨 𝙐𝙞𝙙: " + event.author +
      "\n\n[⚜️] 𝙏𝙞𝙢𝙚: " + time + "",
        task = "";
    switch (event.logMessageType) {
        case "log:thread-name": {
            const oldName = (await Threads.getData(event.threadID)).name
            task = "User changes group name from: '" + oldName + "' Fort '" + newName + "'";
            await Threads.setData(event.threadID, {name: newName});
            break;
        }
        case "log:subscribe": {
            if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) task = "User added bot to a new group!";
            break;
        }
        case "log:unsubscribe": {
            if (event.logMessageData.leftParticipantFbId== api.getCurrentUserID()){ task = "User remove bot from the group!"
                                                                              const jsonData = fs.readFileSync(__dirname + "/../commands/approve/approvedThreads.json", 'utf-8');
                     
                                         const data = JSON.parse(jsonData);                                        
  const idToRemove = event.threadID;     
  const updatedData = data.filter(id => id !== idToRemove);                                
    const updatedJsonData = JSON.stringify(updatedData, null, 2);                  
  fs.writeFileSync(__dirname + "/../commands/approve/approvedThreads.json", updatedJsonData, 'utf-8');                                                                                 
                                                                                                                     
                                                                                  
                                                                                  
                                                                                  
                                                                                  }












          
            break;
        }
        default: 
            break;
    }

    if (task.length == 0) return;

    formReport = formReport
    .replace(/\{task}/g, task);

    return api.sendMessage(formReport, global.config.ADMINBOT[0], (error, info) => {
        if (error) return logger(formReport, "[ Logging Event ]");
    });
              }