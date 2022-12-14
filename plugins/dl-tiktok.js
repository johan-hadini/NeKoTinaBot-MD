import{tiktokdl as r,tiktokdlv2 as e}from"@bochilteam/scraper";let handler=async(t,{conn:a,args:i,command:n})=>{if(!i[0])return t.reply("*[ ! ] Y el Link?*");if(!isUrl(i[0])||!i[0].includes("tiktok.com"))return t.reply(`*✳️ Su link de Tiktok es inválido 😑*

*📌 Por favor, use un link de TikTok*

*✳️ Ejmplo:* ${Prefijo+n} https://vm.tiktok.com/ZMNo7NFT9/`);let l;await t.reply(MultiNK.Proces(await a.getName(t.sender)));let{author:{nickname:o},video:k,description:m}=await r(i[0]).catch(async r=>await e(i[0])),d=k.no_watermark_raw||k.no_watermark||k.no_watermark_hd||k.with_watermark;if(!d)return t.reply(MultiNK.Error0());a.sendFile(t.chat,d,"tiktok.mp4",`

*✅ Aqui tiene su pedido*`

*📝 Descripci\xf3n:* ${m}`:""}

`.trim(),t)};handler.help=["tiktokdl"].map(r=>r+" <link>"),handler.tags=["servicio"],handler.command=/^(tiktokdl)$/i,handler.limit=!0;export default handler;
