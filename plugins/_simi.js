import fetch from 'node-fetch'
let handler = m => m

handler.before = async (m) => {
let chat = global.db.data.chats[m.chat]
if (chat.simi) {
if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
if (!m.text) return
let textodem = m.text  
try {
await conn.sendPresenceUpdate('composing', m.chat)
let ressimi = await fetch(`https://api.simsimi.net/v2/?text=${encodeURIComponent(m.text)}&lc=` + lenguajeGB.lenguaje())
let data = await ressimi.json();
if (data.success == 'No s\u00e9 lo qu\u00e9 est\u00e1s diciendo. Por favor ense\u00f1ame.') return m.reply(`${lol}`) /* النص "lol" لم يتم تعريفه على أنه خطأ واستخدام واجهة برمجة التطبيقات الأخرى */
await m.reply(data.success)
} catch {
/* إذا كان هناك خطأ، فسأستخدم خيار AI API الآخر هذا الذي يتذكر اسم الشخص */
if (textodem.includes('Hola')) textodem = textodem.replace('Hola', 'Hello')
if (textodem.includes('hola')) textodem = textodem.replace('hola', 'hello')
if (textodem.includes('HOLA')) textodem = textodem.replace('HOLA', 'HELLO')    
let reis = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=" + textodem)
let resu = await reis.json()  
let nama = m.pushName || '1'
let api = await fetch("http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=" + nama + "&msg=" + resu[0][0][0])
let res = await api.json()
let reis2 = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=" + res.cnt)
let resu2 = await reis2.json()
await m.reply(resu2[0][0][0])}
return !0
}
return true
}
export default handler
