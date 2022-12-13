/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
let handler=async(e,{conn:a,command:t,text:r})=>{if(!r)return e.reply(`Que desea buscar en Youtube?, Ejemplo de uso: 

${Prefijo+t} mtc s3rl`);let i;await e.reply(MultiNK.Proces(await a.getName(e.sender)));let l=encodeURIComponent(r);try{let n=await fetchJson(`https://latam-api.vercel.app/api/ytplay?apikey=${MyApiKey}&q=${l}`),o=await getBuffer(n.logo);await a.sendMessage(e.chat,{text:`*🍎 Resultados de la busqueda:*
 📌 ${r}
*🍂 Titulo:* ${n.titulo}
*⏲️ Duracion:* ${n.duracion}
*👁️ Vistas:* ${n.vistas}
*👤 Autor:* ${n.autor}
*📇 Descripci\xf3n:* ${n.descripcion}
*🌐 URL:* ${n.link}

\`\`\`Cargando el audio espere...\`\`\``},{quoted:e}),a.sendMessage(e.chat,{audio:{url:n.descarga},mimetype:"audio/mpeg",fileName:`${n.titulo}.mp3`,contextInfo:{externalAdReply:{title:`${n.titulo}`,body:"",previewType:"PHOTO",thumbnailUrl:"",thumbnail:o,sourceUrl:n.descarga}}},{quoted:e}).catch(a=>{e.reply(MultiNK.Error1())})}catch(d){e.reply(MultiNK.Error0())}};handler.help=["audio <texto>"],handler.tags=["servicio"],handler.command=/^audio$/i,handler.limit=!0;export default handler;
