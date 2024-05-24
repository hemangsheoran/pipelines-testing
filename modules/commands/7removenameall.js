module.exports.config = {
 name: "removenameall",
 version: "1.0.0",
 hasPermssion: 2,
 credits: "Khánh Milo",
 description: "Remove nicknames all tv",
 commandCategory: "other",
 usages: ".removenameall",
 cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
 var threadInfo = await api.getThreadInfo(event.threadID)
    var idtv = threadInfo.participantIDs
 console.log(threadInfo)
 const name = args.join(" ")
 function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    };
    for(let setname of idtv) {
 await delay(800)
 api.changeNickname(``, event.threadID, setname);
    }
}
