!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var a,o,s,i,c=r("7pbsT"),u=r("4tSb9"),l=r("80lIJ"),d=(c=r("7pbsT"),u=r("4tSb9"),r("dIxxU")),f=document.querySelector(".loader"),p="b942b8bf626a04f48b07153a95ee51a0",g=(a=(0,c.default)((function(){var e,t,n,r,a=arguments;return(0,u.__generator)(this,(function(o){switch(o.label){case 0:e=a.length>0&&void 0!==a[0]?a[0]:"https://api.themoviedb.org/3/movie/popular",t=a.length>1&&void 0!==a[1]?a[1]:1,f.style.display="block",o.label=1;case 1:return o.trys.push([1,3,,4]),[4,d.default.get(e,{params:{api_key:"".concat(p),page:t,language:"en-US"}})];case 2:return n=o.sent(),f.style.display="none",[2,n];case 3:return r=o.sent(),f.style.display="none",console.log(r),[3,4];case 4:return[2]}}))})),function(){return a.apply(this,arguments)}),m=r("e4Itz"),v="",h=function(e){var t=S();return function(e,t){v="",e.map((function(n){t.map((function(t){t.id===n&&(n!=e[e.length-1]?v=v+t.name+", ":v+=t.name)}))}))}(e.genre_ids,t.data.genres),'\n<div class="movie-card">\n<img class="movie-card__image" alt="'.concat(e.title,' movie" src=').concat((0,m.imageExists)("https://image.tmdb.org/t/p/w500",e.poster_path),'>\n  <div class="movie-card__label">\n    <p class="movie-card__title">').concat(e.title,'</p>\n    <p class="movie-card__genre-year">').concat(v," | ").concat((0,m.getMovieYear)(e.release_date),'</p> \n    <p class="movie-card__id">').concat(e.id,"</p> \n  </div>\n</div>\n")},b=r("jcFG7"),_=r("dEmTs"),y=document.querySelector(".main-box"),L=1,T=function(){var e=(0,c.default)((function(e){var t,n,r,a=arguments;return(0,u.__generator)(this,(function(d){switch(d.label){case 0:t=a.length>1&&void 0!==a[1]?a[1]:1,d.label=1;case 1:return d.trys.push([1,4,,5]),[4,g(e,L=t)];case 2:return n=d.sent(),[4,(0,l.getGenresList)()];case 3:return i=d.sent(),y.innerHTML="",n.data.results.map((function(e){y.insertAdjacentHTML("beforeend",h(e))})),n.data.total_pages<500?b.getPaginationNumbers(n.data.total_pages):b.getPaginationNumbers(500),b.setCurrentPage(L),s=(0,c.default)((function(){return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return b.setCurrentPage(L-1),[4,g(e,--L)];case 1:return n=t.sent(),y.innerHTML="",n.data.results.map((function(e){y.insertAdjacentHTML("beforeend",h(e))})),(0,_.onTopScroll)(),[2]}}))})),b.prevButton.addEventListener("click",s),o=(0,c.default)((function(){return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return b.setCurrentPage(L+1),[4,g(e,++L)];case 1:return n=t.sent(),y.innerHTML="",n.data.results.map((function(e){y.insertAdjacentHTML("beforeend",h(e))})),(0,_.onTopScroll)(),[2]}}))})),b.nextButton.addEventListener("click",o),document.querySelectorAll(".pagination__number").forEach((function(t){var r=Number(t.getAttribute("page-index"));r&&t.addEventListener("click",(0,c.default)((function(){return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return b.setCurrentPage(r),[4,g(e,L=r)];case 1:return n=t.sent(),y.innerHTML="",n.data.results.map((function(e){y.insertAdjacentHTML("beforeend",h(e))})),(0,_.onTopScroll)(),[2]}}))})))})),[3,5];case 4:return r=d.sent(),console.log("err ",r),[3,5];case 5:return[2]}}))}));return function(t){return e.apply(this,arguments)}}(),E=function(){b.nextButton.removeEventListener("click",o),b.prevButton.removeEventListener("click",s)},S=function(){return i},k=(l=r("80lIJ"),document.querySelector(".genres-menu__select")),w=document.querySelector(".genres-menu__clear"),M="https://api.themoviedb.org/3/movie/popular",x=[],H=1;w.addEventListener("click",(function(e){x.forEach((function(e){return document.getElementById(e).classList.remove("focused-genre")})),x=[],M="https://api.themoviedb.org/3/movie/popular",E(),T(M)})),(0,l.getGenresList)().then((function(e){for(var t=function(t){var n=document.createElement("button");n.classList.add("genre"),n.id=e.data.genres[t].id,n.innerText=e.data.genres[t].name,n.addEventListener("click",(function(){n.classList.add("focused-genre"),0===x?x.push(e.data.genres[t].id):x.includes(e.data.genres[t].id)?x.forEach((function(r,a){r==e.data.genres[t].id&&(x.splice(a,1),n.classList.remove("focused-genre"))})):x.push(e.data.genres[t].id),x!==[]?(H=1,M="https://api.themoviedb.org/3/discover/movie?&with_genres="+encodeURI(x.join(","))):M="https://api.themoviedb.org/3/movie/popular",E(),T(M,H)})),k.append(n)},n=0;n<e.data.genres.length;n++)t(n)})),r("5PK8J"),r("5h39L");c=r("7pbsT"),u=r("4tSb9"),c=r("7pbsT"),u=r("4tSb9"),d=r("dIxxU");var q="b942b8bf626a04f48b07153a95ee51a0",P="https://api.themoviedb.org/3/search/movie",A=document.querySelector(".loader");function j(e){return N.apply(this,arguments)}function N(){return N=(0,c.default)((function(e){var t,n,r,a=arguments;return(0,u.__generator)(this,(function(o){switch(o.label){case 0:t=a.length>1&&void 0!==a[1]?a[1]:1,A.style.display="block",o.label=1;case 1:return o.trys.push([1,3,,4]),[4,d.default.get(P,{params:{api_key:"".concat(q),query:"".concat(e),page:t}})];case 2:return n=o.sent(),A.style.display="none",[2,n.data];case 3:return r=o.sent(),A.style.display="none",console.error(r),[3,4];case 4:return[2]}}))})),N.apply(this,arguments)}var C=r("iU1Pc"),B=(b=r("jcFG7"),_=r("dEmTs"),document.querySelector(".header__no-movies")),I=document.querySelector(".main-box"),U=document.querySelector("input[name='searchQuery']"),G=document.querySelector(".header__search-form-btn"),D=1;function F(){return(F=(0,c.default)((function(e){var t,n;return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return e.preventDefault(),B.innerHTML="",D=1,(t=U.value)?[3,1]:(C.Notify.info("Enter movie title"),[3,3]);case 1:return[4,j(t,D)];case 2:(n=r.sent()).results.length?(I.innerHTML="",n.results.map((function(e){I.insertAdjacentHTML("beforeend",h(e))})),n.total_pages<500?b.getPaginationNumbers(n.total_pages):b.getPaginationNumbers(500),b.setCurrentPage(D),b.prevButton.addEventListener("click",(0,c.default)((function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return b.setCurrentPage(D-1),[4,j(t,--D)];case 1:return n=e.sent(),I.innerHTML="",console.log(n),n.results.map((function(e){I.insertAdjacentHTML("beforeend",h(e))})),(0,_.onTopScroll)(),[2]}}))}))),b.nextButton.addEventListener("click",(0,c.default)((function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return b.setCurrentPage(D+1),[4,j(t,++D)];case 1:return n=e.sent(),I.innerHTML="",console.log(n),n.results.map((function(e){I.insertAdjacentHTML("beforeend",h(e))})),(0,_.onTopScroll)(),[2]}}))}))),document.querySelectorAll(".pagination__number").forEach((function(e){var r=Number(e.getAttribute("page-index"));r&&e.addEventListener("click",(0,c.default)((function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return b.setCurrentPage(r),[4,j(t,D=r)];case 1:return n=e.sent(),I.innerHTML="",console.log(n),n.results.map((function(e){I.insertAdjacentHTML("beforeend",h(e))})),(0,_.onTopScroll)(),[2]}}))})))}))):B.innerHTML="Search result not successful. Enter the correct movie name.",r.label=3;case 3:return[2]}}))}))).apply(this,arguments)}G.addEventListener("click",(function(e){return F.apply(this,arguments)})),r("dEmTs");var J=document.querySelector(".footer__authors"),O=document.querySelector(".students-modal__close-btn"),R=document.querySelector(".data-modal"),z=function(){R.classList.add("is-hidden"),removeEventListener("keydown",K),removeEventListener("click",Q)},K=function(e){27===e.keyCode&&z()},Q=function(e){e.target.classList.contains("is-hidden")||e.target.closest(".students-modal")||"footer__authors"===e.target.className||z()};J.addEventListener("click",(function(){R.classList.remove("is-hidden"),addEventListener("keydown",K),addEventListener("click",Q)})),O.addEventListener("click",z),r("iNWLi"),T()}();
//# sourceMappingURL=index.c18a1309.js.map
