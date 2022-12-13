import db from '../lib/database.js'

export function before(m) {
    let user = db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`*☺️ Dejatse de estar en afk desoues de:* ${(new Date - user.afk).toTimeString()}\n\nBienvenido/a de vuelta`.trim())
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        m.reply(`*✳️ El usuario que a mensionado no esta disponible*\n\nSu tiempo transcurrido ${(new Date - afkTime).toTimeString()}*\n\n*🍎 Razon por su afk:* ${reason}\n`.trim())
    }
    return true
}
