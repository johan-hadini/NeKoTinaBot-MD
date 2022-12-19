/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import*as e from"fs";let handler=async(a,{conn:t,args:r})=>{await t.profilePictureUrl(a.chat,"image").catch(e=>null);let n=await t.getName(a.sender);try{var l=await t.profilePictureUrl(a.sender,"image")}catch{var l="https://i.ibb.co/jhQ7gL0/Sin-Perfil-F.jpg"}try{var i=await global.getBuffer(l)}catch{var i=e.readFileSync("./multimedia/imagenes/avatar_contact.png")}t.relayMessage(a.chat,{extendedTextMessage:{text:`*🩸GRUPOS DEL BOT OFICIALES🍂*

*GRUPO OFICIAL 1*

1️⃣ https://chat.whatsapp.com/KkLE1VmVvP5L29k7qVaZ4t

*_❤️ QUIERES AGREGAR UN GRUPO AL BOT CONTACTAME_*`,contextInfo:{externalAdReply:{title:"Quieres agregar tu grupo al bot?",body:Toca aqui 😗,previewType:"PHOTO",thumbnailUrl:"",thumbnail:i,sourceUrl:`https://api.whatsapp.com/send?phone=51995386439&text=Wenasss!%0ADeseo%20agregar%20mi%20grupo%20al%20comando%20del%20bot%0AAsunto%20del%20grupo%3A%20%0ALink%3A%20`}}}},{})};handler.help=["wame"],handler.tags=["casual"],handler.command=/^(wame|wa.me)$/i;export default handler;
