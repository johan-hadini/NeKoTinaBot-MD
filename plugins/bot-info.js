import e from"../lib/connection.js";import{plugins as t}from"../lib/plugins.js";import{cpus as a,totalmem as i,freemem as s,platform as o,type as n,arch as r,hostname as m}from"os";import{performance as l}from"perf_hooks";import{sizeFormatter as d}from"human-readable";import c from"performance-now";let{generateWAMessageFromContent:p}=(await import("@adiwajshing/baileys")).default,format=d({std:"JEDEC",decimalPlaces:2,keepTrailingZeroes:!1,render:(e,t)=>`${e} ${t}B`}),handler=async(d,{conn:u})=>{let h=Object.entries(e.store.chats).filter(([e,t])=>e&&t.isChats),g=h.filter(([e])=>e.endsWith("@g.us")),f=process.memoryUsage(),$=a().map(e=>(e.total=Object.keys(e.times).reduce((t,a)=>t+e.times[a],0),e)),y=$.reduce((e,t,a,{length:i})=>(e.total+=t.total,e.speed+=t.speed/i,e.times.user+=t.times.user,e.times.nice+=t.times.nice,e.times.sys+=t.times.sys,e.times.idle+=t.times.idle,e.times.irq+=t.times.irq,e),{speed:0,total:0,times:{user:0,nice:0,sys:0,idle:0,irq:0}}),w=d.reply("_Obteniendo informaci\xf3n..._");await w;let b=global.hit_cmd.length,j=l.now(),C=l.now()-j,k=c(),_=c()-k,v=m().includes("localhost")?"Servidor personal":m(),P=Math.floor(process.uptime())>43200?"Hits en las \xfaltimas horas":"Hits en los \xfaltimos minutos",A=0>=b?"":`
➪ *${P}* : _${b}_`,U=timeString(process.uptime()),x="‎".repeat(850);try{let M=await fetch("https://pastebin.com/raw/Bu8esjPA"),B=await u.profilePictureUrl(u.user.jid,"image").catch(e=>"./multimedia/imagenes/avatar_contact.png");var E,T=(await M.json()).nk_media||B}catch(q){var T=await u.profilePictureUrl(u.user.jid,"image").catch(e=>"./multimedia/imagenes/avatar_contact.png")}let H=`
*~》INFORMACI\xd3N《~*
${x}
┏─━─━━──━━─━─┓
➪ *Bot* : _(activo)_
➪ *Due\xf1o actual* : _${Propietario}_
➪ *Tiempo de ejecucion* : _${U}._
➪ *Apodo en Whatsapp* : _${u.user.name}._
➪ *Grupos con mayor actividad* : _${g.length}_
➪ *Grupos nuevos* : _${g.length}_
➪ *Grupos abandonados* : _${g.length-g.length}_
➪ *Chats personales* : _${h.length-g.length}_
➪ *Total de chats* : _${h.length}_ ${A}
➪ *Version del bot* : _${BotVersion}_
➪ *Wa-web Api* : _https://github.com/adiwajshing/Baileys_
➪ *Sc - Github* : _https://github.com/Ne-Kosmic/NK-BOT-MD_
➪ *Total de plugins* : _${Object.keys(t).length}_
➪ *Velocidad de procesamiento* : _${C} s..._
➪ *Velocidad de conexion* : _${_.toFixed(4)}ms..._
➪ *RAM:* _${format(i()-s())} Restantes De ${format(i())}_
➪ *Plataforma* : _${o()}_
➪ *Base OS* : _${n()}_
➪ *Arquitectura* : _${r()}_
➪ *Host* : _${v}_

➫ _Consum\xf3 de memoria :_
${"```"+Object.keys(f).map((e,t,a)=>`${e.padEnd(Math.max(...a.map(e=>e.length))," ")}: ${format(f[e])}`).join("\n")+"```"}
➫ ${$[0]?`_Uso total de CPU_
${$[0].model.trim()} (${y.speed} MHZ)
${Object.keys(y.times).map(e=>`- *${(e+"*").padEnd(6)}: ${(100*y.times[e]/y.total).toFixed(2)}%`).join("\n")}
_CPU Core(s) Usado (${$.length} Core CPU)_
${$.map((e,t)=>`${t+1}. ${e.model.trim()} (${e.speed} MHZ)
${Object.keys(e.times).map(t=>`- *${(t+"*").padEnd(6)}: ${(100*e.times[t]/e.total).toFixed(2)}%`).join("\n")}`).join("\n\n")}`:""}
┗─━─「 ✵ 」━─━─┛`.trim();try{let I=p(d.chat,{orderMessage:{orderId:"5352482274766633",thumbnail:await getBuffer(T),itemCount:-369,status:1,surface:1,message:H,orderTitle:NombreDelBot+` 🔥`,sellerJid:"51995386439@s.whatsapp.net",token:"1655878716",priceAmount:"666000",totalAmount1000:"9999999999",totalCurrencyCode:"PEN",contextInfo:null}},{quoted:d});await u.relayMessage(d.chat,I.message,{messageId:I.key.id}),reacMoji(d.chat,u,"\uD83E\uDD16",d)}catch(N){d.reply(H)}};handler.help=["informacion"],handler.tags=["casual"],handler.command=/^(informacion|infobot|ping|speed|info|alive|perfil)$/i;export default handler;
