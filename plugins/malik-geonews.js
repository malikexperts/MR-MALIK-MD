import axios from "axios"
 let handler = async (m, { args }) => {
const response = axios.get(`https://cric-theta.vercel.app/geo?url=https://urdu.geo.tv/`);
const res = await response

let msg = ''
if (res.data.newsb) msg += "\n📺*جیو نیوز*\n\n" + res.data.newsb
if (res.data.newsc) msg += res.data.newsc
if (res.data.newsd) msg += res.data.newsd
if (res.data.newse) msg += res.data.newse
if (res.data.newsf) msg += res.data.newsf
if (res.data.newg) msg += res.data.newsg
if (res.data.newsh) msg += res.data.newsh
if (res.data.newsi) msg += res.data.newsi
if (res.data.newsj) msg += res.data.newsj
if (res.data.newsk) msg += res.data.newsk

 m.reply(msg)
 }
handler.help = ['geo']
handler.tags = ['herramientas']
handler.command = /^(geo|geonews)$/i
export default handler