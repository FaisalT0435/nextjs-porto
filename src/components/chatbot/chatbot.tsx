"use client";

import { useEffect } from "react";

const EMBED_SCRIPT_ID = "D8q3wUqW_4sXXNGUdYA3E";

const Chatbot: React.FC = () => {
  useEffect(() => {
    // Hapus script & embed lama jika ada
    const oldScript = document.getElementById("chatbase-loader");
    if (oldScript) oldScript.remove();
    const oldEmbed = document.getElementById(EMBED_SCRIPT_ID);
    if (oldEmbed) oldEmbed.remove();

    // Inject embed script
    const script = document.createElement("script");
    script.id = "chatbase-loader";
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
              if (embed) {
                embed.style.left = "100px";
                embed.style.right = "unset";
                embed.style.bottom = "20px";
                embed.style.position = "fixed";
              }
            }, 500);
          }
        };
        if(document.readyState==="complete"){onLoad()}
        else{window.addEventListener("load",onLoad)}
      })();
    `;
    document.body.appendChild(script);

    return () => {
      const loader = document.getElementById("chatbase-loader");
      if (loader) loader.remove();
      const embed = document.getElementById(EMBED_SCRIPT_ID);
      if (embed) embed.remove();
    };
  }, []);

  return null;
};

export default Chatbot;