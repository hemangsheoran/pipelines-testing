module.exports.config = {
	name: "tharkiboy",
	version: "1.0.1",
	hasPermission: 0,
	credits: "NTKhang",
	description: "Toilet 🚽",
	commandCategory: "image image",
	usages: "rank",
	cooldowns: 5,
	dependencies: {
	  "fs-extra": "",
	  "axios": "",
	  "canvas" :"",
	  "jimp": "",
	  "node-superfetch": ""
	}
};

module.exports.circle = async (image) => {
	  const jimp = global.nodemodule['jimp'];
  	image = await jimp.read(image);
  	image.circle();
  	return await image.getBufferAsync("image/png");
};

module.exports.run = async ({ event, api, args,Threads, Users }) => {
try {

const botID = api.getCurrentUserID();
var ThreadInfo = await api.getThreadInfo(event.threadID);
  var all = ThreadInfo.userInfo

let ungvien = [];
    for (let u of all) {
      if (u.gender == "MALE") {
      if ( u.id !== botID){ ungvien.push(u.id) }
      }
    }
 var id2 = ungvien[Math.floor(Math.random() * ungvien.length)]; 
  const Canvas = global.nodemodule['canvas'];
  const request = global.nodemodule["node-superfetch"];
  const jimp = global.nodemodule["jimp"];
  const fs = global.nodemodule["fs-extra"];
  var path_toilet = __dirname+'/cache/toilet.png'; 

var namee = (await Users.getData(id2)).name
var arraytag = [];
                arraytag.push({id: id2, tag: namee});

  
  var id = id2;


  
  const canvas = Canvas.createCanvas(500, 400);
	const ctx = canvas.getContext('2d');
	const background = await Canvas.loadImage('https://i.imgur.com/bJGGFDW.jpg');
  
	var avatar = await request.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`);
	avatar = await this.circle(avatar.body);
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
	ctx.drawImage(await Canvas.loadImage(avatar), 237, 65, 75, 85);
	const imageBuffer = canvas.toBuffer();
	fs.writeFileSync(path_toilet,imageBuffer);
	 api.sendMessage({attachment: fs.createReadStream(path_toilet, {'highWaterMark': 128 * 1024}), body: `THE THARKI BOY OF THIS GROUP IS 👉 ${namee}`, mentions: arraytag}, event.threadID, () => fs.unlinkSync(path_toilet), event.messageID);
}
catch(e) {api.sendMessage(`${e.message}`, event.threadID )}
}