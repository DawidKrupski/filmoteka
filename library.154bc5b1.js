!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a),a("80lIJ"),a("5PK8J");var r=a("7pbsT"),o=a("4tSb9"),l=a("dIxxU"),c=a("e4Itz"),s=document.querySelector(".loader"),i=document.querySelector(".watched-list-btn"),d=document.querySelector(".queue-list-btn"),u=document.querySelector(".main-box"),p=document.querySelector(".queue-btn"),b=document.querySelector(".watched-btn");i.style.backgroundColor=" #ff6b01";var f,g=(f=(0,r.default)((function(e){var t,n,a;return(0,o.__generator)(this,(function(r){switch(r.label){case 0:s.style.display="block",r.label=1;case 1:return r.trys.push([1,3,,4]),t="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat("b942b8bf626a04f48b07153a95ee51a0","&language=en-US"),[4,l.default.get(t)];case 2:return n=r.sent(),s.style.display="none",[2,n.data];case 3:return a=r.sent(),s.style.display="none",console.error(a),[3,4];case 4:return[2]}}))})),function(e){return f.apply(this,arguments)}),v=[];function m(){return h.apply(this,arguments)}function h(){return(h=(0,r.default)((function(){var e,t,n,a,r;return(0,o.__generator)(this,(function(o){switch(o.label){case 0:return d.removeAttribute("disabled"),d.textContent="QUEUE",u.innerHTML="",d.style.backgroundColor=" transparent",i.style.backgroundColor=" #ff6b01",e=JSON.parse(localStorage.getItem("added-to-watched")).length,0!==JSON.parse(localStorage.getItem("added-to-watched")).length?[3,1]:(u.insertAdjacentHTML("beforeend",'<p class="alert">There are no movies in your watched list!</p>'),s.style.display="none",[3,6]);case 1:v=JSON.parse(localStorage.getItem("added-to-watched")),t=[],n=0,o.label=2;case 2:return n<v.length?(a=v[n],[4,g(a)]):[3,5];case 3:r=o.sent(),t.push(r),o.label=4;case 4:return n++,[3,2];case 5:S(t),i.textContent="WATCHED : ".concat(e),o.label=6;case 6:return i.setAttribute("disabled",!0),[2]}}))}))).apply(this,arguments)}m(),i.addEventListener("click",(function(e){e.preventDefault(),m()}));var y=[];function _(){return(_=(0,r.default)((function(){var e,t,n,a,r;return(0,o.__generator)(this,(function(o){switch(o.label){case 0:return i.removeAttribute("disabled"),i.textContent="WATCHED",u.innerHTML="",i.style.backgroundColor="transparent",d.style.backgroundColor=" #ff6b01",e=JSON.parse(localStorage.getItem("added-to-queue")).length,0!==JSON.parse(localStorage.getItem("added-to-queue")).length?[3,1]:(u.insertAdjacentHTML("beforeend",'<p class="alert">There are no movies in your queue!</p>'),s.style.display="none",[3,6]);case 1:y=JSON.parse(localStorage.getItem("added-to-queue")),t=[],n=0,o.label=2;case 2:return n<y.length?(a=y[n],[4,g(a)]):[3,5];case 3:r=o.sent(),t.push(r),o.label=4;case 4:return n++,[3,2];case 5:S(t),d.textContent="QUEUE : ".concat(e),o.label=6;case 6:return d.setAttribute("disabled",!0),[2]}}))}))).apply(this,arguments)}function S(e){var t=e.map((function(e){return'\n<div class="movie-card">\n  <img class="movie-card__image" alt="'.concat(e.title,' movie"src=').concat((0,c.imageExists)("https://image.tmdb.org/t/p/w500",e.poster_path),'>\n  <div class="movie-card__label">\n    <p class="movie-card__title">').concat(e.original_title,'</p>\n    <div>\n    <span class="movie-card__genre-year"> ').concat((t=e.genres,n="",t.map((function(e){e!=t[t.length-1]?n=n+e.name+", ":n+=e.name})),n),"  | ").concat((0,c.getMovieYear)(e.release_date),'</span> \n    <span class="movie-card__vote">').concat(e.vote_average.toFixed(1),'</span>\n    \n    </div>\n    <p class="movie-card__id">').concat(e.id,"</p> \n  </div>\n</div>\n");var t,n})).join("");u.innerHTML+=t}d.addEventListener("click",(function(e){e.preventDefault(),function(){_.apply(this,arguments)}()}));p.addEventListener("click",(function(e){"transparent"!==d.style.backgroundColor&&(d.removeAttribute("disabled"),d.click())})),b.addEventListener("click",(function(e){"transparent"!==i.style.backgroundColor&&(i.removeAttribute("disabled"),i.click())})),a("5h39L"),a("iNWLi"),a("dEmTs")}();
//# sourceMappingURL=library.154bc5b1.js.map
