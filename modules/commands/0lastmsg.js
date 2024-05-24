const fs = require('fs-extra');
module.exports.config = {
	name: "lastmsg",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Hemang Sheoran",
	description: "Can find lastmsg time of a member",
	commandCategory: "Created By Hemang Sheoran",
	usages: ".lastmsg [mention]",
	cooldowns: 0
};

module.exports.handleEvent = async ({ api,Users, event,Threads, args }) => {
try{

const { messageID, threadID} = event;

const { setData, getData } = Threads;



  
const axios = require('axios');
  const moment = require("moment-timezone");
  var time = moment.tz("Asia/Kolkata").format('HH:mm:ss');
  var ngay = moment.tz("Asia/Kolkata").format('D/MM/YYYY');

 var hemang = `Date: ${ngay}\n Time: ${time}`

let data = (await Threads.getData(event.threadID)).data || {};
var sender = event.senderID + 1603987654321;
//let dataThread = (await getData(threadID)).threadInfo
  
if (typeof data[sender] == "undefined" || data[sender] == hemang) data[sender] = hemang;
    else data[sender] = hemang;
  

//dataThread.lastmsg[event.senderID] = hemang || "hello";



await Threads.setData(event.threadID, { data });


global.data.threadData.set(parseInt(event.threadID), data);





//await setData(threadID, { threadInfo: dataThread });
  

//api.sendMessage(`${dataThread}`, event.threadID, event.messageID);







} catch (error) {
    // Send the exact error message to the chat
  //  api.sendMessage(`Error: ${error.message}`, event.threadID, event.messageID);
}




  
  
};

module.exports.run = async ({ api, event,Threads,Users, args }) => {
try{
const { messageID, threadID} = event;
const { setData, getData } = Threads;

//let dataThread = (await getData(threadID)).threadInfo;
let data = (await Threads.getData(event.threadID)).data || {};
const mention = Object.keys(event.mentions);
    if (!mention[0]) return 

var id = mention[0];
  
//var sheoran = dataThread.lastmsg[id] || "hello16";
var sheoran = data[id + 1603987654321] ;

 const name = await Users.getNameUser(mention[0]); 
var mentions = [];
mentions.push({ id: mention[0], tag: `${name}`, fromIndex: 0 });  

var final = `${name} ne is group m last msg\n${sheoran}\n Ko kiya tha\n\n 𝗧𝗵𝗶𝘀 𝗰𝗼𝗺𝗺𝗮𝗻𝗱 𝗶𝘀 𝗰𝗿𝗲𝗮𝘁𝗲𝗱 𝗯𝘆 𝗛𝗘𝗠𝗔𝗡𝗚 𝗦𝗛𝗘𝗢𝗥𝗔𝗡 𝗝𝗔𝗔𝗧 🌟🌟`
if(typeof sheoran == "undefined"){
  final = `${name} ne is group m bot k samne kbhi bhi msg nhi kiya h jbse is command ko on kiya gya h\n\n𝗧𝗵𝗶𝘀 𝗰𝗼𝗺𝗺𝗮𝗻𝗱 𝗶𝘀 𝗰𝗿𝗲𝗮𝘁𝗲𝗱 𝗯𝘆 𝗛𝗘𝗠𝗔𝗡𝗚 𝗦𝗛𝗘𝗢𝗥𝗔𝗡 𝗝𝗔𝗔𝗧 🌟🌟`
    }

  
api.sendMessage({body:`${final}`,mentions}, event.threadID, event.messageID);


} catch (error) {
    // Send the exact error message to the chat
    api.sendMessage(`Error: ${error.message}`, event.threadID, event.messageID);
}
  

  
};