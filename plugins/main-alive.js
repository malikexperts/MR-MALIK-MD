let handler = async (m, { conn, usedPrefix, command}) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let user = global.db.data.users[who]
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]

let caption = `
╭───[_Mr-Malik_]───╮
│╭────────────────────
┴│👋 Hey there, ${name}!
⬡│⚛ I'm _Mr-Malik_ \n⬡│ I'm up and running! 🚀
│╰────────────────────
┠───[ BOT INFO ]────╮
│╭────────────────────
┴│       _Mr-Malik_
⬡│💻 A WhatsApp bot created by:
⬡│👨‍💻 Nasrullah
⬡│📞 For any inquiries, contact:
⬡│📱 wa.me/923494757886
⬡│
⬡│🔗 *Contributors*
⬡│
⬡│👨‍ 1- Boss Awais Malik 💜
⬡│📱 wa.me/923478477910
⬡│
⬡│👨‍ 2- Boss Usman 💜
⬡│📱 wa.me/923404699880
⬡│
⬡│👨‍ 3- Muhammad Ameen
⬡│📱 wa.me/923361738889
⬡│
⬡│👨‍ 4- Muhammad Yousif 
⬡│📱 wa.me/923167458766
⬡│
⬡│Special Thanks To All
⬡│ Contributors❤
│╰────────────────────
┠───[ HOW TO USE ]────⋆
┴│💡 Some commands you can use:
⬡│🔸 .menu \n⬡│- Shows a list\n⬡│ of available commands
⬡│🔸 .play \n⬡│- Plays a YouTube\n⬡│ video or audio.
⬡│🔸 .sticker \n⬡│- Converts an \n⬡│image to a sticker
┬│🔸 .translate \n⬡│- Translates text \n⬡│to other lang
│╰──────────────
╰────────═┅═───────
*Thank you for choosing Mr-Malik! 🌟✨*
`.trim()
  m.reply(caption)
}
handler.help = ['main']
handler.tags = ['group']
handler.command = ['alive', 'hi'] 

export default handler