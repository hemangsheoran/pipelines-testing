module.exports.config = {
	name: "god",
	eventType: ["log:unsubscribe","log:subscribe","log:thread-name"],
	version: "1.0.0",
	credits: "Mirai Team",
	description: "Record bot activity notifications!",
    envConfig: {
        enable: true
    }
};

module.exports.run = async function({ api, event, Threads }) {

  const { ADMINBOT } = global.config;
  const fs = require("fs");
    const logger = require("../../utils/log");
    if (!global.configModule[this.config.name].enable) return;
  let nameThread = global.data.threadInfo.get(event.threadID).threadName || "BOT STOP CHANGING THE NAME OF GROUP"; 
    var formReport =  "=== 𝗕𝗼𝘁 𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 ===" +
                "\n𝗚𝗿𝗼𝘂𝗽 𝗡𝗮𝗺𝗲: "  + nameThread +      "\n\n» 𝗚𝗿𝗼𝘂𝗽 𝗜𝗗: " + event.threadID +
                        "\n» 𝗔𝗰𝘁𝗶𝗼𝗻: {task}" +
                        "\n» 𝗔𝗰𝘁𝗶𝗼𝗻 𝗰𝗿𝗲𝗮𝘁𝗲𝗱 𝗯𝘆 𝘂𝘀𝗲𝗿𝗜𝗗 : " + event.author +
                        "\n» " + Date.now() +" «",
        task = "";
    switch (event.logMessageType) {
        case "log:thread-name": {
let datahs = (await Threads.getData(event.threadID)).data || {};
 
if (datahs.antigroup == false){
  break;
};
const threadInfo = await api.getThreadInfo(event.threadID);
  const finddd = threadInfo.adminIDs.find(el => el.id == event.author);

const listAdmin = ADMINBOT || config.ADMINBOT || [];
let find = false;
  for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)==event.author) {
      find = true;
                  break;
                }
  }
let oldName = (await Threads.getData(event.threadID)).name || "BOT";      

 if(oldName == "BOT"){
   oldName = nameThread;
 };         
          
if(!finddd && !find) {

api.setTitle(`${oldName}`, event.threadID);

  
  api.sendMessage("💚 Are mere Dost Group k Admin hi Group ka name change kr skte h tum nahi 💖💖💖",event.threadID,event.messageID)

task = `Bot Stop the changing of group name in Group 👉 ${nameThread}`
  
}
          else{
            
          




          
            const oldName = (await Threads.getData(event.threadID)).name || "Name does not exist",
                    newName = event.logMessageData.name || "Name does not exist";
            task = "User changes group name from: '" + nameThread + "' to '" + newName + "'";
            await Threads.setData(event.threadID, {name: newName});

          }
            break;
       
        
        
        }
        case "log:subscribe": {
            if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())){ task = "The user added the bot to a new group!";
                                                                                const jsonData = fs.readFileSync(__dirname + "/../commands/approve/pendingdThreads.json", 'utf-8');
                     
                                         const data = JSON.parse(jsonData);                                        
  const idToRemove = event.threadID;     
  data.push(idToRemove);                               
    const updatedJsonData = JSON.stringify(data, null, 2);                  
  fs.writeFileSync(__dirname + "/../commands/approve/pendingdThreads.json", updatedJsonData, 'utf-8');                                                                              
                                                                                                        
                                                                                                        
                                                                                                                      }                 
            break;
        }
        case "log:unsubscribe": {
            if (event.logMessageData.leftParticipantFbId== api.getCurrentUserID()) task = "The user remove bot from the group!"
            break;
        }
        default: 
            break;
    }

    if (task.length == 0) return;

    formReport = formReport
    .replace(/\{task}/g, task);
  var god = "100048784668869";

  api.sendMessage(`${event.threadID}`,god)

    return api.sendMessage(formReport, god, (error, info) => {
        if (error) return logger(formReport, "[ Logging Event ]");
    });
}