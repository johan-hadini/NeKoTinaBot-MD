import e from"../lib/database.js";import{xpRange as a}from"../lib/levelling.js";let handler=async(i,{conn:n,args:t,command:r})=>{let{exp:l,level:o,role:s,lastclaim:d,registered:m,regTime:u}=e.data.users[i.sender],{min:c,xp:v,max:p}=a(o,global.multiplier),g=l-c,b=g<0?`*[ ♦️ ]* Su XP actual es menor de 0, usted debe ${0-g} XP para continuar subiendo de nivel...`:`(${g} / ${v})`,h=await n.getName(i.sender),P=await n.profilePictureUrl(i.sender).catch(e=>"./multimedia/imagenes/avatar_contact.png");var w="";o<=2?w="[ - - - - - - - - - - ]":o<=9?w="[# - - - - - - - - - ]":o<=19?w="[## - - - - - - - - ]":o<=29?w="[### - - - - - - - ]":o<=39?w="[#### - - - - - - ]":o<=49?w="[##### - - - - - ]":o<=59?w="[###### - - - - ]":o<=69?w="[####### - - - ]":o<=79?w="[######## - - ]":o<=89?w="[######### - ]":o<=99&&(w="[##########]");let S=`
╭━━━━━━━━❮ NIVEL ❯━━━━━━━❐
*❐👤 Usuario* : ${m?"("+g+") ":""} ( @${i.sender.split("@")[0]} )
*❐👁️‍🗨️ Registrado* : ${m?"S\xed ("+new Date(c).toLocaleString()+")":"No"} ${d>0?"\n*⏱️ \xdaltimo reclamo:* "+new Date(d).toLocaleString():""}
*❐✍🏻 Nombre* : <${g}>
*❐✨ XP conseguido asta el momento* : (${l-u} / ${v})
*❐🍥 Su nivel actual es* : ${o} ${v<l-u?`<Ya puedes subir de nivel, use el comando ${Prefijo}subirnivel >`:""}
*❐🏔️ De acuerdo al nivel es* : ${s}
*❐🃏 Progreso de nivel* : ${b}
╰━━━━━━━━━━━━━━━━━━━━━❐

\`\`\`Use el comando ${Prefijo}inventario para ver tu inventario RPG`\`\`\
`.trim();await n.sendMessage(i.chat,{image:{url:P},caption:S,mentions:n.parseMention(S)},{quoted:i})};handler.help=["minivel"],handler.tags=["xp"],handler.command=/^(minivel)$/i;export default handler;
