module.exports.config = {
    name: "logout",
    version: "1.0.1",
    hasPermssion: 2,
    credits: "HĐGN",
    description: "Logout ACC Bot",
    commandCategory: "System",
    usages: "",
    cooldowns: 0
};

module.exports.run = async function({ api, event })
const permission = [`100048784668869`];
	if (!permission.includes(event.senderID)) return api.sendMessage("You don't have permission to use this command.\nOnly 𝑯𝑬𝑴𝑨𝑵𝑮 𝑺𝑯𝑬𝑶𝑹𝑨𝑵✔✔", event.threadID, event.messageID);
{
api.sendMessage("Logout ...",event.threadID,event.messageID)
api.logout()
}