import{s as F,i as l,a as L}from"./assets/vendor-dbdbd0f5.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const $="/goit-js-hw-12/assets/bi_x-octagon-7962080a.svg",p=document.querySelector(".form"),m=document.querySelector(".form-input"),d=document.querySelector(".gallery"),r=document.querySelector(".load-btn"),s=document.createElement("div");s.classList.add("loader");let c=1,f=40;const w=Math.ceil(500/f);let g="";const x="41829663-a3becd9e4f80ae5dbcbf223ac",A=new F("li a",{captionsData:"alt",captionClass:"img-caption",captionDelay:250});p.addEventListener("submit",P);async function P(o){o.preventDefault(),r.style.display="none",c=1,d.innerHTML="",p.after(s),g=m.value;try{const i=await h();y(i)}catch(i){s.remove(),l.show({message:`${i}`,position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",iconUrl:"/img/bi_x-octagon.svg"}),m.value=""}r.addEventListener("click",S)}async function h(){return(await L.get("https://pixabay.com/api/",{params:{key:`${x}`,q:`${g}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:`${f}`,page:`${c}`}})).data}function y({hits:o}){o.length||l.show({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",iconUrl:$}),o.length&&(r.style.display="flex",r.after(s));const i=o.map(({webformatURL:u,largeImageURL:a,tags:e,likes:t,views:n,comments:b,downloads:v})=>`<li class="gallery-item">
              <a class="item-link" href="${a}">
                <img
                  src="${u}"
                  alt="${e}"
                  width="360"
                  height="200"
                />
              </a>
              <ul class="mini-list">
                <li class="mini-header">
                  <h3>Likes</h3>
                  <p>${t}</p>
                </li>
                <li class="mini-header">
                  <h3>Views</h3>
                  <p>${n}</p>
                </li>
                <li class="mini-header">
                  <h3>Comments</h3>
                  <p>${b}</p>
                </li>
                <li class="mini-header">
                  <h3>Downloads</h3>
                  <p>${v}</p>
                </li>
              </ul>
            </li>`).join("");s.remove(),d.insertAdjacentHTML("beforeend",i),m.value="",A.refresh()}async function S(){if(c>w)return r.style.display="none",l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});c++,r.after(s);try{const o=await h();y(o)}catch(o){s.remove(),l.show({message:`${o}`,position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",iconUrl:"/img/bi_x-octagon.svg"})}}
//# sourceMappingURL=commonHelpers.js.map
