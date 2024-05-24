const fs = require("fs");
module.exports.config = {
  name: "navaratri",
    version: "1.1.8",
  hasPermssion: 0,
  credits: "Ayush Shukla", 
  description: "navaratri",
  commandCategory: "Bhakti",
  usages: "navaratri",
    cooldowns: 5,
};

module.exports.handleReply = async ({ api, event, handleReply }) => {
const { threadID, messageID, senderID } = event;
    switch(handleReply.type) {
        case "choosee": {
            switch(event.body) {

          case "1":
      api.sendMessage({
        body: "1. à¥ à¤à¤‚ à¤¹à¥à¤°à¥€à¤‚ à¤•à¥à¤²à¥€à¤‚ à¤¶à¥ˆà¤²à¤ªà¥à¤¤à¥à¤°à¥à¤¯à¥ˆ à¤¨à¤®:à¥¤â€™\n â€˜Om Aim Hreem Kleem Shailputri Namah:", 
      ,attachment: fs.createReadStream(__dirname + `/noprefix/krishna.jpeg`)}, event.threadID, event.messageID);
      break;
    case "2":
      api.sendMessage({
        body: "2.à¥ à¤à¤‚ à¤¹à¥à¤°à¥€à¤‚ à¤•à¥à¤²à¥€à¤‚ à¤¬à¥à¤°à¤¹à¥à¤®à¤šà¤¾à¤°à¤¿à¤£à¥à¤¯à¥ˆ à¤¨à¤®:à¥¤â€™ \nâ€˜Om Aim Hreem Kleem Brahmacharini Namah:", 
      ,attachment: fs.createReadStream(__dirname + `/noprefix/krishna.jpeg`)}, event.threadID, event.messageID);
      break;
    case "3":
      api.sendMessage({
        body: "3.à¥ à¤à¤‚ à¤¹à¥à¤°à¥€à¤‚ à¤•à¥à¤²à¥€à¤‚ à¤šà¤¨à¥à¤¦à¥à¤°à¤˜à¤‚à¤Ÿà¤¾à¤¯à¥ˆ à¤¨à¤®:à¥¤â€™\n â€˜Om Aim Hreem Kleem Chandraghantaayai Namah:", 
      ,attachment: fs.createReadStream(__dirname + `/noprefix/krishna.jpeg`)}, event.threadID, event.messageID); 
      break;
    case "4":
      api.sendMessage({
        body: "4. à¥ à¤à¤‚ à¤¹à¥à¤°à¥€à¤‚ à¤•à¥à¤²à¥€à¤‚ à¤•à¥‚à¤·à¥à¤®à¤¾à¤‚à¤¡à¤¾à¤¯à¥ˆ à¤¨à¤®:à¥¤â€™\n â€˜Om Aim Hreem Kleem Kooshmaandaayai Namah:", 
      ,attachment: fs.createReadStream(__dirname + `/noprefix/krishna.jpeg`)}, event.threadID, event.messageID); 
      break;
    case "5":
      api.sendMessage({
        body: "5. à¥ à¤à¤‚ à¤¹à¥à¤°à¥€à¤‚ à¤•à¥à¤²à¥€à¤‚ à¤¸à¥à¤•à¤‚à¤¦à¤®à¤¾à¤¤à¤¾à¤¯à¥ˆ à¤¨à¤®:à¥¤â€™ \nâ€˜Om Aim Hreem Kleem Skandamaataayai Namah:", 
      ,attachment: fs.createReadStream(__dirname + `/noprefix/krishna.jpeg`)}, event.threadID, event.messageID); 
      break;
    case "6":
      api.sendMessage({
        body: "6. à¥ à¤à¤‚ à¤¹à¥à¤°à¥€à¤‚ à¤•à¥à¤²à¥€à¤‚ à¤•à¤¾à¤¤à¥à¤¯à¤¾à¤¯à¤¨à¤¾à¤¯à¥ˆ à¤¨à¤®:à¥¤â€™ \nâ€˜om ain hrin klin kaatyayani namah:", 
      ,attachment: fs.createReadStream(__dirname + `/noprefix/krishna.jpeg`)}, event.threadID, event.messageID); 
      break;
    case "7":
      api.sendMessage({
        body: "7.à¥ à¤à¤‚ à¤¹à¥à¤°à¥€à¤‚ à¤•à¥à¤²à¥€à¤‚ à¤•à¤¾à¤²à¤°à¤¾à¤¤à¥à¤°à¥à¤¯à¥ˆ à¤¨à¤®:à¥¤â€™\n â€˜Om Aim Hreem Kleem Kalratri Namah:",
      ,attachment: fs.createReadStream(__dirname + `/noprefix/krishna.jpeg`)}, event.threadID, event.messageID); 
      break;
    case "8":
      api.sendMessage({
        body: "8. à¥ à¤à¤‚ à¤¹à¥à¤°à¥€à¤‚ à¤•à¥à¤²à¥€à¤‚ à¤®à¤¹à¤¾à¤—à¥Œà¤°à¥à¤¯à¥‡ à¤¨à¤®:à¥¤â€™ \nâ€˜Om Aim Hreem Kleem Mahagauri Namah:", 
      ,attachment: fs.createReadStream(__dirname + `/noprefix/krishna.jpeg`)}, event.threadID, event.messageID); 
      break;
    case "9":
      api.sendMessage({
        body: "9. à¥ à¤à¤‚ à¤¹à¥à¤°à¥€à¤‚ à¤•à¥à¤²à¥€à¤‚ à¤¸à¤¿à¤¦à¥à¤§à¤¿à¤¦à¤¾à¤¤à¥à¤¯à¥ˆ à¤¨à¤®:à¥¤â€™ â€˜Om Aim Hreem Kleem Siddhidatri Namah:",
      ,attachment: fs.createReadStream(__dirname + `/noprefix/krishna.jpeg`)}, event.threadID, event.messageID); 
      break;
      default:
        const choose = parseInt(event.body);
              if (isNaN(event.body)) return api.sendMessage("Please enter 1 number", event.threadID, event.messageID);
              if (choose > 12 || choose < 1) return api.sendMessage("", event.threadID, event.messageID); 

      }
    }
  }
}

module.exports.run = async ({ api, event, handleReply }) => {
try{
  
  const fs = require("fs");
  const { threadID, messageID, senderID } = event;
  return api.sendMessage({ body: `Navaratri NightsðŸ™ðŸ™ðŸ’–" +
                "\n1. 1. Shailputri Maa" +
                "\n2. Brahmacharini Maa" +
                "\n3. Chandraghanta Maa" +
                "\n4. Kushmanda Maa" +
                "\n5. Skandamata Maa" +
                "\n6. Katyayani Maa" +
                "\n7. Kaalratri Maa" +
                "\n8. Mahagauri Maa" +
                "\n9. Siddhidhatri Maa" +
                "\n\nReply to the message by number to see more about each ratry of navaratriâ¤`
                         } , event.threadID, (error, info) => {
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
        })  
    })
        
} catch (error) {
    // Send the exact error message to the chat
    api.sendMessage(`Error: ${error.message}`, event.threadID, event.messageID);
}
}