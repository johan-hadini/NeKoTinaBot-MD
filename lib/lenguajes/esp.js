//Lenguaje por defecto
const Lengua = () => {
  return 'es' //Prefijo español
}
const Habla = () => {
	return 'Lenguaje Español' //:v
}

//Límite/Nivel
const AdLimite = (usedPrefix) => {
  return `♥••*´¨`*•.☆•❬ 𝗠𝗘𝗡𝗦𝗔𝗝𝗘 𝗗𝗘 𝗟𝗜𝗠𝗜𝗧𝗘𝗦 ❭•☆.•*´¨`*••♥\n\n⚠️ ${name} te quedaste sin limites para usar los comandos del bot\n✳️ Puedes usar el comando *.𝗰𝗼𝗺𝗽𝗿𝗮𝗿* para comprar limites y otros artículos.`
}
const AdNivel = (plugin, _user) => {
  return `🍒｡･ﾟ♡ﾟ･｡🍓｡･❮ 𝗔𝗟𝗘𝗥𝗧𝗔 𝗗𝗘 𝗡𝗜𝗩𝗘𝗟 ❯･｡🍓｡･ﾟ♡ﾟ･｡🍒\n\n✳️ Necesitas el nivel *${plugin.level}* para empezar a usar este comando\n\n📌 Tu nivel actual es *${_user.level}*`
}

//Refrescar
const SpamerNot0 = (name) => {
  return `${name} Porfavor no me sature, se paciente UwU`
}
const SpamerNot1 = () => {
  return `✿❯────「𝗦𝗣𝗔𝗠 𝗗𝗘 𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 」────❮✿\n\n@${num.split('@')[0]} Espere unos 3 segundos para usar otro comando (⁠｡⁠•́⁠︿⁠•̀⁠｡⁠)`
}

//Mensaje de error
const ErrorMsj = (m, usedPrefix, command, args, text) => {
  return `*-漫~*'¨¯¨'*·舞~❮ 𝗘𝗥𝗥𝗢𝗥 𝗗𝗘 𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 ❯~舞*'¨¯¨'*·~漫-\n\n*🕊️ Plugin:* ${m.plugin}\n*👤 Cliente:* wa.me/${m.sender.split("@")[0]}\n*💭 Chat:* ${m.chat}\n*🍥 Comando:* ${usedPrefix}${command} ${args.join(' ')}\n\n\`\`\`${text}\`\`\` \n`
}

//Restringido desactivado
const RestriN = () => {
  return `｡.•*¨*•♬✧❮ 𝗠𝗢𝗗𝗢 𝗥𝗘𝗦𝗧𝗥𝗜𝗡𝗚𝗜𝗗𝗢 ❯✧♬•*¨*•.｡\n\n💭 No se pudo eliminar al participante nuevo\n📌 por favor active el modo restringido`
}

//Prefijo +1 activar con un comando aparte
const AlertList = () => {
  return `Eliminar números que inicien con   '1'   de global.FakeList en ./config.js`
}

//Textos de bienvenida
const WlcAdd = (num, groupMetadata, fesha, gpdesc) => {
  return `.•*¨*•.¸¸♪ 𝗪𝗘𝗟𝗖𝗢𝗠𝗘 ♪¸¸.•*¨*•.\n👤 *Bienvenid@ @${num.split("@")[0]} a este grandioso grupo* ${groupMetadata.subject}\n📆 *Fecha de ingreso | ${fesha}*\n🍷 *Espero y te agrade tu estancia aqui, no olvides respetar a los participantes y las reglas* ;)\n\n📜 *Normas del grupo actualmente:* \n${String.fromCharCode(8206).repeat(850)}\n${gpdesc}`
}
const WlcRemove = (num, fesha) => {
  return `.•*¨*•.¸¸♪ 𝗙𝗔𝗥𝗘𝗪𝗘𝗟𝗟♪¸¸.•*¨*•.\n\`\`\`🍒 Adios @${num.split("@")[0]}\`\`\`\n*⎔ Fecha de salida:* ${fesha}`
}
const Gbay = () => {
  return `Adios... 🤧${String.fromCharCode(8206).repeat(850)}\nᴸᶦᵐᶦᵗ ⁻⁵`
}
const WlcPromot = (num, groupMetadata) => {
	return `❖ ── ✦ ──『 𝗔𝗗𝗠𝗜𝗡 𝗡𝗨𝗘𝗩𝗢 』── ✦ ── ❖\n\n🎊 Felicidades *@${num.split('@')[0]}*\n💭 Ahora eres admin del grupo: *${groupMetadata.subject}*`
}
const WlcDemot = (num, groupMetadata) => {
	return `❖ ── ✦ ──『 𝗔𝗗𝗠𝗜𝗡 𝗣𝗘𝗥𝗗𝗜𝗗𝗢 』── ✦ ── ❖\n\n*😔 Lo siento *@${num.split('@')[0]}*\n🌩️ Ya no es administrador del grupo: *${groupMetadata.subject}*`
}

//Ajustes de grupo
const GpUp1 = () => {
  return `                      🔒 *[ 𝗚𝗥𝗨𝗣𝗢 𝗖𝗘𝗥𝗥𝗔𝗗𝗢  ]* 🔒          \nAhora solo los administradores pueden enviar mensajes`
}
const GpUp2 = () => {
  return `                        🔓 *[ 𝗚𝗥𝗨𝗣𝗢 𝗔𝗕𝗜𝗘𝗥𝗧𝗢 ]* 🔓          \nA hora todos los participantes pueden envíar mensajes`
}
const GpUp3 = () => {
  return `🧰 *[𝗔𝗝𝗨𝗦𝗧𝗘𝗦 𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗗𝗢𝗦 𝗘𝗡 𝗘𝗟 𝗚𝗥𝗨𝗣𝗢]* ⚙️\nA hora solo los administradores pueden editar los ajustes del grupo`
}
const GpUp4 = () => {
  return `🧰 *[𝗔𝗝𝗨𝗦𝗧𝗘𝗦 𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗗𝗢𝗦 𝗘𝗡 𝗘𝗟 𝗚𝗥𝗨𝗣𝗢]* ⚙️\nA hora todos los participantes pueden editar los ajistes del grupo\n*💭 Porfavor estar atentos con personas con retraso mental*`
}
const GpUp5 = (groupUpdate) => {
  return `✍️ *[ 𝗡𝗨𝗘𝗩𝗢 𝗡𝗢𝗠𝗕𝗥𝗘 𝗗𝗘𝗟 𝗚𝗥𝗨𝗣𝗢 𝗖𝗔𝗠𝗕𝗜𝗔𝗗𝗢 ]* 🤳\n\n*Nombre nuevo:* ${groupUpdate.subject}`
}

//Mensajes eliminados
const DelMsj = (mtype, participant, moment, feccha) => {
  return `ೋ❀ೋ══ 𝗠𝗘𝗡𝗦𝗔𝗝𝗘𝗦 𝗘𝗟𝗜𝗠𝗜𝗡𝗔𝗗𝗢𝗦══ೋ❀ೋ\n\n*📵 Tipo De Mensaje:* ${mtype}\n*🚮 Usuario:* @${participant.split`@`[0]}\n*📆 Fecha:* ${feccha}`
}

//No llamadas
const CallNot = (call) => {
  return `(★)◈동◈기天 𝗔𝗡𝗧𝗜 𝗟𝗟𝗔𝗠𝗔𝗗𝗔𝗦 신◈기天◈(★)\n\nHola *@${call.from.split('@')[0]}* Seras bloqueado(a)\n*📌 Razon:* por realizar una ${call.isVideo ? 'videollamada' : 'llamada'} a este numero sin autorizacion dela creadora del Bot\n`
}

//Mensaje de advertencia
const MsjRowner = () => {
  return `*[ ❕ ]* Este comando solo puede ser usado *desde el bot principal*\n\n📌 wa.me/51998882773`
}
const MsjOwner = () => {
  return `*[ ❕ ]* Este comando solo puede ser utilizado por la *creadora del bot*!`
}
const MsjMods = () => {
  return `*[ ❕ ]* Este comando solo puede ser utilizado por la *creadora del bot*!`
}
const MsjPremium = () => {
  return `*[ ❕ ]* Esta solicitud es solo para usuarios *premium*!`
}
const MsjGroup = () => {
  return `*[ ❕ ]* Este comando solo se puede usar en *grupos*!`
}
const MsjPrivate = () => {
  return `*[ ❕ ]* Este comando solo se puede usar por *chat privado*!`
}
const MsjAdmin = () => {
  return `*[ ❕ ]* Este comando solo puede ser usado por los *administradores del grupo*!`
}
const MsjBotAdmin = () => {
  return `*[ ❕ ]* Necesito *ser administradora* para usar este comando`
}
const MsjUnreg = () => {
  return `*[ ❕ ]* Regístrese para comenzar a usar esta función escribiendo:\n*📌 Ejemplo:* .rg cosmico.20`
}
const MsjRestrict = () => {
  return `[ ❕ ] Funcion descativada UwU`
}

//Mensaje inicial
const Proces = (name) => {
  return `🔄 ${name} estoy procesando su pedido porfavor espere ...`
}
const Bsqd = (name) => {
  return `🌐 ${name} estoy buscando su pedido porfavor esperé ...`
}

//Mensaje de error
const Error0 = () => { 
	return `⚠️ Error 404\nHubo un error en mi sistema porfavor intentelo nuevamente.`
}
const Error1 = () => {
	return `⚠️ Error 404\n Hubo un error inesperado u.u️`
}

export default { Lengua, Habla, AdLimite, AdNivel, SpamerNot0, SpamerNot1, ErrorMsj, RestriN, WlcAdd, WlcRemove, Gbay, WlcPromot, WlcDemot, GpUp1, GpUp2, GpUp3, GpUp4, GpUp5, DelMsj, CallNot, MsjRowner, MsjOwner, MsjMods, MsjPremium, MsjGroup, MsjPrivate, MsjAdmin, MsjBotAdmin, MsjUnreg, MsjRestrict, Proces, Bsqd, Error0, Error1 };


