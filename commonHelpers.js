import{S as c,i as a}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const l="44094007-67477d06fc63ea0136e02e71a",u="https://pixabay.com/api/";function f(s){const t=`${u}?key=${l}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(t).then(o=>o.json())}function p(s){const t=document.querySelector(".galleriesBox"),o=s.map(e=>`
      <a class="gallery-item" href="${e.largeImageURL}">
        <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
        <div class="info">
          <p class="info-item"><span>Likes:</span> ${e.likes}</p>
          <p class="info-item"><span>Views:</span> ${e.views}</p>
          <p class="info-item"><span>Comments:</span> ${e.comments}</p>
          <p class="info-item"><span>Downloads:</span> ${e.downloads}</p>
        </div>
      </a>`).join("");t.innerHTML=o,new c(".gallery-item").refresh()}function d(){const s=document.querySelector(".galleriesBox");s.innerHTML=""}const m=document.querySelector(".search-form"),y=document.querySelector(".search-data");document.querySelector(".galleriesBox");m.addEventListener("submit",h);function h(s){s.preventDefault();const t=y.value.trim();if(!t){a.error({title:"Error",message:"Please, enter a search query"});return}d(),g(),f(t).then(o=>{o.hits.length===0?a.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again."}):p(o.hits)}).catch(o=>{a.error({position:"topRight",message:"Error"})}).finally(()=>{L()})}function g(){document.querySelector(".loader").style.display="block"}function L(){document.querySelector(".loader").style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
