!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var a,i,s,o,c,d,l=r("7pbsT"),u=r("4tSb9"),m=r("80lIJ"),p=(l=r("7pbsT"),u=r("4tSb9"),r("dIxxU")),f=document.querySelector(".loader"),h="b942b8bf626a04f48b07153a95ee51a0",g=(a=(0,l.default)((function(){var e,t,n,r,a=arguments;return(0,u.__generator)(this,(function(i){switch(i.label){case 0:e=a.length>0&&void 0!==a[0]?a[0]:"https://api.themoviedb.org/3/movie/popular",t=a.length>1&&void 0!==a[1]?a[1]:1,f.style.display="block",i.label=1;case 1:return i.trys.push([1,3,,4]),[4,p.default.get(e,{params:{api_key:"".concat(h),page:t,language:"en-US"}})];case 2:return n=i.sent(),f.style.display="none",[2,n];case 3:return r=i.sent(),f.style.display="none",console.log(r),[3,4];case 4:return[2]}}))})),function(){return a.apply(this,arguments)}),v=r("e4Itz"),b="",L=function(e){var t=N();return function(e,t){b="",e.map((function(n){t.map((function(t){t.id===n&&(n!=e[e.length-1]?b=b+t.name+", ":b+=t.name)}))}))}(e.genre_ids,t.data.genres),'\n<div class="movie-card">\n<img class="movie-card__image" alt="'.concat(e.title,' movie" src=').concat((0,v.imageExists)("https://image.tmdb.org/t/p/w500",e.poster_path),'>\n  <div class="movie-card__label">\n    <p class="movie-card__title">').concat(e.title,'</p>\n    <p class="movie-card__genre-year">').concat(b," | ").concat((0,v.getMovieYear)(e.release_date),'</p> \n    <p class="movie-card__id">').concat(e.id,"</p> \n  </div>\n</div>\n")},_=document.getElementById("pagination__numbers"),y=document.getElementById("next-button"),T=document.getElementById("prev-button"),E=function(e){if(e==i){var t=document.createElement("span");t.className="pagination__numbers-ellipsis",t.innerHTML="&hellip;",t.classList.add("hidden-right"),_.appendChild(t)}var n=document.createElement("button");if(n.className="pagination__number",n.innerHTML=e,n.setAttribute("page-index",e),n.setAttribute("aria-label","Page "+e),1!=e&&e!=i||n.classList.add("hidden-mobile"),_.appendChild(n),1==e){var r=document.createElement("span");r.className="pagination__numbers-ellipsis",r.innerHTML="&hellip;",r.classList.add("hidden-left"),_.appendChild(r)}},S=function(e){_.innerHTML="",i=e;for(var t=1;t<=e;t++)E(t)},M=function(e){e.classList.add("disabled"),e.setAttribute("disabled",!0)},H=function(e){e.classList.remove("disabled"),e.removeAttribute("disabled")},A=function(e){(function(e){var t=document.querySelectorAll(".pagination__numbers-ellipsis");console.log(t),document.querySelectorAll(".pagination__number").forEach((function(n){var r=Number(n.getAttribute("page-index"));i<=7?(n.classList.remove("hidden"),t[0].classList.add("hidden-left"),t[1].classList.add("hidden-right")):e<=4?(t[0].classList.add("hidden-left"),t[1].classList.remove("hidden-right")):e>=i-3?(t[0].classList.remove("hidden-left"),t[1].classList.add("hidden-right")):(t[0].classList.remove("hidden-left"),t[1].classList.remove("hidden-right")),e<=3?(1==r&&n.classList.remove("hidden-mobile"),r==i&&n.classList.add("hidden-mobile"),r<=5||r==i?n.classList.remove("hidden"):n.classList.add("hidden")):e>=i-2?(1==r&&n.classList.add("hidden-mobile"),r==i&&n.classList.remove("hidden-mobile"),r>=i-4||1==r?n.classList.remove("hidden"):n.classList.add("hidden")):i<=7?(n.classList.remove("hidden"),t[0].classList.add("hidden-left"),t[1].classList.add("hidden-right"),1!=r&&r!=i||n.classList.remove("hidden-mobile")):1==r||r==i?(n.classList.remove("hidden"),n.classList.add("hidden-mobile")):r>=e-2&&r<=e+2?n.classList.remove("hidden"):n.classList.add("hidden")}))})(s=e),document.querySelectorAll(".pagination__number").forEach((function(e){e.classList.remove("active"),Number(e.getAttribute("page-index"))==s&&e.classList.add("active")})),1===s?M(T):H(T),i===s?M(y):H(y)},q=r("dEmTs"),x=document.querySelector(".main-box"),w=1,k=function(){var e=(0,l.default)((function(e){var t,n,r,a=arguments;return(0,u.__generator)(this,(function(i){switch(i.label){case 0:t=a.length>1&&void 0!==a[1]?a[1]:1,i.label=1;case 1:return i.trys.push([1,4,,5]),[4,g(e,w=t)];case 2:return n=i.sent(),[4,(0,m.getGenresList)()];case 3:return d=i.sent(),x.innerHTML="",n.data.results.map((function(e){x.insertAdjacentHTML("beforeend",L(e))})),n.data.total_pages<500?S(n.data.total_pages):S(500),A(w),c=(0,l.default)((function(){return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return A(w-1),[4,g(e,--w)];case 1:return n=t.sent(),x.innerHTML="",n.data.results.map((function(e){x.insertAdjacentHTML("beforeend",L(e))})),(0,q.onTopScroll)(),[2]}}))})),T.addEventListener("click",c),o=(0,l.default)((function(){return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return A(w+1),[4,g(e,++w)];case 1:return n=t.sent(),x.innerHTML="",n.data.results.map((function(e){x.insertAdjacentHTML("beforeend",L(e))})),(0,q.onTopScroll)(),[2]}}))})),y.addEventListener("click",o),document.querySelectorAll(".pagination__number").forEach((function(t){var r=Number(t.getAttribute("page-index"));r&&t.addEventListener("click",(0,l.default)((function(){return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return A(r),[4,g(e,w=r)];case 1:return n=t.sent(),x.innerHTML="",n.data.results.map((function(e){x.insertAdjacentHTML("beforeend",L(e))})),(0,q.onTopScroll)(),[2]}}))})))})),[3,5];case 4:return r=i.sent(),console.log("err ",r),[3,5];case 5:return[2]}}))}));return function(t){return e.apply(this,arguments)}}(),I=function(){y.removeEventListener("click",o),T.removeEventListener("click",c)},N=function(){return d},j=(m=r("80lIJ"),document.querySelector(".genres-menu__select")),U=document.querySelector(".genres-menu__clear"),B="https://api.themoviedb.org/3/movie/popular",C=[],D=1;U.addEventListener("click",(function(e){C.forEach((function(e){return document.getElementById(e).classList.remove("focused-genre")})),C=[],B="https://api.themoviedb.org/3/movie/popular",I(),k(B)})),(0,m.getGenresList)().then((function(e){for(var t=function(t){var n=document.createElement("button");n.classList.add("genre"),n.id=e.data.genres[t].id,n.innerText=e.data.genres[t].name,n.addEventListener("click",(function(){n.classList.add("focused-genre"),0===C?C.push(e.data.genres[t].id):C.includes(e.data.genres[t].id)?C.forEach((function(r,a){r==e.data.genres[t].id&&(console.log(e.data.genres[t].id),C.splice(a,1),n.classList.remove("focused-genre"))})):C.push(e.data.genres[t].id),C!==[]?(D=1,B="https://api.themoviedb.org/3/discover/movie?&with_genres="+encodeURI(C.join(","))):B="https://api.themoviedb.org/3/movie/popular",I(),k(B,D)})),j.append(n)},n=0;n<e.data.genres.length;n++)t(n)})),r("5PK8J"),r("5h39L");l=r("7pbsT"),u=r("4tSb9"),l=r("7pbsT"),u=r("4tSb9"),p=r("dIxxU");var J="b942b8bf626a04f48b07153a95ee51a0",O="https://api.themoviedb.org/3/search/movie",R=document.querySelector(".loader");function G(e){return P.apply(this,arguments)}function P(){return P=(0,l.default)((function(e){var t,n,r,a=arguments;return(0,u.__generator)(this,(function(i){switch(i.label){case 0:t=a.length>1&&void 0!==a[1]?a[1]:1,R.style.display="block",i.label=1;case 1:return i.trys.push([1,3,,4]),[4,p.default.get(O,{params:{api_key:"".concat(J),query:"".concat(e),page:t}})];case 2:return n=i.sent(),R.style.display="none",[2,n.data];case 3:return r=i.sent(),R.style.display="none",console.error(r),[3,4];case 4:return[2]}}))})),P.apply(this,arguments)}q=r("dEmTs");var z=document.querySelector(".header__no-movies"),F=document.querySelector(".main-box"),K=document.querySelector("input[name='searchQuery']"),Q=document.querySelector(".header__search-form-btn"),W=1;function Y(){return(Y=(0,l.default)((function(e){var t,n;return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return e.preventDefault(),z.innerHTML="",W=1,(t=K.value)?[3,1]:(alert("Enter movie title"),[3,3]);case 1:return[4,G(t,W)];case 2:(n=r.sent()).results.length?(F.innerHTML="",console.log(n),n.results.map((function(e){F.insertAdjacentHTML("beforeend",L(e))})),n.total_pages<500?S(n.total_pages):S(500),A(W),T.addEventListener("click",(0,l.default)((function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return A(W-1),[4,G(t,--W)];case 1:return n=e.sent(),F.innerHTML="",console.log(n),n.results.map((function(e){F.insertAdjacentHTML("beforeend",L(e))})),(0,q.onTopScroll)(),[2]}}))}))),y.addEventListener("click",(0,l.default)((function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return A(W+1),[4,G(t,++W)];case 1:return n=e.sent(),F.innerHTML="",console.log(n),n.results.map((function(e){F.insertAdjacentHTML("beforeend",L(e))})),(0,q.onTopScroll)(),[2]}}))}))),document.querySelectorAll(".pagination__number").forEach((function(e){var r=Number(e.getAttribute("page-index"));r&&e.addEventListener("click",(0,l.default)((function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return A(r),[4,G(t,W=r)];case 1:return n=e.sent(),F.innerHTML="",console.log(n),n.results.map((function(e){F.insertAdjacentHTML("beforeend",L(e))})),(0,q.onTopScroll)(),[2]}}))})))}))):z.innerHTML="Search result not successful. Enter the correct movie name.",r.label=3;case 3:return[2]}}))}))).apply(this,arguments)}Q.addEventListener("click",(function(e){return Y.apply(this,arguments)})),r("dEmTs");var V=document.querySelector(".footer__authors"),X=document.querySelector(".students-modal__close-btn"),Z=document.querySelector(".data-modal");function $(){Z.classList.toggle("is-hidden")}V.addEventListener("click",$),X.addEventListener("click",$),r("iNWLi"),k()}();
//# sourceMappingURL=index.dbda03b9.js.map
