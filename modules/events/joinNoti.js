module.exports.config = {
    name: "joinNoti",
    eventType: ["log:subscribe"],
    version: "1.0.1",
    credits: "CatalizCS",
    description: "Notification of bots or people entering groups with random gif/photo/video",
    dependencies: {
        "fs-extra": "",
        "path": "",
        "pidusage": ""
    }
};
 
module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
 
    const path = join(__dirname, "cache", "joinGif");
    if (existsSync(path)) mkdirSync(path, { recursive: true }); 
 
    const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });
 
    return;
}
 
 
module.exports.run = async function({ api, event }) {
    const { join } = global.nodemodule["path"];
    const { threadID } = event;
    if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
        api.changeNickname(`: ̗̀➤ ${config.BOTNAME} ༊ೄྀ࿐ ˊˎ-`, threadID, api.getCurrentUserID());
        const fs = require("fs");
        return api.sendMessage("", event.threadID, () => api.sendMessage({body: `🛑🛑🛑🛑🛑🌟🌟🌟🌟🛑🛑🛑🛑🛑\n𝗔𝗣𝗞𝗔 𝗚𝗥𝗢𝗨𝗣 𝗕𝗢𝗧 𝗞𝗜 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗨𝗦𝗘 𝗞𝗥𝗡𝗘 𝗞 𝗟𝗜𝗬𝗘 𝗔𝗣𝗣𝗥𝗢𝗩𝗘 𝗡𝗔𝗛𝗜 𝗛 ,\n 𝗚𝗥𝗢𝗨𝗣 𝗞𝗢 𝗔𝗣𝗣𝗥𝗢𝗩𝗘 𝗞𝗥𝗩𝗔𝗡𝗘 𝗞 𝗟𝗜𝗬𝗘\n👉👉👉    .request  👈👈👈 𝗟𝗜𝗞𝗛𝗘 ${global.config.BOTNAME} - 𝗡𝗢𝗧 𝗖𝗢𝗡𝗡𝗘𝗖𝗧𝗘𝗗 \n─────────────────\n🌻Total users: ${global.data.allUserID.length}🌻\n💖 𝑱𝑨𝑰 𝑺𝑯𝑹𝑬𝑬 𝑲𝑹𝑰𝑺𝑯𝑵𝑨 💖\n𝐌𝐲 𝐍𝐚𝐦𝐞 𝐈𝐬 ${global.config.BOTNAME} \nMy Prefix Is [ ${global.config.PREFIX} ]\nType ${global.config.PREFIX}help to see my cmd list\n─────────────────\nMy Owner Is 💥🅷🅴🅼🅰🅽🅶 🆂🅷🅴🅾🆁🅰🅽 🅹🅰🅰🆃 🥰.\n─────────────────\nUse ${global.config.PREFIX}Called For Any Issues:\nOWNER'S ID ------>>\n https://www.facebook.com/hemang.sheoran.16?mibextid=ZbWKw\n 𝗚𝗿𝗼𝘂𝗽 𝗸𝗼 𝗮𝗽𝗽𝗿𝗼𝘃𝗲 𝗸𝗿𝘃𝗮𝗻𝗲 𝗸 𝗹𝗶𝘆𝗲 𝗕𝗼𝘁 𝗼𝘄𝗻𝗲𝗿 𝗸𝗼 𝗺𝘀𝗴 𝗸𝗮𝗿𝗲 𝘆𝗮 .request 𝗟𝗶𝗸𝗵𝗲 ✅✅✅🌟🌟🌟🌟 `, attachment: fs.createReadStream(__dirname + "/cache/joinGif/welc.gif")} ,threadID));
    }
    else {
        try {
            const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
            let { threadName, participantIDs } = await api.getThreadInfo(threadID);
 
            const threadData = global.data.threadData.get(parseInt(threadID)) || {};
            const path = join(__dirname, "cache", "joinGif");
            const pathGif = join(path, `${threadID}.gif`);
 
            var mentions = [], nameArray = [], memLength = [], i = 0;
            
            for (id in event.logMessageData.addedParticipants) {
                const userName = event.logMessageData.addedParticipants[id].fullName;
                nameArray.push(userName);
                mentions.push({ tag: userName, id });
                memLength.push(participantIDs.length - i++);
            }
            memLength.sort((a, b) => a - b);
            
            (typeof threadData.customJoin == "undefined") ? msg = `➥Hello {name} 💝💐🌹🚩,\n─────────────────\n 💐💐🌼 You're The {soThanhVien} Member of {threadName} 🎉🎉🌷 Group Please Enjoy Your Stay,  Admin  Team 🇮🇳🇮🇳🚩🚩   •❅──────✧❅✦❅✧──────❅•              🅾🆆🅽🅴🆁 ❈ ◦•≫ 🅷🅴🅼🅰🅽🅶  🆂🅷🅴🅾🆁🅰🅽  🅹🅰🅰🆃                    ▰▱▰▱▰▱▰▱▰▱▰▱▰▱  𝑳𝑰𝑵𝑲~  https://www.facebook.com/hemang.sheoran.16 ` : msg = threadData.customJoin;
            msg = msg
            .replace(/\{name}/g, nameArray.join(', '))
            .replace(/\{type}/g, (memLength.length > 1) ?  'Friends' : 'Friend')
            .replace(/\{soThanhVien}/g, memLength.join(', '))
            .replace(/\{threadName}/g, threadName);
 
            if (existsSync(path)) mkdirSync(path, { recursive: true });
 
            const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));
 
            if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
            else if (randomPath.length != 0) {
                const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
                formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
            }
            else formPush = { body: msg, mentions }
 
            return api.sendMessage(formPush, threadID);
        } catch (e) { return console.log(e) };
    }
      }