import{s as F,i as c,a as L}from"./assets/vendor-dbdbd0f5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const w="/goit-js-hw-12/assets/bi_x-octagon-7962080a.svg",d=document.querySelector(".form"),a=document.querySelector(".form-input"),u=document.querySelector(".gallery"),l=document.querySelector(".load-btn"),r=document.createElement("div");r.classList.add("loader");let p=1;const $="41829663-a3becd9e4f80ae5dbcbf223ac",x=new F("li a",{captionsData:"alt",captionClass:"img-caption",captionDelay:250});d.addEventListener("submit",A);async function A(m){m.preventDefault(),u.innerHTML="",d.after(r);const o=a.value;try{const e=await n();i(e),l.style.display="flex"}catch(e){r.remove(),c.show({message:`${e}`,position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",iconUrl:"/img/bi_x-octagon.svg"}),a.value=""}async function n(){return(await L.get("https://pixabay.com/api/",{params:{key:`${$}`,q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:`${p}`}})).data}function i({hits:e}){e.length||c.show({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",iconUrl:w});const t=e.map(({webformatURL:s,largeImageURL:f,tags:g,likes:h,views:y,comments:b,downloads:v})=>`<li class="gallery-item">
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
            </li>`).join("");r.remove(),u.insertAdjacentHTML("beforeend",t),a.value="",x.refresh()}l.addEventListener("click",async()=>{try{p++;const e=await n();i(e),l.style.display="flex"}catch(e){r.remove(),c.show({message:`${e}`,position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",iconUrl:"/img/bi_x-octagon.svg"}),a.value=""}})}
//# sourceMappingURL=commonHelpers.js.map
