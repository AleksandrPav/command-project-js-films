!function(){const e=document.querySelector(".movie-collection"),t=document.querySelector(".modal__card-overlay"),i=document.querySelector(".modal__card-content"),a=document.querySelector(".modal__close"),o=i.querySelector(".modal__info");function n(e){e.target===t&&(t.removeEventListener("click",n),t.classList.remove("modal__card-overlay--active"),i.classList.remove("modal__card--active"))}function s(e){e.target===a&&(a.removeEventListener("click",s),t.classList.remove("modal__card-overlay--active"),i.classList.remove("modal__card--active"))}function l(e){27===e.keyCode&&(window.removeEventListener("keydown",l),t.classList.remove("modal__card-overlay--active"),i.classList.remove("modal__card--active"))}e.addEventListener("click",(async function(c){if(c.preventDefault(),c.target!==e){const e=c.target.closest(".movies__item").dataset.id;i.setAttribute("data-id",e),o.innerHTML=await async function(e){return await fetch(`https://api.themoviedb.org/3//movie/${e}?api_key=7fea517bd5b294dd7a1b57e94e2c1c68&language=en-US`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>e))}(e).then((e=>{const{original_title:t,vote_average:i,vote_count:a,poster_path:o,popularity:n,genres:s,overview:l,id:c}=e;return`\n                <img src="https://image.tmdb.org/t/p/original${o}" alt="${t} " class="modal__img" />\n                <h2 class="modal__info-title">${t.toUpperCase()}</h2>\n                <ul class="discription__modal id=${c}">\n                  <li class="discription__modal-item">\n                    <p class="discription__modal-title">Vote / Votes</p>\n                    <p class="discription__modal-text"><span>${i}</span> / ${a}</p>\n                  </li>\n                  <li class="discription__modal-item">\n                    <p class="discription__modal-title">Popularity</p>\n                    <p class="discription__modal-text">${n.toFixed(1)}</p>\n                  </li>\n                  <li class="discription__modal-item">\n                    <p class="discription__modal-title">Original Title</p>\n                    <p class="discription__modal-text">${t.toUpperCase()}</p>\n                  </li>\n                  <li class="discription__modal-item">\n                    <p class="discription__modal-title">Genre</p>\n                    <p class="discription__modal-text">${function(e){return 0===e.length?"":e.length>2?`${e[0].name}, ${e[1].name}, Other`:`${[e.map((e=>e.name))].join(", ")}`}(s)}</p>\n                  </li>\n                </ul>\n\n                <h4 class="about__modal-title">About</h4>\n                <p class="about__modal-text">\n                  ${l}\n                </p>\n            `}))}t.classList.add("modal__card-overlay--active"),i.classList.add("modal__card--active"),a.addEventListener("click",s),t.addEventListener("click",n),window.addEventListener("keydown",l)}))}();
//# sourceMappingURL=index.6d940009.js.map
