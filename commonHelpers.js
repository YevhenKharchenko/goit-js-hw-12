import{S as F,i as n,a as S}from"./assets/vendor-89feecc5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function p(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=p(e);fetch(e.href,t)}})();const L="/goit-js-hw-12/assets/bi_x-octagon-7962080a.svg",d=document.querySelector(".form"),c=document.querySelector(".form-input"),u=document.querySelector(".gallery"),i=document.querySelector(".load-btn"),s=document.createElement("div");s.classList.add("loader");let m=1,g=40,y,f="";const P="41829663-a3becd9e4f80ae5dbcbf223ac",x=new F("li a",{captionsData:"alt",captionClass:"img-caption",captionDelay:250});d.addEventListener("submit",A);i.addEventListener("click",C);async function A(o){if(o.preventDefault(),!c.value.trim())return c.value="",n.warning({message:"Input field is empty. Please provide a value.",position:"topRight"});try{i.style.display="none",m=1,u.innerHTML="",d.after(s),s.style.marginTop="300px",f=c.value;const r=await h();v(r),s.remove()}catch(r){s.remove(),n.show({message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${r.message}`,position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",iconUrl:"/img/bi_x-octagon.svg"}),c.value=""}}async function h(){const o=await S.get("https://pixabay.com/api/",{params:{key:P,q:f,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:g,page:m}});return y=o.data.totalHits,o.data}function v({hits:o}){o.length||n.show({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",iconUrl:L}),o.length&&(i.style.display="flex",i.after(s),s.style.marginTop="0"),o.length<g&&o.length>=1&&(i.style.display="none",s.remove(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}));const r=o.map(({webformatURL:p,largeImageURL:a,tags:e,likes:t,views:l,comments:b,downloads:w})=>`<li class="gallery-item">
              <a class="item-link" href="${a}">
                <img
                  src="${p}"
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
                  <p>${w}</p>
                </li>
              </ul>
            </li>`).join("");s.remove(),u.insertAdjacentHTML("beforeend",r),c.value="",x.refresh()}async function C(){const o=Math.floor(y/g);i.after(s),i.style.display="none",m++;try{const r=await h();v(r);const a=document.querySelector(".gallery-item").getBoundingClientRect(),e=getComputedStyle(u),t=parseFloat(e.getPropertyValue("gap"));if(scrollBy({top:a.height*3+t*5,behavior:"smooth"}),m>o)return i.style.display="none",s.remove(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch(r){s.remove(),n.show({message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${r.message}`,position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",iconUrl:"/img/bi_x-octagon.svg"})}}
//# sourceMappingURL=commonHelpers.js.map
