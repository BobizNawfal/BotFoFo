let handler = m => m

handler.all = async function (m, { isBotAdmin }) {
// الحذف التلقائي عند وجود رسالة لا يمكن رؤيتها على سطح المكتب |  يقوم المسح التلقائي بمسح الأشياء التي لا يمكن تشغيلها على سطح المكتبif (m.messageStubType === 68) {
let log = {
key: m.key,
content: m.msg,
sender: m.sender
}
await this.modifyChat(m.chat, 'clear', {
includeStarred: false
}).catch(console.log)
}}
export default handler
