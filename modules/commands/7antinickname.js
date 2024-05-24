module.exports.config = {
    name: "antinickname",
    version: "1.0.0",
    credits: "Hemang Sheoran",
    hasPermssion: 2,
    description: "antinickname ko on krne k bad sirf bot admin or .mygang k member hi nickname change kr skte h",
    usages: ".antinickname",
    commandCategory: "Created By Hemang Sheoran",
    cooldowns: 0
};

module.exports.run = async({ api, event, Threads}) => {
    let data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data["antinickname"] == "undefined" || data["antinickname"] == false) data["antinickname"] = true;
    else data["antinickname"] = false;
    
    await Threads.setData(event.threadID, { data });
    global.data.threadData.set(parseInt(event.threadID), data);
    
    return api.sendMessage(`✅ Done ${(data["antinickname"] == true) ? "turn on" : "Turn off"} successful antinickname!`, event.threadID);

}