import{s as F,i as m,a as L}from"./assets/vendor-dbdbd0f5.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const w="/goit-js-hw-12/assets/bi_x-octagon-7962080a.svg",d=document.querySelector(".form"),l=document.querySelector(".form-input"),p=document.querySelector(".gallery"),n=document.querySelector(".load-btn"),t=document.createElement("div");t.classList.add("loader");let c=1;const $="41829663-a3becd9e4f80ae5dbcbf223ac",x=new F("li a",{captionsData:"alt",captionClass:"img-caption",captionDelay:250});d.addEventListener("submit",A);async function A(u){u.preventDefault(),n.style.display="none",c=1,p.innerHTML="",d.after(t);let i=l.value;try{const e=await a();r(e)}catch(e){t.remove(),m.show({message:`${e}`,position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",iconUrl:"/img/bi_x-octagon.svg"}),l.value=""}async function a(){return(await L.get("https://pixabay.com/api/",{params:{key:`${$}`,q:`${i}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:`${c}`}})).data}function r({hits:e}){e.length||m.show({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",iconUrl:w}),e.length&&(n.style.display="flex",n.after(t));const o=e.map(({webformatURL:s,largeImageURL:f,tags:g,likes:h,views:y,comments:b,downloads:v})=>`<li class="gallery-item">
              <a class="item-link" href="${f}">
                <img
                  src="${s}"
                  alt="${g}"
                  width="360"
                  height="200"
                />
              </a>
              <ul class="mini-list">
                <li class="mini-header">
                  <h3>Likes</h3>
                  <p>${h}</p>
                </li>
                <li class="mini-header">
                  <h3>Views</h3>
                  <p>${y}</p>
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
            </li>`).join("");t.remove(),p.insertAdjacentHTML("beforeend",o),l.value="",x.refresh()}n.addEventListener("click",async()=>{c++,n.after(t),console.log(i),console.log(c);try{const e=await a();r(e)}catch(e){t.remove(),m.show({message:`${e}`,position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",iconUrl:"/img/bi_x-octagon.svg"}),l.value=""}})}
//# sourceMappingURL=commonHelpers.js.map
