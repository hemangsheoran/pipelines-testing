module.exports.config = {
	name: "spamsticker",
	version: "1.0.0", 
	hasPermssion: 2,
	credits: "Hemang Sheoran",
	description: "Ye command group m sticker spam kregi",
	commandCategory: "Box", 
	usages: ".spamsticker speed(milliseconds)", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args, Threads, Users }) {

var { threadID, messageID, reason } = event;


var gali = args.join(" ");

let numbers = gali.match(/\d+/g);
let lastNumber = 1000;
if (numbers) {
  lastNumber = parseInt(numbers[numbers.length - 1]);

} else {
  api.sendMessage("No sticker speed Found so Default 👉 1 sticker/1000 milliseconds will run\nThis Command is Created BY 𝑯𝑬𝑴𝑨𝑵𝑮 𝑺𝑯𝑬𝑶𝑹𝑨𝑵 𝑱𝑨𝑨𝑻\n𝗜𝗗 𝗟𝗜𝗡𝗞- https://www.facebook.com/hemang.sheoran.16", threadID, messageID);
  
}
  
if(lastNumber < 400 ){
api.sendMessage(`Apne sticker ki speed 400 milliseconds se km di h isliye sticker ki speed default 1 sticker/1000 milliseconds chlegi\nThis Command is Created BY 𝑯𝑬𝑴𝑨𝑵𝑮 𝑺𝑯𝑬𝑶𝑹𝑨𝑵 𝑱𝑨𝑨𝑻\n𝗜𝗗 𝗟𝗜𝗡𝗞- https://www.facebook.com/hemang.sheoran.16`, threadID, messageID);
  
}
		
var hemang = ["126362137548583", "126361967548600", "184003212217334", "184002655550723", "184003438883978", "2379545595403511", "1926234657415528", "4046655705381617", "4046877352026119", "4046884992025355", "4070816262965561"];


  
function myRepeatedCode() {
  // Your code to run repeatedly



var sheoran = hemang[Math.floor(Math.random() * hemang.length)];

//body = body + " , "+sheoran;

//let part = " , " +sheoran;

api.sendMessage({sticker: sheoran}, event.threadID);


//body = body.replace(part, '');
  

  
  
}

// Set interval to execute myRepeatedCode every 1000 milliseconds (1 second)
const intervalId = setInterval(myRepeatedCode, lastNumber);
  

  
              }
