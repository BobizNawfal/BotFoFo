import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = m => m
handler.before = async function (m, { conn, usedPrefix }) {
	
if (!db.data.chats[m.chat].autolevelup) return
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
	
let user = global.db.data.users[m.sender]
let chat = global.db.data.chats[m.chat]
if (!chat.autolevelup)
return !0
	
let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
 if (before !== user.level) {
 
/*conn.reply(m.chat, `*╭━⊰ ${اسم المستخدم} ⊱━დ*
*┃ ${lenguajeGB.smsAutoLv2()} ${before}*
*┃ ${lenguajeGB.smsAutoLv3()} ${user.level}*
*┃ ${lenguajeGB.smsAutoLv4()}* ${user.role}
*┃ ${lenguajeGB.smsAutoLv5()} ${new Date().toLocaleString('id-ID')}*
*╰━⊰ ${lenguajeGB.smsAutoLv1()} ⊱━━დ*

*_${lenguajeGB.smsAutoLv6()}_*`, fkontak, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}}) */
conn.sendButton(m.chat, '🐈 ' + wm, `*╭━⊰ ${اسم المستخدم} ⊱━დ*
*┃ ${lenguajeGB.smsAutoLv2()} ${before}*
*┃ ${lenguajeGB.smsAutoLv3()} ${user.level}*
*┃ ${lenguajeGB.smsAutoLv4()}* ${user.role}
*┃ ${lenguajeGB.smsAutoLv5()} ${new Date().toLocaleString('id-ID')}*
*╰━⊰ ${lenguajeGB.smsAutoLv1()} ⊱━━დ*

*_${lenguajeGB.smsAutoLv6()}_*`, null, [[lenguajeGB.smsConMenu(), `${usedPrefix}menu`]], null, null, fkontak)


let especial = ['حد', 'الماس', 'عدد الانضمام', 'زمرد', 'الماس', 'كيوبي', 'ذهب', 'مال', 'تذكرة عملة', 'قوة تحمل'].getRandom()
let especial2 = ['جرعة', 'أكوا', 'نفاية', 'خشب', 'صخر', 'حجر', 'النصوص', 'حديد', 'فحم', 'زجاجة', 'يستطيع', 'صندوق من الورق المقوى'].getRandom()
let especial3 = ['كهربائي', 'سبيكة ذهب', 'الذهب العادي', 'يتغير', 'القمامة', 'ذئب', 'خشب', 'سيف', 'طعم', 'وحش الصحة', 'ليست كذلك', 'الإغراء', 'ممر صيد الاسماك'].getRandom()
let especial4 = ['شائع', 'غير شائع', 'أسطوري', 'حيوان أليف', 'صناديق الحديقة', 'أسطوري'].getRandom()

let especialCant = [6, 7, 6, 7, 6, 6, 6, 7, 8, 9, 8, 3, 9, 7, 9].getRandom()
let especialCant2 = [6, 7, 6, 7, 6, 6, 6, 7, 8, 9, 10, 3, 11, 7, 9].getRandom()
let especialCant3 = [6, 7, 6, 7, 6, 6, 6, 7, 8, 9, 10, 3, 11, 7, 9].getRandom()
let especialCant4 = [2, 2, 2, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 2, 2].getRandom()

let normal = ['جرعة', 'أكوا', 'نفاية', 'خشب', 'صخر', 'حجر', 'النصوص', 'حديد', 'فحم', 'زجاجة', 'يستطيع', 'صندوق من الورق المقوى'].getRandom()
let normal2 = ['طعام الحيوانات الاليفة', 'طعام القنطور', 'طعام غريفين', 'مايا كيوبي', 'طعام', 'طعام الحيوانات الاليفة', 'طعام طائر الفينيق'  ].getRandom()
let normal3 = ['خمر', 'يتصل', 'البرتقالي', 'لو سمحت', 'موز'].getRandom()

let normalCant = [1, 3, 3, 3, 4, 4, 2, 2, 4, 4, 4, 4, 1].getRandom() 
let normalCant2 = [1, 3, 2, 2, 4, 4, 2, 2, 4, 4, 5, 5, 1].getRandom() 
let normalCant3 = [1, 3, 3, 3, 4, 4, 2, 2, 4, 4, 4, 4, 1].getRandom() 

if (user.level == 5){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 5!!* 🏆
𓃠 *${especialCant * 1} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 1} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 1} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 1} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}}) 
user[especial] += especialCant * 1
user[especial2] += especialCant2 * 1
user[especial3] += especialCant3 * 1
user[especial4] += especialCant4 * 1
  
}else if (user.level == 10){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 10!!* 🏆
𓃠 *${especialCant * 1} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 1} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 1} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 1} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}}) 
user[especial] += especialCant * 1
user[especial2] += especialCant2 * 1
user[especial3] += especialCant3 * 1
user[especial4] += especialCant4 * 1
  
}else if (user.level == 15){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 15!!* 🏆
𓃠 *${especialCant * 2} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 2} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 2} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 2} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}}) 
user[especial] += especialCant * 2
user[especial2] += especialCant2 * 2
user[especial3] += especialCant3 * 2
user[especial4] += especialCant4 * 2
  
}else if (user.level == 20){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 20!!* 🏆
𓃠 *${especialCant * 2} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 2} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 2} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 2} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb}}}) 
user[especial] += especialCant * 2
user[especial2] += especialCant2 * 2
user[especial3] += especialCant3 * 2
user[especial4] += especialCant4 * 2
  
}else if (user.level == 25){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 25!!* 🏆
𓃠 *${especialCant * 3} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 3} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 3} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 3} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
user[especial] += especialCant * 3
user[especial2] += especialCant2 * 3
user[especial3] += especialCant3 * 3
user[especial4] += especialCant4 * 3
	
}else if (user.level == 30){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 30!!* 🏆
𓃠 *${especialCant * 3} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 3} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 3} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 3} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
user[especial] += especialCant * 3
user[especial2] += especialCant2 * 3
user[especial3] += especialCant3 * 3
user[especial4] += especialCant4 * 3
	
}else if (user.level == 35){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 35!!* 🏆
𓃠 *${especialCant * 4} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 4} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 4} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 4} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
user[especial] += especialCant * 4
user[especial2] += especialCant2 * 4
user[especial3] += especialCant3 * 4
user[especial4] += especialCant4 * 4
	
}else if (user.level == 40){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 40!!* 🏆
𓃠 *${especialCant * 4} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 4} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 4} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 4} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
user[especial] += especialCant * 4
user[especial2] += especialCant2 * 4
user[especial3] += especialCant3 * 4
user[especial4] += especialCant4 * 4
	
}else if (user.level == 45){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 45!!* 🏆
𓃠 *${especialCant * 4} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 4} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 4} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 4} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
user[especial] += especialCant * 4
user[especial2] += especialCant2 * 4
user[especial3] += especialCant3 * 4
user[especial4] += especialCant4 * 4
	
}else if (user.level == 50){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 50!!* 🏆
𓃠 *${especialCant * 5} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 5} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 5} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 5} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
user[especial] += especialCant * 5
user[especial2] += especialCant2 * 5
user[especial3] += especialCant3 * 5
user[especial4] += especialCant4 * 5
	
}else if (user.level == 55){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 55!!* 🏆
𓃠 *${especialCant * 5} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 5} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 5} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 5} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
user[especial] += especialCant * 5
user[especial2] += especialCant2 * 5
user[especial3] += especialCant3 * 5
user[especial4] += especialCant4 * 5
	
}else if (user.level == 60){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 60!!* 🏆
𓃠 *${especialCant * 5} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 5} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 5} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 5} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
user[especial] += especialCant * 5
user[especial2] += especialCant2 * 5
user[especial3] += especialCant3 * 5
user[especial4] += especialCant4 * 5
	
}else if (user.level == 65){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 65!!* 🏆
𓃠 *${especialCant * 5} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 5} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 5} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 5} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
user[especial] += especialCant * 5
user[especial2] += especialCant2 * 5
user[especial3] += especialCant3 * 5
user[especial4] += especialCant4 * 5
	
}else if (user.level == 70){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 70!!* 🏆
𓃠 *${especialCant * 6} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 6} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 6} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 6} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
user[especial] += especialCant * 6
user[especial2] += especialCant2 * 6
user[especial3] += especialCant3 * 6
user[especial4] += especialCant4 * 6
	
}else if (user.level == 75){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 75!!* 🏆
𓃠 *${especialCant * 6} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 6} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 6} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 6} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
user[especial] += especialCant * 6
user[especial2] += especialCant2 * 6
user[especial3] += especialCant3 * 6
user[especial4] += especialCant4 * 6
	
}else if (user.level == 80){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 80!!* 🏆
𓃠 *${especialCant * 7} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 7} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 7} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 7} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
user[especial] += especialCant * 7
user[especial2] += especialCant2 * 7
user[especial3] += especialCant3 * 7
user[especial4] += especialCant4 * 7
	
}else if (user.level == 85){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 85!!* 🏆
𓃠 *${especialCant * 7} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 7} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 7} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 7} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb}}})
user[especial] += especialCant * 7
user[especial2] += especialCant2 * 7
user[especial3] += especialCant3 * 7
user[especial4] += especialCant4 * 7
	
}else if (user.level == 90){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 90!!* 🏆
𓃠 *${especialCant * 8} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 8} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 8} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 8} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
user[especial] += especialCant * 8
user[especial2] += especialCant2 * 8
user[especial3] += especialCant3 * 8
user[especial4] += especialCant4 * 8
	
}else if (user.level == 95){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 95!!* 🏆
𓃠 *${especialCant * 10} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 10} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 10} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 10} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
user[especial] += especialCant * 10
user[especial2] += especialCant2 * 10
user[especial3] += especialCant3 * 10
user[especial4] += especialCant4 * 10
	
}else if (user.level == 100){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 100!!* 🏆
𓃠 *${especialCant * 10} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 10} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 10} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 10} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
user[especial] += especialCant * 10
user[especial2] += especialCant2 * 10
user[especial3] += especialCant3 * 10
user[especial4] += especialCant4 * 10
	
}else{	
	
}
	 
}}		
export default handler
