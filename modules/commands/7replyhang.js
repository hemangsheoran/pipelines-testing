module.exports.config = {
    name: "replyhang",
    version: "1.0.0",
    credits: "Hemang Sheoran",
    hasPermssion: 2,
    description: "Agar aap replyhang ko on krdenge to bot bot admin and .mygang k member ko chorke sbke msg p hanger se reply krega ",
    usages: ".replyhang on/off",
    commandCategory: "createdbyHemang",
    cooldowns: 0
};







module.exports.handleEvent = async ({ event, Threads, Users, api, args }) => {

const fs = require('fs');
const { threadID, messageID, senderID } = event;

let datahs = (await Threads.getData(event.threadID)).data || {};
 if (typeof datahs["replyhang"] == "undefined" || datahs.replyhang == false) return;
 if (event.senderID == api.getCurrentUserID()) return;



  
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



  
var hhss = `#𝗧𝗘𝗥𝗜_𝗕𝗔𝗛𝗔𝗡_𝗞𝗜_𝗖𝗛𝗨𝗧_𝗠_𝗟𝗢𝗗𝗔 😆😆😆😆😆😆😆😆😆😆

▞▞▞ 🆃🆄🅼🅷🅰🆁🅰 🅱🅰🅰🅿 🅷🅴🆁🅴  ▞▞▞


▞▞▞ 🅹🅰🅰🆃 ▞▞▞


   :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P

     :P :P :P : <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P



:P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P :P
TERII MAA M OR KUTIAA M DIFFERENCE DHUDA MENE TO KOI DIFFERENCE NHII MILAA🤣🤣
DDONNALD TRUUMMP KAA LUNDD MUH M. LETTI H TERRI AMMY OR TTU AONEE HATH SE MUTH MAARTA H USSKI🤣🤣😂😂
MAGGARMACHH KI SHAAKAL KUTIAA K BACHHE OR TAATTI KI AUKAAT WALEE CHUDAKKKAD😂😂🤣🤣
TERI 🙂BHN ☺️KI 💔XHUT ☺️PE 🥀HUKKA 😀RAKH 😘KR 😂PEU 😝TERRIIII MAAA  KIII XHUTT  PERR UMMMHAAA💋💋💋💋😋😋😋😋😋🙈🙈🙈🙈TERI 🙂BHN ☺️KI 💔XHUT ☺️PE 🥀HUKKA 😀RAKH 😘KR 😂PELU 😝
TERI RANDI MAA KO ROAD P NANGI KARKE PELU MADHARCHOD 😆😆😆😆😆😆😆
😆😆😆
---. ▞▞▞ https://facebook.com/${event.senderID} 👈 IS ID WALE KI OR USKE TATTO  KI MAA KO ROAD P LITAKE UNKI GAND FADNE WALA UNKA BAAP HERE ▞▞▞
𝗧𝗘𝗥𝗜 𝗠𝗔𝗔 𝗞𝗢 𝗚𝗔𝗥𝗠𝗜 𝗞𝗜 𝗞𝗔𝗗𝗔𝗞𝗧𝗜 𝗗𝗛𝗨𝗣 𝗠 𝗚𝗔𝗥𝗔𝗠 𝗖𝗛𝗔𝗧 𝗣 𝗟𝗜𝗧𝗔 𝗞 𝗥𝗔𝗡𝗗𝗜 𝗞𝗜 𝗧𝗔𝗥𝗔𝗛 𝗣𝗘𝗟𝗡𝗘 𝗪𝗔𝗟𝗔 𝗧𝗘𝗥𝗔 𝗕𝗔𝗔𝗣
😆😆😆😆😆😆😆
😆😆😆😆😆😆😆 `;

api.sendMessage(`${hhss}`,threadID,messageID);

var mentions = [];
mentions.push({ id: event.senderID, tag: `${nameofauthor}`, fromIndex: 0 });

var hemang = [`RKHLE IS HANGER KO APNI MAA KI CHUT M AB`,`OR KR REPLY LE IS HANGER KO APNI GAND M`,`LELE IS HANGER KO BHI APNI MAA KI CHUT M`,`LE BHN K LUND IS HANGER KO LELE MERA LUND SMJH K APNI GAND M`,`LE BHN K LUND IS HANGER KO BHI OR KAR MSG OR DU HANGER TERI GAND M`,`LELE GANDU IS HANGER KO BHI APNI CHUT M AB`,`LELE ISKO BHI APNI MAA KI CHUT M GANDU RANDI K PILLE`];
var sheoran = hemang[Math.floor(Math.random() * hemang.length)]


setTimeout(() => {
api.sendMessage({body: `${nameofauthor} ${sheoran}`, mentions}, threadID, messageID);
}, 200); 
  





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
    if (typeof data["replyhang"] == "undefined" || data["replyhang"] == false) data["replyhang"] = true;
    else data["replyhang"] = false;

if(data["replyhang"] == true){
  data["reply"] = false;
  data["replycp"] = false;
 data["replyimg"] = false;
 //data["replyhang"] = false;
 data["replyimgtxt"] = false;
}    
    await Threads.setData(event.threadID, { data });
    global.data.threadData.set(parseInt(event.threadID), data);
    
    return api.sendMessage(`✅ 𝗗𝗼𝗻𝗲 ${(data["replyhang"] == true) ? "𝗧𝗨𝗥𝗡 𝗢𝗡 ✅✅✅ 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆\nBot ab .𝗺𝘆𝗴𝗮𝗻𝗴 wale bndo ko chorke sbke reply p hanger marega \n👉[ But other Reply commands (replyimg, replycp etc..) ko bnd krdiya gya h processor pr load km krne k liye ]👈\nThis Command is Created BY 𝑯𝑬𝑴𝑨𝑵𝑮 𝑺𝑯𝑬𝑶𝑹𝑨𝑵 𝑱𝑨𝑨𝑻\n𝗜𝗗 𝗟𝗜𝗡𝗞- https://www.facebook.com/hemang.sheoran.16" : "𝗧𝗨𝗥𝗡 𝗢𝗙𝗙 ❌❌❌ Successfully\nThis Command is Created BY 𝑯𝑬𝑴𝑨𝑵𝑮 𝑺𝑯𝑬𝑶𝑹𝑨𝑵 𝑱𝑨𝑨𝑻\n𝗜𝗗 𝗟𝗜𝗡𝗞- https://www.facebook.com/hemang.sheoran.16"} `, event.threadID,event.messageID);

}