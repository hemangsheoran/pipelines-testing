const axios = require("axios"); 
const moment = require("moment-timezone"); 

module.exports.config = {
  name: "disapprove",
  version: "1.0.5",
  hasPermssion: 2,
  credits: "Hemang Sheoran",
  description: "To disapprove the group",
  commandCategory: "system",
  usages: ".disapprove [group id]",
  cooldowns: 7,
  dependencies: {}
};



module.exports.run = async function({ api, event, args, Users, Threads }) {
  
const fs = require("fs");
  const jsonData = fs.readFileSync(__dirname + "/../commands/approve/approvedThreads.json", 'utf-8');
                     
                                         const data = JSON.parse(jsonData);      var sl = data.length;                        
  const idToRemove = args.join(" ");     
  const updatedData = data.filter(id => id !== idToRemove);                      const fl = updatedData.length;     
    const updatedJsonData = JSON.stringify(updatedData, null, 2);                  
  fs.writeFileSync(__dirname + "/../commands/approve/approvedThreads.json", updatedJsonData, 'utf-8');

  if(sl == fl + 1){
  api.sendMessage("Group Removed Successfully",event.threadID,event.messageID);
  }else{
    api.sendMessage("Either Group is not approved or you did not write correct TID",event.threadID,event.messageID);
  }
  
};