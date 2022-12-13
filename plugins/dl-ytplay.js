/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import{generateWAMessageFromContent as e}from"@adiwajshing/baileys";let handler=async(a,{conn:t,command:o,text:r})=>{if(!r)return a.reply(`*✳️Que desea buscar en Youtube* 

*📌 Ejemplo de uso:*

${Prefijo+o} mtc s3rl`);let l;await a.reply(MultiNK.Proces(await t.getName(a.sender)));let i=encodeURIComponent(r);try{let s=await fetchJson(`https://latam-api.vercel.app/api/ytplay2?apikey=${MyApiKey}&q=${i}`),n=await getBuffer(s.logo),d=e(a.chat,{extendedTextMessage:{text:`
*🏷️ titulo:* ${s.titulo}
*📏️ Tama\xf1o:* ${s.peso+" Aprox."}
*👤 Autor:* ${s.autor}



_Enviando audio, espere..._
`.trim(),contextInfo:{externalAdReply:{title:s.titulo,body:"⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻",thumbnail:n,sourceUrl:"https://youtube.com/channel/UC0P5Peyb-AvjXJz-jRcTYJg?sub_confirmation=1"}}}},{quoted:a});await t.relayMessage(a.chat,d.message,{messageId:d.key.id}),t.sendMessage(a.chat,{audio:{url:decodeURIComponent(s.descarga1)||s.descarga2},mimetype:"audio/mp4",fileName:`${s.titulo}.mp3`},{quoted:a}).catch(e=>{a.reply(`Ocurrio un error, por favor use el comando:

${Prefijo}audio ${r}
`)})}catch(p){a.reply(MultiNK.Error0())}};handler.help=["play <texto>"],handler.tags=["servicio"],handler.command=/^play$/i;export default handler;
