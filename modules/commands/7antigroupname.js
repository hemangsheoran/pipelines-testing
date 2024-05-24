module.exports.config = {
    name: "antigroupname",
    version: "1.0.0",
    credits: "DungUwU (Khánh Milo Fix)",
    hasPermssion: 1,
    description: "Turn off antiout",
    usages: "antigroupname on/off",
    commandCategory: "system",
    cooldowns: 0
};

module.exports.run = async({ api, event, Threads}) => {
    let data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data["antigroup"] == "undefined" || data["antigroup"] == false) data["antigroup"] = true;
    else data["antigroup"] = false;
    
    await Threads.setData(event.threadID, { data });
    global.data.threadData.set(parseInt(event.threadID), data);
    
    return api.sendMessage(`✅ Done ${(data["antigroup"] == true) ? "turn on" : "Turn off"} successful antigroupname!`, event.threadID);

}