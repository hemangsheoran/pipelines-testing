const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "logo",
  version: "1.0",
  hasPermssion: 0,
  credits: `MrTomXxX`, 
  description: "Make your own logo using textpro",
  commandCategory: "logo",
  usages: "Logo ki list dekhne k liye 👉 .logo list (1 or 2 or 3) or logo bnane k liye 👉 .logo (1 se 99 k bech ka koi number) (text)",
  cooldowns: 2,
};

module.exports.run = async function ({ api, event, args, Users }) {
  let { messageID, senderID, threadID } = event;

  if (args.length >= 2 && args[0].toLowerCase() === "list") {
    let page = parseInt(args[1]);
    switch (page) {
      case 1:
        return api.sendMessage(
          `here's the logo list - Page 1:\n1. Blue\n2. Pink Candy\n3. Orange\n4. Bronze\n5. Silver\n6. Purple\n7. Blue2\n8. Golden\n9. Hot\n10. Purple2\n11. Rainbow\n12. Light\n13. Wood\n14. Red\n15. Biscuit\n16. Abstragold\n17. Metal\n18. Fruit\n19. Frozen\n20. Marble\n21. Blodus\n22. Smoke\n23. Orange2\n24. Christmas\n25. Breakwall\n26. Rain\n27. Fonttext\n28. GreenNeon\n29. ColourBlur\n30. Demand\nPAGE 1 - 3\n👉👉 𝗟𝗼𝗴𝗼 𝗯𝗻𝗮𝗻𝗲 𝗸 𝗹𝗶𝘆𝗲 .𝗹𝗼𝗴𝗼 {logo-number} {text} 𝘁𝘆𝗽𝗲 𝗸𝗮𝗿𝗲\n               ©- 𝑯𝒆𝒎𝒂𝒏𝒈 𝑺𝒉𝒆𝒐𝒓𝒂𝒏'𝒔 𝑩𝑶𝑻`,
          threadID,
          messageID
        );
      case 2:
        return api.sendMessage(
          `Logo list - Page 2:\n31. Road\n32. Neon\n33. 3DBox\n34. NightMoon\n35. Neon2\n36. Blood\n37. Hack\n38. Bread\n39. Fish\n40. Chocolate\n41. ColourGlass\n42. PurpleGlass\n43. Jewelry\n44. Jewelry2\n45. GreenJal\n46. Rainbow2\n47. Robot\n48. Captain\n49. Gradient\n50. PurpleShiny\n51. BlueGlass\n52. OrangeGlass\n53. YellowGlass\n54. Lava\n55. Rock\n56. Peridot\n57. Decorate\n58. Denim\n59. Steel\n60. GoldBalloon\n61. GreenBalloon\n\nPAGE 2 - 3\n👉👉 𝗟𝗼𝗴𝗼 𝗯𝗻𝗮𝗻𝗲 𝗸 𝗹𝗶𝘆𝗲 .𝗹𝗼𝗴𝗼 {logo-number} {text} 𝘁𝘆𝗽𝗲 𝗸𝗮𝗿𝗲\n               ©- 𝑯𝒆𝒎𝒂𝒏𝒈 𝑺𝒉𝒆𝒐𝒓𝒂𝒏'𝒔 𝑩𝑶𝑻`,
          threadID,
          messageID
        );
      case 3:
        return api.sendMessage(
          `Logo list - Page 3:\n62. PurpleBalloon\n63. Skeleton\n64. Firework\n65. Natural\n66. Wicker\n67. Joker\n68. Galaxy\n69. Lion\n70. Metal\n71. Halloween\n72. Blood\n73. Xmas\n74. 3D-Metal\n75. MetalGold\n76. MetalRose\n77. MetalSilver\n78. NewYear\n79. YearCards\n80. NeonText\n81. DeluxGold\n82. Glossy-Carbon\n83. Holographic\n84. Minion\n85. Style-Text\n86. NeonLight\n87. Metal-Dark-Gold\n88. 3D-Glue\n89. SandWriting\n90. Sand-Engraved\n91. SandWriting2\n92. Write-In-Sand\n93. Cloud\n94. Christmas-Holiday\n95. Graffiti\n96. Underwater\n97. Watercolor\n98. Papercut\n99. 3D-Glossy-Metal\n Page 3/3\n👉👉 𝗟𝗼𝗴𝗼 𝗯𝗻𝗮𝗻𝗲 𝗸 𝗹𝗶𝘆𝗲 .𝗹𝗼𝗴𝗼 {logo-number} {text} 𝘁𝘆𝗽𝗲 𝗸𝗮𝗿𝗲\n               ©- 𝑯𝒆𝒎𝒂𝒏𝒈 𝑺𝒉𝒆𝒐𝒓𝒂𝒏'𝒔 𝑩𝑶𝑻`,
          threadID,
          messageID
        );
      default:
        return api.sendMessage(`Invalid page number!(page number sirf 1 ya 2 ya 3 ho sakte h) 𝗧𝘆𝗽𝗲 𝗸𝗮𝗿𝗲 👉 ".logo list 1" or ".logo list 2" or ".logo list 3" 𝗟𝗼𝗴𝗼𝘀 𝗸𝗶 𝗹𝗶𝘀𝘁 𝗱𝗲𝗸𝗵𝗻𝗲 𝗸 𝗹𝗶𝘆𝗲 "\n ©- 𝑯𝒆𝒎𝒂𝒏𝒈 𝑺𝒉𝒆𝒐𝒓𝒂𝒏'𝒔 𝑩𝑶𝑻`, threadID, messageID);
    }
  }

  if (args.length < 2) {
    return api.sendMessage(
      `Invalid command format!:\n(1)👉 𝗟𝗼𝗴𝗼 𝗸𝗶 𝗹𝗶𝘀𝘁 𝗱𝗲𝗸𝗵𝗻𝗲 𝗸 𝗹𝗶𝘆𝗲 𝘂𝘀𝗲 𝗸𝗮𝗿𝗲 .logo list 1 or 2 or 3\n(2)👉 𝗟𝗼𝗴𝗼 𝗯𝗻𝗮𝗻𝗲 𝗸 𝗹𝗶𝘆𝗲 𝘂𝘀𝗲 𝗸𝗮𝗿𝗲 .logo {1 se 99 k bech m koi number} {text}\n ©- 𝑯𝒆𝒎𝒂𝒏𝒈 𝑺𝒉𝒆𝒐𝒓𝒂𝒏'𝒔 𝑩𝑶𝑻`,
      threadID,
      messageID
    );
  }
  
  let type = args[0].toLowerCase();
  let name = args.slice(1).join(" ");
  let pathImg = __dirname + `/cache/${type}_${name}.png`;
  let apiUrl, message;
  
  switch (type) {
    case "1":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=1&text=${name}`;
      message = "here's the [BLUE] Logo created:";
      break;
    case "2":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=2&text=${name}`;
      message = "here's the [ PINK CANDY ] Logo created:";
      break;
    case "3":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=3&text=${name}`;
      message = "here's the [ ORANGE ] Logo created:";
      break;
    case "4":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=4&text=${name}`;
      message = "here's the [BRONZE] Logo Created:";
      break;
    case "5":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=5&text=${name}`;
      message = "here's the [ SILVER ] - Logo Created:";
      break;
    case "6":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=6&text=${name}`;
      message = "here's the [ PURPLE ] Logo Created:";
      break;
    case "7":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=7&text=${name}`;
      message = "here's the [ BLUE2 ] Logo created:";
      break;
    case "8":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=8&text=${name}`;
      message = "here's the [ GOLDEN ] Logo created:";
      break;
    case "9":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=9&text=${name}`;
      message = "here's the [ HOT ] Logo created:";
      break;
    case "10":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=10&text=${name}`;
      message = "here's the [ PURPLE2 ] Logo created:";
      break;
    case "11":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=11&text=${name}`;
      message = "here's the [ RAINBOW ] Logo created:";
      break;
    case "12":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=12&text=${name}`;
      message = "here's the [ LIGHT ] Logo created:";
      break;
    case "13":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=13&text=${name}`;
      message = "here's the [ WOOD ] Logo created:";
      break;
    case "14":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=14&text=${name}`;
      message = "here's the [ RED ] Logo created:";
      break;
    case "15":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=15&text=${name}`;
      message = "here's the [ BISCUIT ] Logo created:";
      break;
    case "16":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=16&text=${name}`;
      message = "here's the [ ABSTRAGOLD ] Logo created:";
      break;
    case "17":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=17&text=${name}`;
      message = "here's the [ METAL ] Logo created:";
      break;
    case "18":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=18&text=${name}`;
      message = "here's the [ FRUIT ] Logo created:";
      break;
    case "19":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=19&text=${name}`;
      message = "here's the [ FROZEN ] Logo created:";
      break;
    case "20":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=20&text=${name}`;
      message = "here's the [ MARBLE ] Logo created:";
      break;
    case "21":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=21&text=${name}`;
      message = "here's the [ BLODUS ] Logo created:";
      break;
    case "22":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=22&text=${name}`;
      message = "here's the [ SMOKE ] Logo created:";
      break;
    case "23":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=23&text=${name}`;
      message = "here's the [ ORANGE2 ] Logo created:";
      break;
    case "24":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=24&text=${name}`;
      message = "here's the [ CHRISTMAS ] Logo created:";
      break;
    case "25":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=25&text=${name}`;
      message = "here's the [ BREAKWALL ] Logo created:";
      break;
    case "26":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=26&text=${name}`;
      message = "here's the [ RAIN ] Logo created:";
      break;
    case "27":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=27&text=${name}`;
      message = "here's the [ FONTTEXT ] Logo created:";
      break;
    case "28":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=28&text=${name}`;
      message = "here's the [ GREENNEON ] Logo created:";
      break;
    case "29":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=29&text=${name}`;
      message = "here's the [ COLOURBLUR ] Logo created:";
      break;
    case "30":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=30&text=${name}`;
      message = "here's the [ DEMAND ] Logo created:";
      break;
    case "31":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=31&text=${name}`;
      message = "here's the [ ROAD ] Logo created:";
      break;
    case "32":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=32&text=${name}`;
      message = "here's the [ NEON ] Logo created:";
      break;
    case "33":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=33&text=${name}`;
      message = "here's the [ 3DBOX ] Logo created:";
      break;
    case "34":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=34&text=${name}`;
      message = "here's the [ NIGHTMOON ] Logo created:";
      break;
    case "35":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=35&text=${name}`;
      message = "here's the [ NEON2 ] Logo created:";
      break;
    case "36":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=36&text=${name}`;
      message = "here's the [ BLOOD ] Logo created:";
      break;
    case "37":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=37&text=${name}`;
      message = "here's the [ HACK ] Logo created:";
      break;
    case "38":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=38&text=${name}`;
      message = "here's the [ BREAD ] Logo created:";
      break;
    case "39":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=39&text=${name}`;
      message = "here's the [ FISH ] Logo created:";
      break;
    case "40":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=40&text=${name}`;
      message = "here's the [ CHOCOLATE ] Logo created:";
      break;
    case "41":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=41&text=${name}`;
      message = "here's the [ COLOURGLASS ] Logo created:";
      break;
    case "42":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=42&text=${name}`;
      message = "here's the [ PURPLEGLASS ] Logo created:";
      break;
    case "43":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=43&text=${name}`;
      message = "here's the [ JEWELRY ] Logo created:";
      break;
    case "44":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=44&text=${name}`;
      message = "here's the [ JEWELRY2 ] Logo created:";
      break;
    case "45":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=45&text=${name}`;
      message = "here's the [ GREENJAL ] Logo created:";
      break;
    case "46":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=46&text=${name}`;
      message = "here's the [ RAINBOW2 ] Logo created:";
      break;
    case "47":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=47&text=${name}`;
      message = "here's the [ ROBOT ] Logo created:";
      break;
    case "48":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=48&text=${name}`;
      message = "here's the [ CAPTAIN ] Logo created:";
      break;
    case "50":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=50&text=${name}`;
      message = "here's the [ PURPLESHINY ] Logo created:";
      break;
    case "51":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=51&text=${name}`;
      message = "here's the [ BLUEGLASS ] Logo created:";
      break;
    case "52":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=52&text=${name}`;
      message = "here's the [ ORANGEGLASS ] Logo created:";
      break;
    case "53":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=53&text=${name}`;
      message = "here's the [ YELLOWGLASS ] Logo created:";
      break;
    case "54":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=54&text=${name}`;
      message = "here's the [ LAVA ] Logo created:";
      break;
    case "55":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=55&text=${name}`;
      message = "here's the [ ROCK ] Logo created:";
      break;
    case "56":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=56&text=${name}`;
      message = "here's the [ PERIDOT ] Logo created:";
      break;
    case "57":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=57&text=${name}`;
      message = "here's the [ DECORATE ] Logo created:";
      break;
    case "58":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=58&text=${name}`;
      message = "here's the [ DENIM ] Logo created:";
      break;
    case "59":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=59&text=${name}`;
      message = "here's the [ STEEL ] Logo created:";
      break;
    case "60":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=60&text=${name}`;
      message = "here's the [ GOLDBALLOON ] Logo created:";
      break;
    case "61":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=61&text=${name}`;
      message = "here's the [ GREEN BALLOON ] Logo created:";
      break;
    case "62":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=62&text=${name}`;
      message = "here's the [ PURPLE BALLOON ] Logo created:";
      break;
    case "63":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=63&text=${name}`;
      message = "here's the [ SKELETON ] Logo created:";
      break;
    case "64":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=64&text=${name}`;
      message = "here's the [ FIREWORK ] Logo created:";
      break;
    case "65":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=65&text=${name}`;
      message = "here's the [ NATURAL ] Logo created:";
      break;
    case "66":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=66&text=${name}`;
      message = "here's the [ WICKER ] Logo created:";
      break;
    case "67":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=67&text=${name}`;
      message = "here's the [ JOKER ] Logo created:";
      break;
    case "68":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=68&text=${name}`;
      message = "here's the [ GALAXY ] Logo created:";
      break;
    case "69":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=69&text=${name}`;
      message = "here's the [ LION ] Logo created:";
      break;
    case "70":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=70&text=${name}`;
      message = "here's the [ METAL ] Logo created:";
      break;
    case "71":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=71&text=${name}`;
      message = "here's the [ HALLOWEEN ] Logo created:";
      break;
    case "72":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=72&text=${name}`;
      message = "here's the [ BLOOD ] Logo created:";
      break;
    case "73":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=73&text=${name}`;
      message = "here's the [ XMAS ] Logo created:";
      break;
    case "74":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=74&text=${name}`;
      message = "here's the [ 3D-METAL ] Logo created:";
      break;
    case "75":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=75&text=${name}`;
      message = "here's the [ METALGOLD ] Logo created:";
      break;
    case "76":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=76&text=${name}`;
      message = "here's the [ METALROSE ] Logo created:";
      break;
    case "77":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=77&text=${name}`;
      message = "here's the [ METALSILVER ] Logo created:";
      break;
    case "78":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=78&text=${name}`;
      message = "here's the [ NEWYEAR ] Logo created:";
      break;
    case "79":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=79&text=${name}`;
      message = "here's the [ YEARCARDS ] Logo created:";
      break;
    case "80":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=80&text=${name}`;
      message = "here's the [ NEON TEXT ] Logo created:";
      break;
    case "81":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=81&text=${name}`;
      message = "here's the [ DELUX GOLD ] Logo created:";
      break;
    case "82":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=82&text=${name}`;
      message = "here's the [ GLOSSY CARBON ] Logo created:";
      break;
    case "83":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=83&text=${name}`;
      message = "here's the [ HOLOGRAPHIC ] Logo created:";
      break;
    case "84":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=84&text=${name}`;
      message = "here's the [ MINION TEXT ] Logo created:";
      break;
    case "85":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=85&text=${name}`;
      message = "here's the [ STYLE TEXT ] Logo created:";
      break;
    case "86":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=86&text=${name}`;
      message = "here's the [ NEON LIGHT ] Logo created:";
      break;
    case "87":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=87&text=${name}`;
      message = "here's the [ METAL DARK GOLD ] Logo created:";
      break;
    case "88":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=88&text=${name}`;
      message = "here's the [ 3D GLUE ] Logo created:";
      break;
    case "89":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=89&text=${name}`;
      message = "here's the [ SANDWRITING  ] Logo created:";
      break;
    case "90":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=90&text=${name}`;
      message = "here's the [ SAND ENGRAVED ] Logo created:";
      break;
    case "91":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=91&text=${name}`;
      message = "here's the [ SANDWRITING2 ] Logo created:";
      break;
    case "92":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=92&text=${name}`;
      message = "here's the [ WRITE IN SAND ] Logo created:";
      break;
    case "93":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=93&text=${name}`;
      message = "here's the [ CLOUD ] Logo created:";
      break;
    case "94":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=94&text=${name}`;
      message = "here's the [ CHRISTMAS HOLIDAY ] Logo created:";
      break;
    case "95":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=95&text=${name}`;
      message = "here's the [ GRAFFITI ] Logo created:";
      break;
    case "96":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=96&text=${name}`;
      message = "here's the [ UNDERWATER ] Logo created:";
      break;
    case "97":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=97&text=${name}`;
      message = "here's the [ WATERCOLOR ] Logo created:";
      break;
    case "98":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=98&text=${name}`;
      message = "here's the [ PAPERCUT ] Logo created:";
      break;
    case "99":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=99&text=${name}`;
      message = "here's the [ 3D GLOSSY METAL ] Logo created:";
      break;
    case "49":
      apiUrl = `https://textpro.Cat0Tom2.repl.co/api/textpro?number=100&text=${name}`;
      message = "here's the [ GRADIENT ] Logo created:";
      break;
      default:
      return api.sendMessage(`Invalid command format!:\n(1)👉 𝗟𝗼𝗴𝗼 𝗸𝗶 𝗹𝗶𝘀𝘁 𝗱𝗲𝗸𝗵𝗻𝗲 𝗸 𝗹𝗶𝘆𝗲 𝘂𝘀𝗲 𝗸𝗮𝗿𝗲 .logo list 1 or 2 or 3\n(2)👉 𝗟𝗼𝗴𝗼 𝗯𝗻𝗮𝗻𝗲 𝗸 𝗹𝗶𝘆𝗲 𝘂𝘀𝗲 𝗸𝗮𝗿𝗲 .logo {1 se 99 k bech m koi number} {text}\n ©- 𝑯𝒆𝒎𝒂𝒏𝒈 𝑺𝒉𝒆𝒐𝒓𝒂𝒏'𝒔 𝑩𝑶𝑻`, threadID, messageID);
  }

  api.sendMessage("Processing your logo, please wait...\n               ©- 𝑯𝒆𝒎𝒂𝒏𝒈 𝑺𝒉𝒆𝒐𝒓𝒂𝒏'𝒔 𝑩𝑶𝑻", threadID, messageID);
  let response = await axios.get(apiUrl, { responseType: "arraybuffer" });
  let logo = response.data;
  fs.writeFileSync(pathImg, Buffer.from(logo, "utf-8"));
  return api.sendMessage(
    {
      body: message,
      attachment: fs.createReadStream(pathImg),
    },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};