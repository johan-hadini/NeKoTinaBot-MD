/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import{toPTT as e}from"../lib/converter.js";import*as t from"fs";let handler=async(o,{conn:a,usedPrefix:n,command:i,text:d})=>{let r=["https://youtube.com/channel/UC0P5Peyb-AvjXJz-jRcTYJg?sub_confirmation=1","https://youtube.com/channel/UC0P5Peyb-AvjXJz-jRcTYJg","https://vm.tiktok.com/ZMFgMrmtV/"],p=o.quoted?o.quoted:o,l=(o.quoted?o.quoted:o.msg).mimetype||"";if(!/video|audio/.test(l))return o.reply(`Envie \xf3 Responda un (video/audio) con el comando:

${n+i}`);let m=await p.download?.();if(!m)throw"No se pudo descargar el archivo";let u=await e(m,"mp4");if(!u.data)return o.reply("No se pudo convertir a audio");await a.sendMessage(o.chat,{audio:u.data,contextInfo:{externalAdReply:{title:`🎤 Convertido a grabaci\xf3n 🎶`,body:`.ptt ✓`,previewType:"PHOTO",thumbnail:t.readFileSync("./multimedia/imagenes/logo.jpg"),sourceUrl:r[Math.floor(Math.random()*r.length)]}},mimetype:"audio/mp4",fileName:`${d||"audio"}.mp3`,ptt:!0},{quoted:o}),reacMoji(o.chat,a,"⚙️",o)};handler.help=["aptt"],handler.tags=["conversor"],handler.command=/^(avn|aptt|tovn|toptt)$/i;export default handler;
