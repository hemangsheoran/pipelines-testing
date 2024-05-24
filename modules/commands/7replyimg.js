module.exports.config = {
    name: "replyimg",
    version: "1.0.0",
    credits: "Hemang Sheoran",
    hasPermssion: 2,
    description: "Agar ap .replyimg ko on krdenge to bot gali wali photo reply krega unko jo bot admin ya .mygang m nhi h",
    usages: ".replyimg",
    commandCategory: "Created By Hemang Sheoran",
    cooldowns: 0
};







module.exports.handleEvent = async ({ event, Threads, Users, api, args }) => {
try{
const fs = require('fs');
const { threadID, messageID, senderID } = event;

let datahs = (await Threads.getData(event.threadID)).data || {};
 if (typeof datahs["replyimg"] == "undefined" || datahs.replyimg == false) return;
 if (event.senderID == api.getCurrentUserID()) return;

const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
	//const { join } =  global.nodemodule["path"];
const { join } = require('path');
  
  
const json1Data = fs.readFileSync(__dirname + "/hemang/apnebande.json",'utf-8');

const data1hs = JSON.parse(json1Data);

const isapnabanda = data1hs.includes(event.senderID);


const { ADMINBOT } = global.config;
const listAdmin = ADMINBOT || config.ADMINBOT || [];
let adminfind = false;
  for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)==event.senderID) {
      adminfind = true;
                  break;
                }
  }


if(!isapnabanda && !adminfind){
const nameofauthor = await Users.getNameUser(event.senderID);
const randomPathstartcall = readdirSync(join(__dirname, "HemangSheoran", "hsboss"));


const pathRandomstartcall = join(__dirname, "HemangSheoran", "hsboss",`${randomPathstartcall[Math.floor(Math.random() * randomPathstartcall.length)]}`);
var mentions = [];
mentions.push({ id: event.senderID, tag: `${nameofauthor}`, fromIndex: 0 });
var msgstart = `${nameofauthor} 👇`;

formPushstartcall = { body: msgstart, mentions, attachment: createReadStream(pathRandomstartcall) }
  
api.sendMessage(formPushstartcall, threadID, messageID);

  



}





} catch (error) {
    // Send the exact error message to the chat
    api.sendMessage(`Error: ${error.message}`, event.threadID, event.messageID);
}

  
};




























module.exports.run = async({ api, event, Threads}) => {
const fs = require('fs');
  
const mention = Object.keys(event.mentions);

const jsonData = fs.readFileSync(__dirname + "/hemang/apnebande.json",'utf-8');

const data1 = JSON.parse(jsonData);  
for (const id of mention) {

// Check if the id is not already present
if (!data1.includes(id)) {
  // If not present, push the id
  data1.push(id);
} }
  const updatedJsonData = JSON.stringify(data1, null, 2);
  
  fs.writeFileSync(__dirname + "/hemang/apnebande.json", updatedJsonData, 'utf-8');



  

api.sendMessage(`${mention}`, event.threadID); 
  
    let data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data["replyimg"] == "undefined" || data["replyimg"] == false) data["replyimg"] = true;
    else data["replyimg"] = false;  

if(data["replyimg"] == true){
  data["reply"] = false;
  data["replycp"] = false;
// data["replyimg"] = false;
 data["replyhang"] = false;
 data["replyimgtxt"] = false;
}
    await Threads.setData(event.threadID, { data });
    global.data.threadData.set(parseInt(event.threadID), data);
    
    return api.sendMessage(`✅ Done ${(data["replyimg"] == true) ? "𝗧𝗨𝗥𝗡 𝗢𝗡 ✅✅✅ 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆\nBot ab .𝗺𝘆𝗴𝗮𝗻𝗴 wale bndo ko chorke sbko image m gali dega\n👉[ But other Reply commands (replytxt, replycp etc..) ko bnd krdiya gya h processor pr load km krne k liye ]👈\nThis Command is Created BY 𝑯𝑬𝑴𝑨𝑵𝑮 𝑺𝑯𝑬𝑶𝑹𝑨𝑵 𝑱𝑨𝑨𝑻\n𝗜𝗗 𝗟𝗜𝗡𝗞- https://www.facebook.com/hemang.sheoran.16" : "𝗧𝗨𝗥𝗡 𝗢𝗙𝗙 ❌❌❌ Successfully\nThis Command is Created BY 𝑯𝑬𝑴𝑨𝑵𝑮 𝑺𝑯𝑬𝑶𝑹𝑨𝑵 𝑱𝑨𝑨𝑻\n𝗜𝗗 𝗟𝗜𝗡𝗞- https://www.facebook.com/hemang.sheoran.16"} `, event.threadID, event.messageID);

                    }