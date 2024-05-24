module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "DungUwU",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
const fs = require('fs');
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;


const json1Data = fs.readFileSync(__dirname + "/../commands/hemang/apnebande.json",'utf-8');

const data1hs = JSON.parse(json1Data);

const isapnabanda = data1hs.includes(event.logMessageData.leftParticipantFbId);


const { ADMINBOT } = global.config;
const listAdmin = ADMINBOT || config.ADMINBOT || [];
let adminfind = false;
  for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)==event.senderID) {
      adminfind = true;
                  break;
                }
  }
if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;

if(!isapnabanda && !adminfind){

 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "being kicked by the administrator";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`Unable to re-add members ${name} to the group :( `, event.threadID)
   } else { setTimeout(() => {
  api.sendMessage(`Antiout Mode is currently Active✅, So ${name} is readded to the group`, event.threadID);
}, 3000);
          }
  })
 }

}
}
