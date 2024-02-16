import yts from 'yt-search';
import fs from 'fs';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*type video/audio song name *\n\n*—◉ Example:*\n*${usedPrefix + command} Dil dil pakistan*`;
  try {
    const vids_ = {
      from: m.sender,
      urls: [],
    };
    if (!global.videoList) {
      global.videoList = [];
    }
    if (global.videoList[0]?.from == m.sender) {
      global.videoList.splice(0, global.videoList.length);
    }
    const results = await yts(text);
    const textoInfo = `○—⌈Mr-Malik YT Search⌋—○\n\n 🛰️ *REPLY* with Any *Number*`.trim();
    const teks = results.all.map((v, i) => {
      const link = v.url;
      vids_.urls.push(link);
      return `\n*Reply With -> ${i + 1}* 
↳ 🫐 *_Title :_* ${v.title}
↳ 🕒 *_Duration :_* ${v.timestamp}
↳ 📥 *_Uploaded :_* ${v.ago}`;
    }).join('\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n');
    conn.sendFile(m.chat, results.all[0].thumbnail, 'yts.jpeg', textoInfo + '\n\n' + teks, m);
    global.videoList.push(vids_);
  } catch {
    await m.reply('*Error*');
  }
};
handler.help = ['y *<texto>*'];
handler.tags = ['search'];
handler.command = /^yts$/i;
export default handler;
