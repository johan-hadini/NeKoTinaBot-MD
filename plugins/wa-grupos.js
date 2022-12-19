/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import*as e from"fs";let handler=async(a,{conn:t,args:r})=>{await t.profilePictureUrl(a.chat,"image").catch(e=>null);let n=await t.getName(a.sender);try{var l=await t.profilePictureUrl(a.sender,"image")}catch{var l="https://i.ibb.co/jhQ7gL0/Sin-Perfil-F.jpg"}try{var i=await global.getBuffer(l)}catch{var i=e.readFileSync("./multimedia/imagenes/avatar_contact.png")}t.relayMessage(a.chat,{extendedTextMessage:{text:(`*🩸GRUPOS DEL BOT OFICIALES🍂*

*GRUPO OFICIAL 1*

1️⃣ https://chat.whatsapp.com/KkLE1VmVvP5L29k7qVaZ4t

*_❤️ QUIERES AGREGAR UN GRUPO AL BOT CONTACTAME_*`)
	conn.relayMessage(m.chat, {extendedTextMessage:{text: wa.enlaces+`\n${String.fromCharCode(8206).repeat(850)}ᴺᴼᵀᴬ" ˢᶦ ᵉⁿ ᵉˢᵗᵉ ᵍʳᵘᵖᵒ ᵉˢᵗᵃ́ ᵖʳᵒʰᶦᵇᶦᵈᵒ ᶜᵒᵐᵖᵃʳᵗᶦʳ ᵉⁿˡᵃᶜᵉˢ• ᴰᵉ ˢᵉʳ ⁿᵉᶜᵉˢᵃʳᶦᵒ ˡᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵗᶦᵉⁿᵉⁿ ᵗᵒᵈᵒ ᵉˡ ᵈᵉʳᵉᶜʰᵒ ᵃ ᵉˡᶦᵐᶦⁿᵃʳ ᵃˡ ᵇᵒᵗ ⁻`, ...{ contextInfo:{"externalAdReply":{"title": `${name} Quieres agregar tu grupo :D?`,"body": `Toca aqui ;3`,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": await getBuffer(pp), "sourceUrl": 'https://api.whatsapp.com/send?phone=51957041866&text=Wenasss!%0ADeseo%20agregar%20mi%20grupo%20al%20comando%20del%20bot%0AAsunto%20del%20grupo%3A%20%0ALink%3A%20'}}}
}}, {})
} catch (e) {
m.reply(MultiNK.Error0())
}
}

handler.help = ['wagrupos']
handler.tags = ['']
handler.command = /^(wagrupos|gruposwa|grupos)$/i
handler.limit = 2

export default handler
