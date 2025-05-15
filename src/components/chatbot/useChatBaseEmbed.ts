import { useEffect } from "react";
const EMBED_SCRIPT_ID = "D8q3wUqW_4sXXNGUdYA3E";

export function useChatbaseEmbed(isOpen: boolean) {
  useEffect(() => {
    if (!isOpen) return;

    // Hapus script & embed lama jika ada
    const oldScript = document.getElementById("chatbase-loader");
    if (oldScript) oldScript.remove();
    const oldEmbed = document.getElementById(EMBED_SCRIPT_ID);
    if (oldEmbed) oldEmbed.remove();

    // Inject embed script
    const script = document.createElement("script");
    script.innerHTML = `
      (function(){
        if(!window.chatbase||window.chatbase("getState")!=="initialized"){
          window.chatbase=(...arguments)=>{
            if(!window.chatbase.q){window.chatbase.q=[]}
            window.chatbase.q.push(arguments)
          };
          window.chatbase=new Proxy(window.chatbase,{
            get(target,prop){
              if(prop==="q"){return target.q}
              return(...args)=>target(prop,...args)
            }
          })
        }
        const onLoad=function(){
          const script=document.createElement("script");
          script.src="https://www.chatbase.co/embed.min.js";
          script.id="${EMBED_SCRIPT_ID}";
          script.domain="www.chatbase.co";
          document.body.appendChild(script);
          script.onload = function() {
            setTimeout(function() {
              var embed = document.getElementById("${EMBED_SCRIPT_ID}");
              var container = document.getElementById("chatbase-embed");
              if (embed && container && !container.contains(embed)) {
                container.appendChild(embed);
                embed.style.position = "absolute";
                embed.style.inset = "0";
                embed.style.width = "100%";
                embed.style.height = "100%";
                embed.style.minHeight = "100%";
                embed.style.minWidth = "100%";
                embed.style.border = "none";
                embed.style.background = "transparent";
                embed.style.boxShadow = "none";
                embed.style.right = "unset";
                embed.style.bottom = "unset";
                embed.style.left = "unset";
                embed.style.top = "unset";
                console.log("Embed dipindahkan ke dalam container!");
              } else {
                console.log("Embed/container tidak ditemukan", embed, container);
              }
            }, 500);
          }
        };
        if(document.readyState==="complete"){onLoad()}
        else{window.addEventListener("load",onLoad)}
      })();
    `;
    script.id = "chatbase-loader";
    document.body.appendChild(script);

    return () => {
      const loader = document.getElementById("chatbase-loader");
      if (loader) loader.remove();
      const embed = document.getElementById(EMBED_SCRIPT_ID);
      if (embed) embed.remove();
    };
  }, [isOpen]);
}