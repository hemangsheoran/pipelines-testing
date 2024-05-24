module.exports.config = {
    name: "addtogang",
    version: "1.0.0",
    credits: "Hemang Sheoran",
    hasPermssion: 2,
    description: "Add Fyters to your GANG (Bot will not abuse to those who are added to your gang)// BOT UN LOGO KO GALI NHI DEGA REPLY WALI COMMAMDS ON KRNE P JO APKI GANG M H",
    usages: ".addtogang [mention your fyters]",
    commandCategory: "Created By Hemang Sheoran",
    cooldowns: 0
};


  





























module.exports.run = async({ api, event, args, Threads}) => {
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



let msg = args.join(" ");

api.sendMessage(`${msg} These Users are added to your gang, AB Bot inko gali nhi dega`, event.threadID,event.messageID); 
  
    

}