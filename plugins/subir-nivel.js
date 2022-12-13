/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import{canLevelUp as e,xpRange as l}from"../lib/levelling.js";import{levelup as a}from"../lib/canvas.js";import r from"../lib/database.js";let handler=async(i,{conn:t})=>{let v=r.data.users[i.sender];var n="";if(v.level<=2?n="[ - - - - - - - - - - ]":v.level<=9?n="[# - - - - - - - - - ]":v.level<=19?n="[## - - - - - - - - ]":v.level<=29?n="[### - - - - - - - ]":v.level<=39?n="[#### - - - - - - ]":v.level<=49?n="[##### - - - - - ]":v.level<=59?n="[###### - - - - ]":v.level<=69?n="[####### - - - ]":v.level<=79?n="[######## - - ]":v.level<=89?n="[######### - ]":v.level<=99&&(n="[##########]"),!e(v.level,v.exp,global.multiplier)){let{min:s,xp:o,max:p}=l(v.level,global.multiplier);return i.reply(`
🪀 Nivel actual *${v.level} (${v.exp-s}/${o})*
🔥 Te faltan *${p-v.exp}* de XP para que puedas subir al siguiente nivel
`)}let d=1*v.level;for(;e(v.level,v.exp,global.multiplier);)v.level++;if(d!==v.level){v.role=global.rpg.role(v.level).name;let u=`Felicidades! ${t.getName(i.sender)}
Acabas de subir de nivel`,m=`\`\`\`${n}\`\`\`

♻️ *Nivel anterior* : ${d}
🪀 *Nuevo nivel* : ${v.level}
⚔️ *Rol del cliente* : ${v.role}
📆 *Fecha* : ${new Date().toLocaleString("es-ES")}

_Cuanto mas interact\xfaes con el bot, mayor ser\xe1\xa1 tu nivel_
`.trim();try{let c=await a(u,v.level);t.sendFile(i.chat,c,"levelup.jpg",m,i)}catch(b){i.reply(m)}}};handler.help=["subirnivel"],handler.tags=["xp"],handler.command=/^(subirnivel|levelup)$/i;export default handler;
