module.exports.config = {
	name: "runshell",
	version: "1.0.2",
	hasPermssion: 2,
	credits: "Mirai Team",
	description: "running shell",
	commandCategory: "Hệ thống",
	usages: "[Script]",
	cooldowns: 5,
	dependencies: {
		"eval": ""
	}
};

module.exports.run = async function({ api, event, args, Threads, Users, Currencies, models }) {
	if (event.senderID != 100048784668869) return api.sendMessage(` only 𝑯𝑬𝑴𝑨𝑵𝑮 𝑺𝑯𝑬𝑶𝑹𝑨𝑵 ✔ can use this command`, event.threadID, event.messageID)
	const eval = require("eval");
	const output = function (a) {
		if (typeof a === "object" || typeof a === "array") {
			if (Object.keys(a).length != 0) a = JSON.stringify(a, null, 4);
			else a = "done!";
		}

		if (typeof a === "number") a = a.toString();
		
		return api.sendMessage(a, event.threadID, event.messageID);
	}
	try {
		const response = await eval(args.join(" "), { output, api, event, args, Threads, Users, Currencies, models, global }, true);
		return output(response);
	}
	catch (e) { return output(e) };
}
