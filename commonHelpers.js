import{s as w,i as c,a as F}from"./assets/vendor-dbdbd0f5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const L="/goit-js-hw-12/assets/bi_x-octagon-7962080a.svg",g=document.querySelector(".form"),p=document.querySelector(".form-input"),u=document.querySelector(".gallery"),i=document.querySelector(".load-btn"),r=document.createElement("div");r.classList.add("loader");let m=1,d=40;const S=Math.ceil(500/d);let y="";const $="41829663-a3becd9e4f80ae5dbcbf223ac",P=new w("li a",{captionsData:"alt",captionClass:"img-caption",captionDelay:250});g.addEventListener("submit",x);async function x(o){o.preventDefault(),i.style.display="none",m=1,u.innerHTML="",g.after(r),y=p.value;try{const s=await h();f(s)}catch(s){r.remove(),c.show({message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${s.message}`,position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",iconUrl:"/img/bi_x-octagon.svg"}),p.value=""}i.addEventListener("click",A)}async function h(){return(await F.get("https://pixabay.com/api/",{params:{key:`${$}`,q:`${y}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:`${d}`,page:`${m}`}})).data}function f({hits:o}){o.length||c.show({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",iconUrl:L}),o.length&&(i.style.display="flex",i.after(r),r.style.marginTop="0");const s=o.map(({webformatURL:n,largeImageURL:a,tags:e,likes:t,views:l,comments:b,downloads:v})=>`<li class="gallery-item">
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
                  <p>${t}</p>
                </li>
                <li class="mini-header">
                  <h3>Views</h3>
                  <p>${l}</p>
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
            </li>`).join("");r.remove(),u.insertAdjacentHTML("beforeend",s),p.value="",P.refresh()}async function A(){m++,i.after(r),i.style.display="none";try{const o=await h();f(o);const n=document.querySelector(".gallery-item").getBoundingClientRect(),a=getComputedStyle(u),e=parseFloat(a.getPropertyValue("gap"));scrollBy({top:n.height*3+e*5,behavior:"smooth"})}catch(o){r.remove(),c.show({message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${o.message}`,position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",iconUrl:"/img/bi_x-octagon.svg"})}if(m>S)return i.style.display="none",c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map
