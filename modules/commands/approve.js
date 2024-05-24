module.exports.config = {
	name: "approve",
	version: "1.0.2",
	hasPermssion: 2,
	credits: "DungUwU mod by Nam",
	description: "approve the gc using bots xD",
	commandCategory: "Admin",
    cooldowns: 5
};


const dataPath = __dirname + "/approve/approvedThreads.json";
const dataPending = __dirname + "/approve/pendingdThreads.json";
const fs = require("fs");

module.exports.onLoad = () => {
	if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, JSON.stringify([]));
  if (!fs.existsSync(dataPending)) fs.writeFileSync(dataPending, JSON.stringify([]));
}
module.exports.handleReply = async function ({ event, api, Currencies, handleReply, Users, args }) {
    if (handleReply.author != event.senderID) return;
    const { body, threadID, messageID, senderID } = event;
    const { type } = handleReply;
    let data = JSON.parse(fs.readFileSync(dataPath));
    let dataP = JSON.parse(fs.readFileSync(dataPending));
    let idBox = (args[0]) ? args[0] : threadID;
  switch (type) {
        case "pending": {
          switch (body) {
                case `A`: {
   			data.push(idBox);
   			fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
   			api.sendMessage(`» Successfully approved the box:\n${idBox}`, threadID, () => {
          dataP.splice(dataP.indexOf(idBox), 1);
    		fs.writeFileSync(dataPending, JSON.stringify(dataP, null, 2));
    	}, messageID)
        }
        }
      }
    }
  }
module.exports.run = async ({ event, api, args, Threads, handleReply, Users }) => {
	const { threadID, messageID, senderID } = event;
	let data = JSON.parse(fs.readFileSync(dataPath));
  let dataP = JSON.parse(fs.readFileSync(dataPending));
  let msg = "";
  var lydo = args.splice(2).join(" ");
  let idBox = (args[0]) ? args[0] : threadID;
        if (args[0] == "list" || args[0] == "l") {
    	msg = `=====「 GC THAT HAD BEEN APPROVED: ${data.length} 」 ====`;
    	let count = 0;
    	for (e of data) {
        let threadInfo = await api.getThreadInfo(e);
          let threadName = threadInfo.threadName ? threadInfo.threadName : await Users.getNameUser(e);
    		msg += `\n〘${count+=1}〙» ${threadName}\n${e}`;
    	}
    	api.sendMessage(msg, threadID, (error, info) => {
        global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            author: event.senderID,
            type: "a",
        })
    }, messageID);
        }
     else if (args[0] == "pending" || args[0] == "p") {
    	msg = `=====「 THREADS NEED TO BE APPROVE: ${dataP.length} 」 ====`;
    	let count = 0;
    	for (e of dataP) {
        let threadInfo = await api.getThreadInfo(e);
          let threadName = threadInfo.threadName ? threadInfo.threadName : await Users.getNameUser(e);
    		msg += `\n〘${count+=1}〙» ${threadName}\n${e}`;
    	}
    	api.sendMessage(msg, threadID, (error, info) => {
        global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            author: event.senderID,
            type: "pending",
        })
    }, messageID);
     }
       else if (args[0] == "help" || args[0] == "h") {
         const tst = (await Threads.getData(String(event.threadID))).data || {};
  const pb = (tst.hasOwnProperty("PREFIX")) ? tst.PREFIX : global.config.PREFIX;
  const nmdl = this.config.name
  const cre = this.config.credits
        return api.sendMessage(`=====「 APPROVE 」=====\n\n${pb}${nmdl} l/list => see list of approved boxes\n\n${pb}${nmdl} p/pending => see the list of unapproved boxes\n\n${pb}${nmdl} d/del => with ID to remove from bot used list\n\n${pb}${nmdl} => Attach an ID to browse that box\n\n⇒ ${cre} ⇐`, threadID, messageID);
       }
      
    else if (args[0] == "del" || args[0] == "d") {
    	idBox = (args[1]) ? args[1] : event.threadID;
      if (isNaN(parseInt(idBox))) return api.sendMessage("[ ERR ] Not a number", threadID, messageID);
    	if (!data.includes(idBox)) return api.sendMessage("[ ERR ] Box is not pre-approved!", threadID, messageID);
      api.sendMessage(`[ OK ] Your group has been removed from the browsing list by the admin for the reason: ${lydo}`, idBox);
    	api.sendMessage(`[ OK ] Box has been removed from the list of allowed bots`, threadID, () => {
    		data.splice(data.indexOf(idBox), 1);
    		fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    	}, messageID)
    }
    else if (isNaN(parseInt(idBox))) api.sendMessage("[ ERR ] The ID you entered is not valid", threadID, messageID);
    else if (data.includes(idBox)) api.sendMessage(`[ - ] ID ${idBox} pre-approved!`, threadID, messageID);
   	else api.sendMessage(`🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟\n𝗔𝗣𝗞𝗘 𝗚𝗥𝗢𝗨𝗣 𝗞𝗢 𝗕𝗢𝗧 𝗔𝗗𝗠𝗜𝗡 𝗛𝗘𝗠𝗔𝗡𝗚 𝗦𝗛𝗘𝗢𝗥𝗔𝗡 𝗞 𝗗𝗪𝗔𝗥𝗔 𝗔𝗣𝗣𝗥𝗢𝗩𝗘 𝗞𝗥𝗗𝗜𝗬𝗔 𝗚𝗬𝗔 𝗛 \n ${global.config.BOTNAME} - Bot Connected✅✅✅✅✅\n🌻Total users: ${global.data.allUserID.length}🌻\n💖 𝑱𝑨𝑰 𝑺𝑯𝑹𝑬𝑬 𝑲𝑹𝑰𝑺𝑯𝑵𝑨 💖\n𝐌𝐲 𝐍𝐚𝐦𝐞 𝐈𝐬 ${global.config.BOTNAME} \nMy Prefix Is [ ${global.config.PREFIX} ]\nType ${global.config.PREFIX}help to see my cmd list\n────────────────\nMy Owner Is 💥🅷🅴🅼🅰🅽🅶 🆂🅷🅴🅾🆁🅰🅽 🅹🅰🅰🆃 🥰.\n────────────────\n𝗨𝗦𝗘 👉👉👉 ${global.config.PREFIX}Called 👈👈👈 𝗰𝗼𝗺𝗺𝗮𝗻𝗱 𝘁𝗼 𝘀𝗲𝗻𝗱 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝘁𝗼 𝗯𝗼𝘁 𝗮𝗱𝗺𝗶𝗻 (.𝗰𝗮𝗹𝗹𝗮𝗱 𝗰𝗼𝗺𝗺𝗮𝗻𝗱 𝗸𝗮 𝘂𝘀𝗲𝗿 𝗸𝗿𝗸𝗲 𝗮𝗮𝗽 𝗮𝗽𝗻𝗮 𝗺𝘀𝗴 𝗯𝗼𝘁 𝗮𝗱𝗺𝗶𝗻 𝘁𝗮𝗸 𝗯𝗵𝗲𝗷 𝘀𝗮𝗸𝘁𝗲 𝗵 )\n────────────────\n OWNER'S ID ---->> https://www.facebook.com/hemang.sheoran.16?mibextid=ZbWKw\n𝗖𝗼𝗻𝗴𝗿𝗮𝘁𝘂𝗹𝗮𝘁𝗶𝗼𝗻 🎉🎉🎉🎉 𝗬𝗼𝘂𝗿 𝗴𝗿𝗼𝘂𝗽 𝗶𝘀 𝗮𝗽𝗽𝗿𝗼𝘃𝗲𝗱 `, idBox, (error, info) => {
   		
      const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
   let admID = "100017985245260";    
  
      api.getUserInfo(parseInt(admID), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var firstname = data[obj].name.replace("@", "");  
      
      axios.get('https://api.satou-chan.xyz/api/endpoint/happy').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
      api.sendMessage({body: `❒❒ BOT ARE NOW CONNECTED ❒❒\n=====================\n┏━━━━ 🖤 ━━━━┓
   ✦❥HEMANG ✦ 
┗━━━    🖤 ━━━━┛\n=====================\n➪ BOT: ${global.config.BOTNAME}\n➪ Prefix: ${global.config.PREFIX}\n➪ Users: ${global.data.allUserID.length}\n➪ Groups: ${global.data.allThreadID.length}\n=====================\n[]---------------------------------------[]\nUse '${global.config.PREFIX}Help' T0o View The Commands That Available!(ღ˘⌣˘ღ)\n[]---------------------------------------[]\n⌨ Made by: ${firstname}\n`, mentions: [{
                           tag: firstname,
                           id: admID,
                           fromIndex: 0,
                 }],
						attachment: fs.createReadStream(__dirname + `/cache/duyet.${ext}`)
					}, idBox,() => fs.unlinkSync(__dirname + `/cache/duyet.${ext}`));
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/duyet.${ext}`)).on("close", callback);
			}) 
      })
   		if (error) return api.sendMessage("[ ERR ] Something went wrong, make sure the id you entered is valid and the bot is in the box!", threadID, messageID);
   		else {
   			data.push(idBox);
   			fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
   			api.sendMessage(`[ OK ] Successfully Approved The Box (◕‿◕):\n${idBox}`, threadID, () => {
          dataP.splice(dataP.indexOf(idBox), 1);
    		fs.writeFileSync(dataPending, JSON.stringify(dataP, null, 2));
    	}, messageID)
        }
   	});
                         }