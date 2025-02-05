(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const n=[{Image:"/assets/obsidian-essentials.png",Title:"Obsidian Essentials",Description:"Obsidian Essential, the ultimate add-on for enhancing your Minecraft Bedrock experience! Enjoy features like announcements, custom warps, instant TPA, and powerful admin tools. Streamline your realm management and elevate gameplay with Obsidian Essential—your world, your way!",Tags:["Minecraft","Essentials","Add-On"],HomePageView:!0,projectSlug:"realm-essentials",MCPEDLLINK:"https://mcpedl.com/realm-essentials/",DOWNLOADLINK:"https://www.mediafire.com/folder/jtlpl10wk86py/Obsidian_Essentials"},{Image:"/assets/livesplus.png",Title:"Lives+",Description:"Lives+ introduces a customizable lives and revival system to your Minecraft world. Players start with a set number of lives and, once exhausted, are moved to spectator mode until they are revived. With this add-on, you can create your own 3rd Life",Tags:["Survival","Third Life","Roleplay"],HomePageView:!0,projectSlug:"lives-plus",MCPEDLLINK:"https://mcpedl.com/lives/",DOWNLOADLINK:"https://www.mediafire.com/folder/hu5pkbzbc68ue/Lives%2B"}],l=document.querySelector("#projects-container");n.forEach(s=>{const r=document.createElement("div");r.classList.add("bg-gray-800","rounded-lg","shadow-lg","overflow-hidden","transform","transition-transform","duration-300","hover:scale-105","max-w-xs","w-full"),r.innerHTML=`
    <img src="${s.Image}" alt="${s.Title}" class="w-full h-48 object-cover">
    <div class="p-6">
      <h3 class="text-xl font-semibold text-gray-100">${s.Title}</h3>
      <p class="mt-2 text-gray-400">${s.Description}</p>
      <div class="mt-4 flex flex-wrap gap-2">
        ${s.Tags.map(i=>`<span class="inline-block bg-gray-600 text-sm text-gray-100 px-3 py-1 rounded-full">${i}</span>`).join("")}
      </div>

      <!-- Bug Report Button -->
      <div class="mt-4">
        <a href="/bug-report?projectname=${encodeURIComponent(s.Title)}" class="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-200">
          Report a Bug
        </a>
      </div>

      <div class="mt-4 flex justify-between gap-4">
        <a href="${s.DOWNLOADLINK}" class="bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
          Download
        </a>
        <a href="${s.MCPEDLLINK}" class="bg-green-600 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200">
          MCPEDL
        </a>
      </div>
    </div>
  `,l.appendChild(r)});
