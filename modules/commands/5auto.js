module.exports.config = {
    name: 'auto',
    version: '10.02',
    hasPermssion: 0,
    credits: '',
    description: 'Automatically send messages according to the set hours!',
    commandCategory: 'ADMIN',
    usages: '[]',
    cooldowns: 3
};
const nam = [{
    timer: '11:00:00 PM',
    message: ['Good night everyone👀🤧😪😴😴.' , 'I m a bot and you re the one who should go to bed late at night. See you tomorrow😴🤧🥵🙊😗.']
},
{
    timer: '1:00:00 PM',
    message: ['Have a nice afternoon everyone 😗😗.', 'Have a happy afternoon and have enough energy to fight through today 🥰🥰.']
},
{
    timer: '7:00:00 AM',
    message: ['Have a good morning everyone 🌹🌹😍.', 'Energetic morning, guys😴😍😍😗🤩.']
},
{
    timer: '11:00:00 AM',
    message: ['Wishing everyone a good rest at noon😐😪.', 'It s time to fight tiredly in the morning, you guys go on a little rest 😴🤧👀.']
}];
module.exports.onLoad = o => {
  if (!!global.autosendmessage_setinterval) clearInterval(global.autosendmessage_setinterval);
  global.autosendmessage_setinterval = setInterval(async function() {
    if (á = config.find(i => i.timer == new Date(Date.now() + 25200000).toLocaleString().split(/,/).pop().trim())); {
      var msg = r(á.message);
      msg = msg.replace(/{time}/g, (require("moment-timezone")).tz("Asia/Kolkata").format("HH:mm:ss (D/MM/YYYY) (dddd)")).replace(/{thinh}/g, (await get(`https://no1-19fc.manh10.repl.co/api/remix.php`)).data.data)
      msg = {
        body: msg, attachment: (await get((await get(`https://no1-19fc.manh10.repl.co/api/remix.php`)).data.data, {
          responseType: 'stream'
        })).data
      };
      global.data.allThreadID.forEach(i => o.api.sendMessage(msg, i, (error, info) => {
        if (error) { console.log(error) } else
          global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            boxid: i,
            messID: messageID,
            type: "sendtoadmin"
          })
      }));
    };
  }, 1000);
};
module.exports.run = () => { };