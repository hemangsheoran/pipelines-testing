module.exports.config = {
    name: "mygang",
    version: "1.0.0",
    credits: "Hemang Sheoran",
    hasPermssion: 2,
    description: "Add Fyters to your gang (Bot will not abuse to those who are added to your gang) ",
    usages: ".mygang",
    commandCategory: "Created By Hemang Sheoran",
    cooldowns: 0
};















  




module.exports.run = async({ api, event, Users, args, Threads}) => {

const { ADMINBOT } = global.config;
const listAdmin = ADMINBOT || config.ADMINBOT || [];
let adminfind = false;
  for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)==event.senderID) {
      adminfind = true;
                  break;
                }
  }

const fs = require('fs');
  
const mention = Object.keys(event.mentions);

const jsonData = fs.readFileSync(__dirname + "/hemang/apnebande.json",'utf-8');
var msg = "";
const data1 = JSON.parse(jsonData); 
  var i = 1;
for (const id of data1) {
  const nameofauthor = await Users.getNameUser(id);
 msg = msg + `[${i++}] 👉` + nameofauthor + "\n" + "https://facebook.com/"+ id +"\n\n";
 }
  
  



  

api.sendMessage(`The members of your gang are\n\n${msg}`, event.threadID,event.messageID); 
  
    

}