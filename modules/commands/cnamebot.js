module.exports.config = {
    name: "autosetbotname",
    version: "1.0.4",
    hasPermssion: 2,
    creditss: "datoccho",
    description: "Automatically prevent change bot nickname",
    commandCategory: "system",
    usages: "",
    cooldowns: 5
};


module.exports.handleEvent = async function ({ api, args, event, client, __GLOBAL, Threads, Currencies }) {

  let data = (await Threads.getData(event.threadID)).data || {};     
if(data.cnamebot == false ){
        return;
}
  try{
    const { threadID } = event;
    let { nicknames } = await api.getThreadInfo(event.threadID)
    const nameBot = nicknames[api.getCurrentUserID()]
//api.sendMessage(`${nameBot}`, threadID)
    if (nameBot !== `: ̗̀➤ ${config.BOTNAME} ༊ೄྀ࿐ ˊˎ-`) {
        api.changeNickname(`: ̗̀➤ ${config.BOTNAME} ༊ೄྀ࿐ ˊˎ-`, threadID, api.getCurrentUserID());
        setTimeout(() => {
            return api.sendMessage(`Changing bot nickname is not allowed`, threadID);
        }, 1500);
    }
    } catch (error) {
    // Send the exact error message to the chat
   // api.sendMessage(`Error: ${error.message}`, event.threadID, event.messageID);
  }
}

module.exports.run = async({ api, event, Threads}) => {
    let data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data["cnamebot"] == "undefined" || data["cnamebot"] == false) data["cnamebot"] = true;
    else data["cnamebot"] = false;
    
    await Threads.setData(event.threadID, { data });
    global.data.threadData.set(parseInt(event.threadID), data);
    
    return api.sendMessage(`✅ ${(data["cnamebot"] == true) ? "Turn on" : "Turn off"} successfully cnamebot!`, event.threadID);

}