module.exports.config = {
    name: "removefromgang",
    version: "1.0.0",
    credits: "Hemang Sheoran",
    hasPermssion: 2,
    description: "Remove Fyters from your gang (Bot will not abuse to those who are added to your gang) ",
    usages: ".removefromgang [mention your fyters]",
    commandCategory: "Created By Hemang Sheoran",
    cooldowns: 0
};















  





























module.exports.run = async({ api, event, Threads}) => {
const fs = require('fs');
  
const mention = Object.keys(event.mentions);

const jsonData = fs.readFileSync(__dirname + "/hemang/apnebande.json",'utf-8');
var updatedData;
const data1 = JSON.parse(jsonData);  
const newData1 = data1.filter(id => !mention.includes(id));
  const updatedJsonData = JSON.stringify(newData1, null, 2);
  
  fs.writeFileSync(__dirname + "/hemang/apnebande.json", updatedJsonData, 'utf-8');

var hs = args.join(" ");

  

api.sendMessage(`${hs} These Users are removed from your gang list, AB Bot inko gali de skta h`, event.threadID, event.messageID); 
  
    

}