/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import{unlinkSync as e,readFileSync as a}from"fs";import{join as t}from"path";import{exec as r}from"child_process";import*as o from"fs";let handler=async(o,{conn:i,args:d,__dirname:l,command:n})=>{let s=await i.getName(o.sender);try{let m=o.quoted?o.quoted:o,p=(o.quoted?o.quoted:o.msg).mimetype||"",v;if(/acelerarvid/.test(n)&&(v=['-filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]"']),/lentovid/.test(n)&&(v=['-filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]"']),/reversavid/.test(n)&&(v=["-vf reverse -af areverse"]),!/video/.test(p))return o.reply(`Envie \xf3 Responda un v\xeddeo, con el comando 

${Prefijo+n}
`);{let c=getRandom(".mp4"),f=t(l,"../tmp/"+c),h=await m.download(!0);r(`ffmpeg -i ${h} ${v[0]} ${f}`,async(t,r,d)=>{if(await e(h),t)return o.reply(MultiNK.Error1());await i.sendMessage(o.chat,{video:await a(f),caption:`📌 ${n} 
👤 By ${s||NombreDelBot}`})}),reacMoji(o.chat,i,"⚙️",o)}}catch($){throw $}};handler.help=["acelerarvid","lentovid","reversavid"],handler.tags=["conversor"],handler.command=/^(acelerarvid|lentovid|reversavid)$/i,handler.limit=!0;export default handler;
