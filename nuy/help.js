const help = (prefix, instagram, yt, name, pushname2, user, limitt, uptime, jam, tanggal) => { return`╭──────「 *_ᴘᴇʀᴀᴛᴜʀᴀɴ_* 」
┴
│× Spam
│× Telepon
│Melanggar? ʙʟᴏᴄᴋ!
│Ketik #menu
│Untuk Melihat Fitur MancaBot
│
│Tambahan Fitur Anti Virtex Di Grup
│Sama Maker Tambahin Sedikit:V
┬
╰──────「 *_MC-BOT_* 」
`
}

exports.help = help

// penghitung aktif bot
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (6060));
  var minutes = Math.floor(seconds % (6060) / 60);
  var seconds = Math.floor(seconds % 60);
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

// info bot 
const bottt = (prefix) => {
return `
*JIKA INGIN MENGGUNAKAN MANCA BOT FOLLOW DULU IG SAYA*

https://www.instagram.com/thenay_xploit_
`
}
exports.bottt = bottt
// donasi menu
const donasi = (name) => { 
	return `       
╭──────「 *_ᴅᴏɴᴀꜱɪ_* 」
┴
│√ AXIS : 083815956151
│√ INSTAGRAM : https://www.instagram.com/thenay_xploit_
│
│\`\`\`ᴘᴜʟꜱᴀ\`\`\`
│ 5ᴋ ɪɴᴠɪᴛᴇ ʙᴏᴛ ᴋᴇ ɢʀᴜᴘ ꜱᴇʟᴀᴍᴀ 1 ʙᴜʟᴀɴ
│FOLLOW AJA IG KU KALO GA MAU DONASI
┬
╰──────「 *_MC-BOT* 」
`
}
exports.donasi = donasi
// bahasa list
const bahasa = (prefix) => {
return `
List Bahasa Untuk Command ${prefix}tts

  af: Afrikaans
  sq: Albanian
  ar: Arabic
  hy: Armenian
  ca: Catalan
  zh: Chinese
  zh-cn: Chinese (Mandarin/China)
  zh-tw: Chinese (Mandarin/Taiwan)
  zh-yue: Chinese (Cantonese)
  hr: Croatian
  cs: Czech
  da: Danish
  nl: Dutch
  en: English
  en-au: English (Australia)
  en-uk: English (United Kingdom)
  en-us: English (United States)
  eo: Esperanto
  fi: Finnish
  fr: French
  de: German
  el: Greek
  ht: Haitian Creole
  hi: Hindi
  hu: Hungarian
  is: Icelandic
  id: Indonesian
  it: Italian
  ja: Japanese
  ko: Korean
  la: Latin
  lv: Latvian
  mk: Macedonian
  no: Norwegian
  pl: Polish
  pt: Portuguese
  pt-br: Portuguese (Brazil)
  ro: Romanian
  ru: Russian
  sr: Serbian
  sk: Slovak
  es: Spanish
  es-es: Spanish (Spain)
  es-us: Spanish (United States)
  sw: Swahili
  sv: Swedish
  ta: Tamil
  th: Thai
  tr: Turkish
  vi: Vietnamese
  cy: Welsh
`
}
exports.bahasa = bahasa

// Limit
const limitend = (pushname2) => {
        return`*ᴍᴀᴀғ ${pushname2} ʟɪᴍɪᴛ ʜᴀʀɪ ɪɴɪ ʜᴀʙɪꜱ*\ɴ*ʟɪᴍɪᴛ ᴅɪ ʀᴇꜱᴇᴛ ꜱᴇᴛɪᴀᴘ ᴊᴀᴍ 12:00 ᴡɪʙ ᴛᴇɴɢᴀʜ ᴍᴀʟᴀᴍ*`
}

const limitcount = (limitCounts) => {
        return`
Limit Kamu: *${limitCounts}*
`
}

exports.limitend = limitend
exports.limitcount = limitcount
