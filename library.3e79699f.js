!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a),a("80lIJ"),a("5PK8J");var r,i=a("7pbsT"),o=a("4tSb9"),c=a("dIxxU"),l=a("iU1Pc"),s=a("e4Itz"),u=document.querySelector(".loader"),d=document.querySelector(".watched-list-btn"),p=document.querySelector(".queue-list-btn"),f=document.querySelector(".main-box"),v=(r=(0,i.default)((function(e){var t,n,a;return(0,o.__generator)(this,(function(r){switch(r.label){case 0:u.style.display="block",r.label=1;case 1:return r.trys.push([1,3,,4]),t="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat("b942b8bf626a04f48b07153a95ee51a0","&language=en-US"),[4,c.default.get(t)];case 2:return n=r.sent(),u.style.display="none",[2,n.data];case 3:return a=r.sent(),u.style.display="none",console.error(a),[3,4];case 4:return[2]}}))})),function(e){return r.apply(this,arguments)}),b=[];function m(){return(m=(0,i.default)((function(){var e,t,n,a;return(0,o.__generator)(this,(function(r){switch(r.label){case 0:return p.removeAttribute("disabled"),f.innerHTML="",null!==localStorage.getItem("added-to-watched")?[3,1]:(l.Notify.info("There are no movies in your watched list!"),[3,6]);case 1:b=JSON.parse(localStorage.getItem("added-to-watched")),e=[],t=0,r.label=2;case 2:return t<b.length?(n=b[t],[4,v(n)]):[3,5];case 3:a=r.sent(),e.push(a),r.label=4;case 4:return t++,[3,2];case 5:y(e),r.label=6;case 6:return d.setAttribute("disabled",!0),[2]}}))}))).apply(this,arguments)}d.addEventListener("click",(function(e){e.preventDefault(),function(){m.apply(this,arguments)}()}));var g=[];function h(){return(h=(0,i.default)((function(){var e,t,n,a;return(0,o.__generator)(this,(function(r){switch(r.label){case 0:return d.removeAttribute("disabled"),f.innerHTML="",null!==localStorage.getItem("added-to-queue")?[3,1]:(l.Notify.info("There are no movies in your queue!"),[3,6]);case 1:g=JSON.parse(localStorage.getItem("added-to-queue")),e=[],t=0,r.label=2;case 2:return t<g.length?(n=g[t],[4,v(n)]):[3,5];case 3:a=r.sent(),e.push(a),r.label=4;case 4:return t++,[3,2];case 5:y(e),r.label=6;case 6:return p.setAttribute("disabled",!0),[2]}}))}))).apply(this,arguments)}function y(e){var t=e.map((function(e){return'\n<div class="movie-card">\n  <img class="movie-card__image" alt="'.concat(e.title,' movie"src=').concat((0,s.imageExists)("https://image.tmdb.org/t/p/w500",e.poster_path),'>\n  <div class="movie-card__label">\n    <p class="movie-card__title">').concat(e.original_title,'</p>\n    <div>\n    <span class="movie-card__genre-year"> ').concat((t=e.genres,n="",t.map((function(e){e!=t[t.length-1]?n=n+e.name+", ":n+=e.name})),n),"  | ").concat((0,s.getMovieYear)(e.release_date),'</span> \n    <span class="movie-card__vote">').concat(e.vote_average.toFixed(1),'</span>\n    \n    </div>\n    <p class="movie-card__id">').concat(e.id,"</p> \n  </div>\n</div>\n");var t,n})).join("");f.innerHTML+=t}p.addEventListener("click",(function(e){e.preventDefault(),function(){h.apply(this,arguments)}()})),a("5h39L"),a("iNWLi"),a("dEmTs")}();
//# sourceMappingURL=library.3e79699f.js.map