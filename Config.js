const fs = require('fs');
const chalk = require('chalk');

//contact details
global.ownernumber = [ process.env.OWNER_NUMBER || "50937042801"],
global.ownername = process.env.OWNER_NAME || "~ ₉₀₀₃",
global.ytname = ""
global.socialm = ""
global.location = "Africa"

global.botname = process.env.BOTNAME || "~ ₉₀₀₃",//name of the bot

//sticker details
global.stickername = process.env.STICKER || "~ ₉₀₀₃",
global.packname = 'Sticker By'
global.author = process.env.AUTHOR || "~ ₉₀₀₃",
//console view/theme
global.themeemoji = '🚶🏾‍'
global.wm = "~ ₉₀₀₃"

//theme link
global.link = 'https://whatsapp.com/channel/0029VaiuD4s4IBhI0fzbv40Z'

//custom prefix
global.prefa = process.env.PREFIX || "." " ",

//false=disable and true=enable
global.welcome = process.env.WELCOME || "true", //auto welcome
global.autoRecording = true //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = false //auto block +212
global.autoread_status = true //auto view status/story



//reply messages
global.mess = {
    done: '💫 *₉₀₀₃ ap fè w konnen ke saw bezwen anh fèt!* ',
    prem: '💫 *₉₀₀₃ ap fè w konnen ke sa se pou moun ki premium*',
    admin: '💫 *₉₀₀₃ ap fè w konnen ke ou paka use kòmand sa al benyen*',
    botAdmin: '💫 *₉₀₀₃ ap fè w konnen ke ou pa admin al benyen* ',
    owner: '💫 *₉₀₀₃ ap fè w konnen ke ou pa owner kokorat kite papa w🖕🏾*',
    group: '💫 *₉₀₀₃ ap fè w konnen ke kòmand sa se pou group*',
    private: '💫 *₉₀₀₃ ap fè w konnen ke sa se pou lè w en prive*',
    wait: '💫 *tanpri tann yon moman.* ',    
    error: '💫 *₉₀₀₃ ap fè konnen ke saw bezwen anh pap ka fèt!*',
}
module.exports = {
ownernumber: global.50937042801,
ownername: global.~ ₉₀₀₃,
AUTO_BLOCK : process.env.PM_BLOCKER,
STATUS_SAVER : "false",
ANTI_BOT:"false",
}

global.thumb = fs.readFileSync('./lib/Assets/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
    
