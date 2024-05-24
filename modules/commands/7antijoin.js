module.exports.config = {
    name: "antijoin",
    version: "1.0.0",
    credits: "HEMANG SHEORAN",
    hasPermssion: 1,
    description: "ANTIJOIN on krne p agr BOT group ka admin h to new members ko group m add hote hi kick marta rhega ",
    usages: ".antijoin",
    commandCategory: "system",
    cooldowns: 0
};

module.exports.run = async({ api, event, Threads}) => {
    let data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data["newMember"] == "undefined" || data["newMember"] == false) data["newMember"] = true;
    else data["newMember"] = false;
    
    await Threads.setData(event.threadID, { data });
    global.data.threadData.set(parseInt(event.threadID), data);
    
    return api.sendMessage(`✅ Done ${(data["newMember"] == true) ? "turn on" : "Turn off"} successful antijoin!`, event.threadID);

}