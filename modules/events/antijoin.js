module.exports.config = {
 name: "antijoin",
 eventType: ["log:subscribe"],
 version: "1.0.0",
 credits: "D-Jukie",
 description: "Ban new members from the group"
};

module.exports.run = async function ({ event, api, Threads, Users }) {
  const fs = require('fs');
 	let data = (await Threads.getData(event.threadID)).data
 	if (typeof data["newMember"] == "undefined" || data.newMember == false) return;

  
const { ADMINBOT } = global.config;
const json1Data = fs.readFileSync(__dirname + "/../commands/hemang/apnebande.json",'utf-8');

const data1hs = JSON.parse(json1Data);

const isapnabanda = data1hs.includes(event.author);
  
if(isapnabanda) {
  return; };
const listAdmin = ADMINBOT || config.ADMINBOT || [];
let find1 = false;
  for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)==event.author) {
      find1 = true;
                  break;
                }
  }
  
if(find1){
  return;
}
  
  
  
  
  
  
  
  
  
  
  
  
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) return
    else if(data.newMember == true) {
    var memJoin = event.logMessageData.addedParticipants.map(info => info.userFbId)
			for (let idUser of memJoin) {
					await new Promise(resolve => setTimeout(resolve, 1000));
					api.removeUserFromGroup(idUser, event.threadID, async function (err) {
                        if (err) return data["newMember"] = false;
                            await Threads.setData(event.threadID, { data });
                              global.data.threadData.set(event.threadID, data);
                    })
			}
 	return api.sendMessage(`AntiJoin is on so the member is removed ✅ `, event.threadID);
 }
}