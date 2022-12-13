/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import db from '../lib/database.js'
import { canLevelUp } from '../lib/levelling.js'

export function before(m) {
    let user = db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++

    if (before !== user.level) {
        user.role = global.rpg.role(user.level).name
        m.reply(`
*Te felicito ${this.getName(m.sender)} subiste a un nuevo nivel*

*⎔ Tu nivel antiguo:* ${before}
*⎔ Tu nivel actual:* ${user.level}
*⎔ Tu rol:* ${user.role}
	`.trim())
    }
}
export const disabled = true