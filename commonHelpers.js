import{S as P,i as n,a as S}from"./assets/vendor-08b0e0f9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function p(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=p(e);fetch(e.href,t)}})();const m="/goit-js-hw-12/assets/bi_x-octagon-7962080a.svg",y=document.querySelector(".form"),c=document.querySelector(".form-input"),g=document.querySelector(".gallery"),i=document.querySelector(".load-btn"),s=document.createElement("div");s.classList.add("loader");let u=1,d=40,f,h="";const L="41829663-a3becd9e4f80ae5dbcbf223ac",O=new P("li a",{captionsData:"alt",captionClass:"img-caption",captionDelay:250});y.addEventListener("submit",A);i.addEventListener("click",C);async function A(o){if(o.preventDefault(),!c.value.trim())return c.value="",n.warning({message:"Input field is empty. Please provide a value.",position:"topRight"});try{i.style.display="none",u=1,g.innerHTML="",y.after(s),s.style.marginTop="300px",h=c.value;const r=await v();b(r),s.remove()}catch(r){s.remove(),n.show({message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${r.message}`,position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",iconUrl:m}),c.value=""}}async function v(){const o=await S.get("https://pixabay.com/api/",{params:{key:L,q:h,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:d,page:u}});return f=o.data.totalHits,o.data}function b({hits:o}){o.length||n.show({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",iconUrl:m}),o.length&&(i.style.display="flex",i.after(s),s.style.marginTop="0"),o.length<d&&o.length>=1&&(i.style.display="none",s.remove(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}));const r=o.map(({webformatURL:p,largeImageURL:a,tags:e,likes:t,views:l,comments:w,downloads:F})=>`<li class="gallery-item">
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
                  <p>${w}</p>
                </li>
                <li class="mini-header">
                  <h3>Downloads</h3>
                  <p>${F}</p>
                </li>
              </ul>
            </li>`).join("");s.remove(),g.insertAdjacentHTML("beforeend",r),c.value="",O.refresh()}async function C(){const o=Math.floor(f/d);i.after(s),i.style.display="none",u++;try{const r=await v();b(r);const a=document.querySelector(".gallery-item").getBoundingClientRect(),e=getComputedStyle(g),t=parseFloat(e.getPropertyValue("gap"));if(scrollBy({top:a.height*3+t*5,behavior:"smooth"}),u>o)return i.style.display="none",s.remove(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch(r){s.remove(),n.show({message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${r.message}`,position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",iconUrl:m})}}
//# sourceMappingURL=commonHelpers.js.map
