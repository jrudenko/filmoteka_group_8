function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequired7c6=r);var s,o=r("gpFee"),a=r("3ILHO");s=JSON.parse('[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]');let c="https://image.tmdb.org/t/p/w500/";function l(t){a.refs.moviesList.innerHTML="";const n=t.map((t=>(c=null===t.poster_path?"":"https://image.tmdb.org/t/p/w500/",function({poster_path:t,title:n,genre_ids:i,vote_average:r,release_date:o,id:a}){const l=function(t){let n=[];for(let i of t){const t=e(s).find((e=>e.id===i));n.push(" "+t.name)}n.length>3&&(n=n.slice(0,2),n.splice(2,0," Other"));0===n.length&&(n="No genres");return n}(i);return`\n        <li class="movie__item">\n          <a hres="#" class="movie__link">\n             <div class="thumb"> \n              <img class="movie__img" id="${a}"\n              width="500"\n              loading="lazy"\n              alt="${n}"\n              src="${c}${t}" \n              />\n            </div>\n            <div class="movie__descr">\n            <p class="movie__title">${n}</p>\n            \n            <ul class="movie__descr--orange">\n             <li class="card__genre movie__genre"></li>\n             <li class="movie__genre">${l} | ${o.substr(0,4)}</li>\n             <li class="movie__vote">${r.toFixed(1)}</li>\n            </ul>\n            </div>\n          </a>\n        </li>\n  `}(t)))).join("");a.refs.moviesList.insertAdjacentHTML("beforeend",n)}a=r("3ILHO");function u(e){a.refs.divBackdrop.innerHTML="";const t=function({title:e,vote_average:t,vote_count:n,original_title:i,popularity:r,overview:s,poster_path:o,genres:a,id:c}){let l="";return a.forEach((e=>{l+=e.name,l+=" "})),`\n    <div class="singleMovieModal__container">\n    <button class="singleMovieModal__button-close" type="button" id="button-close">\n      <svg  class="singleMovieModal__button-close-img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg"\n        viewBox="0 0 16 16">\n        <path\n          d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />\n      </svg>\n    </button>\n\n    <div class="singleMovieModal__flex-container">\n      <img class="singleMovieModal__picture js-image" src=https://image.tmdb.org/t/p/w500/${o} alt="${e}" data-action="${c}" />\n\n      <div class="singleMovieModal__description-container">\n        <h2 class="singleMovieModal__title">${e}</h2>\n        <ul class="singleMovieModal__description-list">\n          <li class="singleMovieModal__description-item">\n            <p class="singleMovieModal__description-text">Vote / Votes</p>\n            <p class="singleMovieModal__description-span">\n              <span class="singleMovieModal__description-insert">${t}</span>/${n}\n            </p>\n          </li>\n          <li class="singleMovieModal__description-item">\n            <p class="singleMovieModal__description-text">Popularity</p>\n            <p class="singleMovieModal__description-span">${r}</p>\n          </li>\n          <li class="singleMovieModal__description-item">\n            <p class="singleMovieModal__description-text">Original Title</p>\n            <p class="singleMovieModal__description-span">${i}</p>\n          </li>\n          <li class="singleMovieModal__description-item">\n            <p class="singleMovieModal__description-text">Genre</p>\n            <p class="singleMovieModal__description-span">${l}</p>\n          </li>\n        </ul>\n          \n        <p class="singleMovieModal__about singleMovieModal__about-more-button-active">\n          ${s}\n        </p>\n        <ul class="singleMovieModal-add__list">\n          <li class="singleMovieModal-add__item">\n            <button class="singleMovieModal-add__button js-addWatched" type="button">\n              Add to Watched\n            </button>\n            <button class="singleMovieModal-add__button js-deleteWatched hide" type="button">\n              Delate Watched\n            </button>\n          </li>\n          <li class="singleMovieModal-add__item">\n            <button class="singleMovieModal-add__button js-addQueue" type="button">\n              Add to queue\n            </button>\n            <button class="singleMovieModal-add__button js-deleteQueue hide" type="button">\n              Delate queue\n            </button>\n          </li>\n          <li class="singleMovieModal-add__item">\n            <button class="singleMovieModal-add__trailer" type="button">\n              Watch trailer movie\n            </button>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n    `}(e);a.refs.divBackdrop.insertAdjacentHTML("beforeend",t)}a=r("3ILHO");function d(e){"Escape"===e.code&&h()}function h(){window.removeEventListener("keydown",d),a.refs.singleMovieModal.classList.add("is-hidden");document.body.style.overflowY=""}function f(e){if(e){a.refs.singleMovieModal.classList.remove("is-hidden");document.body.style.overflowY="hidden",window.addEventListener("keydown",d)}else e||h()}function p(){document.querySelector(".singleMovieModal-add__trailer").addEventListener("click",(()=>{E(pr[0]),window.removeEventListener("keydown",d),a.refs.singleMovieModal.classList.add("is-hidden")}))}function m(e){e.currentTarget===e.target&&h()}function g(e){"IMG"===e.target.nodeName&&f(!0)}(a=r("3ILHO")).refs.moviesList.addEventListener("click",g);a=r("3ILHO"),o=r("gpFee");var v=r("drKbx");const y=new(0,o.FetchApiMovies);a.refs.form.addEventListener("submit",(async function(e){e.preventDefault(),(0,v.hiddenSpinner)(!1);const t=a.refs.formInput.value,n=await y.fetchKey(t),i=await n.results;a.refs.formInput.value="",(0,v.hiddenSpinner)(!0),l(i)}));var _,b={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */window,_=function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist",n(n.s=10)}([function(e,t,n){e.exports=function(e,t){var n,i,r,s,o=Object.prototype.hasOwnProperty;for(r=1,s=arguments.length;r<s;r+=1)for(i in n=arguments[r])o.call(n,i)&&(e[i]=n[i]);return e}},function(e,t,n){e.exports=function(e){return void 0===e}},function(e,t,n){e.exports=function(e){return e instanceof Array}},function(e,t,n){var i=n(2),r=n(17),s=n(6);e.exports=function(e,t,n){i(e)?r(e,t,n):s(e,t,n)}},function(e,t,n){e.exports=function(e){return"string"==typeof e||e instanceof String}},function(e,t,n){e.exports=function(e){return e instanceof Function}},function(e,t,n){e.exports=function(e,t,n){var i;for(i in n=n||null,e)if(e.hasOwnProperty(i)&&!1===t.call(n,e[i],i,e))break}},function(e,t,n){var i=n(18),r=n(0);e.exports=function(e,t){var n;return t||(t=e,e=null),n=t.init||function(){},e&&i(n,e),t.hasOwnProperty("static")&&(r(n,t.static),delete t.static),r(n.prototype,t),n}},function(e,t,n){var i=n(2);e.exports=function(e,t,n){var r,s;if(n=n||0,!i(t))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(t,e,n);for(s=t.length,r=n;n>=0&&r<s;r+=1)if(t[r]===e)return r;return-1}},function(e,t,n){var i=n(29),r=n(30),s=n(5),o={capitalizeFirstLetter:function(e){return e.substring(0,1).toUpperCase()+e.substring(1,e.length)},isContained:function(e,t){return!!t&&(e===t||t.contains(e))},createElementByTemplate:function(e,t){var n=document.createElement("div"),r=s(e)?e(t):i(e,t);return n.innerHTML=r,n.firstChild},bind:function(e,t){var n,i=Array.prototype.slice;return e.bind?e.bind.apply(e,i.call(arguments,1)):(n=i.call(arguments,2),function(){return e.apply(t,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){r("pagination","UA-129987462-1")}};e.exports=o},function(e,t,n){n(11),e.exports=n(12)},function(e,t,n){},function(e,t,n){var i=n(13),r=n(7),s=n(0),o=n(1),a=n(20),c=n(9),l={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},u=r({init:function(e,t){this._options=s({},l,t),this._currentPage=0,this._view=new a(e,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(e){this._currentPage=e||this._options.page},_getLastPage:function(){var e=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return e||1},_getPageIndex:function(e){var t;return this._options.centerAlign?(t=e-Math.floor(this._options.visiblePages/2),t=Math.max(t,1),t=Math.min(t,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(e/this._options.visiblePages)},_getRelativePage:function(e){var t="prev"===e,n=this.getCurrentPage();return t?n-1:n+1},_getMorePageIndex:function(e){var t=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===e;return this._options.centerAlign?i?t-1:t+n:i?(t-1)*n:t*n+1},_convertToValidPage:function(e){var t=this._getLastPage();return e=Math.max(e,1),e=Math.min(e,t)},_paginate:function(e){var t=this._makeViewData(e||this._options.page);this._setCurrentPage(e),this._view.update(t)},_makeViewData:function(e){var t={},n=this._getLastPage(),i=this._getPageIndex(e),r=this._getPageIndex(n),s=this._getEdge(e);return t.leftPageNumber=s.left,t.rightPageNumber=s.right,t.prevMore=i>1,t.nextMore=i<r,t.page=e,t.currentPageIndex=e,t.lastPage=n,t.lastPageListIndex=n,t},_getEdge:function(e){var t,n,i,r=this._getLastPage(),s=this._options.visiblePages,o=this._getPageIndex(e);return this._options.centerAlign?(i=Math.floor(s/2),(n=(t=Math.max(e-i,1))+s-1)>r&&(t=Math.max(r-s+1,1),n=r)):(t=(o-1)*s+1,n=o*s,n=Math.min(n,r)),{left:t,right:n}},_onClickHandler:function(e,t){switch(e){case"first":t=1;break;case"prev":t=this._getRelativePage("prev");break;case"next":t=this._getRelativePage("next");break;case"prevMore":t=this._getMorePageIndex("prev");break;case"nextMore":t=this._getMorePageIndex("next");break;case"last":t=this._getLastPage();break;default:if(!t)return}this.movePageTo(t)},reset:function(e){o(e)&&(e=this._options.totalItems),this._options.totalItems=e,this._paginate(1)},movePageTo:function(e){e=this._convertToValidPage(e),this.invoke("beforeMove",{page:e})&&(this._paginate(e),this.fire("afterMove",{page:e}))},setTotalItems:function(e){this._options.totalItems=e},setItemsPerPage:function(e){this._options.itemsPerPage=e},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(u),e.exports=u},function(e,t,n){var i=n(0),r=n(14),s=n(4),o=n(16),a=n(2),c=n(5),l=n(3),u=/\s+/g;function d(){this.events=null,this.contexts=null}d.mixin=function(e){i(e.prototype,d.prototype)},d.prototype._getHandlerItem=function(e,t){var n={handler:e};return t&&(n.context=t),n},d.prototype._safeEvent=function(e){var t,n=this.events;return n||(n=this.events={}),e&&((t=n[e])||(t=[],n[e]=t),n=t),n},d.prototype._safeContext=function(){var e=this.contexts;return e||(e=this.contexts=[]),e},d.prototype._indexOfContext=function(e){for(var t=this._safeContext(),n=0;t[n];){if(e===t[n][0])return n;n+=1}return-1},d.prototype._memorizeContext=function(e){var t,n;r(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1?t[n][1]+=1:t.push([e,1]))},d.prototype._forgetContext=function(e){var t,n;r(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1&&(t[n][1]-=1,t[n][1]<=0&&t.splice(n,1)))},d.prototype._bindEvent=function(e,t,n){var i=this._safeEvent(e);this._memorizeContext(n),i.push(this._getHandlerItem(t,n))},d.prototype.on=function(e,t,n){var i=this;s(e)?(e=e.split(u),l(e,(function(e){i._bindEvent(e,t,n)}))):o(e)&&(n=t,l(e,(function(e,t){i.on(t,e,n)})))},d.prototype.once=function(e,t,n){var i=this;if(o(e))return n=t,void l(e,(function(e,t){i.once(t,e,n)}));this.on(e,(function r(){t.apply(n,arguments),i.off(e,r,n)}),n)},d.prototype._spliceMatches=function(e,t){var n,i=0;if(a(e))for(n=e.length;i<n;i+=1)!0===t(e[i])&&(e.splice(i,1),n-=1,i-=1)},d.prototype._matchHandler=function(e){var t=this;return function(n){var i=e===n.handler;return i&&t._forgetContext(n.context),i}},d.prototype._matchContext=function(e){var t=this;return function(n){var i=e===n.context;return i&&t._forgetContext(n.context),i}},d.prototype._matchHandlerAndContext=function(e,t){var n=this;return function(i){var r=e===i.handler,s=t===i.context,o=r&&s;return o&&n._forgetContext(i.context),o}},d.prototype._offByEventName=function(e,t){var n=this,i=c(t),r=n._matchHandler(t);e=e.split(u),l(e,(function(e){var t=n._safeEvent(e);i?n._spliceMatches(t,r):(l(t,(function(e){n._forgetContext(e.context)})),n.events[e]=[])}))},d.prototype._offByHandler=function(e){var t=this,n=this._matchHandler(e);l(this._safeEvent(),(function(e){t._spliceMatches(e,n)}))},d.prototype._offByObject=function(e,t){var n,i=this;this._indexOfContext(e)<0?l(e,(function(e,t){i.off(t,e)})):s(t)?(n=this._matchContext(e),i._spliceMatches(this._safeEvent(t),n)):c(t)?(n=this._matchHandlerAndContext(t,e),l(this._safeEvent(),(function(e){i._spliceMatches(e,n)}))):(n=this._matchContext(e),l(this._safeEvent(),(function(e){i._spliceMatches(e,n)})))},d.prototype.off=function(e,t){s(e)?this._offByEventName(e,t):arguments.length?c(e)?this._offByHandler(e):o(e)&&this._offByObject(e,t):(this.events={},this.contexts=[])},d.prototype.fire=function(e){this.invoke.apply(this,arguments)},d.prototype.invoke=function(e){var t,n,i,r;if(!this.hasListener(e))return!0;for(t=this._safeEvent(e),n=Array.prototype.slice.call(arguments,1),i=0;t[i];){if(!1===(r=t[i]).handler.apply(r.context,n))return!1;i+=1}return!0},d.prototype.hasListener=function(e){return this.getListenerLength(e)>0},d.prototype.getListenerLength=function(e){return this._safeEvent(e).length},e.exports=d},function(e,t,n){var i=n(1),r=n(15);e.exports=function(e){return!i(e)&&!r(e)}},function(e,t,n){e.exports=function(e){return null===e}},function(e,t,n){e.exports=function(e){return e===Object(e)}},function(e,t,n){e.exports=function(e,t,n){var i=0,r=e.length;for(n=n||null;i<r&&!1!==t.call(n,e[i],i,e);i+=1);}},function(e,t,n){var i=n(19);e.exports=function(e,t){var n=i(t.prototype);n.constructor=e,e.prototype=n}},function(e,t,n){e.exports=function(e){function t(){}return t.prototype=e,new t}},function(e,t,n){var i=n(3),r=n(7),s=n(21),o=n(22),a=n(24),c=n(25),l=n(0),u=n(4),d=n(28),h=n(9),f={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},p=["first","prev","next","last"],m=["prev","next"],g=r({init:function(e,t,n){this._containerElement=null,this._firstItemClassName=t.firstItemClassName,this._lastItemClassName=t.lastItemClassName,this._template=l({},f,t.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(e),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(e){if(u(e)?e=document.getElementById(e)||document.querySelector(e):e.jquery&&(e=e[0]),!d(e))throw new Error("The container element is invalid.");this._containerElement=e},_setMoveButtons:function(){i(p,(function(e){this._buttons[e]=h.createElementByTemplate(this._template.moveButton,{type:e})}),this)},_setDisabledMoveButtons:function(){i(p,(function(e){var t="disabled"+h.capitalizeFirstLetter(e);this._buttons[t]=h.createElementByTemplate(this._template.disabledMoveButton,{type:e})}),this)},_setMoreButtons:function(){i(m,(function(e){var t=e+"More";this._buttons[t]=h.createElementByTemplate(this._template.moreButton,{type:e})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(e){var t;t=e.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(t)},_appendPrevButton:function(e){var t;t=e.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(t)},_appendNextButton:function(e){var t;t=e.currentPageIndex<e.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(t)},_appendLastButton:function(e){var t;t=e.page<e.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(t)},_appendPrevMoreButton:function(e){var t;e.prevMore&&(t=this._buttons.prevMore,c(t,this._firstItemClassName),this._getContainerElement().appendChild(t))},_appendNextMoreButton:function(e){var t;e.nextMore&&(t=this._buttons.nextMore,c(t,this._lastItemClassName),this._getContainerElement().appendChild(t))},_appendPages:function(e){var t,n,i=e.leftPageNumber,r=e.rightPageNumber;for(n=i;n<=r;n+=1)n===e.page?t=h.createElementByTemplate(this._template.currentPage,{page:n}):(t=h.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(t)),n!==i||e.prevMore||c(t,this._firstItemClassName),n!==r||e.nextMore||c(t,this._lastItemClassName),this._getContainerElement().appendChild(t)},_attachClickEvent:function(e){var t=this._getContainerElement();o(t,"click",(function(t){var n,i,r=s(t);a(t),(i=this._getButtonType(r))||(n=this._getPageNumber(r)),e(i,n)}),this)},_getButtonType:function(e){var t,n=this._buttons;return i(n,(function(n,i){return!h.isContained(e,n)||(t=i,!1)}),this),t},_getPageNumber:function(e){var t,n=this._findPageElement(e);return n&&(t=parseInt(n.innerText,10)),t},_findPageElement:function(e){for(var t,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(t=this._enabledPageElements[n],h.isContained(e,t))return t;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(e,t){this._buttons[t]=e.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(e){this._empty(),this._appendFirstButton(e),this._appendPrevButton(e),this._appendPrevMoreButton(e),this._appendPages(e),this._appendNextMoreButton(e),this._appendNextButton(e),this._appendLastButton(e)}});e.exports=g},function(e,t,n){e.exports=function(e){return e.target||e.srcElement}},function(e,t,n){var i=n(4),r=n(3),s=n(23);function o(e,t,n,i){function o(t){n.call(i||e,t||window.event)}"addEventListener"in e?e.addEventListener(t,o):"attachEvent"in e&&e.attachEvent("on"+t,o),function(e,t,n,i){var o=s(e,t),a=!1;r(o,(function(e){return e.handler!==n||(a=!0,!1)})),a||o.push({handler:n,wrappedHandler:i})}(e,t,n,o)}e.exports=function(e,t,n,s){i(t)?r(t.split(/\s+/g),(function(t){o(e,t,n,s)})):r(t,(function(t,i){o(e,i,t,n)}))}},function(e,t,n){var i="_feEventKey";e.exports=function(e,t){var n,r=e[i];return r||(r=e[i]={}),(n=r[t])||(n=r[t]=[]),n}},function(e,t,n){e.exports=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},function(e,t,n){var i=n(3),r=n(8),s=n(26),o=n(27);e.exports=function(e){var t,n=Array.prototype.slice.call(arguments,1),a=e.classList,c=[];a?i(n,(function(t){e.classList.add(t)})):((t=s(e))&&(n=[].concat(t.split(/\s+/),n)),i(n,(function(e){r(e,c)<0&&c.push(e)})),o(e,c))}},function(e,t,n){var i=n(1);e.exports=function(e){return e&&e.className?i(e.className.baseVal)?e.className:e.className.baseVal:""}},function(e,t,n){var i=n(2),r=n(1);e.exports=function(e,t){t=(t=i(t)?t.join(" "):t).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),r(e.className.baseVal)?e.className=t:e.className.baseVal=t}},function(e,t,n){e.exports=function(e){return"object"==typeof HTMLElement?e&&(e instanceof HTMLElement||!!e.nodeType):!(!e||!e.nodeType)}},function(e,t,n){var i=n(8),r=n(3),s=n(2),o=n(4),a=n(0),c=/{{\s?|\s?}}/g,l=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,u=/\[\s?|\s?\]/,d=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,h=/\./,f=/^["']\w+["']$/,p=/"|'/g,m=/^-?\d+\.?\d*$/,g={if:function(e,t,n){var i=function(e,t){var n=[e],i=[],s=0,o=0;return r(t,(function(e,r){0===e.indexOf("if")?s+=1:"/if"===e?s-=1:s||0!==e.indexOf("elseif")&&"else"!==e||(n.push("else"===e?["true"]:e.split(" ").slice(1)),i.push(t.slice(o,r)),o=r+1)})),i.push(t.slice(o)),{exps:n,sourcesInsideIf:i}}(e,t),s=!1,o="";return r(i.exps,(function(e,t){return(s=b(e,n))&&(o=w(i.sourcesInsideIf[t],n)),!s})),o},each:function(e,t,n){var i=b(e,n),o=s(i)?"@index":"@key",c={},l="";return r(i,(function(e,i){c[o]=i,c["@this"]=e,a(n,c),l+=w(t.slice(),n)})),l},with:function(e,t,n){var r=i("as",e),s=e[r+1],o=b(e.slice(0,r),n),c={};return c[s]=o,w(t,a(n,c))||""}},v=3==="a".split(/a/).length?function(e,t){return e.split(t)}:function(e,t){var n,i,r=[],s=0;for(t.global||(t=new RegExp(t,"g")),n=t.exec(e);null!==n;)i=n.index,r.push(e.slice(s,i)),s=i+n[0].length,n=t.exec(e);return r.push(e.slice(s)),r};function y(e,t){var n,i=t[e];return"true"===e?i=!0:"false"===e?i=!1:f.test(e)?i=e.replace(p,""):l.test(e)?i=y((n=e.split(u))[0],t)[y(n[1],t)]:d.test(e)?i=y((n=e.split(h))[0],t)[n[1]]:m.test(e)&&(i=parseFloat(e)),i}function _(e,t,n){for(var i,r,s,a,c=g[e],l=1,u=2,d=t[u];l&&o(d);)0===d.indexOf(e)?l+=1:0===d.indexOf("/"+e)&&(l-=1,i=u),d=t[u+=2];if(l)throw Error(e+" needs {{/"+e+"}} expression.");return t[0]=c(t[0].split(" ").slice(1),(r=0,s=i,(a=t.splice(r+1,s-r)).pop(),a),n),t}function b(e,t){var n=y(e[0],t);return n instanceof Function?function(e,t,n){var i=[];return r(t,(function(e){i.push(y(e,n))})),e.apply(null,i)}(n,e.slice(1),t):n}function w(e,t){for(var n,i,r,s=1,a=e[s];o(a);)i=(n=a.split(" "))[0],g[i]?(r=_(i,e.splice(s,e.length-s),t),e=e.concat(r)):e[s]=b(n,t),a=e[s+=2];return e.join("")}e.exports=function(e,t){return w(v(e,c),t)}},function(e,t,n){var i=n(1),r=n(31);e.exports=function(e,t){var n=location.hostname,s="TOAST UI "+e+" for "+n+": Statistics",o=window.localStorage.getItem(s);(i(window.tui)||!1!==window.tui.usageStatistics)&&(o&&!function(e){return(new Date).getTime()-e>6048e5}(o)||(window.localStorage.setItem(s,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||r("https://www.google-analytics.com/collect",{v:1,t:"event",tid:t,cid:n,dp:n,dh:e,el:e,ec:"use"})}),1e3)))}},function(e,t,n){var i=n(6);e.exports=function(e,t){var n=document.createElement("img"),r="";return i(t,(function(e,t){r+="&"+t+"="+e})),r=r.substring(1),n.src=e+"?"+r,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},b=_();a=r("3ILHO");function w(){a.refs.treilerContainer.innerHTML="",window.removeEventListener("keydown",k);document.body.style.overflowY="",window.removeEventListener("click",T),a.refs.treilerButtonClose.removeEventListener("click",I),a.refs.treilerButtonClose.classList.add("is-hidden")}function k(e){"Escape"===e.code&&(console.log("Stoped video"),w())}function I(){w()}function E(e){window.addEventListener("keydown",k),a.refs.treilerButtonClose.classList.remove("is-hidden"),a.refs.treilerButtonClose.addEventListener("click",I),a.refs.treilerContainer.innerHTML=`\n  <iframe class="trailer__iframe" width="700" height="500" src="https://www.youtube.com/embed/${e}" title="YouTube video player" frameborder="1" allow="accelerometer;  controls="1"; clipboard-write; encrypted-media; gyroscope="1"; picture-in-picture"; allowfullscreen="1"; enablejsapi="1"></iframe>\n  `,window.addEventListener("click",T)}function T(e){E&&a.refs.singleMovieModal.classList.add("is-hidden")}r("5zsJX");var O,x,S,C=O={};function M(){throw new Error("setTimeout has not been defined")}function P(){throw new Error("clearTimeout has not been defined")}function L(e){if(x===setTimeout)return setTimeout(e,0);if((x===M||!x)&&setTimeout)return x=setTimeout,setTimeout(e,0);try{return x(e,0)}catch(t){try{return x.call(null,e,0)}catch(t){return x.call(this,e,0)}}}!function(){try{x="function"==typeof setTimeout?setTimeout:M}catch(e){x=M}try{S="function"==typeof clearTimeout?clearTimeout:P}catch(e){S=P}}();var N,$=[],A=!1,R=-1;function D(){A&&N&&(A=!1,N.length?$=N.concat($):R=-1,$.length&&U())}function U(){if(!A){var e=L(D);A=!0;for(var t=$.length;t;){for(N=$,$=[];++R<t;)N&&N[R].run();R=-1,t=$.length}N=null,A=!1,function(e){if(S===clearTimeout)return clearTimeout(e);if((S===P||!S)&&clearTimeout)return S=clearTimeout,clearTimeout(e);try{S(e)}catch(t){try{return S.call(null,e)}catch(t){return S.call(this,e)}}}(e)}}function H(e,t){this.fun=e,this.array=t}function j(){}C.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];$.push(new H(e,t)),1!==$.length||A||L(U)},H.prototype.run=function(){this.fun.apply(null,this.array)},C.title="browser",C.browser=!0,C.env={},C.argv=[],C.version="",C.versions={},C.on=j,C.addListener=j,C.once=j,C.off=j,C.removeListener=j,C.removeAllListeners=j,C.emit=j,C.prependListener=j,C.prependOnceListener=j,C.listeners=function(e){return[]},C.binding=function(e){throw new Error("process.binding is not supported")},C.cwd=function(){return"/"},C.chdir=function(e){throw new Error("process.chdir is not supported")},C.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const F=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},B={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=r>>2,u=(3&r)<<4|o>>4;let d=(15&o)<<2|c>>6,h=63&c;a||(h=64,s||(d=64)),i.push(n[l],n[u],n[d],n[h])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(F(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw Error();const c=r<<2|s>>4;if(i.push(c),64!==o){const e=s<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},W=function(e){return function(e){const t=F(e);return B.encodeByteArray(t,!0)}(e).replace(/\./g,"")},V=function(e){try{return B.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function z(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function q(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function K(){const e=z();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const G=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,J=()=>{try{return G()||(()=>{if(void 0===O||void 0===O.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&V(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},Y=e=>{var t,n;return null===(n=null===(t=J())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},X=e=>{var t;return null===(t=J())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Q{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Z.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ee.prototype.create)}}class ee{create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(te,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new Z(i,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const te=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ie(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(re(n)&&re(s)){if(!ie(n,s))return!1}else if(n!==s)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function re(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function se(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function oe(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function ae(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t){const n=new le(e,t);return n.subscribe.bind(n)}class le{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=ue),void 0===i.error&&(i.error=ue),void 0===i.complete&&(i.complete=ue);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function ue(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function de(e){return e&&e._delegate?e._delegate:e}class he{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fe{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Q;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,"[DEFAULT]"===i?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class pe{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new fe(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=[];var ge,ve;(ve=ge||(ge={}))[ve.DEBUG=0]="DEBUG",ve[ve.VERBOSE=1]="VERBOSE",ve[ve.INFO=2]="INFO",ve[ve.WARN=3]="WARN",ve[ve.ERROR=4]="ERROR",ve[ve.SILENT=5]="SILENT";const ye={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},_e=ge.INFO,be={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},we=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=be[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class ke{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?ye[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}constructor(e){this.name=e,this._logLevel=_e,this._logHandler=we,this._userLogHandler=null,me.push(this)}}let Ie,Ee;const Te=new WeakMap,Oe=new WeakMap,xe=new WeakMap,Se=new WeakMap,Ce=new WeakMap;let Me={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Oe.get(e);if("objectStoreNames"===t)return e.objectStoreNames||xe.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ne(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Pe(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ee||(Ee=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply($e(this),t),Ne(Te.get(this))}:function(...t){return Ne(e.apply($e(this),t))}:function(t,...n){const i=e.call($e(this),t,...n);return xe.set(i,t.sort?t.sort():[t]),Ne(i)}}function Le(e){return"function"==typeof e?Pe(e):(e instanceof IDBTransaction&&function(e){if(Oe.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));Oe.set(e,t)}(e),t=e,(Ie||(Ie=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Me):e);var t}function Ne(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(Ne(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Te.set(t,e)})).catch((()=>{})),Ce.set(t,e),t}(e);if(Se.has(e))return Se.get(e);const t=Le(e);return t!==e&&(Se.set(e,t),Ce.set(t,e)),t}const $e=e=>Ce.get(e);function Ae(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=Ne(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(Ne(o.result),e.oldVersion,e.newVersion,Ne(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const Re=["get","getKey","getAll","getAllKeys","count"],De=["put","add","delete","clear"],Ue=new Map;function He(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Ue.get(t))return Ue.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=De.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!Re.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return Ue.set(t,s),s}Me=(e=>({...e,get:(t,n,i)=>He(t,n)||e.get(t,n,i),has:(t,n)=>!!He(t,n)||e.has(t,n)}))(Me);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class je{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const Fe=new ke("@firebase/app"),Be={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},We=new Map,Ve=new Map;function ze(e,t){try{e.container.addComponent(t)}catch(n){Fe.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function qe(e){const t=e.name;if(Ve.has(t))return Fe.debug(`There were multiple attempts to register component ${t}.`),!1;Ve.set(t,e);for(const t of We.values())ze(t,e);return!0}function Ke(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ge=new ee("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ge.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new he("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw Ge.create("bad-app-name",{appName:String(r)});var s;if(n||(n=null===(s=J())||void 0===s?void 0:s.config),!n)throw Ge.create("no-options");const o=We.get(r);if(o){if(ie(n,o.options)&&ie(i,o.config))return o;throw Ge.create("duplicate-app",{appName:r})}const a=new pe(r);for(const e of Ve.values())a.addComponent(e);const c=new Je(n,i,a);return We.set(r,c),c}function Xe(e="[DEFAULT]"){const t=We.get(e);if(!t&&"[DEFAULT]"===e)return Ye();if(!t)throw Ge.create("no-app",{appName:e});return t}function Qe(e,t,n){var i;let r=null!==(i=Be[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Fe.warn(e.join(" "))}qe(new he(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}let Ze=null;function et(){return Ze||(Ze=Ae("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw Ge.create("idb-open",{originalErrorMessage:e.message})}))),Ze}async function tt(e,t){var n;try{const n=(await et()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");return await i.put(t,nt(e)),n.done}catch(e){if(e instanceof Z)Fe.warn(e.message);else{const t=Ge.create("idb-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message});Fe.warn(t.message)}}}function nt(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=rt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=rt(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),ot(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ot(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=W(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new st(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function rt(){return(new Date).toISOString().substring(0,10)}class st{async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){var t;try{return(await et()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(nt(e))}catch(e){if(e instanceof Z)Fe.warn(e.message);else{const n=Ge.create("idb-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message});Fe.warn(n.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return tt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return tt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function ot(e){return W(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var at;at="",qe(new he("platform-logger",(e=>new je(e)),"PRIVATE")),qe(new he("heartbeat",(e=>new it(e)),"PRIVATE")),Qe("@firebase/app","0.8.4",at),Qe("@firebase/app","0.8.4","esm2017"),Qe("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Qe("firebase","9.14.0","app");function ct(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;function lt(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ut=lt,dt=new ee("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),ht=new ke("@firebase/auth");function ft(e,...t){ht.logLevel<=ge.ERROR&&ht.error(`Auth (9.14.0): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(e,...t){throw yt(e,...t)}function mt(e,...t){return yt(e,...t)}function gt(e,t,n){const i=Object.assign(Object.assign({},ut()),{[t]:n});return new ee("auth","Firebase",i).create(t,{appName:e.name})}function vt(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&pt(e,"argument-error"),gt(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function yt(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return dt.create(e,...t)}function _t(e,t,...n){if(!e)throw yt(t,...n)}function bt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ft(t),new Error(t)}function wt(e,t){e||bt(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new Map;function It(e){wt(e instanceof Function,"Expected a class definition");let t=kt.get(e);return t?(wt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,kt.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Et(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Tt(){return"http:"===Ot()||"https:"===Ot()}function Ot(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Tt()||q()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St{get(){return xt()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,wt(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(z())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(e,t){wt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Lt=new St(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function $t(e,t,n,i,r={}){return At(e,r,(async()=>{let r={},s={};i&&("GET"===t?s=i:r={body:JSON.stringify(i)});const o=se(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Mt.fetch()(Dt(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function At(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},Pt),t);try{const t=new Ut(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw Ht(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Ht(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Ht(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw Ht(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw gt(e,a,o);pt(e,a)}}catch(t){if(t instanceof Z)throw t;pt(e,"network-request-failed")}}async function Rt(e,t,n,i,r={}){const s=await $t(e,t,n,i,r);return"mfaPendingCredential"in s&&pt(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Dt(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?Ct(e.config,r):`${e.config.apiScheme}://${r}`}class Ut{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(mt(this.auth,"network-request-failed"))),Lt.get())}))}}function Ht(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=mt(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jt(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(e){return 1e3*Number(e)}function Bt(e){var t;const[n,i,r]=e.split(".");if(void 0===n||void 0===i||void 0===r)return ft("JWT malformed, contained fewer than 3 sections"),null;try{const e=V(i);return e?JSON.parse(e):(ft("Failed to decode base64 JWT payload"),null)}catch(e){return ft("Caught error parsing JWT payload as JSON",null===(t=e)||void 0===t?void 0:t.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Wt(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Z&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Vt{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{_initializeTime(){this.lastSignInTime=jt(this.lastLoginAt),this.creationTime=jt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qt(e){var t;const n=e.auth,i=await e.getIdToken(),r=await Wt(e,async function(e,t){return $t(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));_t(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=ct(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,d=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),h=!!u&&d,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new zt(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kt{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_t(e.idToken,"internal-error"),_t(void 0!==e.idToken,"internal-error"),_t(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Bt(e);return _t(t,"internal-error"),_t(void 0!==t.exp,"internal-error"),_t(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return _t(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await At(e,{},(async()=>{const n=se({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,s=Dt(e,i,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Mt.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new Kt;return n&&(_t("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(_t("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(_t("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kt,this.toJSON())}_performRefresh(){return bt("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(e,t){_t("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Jt{async getIdToken(e){const t=await Wt(this,this.stsTokenManager.getToken(this.auth,e));return _t(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=de(e),i=await n.getIdToken(t),r=Bt(i);_t(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:jt(Ft(r.auth_time)),issuedAtTime:jt(Ft(r.iat)),expirationTime:jt(Ft(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=de(e);await qt(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(_t(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){_t(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await qt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Wt(this,async function(e,t){return $t(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(i=t.email)&&void 0!==i?i:void 0,h=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:_,isAnonymous:b,providerData:w,stsTokenManager:k}=t;_t(y&&k,e,"internal-error");const I=Kt.fromJSON(this.name,k);_t("string"==typeof y,e,"internal-error"),Gt(u,e.name),Gt(d,e.name),_t("boolean"==typeof _,e,"internal-error"),_t("boolean"==typeof b,e,"internal-error"),Gt(h,e.name),Gt(f,e.name),Gt(p,e.name),Gt(m,e.name),Gt(g,e.name),Gt(v,e.name);const E=new Jt({uid:y,auth:e,email:d,emailVerified:_,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:I,createdAt:g,lastLoginAt:v});return w&&Array.isArray(w)&&(E.providerData=w.map((e=>Object.assign({},e)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const i=new Kt;i.updateFromServerResponse(t);const r=new Jt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await qt(r),r}constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=ct(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Vt(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new zt(r.createdAt||void 0,r.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}Yt.type="NONE";const Xt=Yt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(e,t,n){return`firebase:${e}:${t}:${n}`}class Zt{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Zt(It(Xt),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||It(Xt);const s=Qt(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const i=Jt._fromJSON(e,t);n!==r&&(o=i),r=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new Zt(r,e,n)):new Zt(r,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=Qt(this.userKey,i.apiKey,r),this.fullPersistenceKey=Qt("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(sn(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(tn(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(an(t))return"Blackberry";if(cn(t))return"Webos";if(nn(t))return"Safari";if((t.includes("chrome/")||rn(t))&&!t.includes("edge/"))return"Chrome";if(on(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function tn(e=z()){return/firefox\//i.test(e)}function nn(e=z()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function rn(e=z()){return/crios\//i.test(e)}function sn(e=z()){return/iemobile/i.test(e)}function on(e=z()){return/android/i.test(e)}function an(e=z()){return/blackberry/i.test(e)}function cn(e=z()){return/webos/i.test(e)}function ln(e=z()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function un(){return K()&&10===document.documentMode}function dn(e=z()){return ln(e)||on(e)||cn(e)||an(e)||/windows phone/i.test(e)||sn(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hn(e,t=[]){let n;switch(e){case"Browser":n=en(z());break;case"Worker":n=`${en(z())}-${e}`;break;default:n=e}return`${n}/JsCore/9.14.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(e){n.reverse();for(const e of n)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=e)||void 0===t?void 0:t.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=It(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Zt.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return _t(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await qt(e)}catch(e){if("auth/network-request-failed"!==(null===(t=e)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?de(e):null;return t&&_t(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_t(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(It(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ee("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&It(e)||this._popupRedirectResolver;_t(t,this,"argument-error"),this.redirectPersistenceManager=await Zt.create(this,[It(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return _t(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _t(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gn(this),this.idTokenSubscription=new gn(this),this.beforeStateQueue=new fn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dt,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function mn(e){return de(e)}class gn{get next(){return _t(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=ce((e=>this.observer=e))}}function vn(e,t,n){const i=mn(e);_t(i._canInitEmulator,i,"emulator-config-failed"),_t(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),s=yn(t),{host:o,port:a}=function(e){const t=yn(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:_n(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:_n(t)}}}(t),c=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function yn(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function _n(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class bn{toJSON(){return bt("not implemented")}_getIdTokenResponse(e){return bt("not implemented")}_linkToIdToken(e,t){return bt("not implemented")}_getReauthenticationResolver(e){return bt("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wn(e,t){return $t(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kn extends bn{static _fromEmailAndPassword(e,t){return new kn(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new kn(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Rt(e,"POST","/v1/accounts:signInWithPassword",Nt(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Rt(e,"POST","/v1/accounts:signInWithEmailLink",Nt(e,t))}(e,{email:this._email,oobCode:this._password});default:pt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return wn(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Rt(e,"POST","/v1/accounts:signInWithEmailLink",Nt(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:pt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(e,t){return Rt(e,"POST","/v1/accounts:signInWithIdp",Nt(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends bn{static _fromParams(e){const t=new En(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):pt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=ct(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new En(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return In(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,In(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,In(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=se(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class On extends bn{static _fromVerification(e,t){return new On({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new On({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Rt(e,"POST","/v1/accounts:signInWithPhoneNumber",Nt(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Rt(e,"POST","/v1/accounts:signInWithPhoneNumber",Nt(e,t));if(n.temporaryProof)throw Ht(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Rt(e,"POST","/v1/accounts:signInWithPhoneNumber",Nt(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Tn)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new On({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{static parseLink(e){const t=function(e){const t=oe(ae(e)).link,n=t?oe(ae(t)).deep_link_id:null,i=oe(ae(e)).deep_link_id;return(i?oe(ae(i)).link:null)||i||n||t||e}(e);try{return new xn(t)}catch(e){return null}}constructor(e){var t,n,i,r,s,o;const a=oe(ae(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);_t(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sn{static credential(e,t){return kn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=xn.parseLink(t);return _t(n,"argument-error"),kn._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=Sn.PROVIDER_ID}}Sn.PROVIDER_ID="password",Sn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Sn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cn{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Cn{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pn extends Mn{static credential(e){return En._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}Pn.FACEBOOK_SIGN_IN_METHOD="facebook.com",Pn.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ln extends Mn{static credential(e,t){return En._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ln.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Ln.GOOGLE_SIGN_IN_METHOD="google.com",Ln.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nn extends Mn{static credential(e){return En._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Nn.GITHUB_SIGN_IN_METHOD="github.com",Nn.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $n extends Mn{static credential(e,t){return En._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return $n.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}$n.TWITTER_SIGN_IN_METHOD="twitter.com",$n.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class An{static async _fromIdTokenResponse(e,t,n,i=!1){const r=await Jt._fromIdTokenResponse(e,n,i),s=Rn(n);return new An({user:r,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Rn(n);return new An({user:e,providerId:i,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function Rn(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dn extends Z{static _fromErrorAndOperation(e,t,n,i){return new Dn(e,t,n,i)}constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Dn.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function Un(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Dn._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hn(e,t,n=!1){const i=await Wt(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return An._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function jn(e,t,n=!1){var i;const{auth:r}=e,s="reauthenticate";try{const i=await Wt(e,Un(r,s,t,e),n);_t(i.idToken,r,"internal-error");const o=Bt(i.idToken);_t(o,r,"internal-error");const{sub:a}=o;return _t(e.uid===a,r,"user-mismatch"),An._forOperation(e,s,i)}catch(e){throw"auth/user-not-found"===(null===(i=e)||void 0===i?void 0:i.code)&&pt(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fn(e,t,n=!1){const i="signIn",r=await Un(e,i,t),s=await An._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function Bn(e,t){return Fn(mn(e),t)}function Wn(e,t,n){return Bn(de(e),Sn.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vn{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Vn{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);un()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=z();return nn(e)||ln(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=dn(),this._shouldAllowMigration=!0}}zn.type="LOCAL";const qn=zn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Vn{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Kn.type="SESSION";const Gn=Kn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jn{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Jn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yn(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jn.receivers=[];class Xn{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const c=Yn("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zn(){return void 0!==Qn().WorkerGlobalScope&&"function"==typeof Qn().importScripts}class ei{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function ti(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function ni(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new ei(e).toPromise()}(),t(await ni()))}))}))}async function ii(e,t,n){const i=ti(e,!0).put({fbase_key:t,value:n});return new ei(i).toPromise()}function ri(e,t){const n=ti(e,!0).delete(t);return new ei(n).toPromise()}class si{async _openDb(){return this.db||(this.db=await ni()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jn._getInstance(Zn()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Xn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ni();return await ii(e,"__sak","1"),await ri(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>ii(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=ti(e,!1).get(t),i=await new ei(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>ri(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=ti(e,!1).getAll();return new ei(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}si.type="LOCAL";const oi=si;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(e){return new Promise(((t,n)=>{const i=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var r,s;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=mt("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(i)}))}function ci(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ci("rcb"),new St(3e4,6e4);async function li(e,t,n){var i;const r=await n.verify();try{let s;if(_t("string"==typeof r,e,"argument-error"),_t("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){_t("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return $t(e,"POST","/v2/accounts/mfaEnrollment:start",Nt(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{_t("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;_t(n,e,"missing-multi-factor-info");const o=await function(e,t){return $t(e,"POST","/v2/accounts/mfaSignIn:start",Nt(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return $t(e,"POST","/v1/accounts:sendVerificationCode",Nt(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ui{verifyPhoneNumber(e,t){return li(this.auth,e,de(t))}static credential(e,t){return On._fromVerification(e,t)}static credentialFromResult(e){const t=e;return ui.credentialFromTaggedObject(t)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?On._fromTokenResponse(t,n):null}constructor(e){this.providerId=ui.PROVIDER_ID,this.auth=mn(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function di(e,t){return t?It(t):(_t(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ui.PROVIDER_ID="phone",ui.PHONE_SIGN_IN_METHOD="phone";class hi extends bn{_getIdTokenResponse(e){return In(e,this._buildIdpRequest())}_linkToIdToken(e,t){return In(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return In(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function fi(e){return Fn(e.auth,new hi(e),e.bypassAuthState)}function pi(e){const{auth:t,user:n}=e;return _t(n,t,"internal-error"),jn(n,new hi(e),e.bypassAuthState)}async function mi(e){const{auth:t,user:n}=e;return _t(n,t,"internal-error"),Hn(n,new hi(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fi;case"linkViaPopup":case"linkViaRedirect":return mi;case"reauthViaPopup":case"reauthViaRedirect":return pi;default:pt(this.auth,"internal-error")}}resolve(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=new St(2e3,1e4);async function yi(e,t,n){const i=mn(e);vt(e,t,Cn);const r=di(i,n);return new _i(i,"signInViaPopup",t,r).executeNotNull()}class _i extends gi{async executeNotNull(){const e=await this.execute();return _t(e,this.auth,"internal-error"),e}async onExecution(){wt(1===this.filter.length,"Popup operations only handle one event");const e=Yn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(mt(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_i.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(mt(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,vi.get())};e()}constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,_i.currentPopupAction&&_i.currentPopupAction.cancel(),_i.currentPopupAction=this}}_i.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bi=new Map;class wi extends gi{async execute(){let e=bi.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Ei(t),i=Ii(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}bi.set(this.auth._key(),e)}return this.bypassAuthState||bi.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function ki(e,t){bi.set(e._key(),t)}function Ii(e){return It(e._redirectPersistence)}function Ei(e){return Qt("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ti(e,t,n=!1){const i=mn(e),r=di(i,t),s=new wi(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}class Oi{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Si(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Si(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(mt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(xi(e))}saveEventToCache(e){this.cachedEventUids.add(xi(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function xi(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Si({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ci=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Mi=/^https?/;async function Pi(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return $t(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Li(e))return}catch(e){}pt(e,"unauthorized-domain")}function Li(e){const t=Et(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Mi.test(n))return!1;if(Ci.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=new St(3e4,6e4);function $i(){const e=Qn().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Ai=null;function Ri(e){return Ai=Ai||function(e){return new Promise(((t,n)=>{var i,r,s;function o(){$i(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{$i(),n(mt(e,"network-request-failed"))},timeout:Ni.get()})}if(null===(r=null===(i=Qn().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Qn().gapi)||void 0===s?void 0:s.load)){const t=ci("iframefcb");return Qn()[t]=()=>{gapi.load?o():n(mt(e,"network-request-failed"))},ai(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Ai=null,e}))}(e),Ai}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=new St(5e3,15e3),Ui={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Hi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ji(e){const t=e.config;_t(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ct(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:"9.14.0"},r=Hi.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${se(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Bi{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function Wi(e,t,n,i=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Fi),{width:i.toString(),height:r.toString(),top:s,left:o}),l=z().toLowerCase();n&&(a=rn(l)?"_blank":n),tn(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=z()){var t;return ln(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new Bi(null);const d=window.open(t||"",a,u);_t(d,e,"popup-blocked");try{d.focus()}catch(e){}return new Bi(d)}function Vi(e,t,n,i,r,s){_t(e.config.authDomain,e,"auth-domain-config-required"),_t(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:"9.14.0",eventId:r};if(t instanceof Cn){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",ne(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Mn){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?Ct(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${se(a).slice(1)}`}const zi=class{async _openPopup(e,t,n,i){var r;wt(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return Wi(e,Vi(e,t,n,Et(),i),Yn())}async _openRedirect(e,t,n,i){var r;return await this._originValidation(e),r=Vi(e,t,n,Et(),i),Qn().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(wt(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Ri(e),n=Qn().gapi;return _t(n,e,"internal-error"),t.open({where:document.body,url:ji(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ui,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=mt(e,"network-request-failed"),s=Qn().setTimeout((()=>{i(r)}),Di.get());function o(){Qn().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{i(r)}))}))))}(e),n=new Oi(e);return t.register("authEvent",(t=>{_t(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&t(!!r),pt(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Pi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return dn()||nn()||ln()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gn,this._completeRedirectFn=Ti,this._overrideRedirectResult=ki}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qi{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_t(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ki=X("authIdTokenMaxAge")||300;let Gi=null;var Ji;Ji="Browser",qe(new he("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:s}=n.options;return((e,n)=>{_t(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),_t(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const i={apiKey:r,authDomain:s,clientPlatform:Ji,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hn(Ji)},o=new pn(e,n,i);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(It);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),qe(new he("auth-internal",(e=>{const t=mn(e.getProvider("auth").getImmediate());return new qi(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Qe("@firebase/auth","0.20.11",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ji)),Qe("@firebase/auth","0.20.11","esm2017");var Yi={};!function(e){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function h(e,t,n){return(h=d()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var r=new(Function.bind.apply(e,i));return n&&u(r,n.prototype),r}).apply(null,arguments)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?f(e):t}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,r=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(i=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(e){r=!0,s=e}finally{try{i||null==a.return||a.return()}finally{if(r)throw s}}return n}}(e,t)||v(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||v(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function _(){}function b(e,t){for(var n in t)e[n]=t[n];return e}function w(e){return e()}function k(){return Object.create(null)}function I(e){e.forEach(w)}function E(e){return"function"==typeof e}function T(e,t){return e!=e?t==t:e!==t||e&&"object"===n(e)||"function"==typeof e}function O(e,t){e.appendChild(t)}function x(e,t,n){e.insertBefore(t,n||null)}function S(e){e.parentNode.removeChild(e)}function C(e){return document.createElement(e)}function M(e){return document.createTextNode(e)}function P(){return M(" ")}function L(){return M("")}function N(e,t,n,i){return e.addEventListener(t,n,i),function(){return e.removeEventListener(t,n,i)}}function $(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function A(e){return Array.from(e.childNodes)}function R(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}var D,U=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;i(this,e),this.a=t,this.e=this.n=null}return s(e,[{key:"m",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.e||(this.e=C(t.nodeName),this.t=t,this.h(e)),this.i(n)}},{key:"h",value:function(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}},{key:"i",value:function(e){for(var t=0;t<this.n.length;t+=1)x(this.t,this.n[t],e)}},{key:"p",value:function(e){this.d(),this.h(e),this.i(this.a)}},{key:"d",value:function(){this.n.forEach(S)}}]),e}();function H(e){D=e}function j(){if(!D)throw new Error("Function called outside component initialization");return D}function F(){var e=j();return function(t,n){var i=e.$$.callbacks[t];if(i){var r=function(e,t){var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(t,n);i.slice().forEach((function(t){t.call(e,r)}))}}}function B(e,t){var n=e.$$.callbacks[t.type];n&&n.slice().forEach((function(e){return e(t)}))}var W=[],V=[],z=[],q=[],K=Promise.resolve(),G=!1;function J(){G||(G=!0,K.then(ee))}function Y(){return J(),K}function X(e){z.push(e)}var Q=!1,Z=new Set;function ee(){if(!Q){Q=!0;do{for(var e=0;e<W.length;e+=1){var t=W[e];H(t),te(t.$$)}for(H(null),W.length=0;V.length;)V.pop()();for(var n=0;n<z.length;n+=1){var i=z[n];Z.has(i)||(Z.add(i),i())}z.length=0}while(W.length);for(;q.length;)q.pop()();G=!1,Q=!1,Z.clear()}}function te(e){if(null!==e.fragment){e.update(),I(e.before_update);var t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(X)}}var ne,ie=new Set;function re(){ne={r:0,c:[],p:ne}}function se(){ne.r||I(ne.c),ne=ne.p}function oe(e,t){e&&e.i&&(ie.delete(e),e.i(t))}function ae(e,t,n,i){if(e&&e.o){if(ie.has(e))return;ie.add(e),ne.c.push((function(){ie.delete(e),i&&(n&&e.d(1),i())})),e.o(t)}}var ce="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:t;function le(e,t){ae(e,1,1,(function(){t.delete(e.key)}))}function ue(e,t,n,i,r,s,o,a,c,l,u,d){for(var h=e.length,f=s.length,p=h,m={};p--;)m[e[p].key]=p;var g=[],v=new Map,y=new Map;for(p=f;p--;){var _=d(r,s,p),b=n(_),w=o.get(b);w?i&&w.p(_,t):(w=l(b,_)).c(),v.set(b,g[p]=w),b in m&&y.set(b,Math.abs(p-m[b]))}var k=new Set,I=new Set;function E(e){oe(e,1),e.m(a,u),o.set(e.key,e),u=e.first,f--}for(;h&&f;){var T=g[f-1],O=e[h-1],x=T.key,S=O.key;T===O?(u=T.first,h--,f--):v.has(S)?!o.has(x)||k.has(x)?E(T):I.has(S)?h--:y.get(x)>y.get(S)?(I.add(x),E(T)):(k.add(S),h--):(c(O,o),h--)}for(;h--;){var C=e[h];v.has(C.key)||c(C,o)}for(;f;)E(g[f-1]);return g}function de(e,t){for(var n={},i={},r={$$scope:1},s=e.length;s--;){var o=e[s],a=t[s];if(a){for(var c in o)c in a||(i[c]=1);for(var l in a)r[l]||(n[l]=a[l],r[l]=1);e[s]=a}else for(var u in o)r[u]=1}for(var d in i)d in n||(n[d]=void 0);return n}function he(e){return"object"===n(e)&&null!==e?e:{}}function fe(e){e&&e.c()}function pe(e,t,n){var i=e.$$,r=i.fragment,s=i.on_mount,o=i.on_destroy,a=i.after_update;r&&r.m(t,n),X((function(){var t=s.map(w).filter(E);o?o.push.apply(o,g(t)):I(t),e.$$.on_mount=[]})),a.forEach(X)}function me(e,t){var n=e.$$;null!==n.fragment&&(I(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ge(e,t){-1===e.$$.dirty[0]&&(W.push(e),J(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}var ve=function(){function e(){i(this,e)}return s(e,[{key:"$destroy",value:function(){me(this,1),this.$destroy=_}},{key:"$on",value:function(e,t){var n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),function(){var e=n.indexOf(t);-1!==e&&n.splice(e,1)}}},{key:"$set",value:function(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}]),e}(),ye=function(){function e(t){if(i(this,e),Object.assign(this,{dir1:null,dir2:null,firstpos1:null,firstpos2:null,spacing1:25,spacing2:25,push:"bottom",maxOpen:1,maxStrategy:"wait",maxClosureCausesWait:!0,modal:"ish",modalishFlash:!0,overlayClose:!0,overlayClosesPinned:!1,positioned:!0,context:window&&document.body||null},t),"ish"===this.modal&&1!==this.maxOpen)throw new Error("A modalish stack must have a maxOpen value of 1.");if("ish"===this.modal&&!this.dir1)throw new Error("A modalish stack must have a direction.");if("top"===this.push&&"ish"===this.modal&&"close"!==this.maxStrategy)throw new Error("A modalish stack that pushes to the top must use the close maxStrategy.");this._noticeHead={notice:null,prev:null,next:null},this._noticeTail={notice:null,prev:this._noticeHead,next:null},this._noticeHead.next=this._noticeTail,this._noticeMap=new WeakMap,this._length=0,this._addpos2=0,this._animation=!0,this._posTimer=null,this._openNotices=0,this._listener=null,this._overlayOpen=!1,this._overlayInserted=!1,this._collapsingModalState=!1,this._leader=null,this._leaderOff=null,this._masking=null,this._maskingOff=null,this._swapping=!1,this._callbacks={}}return s(e,[{key:"forEach",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.start,r=void 0===i?"oldest":i,s=n.dir,o=void 0===s?"newer":s,a=n.skipModuleHandled,c=void 0!==a&&a;if("head"===r||"newest"===r&&"top"===this.push||"oldest"===r&&"bottom"===this.push)t=this._noticeHead.next;else if("tail"===r||"newest"===r&&"bottom"===this.push||"oldest"===r&&"top"===this.push)t=this._noticeTail.prev;else{if(!this._noticeMap.has(r))throw new Error("Invalid start param.");t=this._noticeMap.get(r)}for(;t.notice;){var l=t.notice;if("prev"===o||"top"===this.push&&"newer"===o||"bottom"===this.push&&"older"===o)t=t.prev;else{if(!("next"===o||"top"===this.push&&"older"===o||"bottom"===this.push&&"newer"===o))throw new Error("Invalid dir param.");t=t.next}if(!(c&&l.getModuleHandled()||!1!==e(l)))break}}},{key:"close",value:function(e){this.forEach((function(t){return t.close(e,!1,!1)}))}},{key:"open",value:function(e){this.forEach((function(t){return t.open(e)}))}},{key:"openLast",value:function(){this.forEach((function(e){if(-1===["opening","open","waiting"].indexOf(e.getState()))return e.open(),!1}),{start:"newest",dir:"older"})}},{key:"swap",value:function(e,t){var n=this,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return-1===["open","opening","closing"].indexOf(e.getState())?Promise.reject():(this._swapping=t,e.close(i,!1,r).then((function(){return t.open(i)})).finally((function(){n._swapping=!1})))}},{key:"on",value:function(e,t){var n=this;return e in this._callbacks||(this._callbacks[e]=[]),this._callbacks[e].push(t),function(){n._callbacks[e].splice(n._callbacks[e].indexOf(t),1)}}},{key:"fire",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.stack=this,e in this._callbacks&&this._callbacks[e].forEach((function(e){return e(t)}))}},{key:"position",value:function(){var e=this;this.positioned&&this._length>0?(this.fire("beforePosition"),this._resetPositionData(),this.forEach((function(t){e._positionNotice(t)}),{start:"head",dir:"next",skipModuleHandled:!0}),this.fire("afterPosition")):(delete this._nextpos1,delete this._nextpos2)}},{key:"queuePosition",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;this._posTimer&&clearTimeout(this._posTimer),this._posTimer=setTimeout((function(){return e.position()}),t)}},{key:"_resetPositionData",value:function(){this._nextpos1=this.firstpos1,this._nextpos2=this.firstpos2,this._addpos2=0}},{key:"_positionNotice",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e===this._masking;if(this.positioned){var n=e.refs.elem;if(n&&(n.classList.contains("pnotify-in")||n.classList.contains("pnotify-initial")||t)){var i=[this.firstpos1,this.firstpos2,this._nextpos1,this._nextpos2,this._addpos2],r=i[0],s=i[1],o=i[2],a=i[3],c=i[4];n.getBoundingClientRect(),!this._animation||t||this._collapsingModalState?e._setMoveClass(""):e._setMoveClass("pnotify-move");var l,u=this.context===document.body?window.innerHeight:this.context.scrollHeight,d=this.context===document.body?window.innerWidth:this.context.scrollWidth;if(this.dir1){var h;switch(l={down:"top",up:"bottom",left:"right",right:"left"}[this.dir1],this.dir1){case"down":h=n.offsetTop;break;case"up":h=u-n.scrollHeight-n.offsetTop;break;case"left":h=d-n.scrollWidth-n.offsetLeft;break;case"right":h=n.offsetLeft}null==r&&(o=r=h)}if(this.dir1&&this.dir2){var f,p={down:"top",up:"bottom",left:"right",right:"left"}[this.dir2];switch(this.dir2){case"down":f=n.offsetTop;break;case"up":f=u-n.scrollHeight-n.offsetTop;break;case"left":f=d-n.scrollWidth-n.offsetLeft;break;case"right":f=n.offsetLeft}if(null==s&&(a=s=f),!t){var m=o+n.offsetHeight+this.spacing1,g=o+n.offsetWidth+this.spacing1;(("down"===this.dir1||"up"===this.dir1)&&m>u||("left"===this.dir1||"right"===this.dir1)&&g>d)&&(o=r,a+=c+this.spacing2,c=0)}switch(null!=a&&(n.style[p]="".concat(a,"px"),this._animation||n.style[p]),this.dir2){case"down":case"up":n.offsetHeight+(parseFloat(n.style.marginTop,10)||0)+(parseFloat(n.style.marginBottom,10)||0)>c&&(c=n.offsetHeight);break;case"left":case"right":n.offsetWidth+(parseFloat(n.style.marginLeft,10)||0)+(parseFloat(n.style.marginRight,10)||0)>c&&(c=n.offsetWidth)}}else if(this.dir1){var v,y;switch(this.dir1){case"down":case"up":y=["left","right"],v=this.context.scrollWidth/2-n.offsetWidth/2;break;case"left":case"right":y=["top","bottom"],v=u/2-n.offsetHeight/2}n.style[y[0]]="".concat(v,"px"),n.style[y[1]]="auto",this._animation||n.style[y[0]]}if(this.dir1)switch(null!=o&&(n.style[l]="".concat(o,"px"),this._animation||n.style[l]),this.dir1){case"down":case"up":o+=n.offsetHeight+this.spacing1;break;case"left":case"right":o+=n.offsetWidth+this.spacing1}else{var _=d/2-n.offsetWidth/2,b=u/2-n.offsetHeight/2;n.style.left="".concat(_,"px"),n.style.top="".concat(b,"px"),this._animation||n.style.left}t||(this.firstpos1=r,this.firstpos2=s,this._nextpos1=o,this._nextpos2=a,this._addpos2=c)}}}},{key:"_addNotice",value:function(e){var t=this;this.fire("beforeAddNotice",{notice:e});var n=function(){if(t.fire("beforeOpenNotice",{notice:e}),e.getModuleHandled())t.fire("afterOpenNotice",{notice:e});else{if(t._openNotices++,("ish"!==t.modal||!t._overlayOpen)&&t.maxOpen!==1/0&&t._openNotices>t.maxOpen&&"close"===t.maxStrategy){var n=t._openNotices-t.maxOpen;t.forEach((function(e){if(-1!==["opening","open"].indexOf(e.getState()))return e.close(!1,!1,t.maxClosureCausesWait),e===t._leader&&t._setLeader(null),!!--n}))}!0===t.modal&&t._insertOverlay(),"ish"!==t.modal||t._leader&&-1!==["opening","open","closing"].indexOf(t._leader.getState())||t._setLeader(e),"ish"===t.modal&&t._overlayOpen&&e._preventTimerClose(!0),t.fire("afterOpenNotice",{notice:e})}},i={notice:e,prev:null,next:null,beforeOpenOff:e.on("pnotify:beforeOpen",n),afterCloseOff:e.on("pnotify:afterClose",(function(){if(t.fire("beforeCloseNotice",{notice:e}),e.getModuleHandled())t.fire("afterCloseNotice",{notice:e});else{if(t._openNotices--,"ish"===t.modal&&e===t._leader&&(t._setLeader(null),t._masking&&t._setMasking(null)),!t._swapping&&t.maxOpen!==1/0&&t._openNotices<t.maxOpen){var n=!1,i=function(i){if(i!==e&&"waiting"===i.getState()&&(i.open().catch((function(){})),t._openNotices>=t.maxOpen))return n=!0,!1};"wait"===t.maxStrategy?(t.forEach(i,{start:e,dir:"next"}),n||t.forEach(i,{start:e,dir:"prev"})):"close"===t.maxStrategy&&t.maxClosureCausesWait&&(t.forEach(i,{start:e,dir:"older"}),n||t.forEach(i,{start:e,dir:"newer"}))}t._openNotices<=0?(t._openNotices=0,t._resetPositionData(),t._overlayOpen&&!t._swapping&&t._removeOverlay()):t._collapsingModalState||t.queuePosition(0),t.fire("afterCloseNotice",{notice:e})}}))};if("top"===this.push?(i.next=this._noticeHead.next,i.prev=this._noticeHead,i.next.prev=i,i.prev.next=i):(i.prev=this._noticeTail.prev,i.next=this._noticeTail,i.prev.next=i,i.next.prev=i),this._noticeMap.set(e,i),this._length++,this._listener||(this._listener=function(){return t.position()},this.context.addEventListener("pnotify:position",this._listener)),-1!==["open","opening","closing"].indexOf(e.getState()))n();else if("ish"===this.modal&&this.modalishFlash&&this._shouldNoticeWait(e))var r=e.on("pnotify:mount",(function(){r(),e._setMasking(!0,!1,(function(){e._setMasking(!1)})),t._resetPositionData(),t._positionNotice(t._leader),window.requestAnimationFrame((function(){t._positionNotice(e,!0)}))}));this.fire("afterAddNotice",{notice:e})}},{key:"_removeNotice",value:function(e){if(this._noticeMap.has(e)){this.fire("beforeRemoveNotice",{notice:e});var t=this._noticeMap.get(e);this._leader===e&&this._setLeader(null),this._masking===e&&this._setMasking(null),t.prev.next=t.next,t.next.prev=t.prev,t.prev=null,t.next=null,t.beforeOpenOff(),t.beforeOpenOff=null,t.afterCloseOff(),t.afterCloseOff=null,this._noticeMap.delete(e),this._length--,!this._length&&this._listener&&(this.context.removeEventListener("pnotify:position",this._listener),this._listener=null),!this._length&&this._overlayOpen&&this._removeOverlay(),-1!==["open","opening","closing"].indexOf(e.getState())&&this._handleNoticeClosed(e),this.fire("afterRemoveNotice",{notice:e})}}},{key:"_setLeader",value:function(e){var t=this;if(this.fire("beforeSetLeader",{leader:e}),this._leaderOff&&(this._leaderOff(),this._leaderOff=null),this._leader=e,this._leader){var n,i=function(){var e=null;t._overlayOpen&&(t._collapsingModalState=!0,t.forEach((function(n){n._preventTimerClose(!1),n!==t._leader&&-1!==["opening","open"].indexOf(n.getState())&&(e||(e=n),n.close(n===e,!1,!0))}),{start:t._leader,dir:"next",skipModuleHandled:!0}),t._removeOverlay()),r&&(clearTimeout(r),r=null),t.forEach((function(n){if(n!==t._leader)return"waiting"===n.getState()||n===e?(t._setMasking(n,!!e),!1):void 0}),{start:t._leader,dir:"next",skipModuleHandled:!0})},r=null,s=function(){r&&(clearTimeout(r),r=null),r=setTimeout((function(){r=null,t._setMasking(null)}),750)};this._leaderOff=(n=[this._leader.on("mouseenter",i),this._leader.on("focusin",i),this._leader.on("mouseleave",s),this._leader.on("focusout",s)],function(){return n.map((function(e){return e()}))}),this.fire("afterSetLeader",{leader:e})}else this.fire("afterSetLeader",{leader:e})}},{key:"_setMasking",value:function(e,t){var n=this;if(this._masking){if(this._masking===e)return;this._masking._setMasking(!1,t)}if(this._maskingOff&&(this._maskingOff(),this._maskingOff=null),this._masking=e,this._masking){this._resetPositionData(),this._leader&&this._positionNotice(this._leader),this._masking._setMasking(!0,t),window.requestAnimationFrame((function(){n._masking&&n._positionNotice(n._masking)}));var i,r=function(){"ish"===n.modal&&(n._insertOverlay(),n._setMasking(null,!0),n.forEach((function(e){e._preventTimerClose(!0),"waiting"===e.getState()&&e.open()}),{start:n._leader,dir:"next",skipModuleHandled:!0}))};this._maskingOff=(i=[this._masking.on("mouseenter",r),this._masking.on("focusin",r)],function(){return i.map((function(e){return e()}))})}}},{key:"_shouldNoticeWait",value:function(e){return this._swapping!==e&&!("ish"===this.modal&&this._overlayOpen)&&this.maxOpen!==1/0&&this._openNotices>=this.maxOpen&&"wait"===this.maxStrategy}},{key:"_insertOverlay",value:function(){var e=this;this._overlay||(this._overlay=document.createElement("div"),this._overlay.classList.add("pnotify-modal-overlay"),this.dir1&&this._overlay.classList.add("pnotify-modal-overlay-".concat(this.dir1)),this.overlayClose&&this._overlay.classList.add("pnotify-modal-overlay-closes"),this.context!==document.body&&(this._overlay.style.height="".concat(this.context.scrollHeight,"px"),this._overlay.style.width="".concat(this.context.scrollWidth,"px")),this._overlay.addEventListener("click",(function(t){if(e.overlayClose){if(e.fire("overlayClose",{clickEvent:t}),t.defaultPrevented)return;e._leader&&e._setLeader(null),e.forEach((function(t){-1===["closed","closing","waiting"].indexOf(t.getState())&&(t.hide||e.overlayClosesPinned?t.close():t.hide||"ish"!==e.modal||(e._leader?t.close(!1,!1,!0):e._setLeader(t)))}),{skipModuleHandled:!0}),e._overlayOpen&&e._removeOverlay()}}))),this._overlay.parentNode!==this.context&&(this.fire("beforeAddOverlay"),this._overlay.classList.remove("pnotify-modal-overlay-in"),this._overlay=this.context.insertBefore(this._overlay,this.context.firstChild),this._overlayOpen=!0,this._overlayInserted=!0,window.requestAnimationFrame((function(){e._overlay.classList.add("pnotify-modal-overlay-in"),e.fire("afterAddOverlay")}))),this._collapsingModalState=!1}},{key:"_removeOverlay",value:function(){var e=this;this._overlay.parentNode&&(this.fire("beforeRemoveOverlay"),this._overlay.classList.remove("pnotify-modal-overlay-in"),this._overlayOpen=!1,setTimeout((function(){e._overlayInserted=!1,e._overlay.parentNode&&(e._overlay.parentNode.removeChild(e._overlay),e.fire("afterRemoveOverlay"))}),250),setTimeout((function(){e._collapsingModalState=!1}),400))}},{key:"notices",get:function(){var e=[];return this.forEach((function(t){return e.push(t)})),e}},{key:"length",get:function(){return this._length}},{key:"leader",get:function(){return this._leader}}]),e}(),_e=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return h(Ge,t)},be=ce.Map;function we(e,t,n){var i=e.slice();return i[109]=t[n][0],i[110]=t[n][1],i}function ke(e,t,n){var i=e.slice();return i[109]=t[n][0],i[110]=t[n][1],i}function Ie(e,t,n){var i=e.slice();return i[109]=t[n][0],i[110]=t[n][1],i}function Ee(e,t,n){var i=e.slice();return i[109]=t[n][0],i[110]=t[n][1],i}function Te(e,t){var n,i,r,s,o=[{self:t[42]},t[110]],a=t[109].default;function c(e){for(var t={},n=0;n<o.length;n+=1)t=b(t,o[n]);return{props:t}}return a&&(i=new a(c())),{key:e,first:null,c:function(){n=L(),i&&fe(i.$$.fragment),r=L(),this.first=n},m:function(e,t){x(e,n,t),i&&pe(i,e,t),x(e,r,t),s=!0},p:function(e,t){var n=2176&t[1]?de(o,[2048&t[1]&&{self:e[42]},128&t[1]&&he(e[110])]):{};if(a!==(a=e[109].default)){if(i){re();var s=i;ae(s.$$.fragment,1,0,(function(){me(s,1)})),se()}a?(fe((i=new a(c())).$$.fragment),oe(i.$$.fragment,1),pe(i,r.parentNode,r)):i=null}else a&&i.$set(n)},i:function(e){s||(i&&oe(i.$$.fragment,e),s=!0)},o:function(e){i&&ae(i.$$.fragment,e),s=!1},d:function(e){e&&S(n),e&&S(r),i&&me(i,e)}}}function Oe(e){var t,n,i,r,s,o;return{c:function(){t=C("div"),$(n=C("span"),"class",e[22]("closer")),$(t,"class",i="pnotify-closer ".concat(e[21]("closer")," ").concat(e[17]&&!e[26]||e[28]?"pnotify-hidden":"")),$(t,"role","button"),$(t,"tabindex","0"),$(t,"title",r=e[20].close)},m:function(i,r){x(i,t,r),O(t,n),s||(o=N(t,"click",e[81]),s=!0)},p:function(e,n){335675392&n[0]&&i!==(i="pnotify-closer ".concat(e[21]("closer")," ").concat(e[17]&&!e[26]||e[28]?"pnotify-hidden":""))&&$(t,"class",i),1048576&n[0]&&r!==(r=e[20].close)&&$(t,"title",r)},d:function(e){e&&S(t),s=!1,o()}}}function xe(e){var t,n,i,r,s,o,a,c;return{c:function(){t=C("div"),$(n=C("span"),"class",i="".concat(e[22]("sticker")," ").concat(e[3]?e[22]("unstuck"):e[22]("stuck"))),$(t,"class",r="pnotify-sticker ".concat(e[21]("sticker")," ").concat(e[19]&&!e[26]||e[28]?"pnotify-hidden":"")),$(t,"role","button"),$(t,"aria-pressed",s=!e[3]),$(t,"tabindex","0"),$(t,"title",o=e[3]?e[20].stick:e[20].unstick)},m:function(i,r){x(i,t,r),O(t,n),a||(c=N(t,"click",e[82]),a=!0)},p:function(e,a){8&a[0]&&i!==(i="".concat(e[22]("sticker")," ").concat(e[3]?e[22]("unstuck"):e[22]("stuck")))&&$(n,"class",i),336068608&a[0]&&r!==(r="pnotify-sticker ".concat(e[21]("sticker")," ").concat(e[19]&&!e[26]||e[28]?"pnotify-hidden":""))&&$(t,"class",r),8&a[0]&&s!==(s=!e[3])&&$(t,"aria-pressed",s),1048584&a[0]&&o!==(o=e[3]?e[20].stick:e[20].unstick)&&$(t,"title",o)},d:function(e){e&&S(t),a=!1,c()}}}function Se(e){var t,n,i;return{c:function(){t=C("div"),$(n=C("span"),"class",i=!0===e[13]?e[22](e[4]):e[13]),$(t,"class","pnotify-icon ".concat(e[21]("icon")))},m:function(i,r){x(i,t,r),O(t,n),e[83](t)},p:function(e,t){8208&t[0]&&i!==(i=!0===e[13]?e[22](e[4]):e[13])&&$(n,"class",i)},d:function(n){n&&S(t),e[83](null)}}}function Ce(e,t){var n,i,r,s,o=[{self:t[42]},t[110]],a=t[109].default;function c(e){for(var t={},n=0;n<o.length;n+=1)t=b(t,o[n]);return{props:t}}return a&&(i=new a(c())),{key:e,first:null,c:function(){n=L(),i&&fe(i.$$.fragment),r=L(),this.first=n},m:function(e,t){x(e,n,t),i&&pe(i,e,t),x(e,r,t),s=!0},p:function(e,t){var n=2304&t[1]?de(o,[2048&t[1]&&{self:e[42]},256&t[1]&&he(e[110])]):{};if(a!==(a=e[109].default)){if(i){re();var s=i;ae(s.$$.fragment,1,0,(function(){me(s,1)})),se()}a?(fe((i=new a(c())).$$.fragment),oe(i.$$.fragment,1),pe(i,r.parentNode,r)):i=null}else a&&i.$set(n)},i:function(e){s||(i&&oe(i.$$.fragment,e),s=!0)},o:function(e){i&&ae(i.$$.fragment,e),s=!1},d:function(e){e&&S(n),e&&S(r),i&&me(i,e)}}}function Me(e){var t,n=!e[34]&&Pe(e);return{c:function(){t=C("div"),n&&n.c(),$(t,"class","pnotify-title ".concat(e[21]("title")))},m:function(i,r){x(i,t,r),n&&n.m(t,null),e[84](t)},p:function(e,i){e[34]?n&&(n.d(1),n=null):n?n.p(e,i):((n=Pe(e)).c(),n.m(t,null))},d:function(i){i&&S(t),n&&n.d(),e[84](null)}}}function Pe(e){var t;function n(e,t){return e[6]?Ne:Le}var i=n(e),r=i(e);return{c:function(){r.c(),t=L()},m:function(e,n){r.m(e,n),x(e,t,n)},p:function(e,s){i===(i=n(e))&&r?r.p(e,s):(r.d(1),(r=i(e))&&(r.c(),r.m(t.parentNode,t)))},d:function(e){r.d(e),e&&S(t)}}}function Le(e){var t,n;return{c:function(){t=C("span"),n=M(e[5]),$(t,"class","pnotify-pre-line")},m:function(e,i){x(e,t,i),O(t,n)},p:function(e,t){32&t[0]&&R(n,e[5])},d:function(e){e&&S(t)}}}function Ne(e){var t,n;return{c:function(){n=L(),t=new U(n)},m:function(i,r){t.m(e[5],i,r),x(i,n,r)},p:function(e,n){32&n[0]&&t.p(e[5])},d:function(e){e&&S(n),e&&t.d()}}}function $e(e){var t,n,i=!e[35]&&Ae(e);return{c:function(){t=C("div"),i&&i.c(),$(t,"class",n="pnotify-text ".concat(e[21]("text")," ").concat(""===e[33]?"":"pnotify-text-with-max-height")),$(t,"style",e[33]),$(t,"role","alert")},m:function(n,r){x(n,t,r),i&&i.m(t,null),e[85](t)},p:function(e,r){e[35]?i&&(i.d(1),i=null):i?i.p(e,r):((i=Ae(e)).c(),i.m(t,null)),4&r[1]&&n!==(n="pnotify-text ".concat(e[21]("text")," ").concat(""===e[33]?"":"pnotify-text-with-max-height"))&&$(t,"class",n),4&r[1]&&$(t,"style",e[33])},d:function(n){n&&S(t),i&&i.d(),e[85](null)}}}function Ae(e){var t;function n(e,t){return e[8]?De:Re}var i=n(e),r=i(e);return{c:function(){r.c(),t=L()},m:function(e,n){r.m(e,n),x(e,t,n)},p:function(e,s){i===(i=n(e))&&r?r.p(e,s):(r.d(1),(r=i(e))&&(r.c(),r.m(t.parentNode,t)))},d:function(e){r.d(e),e&&S(t)}}}function Re(e){var t,n;return{c:function(){t=C("span"),n=M(e[7]),$(t,"class","pnotify-pre-line")},m:function(e,i){x(e,t,i),O(t,n)},p:function(e,t){128&t[0]&&R(n,e[7])},d:function(e){e&&S(t)}}}function De(e){var t,n;return{c:function(){n=L(),t=new U(n)},m:function(i,r){t.m(e[7],i,r),x(i,n,r)},p:function(e,n){128&n[0]&&t.p(e[7])},d:function(e){e&&S(n),e&&t.d()}}}function Ue(e,t){var n,i,r,s,o=[{self:t[42]},t[110]],a=t[109].default;function c(e){for(var t={},n=0;n<o.length;n+=1)t=b(t,o[n]);return{props:t}}return a&&(i=new a(c())),{key:e,first:null,c:function(){n=L(),i&&fe(i.$$.fragment),r=L(),this.first=n},m:function(e,t){x(e,n,t),i&&pe(i,e,t),x(e,r,t),s=!0},p:function(e,t){var n=2560&t[1]?de(o,[2048&t[1]&&{self:e[42]},512&t[1]&&he(e[110])]):{};if(a!==(a=e[109].default)){if(i){re();var s=i;ae(s.$$.fragment,1,0,(function(){me(s,1)})),se()}a?(fe((i=new a(c())).$$.fragment),oe(i.$$.fragment,1),pe(i,r.parentNode,r)):i=null}else a&&i.$set(n)},i:function(e){s||(i&&oe(i.$$.fragment,e),s=!0)},o:function(e){i&&ae(i.$$.fragment,e),s=!1},d:function(e){e&&S(n),e&&S(r),i&&me(i,e)}}}function He(e,t){var n,i,r,s,o=[{self:t[42]},t[110]],a=t[109].default;function c(e){for(var t={},n=0;n<o.length;n+=1)t=b(t,o[n]);return{props:t}}return a&&(i=new a(c())),{key:e,first:null,c:function(){n=L(),i&&fe(i.$$.fragment),r=L(),this.first=n},m:function(e,t){x(e,n,t),i&&pe(i,e,t),x(e,r,t),s=!0},p:function(e,t){var n=3072&t[1]?de(o,[2048&t[1]&&{self:e[42]},1024&t[1]&&he(e[110])]):{};if(a!==(a=e[109].default)){if(i){re();var s=i;ae(s.$$.fragment,1,0,(function(){me(s,1)})),se()}a?(fe((i=new a(c())).$$.fragment),oe(i.$$.fragment,1),pe(i,r.parentNode,r)):i=null}else a&&i.$set(n)},i:function(e){s||(i&&oe(i.$$.fragment,e),s=!0)},o:function(e){i&&ae(i.$$.fragment,e),s=!1},d:function(e){e&&S(n),e&&S(r),i&&me(i,e)}}}function je(e){for(var t,n,i,r,s,o,a,c,l,u,d,h,f,p,m,g,v,y=[],b=new be,w=[],k=new be,T=[],M=new be,L=[],A=new be,R=e[38],D=function(e){return e[109]},U=0;U<R.length;U+=1){var H=Ee(e,R,U),j=D(H);b.set(j,y[U]=Te(j,H))}for(var F=e[16]&&!e[36]&&Oe(e),B=e[18]&&!e[36]&&xe(e),W=!1!==e[13]&&Se(e),V=e[39],z=function(e){return e[109]},q=0;q<V.length;q+=1){var K=Ie(e,V,q),G=z(K);k.set(G,w[q]=Ce(G,K))}for(var J=!1!==e[5]&&Me(e),Y=!1!==e[7]&&$e(e),X=e[40],Q=function(e){return e[109]},Z=0;Z<X.length;Z+=1){var ee=ke(e,X,Z),te=Q(ee);M.set(te,T[Z]=Ue(te,ee))}for(var ne=e[41],ie=function(e){return e[109]},ce=0;ce<ne.length;ce+=1){var de=we(e,ne,ce),he=ie(de);A.set(he,L[ce]=He(he,de))}return{c:function(){t=C("div"),n=C("div");for(var m=0;m<y.length;m+=1)y[m].c();i=P(),F&&F.c(),r=P(),B&&B.c(),s=P(),W&&W.c(),o=P(),a=C("div");for(var g=0;g<w.length;g+=1)w[g].c();c=P(),J&&J.c(),l=P(),Y&&Y.c(),u=P();for(var v=0;v<T.length;v+=1)T[v].c();d=P();for(var _=0;_<L.length;_+=1)L[_].c();$(a,"class","pnotify-content ".concat(e[21]("content"))),$(n,"class",h="pnotify-container ".concat(e[21]("container")," ").concat(e[21](e[4])," ").concat(e[15]?"pnotify-shadow":""," ").concat(e[27].container.join(" "))),$(n,"style",f="".concat(e[31]," ").concat(e[32])),$(n,"role","alert"),$(t,"data-pnotify",""),$(t,"class",p="pnotify ".concat(!e[0]||e[0].positioned?"pnotify-positioned":""," ").concat(!1!==e[13]?"pnotify-with-icon":""," ").concat(e[21]("elem")," pnotify-mode-").concat(e[9]," ").concat(e[10]," ").concat(e[24]," ").concat(e[25]," ").concat(e[37]," ").concat("fade"===e[2]?"pnotify-fade-".concat(e[14]):""," ").concat(e[30]?"pnotify-modal ".concat(e[11]):e[12]," ").concat(e[28]?"pnotify-masking":""," ").concat(e[29]?"pnotify-masking-in":""," ").concat(e[27].elem.join(" "))),$(t,"aria-live","assertive"),$(t,"role","alertdialog")},m:function(h,f){x(h,t,f),O(t,n);for(var p=0;p<y.length;p+=1)y[p].m(n,null);O(n,i),F&&F.m(n,null),O(n,r),B&&B.m(n,null),O(n,s),W&&W.m(n,null),O(n,o),O(n,a);for(var b=0;b<w.length;b+=1)w[b].m(a,null);O(a,c),J&&J.m(a,null),O(a,l),Y&&Y.m(a,null),O(a,u);for(var k=0;k<T.length;k+=1)T[k].m(a,null);e[86](a),O(n,d);for(var I=0;I<L.length;I+=1)L[I].m(n,null);var S;e[87](n),e[88](t),m=!0,g||(v=[(S=e[43].call(null,t),S&&E(S.destroy)?S.destroy:_),N(t,"mouseenter",e[44]),N(t,"mouseleave",e[45]),N(t,"focusin",e[44]),N(t,"focusout",e[45])],g=!0)},p:function(e,d){if(2176&d[1]){var g=e[38];re(),y=ue(y,d,D,1,e,g,b,n,le,Te,i,Ee),se()}if(e[16]&&!e[36]?F?F.p(e,d):((F=Oe(e)).c(),F.m(n,r)):F&&(F.d(1),F=null),e[18]&&!e[36]?B?B.p(e,d):((B=xe(e)).c(),B.m(n,s)):B&&(B.d(1),B=null),!1!==e[13]?W?W.p(e,d):((W=Se(e)).c(),W.m(n,o)):W&&(W.d(1),W=null),2304&d[1]){var v=e[39];re(),w=ue(w,d,z,1,e,v,k,a,le,Ce,c,Ie),se()}if(!1!==e[5]?J?J.p(e,d):((J=Me(e)).c(),J.m(a,l)):J&&(J.d(1),J=null),!1!==e[7]?Y?Y.p(e,d):((Y=$e(e)).c(),Y.m(a,u)):Y&&(Y.d(1),Y=null),2560&d[1]){var _=e[40];re(),T=ue(T,d,Q,1,e,_,M,a,le,Ue,null,ke),se()}if(3072&d[1]){var I=e[41];re(),L=ue(L,d,ie,1,e,I,A,n,le,He,null,we),se()}(!m||134250512&d[0]&&h!==(h="pnotify-container ".concat(e[21]("container")," ").concat(e[21](e[4])," ").concat(e[15]?"pnotify-shadow":""," ").concat(e[27].container.join(" "))))&&$(n,"class",h),(!m||3&d[1]&&f!==(f="".concat(e[31]," ").concat(e[32])))&&$(n,"style",f),(!m||2063629829&d[0]|64&d[1]&&p!==(p="pnotify ".concat(!e[0]||e[0].positioned?"pnotify-positioned":""," ").concat(!1!==e[13]?"pnotify-with-icon":""," ").concat(e[21]("elem")," pnotify-mode-").concat(e[9]," ").concat(e[10]," ").concat(e[24]," ").concat(e[25]," ").concat(e[37]," ").concat("fade"===e[2]?"pnotify-fade-".concat(e[14]):""," ").concat(e[30]?"pnotify-modal ".concat(e[11]):e[12]," ").concat(e[28]?"pnotify-masking":""," ").concat(e[29]?"pnotify-masking-in":""," ").concat(e[27].elem.join(" "))))&&$(t,"class",p)},i:function(e){if(!m){for(var t=0;t<R.length;t+=1)oe(y[t]);for(var n=0;n<V.length;n+=1)oe(w[n]);for(var i=0;i<X.length;i+=1)oe(T[i]);for(var r=0;r<ne.length;r+=1)oe(L[r]);m=!0}},o:function(e){for(var t=0;t<y.length;t+=1)ae(y[t]);for(var n=0;n<w.length;n+=1)ae(w[n]);for(var i=0;i<T.length;i+=1)ae(T[i]);for(var r=0;r<L.length;r+=1)ae(L[r]);m=!1},d:function(n){n&&S(t);for(var i=0;i<y.length;i+=1)y[i].d();F&&F.d(),B&&B.d(),W&&W.d();for(var r=0;r<w.length;r+=1)w[r].d();J&&J.d(),Y&&Y.d();for(var s=0;s<T.length;s+=1)T[s].d();e[86](null);for(var o=0;o<L.length;o+=1)L[o].d();e[87](null),e[88](null),g=!1,I(v)}}}function Fe(e,t){"object"!==n(e)&&(e={text:e}),t&&(e.type=t);var i=document.body;return"stack"in e&&e.stack&&e.stack.context&&(i=e.stack.context),{target:i,props:e}}var Be,We=new ye({dir1:"down",dir2:"left",firstpos1:25,firstpos2:25,spacing1:36,spacing2:36,push:"bottom"}),Ve=new Map,ze={type:"notice",title:!1,titleTrusted:!1,text:!1,textTrusted:!1,styling:"brighttheme",icons:"brighttheme",mode:"no-preference",addClass:"",addModalClass:"",addModelessClass:"",autoOpen:!0,width:"360px",minHeight:"16px",maxTextHeight:"200px",icon:!0,animation:"fade",animateSpeed:"normal",shadow:!0,hide:!0,delay:8e3,mouseReset:!0,closer:!0,closerHover:!0,sticker:!0,stickerHover:!0,labels:{close:"Close",stick:"Pin",unstick:"Unpin"},remove:!0,destroy:!0,stack:We,modules:Ve};function qe(){We.context||(We.context=document.body),window.addEventListener("resize",(function(){Be&&clearTimeout(Be),Be=setTimeout((function(){var e=new Event("pnotify:position");document.body.dispatchEvent(e),Be=null}),10)}))}function Ke(e,t,n){var i=j(),r=F(),s=function(e){var t=["focus","blur","fullscreenchange","fullscreenerror","scroll","cut","copy","paste","keydown","keypress","keyup","auxclick","click","contextmenu","dblclick","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseout","mouseup","pointerlockchange","pointerlockerror","select","wheel","drag","dragend","dragenter","dragstart","dragleave","dragover","drop","touchcancel","touchend","touchmove","touchstart","pointerover","pointerenter","pointerdown","pointermove","pointerup","pointercancel","pointerout","pointerleave","gotpointercapture","lostpointercapture"].concat(g(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]));function n(t){B(e,t)}return function(e){for(var i=[],r=0;r<t.length;r++)i.push(N(e,t[r],n));return{destroy:function(){for(var e=0;e<i.length;e++)i[e]()}}}}(i,["pnotify:init","pnotify:mount","pnotify:update","pnotify:beforeOpen","pnotify:afterOpen","pnotify:enterModal","pnotify:leaveModal","pnotify:beforeClose","pnotify:afterClose","pnotify:beforeDestroy","pnotify:afterDestroy","focusin","focusout","animationend","transitionend"]),o=t.modules,a=void 0===o?new Map(ze.modules):o,l=t.stack,u=void 0===l?ze.stack:l,d={elem:null,container:null,content:null,iconContainer:null,titleContainer:null,textContainer:null},h=c({},ze);Je("init",{notice:i,defaults:h});var f,p=t.type,v=void 0===p?h.type:p,y=t.title,_=void 0===y?h.title:y,b=t.titleTrusted,w=void 0===b?h.titleTrusted:b,k=t.text,I=void 0===k?h.text:k,E=t.textTrusted,T=void 0===E?h.textTrusted:E,O=t.styling,x=void 0===O?h.styling:O,S=t.icons,C=void 0===S?h.icons:S,M=t.mode,P=void 0===M?h.mode:M,L=t.addClass,$=void 0===L?h.addClass:L,A=t.addModalClass,R=void 0===A?h.addModalClass:A,D=t.addModelessClass,U=void 0===D?h.addModelessClass:D,H=t.autoOpen,W=void 0===H?h.autoOpen:H,z=t.width,q=void 0===z?h.width:z,K=t.minHeight,G=void 0===K?h.minHeight:K,J=t.maxTextHeight,X=void 0===J?h.maxTextHeight:J,Q=t.icon,Z=void 0===Q?h.icon:Q,ee=t.animation,te=void 0===ee?h.animation:ee,ne=t.animateSpeed,ie=void 0===ne?h.animateSpeed:ne,re=t.shadow,se=void 0===re?h.shadow:re,oe=t.hide,ae=void 0===oe?h.hide:oe,ce=t.delay,le=void 0===ce?h.delay:ce,ue=t.mouseReset,de=void 0===ue?h.mouseReset:ue,he=t.closer,fe=void 0===he?h.closer:he,pe=t.closerHover,me=void 0===pe?h.closerHover:pe,ge=t.sticker,ve=void 0===ge?h.sticker:ge,ye=t.stickerHover,_e=void 0===ye?h.stickerHover:ye,be=t.labels,we=void 0===be?h.labels:be,ke=t.remove,Ie=void 0===ke?h.remove:ke,Ee=t.destroy,Te=void 0===Ee?h.destroy:Ee,Oe="closed",xe=null,Se=null,Ce=null,Me=!1,Pe="",Le="",Ne=!1,$e=!1,Ae={elem:[],container:[]},Re=!1,De=!1,Ue=!1,He=!1,je=null,Fe=ae,Be=null,We=null,Ve=u&&(!0===u.modal||"ish"===u.modal&&"prevented"===xe),qe=NaN,Ke=null,Ge=null;function Je(e){var t=c({notice:i},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{});"init"===e&&Array.from(a).forEach((function(e){var n=m(e,2),i=n[0];return n[1],"init"in i&&i.init(t)}));var n=d.elem||u&&u.context||document.body;if(!n)return r("pnotify:".concat(e),t),!0;var s=new Event("pnotify:".concat(e),{bubbles:"init"===e||"mount"===e,cancelable:e.startsWith("before")});return s.detail=t,n.dispatchEvent(s),!s.defaultPrevented}function Ye(){var e=u&&u.context||document.body;if(!e)throw new Error("No context to insert this notice into.");if(!d.elem)throw new Error("Trying to insert notice before element is available.");d.elem.parentNode!==e&&e.appendChild(d.elem)}function Xe(){d.elem&&d.elem.parentNode.removeChild(d.elem)}f=function(){Je("mount"),W&&ut().catch((function(){}))},j().$$.on_mount.push(f),function(e){j().$$.before_update.push(e)}((function(){Je("update"),"closed"!==Oe&&"waiting"!==Oe&&ae!==Fe&&(ae?Fe||yt():vt()),"closed"!==Oe&&"closing"!==Oe&&u&&!u._collapsingModalState&&u.queuePosition(),Fe=ae}));var Qe,Ze,et,tt,nt,it,rt,st,ot,at,ct,lt=t.open,ut=void 0===lt?function(e){if("opening"===Oe)return Be;if("open"===Oe)return ae&&yt(),Promise.resolve();if(!Re&&u&&u._shouldNoticeWait(i))return Oe="waiting",Promise.reject();if(!Je("beforeOpen",{immediate:e}))return Promise.reject();var t,r;Oe="opening",n(28,Ue=!1),n(24,Pe="pnotify-initial pnotify-hidden");var s=new Promise((function(e,n){t=e,r=n}));Be=s;var o=function(){ae&&yt(),Oe="open",Je("afterOpen",{immediate:e}),Be=null,t()};return De?(o(),Promise.resolve()):(Ye(),window.requestAnimationFrame((function(){if("opening"!==Oe)return r(),void(Be=null);u&&(n(0,u._animation=!1,u),"top"===u.push&&u._resetPositionData(),u._positionNotice(i),u.queuePosition(0),n(0,u._animation=!0,u)),pt(o,e)})),s)}:lt,dt=t.close,ht=void 0===dt?function(e,t,r){if("closing"===Oe)return We;if("closed"===Oe)return Promise.resolve();var s,o=function(){Je("beforeDestroy")&&(u&&u._removeNotice(i),i.$destroy(),Je("afterDestroy"))};if("waiting"===Oe)return r||(Oe="closed",Te&&!r&&o()),Promise.resolve();if(!Je("beforeClose",{immediate:e,timerHide:t,waitAfterward:r}))return Promise.reject();Oe="closing",Ne=!!t,xe&&"prevented"!==xe&&clearTimeout&&clearTimeout(xe),xe=null;var a=new Promise((function(e,t){s=e}));return We=a,gt((function(){n(26,$e=!1),Ne=!1,Oe=r?"waiting":"closed",Je("afterClose",{immediate:e,timerHide:t,waitAfterward:r}),We=null,s(),r||(Te?o():Ie&&Xe())}),e),a}:dt,ft=t.animateIn,pt=void 0===ft?function(e,t){Me="in";var i=function t(n){if(!(n&&d.elem&&n.target!==d.elem||(d.elem&&d.elem.removeEventListener("transitionend",t),Se&&clearTimeout(Se),"in"!==Me))){var i=De;if(!i&&d.elem){var r=d.elem.getBoundingClientRect();for(var s in r)if(r[s]>0){i=!0;break}}i?(e&&e.call(),Me=!1):Se=setTimeout(t,40)}};if("fade"!==te||t){var r=te;n(2,te="none"),n(24,Pe="pnotify-in ".concat("fade"===r?"pnotify-fade-in":"")),Y().then((function(){n(2,te=r),i()}))}else d.elem&&d.elem.addEventListener("transitionend",i),n(24,Pe="pnotify-in"),Y().then((function(){n(24,Pe="pnotify-in pnotify-fade-in"),Se=setTimeout(i,650)}))}:ft,mt=t.animateOut,gt=void 0===mt?function(e,t){Me="out";var i=function t(i){if(!(i&&d.elem&&i.target!==d.elem||(d.elem&&d.elem.removeEventListener("transitionend",t),Ce&&clearTimeout(Ce),"out"!==Me))){var r=De;if(!r&&d.elem){var s=d.elem.getBoundingClientRect();for(var o in s)if(s[o]>0){r=!0;break}}d.elem&&d.elem.style.opacity&&"0"!==d.elem.style.opacity&&r?Ce=setTimeout(t,40):(n(24,Pe=""),e&&e.call(),Me=!1)}};"fade"!==te||t?(n(24,Pe=""),Y().then((function(){i()}))):(d.elem&&d.elem.addEventListener("transitionend",i),n(24,Pe="pnotify-in"),Ce=setTimeout(i,650))}:mt;function vt(){xe&&"prevented"!==xe&&(clearTimeout(xe),xe=null),Ce&&clearTimeout(Ce),"closing"===Oe&&(Oe="open",Me=!1,n(24,Pe="fade"===te?"pnotify-in pnotify-fade-in":"pnotify-in"))}function yt(){"prevented"!==xe&&(vt(),le!==1/0&&(xe=setTimeout((function(){return ht(!1,!0)}),isNaN(le)?0:le)))}return e.$$set=function(e){"modules"in e&&n(46,a=e.modules),"stack"in e&&n(0,u=e.stack),"type"in e&&n(4,v=e.type),"title"in e&&n(5,_=e.title),"titleTrusted"in e&&n(6,w=e.titleTrusted),"text"in e&&n(7,I=e.text),"textTrusted"in e&&n(8,T=e.textTrusted),"styling"in e&&n(47,x=e.styling),"icons"in e&&n(48,C=e.icons),"mode"in e&&n(9,P=e.mode),"addClass"in e&&n(10,$=e.addClass),"addModalClass"in e&&n(11,R=e.addModalClass),"addModelessClass"in e&&n(12,U=e.addModelessClass),"autoOpen"in e&&n(49,W=e.autoOpen),"width"in e&&n(50,q=e.width),"minHeight"in e&&n(51,G=e.minHeight),"maxTextHeight"in e&&n(52,X=e.maxTextHeight),"icon"in e&&n(13,Z=e.icon),"animation"in e&&n(2,te=e.animation),"animateSpeed"in e&&n(14,ie=e.animateSpeed),"shadow"in e&&n(15,se=e.shadow),"hide"in e&&n(3,ae=e.hide),"delay"in e&&n(53,le=e.delay),"mouseReset"in e&&n(54,de=e.mouseReset),"closer"in e&&n(16,fe=e.closer),"closerHover"in e&&n(17,me=e.closerHover),"sticker"in e&&n(18,ve=e.sticker),"stickerHover"in e&&n(19,_e=e.stickerHover),"labels"in e&&n(20,we=e.labels),"remove"in e&&n(55,Ie=e.remove),"destroy"in e&&n(56,Te=e.destroy),"open"in e&&n(59,ut=e.open),"close"in e&&n(23,ht=e.close),"animateIn"in e&&n(60,pt=e.animateIn),"animateOut"in e&&n(61,gt=e.animateOut)},e.$$.update=function(){524288&e.$$.dirty[1]&&n(31,Qe="string"==typeof q?"width: ".concat(q,";"):""),1048576&e.$$.dirty[1]&&n(32,Ze="string"==typeof G?"min-height: ".concat(G,";"):""),2097152&e.$$.dirty[1]&&n(33,et="string"==typeof X?"max-height: ".concat(X,";"):""),32&e.$$.dirty[0]&&n(34,tt=_ instanceof HTMLElement),128&e.$$.dirty[0]&&n(35,nt=I instanceof HTMLElement),1&e.$$.dirty[0]|1792&e.$$.dirty[3]&&qe!==u&&(qe&&(qe._removeNotice(i),n(30,Ve=!1),Ke(),Ge()),u&&(u._addNotice(i),n(102,Ke=u.on("beforeAddOverlay",(function(){n(30,Ve=!0),Je("enterModal")}))),n(103,Ge=u.on("afterRemoveOverlay",(function(){n(30,Ve=!1),Je("leaveModal")})))),n(101,qe=u)),1073748992&e.$$.dirty[0]&&n(36,it=$.match(/\bnonblock\b/)||R.match(/\bnonblock\b/)&&Ve||U.match(/\bnonblock\b/)&&!Ve),1&e.$$.dirty[0]&&n(37,rt=u&&u.dir1?"pnotify-stack-".concat(u.dir1):""),32768&e.$$.dirty[1]&&n(38,st=Array.from(a).filter((function(e){var t=m(e,2),n=t[0];return t[1],"PrependContainer"===n.position}))),32768&e.$$.dirty[1]&&n(39,ot=Array.from(a).filter((function(e){var t=m(e,2),n=t[0];return t[1],"PrependContent"===n.position}))),32768&e.$$.dirty[1]&&n(40,at=Array.from(a).filter((function(e){var t=m(e,2),n=t[0];return t[1],"AppendContent"===n.position}))),32768&e.$$.dirty[1]&&n(41,ct=Array.from(a).filter((function(e){var t=m(e,2),n=t[0];return t[1],"AppendContainer"===n.position}))),34&e.$$.dirty[0]|8&e.$$.dirty[1]&&tt&&d.titleContainer&&d.titleContainer.appendChild(_),130&e.$$.dirty[0]|16&e.$$.dirty[1]&&nt&&d.textContainer&&d.textContainer.appendChild(I)},[u,d,te,ae,v,_,w,I,T,P,$,R,U,Z,ie,se,fe,me,ve,_e,we,function(e){return"string"==typeof x?"".concat(x,"-").concat(e):e in x?x[e]:"".concat(x.prefix,"-").concat(e)},function(e){return"string"==typeof C?"".concat(C,"-icon-").concat(e):e in C?C[e]:"".concat(C.prefix,"-icon-").concat(e)},ht,Pe,Le,$e,Ae,Ue,He,Ve,Qe,Ze,et,tt,nt,it,rt,st,ot,at,ct,i,s,function(e){if(n(26,$e=!0),de&&"closing"===Oe){if(!Ne)return;vt()}ae&&de&&vt()},function(e){n(26,$e=!1),ae&&de&&"out"!==Me&&-1!==["open","opening"].indexOf(Oe)&&yt()},a,x,C,W,q,G,X,le,de,Ie,Te,function(){return Oe},function(){return xe},ut,pt,gt,vt,yt,function(e){e?(vt(),xe="prevented"):"prevented"===xe&&(xe=null,"open"===Oe&&ae&&yt())},function(){return i.$on.apply(i,arguments)},function(){return i.$set.apply(i,arguments)},function(e,t){r(e,t)},function(e){for(var t=0;t<(arguments.length<=1?0:arguments.length-1);t++){var i=t+1<1||arguments.length<=t+1?void 0:arguments[t+1];-1===Ae[e].indexOf(i)&&Ae[e].push(i)}n(27,Ae)},function(e){for(var t=0;t<(arguments.length<=1?0:arguments.length-1);t++){var i=t+1<1||arguments.length<=t+1?void 0:arguments[t+1],r=Ae[e].indexOf(i);-1!==r&&Ae[e].splice(r,1)}n(27,Ae)},function(e){for(var t=0;t<(arguments.length<=1?0:arguments.length-1);t++){var n=t+1<1||arguments.length<=t+1?void 0:arguments[t+1];if(-1===Ae[e].indexOf(n))return!1}return!0},function(){return Re},function(e){return Re=e},function(){return De},function(e){return De=e},function(e){return Me=e},function(){return Pe},function(e){return n(24,Pe=e)},function(){return Le},function(e){return n(25,Le=e)},function(e,t,i){if(je&&clearTimeout(je),Ue!==e)if(e)n(28,Ue=!0),n(29,He=!!t),Ye(),Y().then((function(){window.requestAnimationFrame((function(){if(Ue)if(t&&i)i();else{n(29,He=!0);var e=function e(){d.elem&&d.elem.removeEventListener("transitionend",e),je&&clearTimeout(je),He&&i&&i()};d.elem&&d.elem.addEventListener("transitionend",e),je=setTimeout(e,650)}}))}));else if(t)n(28,Ue=!1),n(29,He=!1),Ie&&-1===["open","opening","closing"].indexOf(Oe)&&Xe(),i&&i();else{var r=function e(){d.elem&&d.elem.removeEventListener("transitionend",e),je&&clearTimeout(je),He||(n(28,Ue=!1),Ie&&-1===["open","opening","closing"].indexOf(Oe)&&Xe(),i&&i())};n(29,He=!1),d.elem&&d.elem.addEventListener("transitionend",r),d.elem&&d.elem.style.opacity,je=setTimeout(r,650)}},function(){return ht(!1)},function(){return n(3,ae=!ae)},function(e){V[e?"unshift":"push"]((function(){d.iconContainer=e,n(1,d)}))},function(e){V[e?"unshift":"push"]((function(){d.titleContainer=e,n(1,d)}))},function(e){V[e?"unshift":"push"]((function(){d.textContainer=e,n(1,d)}))},function(e){V[e?"unshift":"push"]((function(){d.content=e,n(1,d)}))},function(e){V[e?"unshift":"push"]((function(){d.container=e,n(1,d)}))},function(e){V[e?"unshift":"push"]((function(){d.elem=e,n(1,d)}))}]}window&&document.body?qe():document.addEventListener("DOMContentLoaded",qe);var Ge=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(o,e);var t,n,r=(t=o,n=d(),function(){var e,i=l(t);if(n){var r=l(this).constructor;e=Reflect.construct(i,arguments,r)}else e=i.apply(this,arguments);return p(this,e)});function o(e){var t;return i(this,o),function(e,t,n,i,r,s){var o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],a=D;H(e);var c=t.props||{},l=e.$$={fragment:null,ctx:null,props:s,update:_,not_equal:r,bound:k(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:k(),dirty:o,skip_bound:!1},u=!1;if(l.ctx=n?n(e,c,(function(t,n){var i=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return l.ctx&&r(l.ctx[t],l.ctx[t]=i)&&(!l.skip_bound&&l.bound[t]&&l.bound[t](i),u&&ge(e,t)),n})):[],l.update(),u=!0,I(l.before_update),l.fragment=!!i&&i(l.ctx),t.target){if(t.hydrate){var d=A(t.target);l.fragment&&l.fragment.l(d),d.forEach(S)}else l.fragment&&l.fragment.c();t.intro&&oe(e.$$.fragment),pe(e,t.target,t.anchor),ee()}H(a)}(f(t=r.call(this)),e,Ke,je,T,{modules:46,stack:0,refs:1,type:4,title:5,titleTrusted:6,text:7,textTrusted:8,styling:47,icons:48,mode:9,addClass:10,addModalClass:11,addModelessClass:12,autoOpen:49,width:50,minHeight:51,maxTextHeight:52,icon:13,animation:2,animateSpeed:14,shadow:15,hide:3,delay:53,mouseReset:54,closer:16,closerHover:17,sticker:18,stickerHover:19,labels:20,remove:55,destroy:56,getState:57,getTimer:58,getStyle:21,getIcon:22,open:59,close:23,animateIn:60,animateOut:61,cancelClose:62,queueClose:63,_preventTimerClose:64,on:65,update:66,fire:67,addModuleClass:68,removeModuleClass:69,hasModuleClass:70,getModuleHandled:71,setModuleHandled:72,getModuleOpen:73,setModuleOpen:74,setAnimating:75,getAnimatingClass:76,setAnimatingClass:77,_getMoveClass:78,_setMoveClass:79,_setMasking:80},[-1,-1,-1,-1]),t}return s(o,[{key:"modules",get:function(){return this.$$.ctx[46]},set:function(e){this.$set({modules:e}),ee()}},{key:"stack",get:function(){return this.$$.ctx[0]},set:function(e){this.$set({stack:e}),ee()}},{key:"refs",get:function(){return this.$$.ctx[1]}},{key:"type",get:function(){return this.$$.ctx[4]},set:function(e){this.$set({type:e}),ee()}},{key:"title",get:function(){return this.$$.ctx[5]},set:function(e){this.$set({title:e}),ee()}},{key:"titleTrusted",get:function(){return this.$$.ctx[6]},set:function(e){this.$set({titleTrusted:e}),ee()}},{key:"text",get:function(){return this.$$.ctx[7]},set:function(e){this.$set({text:e}),ee()}},{key:"textTrusted",get:function(){return this.$$.ctx[8]},set:function(e){this.$set({textTrusted:e}),ee()}},{key:"styling",get:function(){return this.$$.ctx[47]},set:function(e){this.$set({styling:e}),ee()}},{key:"icons",get:function(){return this.$$.ctx[48]},set:function(e){this.$set({icons:e}),ee()}},{key:"mode",get:function(){return this.$$.ctx[9]},set:function(e){this.$set({mode:e}),ee()}},{key:"addClass",get:function(){return this.$$.ctx[10]},set:function(e){this.$set({addClass:e}),ee()}},{key:"addModalClass",get:function(){return this.$$.ctx[11]},set:function(e){this.$set({addModalClass:e}),ee()}},{key:"addModelessClass",get:function(){return this.$$.ctx[12]},set:function(e){this.$set({addModelessClass:e}),ee()}},{key:"autoOpen",get:function(){return this.$$.ctx[49]},set:function(e){this.$set({autoOpen:e}),ee()}},{key:"width",get:function(){return this.$$.ctx[50]},set:function(e){this.$set({width:e}),ee()}},{key:"minHeight",get:function(){return this.$$.ctx[51]},set:function(e){this.$set({minHeight:e}),ee()}},{key:"maxTextHeight",get:function(){return this.$$.ctx[52]},set:function(e){this.$set({maxTextHeight:e}),ee()}},{key:"icon",get:function(){return this.$$.ctx[13]},set:function(e){this.$set({icon:e}),ee()}},{key:"animation",get:function(){return this.$$.ctx[2]},set:function(e){this.$set({animation:e}),ee()}},{key:"animateSpeed",get:function(){return this.$$.ctx[14]},set:function(e){this.$set({animateSpeed:e}),ee()}},{key:"shadow",get:function(){return this.$$.ctx[15]},set:function(e){this.$set({shadow:e}),ee()}},{key:"hide",get:function(){return this.$$.ctx[3]},set:function(e){this.$set({hide:e}),ee()}},{key:"delay",get:function(){return this.$$.ctx[53]},set:function(e){this.$set({delay:e}),ee()}},{key:"mouseReset",get:function(){return this.$$.ctx[54]},set:function(e){this.$set({mouseReset:e}),ee()}},{key:"closer",get:function(){return this.$$.ctx[16]},set:function(e){this.$set({closer:e}),ee()}},{key:"closerHover",get:function(){return this.$$.ctx[17]},set:function(e){this.$set({closerHover:e}),ee()}},{key:"sticker",get:function(){return this.$$.ctx[18]},set:function(e){this.$set({sticker:e}),ee()}},{key:"stickerHover",get:function(){return this.$$.ctx[19]},set:function(e){this.$set({stickerHover:e}),ee()}},{key:"labels",get:function(){return this.$$.ctx[20]},set:function(e){this.$set({labels:e}),ee()}},{key:"remove",get:function(){return this.$$.ctx[55]},set:function(e){this.$set({remove:e}),ee()}},{key:"destroy",get:function(){return this.$$.ctx[56]},set:function(e){this.$set({destroy:e}),ee()}},{key:"getState",get:function(){return this.$$.ctx[57]}},{key:"getTimer",get:function(){return this.$$.ctx[58]}},{key:"getStyle",get:function(){return this.$$.ctx[21]}},{key:"getIcon",get:function(){return this.$$.ctx[22]}},{key:"open",get:function(){return this.$$.ctx[59]},set:function(e){this.$set({open:e}),ee()}},{key:"close",get:function(){return this.$$.ctx[23]},set:function(e){this.$set({close:e}),ee()}},{key:"animateIn",get:function(){return this.$$.ctx[60]},set:function(e){this.$set({animateIn:e}),ee()}},{key:"animateOut",get:function(){return this.$$.ctx[61]},set:function(e){this.$set({animateOut:e}),ee()}},{key:"cancelClose",get:function(){return this.$$.ctx[62]}},{key:"queueClose",get:function(){return this.$$.ctx[63]}},{key:"_preventTimerClose",get:function(){return this.$$.ctx[64]}},{key:"on",get:function(){return this.$$.ctx[65]}},{key:"update",get:function(){return this.$$.ctx[66]}},{key:"fire",get:function(){return this.$$.ctx[67]}},{key:"addModuleClass",get:function(){return this.$$.ctx[68]}},{key:"removeModuleClass",get:function(){return this.$$.ctx[69]}},{key:"hasModuleClass",get:function(){return this.$$.ctx[70]}},{key:"getModuleHandled",get:function(){return this.$$.ctx[71]}},{key:"setModuleHandled",get:function(){return this.$$.ctx[72]}},{key:"getModuleOpen",get:function(){return this.$$.ctx[73]}},{key:"setModuleOpen",get:function(){return this.$$.ctx[74]}},{key:"setAnimating",get:function(){return this.$$.ctx[75]}},{key:"getAnimatingClass",get:function(){return this.$$.ctx[76]}},{key:"setAnimatingClass",get:function(){return this.$$.ctx[77]}},{key:"_getMoveClass",get:function(){return this.$$.ctx[78]}},{key:"_setMoveClass",get:function(){return this.$$.ctx[79]}},{key:"_setMasking",get:function(){return this.$$.ctx[80]}}]),o}(ve);e.Stack=ye,e.alert=function(e){return _e(Fe(e))},e.default=Ge,e.defaultModules=Ve,e.defaultStack=We,e.defaults=ze,e.error=function(e){return _e(Fe(e,"error"))},e.info=function(e){return _e(Fe(e,"info"))},e.notice=function(e){return _e(Fe(e,"notice"))},e.success=function(e){return _e(Fe(e,"success"))},Object.defineProperty(e,"__esModule",{value:!0})}(Yi);const Xi={registerForm:document.querySelector(".modal__form-registration"),loginForm:document.querySelector(".modal__form-login"),signInModal:document.querySelector(".backdrop[data-modal-signin]"),signUpBtn:document.querySelector(".user-box__signup"),signInBtn:document.querySelector(".user-box__signin"),signIn:document.querySelector(".modal__button"),logOutBtn:document.querySelector(".logout-js"),signUpModal:document.querySelector(".backdrop[data-modal-signup]"),signUpNowBtn:document.querySelector(".signup-now__button"),googleBtn:document.querySelector(".google-signin"),showPassBtn:document.querySelector(".show-pass"),fieldPass:document.querySelector(".pass-js"),signupWpapper:document.querySelector(".signup-wpapper")},Qi=(Ye({apiKey:"AIzaSyAhw4vdrq6zh6xoucOyfBfmVPrQ7kH8128",authDomain:"filmoteka-goit-group-8.firebaseapp.com",databaseURL:"https://filmoteka-goit-group-8-default-rtdb.europe-west1.firebasedatabase.app",projectId:"filmoteka-goit-group-8",storageBucket:"filmoteka-goit-group-8.appspot.com",messagingSenderId:"90971574603",appId:"1:90971574603:web:fb9d31de5aec56a6bd18ce",measurementId:"G-685DL9GM6N"}),function(e=Xe()){const t=Ke(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Ke(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(ie(n.getOptions(),null!=t?t:{}))return e;pt(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:zi,persistence:[oi,qn,Gn]}),i=X("authTokenSyncURL");if(i){const e=(r=i,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Ki)return;const i=null==t?void 0:t.token;Gi!==i&&(Gi=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){de(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){de(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}var r;const s=Y("auth");return s&&vn(n,`http://${s}`),n}()),Zi=new Ln;var er,tr,nr;function ir(e){e.currentTarget===e.currentcurrentTarget&&(Xi.signInModal.classList.add("hide"),document.body.style.overflow="visible")}function rr(e){e.currentTarget===e.currentcurrentTarget&&(Xi.signUpModal.classList.add("hide"),document.body.style.overflow="visible")}function sr(e){"Escape"===e.key&&(document.body.style.overflow="visible",Xi.signInModal.classList.add("hide"))}function or(e){"Escape"===e.key&&(document.body.style.overflow="visible",Xi.signUpModal.classList.add("hide"))}Xi.signUpBtn.addEventListener("click",(function(){Xi.signUpModal.classList.remove("hide"),Xi.signUpModal.addEventListener("click",rr),window.addEventListener("keydown",or),document.body.style.overflow="hidden"})),Xi.signInBtn.addEventListener("click",(function(){Xi.signInModal.classList.remove("hide"),document.body.style.overflow="hidden",Xi.signInModal.addEventListener("click",ir),window.addEventListener("keydown",sr)})),Xi.logOutBtn.addEventListener("click",(function(){(e=Qi,de(e).signOut()).then((()=>{(0,Yi.info)({text:"You have been logged out.",delay:1e3})}));var e})),Xi.signUpNowBtn.addEventListener("click",(function(){Xi.signInModal.classList.add("hide"),Xi.signUpModal.classList.remove("hide"),Xi.signUpModal.addEventListener("click",rr),window.addEventListener("keydown",or)})),Xi.loginForm.addEventListener("sumbit",(function(e){e.preventDefault();const t=e.currentTarget.email.value,n=e.currentTarget.pass.value;Wn(Qi,t,n).then((e=>{e.user;document.body.style.overflow="visible",Xi.signupWpapper.classList.remove("load")})).then((()=>{Xi.signInModal.classList.add("hide"),e.currentTarget.email.value=null,e.currentTarget.pass.value=null,window.location.reload(!0)})).catch((e=>{e.code;e({title:"Error",text:e.message,delay:2e3}),Xi.signupWpapper.classList.remove("load")})).finally((()=>{Xi.loginForm.classList.remove("hide")}))})),Xi.googleBtn.addEventListener("click",(function(){yi(Qi,Zi).then((e=>{Ln.credentialFromResult(e).accessToken;e.user&&(Xi.signUpBtn.classList.add("hide"),Xi.signInBtn.classList.add("hide"),Xi.logOutBtn.classList.remove("hide"),window.location.reload())})).catch((e=>{e.code,e.message,e.email,Ln.credentialFromError(e)}))})),Xi.registerForm.addEventListener("submit",(function(e){e.preventDefault();let t="";const n=e.currentTarget.email.value;e.currentTarget.pass.value===e.currentTarget.secondpass.value?t=e.currentTarget.pass.value:(0,Yi.error)({title:"Error",text:"Passwords did not match",delay:2e3});console.log(n,t),Xi.signUpModal.classList.add("hide")})),Xi.showPassBtn.addEventListener("click",(function(){"password"===Xi.fieldPass.type?Xi.fieldPass.type="text":Xi.fieldPass.type="password"})),er=e=>{e?(Xi.signUpBtn.classList.add("hide"),Xi.signInBtn.classList.add("hide"),Xi.logOutBtn.classList.remove("hide"),e.uid,(0,Yi.success)({title:"Success!",text:"You have successfully signed in.",delay:1e3})):(Xi.signUpBtn.classList.remove("hide"),Xi.signInBtn.classList.remove("hide"),Xi.logOutBtn.classList.add("hide"))},de(Qi).onAuthStateChanged(er,tr,nr),r("72xF7");const ar=document.querySelector(".btn-on-top");window.addEventListener("scroll",(function(){const e=window.pageYOffset,t=document.documentElement.clientHeight;e>t&&ar.classList.add("btn-on-top--visible");e<t&&ar.classList.remove("btn-on-top--visible")})),ar.addEventListener("click",(function(){window.pageYOffset>0&&window.scrollTo({top:0,behavior:"smooth"})}));const cr=[],lr=[];function ur(){const e=document.querySelector(".js-addWatched"),t=document.querySelector(".js-deleteWatched"),n=document.querySelector(".js-addQueue"),i=document.querySelector(".js-deleteQueue"),r=document.querySelector(".js-image").dataset.action;function s(e,t){e.classList.add("hide"),t.classList.remove("hide")}e.addEventListener("click",(function(){if(cr.includes(r))return;s(e,t),cr.push(r),localStorage.setItem("moviesWatched",JSON.stringify(cr))})),t.addEventListener("click",(function(){s(t,e),cr.splice(cr.indexOf(r),1),localStorage.removeItem("moviesWatched"),localStorage.setItem("moviesWatched",JSON.stringify(cr))})),n.addEventListener("click",(function(){if(lr.includes(r))return;s(n,i),lr.push(r),localStorage.setItem("moviesQueue",JSON.stringify(lr))})),i.addEventListener("click",(function(){s(i,n),lr.splice(lr.indexOf(r),1),localStorage.removeItem("moviesQueue"),localStorage.setItem("moviesQueue",JSON.stringify(lr))})),console.log(r),cr.includes(r)&&s(e,t),lr.includes(r)&&s(n,i)}const dr=new(0,o.FetchApiMovies)(21),hr=dr.fetchWithPage(1);let fr=1;let pr=[];document.querySelector(".gallery").addEventListener("click",(e=>{dr.fullFetch(e.target.id).then((t=>{u(t),document.querySelector("#button-close").addEventListener("click",(()=>{h()})),a.refs.moviesBackdrop.addEventListener("click",m),ur(),p(),dr.fullFetchVideo(e.target.id).then((e=>{pr=e}))}))})),async function t(n){const i=await n;l(await i.results),function(){const n=document.getElementById("tui-pagination-container");n.addEventListener("click",(()=>window.scrollTo({top:0,behavior:"smooth"})));new(e(b))(n,{page:fr,totalItems:400,itemsPerPage:20,visiblePages:5,usageStatistics:!1}).on("afterMove",(async e=>{fr=e.page,t(await dr.fetchWithPage(e.page)),document.querySelector(".gallery").addEventListener("click",(e=>{console.log(e.target)}))}))}()}(hr);
//# sourceMappingURL=index.1f065766.js.map
