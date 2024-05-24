module.exports.config = {
	name: "pending",
	version: "1.0.5",
	credits: "Mirai Team",
	hasPermssion: 2,
	description: "Manage bot's waiting messages",
	commandCategory: "system",
	cooldowns: 5
};

module.exports.languages = {
    "vi": {
        "invaildNumber": "%1 không phải là một con số hợp lệ",
        "cancelSuccess": "Đã từ chối thành công %1 nhóm!",
        "notiBox": "Box của bạn đã được admin phê duyệt để có thể sử dụng bot",
        "approveSuccess": "Đã phê duyệt thành công %1 nhóm!",

        "cantGetPendingList": "Không thể lấy danh sách các nhóm đang chờ!",
        "returnListPending": "「PENDING」❮ Tổng số nhóm cần duyệt: %1 nhóm ❯\n\n%2",
        "returnListClean": "「PENDING」Hiện tại không có nhóm nào trong hàng chờ"
    },
    "en": {
        "invaildNumber": "%1 is not an invalid number",
        "cancelSuccess": "Refused %1 thread!",
        "notiBox": "𝗟𝗔𝗙𝗔𝗡𝗚𝗔 𝗕𝗢𝗧 𝗖𝗢𝗡𝗡𝗘𝗖𝗧𝗘𝗗 𝗔𝗚𝗔𝗜𝗡 ✅✅✅\n GROUP KO BOT ID KI MESSAGE REQUEST SE BOT OWNER K DWARA NIKAL DIYA GYA H,\n🛑 YOUR GROUP MAY BE BANNED IF YOU AGAIN REMOVE BOT 🛑 \n 𝑬𝑵𝑱𝑶𝒀 𝑬𝑽𝑬𝑹𝒀𝑶𝑵𝑬\n𝑩𝑶𝑻 𝑶𝑾𝑵𝑬𝑹 - 𝗛𝗘𝗠𝗔𝗡𝗚 𝗦𝗛𝗘𝗢𝗥𝗔𝗡 𝗝𝗔𝗔𝗧\n𝑶𝑾𝑵𝑬𝑹 𝑰𝑫 -https://www.facebook.com/hemang.sheoran.16?mibextid=ZbWKwL \n 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟",
        "approveSuccess": "Approved successfully %1 threads!",

        "cantGetPendingList": "Can't get the pending list!",
        "returnListPending": "»「PENDING」«❮ The whole number of threads to approve is: %1 thread ❯\n\n%2",
        "returnListClean": "「PENDING」There is no thread in the pending list"
    }
}

module.exports.handleReply = async function({ api, event, handleReply, getText }) {
  const fs = require("fs");
    if (String(event.senderID) !== String(handleReply.author)) return;
    const { body, threadID, messageID } = event;
    var count = 0;

    if (isNaN(body) && body.indexOf("c") == 0 || body.indexOf("cancel") == 0) {
        const index = (body.slice(1, body.length)).split(/\s+/);
        for (const singleIndex of index) {
            console.log(singleIndex);
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) return api.sendMessage(getText("invaildNumber", singleIndex), threadID, messageID);
            api.removeUserFromGroup(api.getCurrentUserID(), handleReply.pending[singleIndex - 1].threadID);
            count+=1;
        }
        return api.sendMessage(getText("cancelSuccess", count), threadID, messageID);
    }
    else {
        const index = body.split(/\s+/);
        for (const singleIndex of index) {
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) return api.sendMessage(getText("invaildNumber", singleIndex), threadID, messageID);
            api.sendMessage(getText("notiBox"), handleReply.pending[singleIndex - 1].threadID);
            count+=1;
        
 const jsonData = fs.readFileSync(__dirname + "/../commands/approve/approvedThreads.json", 'utf-8');
                     
                                         const data = JSON.parse(jsonData);                                        
  const idToRemove = handleReply.pending[singleIndex - 1].threadID;     
  data.push(idToRemove);                               
    const updatedJsonData = JSON.stringify(data, null, 2);                  
  fs.writeFileSync(__dirname + "/../commands/approve/approvedThreads.json", updatedJsonData, 'utf-8');                              }          
        return api.sendMessage(getText("approveSuccess", count), threadID, messageID);
    }
}

module.exports.run = async function({ api, event, getText }) {
	const { threadID, messageID } = event;
    const commandName = this.config.name;
    var msg = "", index = 1;

    try {
		var spam = await api.getThreadList(100, null, ["OTHER"]) || [];
		var pending = await api.getThreadList(100, null, ["PENDING"]) || [];
	} catch (e) { return api.sendMessage(getText("cantGetPendingList"), threadID, messageID) }

	const list = [...spam, ...pending].filter(group => group.isSubscribed && group.isGroup);

    for (const single of list) msg += `${index++}/ ${single.name}(${single.threadID})\n`;

    if (list.length != 0) return api.sendMessage(getText("returnListPending", list.length, msg), threadID, (error, info) => {
		global.client.handleReply.push({
            name: commandName,
            messageID: info.messageID,
            author: event.senderID,
            pending: list
        })
	}, messageID);
    else return api.sendMessage(getText("returnListClean"), threadID, messageID);
}
