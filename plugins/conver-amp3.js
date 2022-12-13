/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import{toAudio as e}from"../lib/converter.js";import*as o from"fs";let handler=async(a,{conn:t,usedPrefix:i,command:d,text:n})=>{let r=["https://youtube.com/channel/UC0P5Peyb-AvjXJz-jRcTYJg?sub_confirmation=1","https://vm.tiktok.com/ZMLjP4RBS/","https://youtube.com/channel/UC0P5Peyb-AvjXJz-jRcTYJg"],l=a.quoted?a.quoted:a,m=(a.quoted?a.quoted:a.msg).mimetype||"";if(!/video|audio/.test(m))return a.reply(`Envie \xf3 Responda un (video/grabaci\xf3n) con el comando:

${i+d}`);let p=await l.download?.();if(!p)throw"No se pudo descargar el archivo";let u=await e(p,"mp4");if(!u.data)return a.reply("No se pudo convertir a audio");await t.sendMessage(a.chat,{audio:u.data,contextInfo:{externalAdReply:{title:`🎞️ Convertido a audio 🎶`,body:`.mp3 ✓`,previewType:"PHOTO",thumbnail:o.readFileSync("./multimedia/imagenes/logo.jpg"),sourceUrl:r[Math.floor(Math.random()*r.length)]}},mimetype:"audio/mp4",fileName:`${n||"audio"}.mp3`},{quoted:a}),reacMoji(a.chat,t,"⚙️",a)};handler.help=["amp3"],handler.tags=["conversor"],handler.command=/^(amp3|aaudio|tomp3)$/i;export default handler;
