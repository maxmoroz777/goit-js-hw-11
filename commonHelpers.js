import{S as f,i as m}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function d(o){return o.map(({webformatURL:t,largeImageURL:i,tags:s,likes:e,views:r,comments:n,downloads:u})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${i}">
          <img class="gallery-image" src="${t}" alt="${s}" width="360" height="152"/>
        </a>
        <div>
          <ul class="info-list">
       		  <li>Likes<span>${e}</span></li>
					  <li>Views<span>${r}</span></li>
						<li>Comments<span>${n}</span></li>
						<li>Downloads<span>${u}</span></li>
          </ul>
        </div>
      </li>
    `).join("")}const l={key:"45047588-af4c5471e93ba8198453341cf",q:"",imageType:"photo",orientation:"horizontal",safesearch:!0};function h(o){return l.q=o,`https://pixabay.com/api/?${new URLSearchParams(l).toString()}`}function p(o){return fetch(o).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const y=new f(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"}),a={searchForm:document.querySelector(".js-search-form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader")};a.searchForm.addEventListener("submit",g);function g(o){o.preventDefault();const i=o.currentTarget.elements.searchtext.value.toLowerCase().trim();a.gallery.innerHTML="",a.loader.classList.add("loader"),p(h(i)).then(s=>{a.loader.classList.remove("loader");const e=s.hits;e.length===0&&c(),a.gallery.insertAdjacentHTML("beforeend",d(e)),y.refresh()}).catch(c).finally(a.searchForm.reset())}function c(o){m.error({message:"Sorry, there are no images matching your search query. Please try again!"})}
//# sourceMappingURL=commonHelpers.js.map
