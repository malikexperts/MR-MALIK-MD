import fetch from 'node-fetch'
import uploader from '../lib/uploadImage.js'

var handler = async (m, { conn, text, command, usedPrefix }) => {

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (!mime){  
if (!text) throw `*🎟 ️Ask Question* \n\n *_Example:_* *.bard Hi* \n\n*_Example 2:_* *.ans who are you? * \n\n  *I'm ready to help and reply your queries*`
await m.react('🪄')
let json = await (await fetch(`https://aemt.me/bard?text=${text}`)).json()
conn.sendMessage(m.chat, { text: json.result + "\n\n*_©️Bard: ʙʏ ɴᴀꜱʀᴜʟʟᴀʜ ᴍᴀᴄʜɪ🦹‍♂️_*" }, { quoted: m })

} else 
if (/image/g.test(mime) && !/webp/g.test(mime)) {
let buffer = await q.download()
await m.react('🪄')
let media = await (uploader)(buffer)
if (!text) throw `*🎟️ Upload image with Question*\n\n 🪄 *_Example:_* *What is this?* \n\n *I'm ready to help and reply your queries.*`

let json = await (await fetch(`https://aemt.me/bardimg?url=${media}&text=${text}`)).json()

conn.sendMessage(m.chat, { text: json.result + "\n\n*_©️Bard: ʙʏ ɴᴀꜱʀᴜʟʟᴀʜ ᴍᴀᴄʜɪ🦹‍♂️_*" }, { quoted: m })

} else return conn.reply(m.chat, `*🎟️Upload image with Question\n I'm ready to help and reply your queries.*`, m )

}

handler.command = /^(bard|ask|ans)$/i


export default handler