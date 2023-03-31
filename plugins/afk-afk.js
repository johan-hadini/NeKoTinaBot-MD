import db from '../lib/database.js'

let handler = async (m, { text, conn }) => {
    let user = db.data.users[m.sender]
    if (!text) return m.reply(`Porfavor diga su motivo para estar en afk\n*📌 Ejemplo de uso:* \n${Prefijo}afk ire a ver porno`)
    if (text.length < 10) return m.reply(`*[ ! ]* Su motivo es corto`)
    user.afk = + new Date
    user.afkReason = text
    await conn.sendMessage(m.chat, { text: `*✳️ Se activo la función afk exitosamente*\n\n*👤 Usuario:* ${conn.getName(m.sender)}\n*💬 Razon:* ${text}`}, {quoted: m }) 
    reacMoji(m.chat, conn, '💤', m)
}

handler.help = ['afk [razon]']
handler.tags = ['casual']
handler.command = /^afk$/i

export default handler