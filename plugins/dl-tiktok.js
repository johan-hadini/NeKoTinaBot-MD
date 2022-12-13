import{tiktokdl as r,tiktokdlv2 as e}from"@bochilteam/scraper";let handler=async(t,{conn:a,args:i,command:n})=>{if(!i[0])return t.reply("*✳️ Y el link de Tiktok?*");if(!isUrl(i[0])||!i[0].includes("tiktok.com"))return t.reply(`*[ ! ] Link inv\xe1lido*

*Por favor, use un link de Tik Tok*

*📌 Ejemplo:* ${Prefijo+n} https://vm.tiktok.com/ZMFgM5WrD/`);let l;await t.reply(MultiNK.Proces(await a.getName(t.sender)));let{author:{nickname:o},video:k,description:m}=await r(i[0]).catch(async r=>await e(i[0])),d=k.no_watermark_raw||k.no_watermark||k.no_watermark_hd||k.with_watermark;if(!d)return t.reply(MultiNK.Error0());a.sendFile(t.chat,d,"tiktok.mp4",`
A qui esta tu pedido ✅`:""}
`.trim(),t)};handler.help=["tiktokdl"].map(r=>r+" <link>"),handler.tags=["servicio"],handler.command=/^(tiktokdl)$/i,handler.limit=!0;export default handler;
