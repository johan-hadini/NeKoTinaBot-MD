/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
let handler=async(t,{conn:e,args:i})=>{if(!i[0]||!isUrl(i[0])&&!i[0].includes("youtube.com"))return;await e.getName(t.sender);let r=[{title:"⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻",rows:{title:"*🎧 Descargar Audio*",description:"Se descargara en formato de documento",rowId:`${Prefijo}yta ${i[0]}`},{title:"⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻",rows:[{title:"*📽️ Descargar Video*",description:"Descarga en formato mp4",rowId:`${Prefijo}ytmp4 ${i[0]}`},{title:"*📽️ Descargar Video*",description:"Descarga en formato mp4",rowId:`${Prefijo}ytv ${i[0]}`},{title:"*📽️ Descargar Video*",description:"Descarga en formato mp4",rowId:`${Prefijo}ytvbochi ${i[0]}`}]}];try{await e.sendMessage(t.chat,{text:`╰──────────────────❍`,footer:"\n"+NombreDelBot,title:`╭─────────────────❍
${i[0]}`,buttonText:" Seleccione una opci\xf3n ",sections:r},{quoted:t})}catch(o){t.reply(MultiNK.Error0())}};

//handler.help = ['listytdl <link>']
handler.tags = ['servicio']
handler.command = /^(listytdl)$/i

export default handler
