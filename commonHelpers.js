import{s as b,i as c}from"./assets/vendor-87ec4f81.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const v="/goit-js-hw-12/assets/bi_x-octagon-7962080a.svg",u=document.querySelector(".form"),a=document.querySelector(".form-input"),m=document.querySelector(".gallery"),s=document.createElement("div");s.classList.add("loader");const L=new b("li a",{captionsData:"alt",captionClass:"img-caption",captionDelay:250});u.addEventListener("submit",w);function w(l){l.preventDefault(),m.innerHTML="",u.after(s);const o=a.value,n="41829663-a3becd9e4f80ae5dbcbf223ac",r=new URLSearchParams({key:`${n}`,q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:30});fetch(`https://pixabay.com/api/?${r}`).then(e=>{if(e.ok)return e.json();throw new Error(e.status)}).then(({hits:e})=>{e.length||c.show({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",iconUrl:v});const t=e.map(({webformatURL:i,largeImageURL:h,tags:d,likes:f,views:p,comments:g,downloads:y})=>`<li class="gallery-item">
              <a class="item-link" href="${h}">
                <img
                  src="${i}"
                  alt="${d}"
                  width="360"
                  height="200"
                />
              </a>
              <ul class="mini-list">
                <li class="mini-header">
                  <h3>Likes</h3>
                  <p>${f}</p>
                </li>
                <li class="mini-header">
                  <h3>Views</h3>
                  <p>${p}</p>
                </li>
                <li class="mini-header">
                  <h3>Comments</h3>
                  <p>${g}</p>
                </li>
                <li class="mini-header">
                  <h3>Downloads</h3>
                  <p>${y}</p>
                </li>
              </ul>
            </li>`).join("");s.remove(),m.insertAdjacentHTML("beforeend",t),a.value="",L.refresh()}).catch(e=>{s.remove(),c.show({message:`${e}`,position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",iconUrl:"/img/bi_x-octagon.svg"}),a.value=""})}
//# sourceMappingURL=commonHelpers.js.map
