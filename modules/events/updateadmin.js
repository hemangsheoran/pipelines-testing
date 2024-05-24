module.exports.config = {
	name: "adminUpdate",
	eventType: ["log:thread-admins","log:thread-name", "log:user-nickname", "log:thread-call","log:thread-icon", "log:thread-color", "log:link-status", "log:magic-words", "log:thread-approval-mode", "log:thread-poll"],
	version: "1.0.1",
	credits: "MrTomXxX",
	description: "Update group information quickly",
  dependencies: {
        "fs-extra": "",
        "path": ""
  },
    envConfig: {
        autoUnsend: true,
        sendNoti: true,
        timeToUnsend: 10
    }
};


module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	
    return;
}



























module.exports.run = async function ({ event, api, Threads, Users }) { 
    const { author, threadID, logMessageType, logMessageData } = event;
    const { setData, getData } = Threads;
const { ADMINBOT } = global.config;
const chalk = require('chalk');
var mentions = [];
  const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];



  
  	const fs = require("fs");
	var iconPath = __dirname + "/emoji.json";
	if (!fs.existsSync(iconPath)) fs.writeFileSync(iconPath, JSON.stringify({}));



const clc = require('cli-color');










  














  
  if (author == threadID) return;

    try {
        let dataThread = (await getData(threadID)).threadInfo;
        switch (logMessageType) {
            /*case "log:thread-admins": {
                if (logMessageData.ADMIN_EVENT == "add_admin") {
                    dataThread.adminIDs.push({ id: logMessageData.TARGET_ID })
                    if (global.configModule[this.config.name].sendNoti) api.sendMessage(`[⚜️] Đã cập nhật người dùng ${logMessageData.TARGET_ID} trở thành quản trị viên nhóm`, threadID, async (error, info) => {
                        if (global.configModule[this.config.name].autoUnsend) {
                            await new Promise(resolve => setTimeout(resolve, global.configModule[this.config.name].timeToUnsend * 1000));
                            return api.unsendMessage(info.messageID);
                        } else return;
                    });
                }
                else if (logMessageData.ADMIN_EVENT == "remove_admin") {
                    dataThread.adminIDs = dataThread.adminIDs.filter(item => item.id != logMessageData.TARGET_ID);
                    if (global.configModule[this.config.name].sendNoti) api.sendMessage(`[⚜️] Đã cập nhật người dùng ${logMessageData.TARGET_ID} trở thành thành viên`, threadID, async (error, info) => {
                        if (global.configModule[this.config.name].autoUnsend) {
                            await new Promise(resolve => setTimeout(resolve, global.configModule[this.config.name].timeToUnsend * 1000));
                            return api.unsendMessage(info.messageID);
                        } else return;
                    });
                }
                break;
            }*/

            case "log:thread-admins": {
                if (logMessageData.ADMIN_EVENT == "add_admin") {
                    dataThread.adminIDs.push({ id: logMessageData.TARGET_ID })
                    api.sendMessage(`[🌟] 𝗚𝗥𝗢𝗨𝗣 𝗨𝗣𝗗𝗔𝗧𝗘 [🌟]\n➥➢➣➤ ${logMessageData.TARGET_ID} IS NOW A GROUP ADMINISTRATOR \n CONGRATULATIONS 🎉💝`, threadID);
                }
                else if (logMessageData.ADMIN_EVENT == "remove_admin") {
                    dataThread.adminIDs = dataThread.adminIDs.filter(item => item.id != logMessageData.TARGET_ID);
                    api.sendMessage(`[🌟] 𝗚𝗥𝗢𝗨𝗣 𝗨𝗣𝗗𝗔𝗧𝗘 [🌟]\n➥➢➣➤ ${logMessageData.TARGET_ID} HAS BEEN REMOVED FROM ADMIN`, threadID);
                }
                break;
            }

            case "log:user-nickname": {
let datahs = (await Threads.getData(event.threadID)).data || {};
                                   if ( datahs.antinickname == false){
   break;
       }       
              
              
              
              
              
              
              
const nameofnickname = await Users.getNameUser(logMessageData.participant_id);
var oldname1 = dataThread.nicknames[logMessageData.participant_id] || nameofnickname;              

                dataThread.nicknames[logMessageData.participant_id] = logMessageData.nickname || nameofnickname;

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

if(event.author == api.getCurrentUserID()) break;        if(event.author == logMessageData.participant_id){


mentions.push({ id: logMessageData.participant_id, tag: `${nameofnickname}`, fromIndex: 0 });


  
api.sendMessage({body:`[🌟]    𝗚𝗥𝗢𝗨𝗣 𝗨𝗣𝗗𝗔𝗧𝗘    [🌟]\n➥➢➣➤${(logMessageData.nickname.length == 0) ? `NICKNAME FOR USER: ${nameofnickname} HAS BEEN REMOVED` : `NICKNAME FOR USER : ${nameofnickname} HAS BEEN UPDATED\n NEW NICKNAME IS: ${logMessageData.nickname}`}.`, mentions, attachment: fs.createReadStream(__dirname + "/cache/other/nickname.gif")} ,threadID);  
  break;
}                              
if(!finddd && !find) {

api.changeNickname(`${oldname1}`, event.threadID,logMessageData.participant_id);
  
  api.sendMessage(`${event.author} ARE DOST NA TO TUMHARI YE ID H NA TUM ADMIN HO FIR KYU DUSRO K NICKNAME K CHAKKR M LAGE PADE HO 💖💖💖`,event.threadID);

break;
}
                                       
                                       api.sendMessage({body:`[🌟]    𝗚𝗥𝗢𝗨𝗣 𝗨𝗣𝗗𝗔𝗧𝗘    [🌟]\n➥➢➣➤${(logMessageData.nickname.length == 0) ? `NICKNAME FOR USER: ${nameofnickname} HAS BEEN REMOVED` : `NICKNAME FOR USER : ${nameofnickname} HAS BEEN UPDATED\n NEW NICKNAME IS: ${logMessageData.nickname}`}.`, attachment: fs.createReadStream(__dirname + "/cache/other/nickname.gif")} ,threadID);
                break;
            }

            case "log:thread-name": {
         const threadInfo = await api.getThreadInfo(event.threadID);
  const finddd = threadInfo.adminIDs.find(el => el.id == event.author);
if(!finddd){
  break;
}
              else{

              
                dataThread.threadName = event.logMessageData.name || null;
                api.sendMessage(`[🌟] 𝗚𝗥𝗢𝗨𝗣 𝗨𝗣𝗗𝗔𝗧𝗘 [🌟]\n➥➣➢➤ ${(dataThread.threadName) ? `FOR UPDATE GROUP NAME OF SMALL: ${dataThread.threadName}` : 'TO REMOVE GROUP NAME'}.`, threadID);
                break;
              }
            }
            case "log:thread-icon": {
            	let preIcon = JSON.parse(fs.readFileSync(iconPath));
            	dataThread.threadIcon = event.logMessageData.thread_icon || "👍";
                if (global.configModule[this.config.name].sendNoti) api.sendMessage(`[⚜️] 𝗚𝗥𝗢𝗨𝗣 𝗨𝗣𝗗𝗔𝗧𝗘 [⚜️]\n»  ${event.logMessageBody.replace("emoticon", "icon")}\n» Original Icons: ${preIcon[threadID] || "unclear"}`, threadID, async (error, info) => {
                	preIcon[threadID] = dataThread.threadIcon;
                	fs.writeFileSync(iconPath, JSON.stringify(preIcon));
                    if (global.configModule[this.config.name].autoUnsend) {
                        await new Promise(resolve => setTimeout(resolve, global.configModule[this.config.name].timeToUnsend * 1000));
                        return api.unsendMessage(info.messageID);
                    } else return;
                });
                break;
               }

            case "log:thread-call": {
                if (logMessageData.event == "group_call_started") {
                    const name = await Users.getNameUser(logMessageData.caller_id);



const randomPathstartcall = readdirSync(join(__dirname, "cache", "startcall", "randomgif"));


const pathRandomstartcall = join(__dirname, "cache", "startcall", "randomgif",`${randomPathstartcall[Math.floor(Math.random() * randomPathstartcall.length)]}`);

var msgstart = `[🌟] 𝗚𝗥𝗢𝗨𝗣 𝗨𝗣𝗗𝗔𝗧𝗘 [🌟]\n➥➢➣➤  ${name}  🌺🍂🌹 STARTED A ${(logMessageData.video) ? 'VIDEO ' : ''}CALL 🚩,𝗣𝗟𝗭 𝗝𝗢𝗜𝗡 𝗘𝗩𝗘𝗥𝗬𝗢𝗡𝗘💐`;

formPushstartcall = { body: msgstart, attachment: createReadStream(pathRandomstartcall) }
                           







                  
                    api.sendMessage(formPushstartcall, threadID);
                }
                else if (logMessageData.event == "group_call_ended") {
                    const callDuration = logMessageData.call_duration;

                    //Transform seconds to hours, minutes and seconds
                    let hours = Math.floor(callDuration / 3600);
                    let minutes = Math.floor((callDuration - (hours * 3600)) / 60);
                    let seconds = callDuration - (hours * 3600) - (minutes * 60);

                    //Add 0 if less than 10
                    if (hours < 10) hours = "0" + hours;
                    if (minutes < 10) minutes = "0" + minutes;
                    if (seconds < 10) seconds = "0" + seconds;

                    const timeFormat = `${hours}:${minutes}:${seconds}`;



const randomPathendcall = readdirSync(join(__dirname, "cache", "endcall", "randomgif"));


const pathRandomendcall = join(__dirname, "cache", "endcall", "randomgif",`${randomPathendcall[Math.floor(Math.random() * randomPathendcall.length)]}`);


var msgend = `[🌟] 𝗚𝗥𝗢𝗨𝗣 𝗨𝗣𝗗𝗔𝗧𝗘 [🌟]\n➥ ${(logMessageData.video) ? 'VIDEO ' : ''}CALL HAS ENDED.\n» CALL DURATION: ${timeFormat}`

        formPushendcall = { body: msgend, attachment: createReadStream(pathRandomendcall) }          

                  
                    api.sendMessage(formPushendcall, threadID);
                    
                }
                else if (logMessageData.joining_user) {
                    const name = await Users.getNameUser(logMessageData.joining_user);
   






const randomPathjoincall = readdirSync(join(__dirname, "cache", "jointhecall", "randomgif"));


const pathRandomjoincall = join(__dirname, "cache", "jointhecall", "randomgif",`${randomPathjoincall[Math.floor(Math.random() * randomPathjoincall.length)]}`);

mentions.push({ id: logMessageData.joining_user, tag: `${name}`, fromIndex: 0 });


                    const callDuration = logMessageData.call_duration;

                    //Transform seconds to hours, minutes and seconds
                    let hours = Math.floor(callDuration / 3600);
                    let minutes = Math.floor((callDuration - (hours * 3600)) / 60);
                    let seconds = callDuration - (hours * 3600) - (minutes * 60);

                    //Add 0 if less than 10
                    if (hours < 10) hours = "0" + hours;
                    if (minutes < 10) minutes = "0" + minutes;
                    if (seconds < 10) seconds = "0" + seconds;

                    const timeFormat = `${hours}:${minutes}:${seconds}`;
                  

var msgjoin = `[🌟] 𝗚𝗥𝗢𝗨𝗣 𝗨𝗣𝗗𝗔𝗧𝗘 [🌟]\n➥➢➣➤  ${name}  🍂🌺🌹 JOINED THE ${(logMessageData.group_call_type == '1') ? 'VIDEO ' : ''}CALL.📞 ✅`

                  


    formPushjoincall = { body: msgjoin, mentions, attachment: createReadStream(pathRandomjoincall) }
                           
                        
                  
                  api.sendMessage(formPushjoincall,threadID);
                }
                break;
            }
        case "log:magic-words":
            {
                return api.sendMessage(`[⚜️] Theme ${event.logMessageData.magic_word} added effects: ${event.logMessageData.theme_name}\n[⚜️] Emoij: ${event.logMessageData.emoji_effect || "No emoji"}\n[⚜️] Total ${event.logMessageData.new_magic_word_count} word effects added`, threadID)
            }
        case "log:thread-poll":
            {
                var str = event.logMessageData.question_json
                var obj = JSON.parse(str);
                if (event.logMessageData.event_type == "question_creation") {
                    return api.sendMessage(`${event.logMessageBody}`, threadID)
                }
                if (event.logMessageData.event_type == "update_vote") {
                    return api.sendMessage(`${event.logMessageBody}`, threadID)
                }
            }
     //   case "log:thread-approval-mode":
        //    {
          //      return api.sendMessage(event.logMessageBody, threadID)
        //    }
             case "log:thread-color": {
            	dataThread.threadColor = event.logMessageData.thread_color || "🌤";
                if (global.configModule[this.config.name].sendNoti) api.sendMessage(`[⚜️] 𝗚𝗥𝗢𝗨𝗣 𝗨𝗣𝗗𝗔𝗧𝗘 [⚜️]\n»  ${event.logMessageBody.replace("Topic", "color")}`, threadID, async (error, info) => {
                    if (global.configModule[this.config.name].autoUnsend) {
                        await new Promise(resolve => setTimeout(resolve, global.configModule[this.config.name].timeToUnsend * 1000));
                        return api.unsendMessage(info.messageID);
                    } else return;
                });
                break;
            }
        }
        await setData(threadID, { threadInfo: dataThread });
    } catch (e) { console.log(e) };
                }