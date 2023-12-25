import axios from "axios"
 let handler = async (m, { args }) => {
 if (!args[0]) throw "No matchs found. Or Type correct match id"
const response = axios.get(`https://cric-theta.vercel.app/score?url=https://m.cricbuzz.com/cricket-commentary/${args}&timestamp=`+new Date());
const res = await response

let msg = ''
if (res.data.title) msg += res.data.title + `\n`
if (res.data.update) msg += `*`+res.data.update + `*\n\n`
if (res.data.current) msg += '*'+res.data.current + `*\n`
if (res.data.batsman) msg += `Batsman 🏏: *${res.data.batsman} - ${res.data.batsmanrun} ${res.data.ballsfaced}\n`
if (res.data.sr) msg +=`Strike rate: ${res.data.sr}\n`
if (res.data.batsman) msg +=`Batsman 2 🏏: *${res.data.batsmantwo}* - ${res.data.batsmantworun} ${res.data.batsmantwoballsfaced}\n`
if (res.data.batsman) msg += `Strike rate: ${res.data.batsmantwosr}\n\n`
if (res.data.batsman) msg += `Bowler ⚾: *${res.data.bowler}*\n`
if (res.data.batsman) msg +=`Over: ${res.data.bowlerover}\n`
if (res.data.batsman) msg += `Runs: ${res.data.bowlerruns}\n`
if (res.data.batsman) msg +=`Wickets: ${res.data.bowlerwickets}\n`
if (res.data.batsman) msg+=`Bowler 2: ${res.data.bowlertwo}\n\n`
if (res.data.batsman) {
msg += `${res.data.recentballs}\n\n`
msg += `Last wicket ❌ ${res.data.lastwicket}\n`
msg += `Run rate %: *${res.data.runrate}*\n`
}
m.reply('*Live score updating... 🏏🏏*')
 m.reply(msg)
 }
handler.help = ['score *<matchID>*']
handler.tags = ['herramientas']
handler.command = /^(cricket|score)$/i
export default handler