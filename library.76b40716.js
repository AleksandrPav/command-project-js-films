!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a);var o=a("aRcm3");const l={watchedBtn:document.querySelector(".header_btn-watched"),queueBtn:document.querySelector(".header_btn-queue"),list:document.querySelector(".movie-collection"),addToWatchedBtn:document.querySelector(".modal__btn-add")};new(0,o.default);function i(){const e=JSON.parse(localStorage.getItem("watched"));if(e)!function(e){l.list.innerHTML=e.map((e=>{let t=JSON.parse(localStorage.getItem("genres")).map((e=>e.name));return t.length>2&&(t=[t[0],t[1],"Other"]),`<li class="movies__item" id="${e.id}" data-id=${e.id}>\n    <a href="" class="movies__link">\n        <img src='https://image.tmdb.org/t/p/original${e.poster_path}' class="movie__image" alt="Movie">\n        <div class="movie__text-part">\n            <h2 class="movie__title">${e.title}</h2>\n            <p class="movie__genre">${t.join(", ")} <span class="stick">|</span> \n                <span class="movie__year">${e.release_date.slice(0,4)}</span></p>\n        </div>\n    </a>\n</li>`})).join("");const t=document.querySelector(".placeholder");n="watched",localStorage.getItem(n)&&0!==JSON.parse(localStorage.getItem(n)).length?t.style.display="none":t.style.display="block";var n}(e);else{document.querySelector(".placeholder").style.display="block",l.list.innerHTML=""}}i(),l.watchedBtn.addEventListener("click",(function(){l.queueBtn.classList.remove("header-active-button"),l.watchedBtn.classList.add("header-active-button"),i()}));document.querySelector(".wached").addEventListener("click",(e=>{setTimeout((()=>i()),100)}))}();
//# sourceMappingURL=library.76b40716.js.map
