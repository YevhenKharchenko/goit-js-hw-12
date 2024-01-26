import{s as w,i as c,a as F}from"./assets/vendor-dbdbd0f5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const L="/goit-js-hw-12/assets/bi_x-octagon-7962080a.svg",d=document.querySelector(".form"),p=document.querySelector(".form-input"),g=document.querySelector(".gallery"),i=document.querySelector(".load-btn"),r=document.createElement("div");r.classList.add("loader");let m=1,u=40;const S=Math.floor(500/u);let y="";const $="41829663-a3becd9e4f80ae5dbcbf223ac",P=new w("li a",{captionsData:"alt",captionClass:"img-caption",captionDelay:250});d.addEventListener("submit",x);i.addEventListener("click",A);async function x(t){t.preventDefault();try{i.style.display="none",m=1,g.innerHTML="",d.after(r),r.style.marginTop="300px",y=p.value;const s=await h();f(s),r.remove()}catch(s){r.remove(),c.show({message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${s.message}`,position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",iconUrl:"/img/bi_x-octagon.svg"}),p.value=""}}async function h(){return(await F.get("https://pixabay.com/api/",{params:{key:`${$}`,q:`${y}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:`${u}`,page:`${m}`}})).data}function f({hits:t}){t.length||c.show({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",iconUrl:L}),t.length&&(i.style.display="flex",i.after(r),r.style.marginTop="0"),t.length<u&&t.length>=1&&(i.style.display="none",r.remove(),c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}));const s=t.map(({webformatURL:n,largeImageURL:a,tags:e,likes:o,views:l,comments:v,downloads:b})=>`<li class="gallery-item">
              <a class="item-link" href="${a}">
                <img
                  src="${n}"
                  alt="${e}"
                  width="360"
                  height="200"
                />
              </a>
              <ul class="mini-list">
                <li class="mini-header">
                  <h3>Likes</h3>
                  <p>${o}</p>
                </li>
                <li class="mini-header">
                  <h3>Views</h3>
                  <p>${l}</p>
                </li>
                <li class="mini-header">
                  <h3>Comments</h3>
                  <p>${v}</p>
                </li>
                <li class="mini-header">
                  <h3>Downloads</h3>
                  <p>${b}</p>
                </li>
              </ul>
            </li>`).join("");r.remove(),g.insertAdjacentHTML("beforeend",s),p.value="",P.refresh()}async function A(){m++,i.after(r),i.style.display="none";try{const t=await h();f(t);const n=document.querySelector(".gallery-item").getBoundingClientRect(),a=getComputedStyle(g),e=parseFloat(a.getPropertyValue("gap"));if(scrollBy({top:n.height*3+e*5,behavior:"smooth"}),m>S)return i.style.display="none",r.remove(),c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch(t){r.remove(),c.show({message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${t.message}`,position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",iconUrl:"/img/bi_x-octagon.svg"})}}
//# sourceMappingURL=commonHelpers.js.map
