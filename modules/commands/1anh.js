module.exports.config = {
	name: "anh",
	version: "1.0.3",
	hasPermssion: 0,
	credits: "Thiệu Trung Kiên",
	description: "View reply photos",
	commandCategory: "What does it do?",
	cooldowns: 5,
	dependencies: {
		axios: ""
	}
}, module.exports.run = async function({
	event: e,
	api: a,
	args: n
}) {
	if (!n[0]) return a.sendMessage("🎭List of existing photos\n\n1. Anime\n2. Anime\n3. Jimmy\n4. Umaru\n5. Wibu\n6. Mona\n7. Liên Quân\n8. Slime\n9. Liên Minh\nReply❤️order💛💚number🧡to💙view💜photos❤️\n\n🛸", e.threadID, ((a, n) => {
		global.client.handleReply.push({
			name: this.config.name,
			messageID: n.messageID,
			author: e.senderID,
			type: "create"
		})
	}), e.messageID)
}, module.exports.handleReply = async ({
	api: e,
	event: a,
	client: n,
	handleReply: t,
	Currencies: s,
	Users: i,
	Threads: o
}) => {
	var { p, h } = linkanh();

	if ("create" === t.type) {
		const n = (await p.get(h)).data.data;
		let t = (await p.get(n, {
			responseType: "stream"
		})).data;
		return e.sendMessage({
			body: "[Success] : This is your photo!!",
			attachment: t
		}, a.threadID, a.messageID)
	}

    function linkanh() {
        const p = require("axios");
        if ("1" == a.body)
          var  h = "https://uptime.ocvat2810.repl.co/";
       else if ("2" == a.body)
          var  h = "https://anime.ocvat2810.repl.co/";
        else if ("3" == a.body)
          var  h = "https://jimmy.ocvat2810.repl.co";
       else if ("4" == a.body)
          var  h = "https://apiumaru.khoahoang3.repl.co";
        else if ("5" == a.body)
          var  h = "https://wibu.ocvat2810.repl.co";
       else if ("6" == a.body)
          var  h = "https://mona.feedheavens.repl.co";
      else if ("7" == a.body)
         var   h = "https://lienquan.sangnguyn10.repl.co/";
      else if ("8" == a.body)
         var   h = "https://slime.sangnguyn10.repl.co";
      else if ("9" == a.body)
      var      h = "https://lienminh.sangnguyn10.repl.co";
      
      
        return { p, h };
    }
};