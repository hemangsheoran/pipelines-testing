module.exports.config = {
    name: "topv2",
    version: "1.1.1",
    credits: "DC-Nam",
    hasPermssion: 0,
    description: "See top money, level... Be in Box or Sever?",
    usages: "[boxmoney|boxlevel|svmoney|svlevel] + list length (no default is 10)",
    commandCategory: "What does it do?",
    cooldowns: 5
};
module.exports.run = async function({
    api: a,
    event: e,
    args: g,
    Currencies,
    Users
}) {
    const {
        threadID: t,
        messageID: m,
        senderID: s,
        participantIDs: pI
    } = e
    var arr = [],
        newArr = [],
        msg = "",
        type = g[0],
        leng = parseInt(g[1]) - 1
    const allType = ["boxmoney", "boxlevel", "svmoney", "svlevel"]
    if (!allType.includes(type)) return a.sendMessage(`===== [ 𝗧𝗢𝗣 ] =====\n━━━━━━━━━━━━━━━━\n👉 Enter the TOP you want to view\n\n🌸 !𝘁𝗼𝗽 𝗯𝗼𝘅𝗺𝗼𝗻𝗲𝘆: See who has the most money in Box \n🌟 !𝘁𝗼𝗽 𝗯𝗼𝘅𝗹𝗲𝘃𝗲𝗹: See who has the highest engagement levels at the top 𝟭𝟬 \n💓 !𝘁𝗼𝗽 𝘀𝘃𝗺𝗼𝗻𝗲𝘆: see the top 10 users with the most money on TPK bot system 💵\n💗 !𝘁𝗼𝗽 𝘀𝘃𝗹𝗲𝘃𝗲𝗹: See the top 10 people with the highest number of interaction levels in the system 𝗺𝗶𝗿𝗮𝗶 𝗯𝗼𝘁 \n━━━━━━━━━━━━━━━━\n⚠️ 𝗩𝗗: !𝘁𝗼𝗽 𝘀𝘃𝗺𝗼𝗻𝗲𝘆 `, t, m)
    if (isNaN(leng) && leng) return a.sendMessage(`➝ List length must be 1 digit`, t, m)
    switch (type) {
        case "boxmoney": {
            for (const id of pI) {
                let money = (await Currencies.getData(id)).money || 0
                arr.push({
                    id: id,
                    money: money
                })
            }
            arr.sort(S("money"))
            for (const i in arr) {
                newArr.push({
                    stt: i,
                    id: arr[i].id,
                    money: arr[i].money
                })
            }
            msg = `==== [ 𝗧𝗢𝗣 𝟭𝟬 BILLIONAIRE ] ====\n━━━━━━━━━━━━━━━━━━\n`.toUpperCase()
            for (const i in newArr) {
                let name = (await Users.getData(newArr[i].id)).name || ""
                msg += `${i < 4 ? ICON(i) : `[${i}].`} ${name}\n ➣➢➤ 𝗠𝗢𝗡𝗘𝗬: ${CC(newArr[i].money)}$\n`
                if (i == leng && i < newArr.length || i == 10) break
            }
            let find = newArr.find(i => i.id == s)
            msg += TX("money", find.stt, find.money)
            a.sendMessage(msg, t, m)
        }
        break
    case "boxlevel": {
        for (const id of pI) {
            let exp = (await Currencies.getData(id)).exp || 0
            arr.push({
                id: id,
                exp: exp
            })
        }
        arr.sort(S("exp"))
        for (const i in arr) {
            newArr.push({
                stt: i,
                id: arr[i].id,
                exp: arr[i].exp
            })
        }
        msg = `== [ 𝗧𝗢𝗣 𝟐𝟎 𝗟𝗘𝗩𝗘𝗟 GROUP ] ==\n━━━━━━━━━━━━━━━━━━\n`.toUpperCase()
        for (const i in newArr) {
            let name = (await Users.getData(newArr[i].id)).name || ""
            msg += `${i < 4 ? ICON(i) : `[${i}].`} ${name} ➤𝗟𝗩𝗟:${LV(newArr[i].exp)}\n`
            if (i == leng && i < newArr.length || i == 20) break
        }
        let find = newArr.find(i => i.id == s)
        msg += TX("level", find.stt, find.exp)
        a.sendMessage(msg, t, m)
    }
    break
    case "svlevel": {
        let get = await Currencies.getAll(['userID', 'exp'])
        get.sort(S("exp"))
        for (const i in get) {
            arr.push({
                stt: i,
                id: get [i].userID,
                exp: get [i].exp
            })
        }
        msg = `= [ 𝗧𝗢𝗣 𝟐𝟎 𝗟𝗘𝗩𝗘𝗟 𝗦𝗘𝗩𝗘𝗥 ] =\n━━━━━━━━━━━━━━━━━━\n`.toUpperCase()
        for (const i in arr) {
            let name = (await Users.getData(arr[i].id)).name || ""
            msg += `${i < 4 ? ICON(i) : `[${i}].`} ${name} ➤𝗟𝗩𝗟:${LV(arr[i].exp)}\n`
            if (i == leng && i < arr.length || i == 20) break
        }
        let find = arr.find(i => i.id == s)
        msg += TX("level", find.stt, find.exp)
        a.sendMessage(msg, t, m)
    }
    break
    case "svmoney": {
        let get = await Currencies.getAll(['userID', 'money'])
        get.sort(S("money"))
        for (const i in get) {
            arr.push({
                stt: i,
                id: get [i].userID,
                money: get [i].money
            })
        }
        msg = `==== [ 𝗧𝗢𝗣 𝟭𝟬 BILLIONAIRE ] ====\n━━━━━━━━━━━━━━━━━━\n`.toUpperCase()
        for (const i in arr) {
            let name = (await Users.getData(arr[i].id)).name || ""
            msg += `${i < 4 ? ICON(i) : `[${i}].`} ${name}\n ➤𝗠𝗢𝗡𝗘𝗬: ${CC(arr[i].money)}$\n`
            if (i == leng && i < arr.length || i == 10) break
        }
        let find = arr.find(i => i.id == s)
        msg += TX("money", find.stt, find.money)
        a.sendMessage(msg, t, m)
    }
    break
    }
}

function LV(x) {
    return Math.floor((Math.sqrt(1 + (4 * x) / 3) + 1) / 2)
}

function CC(n) {
    return n.toLocaleString('en-US', {
        minimumFractionDigits: 2
    })
}

function ICON(i) {
    return i == 0 ? "🏆" : i == 1 ? "🥇" : i == 2 ? "🥈" : i == 3 ? "🥉" : ""
}

function S(k) {
    return function(a, b) {
        let i = 0;
        if (a[k] > b[k]) {
            i = 1
        } else if (a[k] < b[k]) {
            i = -1
        }
        return i * -1
    }
}

function TX(tx, i, x) {
  return `━━━━━━━━━━━━━━━━━━\n${i >= 11 ? `→ You rank second: ${i}\n➝ ${tx == "money" ? `𝗠𝗢𝗡𝗘𝗬: ${CC(x)}$` : `𝗟𝗘𝗩𝗘𝗟: ${LV(x)}`}` : i >= 1 && i <= 4 ? "→ You are currently in 𝗧𝗢𝗣 " : i == 0 ? "➝ You are currently the TOP " : "→ You are currently in 𝗧𝗢𝗣 10"}`
}