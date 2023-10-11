let e;const t=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]"),a=document.body;t.addEventListener("click",()=>{t.disabled=!0,d.disabled=!1,e=setInterval(()=>{let e=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`;a.style.backgroundColor=e},1e3)}),d.addEventListener("click",()=>{t.disabled=!1,d.disabled=!0,clearInterval(e)});//# sourceMappingURL=01-color-switcher.5ce97ce5.js.map

//# sourceMappingURL=01-color-switcher.5ce97ce5.js.map
