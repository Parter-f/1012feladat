(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{document.getElementById("subButton").addEventListener("click",(()=>{let e,n=document.getElementById("username").value,t=document.getElementById("password").value;(n.includes("&")||n.includes("_")||n.includes("=")||"."==n[0]||n.length<6||n.length>30||n.includes(".")||n.includes(",")||n.includes("+"))&&(console.log("rósz név"),e=!0),(t.length>10||t.length<5)&&console.log("rósz jelszó")}))}))})();