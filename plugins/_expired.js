import db from '../lib/database.js'

export async function all(m) {
    if (!m.isGroup)
        return
    let chats = db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        await this.reply(m.chat, '*Termino el tiempo de quedarme en el grupo ☹️\n\nSe come manzana 🍎 y se va*')
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}