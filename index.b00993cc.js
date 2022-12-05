!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i),i.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return a.apply(null,arguments)};var n,r=(n=i("gD1JV"))&&n.__esModule?n:{default:n};function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function a(e,t,n){return(a=o()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var o=new(Function.bind.apply(e,i));return n&&r.default(o,n.prototype),o}).apply(null,arguments)}})),i.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),i.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=i("fVNic"))&&n.__esModule?n:{default:n}}));var o,a=i("bpxeT"),s=i("2TvXO"),u=i("lfc9d"),c=i("cqmI4");o=JSON.parse('[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]');var l="https://image.tmdb.org/t/p/w500/";function f(t){c.refs.moviesList.innerHTML="";var n=t.map((function(t){return l=null===t.poster_path?"":"https://image.tmdb.org/t/p/w500/",r=(n=t).poster_path,i=n.title,a=n.genre_ids,s=n.vote_average,u=n.release_date,c=n.id,f=function(t){var n=[],r=!0,i=!1,a=void 0;try{for(var s,u=function(t,r){var i=r.value,a=e(o).find((function(e){return e.id===i}));n.push(" "+a.name)},c=t[Symbol.iterator]();!(r=(s=c.next()).done);r=!0)u(c,s)}catch(e){i=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw a}}return n.length>3&&(n=n.slice(0,2)).splice(2,0," Other"),0===n.length&&(n="No genres"),n}(a),'\n        <li class="movie__item">\n          <a hres="#" class="movie__link">\n             <div class="thumb"> \n              <img class="movie__img" id="'.concat(c,'"\n              width="500"\n              loading="lazy"\n              alt="').concat(i,'"\n              src="').concat(l).concat(r,'" \n              />\n            </div>\n            <div class="movie__descr">\n            <p class="movie__title">').concat(i,'</p>\n            \n            <ul class="movie__descr--orange">\n             <li class="card__genre movie__genre"></li>\n             <li class="movie__genre">').concat(f," | ").concat(u.substr(0,4),'</li>\n             <li class="movie__vote">').concat(s.toFixed(1),"</li>\n            </ul>\n            </div>\n          </a>\n        </li>\n  ");var n,r,i,a,s,u,c,f})).join("");c.refs.moviesList.insertAdjacentHTML("beforeend",n)}c=i("cqmI4");var d="https://image.tmdb.org/t/p/w500/";function h(e){c.refs.divBackdrop.innerHTML="";var t,n,r,i,o,a,s,u,l,f,h,p=(n=(t=e).title,r=t.vote_average,i=t.vote_count,o=t.original_title,a=t.popularity,s=t.overview,u=t.poster_path,l=t.genres,f=t.id,h="",l.forEach((function(e){h+=e.name,h+=" "})),'\n    <div class="singleMovieModal__container">\n    <button class="singleMovieModal__button-close" type="button" id="button-close">\n      <svg  class="singleMovieModal__button-close-img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg"\n        viewBox="0 0 16 16">\n        <path\n          d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />\n      </svg>\n    </button>\n\n    <div class="singleMovieModal__flex-container">\n      <img class="singleMovieModal__picture js-image" src='.concat(d).concat(u,' alt="').concat(n,'" data-action="').concat(f,'" />\n\n      <div class="singleMovieModal__description-container">\n        <h2 class="singleMovieModal__title">').concat(n,'</h2>\n        <ul class="singleMovieModal__description-list">\n          <li class="singleMovieModal__description-item">\n            <p class="singleMovieModal__description-text">Vote / Votes</p>\n            <p class="singleMovieModal__description-span">\n              <span class="singleMovieModal__description-insert">').concat(r,"</span>/").concat(i,'\n            </p>\n          </li>\n          <li class="singleMovieModal__description-item">\n            <p class="singleMovieModal__description-text">Popularity</p>\n            <p class="singleMovieModal__description-span">').concat(a,'</p>\n          </li>\n          <li class="singleMovieModal__description-item">\n            <p class="singleMovieModal__description-text">Original Title</p>\n            <p class="singleMovieModal__description-span">').concat(o,'</p>\n          </li>\n          <li class="singleMovieModal__description-item">\n            <p class="singleMovieModal__description-text">Genre</p>\n            <p class="singleMovieModal__description-span">').concat(h,'</p>\n          </li>\n        </ul>\n          \n        <p class="singleMovieModal__about singleMovieModal__about-more-button-active">\n          ').concat(s,'\n        </p>\n        <ul class="singleMovieModal-add__list">\n          <li class="singleMovieModal-add__item">\n            <button class="singleMovieModal-add__button js-addWatched" type="button">\n              Add to Watched\n            </button>\n            <button class="singleMovieModal-add__button js-deleteWatched hide" type="button">\n              Delate Watched\n            </button>\n          </li>\n          <li class="singleMovieModal-add__item">\n            <button class="singleMovieModal-add__button js-addQueue" type="button">\n              Add to queue\n            </button>\n            <button class="singleMovieModal-add__button js-deleteQueue hide" type="button">\n              Delate queue\n            </button>\n          </li>\n          <li class="singleMovieModal-add__item">\n            <button class="singleMovieModal-add__trailer" type="button">\n              Watch trailer movie\n            </button>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n    '));c.refs.divBackdrop.insertAdjacentHTML("beforeend",p)}c=i("cqmI4");function p(e){"Escape"===e.code&&v()}function v(){window.removeEventListener("keydown",p),c.refs.singleMovieModal.classList.add("is-hidden"),document.body.style.overflowY=""}function m(){document.querySelector(".singleMovieModal-add__trailer").addEventListener("click",(function(){O(wa[0]),window.removeEventListener("keydown",p),c.refs.singleMovieModal.classList.add("is-hidden")}))}function g(e){e.currentTarget===e.target&&v()}function y(e){var t;"IMG"===e.target.nodeName&&((t=!0)?(c.refs.singleMovieModal.classList.remove("is-hidden"),document.body.style.overflowY="hidden",window.addEventListener("keydown",p)):t||v())}(c=i("cqmI4")).refs.moviesList.addEventListener("click",y);a=i("bpxeT"),s=i("2TvXO"),c=i("cqmI4"),u=i("lfc9d");var k=i("24H3u"),b=new(0,u.FetchApiMovies);function _(){return(_=e(a)(e(s).mark((function t(n){var r,i,o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),(0,k.hiddenSpinner)(!1),r=c.refs.formInput.value,e.next=5,b.fetchKey(r);case 5:return i=e.sent,e.next=8,i.results;case 8:o=e.sent,c.refs.formInput.value="",(0,k.hiddenSpinner)(!0),f(o);case 12:case"end":return e.stop()}}),t)})))).apply(this,arguments)}c.refs.form.addEventListener("submit",(function(e){return _.apply(this,arguments)}));var w,x={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */window,w=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist",n(n.s=10)}([function(e,t,n){"use strict";e.exports=function(e,t){var n,r,i,o,a=Object.prototype.hasOwnProperty;for(i=1,o=arguments.length;i<o;i+=1)for(r in n=arguments[i])a.call(n,r)&&(e[r]=n[r]);return e}},function(e,t,n){"use strict";e.exports=function(e){return void 0===e}},function(e,t,n){"use strict";e.exports=function(e){return e instanceof Array}},function(e,t,n){"use strict";var r=n(2),i=n(17),o=n(6);e.exports=function(e,t,n){r(e)?i(e,t,n):o(e,t,n)}},function(e,t,n){"use strict";e.exports=function(e){return"string"==typeof e||e instanceof String}},function(e,t,n){"use strict";e.exports=function(e){return e instanceof Function}},function(e,t,n){"use strict";e.exports=function(e,t,n){var r;for(r in n=n||null,e)if(e.hasOwnProperty(r)&&!1===t.call(n,e[r],r,e))break}},function(e,t,n){"use strict";var r=n(18),i=n(0);e.exports=function(e,t){var n;return t||(t=e,e=null),n=t.init||function(){},e&&r(n,e),t.hasOwnProperty("static")&&(i(n,t.static),delete t.static),i(n.prototype,t),n}},function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t,n){var i,o;if(n=n||0,!r(t))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(t,e,n);for(o=t.length,i=n;n>=0&&i<o;i+=1)if(t[i]===e)return i;return-1}},function(e,t,n){"use strict";var r=n(29),i=n(30),o=n(5),a={capitalizeFirstLetter:function(e){return e.substring(0,1).toUpperCase()+e.substring(1,e.length)},isContained:function(e,t){return!!t&&(e===t||t.contains(e))},createElementByTemplate:function(e,t){var n=document.createElement("div"),i=o(e)?e(t):r(e,t);return n.innerHTML=i,n.firstChild},bind:function(e,t){var n,r=Array.prototype.slice;return e.bind?e.bind.apply(e,r.call(arguments,1)):(n=r.call(arguments,2),function(){return e.apply(t,n.length?n.concat(r.call(arguments)):arguments)})},sendHostName:function(){i("pagination","UA-129987462-1")}};e.exports=a},function(e,t,n){"use strict";n(11),e.exports=n(12)},function(e,t,n){},function(e,t,n){"use strict";var r=n(13),i=n(7),o=n(0),a=n(1),s=n(20),u=n(9),c={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=i({init:function(e,t){this._options=o({},c,t),this._currentPage=0,this._view=new s(e,this._options,u.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&u.sendHostName()},_setCurrentPage:function(e){this._currentPage=e||this._options.page},_getLastPage:function(){var e=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return e||1},_getPageIndex:function(e){var t;return this._options.centerAlign?(t=e-Math.floor(this._options.visiblePages/2),t=Math.max(t,1),t=Math.min(t,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(e/this._options.visiblePages)},_getRelativePage:function(e){var t="prev"===e,n=this.getCurrentPage();return t?n-1:n+1},_getMorePageIndex:function(e){var t=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,r="prev"===e;return this._options.centerAlign?r?t-1:t+n:r?(t-1)*n:t*n+1},_convertToValidPage:function(e){var t=this._getLastPage();return e=Math.max(e,1),e=Math.min(e,t)},_paginate:function(e){var t=this._makeViewData(e||this._options.page);this._setCurrentPage(e),this._view.update(t)},_makeViewData:function(e){var t={},n=this._getLastPage(),r=this._getPageIndex(e),i=this._getPageIndex(n),o=this._getEdge(e);return t.leftPageNumber=o.left,t.rightPageNumber=o.right,t.prevMore=r>1,t.nextMore=r<i,t.page=e,t.currentPageIndex=e,t.lastPage=n,t.lastPageListIndex=n,t},_getEdge:function(e){var t,n,r,i=this._getLastPage(),o=this._options.visiblePages,a=this._getPageIndex(e);return this._options.centerAlign?(r=Math.floor(o/2),(n=(t=Math.max(e-r,1))+o-1)>i&&(t=Math.max(i-o+1,1),n=i)):(t=(a-1)*o+1,n=a*o,n=Math.min(n,i)),{left:t,right:n}},_onClickHandler:function(e,t){switch(e){case"first":t=1;break;case"prev":t=this._getRelativePage("prev");break;case"next":t=this._getRelativePage("next");break;case"prevMore":t=this._getMorePageIndex("prev");break;case"nextMore":t=this._getMorePageIndex("next");break;case"last":t=this._getLastPage();break;default:if(!t)return}this.movePageTo(t)},reset:function(e){a(e)&&(e=this._options.totalItems),this._options.totalItems=e,this._paginate(1)},movePageTo:function(e){e=this._convertToValidPage(e),this.invoke("beforeMove",{page:e})&&(this._paginate(e),this.fire("afterMove",{page:e}))},setTotalItems:function(e){this._options.totalItems=e},setItemsPerPage:function(e){this._options.itemsPerPage=e},getCurrentPage:function(){return this._currentPage||this._options.page}});r.mixin(l),e.exports=l},function(e,t,n){"use strict";var r=n(0),i=n(14),o=n(4),a=n(16),s=n(2),u=n(5),c=n(3),l=/\s+/g;function f(){this.events=null,this.contexts=null}f.mixin=function(e){r(e.prototype,f.prototype)},f.prototype._getHandlerItem=function(e,t){var n={handler:e};return t&&(n.context=t),n},f.prototype._safeEvent=function(e){var t,n=this.events;return n||(n=this.events={}),e&&((t=n[e])||(t=[],n[e]=t),n=t),n},f.prototype._safeContext=function(){var e=this.contexts;return e||(e=this.contexts=[]),e},f.prototype._indexOfContext=function(e){for(var t=this._safeContext(),n=0;t[n];){if(e===t[n][0])return n;n+=1}return-1},f.prototype._memorizeContext=function(e){var t,n;i(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1?t[n][1]+=1:t.push([e,1]))},f.prototype._forgetContext=function(e){var t,n;i(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1&&(t[n][1]-=1,t[n][1]<=0&&t.splice(n,1)))},f.prototype._bindEvent=function(e,t,n){var r=this._safeEvent(e);this._memorizeContext(n),r.push(this._getHandlerItem(t,n))},f.prototype.on=function(e,t,n){var r=this;o(e)?(e=e.split(l),c(e,(function(e){r._bindEvent(e,t,n)}))):a(e)&&(n=t,c(e,(function(e,t){r.on(t,e,n)})))},f.prototype.once=function(e,t,n){var r=this;if(a(e))return n=t,void c(e,(function(e,t){r.once(t,e,n)}));this.on(e,(function i(){t.apply(n,arguments),r.off(e,i,n)}),n)},f.prototype._spliceMatches=function(e,t){var n,r=0;if(s(e))for(n=e.length;r<n;r+=1)!0===t(e[r])&&(e.splice(r,1),n-=1,r-=1)},f.prototype._matchHandler=function(e){var t=this;return function(n){var r=e===n.handler;return r&&t._forgetContext(n.context),r}},f.prototype._matchContext=function(e){var t=this;return function(n){var r=e===n.context;return r&&t._forgetContext(n.context),r}},f.prototype._matchHandlerAndContext=function(e,t){var n=this;return function(r){var i=e===r.handler,o=t===r.context,a=i&&o;return a&&n._forgetContext(r.context),a}},f.prototype._offByEventName=function(e,t){var n=this,r=u(t),i=n._matchHandler(t);e=e.split(l),c(e,(function(e){var t=n._safeEvent(e);r?n._spliceMatches(t,i):(c(t,(function(e){n._forgetContext(e.context)})),n.events[e]=[])}))},f.prototype._offByHandler=function(e){var t=this,n=this._matchHandler(e);c(this._safeEvent(),(function(e){t._spliceMatches(e,n)}))},f.prototype._offByObject=function(e,t){var n,r=this;this._indexOfContext(e)<0?c(e,(function(e,t){r.off(t,e)})):o(t)?(n=this._matchContext(e),r._spliceMatches(this._safeEvent(t),n)):u(t)?(n=this._matchHandlerAndContext(t,e),c(this._safeEvent(),(function(e){r._spliceMatches(e,n)}))):(n=this._matchContext(e),c(this._safeEvent(),(function(e){r._spliceMatches(e,n)})))},f.prototype.off=function(e,t){o(e)?this._offByEventName(e,t):arguments.length?u(e)?this._offByHandler(e):a(e)&&this._offByObject(e,t):(this.events={},this.contexts=[])},f.prototype.fire=function(e){this.invoke.apply(this,arguments)},f.prototype.invoke=function(e){var t,n,r,i;if(!this.hasListener(e))return!0;for(t=this._safeEvent(e),n=Array.prototype.slice.call(arguments,1),r=0;t[r];){if(!1===(i=t[r]).handler.apply(i.context,n))return!1;r+=1}return!0},f.prototype.hasListener=function(e){return this.getListenerLength(e)>0},f.prototype.getListenerLength=function(e){return this._safeEvent(e).length},e.exports=f},function(e,t,n){"use strict";var r=n(1),i=n(15);e.exports=function(e){return!r(e)&&!i(e)}},function(e,t,n){"use strict";e.exports=function(e){return null===e}},function(e,t,n){"use strict";e.exports=function(e){return e===Object(e)}},function(e,t,n){"use strict";e.exports=function(e,t,n){var r=0,i=e.length;for(n=n||null;r<i&&!1!==t.call(n,e[r],r,e);r+=1);}},function(e,t,n){"use strict";var r=n(19);e.exports=function(e,t){var n=r(t.prototype);n.constructor=e,e.prototype=n}},function(e,t,n){"use strict";e.exports=function(e){function t(){}return t.prototype=e,new t}},function(e,t,n){"use strict";var r=n(3),i=n(7),o=n(21),a=n(22),s=n(24),u=n(25),c=n(0),l=n(4),f=n(28),d=n(9),h={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},p=["first","prev","next","last"],v=["prev","next"],m=i({init:function(e,t,n){this._containerElement=null,this._firstItemClassName=t.firstItemClassName,this._lastItemClassName=t.lastItemClassName,this._template=c({},h,t.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(e),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(e){if(l(e)?e=document.getElementById(e)||document.querySelector(e):e.jquery&&(e=e[0]),!f(e))throw new Error("The container element is invalid.");this._containerElement=e},_setMoveButtons:function(){r(p,(function(e){this._buttons[e]=d.createElementByTemplate(this._template.moveButton,{type:e})}),this)},_setDisabledMoveButtons:function(){r(p,(function(e){var t="disabled"+d.capitalizeFirstLetter(e);this._buttons[t]=d.createElementByTemplate(this._template.disabledMoveButton,{type:e})}),this)},_setMoreButtons:function(){r(v,(function(e){var t=e+"More";this._buttons[t]=d.createElementByTemplate(this._template.moreButton,{type:e})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(e){var t;t=e.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(t)},_appendPrevButton:function(e){var t;t=e.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(t)},_appendNextButton:function(e){var t;t=e.currentPageIndex<e.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(t)},_appendLastButton:function(e){var t;t=e.page<e.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(t)},_appendPrevMoreButton:function(e){var t;e.prevMore&&(t=this._buttons.prevMore,u(t,this._firstItemClassName),this._getContainerElement().appendChild(t))},_appendNextMoreButton:function(e){var t;e.nextMore&&(t=this._buttons.nextMore,u(t,this._lastItemClassName),this._getContainerElement().appendChild(t))},_appendPages:function(e){var t,n,r=e.leftPageNumber,i=e.rightPageNumber;for(n=r;n<=i;n+=1)n===e.page?t=d.createElementByTemplate(this._template.currentPage,{page:n}):(t=d.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(t)),n!==r||e.prevMore||u(t,this._firstItemClassName),n!==i||e.nextMore||u(t,this._lastItemClassName),this._getContainerElement().appendChild(t)},_attachClickEvent:function(e){var t=this._getContainerElement();a(t,"click",(function(t){var n,r,i=o(t);s(t),(r=this._getButtonType(i))||(n=this._getPageNumber(i)),e(r,n)}),this)},_getButtonType:function(e){var t,n=this._buttons;return r(n,(function(n,r){return!d.isContained(e,n)||(t=r,!1)}),this),t},_getPageNumber:function(e){var t,n=this._findPageElement(e);return n&&(t=parseInt(n.innerText,10)),t},_findPageElement:function(e){for(var t,n=0,r=this._enabledPageElements.length;n<r;n+=1)if(t=this._enabledPageElements[n],d.isContained(e,t))return t;return null},_empty:function(){this._enabledPageElements=[],r(this._buttons,(function(e,t){this._buttons[t]=e.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(e){this._empty(),this._appendFirstButton(e),this._appendPrevButton(e),this._appendPrevMoreButton(e),this._appendPages(e),this._appendNextMoreButton(e),this._appendNextButton(e),this._appendLastButton(e)}});e.exports=m},function(e,t,n){"use strict";e.exports=function(e){return e.target||e.srcElement}},function(e,t,n){"use strict";var r=n(4),i=n(3),o=n(23);function a(e,t,n,r){function a(t){n.call(r||e,t||window.event)}"addEventListener"in e?e.addEventListener(t,a):"attachEvent"in e&&e.attachEvent("on"+t,a),function(e,t,n,r){var a=o(e,t),s=!1;i(a,(function(e){return e.handler!==n||(s=!0,!1)})),s||a.push({handler:n,wrappedHandler:r})}(e,t,n,a)}e.exports=function(e,t,n,o){r(t)?i(t.split(/\s+/g),(function(t){a(e,t,n,o)})):i(t,(function(t,r){a(e,r,t,n)}))}},function(e,t,n){"use strict";var r="_feEventKey";e.exports=function(e,t){var n,i=e[r];return i||(i=e[r]={}),(n=i[t])||(n=i[t]=[]),n}},function(e,t,n){"use strict";e.exports=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},function(e,t,n){"use strict";var r=n(3),i=n(8),o=n(26),a=n(27);e.exports=function(e){var t,n=Array.prototype.slice.call(arguments,1),s=e.classList,u=[];s?r(n,(function(t){e.classList.add(t)})):((t=o(e))&&(n=[].concat(t.split(/\s+/),n)),r(n,(function(e){i(e,u)<0&&u.push(e)})),a(e,u))}},function(e,t,n){"use strict";var r=n(1);e.exports=function(e){return e&&e.className?r(e.className.baseVal)?e.className:e.className.baseVal:""}},function(e,t,n){"use strict";var r=n(2),i=n(1);e.exports=function(e,t){t=(t=r(t)?t.join(" "):t).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),i(e.className.baseVal)?e.className=t:e.className.baseVal=t}},function(e,t,n){"use strict";e.exports=function(e){return"object"==typeof HTMLElement?e&&(e instanceof HTMLElement||!!e.nodeType):!(!e||!e.nodeType)}},function(e,t,n){"use strict";var r=n(8),i=n(3),o=n(2),a=n(4),s=n(0),u=/{{\s?|\s?}}/g,c=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,f=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,d=/\./,h=/^["']\w+["']$/,p=/"|'/g,v=/^-?\d+\.?\d*$/,m={if:function(e,t,n){var r=function(e,t){var n=[e],r=[],o=0,a=0;return i(t,(function(e,i){0===e.indexOf("if")?o+=1:"/if"===e?o-=1:o||0!==e.indexOf("elseif")&&"else"!==e||(n.push("else"===e?["true"]:e.split(" ").slice(1)),r.push(t.slice(a,i)),a=i+1)})),r.push(t.slice(a)),{exps:n,sourcesInsideIf:r}}(e,t),o=!1,a="";return i(r.exps,(function(e,t){return(o=b(e,n))&&(a=_(r.sourcesInsideIf[t],n)),!o})),a},each:function(e,t,n){var r=b(e,n),a=o(r)?"@index":"@key",u={},c="";return i(r,(function(e,r){u[a]=r,u["@this"]=e,s(n,u),c+=_(t.slice(),n)})),c},with:function(e,t,n){var i=r("as",e),o=e[i+1],a=b(e.slice(0,i),n),u={};return u[o]=a,_(t,s(n,u))||""}},g=3==="a".split(/a/).length?function(e,t){return e.split(t)}:function(e,t){var n,r,i=[],o=0;for(t.global||(t=new RegExp(t,"g")),n=t.exec(e);null!==n;)r=n.index,i.push(e.slice(o,r)),o=r+n[0].length,n=t.exec(e);return i.push(e.slice(o)),i};function y(e,t){var n,r=t[e];return"true"===e?r=!0:"false"===e?r=!1:h.test(e)?r=e.replace(p,""):c.test(e)?r=y((n=e.split(l))[0],t)[y(n[1],t)]:f.test(e)?r=y((n=e.split(d))[0],t)[n[1]]:v.test(e)&&(r=parseFloat(e)),r}function k(e,t,n){for(var r,i,o,s,u=m[e],c=1,l=2,f=t[l];c&&a(f);)0===f.indexOf(e)?c+=1:0===f.indexOf("/"+e)&&(c-=1,r=l),f=t[l+=2];if(c)throw Error(e+" needs {{/"+e+"}} expression.");return t[0]=u(t[0].split(" ").slice(1),(i=0,o=r,(s=t.splice(i+1,o-i)).pop(),s),n),t}function b(e,t){var n=y(e[0],t);return n instanceof Function?function(e,t,n){var r=[];return i(t,(function(e){r.push(y(e,n))})),e.apply(null,r)}(n,e.slice(1),t):n}function _(e,t){for(var n,r,i,o=1,s=e[o];a(s);)r=(n=s.split(" "))[0],m[r]?(i=k(r,e.splice(o,e.length-o),t),e=e.concat(i)):e[o]=b(n,t),s=e[o+=2];return e.join("")}e.exports=function(e,t){return _(g(e,u),t)}},function(e,t,n){"use strict";var r=n(1),i=n(31);e.exports=function(e,t){var n=location.hostname,o="TOAST UI "+e+" for "+n+": Statistics",a=window.localStorage.getItem(o);(r(window.tui)||!1!==window.tui.usageStatistics)&&(a&&!function(e){return(new Date).getTime()-e>6048e5}(a)||(window.localStorage.setItem(o,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||i("https://www.google-analytics.com/collect",{v:1,t:"event",tid:t,cid:n,dp:n,dh:e,el:e,ec:"use"})}),1e3)))}},function(e,t,n){"use strict";var r=n(6);e.exports=function(e,t){var n=document.createElement("img"),i="";return r(t,(function(e,t){i+="&"+t+"="+e})),i=i.substring(1),n.src=e+"?"+i,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},x=w();c=i("cqmI4");function I(){c.refs.treilerContainer.innerHTML="",window.removeEventListener("keydown",E),document.body.style.overflowY="",window.removeEventListener("click",S),c.refs.treilerButtonClose.removeEventListener("click",T),c.refs.treilerButtonClose.classList.add("is-hidden")}function E(e){"Escape"===e.code&&(console.log("Stoped video"),I())}function T(){I()}function O(e){window.addEventListener("keydown",E),c.refs.treilerButtonClose.classList.remove("is-hidden"),c.refs.treilerButtonClose.addEventListener("click",T),c.refs.treilerContainer.innerHTML='\n  <iframe class="trailer__iframe" width="700" height="500" src="https://www.youtube.com/embed/'.concat(e,'" title="YouTube video player" frameborder="1" allow="accelerometer;  controls="1"; clipboard-write; encrypted-media; gyroscope="1"; picture-in-picture"; allowfullscreen="1"; enablejsapi="1"></iframe>\n  '),window.addEventListener("click",S)}function S(e){O&&c.refs.singleMovieModal.classList.add("is-hidden")}i("bQOmO");a=i("bpxeT");var C=i("8MBJY"),M=i("a2hTj"),P=i("hKHmD"),N=i("8nrFW"),L=(s=i("2TvXO"),a=i("bpxeT"),C=i("8MBJY"),M=i("a2hTj"),i("1t1Wn")),A=(N=i("8nrFW"),s=i("2TvXO"),i("ds8z5")),R=(C=i("8MBJY"),M=i("a2hTj"),i("eYQtU")),D=(L=i("1t1Wn"),N=i("8nrFW"),{});Object.defineProperty(D,"__esModule",{value:!0}),D.default=function(e){return F(e)};var $=B(i("ge8co")),j=B(i("cZGw3")),U=B(i("fVNic")),H=B(i("gD1JV"));function B(e){return e&&e.__esModule?e:{default:e}}function F(e){var t="function"==typeof Map?new Map:void 0;return F=function(e){if(null===e||!j.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return $.default(e,arguments,U.default(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),H.default(n,e)},F(e)}var W,V,z,q=i("2MbLg"),K=W={};function G(){throw new Error("setTimeout has not been defined")}function J(){throw new Error("clearTimeout has not been defined")}function Y(e){if(V===setTimeout)return setTimeout(e,0);if((V===G||!V)&&setTimeout)return V=setTimeout,setTimeout(e,0);try{return V(e,0)}catch(t){try{return V.call(null,e,0)}catch(t){return V.call(this,e,0)}}}!function(){try{V="function"==typeof setTimeout?setTimeout:G}catch(e){V=G}try{z="function"==typeof clearTimeout?clearTimeout:J}catch(e){z=J}}();var X,Q=[],Z=!1,ee=-1;function te(){Z&&X&&(Z=!1,X.length?Q=X.concat(Q):ee=-1,Q.length&&ne())}function ne(){if(!Z){var e=Y(te);Z=!0;for(var t=Q.length;t;){for(X=Q,Q=[];++ee<t;)X&&X[ee].run();ee=-1,t=Q.length}X=null,Z=!1,function(e){if(z===clearTimeout)return clearTimeout(e);if((z===J||!z)&&clearTimeout)return z=clearTimeout,clearTimeout(e);try{z(e)}catch(t){try{return z.call(null,e)}catch(t){return z.call(this,e)}}}(e)}}function re(e,t){this.fun=e,this.array=t}function ie(){}K.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];Q.push(new re(e,t)),1!==Q.length||Z||Y(ne)},re.prototype.run=function(){this.fun.apply(null,this.array)},K.title="browser",K.browser=!0,K.env={},K.argv=[],K.version="",K.versions={},K.on=ie,K.addListener=ie,K.once=ie,K.off=ie,K.removeListener=ie,K.removeAllListeners=ie,K.emit=ie,K.prependListener=ie,K.prependOnceListener=ie,K.listeners=function(e){return[]},K.binding=function(e){throw new Error("process.binding is not supported")},K.cwd=function(){return"/"},K.chdir=function(e){throw new Error("process.chdir is not supported")},K.umask=function(){return 0};
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
var oe=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},ae={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var o=e[i],a=i+1<e.length,s=a?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=o>>2,f=(3&o)<<4|s>>4,d=(15&s)<<2|c>>6,h=63&c;u||(h=64,a||(d=64)),r.push(n[l],n[f],n[d],n[h])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(oe(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){var a=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(1023&a))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==o||null==a||null==s||null==u)throw Error();var c=o<<2|a>>4;if(r.push(c),64!==s){var l=a<<4&240|s>>2;if(r.push(l),64!==u){var f=s<<6&192|u;r.push(f)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},se=function(e){return function(e){var t=oe(e);return ae.encodeByteArray(t,!0)}(e).replace(/\./g,"")},ue=function(e){try{return ae.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function ce(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}
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
var le=function(){return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},fe=function(){try{return le()||function(){if(void 0!==W&&void 0!==W.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&ue(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},de=function(e){var t,n;return null===(n=null===(t=fe())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},he=function(){var e;return null===(e=fe())||void 0===e?void 0:e.config},pe=function(e){var t;return null===(t=fe())||void 0===t?void 0:t["_".concat(e)]},ve=function(){"use strict";function t(){var n=this;e(C)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return e(M)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),t}();
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
var me=function(t){"use strict";e(R)(r,t);var n=e(q)(r);function r(t,i,o){var a;return e(C)(this,r),(a=n.call(this,i)).code=t,a.customData=o,a.name="FirebaseError",Object.setPrototypeOf(e(A)(a),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(A)(a),ge.prototype.create),a}return r}(e(D)(Error)),ge=function(){"use strict";function t(n,r,i){e(C)(this,t),this.service=n,this.serviceName=r,this.errors=i}return e(M)(t,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},o="".concat(this.service,"/").concat(e),a=this.errors[e],s=a?ye(a,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(o,")."),c=new me(o,u,i);return c}}]),t}();function ye(e,t){return e.replace(ke,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var ke=/\{\$([^}]+)}/g;
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
 */function be(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function _e(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,o=!1,a=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],f=t[c];if(we(l)&&we(f)){if(!_e(l,f))return!1}else if(l!==f)return!1}}catch(e){o=!0,a=e}finally{try{i||null==u.return||u.return()}finally{if(o)throw a}}var d=!0,h=!1,p=void 0;try{for(var v,m=r[Symbol.iterator]();!(d=(v=m.next()).done);d=!0){var g=v.value;if(!n.includes(g))return!1}}catch(e){h=!0,p=e}finally{try{d||null==m.return||m.return()}finally{if(h)throw p}}return!0}function we(e){return null!==e&&"object"==typeof e}
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
function xe(t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=function(t,r){var i=e(L)(r.value,2),o=i[0],a=i[1];Array.isArray(a)?a.forEach((function(e){n.push(encodeURIComponent(o)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(o)+"="+encodeURIComponent(a))},u=Object.entries(t)[Symbol.iterator]();!(r=(a=u.next()).done);r=!0)s(0,a)}catch(e){i=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n.length?"&"+n.join("&"):""}function Ie(t){var n={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var r=e(L)(t.split("="),2),i=r[0],o=r[1];n[decodeURIComponent(i)]=decodeURIComponent(o)}})),n}function Ee(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */var Te=function(){"use strict";function t(n,r){var i=this;e(C)(this,t),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(i)})).catch((function(e){i.error(e)}))}return e(M)(t,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=Oe),void 0===r.error&&(r.error=Oe),void 0===r.complete&&(r.complete=Oe);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),o}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),t}();function Oe(){}
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
function Se(e){return e&&e._delegate?e._delegate:e}var Ce=function(){"use strict";function t(n,r,i){e(C)(this,t),this.name=n,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(M)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}(),Me="[DEFAULT]",Pe=function(){"use strict";function t(n,r){e(C)(this,t),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(M)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new ve;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:Me})}catch(e){}var n=!0,r=!1,i=void 0;try{for(var o,a=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=e(L)(o.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var f=this.getOrInitializeService({instanceIdentifier:l});c.resolve(f)}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r;return e(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(t.instances.values()),n.next=3,Promise.all(e(N)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(N)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.options,r=void 0===n?{}:n,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var o=this.getOrInitializeService({instanceIdentifier:i,options:r}),a=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var f=e(L)(c.value,2),d=f[0],h=f[1],p=this.normalizeInstanceIdentifier(d);i===p&&h.resolve(o)}}catch(e){s=!0,u=e}finally{try{a||null==l.return||l.return()}finally{if(s)throw u}}return o}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&e(o,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,o=void 0;try{for(var a,s=n[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===Me?void 0:t),options:i}),this.instances.set(n,o),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch(e){}return o||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me;return this.component?this.component.multipleInstances?e:Me:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();
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
 */var Ne,Le,Ae=function(){"use strict";function t(n){e(C)(this,t),this.name=n,this.providers=new Map}return e(M)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Pe(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}(),Re=(C=i("8MBJY"),M=i("a2hTj"),P=i("hKHmD"),N=i("8nrFW"),[]);(Le=Ne||(Ne={}))[Le.DEBUG=0]="DEBUG",Le[Le.VERBOSE=1]="VERBOSE",Le[Le.INFO=2]="INFO",Le[Le.WARN=3]="WARN",Le[Le.ERROR=4]="ERROR",Le[Le.SILENT=5]="SILENT";var De,$e={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},je=Ne.INFO,Ue=(De={},e(P)(De,Ne.DEBUG,"log"),e(P)(De,Ne.VERBOSE,"log"),e(P)(De,Ne.INFO,"info"),e(P)(De,Ne.WARN,"warn"),e(P)(De,Ne.ERROR,"error"),De),He=function(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];var a;if(!(n<t.logLevel)){var s=(new Date).toISOString(),u=Ue[n];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(a=console)[u].apply(a,["[".concat(s,"]  ").concat(t.name,":")].concat(e(N)(i)))}},Be=function(){"use strict";function t(n){e(C)(this,t),this.name=n,this._logLevel=je,this._logHandler=He,this._userLogHandler=null,Re.push(this)}return e(M)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in Ne))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?$e[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ne.DEBUG].concat(e(N)(n))),this._logHandler.apply(this,[this,Ne.DEBUG].concat(e(N)(n)))}},{key:"log",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ne.VERBOSE].concat(e(N)(n))),this._logHandler.apply(this,[this,Ne.VERBOSE].concat(e(N)(n)))}},{key:"info",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ne.INFO].concat(e(N)(n))),this._logHandler.apply(this,[this,Ne.INFO].concat(e(N)(n)))}},{key:"warn",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ne.WARN].concat(e(N)(n))),this._logHandler.apply(this,[this,Ne.WARN].concat(e(N)(n)))}},{key:"error",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ne.ERROR].concat(e(N)(n))),this._logHandler.apply(this,[this,Ne.ERROR].concat(e(N)(n)))}}]),t}();a=i("bpxeT");var Fe={};Object.defineProperty(Fe,"__esModule",{value:!0}),Fe.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Ve.default(e,t,n[t])}))}return e};var We,Ve=(We=i("hKHmD"))&&We.__esModule?We:{default:We};var ze,qe;N=i("8nrFW"),s=i("2TvXO"),N=i("8nrFW");var Ke=new WeakMap,Ge=new WeakMap,Je=new WeakMap,Ye=new WeakMap,Xe=new WeakMap;var Qe={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Ge.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Je.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tt(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function Ze(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(qe||(qe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.apply(nt(this),n),tt(Ke.get(this))}:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return tt(t.apply(nt(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];var a,s=(a=t).call.apply(a,[nt(this),n].concat(e(N)(i)));return Je.set(s,n.sort?n.sort():[n]),tt(s)}}function et(e){return"function"==typeof e?Ze(e):(e instanceof IDBTransaction&&function(e){if(!Ge.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=function(){t(),r()},o=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));Ge.set(e,t)}}(e),t=e,(ze||(ze=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,Qe):e);var t}function tt(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",o)},i=function(){e(tt(t.result)),r()},o=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)}))).then((function(e){e instanceof IDBCursor&&Ke.set(e,t)})).catch((function(){})),Xe.set(n,t),n;var t,n;if(Ye.has(e))return Ye.get(e);var r=et(e);return r!==e&&(Ye.set(e,r),Xe.set(r,e)),r}var nt=function(e){return Xe.get(e)};function rt(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,o=n.blocking,a=n.terminated,s=indexedDB.open(e,t),u=tt(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(tt(s.result),e.oldVersion,e.newVersion,tt(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){a&&e.addEventListener("close",(function(){return a()})),o&&e.addEventListener("versionchange",(function(){return o()}))})).catch((function(){})),u}var it=["get","getKey","getAll","getAllKeys","count"],ot=["put","add","delete","clear"],at=new Map;function st(t,n){if(t instanceof IDBDatabase&&!(n in t)&&"string"==typeof n){if(at.get(n))return at.get(n);var r=n.replace(/FromIndex$/,""),i=n!==r,o=ot.includes(r);if(r in(i?IDBIndex:IDBObjectStore).prototype&&(o||it.includes(r))){var u,c=(u=e(a)(e(s).mark((function t(n){var a,u,c,l,f,d,h=arguments;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=h.length,u=new Array(a>1?a-1:0),c=1;c<a;c++)u[c-1]=h[c];return f=this.transaction(n,o?"readwrite":"readonly"),d=f.store,i&&(d=d.index(u.shift())),t.next=7,Promise.all([(l=d)[r].apply(l,e(N)(u)),o&&f.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)}))),function(e){return u.apply(this,arguments)});return at.set(n,c),c}}}Qe=function(t){return e(Fe)({},t,{get:function(e,n,r){return st(e,n)||t.get(e,n,r)},has:function(e,n){return!!st(e,n)||t.has(e,n)}})}(Qe);
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
var ut=function(){"use strict";function t(n){e(C)(this,t),this.container=n}return e(M)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}();var ct,lt,ft="@firebase/app",dt="0.8.4",ht=new Be("@firebase/app"),pt="[DEFAULT]",vt=(ct={},e(P)(ct,ft,"fire-core"),e(P)(ct,"@firebase/app-compat","fire-core-compat"),e(P)(ct,"@firebase/analytics","fire-analytics"),e(P)(ct,"@firebase/analytics-compat","fire-analytics-compat"),e(P)(ct,"@firebase/app-check","fire-app-check"),e(P)(ct,"@firebase/app-check-compat","fire-app-check-compat"),e(P)(ct,"@firebase/auth","fire-auth"),e(P)(ct,"@firebase/auth-compat","fire-auth-compat"),e(P)(ct,"@firebase/database","fire-rtdb"),e(P)(ct,"@firebase/database-compat","fire-rtdb-compat"),e(P)(ct,"@firebase/functions","fire-fn"),e(P)(ct,"@firebase/functions-compat","fire-fn-compat"),e(P)(ct,"@firebase/installations","fire-iid"),e(P)(ct,"@firebase/installations-compat","fire-iid-compat"),e(P)(ct,"@firebase/messaging","fire-fcm"),e(P)(ct,"@firebase/messaging-compat","fire-fcm-compat"),e(P)(ct,"@firebase/performance","fire-perf"),e(P)(ct,"@firebase/performance-compat","fire-perf-compat"),e(P)(ct,"@firebase/remote-config","fire-rc"),e(P)(ct,"@firebase/remote-config-compat","fire-rc-compat"),e(P)(ct,"@firebase/storage","fire-gcs"),e(P)(ct,"@firebase/storage-compat","fire-gcs-compat"),e(P)(ct,"@firebase/firestore","fire-fst"),e(P)(ct,"@firebase/firestore-compat","fire-fst-compat"),e(P)(ct,"fire-js","fire-js"),e(P)(ct,"firebase","fire-js-all"),ct),mt=new Map,gt=new Map;function yt(e,t){try{e.container.addComponent(t)}catch(n){ht.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function kt(e){var t=e.name;if(gt.has(t))return ht.debug("There were multiple attempts to register component ".concat(t,".")),!1;gt.set(t,e);var n=!0,r=!1,i=void 0;try{for(var o,a=mt.values()[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){yt(o.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return!0}function bt(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
var _t=(lt={},e(P)(lt,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),e(P)(lt,"bad-app-name","Illegal App name: '{$appName}"),e(P)(lt,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(P)(lt,"app-deleted","Firebase App named '{$appName}' already deleted"),e(P)(lt,"no-options","Need to provide options, when not being deployed to hosting via source."),e(P)(lt,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(P)(lt,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(P)(lt,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),e(P)(lt,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),e(P)(lt,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),e(P)(lt,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),lt),wt=new ge("app","Firebase",_t),xt=function(){"use strict";function t(n,r,i){var o=this;e(C)(this,t),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ce("app",(function(){return o}),"PUBLIC"))}return e(M)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw wt.create("app-deleted",{appName:this._name})}}]),t}(),It="9.14.0";function Et(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var i=Object.assign({name:pt,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!=typeof o||!o)throw wt.create("bad-app-name",{appName:String(o)});if(n||(n=he()),!n)throw wt.create("no-options");var a=mt.get(o);if(a){if(_e(n,a.options)&&_e(i,a.config))return a;throw wt.create("duplicate-app",{appName:o})}var s=new Ae(o),u=!0,c=!1,l=void 0;try{for(var f,d=gt.values()[Symbol.iterator]();!(u=(f=d.next()).done);u=!0){var h=f.value;s.addComponent(h)}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}var p=new xt(n,i,s);return mt.set(o,p),p}function Tt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,t=mt.get(e);if(!t&&e===pt)return Et();if(!t)throw wt.create("no-app",{appName:e});return t}function Ot(e,t,n){var r,i=null!==(r=vt[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return o&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),o&&a&&s.push("and"),a&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void ht.warn(s.join(" "))}kt(new Ce("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
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
var St="firebase-heartbeat-store",Ct=null;function Mt(){return Ct||(Ct=rt("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(St)}}).catch((function(e){throw wt.create("idb-open",{originalErrorMessage:e.message})}))),Ct}function Pt(e){return Nt.apply(this,arguments)}function Nt(){return(Nt=e(a)(e(s).mark((function t(n){var r,i,o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Mt();case 4:return i=e.sent,e.abrupt("return",i.transaction(St).objectStore(St).get(Rt(n)));case 8:e.prev=8,e.t0=e.catch(1),e.t0 instanceof me?ht.warn(e.t0.message):(o=wt.create("idb-get",{originalErrorMessage:null===(r=e.t0)||void 0===r?void 0:r.message}),ht.warn(o.message));case 11:case"end":return e.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function Lt(e,t){return At.apply(this,arguments)}function At(){return(At=e(a)(e(s).mark((function t(n,r){var i,o,a,u,c;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Mt();case 4:return o=e.sent,a=o.transaction(St,"readwrite"),u=a.objectStore(St),e.next=9,u.put(r,Rt(n));case 9:return e.abrupt("return",a.done);case 12:e.prev=12,e.t0=e.catch(1),e.t0 instanceof me?ht.warn(e.t0.message):(c=wt.create("idb-set",{originalErrorMessage:null===(i=e.t0)||void 0===i?void 0:i.message}),ht.warn(c.message));case 15:case"end":return e.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}function Rt(e){return"".concat(e.name,"!").concat(e.options.appId)}
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
 */var Dt=function(){"use strict";function t(n){var r=this;e(C)(this,t),this.container=n,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new Ht(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return e(M)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r,i,o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),o=$t(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==o&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===o}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:o,agent:i});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r,i,o,a,u;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(r=$t(),i=jt(t._heartbeatsCache.heartbeats),o=i.heartbeatsToSend,a=i.unsentEntries,u=se(JSON.stringify({version:2,heartbeats:o})),t._heartbeatsCache.lastSentHeartbeatDate=r,!(a.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=a,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",u);case 17:case"end":return e.stop()}}),n)})))()}}]),t}();function $t(){return(new Date).toISOString().substring(0,10)}function jt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,o=!1,a=void 0;try{for(var s,u=function(e,i){var o=i.value,a=n.find((function(e){return e.agent===o.agent}));if(a){if(a.dates.push(o.date),Bt(n)>t)return a.dates.pop(),"break"}else if(n.push({agent:o.agent,dates:[o.date]}),Bt(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){o=!0,a=e}finally{try{i||null==c.return||c.return()}finally{if(o)throw a}}return{heartbeatsToSend:n,unsentEntries:r}}var Ut,Ht=function(){"use strict";function t(n){e(C)(this,t),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(M)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(a)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("object"==typeof indexedDB){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,Pt(t.app);case 9:return r=e.sent,e.abrupt("return",r||{heartbeats:[]});case 11:case"end":return e.stop()}}),n)})))()}},{key:"overwrite",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i,o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,n.read();case 10:return o=e.sent,e.abrupt("return",Lt(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:o.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),r)})))()}},{key:"add",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i,o;return e(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return o=r.sent,r.abrupt("return",Lt(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:o.lastSentHeartbeatDate,heartbeats:e(N)(o.heartbeats).concat(e(N)(t.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),t}();function Bt(e){return se(JSON.stringify({version:2,heartbeats:e})).length}
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
 */Ut="",kt(new Ce("platform-logger",(function(e){return new ut(e)}),"PRIVATE")),kt(new Ce("heartbeat",(function(e){return new Dt(e)}),"PRIVATE")),Ot(ft,dt,Ut),Ot(ft,dt,"esm2017"),Ot("fire-js","");
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
Ot("firebase","9.14.0","app");A=i("ds8z5"),a=i("bpxeT"),C=i("8MBJY"),M=i("a2hTj"),P=i("hKHmD");var Ft={};Object.defineProperty(Ft,"__esModule",{value:!0}),Ft.default=function(e,t,n){return Vt(e,t,n)};var Wt=function(e){return e&&e.__esModule?e:{default:e}}(i("2mz0K"));function Vt(e,t,n){return(Vt="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=Wt.default(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n||e):i.value}})(e,t,n)}var zt=i("fVNic");R=i("eYQtU"),L=i("1t1Wn"),N=i("8nrFW"),q=i("2MbLg"),s=i("2TvXO");function qt(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function Kt(){return e(P)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var Gt=Kt,Jt=new ge("auth","Firebase",Kt()),Yt=new Be("@firebase/auth");function Xt(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o;Yt.logLevel<=Ne.ERROR&&(o=Yt).error.apply(o,["Auth (".concat(It,"): ").concat(t)].concat(e(N)(r)))}
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
 */function Qt(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];throw nn.apply(void 0,[t].concat(e(N)(r)))}function Zt(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return nn.apply(void 0,[t].concat(e(N)(r)))}function en(t,n,r){var i=Object.assign(Object.assign({},Gt()),e(P)({},n,r));return new ge("auth","Firebase",i).create(n,{appName:t.name})}function tn(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&Qt(e,"argument-error"),en(e,"argument-error","Type of ".concat(t.constructor.name," does not match expected instance.")+"Did you pass a reference from a different Auth SDK?")}function nn(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o;if("string"!=typeof t){var a,s=r[0],u=e(N)(r.slice(1));return u[0]&&(u[0].appName=t.name),(a=t._errorFactory).create.apply(a,[s].concat(e(N)(u)))}return(o=Jt).create.apply(o,[t].concat(e(N)(r)))}function rn(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];if(!t)throw nn.apply(void 0,[n].concat(e(N)(i)))}function on(e){var t="INTERNAL ASSERTION FAILED: "+e;throw Xt(t),new Error(t)}function an(e,t){e||on(t)}
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
 */var sn=new Map;function un(e){an(e instanceof Function,"Expected a class definition");var t=sn.get(e);return t?(an(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,sn.set(e,t),t)}
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
 */function cn(e,t){var n=bt(e,"auth");if(n.isInitialized()){var r=n.getImmediate();if(_e(n.getOptions(),null!=t?t:{}))return r;Qt(r,"already-initialized")}return n.initialize({options:t})}
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
function ln(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function fn(){return"http:"===dn()||"https:"===dn()}function dn(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function hn(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!fn()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
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
var pn=function(){"use strict";function t(n,r){e(C)(this,t),this.shortDelay=n,this.longDelay=r,an(r>n,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ce())||"object"==typeof navigator&&"ReactNative"===navigator.product}return e(M)(t,[{key:"get",value:function(){return hn()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}]),t}();
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
 */function vn(e,t){an(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
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
 */var mn,gn=function(){"use strict";function t(){e(C)(this,t)}return e(M)(t,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void on("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void on("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void on("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),t}(),yn=(mn={},e(P)(mn,"CREDENTIAL_MISMATCH","custom-token-mismatch"),e(P)(mn,"MISSING_CUSTOM_TOKEN","internal-error"),e(P)(mn,"INVALID_IDENTIFIER","invalid-email"),e(P)(mn,"MISSING_CONTINUE_URI","internal-error"),e(P)(mn,"INVALID_PASSWORD","wrong-password"),e(P)(mn,"MISSING_PASSWORD","internal-error"),e(P)(mn,"EMAIL_EXISTS","email-already-in-use"),e(P)(mn,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),e(P)(mn,"INVALID_IDP_RESPONSE","invalid-credential"),e(P)(mn,"INVALID_PENDING_TOKEN","invalid-credential"),e(P)(mn,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),e(P)(mn,"MISSING_REQ_TYPE","internal-error"),e(P)(mn,"EMAIL_NOT_FOUND","user-not-found"),e(P)(mn,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),e(P)(mn,"EXPIRED_OOB_CODE","expired-action-code"),e(P)(mn,"INVALID_OOB_CODE","invalid-action-code"),e(P)(mn,"MISSING_OOB_CODE","internal-error"),e(P)(mn,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),e(P)(mn,"INVALID_ID_TOKEN","invalid-user-token"),e(P)(mn,"TOKEN_EXPIRED","user-token-expired"),e(P)(mn,"USER_NOT_FOUND","user-token-expired"),e(P)(mn,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),e(P)(mn,"INVALID_CODE","invalid-verification-code"),e(P)(mn,"INVALID_SESSION_INFO","invalid-verification-id"),e(P)(mn,"INVALID_TEMPORARY_PROOF","invalid-credential"),e(P)(mn,"MISSING_SESSION_INFO","missing-verification-id"),e(P)(mn,"SESSION_EXPIRED","code-expired"),e(P)(mn,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),e(P)(mn,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),e(P)(mn,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),e(P)(mn,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),e(P)(mn,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),e(P)(mn,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),e(P)(mn,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),e(P)(mn,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),e(P)(mn,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),e(P)(mn,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),e(P)(mn,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),mn),kn=new pn(3e4,6e4);function bn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function _n(e,t,n,r){return wn.apply(this,arguments)}function wn(){return wn=e(a)(e(s).mark((function t(n,r,i,o){var u,c=arguments;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=c.length>4&&void 0!==c[4]?c[4]:{},t.abrupt("return",xn(n,u,e(a)(e(s).mark((function t(){var a,u,c,l;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},u={},o&&("GET"===r?u=o:a={body:JSON.stringify(o)}),c=xe(Object.assign({key:n.config.apiKey},u)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(l=e.sent)["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",gn.fetch()(On(n,n.config.apiHost,i,c),Object.assign({method:r,headers:l,referrerPolicy:"no-referrer"},a)));case 10:case"end":return e.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)}))),wn.apply(this,arguments)}function xn(e,t,n){return In.apply(this,arguments)}function In(){return(In=e(a)(e(s).mark((function t(n,r,i){var o,a,u,c,l,f,d,h,p;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n._canInitEmulator=!1,o=Object.assign(Object.assign({},yn),r),t.prev=2,a=new Sn(n),t.next=6,Promise.race([i(),a.promise]);case 6:return u=t.sent,a.clearNetworkTimeout(),t.next=10,u.json();case 10:if(!("needConfirmation"in(c=t.sent))){t.next=13;break}throw Cn(n,"account-exists-with-different-credential",c);case 13:if(!u.ok||"errorMessage"in c){t.next=17;break}return t.abrupt("return",c);case 17:if(l=u.ok?c.errorMessage:c.error.message,f=e(L)(l.split(" : "),2),d=f[0],h=f[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==d){t.next=23;break}throw Cn(n,"credential-already-in-use",c);case 23:if("EMAIL_EXISTS"!==d){t.next=27;break}throw Cn(n,"email-already-in-use",c);case 27:if("USER_DISABLED"!==d){t.next=29;break}throw Cn(n,"user-disabled",c);case 29:if(p=o[d]||d.toLowerCase().replace(/[_\s]+/g,"-"),!h){t.next=34;break}throw en(n,p,h);case 34:Qt(n,p);case 35:t.next=42;break;case 37:if(t.prev=37,t.t0=t.catch(2),!(t.t0 instanceof me)){t.next=41;break}throw t.t0;case 41:Qt(n,"network-request-failed");case 42:case"end":return t.stop()}}),t,null,[[2,37]])})))).apply(this,arguments)}function En(e,t,n,r){return Tn.apply(this,arguments)}function Tn(){return Tn=e(a)(e(s).mark((function t(n,r,i,o){var a,u,c=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>4&&void 0!==c[4]?c[4]:{},e.next=3,_n(n,r,i,o,a);case 3:return"mfaPendingCredential"in(u=e.sent)&&Qt(n,"multi-factor-auth-required",{_serverResponse:u}),e.abrupt("return",u);case 6:case"end":return e.stop()}}),t)}))),Tn.apply(this,arguments)}function On(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?vn(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var Sn=function(){"use strict";function t(n){var r=this;e(C)(this,t),this.auth=n,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(Zt(n.auth,"network-request-failed"))}),kn.get())}))}return e(M)(t,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),t}();function Cn(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=Zt(e,t,r);return i.customData._tokenResponse=n,i}function Mn(e,t){return Pn.apply(this,arguments)}function Pn(){return(Pn=
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
e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",_n(n,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Nn(e,t){return Ln.apply(this,arguments)}function Ln(){return(Ln=e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",_n(n,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */function An(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function Rn(){return Rn=e(a)(e(s).mark((function t(n){var r,i,o,a,u,c,l=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>1&&void 0!==l[1]&&l[1],i=Se(n),e.next=4,i.getIdToken(r);case 4:return o=e.sent,rn((a=$n(o))&&a.exp&&a.auth_time&&a.iat,i.auth,"internal-error"),u="object"==typeof a.firebase?a.firebase:void 0,c=null==u?void 0:u.sign_in_provider,e.abrupt("return",{claims:a,token:o,authTime:An(Dn(a.auth_time)),issuedAtTime:An(Dn(a.iat)),expirationTime:An(Dn(a.exp)),signInProvider:c||null,signInSecondFactor:(null==u?void 0:u.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),t)}))),Rn.apply(this,arguments)}function Dn(e){return 1e3*Number(e)}function $n(t){var n,r=e(L)(t.split("."),3),i=r[0],o=r[1],a=r[2];if(void 0===i||void 0===o||void 0===a)return Xt("JWT malformed, contained fewer than 3 sections"),null;try{var s=ue(o);return s?JSON.parse(s):(Xt("Failed to decode base64 JWT payload"),null)}catch(e){return Xt("Caught error parsing JWT payload as JSON",null===(n=e)||void 0===n?void 0:n.toString()),null}}function jn(e,t){return Un.apply(this,arguments)}function Un(){return Un=
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
e(a)(e(s).mark((function t(n,r){var i=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof me&&Hn(e.t0))){e.next=15;break}if(n.auth.currentUser!==n){e.next=15;break}return e.next=15,n.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),t,null,[[3,9]])}))),Un.apply(this,arguments)}function Hn(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */var Bn=function(){"use strict";function t(n){e(C)(this,t),this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return e(M)(t,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(t),r=this;this.timerId=setTimeout(e(a)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),t)}))),n)}}},{key:"iteration",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,t.user.getIdToken(!0);case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(1),"auth/network-request-failed"===(null===(r=e.t0)||void 0===r?void 0:r.code)&&t.schedule(!0),e.abrupt("return");case 10:t.schedule();case 11:case"end":return e.stop()}}),n,null,[[1,6]])})))()}}]),t}(),Fn=function(){"use strict";function t(n,r){e(C)(this,t),this.createdAt=n,this.lastLoginAt=r,this._initializeTime()}return e(M)(t,[{key:"_initializeTime",value:function(){this.lastSignInTime=An(this.lastLoginAt),this.creationTime=An(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),t}();
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
 */function Wn(e){return Vn.apply(this,arguments)}function Vn(){return(Vn=
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
e(a)(e(s).mark((function t(n){var r,i,o,a,u,c,l,f,d,h,p;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.auth,e.next=4,n.getIdToken();case 4:return o=e.sent,e.next=7,jn(n,Nn(i,{idToken:o}));case 7:rn(null==(a=e.sent)?void 0:a.users.length,i,"internal-error"),u=a.users[0],n._notifyReloadListener(u),c=(null===(r=u.providerUserInfo)||void 0===r?void 0:r.length)?Kn(u.providerUserInfo):[],l=qn(n.providerData,c),f=n.isAnonymous,d=!(n.email&&u.passwordHash||(null==l?void 0:l.length)),h=!!f&&d,p={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:l,metadata:new Fn(u.createdAt,u.lastLoginAt),isAnonymous:h},Object.assign(n,p);case 18:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function zn(){return(zn=e(a)(e(s).mark((function t(n){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Se(n),e.next=3,Wn(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function qn(t,n){var r=t.filter((function(e){return!n.some((function(t){return t.providerId===e.providerId}))}));return e(N)(r).concat(e(N)(n))}function Kn(e){return e.map((function(e){var t=e.providerId,n=qt(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function Gn(e,t){return Jn.apply(this,arguments)}function Jn(){return(Jn=
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
e(a)(e(s).mark((function t(n,r){var i;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,xn(n,{},e(a)(e(s).mark((function t(){var i,o,a,u,c,l;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=xe({grant_type:"refresh_token",refresh_token:r}).slice(1),o=n.config,a=o.tokenApiHost,u=o.apiKey,c=On(n,a,"/v1/token","key=".concat(u)),e.next=5,n._getAdditionalHeaders();case 5:return(l=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",gn.fetch()(c,{method:"POST",headers:l,body:i}));case 8:case"end":return e.stop()}}),t)}))));case 2:return i=t.sent,t.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
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
 */var Yn=function(){"use strict";function t(){e(C)(this,t),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return e(M)(t,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){rn(e.idToken,"internal-error"),rn(void 0!==e.idToken,"internal-error"),rn(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,rn(n=$n(t),"internal-error"),rn(void 0!==n.exp,"internal-error"),rn(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(s).mark((function i(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(rn(!r.accessToken||r.refreshToken,t,"user-token-expired"),n||!r.accessToken||r.isExpired){e.next=3;break}return e.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){e.next=7;break}return e.next=6,r.refresh(t,r.refreshToken);case 6:return e.abrupt("return",r.accessToken);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(t,n){var r=this;return e(a)(e(s).mark((function i(){var o,a,u,c;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Gn(t,n);case 2:o=e.sent,a=o.accessToken,u=o.refreshToken,c=o.expiresIn,r.updateTokensAndExpiration(a,u,Number(c));case 7:case"end":return e.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new t,this.toJSON())}},{key:"_performRefresh",value:function(){return on("not implemented")}}],[{key:"fromJSON",value:function(e,n){var r=n.refreshToken,i=n.accessToken,o=n.expirationTime,a=new t;return r&&(rn("string"==typeof r,"internal-error",{appName:e}),a.refreshToken=r),i&&(rn("string"==typeof i,"internal-error",{appName:e}),a.accessToken=i),o&&(rn("number"==typeof o,"internal-error",{appName:e}),a.expirationTime=o),a}}]),t}();
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
 */function Xn(e,t){rn("string"==typeof e||void 0===e,"internal-error",{appName:t})}var Qn=function(){"use strict";function t(n){e(C)(this,t);var r=n.uid,i=n.auth,o=n.stsTokenManager,a=qt(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Bn(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?e(N)(a.providerData):[],this.metadata=new Fn(a.createdAt||void 0,a.lastLoginAt||void 0)}return e(M)(t,[{key:"getIdToken",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,jn(n,n.stsTokenManager.getToken(n.auth,t));case 2:if(rn(i=e.sent,n.auth,"internal-error"),n.accessToken===i){e.next=9;break}return n.accessToken=i,e.next=8,n.auth._persistUserIfCurrent(n);case 8:n.auth._notifyListenersIfCurrent(n);case 9:return e.abrupt("return",i);case 10:case"end":return e.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return Rn.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return zn.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(rn(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(e){return new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){rn(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(s).mark((function i(){var o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=!1,t.idToken&&t.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(t),o=!0),!n){e.next=5;break}return e.next=5,Wn(r);case 5:return e.next=7,r.auth._persistUserIfCurrent(r);case 7:o&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return e.stop()}}),i)})))()}},{key:"delete",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return r=e.sent,e.next=5,jn(t,Mn(t.auth,{idToken:r}));case 5:return t.stsTokenManager.clearRefreshToken(),e.abrupt("return",t.auth.signOut());case 7:case"end":return e.stop()}}),n)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(e,n){var r,i,o,a,s,u,c,l,f=null!==(r=n.displayName)&&void 0!==r?r:void 0,d=null!==(i=n.email)&&void 0!==i?i:void 0,h=null!==(o=n.phoneNumber)&&void 0!==o?o:void 0,p=null!==(a=n.photoURL)&&void 0!==a?a:void 0,v=null!==(s=n.tenantId)&&void 0!==s?s:void 0,m=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,g=null!==(c=n.createdAt)&&void 0!==c?c:void 0,y=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,k=n.uid,b=n.emailVerified,_=n.isAnonymous,w=n.providerData,x=n.stsTokenManager;rn(k&&x,e,"internal-error");var I=Yn.fromJSON(this.name,x);rn("string"==typeof k,e,"internal-error"),Xn(f,e.name),Xn(d,e.name),rn("boolean"==typeof b,e,"internal-error"),rn("boolean"==typeof _,e,"internal-error"),Xn(h,e.name),Xn(p,e.name),Xn(v,e.name),Xn(m,e.name),Xn(g,e.name),Xn(y,e.name);var E=new t({uid:k,auth:e,email:d,emailVerified:b,displayName:f,isAnonymous:_,photoURL:p,phoneNumber:h,tenantId:v,stsTokenManager:I,createdAt:g,lastLoginAt:y});return w&&Array.isArray(w)&&(E.providerData=w.map((function(e){return Object.assign({},e)}))),m&&(E._redirectEventId=m),E}},{key:"_fromIdTokenResponse",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(a)(e(s).mark((function o(){var a,u;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new Yn).updateFromServerResponse(r),u=new t({uid:r.localId,auth:n,stsTokenManager:a,isAnonymous:i}),e.next=5,Wn(u);case 5:return e.abrupt("return",u);case 6:case"end":return e.stop()}}),o)})))()}}]),t}(),Zn=function(){"use strict";function t(){e(C)(this,t),this.type="NONE",this.storage={}}return e(M)(t,[{key:"_isAvailable",value:function(){return e(a)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),t)})))()}},{key:"_set",value:function(t,n){var r=this;return e(a)(e(s).mark((function i(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.storage[t]=n;case 1:case"end":return e.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.storage[t],e.abrupt("return",void 0===i?null:i);case 2:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(a)(e(s).mark((function r(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete n.storage[t];case 1:case"end":return e.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),t}();
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
 */Zn.type="NONE";var er=Zn;
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
 */function tr(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var nr=function(){"use strict";function t(n,r,i){e(C)(this,t),this.persistence=n,this.auth=r,this.userKey=i;var o=this.auth,a=o.config,s=o.name;this.fullUserKey=tr(this.userKey,a.apiKey,s),this.fullPersistenceKey=tr("persistence",a.apiKey,s),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return e(M)(t,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.persistence._get(t.fullUserKey);case 2:return r=e.sent,e.abrupt("return",r?Qn._fromJSON(t.auth,r):null);case 4:case"end":return e.stop()}}),n)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.getCurrentUser();case 4:return i=e.sent,e.next=7,n.removeCurrentUser();case 7:if(n.persistence=t,!i){e.next=10;break}return e.abrupt("return",n.setCurrentUser(i));case 10:case"end":return e.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return e(a)(e(s).mark((function o(){var u,c,l,f,d,h,p,v,m,g,y,k,b;return e(s).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(r.length){o.next=2;break}return o.abrupt("return",new t(un(er),n,i));case 2:return o.next=4,Promise.all(r.map(function(){var t=e(a)(e(s).mark((function t(n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",n);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:u=o.sent.filter((function(e){return e})),c=u[0]||un(er),l=tr(i,n.config.apiKey,n.name),f=null,d=!0,h=!1,p=void 0,o.prev=9,v=r[Symbol.iterator]();case 11:if(d=(m=v.next()).done){o.next=29;break}return g=m.value,o.prev=13,o.next=16,g._get(l);case 16:if(!(y=o.sent)){o.next=22;break}return k=Qn._fromJSON(n,y),g!==c&&(f=k),c=g,o.abrupt("break",29);case 22:o.next=26;break;case 24:o.prev=24,o.t0=o.catch(13);case 26:d=!0,o.next=11;break;case 29:o.next=35;break;case 31:o.prev=31,o.t1=o.catch(9),h=!0,p=o.t1;case 35:o.prev=35,o.prev=36,d||null==v.return||v.return();case 38:if(o.prev=38,!h){o.next=41;break}throw p;case 41:return o.finish(38);case 42:return o.finish(35);case 43:if(b=u.filter((function(e){return e._shouldAllowMigration})),c._shouldAllowMigration&&b.length){o.next=46;break}return o.abrupt("return",new t(c,n,i));case 46:if(c=b[0],!f){o.next=50;break}return o.next=50,c._set(l,f.toJSON());case 50:return o.next=52,Promise.all(r.map(function(){var t=e(a)(e(s).mark((function t(n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===c){e.next=8;break}return e.prev=1,e.next=4,n._remove(l);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()));case 52:return o.abrupt("return",new t(c,n,i));case 53:case"end":return o.stop()}}),o,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),t}();
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
 */function rr(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(sr(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ir(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(cr(t))return"Blackberry";if(lr(t))return"Webos";if(or(t))return"Safari";if((t.includes("chrome/")||ar(t))&&!t.includes("edge/"))return"Chrome";if(ur(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function ir(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce();return/firefox\//i.test(e)}function or(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ar(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce();return/crios\//i.test(e)}function sr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce();return/iemobile/i.test(e)}function ur(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce();return/android/i.test(e)}function cr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce();return/blackberry/i.test(e)}function lr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce();return/webos/i.test(e)}function fr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function dr(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce();return fr(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function hr(){return((e=ce()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function pr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce();return fr(e)||ur(e)||lr(e)||cr(e)||/windows phone/i.test(e)||sr(e)}
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
function vr(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=rr(ce());break;case"Worker":t="".concat(rr(ce()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(It,"/").concat(r)}
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
 */var mr=function(){"use strict";function t(n){e(C)(this,t),this.auth=n,this.queue=[]}return e(M)(t,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i,o,a,u,c,l,f,d,h,p,v,m,g,y;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.auth.currentUser!==t){e.next=3;break}return e.abrupt("return");case 3:o=[],e.prev=4,a=!0,u=!1,c=void 0,e.prev=6,l=n.queue[Symbol.iterator]();case 8:if(a=(f=l.next()).done){e.next=16;break}return d=f.value,e.next=12,d(t);case 12:d.onAbort&&o.push(d.onAbort);case 13:a=!0,e.next=8;break;case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(6),u=!0,c=e.t0;case 22:e.prev=22,e.prev=23,a||null==l.return||l.return();case 25:if(e.prev=25,!u){e.next=28;break}throw c;case 28:return e.finish(25);case 29:return e.finish(22);case 30:e.next=53;break;case 32:for(e.prev=32,e.t1=e.catch(4),o.reverse(),h=!0,p=!1,v=void 0,e.prev=36,m=o[Symbol.iterator]();!(h=(g=m.next()).done);h=!0){y=g.value;try{y()}catch(e){}}e.next=44;break;case 40:e.prev=40,e.t2=e.catch(36),p=!0,v=e.t2;case 44:e.prev=44,e.prev=45,h||null==m.return||m.return();case 47:if(e.prev=47,!p){e.next=50;break}throw v;case 50:return e.finish(47);case 51:return e.finish(44);case 52:throw n.auth._errorFactory.create("login-blocked",{originalMessage:null===(i=e.t1)||void 0===i?void 0:i.message});case 53:case"end":return e.stop()}}),r,null,[[4,32],[6,18,22,30],[23,,25,29],[36,40,44,52],[45,,47,51]])})))()}}]),t}(),gr=function(){"use strict";function t(n,r,i){e(C)(this,t),this.app=n,this.heartbeatServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kr(this),this.idTokenSubscription=new kr(this),this.beforeStateQueue=new mr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jt,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=i.sdkClientVersion}return e(M)(t,[{key:"_initializeWithPersistence",value:function(t,n){n&&(this._popupRedirectResolver=un(n));var r=this;return this._initializationPromise=this.queue(e(a)(e(s).mark((function i(){var o,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r._deleted){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,nr.create(r,t);case 5:if(r.persistenceManager=e.sent,!r._deleted){e.next=8;break}return e.abrupt("return");case 8:if(!(null===(o=r._popupRedirectResolver)||void 0===o?void 0:o._shouldInitProactively)){e.next=16;break}return e.prev=9,e.next=12,r._popupRedirectResolver._initialize(r);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.next=18,r.initializeCurrentUser(n);case 18:if(r.lastNotifiedUid=(null===(a=r.currentUser)||void 0===a?void 0:a.uid)||null,!r._deleted){e.next=21;break}return e.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return e.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.assertedPersistence.getCurrentUser();case 4:if(r=e.sent,t.currentUser||r){e.next=7;break}return e.abrupt("return");case 7:if(!t.currentUser||!r||t.currentUser.uid!==r.uid){e.next=12;break}return t._currentUser._assign(r),e.next=11,t.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,t._updateCurrentUser(r,!0);case 14:case"end":return e.stop()}}),n)})))()}},{key:"initializeCurrentUser",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i,o,a,u,c,l,f;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n.assertedPersistence.getCurrentUser();case 3:if(o=e.sent,a=o,u=!1,!t||!n.config.authDomain){e.next=15;break}return e.next=9,n.getOrInitRedirectPersistenceManager();case 9:return c=null===(i=n.redirectUser)||void 0===i?void 0:i._redirectEventId,l=null==a?void 0:a._redirectEventId,e.next=13,n.tryRedirectSignIn(t);case 13:f=e.sent,c&&c!==l||!(null==f?void 0:f.user)||(a=f.user,u=!0);case 15:if(a){e.next=17;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 17:if(a._redirectEventId){e.next=33;break}if(!u){e.next=28;break}return e.prev=19,e.next=22,n.beforeStateQueue.runMiddleware(a);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(19),a=o,n._popupRedirectResolver._overrideRedirectResult(n,(function(){return Promise.reject(e.t0)}));case 28:if(!a){e.next=32;break}return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(a));case 32:return e.abrupt("return",n.directlySetCurrentUser(null));case 33:return rn(n._popupRedirectResolver,n,"argument-error"),e.next=36,n.getOrInitRedirectPersistenceManager();case 36:if(!n.redirectUser||n.redirectUser._redirectEventId!==a._redirectEventId){e.next=38;break}return e.abrupt("return",n.directlySetCurrentUser(a));case 38:return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(a));case 39:case"end":return e.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=null,e.prev=1,e.next=4,n._popupRedirectResolver._completeRedirectFn(n,t,!0);case 4:i=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,n._setRedirectUser(null);case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Wn(t);case 4:e.next=10;break;case 6:if(e.prev=6,e.t0=e.catch(1),"auth/network-request-failed"===(null===(i=e.t0)||void 0===i?void 0:i.code)){e.next=10;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 10:return e.abrupt("return",n.directlySetCurrentUser(t));case 11:case"end":return e.stop()}}),r,null,[[1,6]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var t=this;return e(a)(e(s).mark((function n(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._deleted=!0;case 1:case"end":return e.stop()}}),n)})))()}},{key:"updateCurrentUser",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=t?Se(t):null)&&rn(i.auth.config.apiKey===n.config.apiKey,n,"invalid-user-token"),e.abrupt("return",n._updateCurrentUser(i&&i._clone(n)));case 3:case"end":return e.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(s).mark((function i(){return e(s).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(t&&rn(r.tenantId===t.tenantId,r,"tenant-id-mismatch"),n){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(t);case 6:return i.abrupt("return",r.queue(e(a)(e(s).mark((function n(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.directlySetCurrentUser(t);case 2:r.notifyAuthListeners();case 3:case"end":return e.stop()}}),n)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var t=this;return e(a)(e(s).mark((function n(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeStateQueue.runMiddleware(null);case 2:if(!t.redirectPersistenceManager&&!t._popupRedirectResolver){e.next=5;break}return e.next=5,t._setRedirectUser(null);case 5:return e.abrupt("return",t._updateCurrentUser(null,!0));case 6:case"end":return e.stop()}}),n)})))()}},{key:"setPersistence",value:function(t){var n=this;return this.queue(e(a)(e(s).mark((function r(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.assertedPersistence.setPersistence(un(t));case 2:case"end":return e.stop()}}),r)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new ge("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(t,n){var r=this;return e(a)(e(s).mark((function i(){var o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getOrInitRedirectPersistenceManager(n);case 2:return o=e.sent,e.abrupt("return",null===t?o.removeCurrentUser():o.setCurrentUser(t));case 4:case"end":return e.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.redirectPersistenceManager){e.next=9;break}return rn(i=t&&un(t)||n._popupRedirectResolver,n,"argument-error"),e.next=5,nr.create(n,[un(i._redirectPersistence)],"redirectUser");case 5:return n.redirectPersistenceManager=e.sent,e.next=8,n.redirectPersistenceManager.getCurrentUser();case 8:n.redirectUser=e.sent;case 9:return e.abrupt("return",n.redirectPersistenceManager);case 10:case"end":return e.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i,o;return e(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._isInitialized){r.next=4;break}return r.next=4,n.queue(e(a)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)}))));case 4:if((null===(i=n._currentUser)||void 0===i?void 0:i._redirectEventId)!==t){r.next=6;break}return r.abrupt("return",n._currentUser);case 6:if((null===(o=n.redirectUser)||void 0===o?void 0:o._redirectEventId)!==t){r.next=8;break}return r.abrupt("return",n.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(t){var n=this;return e(a)(e(s).mark((function r(){return e(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t!==n.currentUser){r.next=2;break}return r.abrupt("return",n.queue(e(a)(e(s).mark((function r(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.directlySetCurrentUser(t));case 1:case"end":return e.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var o="function"==typeof t?t:t.next.bind(t),a=this._isInitialized?Promise.resolve():this._initializationPromise;return rn(a,this,"internal-error"),a.then((function(){return o(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(t){var n=this;return e(a)(e(s).mark((function r(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.currentUser&&n.currentUser!==t&&n._currentUser._stopProactiveRefresh(),t&&n.isProactiveRefreshEnabled&&t._startProactiveRefresh(),n.currentUser=t,!t){e.next=8;break}return e.next=6,n.assertedPersistence.setCurrentUser(t);case 6:e.next=10;break;case 8:return e.next=10,n.assertedPersistence.removeCurrentUser();case 10:case"end":return e.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return rn(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vr(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r,i,o;return e(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=e(P)({},"X-Client-Version",t.clientVersion),t.app.options.appId&&(i["X-Firebase-gmpid"]=t.app.options.appId),n.next=5,null===(r=t.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(o=n.sent)&&(i["X-Firebase-Client"]=o),n.abrupt("return",i);case 8:case"end":return n.stop()}}),n)})))()}}]),t}();
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
 */function yr(e){return Se(e)}var kr=function(){"use strict";function t(n){var r,i,o=this;e(C)(this,t),this.auth=n,this.observer=null,this.addObserver=(i=new Te((function(e){return o.observer=e}),r)).subscribe.bind(i)}return e(M)(t,[{key:"next",get:function(){return rn(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),t}();function br(t,n,r){var i=yr(t);rn(i._canInitEmulator,i,"emulator-config-failed"),rn(/^https?:\/\//.test(n),i,"invalid-emulator-scheme");var o=!!(null==r?void 0:r.disableWarnings),a=_r(n),s=function(t){var n=_r(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(n.length));if(!r)return{host:"",port:null};var i=r[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){var a=o[1];return{host:a,port:wr(i.substr(a.length+1))}}var s=e(L)(i.split(":"),2);return{host:s[0],port:wr(s[1])}}(n),u=s.host,c=s.port,l=null===c?"":":".concat(c);i.config.emulator={url:"".concat(a,"//").concat(u).concat(l,"/")},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:c,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})}),o||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function _r(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function wr(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var xr=function(){"use strict";function t(n,r){e(C)(this,t),this.providerId=n,this.signInMethod=r}return e(M)(t,[{key:"toJSON",value:function(){return on("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return on("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return on("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return on("not implemented")}}]),t}();function Ir(e,t){return Er.apply(this,arguments)}function Er(){return(Er=e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",_n(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Tr(e,t){return Or.apply(this,arguments)}function Or(){return(Or=
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
e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",En(n,"POST","/v1/accounts:signInWithPassword",bn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Sr(e,t){return Cr.apply(this,arguments)}function Cr(){return(Cr=
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
e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",En(n,"POST","/v1/accounts:signInWithEmailLink",bn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Mr(e,t){return Pr.apply(this,arguments)}function Pr(){return(Pr=e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",En(n,"POST","/v1/accounts:signInWithEmailLink",bn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var Nr=function(t){"use strict";e(R)(r,t);var n=e(q)(r);function r(t,i,o){var a,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e(C)(this,r),(a=n.call(this,"password",o))._email=t,a._password=i,a._tenantId=s,a}return e(M)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(t){var n=this;return e(a)(e(s).mark((function r(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",Tr(t,{returnSecureToken:!0,email:n._email,password:n._password}));case 4:return e.abrupt("return",Sr(t,{email:n._email,oobCode:n._password}));case 5:Qt(t,"internal-error");case 6:case"end":return e.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(t,n){var r=this;return e(a)(e(s).mark((function i(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",Ir(t,{idToken:n,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return e.abrupt("return",Mr(t,{idToken:n,email:r._email,oobCode:r._password}));case 5:Qt(t,"internal-error");case 6:case"end":return e.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(xr);function Lr(e,t){return Ar.apply(this,arguments)}function Ar(){return(Ar=
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
e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",En(n,"POST","/v1/accounts:signInWithIdp",bn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var Rr=function(t){"use strict";e(R)(r,t);var n=e(q)(r);function r(){var t;return e(C)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,t}return e(M)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return Lr(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,Lr(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,Lr(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=xe(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Qt("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,o=qt(t,["providerId","signInMethod"]);if(!n||!i)return null;var a=new r(n,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}}]),r}(xr);function Dr(e,t){return $r.apply(this,arguments)}function $r(){return($r=
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
e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",_n(n,"POST","/v1/accounts:sendVerificationCode",bn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function jr(){return(jr=e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",En(n,"POST","/v1/accounts:signInWithPhoneNumber",bn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ur(){return(Ur=e(a)(e(s).mark((function t(n,r){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,En(n,"POST","/v1/accounts:signInWithPhoneNumber",bn(n,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw Cn(n,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var Hr=e(P)({},"USER_NOT_FOUND","user-not-found");function Br(){return(Br=e(a)(e(s).mark((function t(n,r){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",En(n,"POST","/v1/accounts:signInWithPhoneNumber",bn(n,i),Hr));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var Fr=function(t){"use strict";e(R)(r,t);var n=e(q)(r);function r(t){var i;return e(C)(this,r),(i=n.call(this,"phone","phone")).params=t,i}return e(M)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return jr.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return Ur.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return Br.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,o=e.temporaryProof;return n||t||i||o?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:o}):null}}]),r}(xr);
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
 */var Wr=function(){"use strict";function t(n){var r,i,o,a,s,u;e(C)(this,t);var c=Ie(Ee(n)),l=null!==(r=c.apiKey)&&void 0!==r?r:null,f=null!==(i=c.oobCode)&&void 0!==i?i:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(o=c.mode)&&void 0!==o?o:null);rn(l&&f&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=f,this.continueUrl=null!==(a=c.continueUrl)&&void 0!==a?a:null,this.languageCode=null!==(s=c.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(u=c.tenantId)&&void 0!==u?u:null}return e(M)(t,null,[{key:"parseLink",value:function(e){var n=function(e){var t=Ie(Ee(e)).link,n=t?Ie(Ee(t)).deep_link_id:null,r=Ie(Ee(e)).deep_link_id;return(r?Ie(Ee(r)).link:null)||r||n||t||e}(e);try{return new t(n)}catch(e){return null}}}]),t}();
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
var Vr=function(){"use strict";function t(){e(C)(this,t),this.providerId=t.PROVIDER_ID}return e(M)(t,null,[{key:"credential",value:function(e,t){return Nr._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=Wr.parseLink(t);return rn(n,"argument-error"),Nr._fromEmailAndCode(e,n.code,n.tenantId)}}]),t}();Vr.PROVIDER_ID="password",Vr.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Vr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
var zr=function(){"use strict";function t(n){e(C)(this,t),this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}return e(M)(t,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),t}(),qr=function(t){"use strict";e(R)(r,t);var n=e(q)(r);function r(){var t;return e(C)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],t}return e(M)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return e(N)(this.scopes)}}]),r}(zr),Kr=function(t){"use strict";e(R)(r,t);var n=e(q)(r);function r(){return e(C)(this,r),n.call(this,"facebook.com")}return e(M)(r,null,[{key:"credential",value:function(e){return Rr._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(qr);
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
 */Kr.FACEBOOK_SIGN_IN_METHOD="facebook.com",Kr.PROVIDER_ID="facebook.com";
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
var Gr=function(t){"use strict";e(R)(r,t);var n=e(q)(r);function r(){var t;return e(C)(this,r),(t=n.call(this,"google.com")).addScope("profile"),t}return e(M)(r,null,[{key:"credential",value:function(e,t){return Rr._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(qr);Gr.GOOGLE_SIGN_IN_METHOD="google.com",Gr.PROVIDER_ID="google.com";
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
var Jr=function(t){"use strict";e(R)(r,t);var n=e(q)(r);function r(){return e(C)(this,r),n.call(this,"github.com")}return e(M)(r,null,[{key:"credential",value:function(e){return Rr._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(qr);Jr.GITHUB_SIGN_IN_METHOD="github.com",Jr.PROVIDER_ID="github.com";
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
var Yr=function(t){"use strict";e(R)(r,t);var n=e(q)(r);function r(){return e(C)(this,r),n.call(this,"twitter.com")}return e(M)(r,null,[{key:"credential",value:function(e,t){return Rr._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(qr);Yr.TWITTER_SIGN_IN_METHOD="twitter.com",Yr.PROVIDER_ID="twitter.com";
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
var Xr=function(){"use strict";function t(n){e(C)(this,t),this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}return e(M)(t,null,[{key:"_fromIdTokenResponse",value:function(n,r,i){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e(a)(e(s).mark((function a(){var u,c,l;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Qn._fromIdTokenResponse(n,i,o);case 2:return u=e.sent,c=Qr(i),l=new t({user:u,providerId:c,_tokenResponse:i,operationType:r}),e.abrupt("return",l);case 6:case"end":return e.stop()}}),a)})))()}},{key:"_forOperation",value:function(n,r,i){return e(a)(e(s).mark((function o(){var a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._updateTokensIfNecessary(i,!0);case 2:return a=Qr(i),e.abrupt("return",new t({user:n,providerId:a,_tokenResponse:i,operationType:r}));case 4:case"end":return e.stop()}}),o)})))()}}]),t}();function Qr(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
var Zr=function(t){"use strict";e(R)(r,t);var n=e(q)(r);function r(t,i,o,a){var s,u;return e(C)(this,r),(s=n.call(this,i.code,i.message)).operationType=o,s.user=a,Object.setPrototypeOf(e(A)(s),r.prototype),s.customData={appName:t.name,tenantId:null!==(u=t.tenantId)&&void 0!==u?u:void 0,_serverResponse:i.customData._serverResponse,operationType:o},s}return e(M)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(me);function ei(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw Zr._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */function ti(e,t){return ni.apply(this,arguments)}function ni(){return ni=e(a)(e(s).mark((function t(n,r){var i,o,a=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.length>2&&void 0!==a[2]&&a[2],e.t0=jn,e.t1=n,e.t2=r,e.t3=n.auth,e.next=7,n.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return o=e.sent,e.abrupt("return",Xr._forOperation(n,"link",o));case 14:case"end":return e.stop()}}),t)}))),ni.apply(this,arguments)}function ri(e,t){return ii.apply(this,arguments)}function ii(){return ii=
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
e(a)(e(s).mark((function t(n,r){var i,o,a,u,c,l,f,d=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=d.length>2&&void 0!==d[2]&&d[2],a=n.auth,u="reauthenticate",e.prev=4,e.next=7,jn(n,ei(a,u,r,n),i);case 7:return rn((c=e.sent).idToken,a,"internal-error"),rn(l=$n(c.idToken),a,"internal-error"),f=l.sub,rn(n.uid===f,a,"user-mismatch"),e.abrupt("return",Xr._forOperation(n,u,c));case 16:throw e.prev=16,e.t0=e.catch(4),"auth/user-not-found"===(null===(o=e.t0)||void 0===o?void 0:o.code)&&Qt(a,"user-mismatch"),e.t0;case 20:case"end":return e.stop()}}),t,null,[[4,16]])}))),ii.apply(this,arguments)}function oi(e,t){return ai.apply(this,arguments)}function ai(){return ai=
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
e(a)(e(s).mark((function t(n,r){var i,o,a,u,c=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],o="signIn",e.next=4,ei(n,o,r);case 4:return a=e.sent,e.next=7,Xr._fromIdTokenResponse(n,o,a);case 7:if(u=e.sent,i){e.next=11;break}return e.next=11,n._updateCurrentUser(u.user);case 11:return e.abrupt("return",u);case 12:case"end":return e.stop()}}),t)}))),ai.apply(this,arguments)}function si(e,t){return ui.apply(this,arguments)}function ui(){return(ui=e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",oi(yr(n),r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ci(e,t,n){return si(Se(e),Vr.credential(t,n))}function li(e,t,n,r){return Se(e).onIdTokenChanged(t,n,r)}function fi(e,t,n){return Se(e).beforeAuthStateChanged(t,n)}
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
function di(e,t){return _n(e,"POST","/v2/accounts/mfaEnrollment:start",bn(e,t))}new WeakMap;var hi="__sak",pi=function(){"use strict";function t(n,r){e(C)(this,t),this.storageRetriever=n,this.type=r}return e(M)(t,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(hi,"1"),this.storage.removeItem(hi),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),t}();
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
 */var vi=function(t){"use strict";e(R)(r,t);var n=e(q)(r);function r(){var t,i;return e(C)(this,r),(t=n.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(e,n){return t.onStorageEvent(e,n)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=(or(i=ce())||fr(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),t.fallbackToPolling=pr(),t._shouldAllowMigration=!0,t}return e(M)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,o=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value,s=this.storage.getItem(a),u=this.localCache[a];s!==u&&e(a,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var o=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},a=this.storage.getItem(r);hr()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,10):o()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,o=void 0;if(n)try{for(var a,s=Array.from(n)[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){(0,a.value)(t?JSON.parse(t):t)}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(t,n){var i=this,o=this;return e(a)(e(s).mark((function a(){return e(s).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(Ft)(e(zt)(r.prototype),"_set",i).call(o,t,n);case 2:o.localCache[t]=JSON.stringify(n);case 3:case"end":return a.stop()}}),a)})))()}},{key:"_get",value:function(t){var n=this,i=this;return e(a)(e(s).mark((function o(){var a;return e(s).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e(Ft)(e(zt)(r.prototype),"_get",n).call(i,t);case 2:return a=o.sent,i.localCache[t]=JSON.stringify(a),o.abrupt("return",a);case 5:case"end":return o.stop()}}),o)})))()}},{key:"_remove",value:function(t){var n=this,i=this;return e(a)(e(s).mark((function o(){return e(s).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e(Ft)(e(zt)(r.prototype),"_remove",n).call(i,t);case 2:delete i.localCache[t];case 3:case"end":return o.stop()}}),o)})))()}}]),r}(pi);vi.type="LOCAL";var mi=vi,gi=function(t){"use strict";e(R)(r,t);var n=e(q)(r);function r(){return e(C)(this,r),n.call(this,(function(){return window.sessionStorage}),"SESSION")}return e(M)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(pi);
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
 */gi.type="SESSION";var yi=gi;
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
 */function ki(t){return Promise.all(t.map((n=e(a)(e(s).mark((function t(n){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),t,null,[[0,7]])}))),function(e){return n.apply(this,arguments)})));var n}
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
 */var bi=function(){"use strict";function t(n){e(C)(this,t),this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return e(M)(t,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i,o,u,c,l,f,d,h;return e(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=(i=t).data,u=o.eventId,c=o.eventType,l=o.data,null==(f=n.handlersMap[c])?void 0:f.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:u,eventType:c}),d=Array.from(f).map(function(){var t=e(a)(e(s).mark((function t(n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(i.origin,l));case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r.next=9,ki(d);case 9:h=r.sent,i.ports[0].postMessage({status:"done",eventId:u,eventType:c,response:h});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(e){var n=this.receivers.find((function(t){return t.isListeningto(e)}));if(n)return n;var r=new t(e);return this.receivers.push(r),r}}]),t}();
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
function _i(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */bi.receivers=[];var wi=function(){"use strict";function t(n){e(C)(this,t),this.target=n,this.handlers=new Set}return e(M)(t,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return e(a)(e(s).mark((function o(){var a,u,c;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=3;break}throw new Error("connection_unavailable");case 3:return e.abrupt("return",new Promise((function(e,o){var s=_i("",20);a.port1.start();var l=setTimeout((function(){o(new Error("unsupported_event"))}),r);c={messageChannel:a,onMessage:function(t){var n=t;if(n.data.eventId===s)switch(n.data.status){case"ack":clearTimeout(l),u=setTimeout((function(){o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(u),e(n.data.response);break;default:clearTimeout(l),clearTimeout(u),o(new Error("invalid_response"))}}},i.handlers.add(c),a.port1.addEventListener("message",c.onMessage),i.target.postMessage({eventType:t,eventId:s,data:n},[a.port2])})).finally((function(){c&&i.removeMessageHandler(c)})));case 6:case"end":return e.stop()}}),o)})))()}}]),t}();
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
 */function xi(){return window}
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
function Ii(){return void 0!==xi().WorkerGlobalScope&&"function"==typeof xi().importScripts}function Ei(){return Ti.apply(this,arguments)}function Ti(){return(Ti=e(a)(e(s).mark((function t(){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return n=e.sent,e.abrupt("return",n.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}
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
var Oi="firebaseLocalStorageDb",Si="firebaseLocalStorage",Ci="fbase_key",Mi=function(){"use strict";function t(n){e(C)(this,t),this.request=n}return e(M)(t,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),t}();function Pi(e,t){return e.transaction([Si],t?"readwrite":"readonly").objectStore(Si)}function Ni(){var e=indexedDB.deleteDatabase(Oi);return new Mi(e).toPromise()}function Li(){var t=indexedDB.open(Oi,1);return new Promise((function(n,r){t.addEventListener("error",(function(){r(t.error)})),t.addEventListener("upgradeneeded",(function(){var e=t.result;try{e.createObjectStore(Si,{keyPath:Ci})}catch(e){r(e)}})),t.addEventListener("success",e(a)(e(s).mark((function r(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=t.result).objectStoreNames.contains(Si)){e.next=12;break}return i.close(),e.next=5,Ni();case 5:return e.t0=n,e.next=8,Li();case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:n(i);case 13:case"end":return e.stop()}}),r)}))))}))}function Ai(e,t,n){return Ri.apply(this,arguments)}function Ri(){return(Ri=e(a)(e(s).mark((function t(n,r,i){var o,a;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Pi(n,!0).put((o={},e(P)(o,Ci,r),e(P)(o,"value",i),o)),t.abrupt("return",new Mi(a).toPromise());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Di(e,t){return $i.apply(this,arguments)}function $i(){return($i=e(a)(e(s).mark((function t(n,r){var i,o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Pi(n,!1).get(r),e.next=3,new Mi(i).toPromise();case 3:return o=e.sent,e.abrupt("return",void 0===o?null:o.value);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ji(e,t){var n=Pi(e,!0).delete(t);return new Mi(n).toPromise()}var Ui=function(){"use strict";function t(){e(C)(this,t),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return e(M)(t,[{key:"_openDb",value:function(){var t=this;return e(a)(e(s).mark((function n(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.db){e.next=2;break}return e.abrupt("return",t.db);case 2:return e.next=4,Li();case 4:return t.db=e.sent,e.abrupt("return",t.db);case 6:case"end":return e.stop()}}),n)})))()}},{key:"_withRetries",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i,o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0;case 1:return e.prev=2,e.next=5,n._openDb();case 5:return o=e.sent,e.next=8,t(o);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(i++>3)){e.next=15;break}throw e.t0;case 15:n.db&&(n.db.close(),n.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var t=this;return e(a)(e(s).mark((function n(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ii()?t.initializeReceiver():t.initializeSender());case 1:case"end":return e.stop()}}),n)})))()}},{key:"initializeReceiver",value:function(){var t=this;return e(a)(e(s).mark((function n(){return e(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.receiver=bi._getInstance(Ii()?self:null),t.receiver._subscribe("keyChanged",function(){var n=e(a)(e(s).mark((function n(r,i){var o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._poll();case 2:return o=e.sent,e.abrupt("return",{keyProcessed:o.includes(i.key)});case 4:case"end":return e.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),t.receiver._subscribe("ping",function(){var t=e(a)(e(s).mark((function t(n,r){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},{key:"initializeSender",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r,i,o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Ei();case 3:if(t.activeServiceWorker=e.sent,t.activeServiceWorker){e.next=6;break}return e.abrupt("return");case 6:return t.sender=new wi(t.activeServiceWorker),e.next=9,t.sender._send("ping",{},800);case 9:if(o=e.sent){e.next=12;break}return e.abrupt("return");case 12:(null===(r=o[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=o[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(t.serviceWorkerReceiverAvailable=!0);case 13:case"end":return e.stop()}}),n)})))()}},{key:"notifyServiceWorker",value:function(t){var n=this;return e(a)(e(s).mark((function r(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.sender&&n.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===n.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,n.sender._send("keyChanged",{key:t},n.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return e(a)(e(s).mark((function t(){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,Li();case 5:return n=e.sent,e.next=8,Ai(n,hi,"1");case 8:return e.next=10,ji(n,hi);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(t){var n=this;return e(a)(e(s).mark((function r(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,n.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(t,n){var r=this;return e(a)(e(s).mark((function i(){return e(s).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(e(a)(e(s).mark((function i(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return Ai(e,t,n)}));case 2:return r.localCache[t]=n,e.abrupt("return",r.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return Di(e,t)}));case 2:return i=e.sent,n.localCache[t]=i,e.abrupt("return",i);case 5:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(a)(e(s).mark((function r(){return e(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n._withPendingWrite(e(a)(e(s).mark((function r(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return ji(e,t)}));case 2:return delete n.localCache[t],e.abrupt("return",n.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r,i,o,a,u,c,l,f,d,h,p,v,m,g,y,k,b;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._withRetries((function(e){var t=Pi(e,!1).getAll();return new Mi(t).toPromise()}));case 2:if(r=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===t.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:for(i=[],o=new Set,a=!0,u=!1,c=void 0,e.prev=10,l=r[Symbol.iterator]();!(a=(f=l.next()).done);a=!0)d=f.value,h=d.fbase_key,p=d.value,o.add(h),JSON.stringify(t.localCache[h])!==JSON.stringify(p)&&(t.notifyListeners(h,p),i.push(h));e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),u=!0,c=e.t0;case 18:e.prev=18,e.prev=19,a||null==l.return||l.return();case 21:if(e.prev=21,!u){e.next=24;break}throw c;case 24:return e.finish(21);case 25:return e.finish(18);case 26:for(v=!0,m=!1,g=void 0,e.prev=27,y=Object.keys(t.localCache)[Symbol.iterator]();!(v=(k=y.next()).done);v=!0)b=k.value,t.localCache[b]&&!o.has(b)&&(t.notifyListeners(b,null),i.push(b));e.next=35;break;case 31:e.prev=31,e.t1=e.catch(27),m=!0,g=e.t1;case 35:e.prev=35,e.prev=36,v||null==y.return||y.return();case 38:if(e.prev=38,!m){e.next=41;break}throw g;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return e.abrupt("return",i);case 44:case"end":return e.stop()}}),n,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,o=void 0;if(n)try{for(var a,s=Array.from(n)[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){(0,a.value)(t)}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}},{key:"startPolling",value:function(){this.stopPolling();var t=this;this.pollTimer=setInterval(e(a)(e(s).mark((function n(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._poll());case 1:case"end":return e.stop()}}),n)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),t}();Ui.type="LOCAL";var Hi=Ui;
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
 */function Bi(e,t){return _n(e,"POST","/v2/accounts/mfaSignIn:start",bn(e,t))}function Fi(e){return new Promise((function(t,n){var r,i,o=document.createElement("script");o.setAttribute("src",e),o.onload=t,o.onerror=function(e){var t=Zt("internal-error");t.customData=e,n(t)},o.type="text/javascript",o.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(o)}))}function Wi(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
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
Wi("rcb"),new pn(3e4,6e4);var Vi="recaptcha";
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
 */function zi(e,t,n){return qi.apply(this,arguments)}function qi(){return(qi=e(a)(e(s).mark((function t(n,r,i){var o,a,u,c,l,f,d,h;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(a=e.sent,e.prev=4,rn("string"==typeof a,n,"argument-error"),rn(i.type===Vi,n,"argument-error"),!("session"in(u="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(c=u.session,!("phoneNumber"in u)){e.next=19;break}return rn("enroll"===c.type,n,"internal-error"),e.next=15,di(n,{idToken:c.credential,phoneEnrollmentInfo:{phoneNumber:u.phoneNumber,recaptchaToken:a}});case 15:return l=e.sent,e.abrupt("return",l.phoneSessionInfo.sessionInfo);case 19:return rn("signin"===c.type,n,"internal-error"),rn(f=(null===(o=u.multiFactorHint)||void 0===o?void 0:o.uid)||u.multiFactorUid,n,"missing-multi-factor-info"),e.next=24,Bi(n,{mfaPendingCredential:c.credential,mfaEnrollmentId:f,phoneSignInInfo:{recaptchaToken:a}});case 24:return d=e.sent,e.abrupt("return",d.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,Dr(n,{phoneNumber:u.phoneNumber,recaptchaToken:a});case 30:return h=e.sent.sessionInfo,e.abrupt("return",h);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),t,null,[[4,,32,35]])})))).apply(this,arguments)}
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
var Ki=function(){"use strict";function t(n){e(C)(this,t),this.providerId=t.PROVIDER_ID,this.auth=yr(n)}return e(M)(t,[{key:"verifyPhoneNumber",value:function(e,t){return zi(this.auth,e,Se(t))}}],[{key:"credential",value:function(e,t){return Fr._fromVerification(e,t)}},{key:"credentialFromResult",value:function(e){var n=e;return t.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?Fr._fromTokenResponse(n,r):null}}]),t}();
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
function Gi(e,t){return t?un(t):(rn(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Ki.PROVIDER_ID="phone",Ki.PHONE_SIGN_IN_METHOD="phone";var Ji=function(t){"use strict";e(R)(r,t);var n=e(q)(r);function r(t){var i;return e(C)(this,r),(i=n.call(this,"custom","custom")).params=t,i}return e(M)(r,[{key:"_getIdTokenResponse",value:function(e){return Lr(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return Lr(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return Lr(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(xr);function Yi(e){return oi(e.auth,new Ji(e),e.bypassAuthState)}function Xi(e){var t=e.auth,n=e.user;return rn(n,t,"internal-error"),ri(n,new Ji(e),e.bypassAuthState)}function Qi(e){return Zi.apply(this,arguments)}function Zi(){return(Zi=e(a)(e(s).mark((function t(n){var r,i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.auth,rn(i=n.user,r,"internal-error"),e.abrupt("return",ti(i,new Ji(n),n.bypassAuthState));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var eo=function(){"use strict";function t(n,r,i,o){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];e(C)(this,t),this.auth=n,this.resolver=i,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return e(M)(t,[{key:"execute",value:function(){var t,n=this;return new Promise((t=e(a)(e(s).mark((function t(r,i){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,n.resolver._initialize(n.auth);case 4:return n.eventManager=e.sent,e.next=7,n.onExecution();case 7:n.eventManager.registerConsumer(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n.reject(e.t0);case 13:case"end":return e.stop()}}),t,null,[[1,10]])}))),function(e,n){return t.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i,o,a,u,c,l,f;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.urlResponse,o=t.sessionId,a=t.postBody,u=t.tenantId,c=t.error,l=t.type,!c){e.next=4;break}return n.reject(c),e.abrupt("return");case 4:return f={auth:n.auth,requestUri:i,sessionId:o,tenantId:u||void 0,postBody:a||void 0,user:n.user,bypassAuthState:n.bypassAuthState},e.prev=5,e.t0=n,e.next=9,n.getIdpTask(l)(f);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),n.reject(e.t2);case 16:case"end":return e.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yi;case"linkViaPopup":case"linkViaRedirect":return Qi;case"reauthViaPopup":case"reauthViaRedirect":return Xi;default:Qt(this.auth,"internal-error")}}},{key:"resolve",value:function(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),t}(),to=new pn(2e3,1e4);
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
 */function no(e,t,n){return ro.apply(this,arguments)}function ro(){return(ro=e(a)(e(s).mark((function t(n,r,i){var o,a,u;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=yr(n),tn(n,r,zr),a=Gi(o,i),u=new io(o,"signInViaPopup",r,a),e.abrupt("return",u.executeNotNull());case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var io=function(t){"use strict";e(R)(r,t);var n=e(q)(r);function r(t,i,o,a,s){var u;return e(C)(this,r),(u=n.call(this,t,i,a,s)).provider=o,u.authWindow=null,u.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=e(A)(u),u}return e(M)(r,[{key:"executeNotNull",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.execute();case 2:return rn(r=e.sent,t.auth,"internal-error"),e.abrupt("return",r);case 5:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){var t=this;return e(a)(e(s).mark((function n(){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return an(1===t.filter.length,"Popup operations only handle one event"),r=_i(),e.next=4,t.resolver._openPopup(t.auth,t.provider,t.filter[0],r);case 4:t.authWindow=e.sent,t.authWindow.associatedEvent=r,t.resolver._originValidation(t.auth).catch((function(e){t.reject(e)})),t.resolver._isIframeWebStorageSupported(t.auth,(function(e){e||t.reject(Zt(t.auth,"web-storage-unsupported"))})),t.pollUserCancellation();case 9:case"end":return e.stop()}}),n)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(Zt(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(Zt(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,to.get())};t()}}]),r}(eo);io.currentPopupAction=null;
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
var oo=new Map,ao=function(t){"use strict";e(R)(r,t);var n=e(q)(r);function r(t,i){var o,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(C)(this,r),(o=n.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,a)).eventId=null,o}return e(M)(r,[{key:"execute",value:function(){var t=this,n=this;return e(a)(e(s).mark((function i(){var o,a;return e(s).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(o=oo.get(n.auth._key())){i.next=21;break}return i.prev=2,i.next=5,so(n.resolver,n.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,e(Ft)(e(zt)(r.prototype),"execute",t).call(n);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:a=i.t0,o=function(){return Promise.resolve(a)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),o=function(){return Promise.reject(i.t1)};case 20:oo.set(n.auth._key(),o);case 21:return n.bypassAuthState||oo.set(n.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",o());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(t){var n=this,i=this,o=function(){return e(Ft)(e(zt)(r.prototype),"onAuthEvent",n)};return e(a)(e(s).mark((function n(){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signInViaRedirect"!==t.type){e.next=4;break}return e.abrupt("return",o().call(i,t));case 4:if("unknown"!==t.type){e.next=7;break}return i.resolve(null),e.abrupt("return");case 7:if(!t.eventId){e.next=17;break}return e.next=10,i.auth._redirectUserForId(t.eventId);case 10:if(!(r=e.sent)){e.next=16;break}return i.user=r,e.abrupt("return",o().call(i,t));case 16:i.resolve(null);case 17:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){return e(a)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)})))()}},{key:"cleanUp",value:function(){}}]),r}(eo);function so(e,t){return uo.apply(this,arguments)}function uo(){return(uo=e(a)(e(s).mark((function t(n,r){var i,o,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=fo(r),o=lo(n),e.next=4,o._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,o._get(i);case 8:return e.t0=e.sent,a="true"===e.t0,e.next=12,o._remove(i);case 12:return e.abrupt("return",a);case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function co(e,t){oo.set(e._key(),t)}function lo(e){return un(e._redirectPersistence)}function fo(e){return tr("pendingRedirect",e.config.apiKey,e.name)}
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
 */function ho(e,t){return po.apply(this,arguments)}function po(){return po=e(a)(e(s).mark((function t(n,r){var i,o,a,u,c,l=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],o=yr(n),a=Gi(o,r),u=new ao(o,a,i),e.next=6,u.execute();case 6:if(!(c=e.sent)||i){e.next=13;break}return delete c.user._redirectEventId,e.next=11,o._persistUserIfCurrent(c.user);case 11:return e.next=13,o._setRedirectUser(null,r);case 13:return e.abrupt("return",c);case 14:case"end":return e.stop()}}),t)}))),po.apply(this,arguments)}
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
var vo=function(){"use strict";function t(n){e(C)(this,t),this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return e(M)(t,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return go(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!go(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Zt(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(mo(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(mo(e)),this.lastProcessedEventTime=Date.now()}}]),t}();function mo(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function go(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function yo(e){return ko.apply(this,arguments)}function ko(){return ko=
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
e(a)(e(s).mark((function t(n){var r,i=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",_n(n,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),t)}))),ko.apply(this,arguments)}
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
 */var bo=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_o=/^https?/;function wo(){return(wo=e(a)(e(s).mark((function t(n){var r,i,o,a,u,c,l;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,yo(n);case 4:r=e.sent.authorizedDomains,i=!0,o=!1,a=void 0,e.prev=6,u=r[Symbol.iterator]();case 8:if(i=(c=u.next()).done){e.next=20;break}if(l=c.value,e.prev=10,!xo(l)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),o=!0,a=e.t1;case 26:e.prev=26,e.prev=27,i||null==u.return||u.return();case 29:if(e.prev=29,!o){e.next=32;break}throw a;case 32:return e.finish(29);case 33:return e.finish(26);case 34:Qt(n,"unauthorized-domain");case 35:case"end":return e.stop()}}),t,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function xo(e){var t=ln(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var o=new URL(e);return""===o.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&o.hostname===i}if(!_o.test(r))return!1;if(bo.test(e))return i===e;var a=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}
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
 */var Io=new pn(3e4,6e4);function Eo(){var t=xi().___jsl,n=!0,r=!1,i=void 0;if(null==t?void 0:t.H)try{for(var o,a=Object.keys(t.H)[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;if(t.H[s].r=t.H[s].r||[],t.H[s].L=t.H[s].L||[],t.H[s].r=e(N)(t.H[s].L),t.CP)for(var u=0;u<t.CP.length;u++)t.CP[u]=null}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}}var To=null;function Oo(e){return To=To||function(e){return new Promise((function(t,n){var r,i,o;function a(){Eo(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){Eo(),n(Zt(e,"network-request-failed"))},timeout:Io.get()})}if(null===(i=null===(r=xi().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=xi().gapi)||void 0===o?void 0:o.load)){var s=Wi("iframefcb");return xi()[s]=function(){gapi.load?a():n(Zt(e,"network-request-failed"))},Fi("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}a()}})).catch((function(e){throw To=null,e}))}(e),To}
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
 */var So=new pn(5e3,15e3),Co={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Mo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Po(e){var t=e.config;rn(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?vn(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:It},i=Mo.get(e.config.apiHost);i&&(r.eid=i);var o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),"".concat(n,"?").concat(xe(r).slice(1))}function No(e){return Lo.apply(this,arguments)}function Lo(){return Lo=e(a)(e(s).mark((function t(n){var r,i;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Oo(n);case 2:return r=t.sent,rn(i=xi().gapi,n,"internal-error"),t.abrupt("return",r.open({where:document.body,url:Po(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Co,dontclear:!0},(function(t){return new Promise((r=e(a)(e(s).mark((function r(i,o){var a,u,c;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(){xi().clearTimeout(u),i(t)},e.next=3,t.restyle({setHideOnLeave:!1});case 3:a=Zt(n,"network-request-failed"),u=xi().setTimeout((function(){o(a)}),So.get()),t.ping(c).then(c,(function(){o(a)}));case 7:case"end":return e.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return t.stop()}}),t)}))),Lo.apply(this,arguments)}
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
 */var Ao={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ro="_blank",Do="http://localhost",$o=function(){"use strict";function t(n){e(C)(this,t),this.window=n,this.associatedEvent=null}return e(M)(t,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),t}();function jo(t,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,a=Math.max((window.screen.availHeight-o)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},Ao),{width:i.toString(),height:o.toString(),top:a,left:s}),l=ce().toLowerCase();r&&(u=ar(l)?Ro:r),ir(l)&&(n=n||Do,c.scrollbars="yes");var f=Object.entries(c).reduce((function(t,n){var r=e(L)(n,2),i=r[0],o=r[1];return"".concat(t).concat(i,"=").concat(o,",")}),"");if(dr(l)&&"_self"!==u)return Uo(n||"",u),new $o(null);var d=window.open(n||"",u,f);rn(d,t,"popup-blocked");try{d.focus()}catch(e){}return new $o(d)}function Uo(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */var Ho="__/auth/handler",Bo="emulator/auth/handler";function Fo(t,n,r,i,o,a){rn(t.config.authDomain,t,"auth-domain-config-required"),rn(t.config.apiKey,t,"invalid-api-key");var s={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:i,v:It,eventId:o};if(n instanceof zr){n.setDefaultLanguage(t.languageCode),s.providerId=n.providerId||"",be(n.getCustomParameters())||(s.customParameters=JSON.stringify(n.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var f,d=Object.entries(a||{})[Symbol.iterator]();!(u=(f=d.next()).done);u=!0){var h=e(L)(f.value,2),p=h[0],v=h[1];s[p]=v}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}}if(n instanceof qr){var m=n.getScopes().filter((function(e){return""!==e}));m.length>0&&(s.scopes=m.join(","))}t.tenantId&&(s.tid=t.tenantId);var g,y,k=s,b=!0,_=!1,w=void 0;try{for(var x,I=Object.keys(k)[Symbol.iterator]();!(b=(x=I.next()).done);b=!0){var E=x.value;void 0===k[E]&&delete k[E]}}catch(e){_=!0,w=e}finally{try{b||null==I.return||I.return()}finally{if(_)throw w}}return"".concat((g=t,y=g.config,y.emulator?vn(y,Bo):"https://".concat(y.authDomain,"/").concat(Ho)),"?").concat(xe(k).slice(1))}
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
var Wo="webStorageSupport",Vo=function(){"use strict";function t(){e(C)(this,t),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yi,this._completeRedirectFn=ho,this._overrideRedirectResult=co}return e(M)(t,[{key:"_openPopup",value:function(t,n,r,i){var o=this;return e(a)(e(s).mark((function a(){var u,c;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return an(null===(u=o.eventManagers[t._key()])||void 0===u?void 0:u.manager,"_initialize() not called before _openPopup()"),c=Fo(t,n,r,ln(),i),e.abrupt("return",jo(t,c,_i()));case 4:case"end":return e.stop()}}),a)})))()}},{key:"_openRedirect",value:function(t,n,r,i){var o=this;return e(a)(e(s).mark((function a(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o._originValidation(t);case 2:return a=Fo(t,n,r,ln(),i),xi().location.href=a,e.abrupt("return",new Promise((function(){})));case 4:case"end":return e.stop()}var a}),a)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,o=r.promise;return i?Promise.resolve(i):(an(o,"If manager is not set, promise should be"),o)}var a=this.initAndGetManager(e);return this.eventManagers[n]={promise:a},a.catch((function(){delete t.eventManagers[n]})),a}},{key:"initAndGetManager",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i,o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,No(t);case 2:return i=e.sent,o=new vo(t),i.register("authEvent",(function(e){return rn(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:o.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),n.eventManagers[t._key()]={manager:o},n.iframes[t._key()]=i,e.abrupt("return",o);case 8:case"end":return e.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(Wo,{type:Wo},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),Qt(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return wo.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return pr()||or()||fr()}}]),t}(),zo=Vo,qo=function(){"use strict";function t(n){e(C)(this,t),this.factorId=n}return e(M)(t,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return on("unexpected MultiFactorSessionType")}}}]),t}(),Ko=function(t){"use strict";e(R)(r,t);var n=e(q)(r);function r(t){var i;return e(C)(this,r),(i=n.call(this,"phone")).credential=t,i}return e(M)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return _n(e,"POST","/v2/accounts/mfaEnrollment:finalize",bn(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return _n(e,"POST","/v2/accounts/mfaSignIn:finalize",bn(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(qo);(function(){"use strict";function t(){e(C)(this,t)}return e(M)(t,null,[{key:"assertion",value:function(e){return Ko._fromCredential(e)}}]),t}()).FACTOR_ID="phone";var Go="@firebase/auth",Jo="0.20.11",Yo=function(){"use strict";function t(n){e(C)(this,t),this.auth=n,this.internalListeners=new Map}return e(M)(t,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(t){var n=this;return e(a)(e(s).mark((function r(){var i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.assertAuthConfigured(),e.next=3,n.auth._initializationPromise;case 3:if(n.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,n.auth.currentUser.getIdToken(t);case 7:return i=e.sent,e.abrupt("return",{accessToken:i});case 9:case"end":return e.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){rn(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),t}();
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
var Xo,Qo=pe("authIdTokenMaxAge")||300,Zo=null,ea=function(t){return n=e(a)(e(s).mark((function n(r){var i,o,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r,!e.t0){e.next=5;break}return e.next=4,r.getIdTokenResult();case 4:e.t0=e.sent;case 5:if(i=e.t0,!((o=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3)&&o>Qo)){e.next=9;break}return e.abrupt("return");case 9:if(a=null==i?void 0:i.token,Zo!==a){e.next=12;break}return e.abrupt("return");case 12:return Zo=a,e.next=15,fetch(t,{method:a?"POST":"DELETE",headers:a?{Authorization:"Bearer ".concat(a)}:{}});case 15:case"end":return e.stop()}}),n)}))),function(e){return n.apply(this,arguments)};var n};Xo="Browser",kt(new Ce("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=r.options,a=o.apiKey,s=o.authDomain;return function(e,t){rn(a&&!a.includes(":"),"invalid-api-key",{appName:e.name}),rn(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var r={apiKey:a,authDomain:s,clientPlatform:Xo,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vr(Xo)},i=new gr(e,t,r);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(un);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(i,n),i}(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),kt(new Ce("auth-internal",(function(e){var t=yr(e.getProvider("auth").getImmediate());return new Yo(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(Go,Jo,
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
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Xo)),Ot(Go,Jo,"esm2017");var ta={},na=i("l5bVx");!function(n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==e(na)(Symbol.iterator)?function(t){return void 0===t?"undefined":e(na)(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":e(na)(t)})(t)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{};n%2?u(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))},r=1;r<arguments.length;r++)n(r);return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function h(e,t,n){return(h=d()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&f(i,n.prototype),i}).apply(null,arguments)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?p(e):t}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}}(e,t)||y(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e){return function(e){if(Array.isArray(e))return k(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||y(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){if(e){if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(){}function _(e,t){for(var n in t)e[n]=t[n];return e}function w(e){return e()}function x(){return Object.create(null)}function I(e){e.forEach(w)}function E(e){return"function"==typeof e}function T(e,t){return e!=e?t==t:e!==t||e&&"object"===r(e)||"function"==typeof e}function O(e,t){e.appendChild(t)}function S(e,t,n){e.insertBefore(t,n||null)}function C(e){e.parentNode.removeChild(e)}function M(e){return document.createElement(e)}function P(e){return document.createTextNode(e)}function N(){return P(" ")}function L(){return P("")}function A(e,t,n,r){return e.addEventListener(t,n,r),function(){return e.removeEventListener(t,n,r)}}function R(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function D(e){return Array.from(e.childNodes)}function $(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}var j,U=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;i(this,e),this.a=t,this.e=this.n=null}return a(e,[{key:"m",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.e||(this.e=M(t.nodeName),this.t=t,this.h(e)),this.i(n)}},{key:"h",value:function(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}},{key:"i",value:function(e){for(var t=0;t<this.n.length;t+=1)S(this.t,this.n[t],e)}},{key:"p",value:function(e){this.d(),this.h(e),this.i(this.a)}},{key:"d",value:function(){this.n.forEach(C)}}]),e}();function H(e){j=e}function B(){if(!j)throw new Error("Function called outside component initialization");return j}function F(){var e=B();return function(t,n){var r=e.$$.callbacks[t];if(r){var i=function(e,t){var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(t,n);r.slice().forEach((function(t){t.call(e,i)}))}}}function W(e,t){var n=e.$$.callbacks[t.type];n&&n.slice().forEach((function(e){return e(t)}))}var V=[],z=[],q=[],K=[],G=Promise.resolve(),J=!1;function Y(){J||(J=!0,G.then(te))}function X(){return Y(),G}function Q(e){q.push(e)}var Z=!1,ee=new Set;function te(){if(!Z){Z=!0;do{for(var e=0;e<V.length;e+=1){var t=V[e];H(t),ne(t.$$)}for(H(null),V.length=0;z.length;)z.pop()();for(var n=0;n<q.length;n+=1){var r=q[n];ee.has(r)||(ee.add(r),r())}q.length=0}while(V.length);for(;K.length;)K.pop()();J=!1,Z=!1,ee.clear()}}function ne(e){if(null!==e.fragment){e.update(),I(e.before_update);var t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Q)}}var re,ie=new Set;function oe(){re={r:0,c:[],p:re}}function ae(){re.r||I(re.c),re=re.p}function se(e,t){e&&e.i&&(ie.delete(e),e.i(t))}function ue(e,t,n,r){if(e&&e.o){if(ie.has(e))return;ie.add(e),re.c.push((function(){ie.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}var ce="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:t;function le(e,t){ue(e,1,1,(function(){t.delete(e.key)}))}function fe(e,t,n,r,i,o,a,s,u,c,l,f){for(var d=e.length,h=o.length,p=d,v={};p--;)v[e[p].key]=p;var m=[],g=new Map,y=new Map;for(p=h;p--;){var k=f(i,o,p),b=n(k),_=a.get(b);_?r&&_.p(k,t):(_=c(b,k)).c(),g.set(b,m[p]=_),b in v&&y.set(b,Math.abs(p-v[b]))}var w=new Set,x=new Set;function I(e){se(e,1),e.m(s,l),a.set(e.key,e),l=e.first,h--}for(;d&&h;){var E=m[h-1],T=e[d-1],O=E.key,S=T.key;E===T?(l=E.first,d--,h--):g.has(S)?!a.has(O)||w.has(O)?I(E):x.has(S)?d--:y.get(O)>y.get(S)?(x.add(O),I(E)):(w.add(S),d--):(u(T,a),d--)}for(;d--;){var C=e[d];g.has(C.key)||u(C,a)}for(;h;)I(m[h-1]);return m}function de(e,t){for(var n={},r={},i={$$scope:1},o=e.length;o--;){var a=e[o],s=t[o];if(s){for(var u in a)u in s||(r[u]=1);for(var c in s)i[c]||(n[c]=s[c],i[c]=1);e[o]=s}else for(var l in a)i[l]=1}for(var f in r)f in n||(n[f]=void 0);return n}function he(e){return"object"===r(e)&&null!==e?e:{}}function pe(e){e&&e.c()}function ve(e,t,n){var r=e.$$,i=r.fragment,o=r.on_mount,a=r.on_destroy,s=r.after_update;i&&i.m(t,n),Q((function(){var t=o.map(w).filter(E);a?a.push.apply(a,g(t)):I(t),e.$$.on_mount=[]})),s.forEach(Q)}function me(e,t){var n=e.$$;null!==n.fragment&&(I(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ge(e,t){-1===e.$$.dirty[0]&&(V.push(e),Y(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}var ye=function(){function e(){i(this,e)}return a(e,[{key:"$destroy",value:function(){me(this,1),this.$destroy=b}},{key:"$on",value:function(e,t){var n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),function(){var e=n.indexOf(t);-1!==e&&n.splice(e,1)}}},{key:"$set",value:function(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}]),e}(),ke=function(){function e(t){if(i(this,e),Object.assign(this,{dir1:null,dir2:null,firstpos1:null,firstpos2:null,spacing1:25,spacing2:25,push:"bottom",maxOpen:1,maxStrategy:"wait",maxClosureCausesWait:!0,modal:"ish",modalishFlash:!0,overlayClose:!0,overlayClosesPinned:!1,positioned:!0,context:window&&document.body||null},t),"ish"===this.modal&&1!==this.maxOpen)throw new Error("A modalish stack must have a maxOpen value of 1.");if("ish"===this.modal&&!this.dir1)throw new Error("A modalish stack must have a direction.");if("top"===this.push&&"ish"===this.modal&&"close"!==this.maxStrategy)throw new Error("A modalish stack that pushes to the top must use the close maxStrategy.");this._noticeHead={notice:null,prev:null,next:null},this._noticeTail={notice:null,prev:this._noticeHead,next:null},this._noticeHead.next=this._noticeTail,this._noticeMap=new WeakMap,this._length=0,this._addpos2=0,this._animation=!0,this._posTimer=null,this._openNotices=0,this._listener=null,this._overlayOpen=!1,this._overlayInserted=!1,this._collapsingModalState=!1,this._leader=null,this._leaderOff=null,this._masking=null,this._maskingOff=null,this._swapping=!1,this._callbacks={}}return a(e,[{key:"forEach",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.start,i=void 0===r?"oldest":r,o=n.dir,a=void 0===o?"newer":o,s=n.skipModuleHandled,u=void 0!==s&&s;if("head"===i||"newest"===i&&"top"===this.push||"oldest"===i&&"bottom"===this.push)t=this._noticeHead.next;else if("tail"===i||"newest"===i&&"bottom"===this.push||"oldest"===i&&"top"===this.push)t=this._noticeTail.prev;else{if(!this._noticeMap.has(i))throw new Error("Invalid start param.");t=this._noticeMap.get(i)}for(;t.notice;){var c=t.notice;if("prev"===a||"top"===this.push&&"newer"===a||"bottom"===this.push&&"older"===a)t=t.prev;else{if(!("next"===a||"top"===this.push&&"older"===a||"bottom"===this.push&&"newer"===a))throw new Error("Invalid dir param.");t=t.next}if(!(u&&c.getModuleHandled()||!1!==e(c)))break}}},{key:"close",value:function(e){this.forEach((function(t){return t.close(e,!1,!1)}))}},{key:"open",value:function(e){this.forEach((function(t){return t.open(e)}))}},{key:"openLast",value:function(){this.forEach((function(e){if(-1===["opening","open","waiting"].indexOf(e.getState()))return e.open(),!1}),{start:"newest",dir:"older"})}},{key:"swap",value:function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return-1===["open","opening","closing"].indexOf(e.getState())?Promise.reject():(this._swapping=t,e.close(r,!1,i).then((function(){return t.open(r)})).finally((function(){n._swapping=!1})))}},{key:"on",value:function(e,t){var n=this;return e in this._callbacks||(this._callbacks[e]=[]),this._callbacks[e].push(t),function(){n._callbacks[e].splice(n._callbacks[e].indexOf(t),1)}}},{key:"fire",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.stack=this,e in this._callbacks&&this._callbacks[e].forEach((function(e){return e(t)}))}},{key:"position",value:function(){var e=this;this.positioned&&this._length>0?(this.fire("beforePosition"),this._resetPositionData(),this.forEach((function(t){e._positionNotice(t)}),{start:"head",dir:"next",skipModuleHandled:!0}),this.fire("afterPosition")):(delete this._nextpos1,delete this._nextpos2)}},{key:"queuePosition",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;this._posTimer&&clearTimeout(this._posTimer),this._posTimer=setTimeout((function(){return e.position()}),t)}},{key:"_resetPositionData",value:function(){this._nextpos1=this.firstpos1,this._nextpos2=this.firstpos2,this._addpos2=0}},{key:"_positionNotice",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e===this._masking;if(this.positioned){var n=e.refs.elem;if(n&&(n.classList.contains("pnotify-in")||n.classList.contains("pnotify-initial")||t)){var r=[this.firstpos1,this.firstpos2,this._nextpos1,this._nextpos2,this._addpos2],i=r[0],o=r[1],a=r[2],s=r[3],u=r[4];n.getBoundingClientRect(),!this._animation||t||this._collapsingModalState?e._setMoveClass(""):e._setMoveClass("pnotify-move");var c,l=this.context===document.body?window.innerHeight:this.context.scrollHeight,f=this.context===document.body?window.innerWidth:this.context.scrollWidth;if(this.dir1){var d;switch(c={down:"top",up:"bottom",left:"right",right:"left"}[this.dir1],this.dir1){case"down":d=n.offsetTop;break;case"up":d=l-n.scrollHeight-n.offsetTop;break;case"left":d=f-n.scrollWidth-n.offsetLeft;break;case"right":d=n.offsetLeft}null==i&&(a=i=d)}if(this.dir1&&this.dir2){var h,p={down:"top",up:"bottom",left:"right",right:"left"}[this.dir2];switch(this.dir2){case"down":h=n.offsetTop;break;case"up":h=l-n.scrollHeight-n.offsetTop;break;case"left":h=f-n.scrollWidth-n.offsetLeft;break;case"right":h=n.offsetLeft}if(null==o&&(s=o=h),!t){var v=a+n.offsetHeight+this.spacing1,m=a+n.offsetWidth+this.spacing1;(("down"===this.dir1||"up"===this.dir1)&&v>l||("left"===this.dir1||"right"===this.dir1)&&m>f)&&(a=i,s+=u+this.spacing2,u=0)}switch(null!=s&&(n.style[p]="".concat(s,"px"),this._animation||n.style[p]),this.dir2){case"down":case"up":n.offsetHeight+(parseFloat(n.style.marginTop,10)||0)+(parseFloat(n.style.marginBottom,10)||0)>u&&(u=n.offsetHeight);break;case"left":case"right":n.offsetWidth+(parseFloat(n.style.marginLeft,10)||0)+(parseFloat(n.style.marginRight,10)||0)>u&&(u=n.offsetWidth)}}else if(this.dir1){var g,y;switch(this.dir1){case"down":case"up":y=["left","right"],g=this.context.scrollWidth/2-n.offsetWidth/2;break;case"left":case"right":y=["top","bottom"],g=l/2-n.offsetHeight/2}n.style[y[0]]="".concat(g,"px"),n.style[y[1]]="auto",this._animation||n.style[y[0]]}if(this.dir1)switch(null!=a&&(n.style[c]="".concat(a,"px"),this._animation||n.style[c]),this.dir1){case"down":case"up":a+=n.offsetHeight+this.spacing1;break;case"left":case"right":a+=n.offsetWidth+this.spacing1}else{var k=f/2-n.offsetWidth/2,b=l/2-n.offsetHeight/2;n.style.left="".concat(k,"px"),n.style.top="".concat(b,"px"),this._animation||n.style.left}t||(this.firstpos1=i,this.firstpos2=o,this._nextpos1=a,this._nextpos2=s,this._addpos2=u)}}}},{key:"_addNotice",value:function(e){var t=this;this.fire("beforeAddNotice",{notice:e});var n=function(){if(t.fire("beforeOpenNotice",{notice:e}),e.getModuleHandled())t.fire("afterOpenNotice",{notice:e});else{if(t._openNotices++,("ish"!==t.modal||!t._overlayOpen)&&t.maxOpen!==1/0&&t._openNotices>t.maxOpen&&"close"===t.maxStrategy){var n=t._openNotices-t.maxOpen;t.forEach((function(e){if(-1!==["opening","open"].indexOf(e.getState()))return e.close(!1,!1,t.maxClosureCausesWait),e===t._leader&&t._setLeader(null),!!--n}))}!0===t.modal&&t._insertOverlay(),"ish"!==t.modal||t._leader&&-1!==["opening","open","closing"].indexOf(t._leader.getState())||t._setLeader(e),"ish"===t.modal&&t._overlayOpen&&e._preventTimerClose(!0),t.fire("afterOpenNotice",{notice:e})}},r={notice:e,prev:null,next:null,beforeOpenOff:e.on("pnotify:beforeOpen",n),afterCloseOff:e.on("pnotify:afterClose",(function(){if(t.fire("beforeCloseNotice",{notice:e}),e.getModuleHandled())t.fire("afterCloseNotice",{notice:e});else{if(t._openNotices--,"ish"===t.modal&&e===t._leader&&(t._setLeader(null),t._masking&&t._setMasking(null)),!t._swapping&&t.maxOpen!==1/0&&t._openNotices<t.maxOpen){var n=!1,r=function(r){if(r!==e&&"waiting"===r.getState()&&(r.open().catch((function(){})),t._openNotices>=t.maxOpen))return n=!0,!1};"wait"===t.maxStrategy?(t.forEach(r,{start:e,dir:"next"}),n||t.forEach(r,{start:e,dir:"prev"})):"close"===t.maxStrategy&&t.maxClosureCausesWait&&(t.forEach(r,{start:e,dir:"older"}),n||t.forEach(r,{start:e,dir:"newer"}))}t._openNotices<=0?(t._openNotices=0,t._resetPositionData(),t._overlayOpen&&!t._swapping&&t._removeOverlay()):t._collapsingModalState||t.queuePosition(0),t.fire("afterCloseNotice",{notice:e})}}))};if("top"===this.push?(r.next=this._noticeHead.next,r.prev=this._noticeHead,r.next.prev=r,r.prev.next=r):(r.prev=this._noticeTail.prev,r.next=this._noticeTail,r.prev.next=r,r.next.prev=r),this._noticeMap.set(e,r),this._length++,this._listener||(this._listener=function(){return t.position()},this.context.addEventListener("pnotify:position",this._listener)),-1!==["open","opening","closing"].indexOf(e.getState()))n();else if("ish"===this.modal&&this.modalishFlash&&this._shouldNoticeWait(e))var i=e.on("pnotify:mount",(function(){i(),e._setMasking(!0,!1,(function(){e._setMasking(!1)})),t._resetPositionData(),t._positionNotice(t._leader),window.requestAnimationFrame((function(){t._positionNotice(e,!0)}))}));this.fire("afterAddNotice",{notice:e})}},{key:"_removeNotice",value:function(e){if(this._noticeMap.has(e)){this.fire("beforeRemoveNotice",{notice:e});var t=this._noticeMap.get(e);this._leader===e&&this._setLeader(null),this._masking===e&&this._setMasking(null),t.prev.next=t.next,t.next.prev=t.prev,t.prev=null,t.next=null,t.beforeOpenOff(),t.beforeOpenOff=null,t.afterCloseOff(),t.afterCloseOff=null,this._noticeMap.delete(e),this._length--,!this._length&&this._listener&&(this.context.removeEventListener("pnotify:position",this._listener),this._listener=null),!this._length&&this._overlayOpen&&this._removeOverlay(),-1!==["open","opening","closing"].indexOf(e.getState())&&this._handleNoticeClosed(e),this.fire("afterRemoveNotice",{notice:e})}}},{key:"_setLeader",value:function(e){var t=this;if(this.fire("beforeSetLeader",{leader:e}),this._leaderOff&&(this._leaderOff(),this._leaderOff=null),this._leader=e,this._leader){var n,r=function(){var e=null;t._overlayOpen&&(t._collapsingModalState=!0,t.forEach((function(n){n._preventTimerClose(!1),n!==t._leader&&-1!==["opening","open"].indexOf(n.getState())&&(e||(e=n),n.close(n===e,!1,!0))}),{start:t._leader,dir:"next",skipModuleHandled:!0}),t._removeOverlay()),i&&(clearTimeout(i),i=null),t.forEach((function(n){if(n!==t._leader)return"waiting"===n.getState()||n===e?(t._setMasking(n,!!e),!1):void 0}),{start:t._leader,dir:"next",skipModuleHandled:!0})},i=null,o=function(){i&&(clearTimeout(i),i=null),i=setTimeout((function(){i=null,t._setMasking(null)}),750)};this._leaderOff=(n=[this._leader.on("mouseenter",r),this._leader.on("focusin",r),this._leader.on("mouseleave",o),this._leader.on("focusout",o)],function(){return n.map((function(e){return e()}))}),this.fire("afterSetLeader",{leader:e})}else this.fire("afterSetLeader",{leader:e})}},{key:"_setMasking",value:function(e,t){var n=this;if(this._masking){if(this._masking===e)return;this._masking._setMasking(!1,t)}if(this._maskingOff&&(this._maskingOff(),this._maskingOff=null),this._masking=e,this._masking){this._resetPositionData(),this._leader&&this._positionNotice(this._leader),this._masking._setMasking(!0,t),window.requestAnimationFrame((function(){n._masking&&n._positionNotice(n._masking)}));var r,i=function(){"ish"===n.modal&&(n._insertOverlay(),n._setMasking(null,!0),n.forEach((function(e){e._preventTimerClose(!0),"waiting"===e.getState()&&e.open()}),{start:n._leader,dir:"next",skipModuleHandled:!0}))};this._maskingOff=(r=[this._masking.on("mouseenter",i),this._masking.on("focusin",i)],function(){return r.map((function(e){return e()}))})}}},{key:"_shouldNoticeWait",value:function(e){return this._swapping!==e&&!("ish"===this.modal&&this._overlayOpen)&&this.maxOpen!==1/0&&this._openNotices>=this.maxOpen&&"wait"===this.maxStrategy}},{key:"_insertOverlay",value:function(){var e=this;this._overlay||(this._overlay=document.createElement("div"),this._overlay.classList.add("pnotify-modal-overlay"),this.dir1&&this._overlay.classList.add("pnotify-modal-overlay-".concat(this.dir1)),this.overlayClose&&this._overlay.classList.add("pnotify-modal-overlay-closes"),this.context!==document.body&&(this._overlay.style.height="".concat(this.context.scrollHeight,"px"),this._overlay.style.width="".concat(this.context.scrollWidth,"px")),this._overlay.addEventListener("click",(function(t){if(e.overlayClose){if(e.fire("overlayClose",{clickEvent:t}),t.defaultPrevented)return;e._leader&&e._setLeader(null),e.forEach((function(t){-1===["closed","closing","waiting"].indexOf(t.getState())&&(t.hide||e.overlayClosesPinned?t.close():t.hide||"ish"!==e.modal||(e._leader?t.close(!1,!1,!0):e._setLeader(t)))}),{skipModuleHandled:!0}),e._overlayOpen&&e._removeOverlay()}}))),this._overlay.parentNode!==this.context&&(this.fire("beforeAddOverlay"),this._overlay.classList.remove("pnotify-modal-overlay-in"),this._overlay=this.context.insertBefore(this._overlay,this.context.firstChild),this._overlayOpen=!0,this._overlayInserted=!0,window.requestAnimationFrame((function(){e._overlay.classList.add("pnotify-modal-overlay-in"),e.fire("afterAddOverlay")}))),this._collapsingModalState=!1}},{key:"_removeOverlay",value:function(){var e=this;this._overlay.parentNode&&(this.fire("beforeRemoveOverlay"),this._overlay.classList.remove("pnotify-modal-overlay-in"),this._overlayOpen=!1,setTimeout((function(){e._overlayInserted=!1,e._overlay.parentNode&&(e._overlay.parentNode.removeChild(e._overlay),e.fire("afterRemoveOverlay"))}),250),setTimeout((function(){e._collapsingModalState=!1}),400))}},{key:"notices",get:function(){var e=[];return this.forEach((function(t){return e.push(t)})),e}},{key:"length",get:function(){return this._length}},{key:"leader",get:function(){return this._leader}}]),e}(),be=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return h(Je,t)},_e=ce.Map;function we(e,t,n){var r=e.slice();return r[109]=t[n][0],r[110]=t[n][1],r}function xe(e,t,n){var r=e.slice();return r[109]=t[n][0],r[110]=t[n][1],r}function Ie(e,t,n){var r=e.slice();return r[109]=t[n][0],r[110]=t[n][1],r}function Ee(e,t,n){var r=e.slice();return r[109]=t[n][0],r[110]=t[n][1],r}function Te(e,t){var n,r,i,o,a=[{self:t[42]},t[110]],s=t[109].default;function u(e){for(var t={},n=0;n<a.length;n+=1)t=_(t,a[n]);return{props:t}}return s&&(r=new s(u())),{key:e,first:null,c:function(){n=L(),r&&pe(r.$$.fragment),i=L(),this.first=n},m:function(e,t){S(e,n,t),r&&ve(r,e,t),S(e,i,t),o=!0},p:function(e,t){var n=2176&t[1]?de(a,[2048&t[1]&&{self:e[42]},128&t[1]&&he(e[110])]):{};if(s!==(s=e[109].default)){if(r){oe();var o=r;ue(o.$$.fragment,1,0,(function(){me(o,1)})),ae()}s?(pe((r=new s(u())).$$.fragment),se(r.$$.fragment,1),ve(r,i.parentNode,i)):r=null}else s&&r.$set(n)},i:function(e){o||(r&&se(r.$$.fragment,e),o=!0)},o:function(e){r&&ue(r.$$.fragment,e),o=!1},d:function(e){e&&C(n),e&&C(i),r&&me(r,e)}}}function Oe(e){var t,n,r,i,o,a;return{c:function(){t=M("div"),R(n=M("span"),"class",e[22]("closer")),R(t,"class",r="pnotify-closer ".concat(e[21]("closer")," ").concat(e[17]&&!e[26]||e[28]?"pnotify-hidden":"")),R(t,"role","button"),R(t,"tabindex","0"),R(t,"title",i=e[20].close)},m:function(r,i){S(r,t,i),O(t,n),o||(a=A(t,"click",e[81]),o=!0)},p:function(e,n){335675392&n[0]&&r!==(r="pnotify-closer ".concat(e[21]("closer")," ").concat(e[17]&&!e[26]||e[28]?"pnotify-hidden":""))&&R(t,"class",r),1048576&n[0]&&i!==(i=e[20].close)&&R(t,"title",i)},d:function(e){e&&C(t),o=!1,a()}}}function Se(e){var t,n,r,i,o,a,s,u;return{c:function(){t=M("div"),R(n=M("span"),"class",r="".concat(e[22]("sticker")," ").concat(e[3]?e[22]("unstuck"):e[22]("stuck"))),R(t,"class",i="pnotify-sticker ".concat(e[21]("sticker")," ").concat(e[19]&&!e[26]||e[28]?"pnotify-hidden":"")),R(t,"role","button"),R(t,"aria-pressed",o=!e[3]),R(t,"tabindex","0"),R(t,"title",a=e[3]?e[20].stick:e[20].unstick)},m:function(r,i){S(r,t,i),O(t,n),s||(u=A(t,"click",e[82]),s=!0)},p:function(e,s){8&s[0]&&r!==(r="".concat(e[22]("sticker")," ").concat(e[3]?e[22]("unstuck"):e[22]("stuck")))&&R(n,"class",r),336068608&s[0]&&i!==(i="pnotify-sticker ".concat(e[21]("sticker")," ").concat(e[19]&&!e[26]||e[28]?"pnotify-hidden":""))&&R(t,"class",i),8&s[0]&&o!==(o=!e[3])&&R(t,"aria-pressed",o),1048584&s[0]&&a!==(a=e[3]?e[20].stick:e[20].unstick)&&R(t,"title",a)},d:function(e){e&&C(t),s=!1,u()}}}function Ce(e){var t,n,r;return{c:function(){t=M("div"),R(n=M("span"),"class",r=!0===e[13]?e[22](e[4]):e[13]),R(t,"class","pnotify-icon ".concat(e[21]("icon")))},m:function(r,i){S(r,t,i),O(t,n),e[83](t)},p:function(e,t){8208&t[0]&&r!==(r=!0===e[13]?e[22](e[4]):e[13])&&R(n,"class",r)},d:function(n){n&&C(t),e[83](null)}}}function Me(e,t){var n,r,i,o,a=[{self:t[42]},t[110]],s=t[109].default;function u(e){for(var t={},n=0;n<a.length;n+=1)t=_(t,a[n]);return{props:t}}return s&&(r=new s(u())),{key:e,first:null,c:function(){n=L(),r&&pe(r.$$.fragment),i=L(),this.first=n},m:function(e,t){S(e,n,t),r&&ve(r,e,t),S(e,i,t),o=!0},p:function(e,t){var n=2304&t[1]?de(a,[2048&t[1]&&{self:e[42]},256&t[1]&&he(e[110])]):{};if(s!==(s=e[109].default)){if(r){oe();var o=r;ue(o.$$.fragment,1,0,(function(){me(o,1)})),ae()}s?(pe((r=new s(u())).$$.fragment),se(r.$$.fragment,1),ve(r,i.parentNode,i)):r=null}else s&&r.$set(n)},i:function(e){o||(r&&se(r.$$.fragment,e),o=!0)},o:function(e){r&&ue(r.$$.fragment,e),o=!1},d:function(e){e&&C(n),e&&C(i),r&&me(r,e)}}}function Pe(e){var t,n=!e[34]&&Ne(e);return{c:function(){t=M("div"),n&&n.c(),R(t,"class","pnotify-title ".concat(e[21]("title")))},m:function(r,i){S(r,t,i),n&&n.m(t,null),e[84](t)},p:function(e,r){e[34]?n&&(n.d(1),n=null):n?n.p(e,r):((n=Ne(e)).c(),n.m(t,null))},d:function(r){r&&C(t),n&&n.d(),e[84](null)}}}function Ne(e){var t;function n(e,t){return e[6]?Ae:Le}var r=n(e),i=r(e);return{c:function(){i.c(),t=L()},m:function(e,n){i.m(e,n),S(e,t,n)},p:function(e,o){r===(r=n(e))&&i?i.p(e,o):(i.d(1),(i=r(e))&&(i.c(),i.m(t.parentNode,t)))},d:function(e){i.d(e),e&&C(t)}}}function Le(e){var t,n;return{c:function(){t=M("span"),n=P(e[5]),R(t,"class","pnotify-pre-line")},m:function(e,r){S(e,t,r),O(t,n)},p:function(e,t){32&t[0]&&$(n,e[5])},d:function(e){e&&C(t)}}}function Ae(e){var t,n;return{c:function(){n=L(),t=new U(n)},m:function(r,i){t.m(e[5],r,i),S(r,n,i)},p:function(e,n){32&n[0]&&t.p(e[5])},d:function(e){e&&C(n),e&&t.d()}}}function Re(e){var t,n,r=!e[35]&&De(e);return{c:function(){t=M("div"),r&&r.c(),R(t,"class",n="pnotify-text ".concat(e[21]("text")," ").concat(""===e[33]?"":"pnotify-text-with-max-height")),R(t,"style",e[33]),R(t,"role","alert")},m:function(n,i){S(n,t,i),r&&r.m(t,null),e[85](t)},p:function(e,i){e[35]?r&&(r.d(1),r=null):r?r.p(e,i):((r=De(e)).c(),r.m(t,null)),4&i[1]&&n!==(n="pnotify-text ".concat(e[21]("text")," ").concat(""===e[33]?"":"pnotify-text-with-max-height"))&&R(t,"class",n),4&i[1]&&R(t,"style",e[33])},d:function(n){n&&C(t),r&&r.d(),e[85](null)}}}function De(e){var t;function n(e,t){return e[8]?je:$e}var r=n(e),i=r(e);return{c:function(){i.c(),t=L()},m:function(e,n){i.m(e,n),S(e,t,n)},p:function(e,o){r===(r=n(e))&&i?i.p(e,o):(i.d(1),(i=r(e))&&(i.c(),i.m(t.parentNode,t)))},d:function(e){i.d(e),e&&C(t)}}}function $e(e){var t,n;return{c:function(){t=M("span"),n=P(e[7]),R(t,"class","pnotify-pre-line")},m:function(e,r){S(e,t,r),O(t,n)},p:function(e,t){128&t[0]&&$(n,e[7])},d:function(e){e&&C(t)}}}function je(e){var t,n;return{c:function(){n=L(),t=new U(n)},m:function(r,i){t.m(e[7],r,i),S(r,n,i)},p:function(e,n){128&n[0]&&t.p(e[7])},d:function(e){e&&C(n),e&&t.d()}}}function Ue(e,t){var n,r,i,o,a=[{self:t[42]},t[110]],s=t[109].default;function u(e){for(var t={},n=0;n<a.length;n+=1)t=_(t,a[n]);return{props:t}}return s&&(r=new s(u())),{key:e,first:null,c:function(){n=L(),r&&pe(r.$$.fragment),i=L(),this.first=n},m:function(e,t){S(e,n,t),r&&ve(r,e,t),S(e,i,t),o=!0},p:function(e,t){var n=2560&t[1]?de(a,[2048&t[1]&&{self:e[42]},512&t[1]&&he(e[110])]):{};if(s!==(s=e[109].default)){if(r){oe();var o=r;ue(o.$$.fragment,1,0,(function(){me(o,1)})),ae()}s?(pe((r=new s(u())).$$.fragment),se(r.$$.fragment,1),ve(r,i.parentNode,i)):r=null}else s&&r.$set(n)},i:function(e){o||(r&&se(r.$$.fragment,e),o=!0)},o:function(e){r&&ue(r.$$.fragment,e),o=!1},d:function(e){e&&C(n),e&&C(i),r&&me(r,e)}}}function He(e,t){var n,r,i,o,a=[{self:t[42]},t[110]],s=t[109].default;function u(e){for(var t={},n=0;n<a.length;n+=1)t=_(t,a[n]);return{props:t}}return s&&(r=new s(u())),{key:e,first:null,c:function(){n=L(),r&&pe(r.$$.fragment),i=L(),this.first=n},m:function(e,t){S(e,n,t),r&&ve(r,e,t),S(e,i,t),o=!0},p:function(e,t){var n=3072&t[1]?de(a,[2048&t[1]&&{self:e[42]},1024&t[1]&&he(e[110])]):{};if(s!==(s=e[109].default)){if(r){oe();var o=r;ue(o.$$.fragment,1,0,(function(){me(o,1)})),ae()}s?(pe((r=new s(u())).$$.fragment),se(r.$$.fragment,1),ve(r,i.parentNode,i)):r=null}else s&&r.$set(n)},i:function(e){o||(r&&se(r.$$.fragment,e),o=!0)},o:function(e){r&&ue(r.$$.fragment,e),o=!1},d:function(e){e&&C(n),e&&C(i),r&&me(r,e)}}}function Be(e){for(var t,n,r,i,o,a,s,u,c,l,f,d,h,p,v,m,g,y=[],k=new _e,_=[],w=new _e,x=[],T=new _e,P=[],L=new _e,D=e[38],$=function(e){return e[109]},j=0;j<D.length;j+=1){var U=Ee(e,D,j),H=$(U);k.set(H,y[j]=Te(H,U))}for(var B=e[16]&&!e[36]&&Oe(e),F=e[18]&&!e[36]&&Se(e),W=!1!==e[13]&&Ce(e),V=e[39],z=function(e){return e[109]},q=0;q<V.length;q+=1){var K=Ie(e,V,q),G=z(K);w.set(G,_[q]=Me(G,K))}for(var J=!1!==e[5]&&Pe(e),Y=!1!==e[7]&&Re(e),X=e[40],Q=function(e){return e[109]},Z=0;Z<X.length;Z+=1){var ee=xe(e,X,Z),te=Q(ee);T.set(te,x[Z]=Ue(te,ee))}for(var ne=e[41],re=function(e){return e[109]},ie=0;ie<ne.length;ie+=1){var ce=we(e,ne,ie),de=re(ce);L.set(de,P[ie]=He(de,ce))}return{c:function(){t=M("div"),n=M("div");for(var v=0;v<y.length;v+=1)y[v].c();r=N(),B&&B.c(),i=N(),F&&F.c(),o=N(),W&&W.c(),a=N(),s=M("div");for(var m=0;m<_.length;m+=1)_[m].c();u=N(),J&&J.c(),c=N(),Y&&Y.c(),l=N();for(var g=0;g<x.length;g+=1)x[g].c();f=N();for(var k=0;k<P.length;k+=1)P[k].c();R(s,"class","pnotify-content ".concat(e[21]("content"))),R(n,"class",d="pnotify-container ".concat(e[21]("container")," ").concat(e[21](e[4])," ").concat(e[15]?"pnotify-shadow":""," ").concat(e[27].container.join(" "))),R(n,"style",h="".concat(e[31]," ").concat(e[32])),R(n,"role","alert"),R(t,"data-pnotify",""),R(t,"class",p="pnotify ".concat(!e[0]||e[0].positioned?"pnotify-positioned":""," ").concat(!1!==e[13]?"pnotify-with-icon":""," ").concat(e[21]("elem")," pnotify-mode-").concat(e[9]," ").concat(e[10]," ").concat(e[24]," ").concat(e[25]," ").concat(e[37]," ").concat("fade"===e[2]?"pnotify-fade-".concat(e[14]):""," ").concat(e[30]?"pnotify-modal ".concat(e[11]):e[12]," ").concat(e[28]?"pnotify-masking":""," ").concat(e[29]?"pnotify-masking-in":""," ").concat(e[27].elem.join(" "))),R(t,"aria-live","assertive"),R(t,"role","alertdialog")},m:function(d,h){S(d,t,h),O(t,n);for(var p=0;p<y.length;p+=1)y[p].m(n,null);O(n,r),B&&B.m(n,null),O(n,i),F&&F.m(n,null),O(n,o),W&&W.m(n,null),O(n,a),O(n,s);for(var k=0;k<_.length;k+=1)_[k].m(s,null);O(s,u),J&&J.m(s,null),O(s,c),Y&&Y.m(s,null),O(s,l);for(var w=0;w<x.length;w+=1)x[w].m(s,null);e[86](s),O(n,f);for(var I=0;I<P.length;I+=1)P[I].m(n,null);var T;e[87](n),e[88](t),v=!0,m||(g=[(T=e[43].call(null,t),T&&E(T.destroy)?T.destroy:b),A(t,"mouseenter",e[44]),A(t,"mouseleave",e[45]),A(t,"focusin",e[44]),A(t,"focusout",e[45])],m=!0)},p:function(e,f){if(2176&f[1]){var m=e[38];oe(),y=fe(y,f,$,1,e,m,k,n,le,Te,r,Ee),ae()}if(e[16]&&!e[36]?B?B.p(e,f):((B=Oe(e)).c(),B.m(n,i)):B&&(B.d(1),B=null),e[18]&&!e[36]?F?F.p(e,f):((F=Se(e)).c(),F.m(n,o)):F&&(F.d(1),F=null),!1!==e[13]?W?W.p(e,f):((W=Ce(e)).c(),W.m(n,a)):W&&(W.d(1),W=null),2304&f[1]){var g=e[39];oe(),_=fe(_,f,z,1,e,g,w,s,le,Me,u,Ie),ae()}if(!1!==e[5]?J?J.p(e,f):((J=Pe(e)).c(),J.m(s,c)):J&&(J.d(1),J=null),!1!==e[7]?Y?Y.p(e,f):((Y=Re(e)).c(),Y.m(s,l)):Y&&(Y.d(1),Y=null),2560&f[1]){var b=e[40];oe(),x=fe(x,f,Q,1,e,b,T,s,le,Ue,null,xe),ae()}if(3072&f[1]){var I=e[41];oe(),P=fe(P,f,re,1,e,I,L,n,le,He,null,we),ae()}(!v||134250512&f[0]&&d!==(d="pnotify-container ".concat(e[21]("container")," ").concat(e[21](e[4])," ").concat(e[15]?"pnotify-shadow":""," ").concat(e[27].container.join(" "))))&&R(n,"class",d),(!v||3&f[1]&&h!==(h="".concat(e[31]," ").concat(e[32])))&&R(n,"style",h),(!v||2063629829&f[0]|64&f[1]&&p!==(p="pnotify ".concat(!e[0]||e[0].positioned?"pnotify-positioned":""," ").concat(!1!==e[13]?"pnotify-with-icon":""," ").concat(e[21]("elem")," pnotify-mode-").concat(e[9]," ").concat(e[10]," ").concat(e[24]," ").concat(e[25]," ").concat(e[37]," ").concat("fade"===e[2]?"pnotify-fade-".concat(e[14]):""," ").concat(e[30]?"pnotify-modal ".concat(e[11]):e[12]," ").concat(e[28]?"pnotify-masking":""," ").concat(e[29]?"pnotify-masking-in":""," ").concat(e[27].elem.join(" "))))&&R(t,"class",p)},i:function(e){if(!v){for(var t=0;t<D.length;t+=1)se(y[t]);for(var n=0;n<V.length;n+=1)se(_[n]);for(var r=0;r<X.length;r+=1)se(x[r]);for(var i=0;i<ne.length;i+=1)se(P[i]);v=!0}},o:function(e){for(var t=0;t<y.length;t+=1)ue(y[t]);for(var n=0;n<_.length;n+=1)ue(_[n]);for(var r=0;r<x.length;r+=1)ue(x[r]);for(var i=0;i<P.length;i+=1)ue(P[i]);v=!1},d:function(n){n&&C(t);for(var r=0;r<y.length;r+=1)y[r].d();B&&B.d(),F&&F.d(),W&&W.d();for(var i=0;i<_.length;i+=1)_[i].d();J&&J.d(),Y&&Y.d();for(var o=0;o<x.length;o+=1)x[o].d();e[86](null);for(var a=0;a<P.length;a+=1)P[a].d();e[87](null),e[88](null),m=!1,I(g)}}}function Fe(e,t){"object"!==r(e)&&(e={text:e}),t&&(e.type=t);var n=document.body;return"stack"in e&&e.stack&&e.stack.context&&(n=e.stack.context),{target:n,props:e}}var We,Ve=new ke({dir1:"down",dir2:"left",firstpos1:25,firstpos2:25,spacing1:36,spacing2:36,push:"bottom"}),ze=new Map,qe={type:"notice",title:!1,titleTrusted:!1,text:!1,textTrusted:!1,styling:"brighttheme",icons:"brighttheme",mode:"no-preference",addClass:"",addModalClass:"",addModelessClass:"",autoOpen:!0,width:"360px",minHeight:"16px",maxTextHeight:"200px",icon:!0,animation:"fade",animateSpeed:"normal",shadow:!0,hide:!0,delay:8e3,mouseReset:!0,closer:!0,closerHover:!0,sticker:!0,stickerHover:!0,labels:{close:"Close",stick:"Pin",unstick:"Unpin"},remove:!0,destroy:!0,stack:Ve,modules:ze};function Ke(){Ve.context||(Ve.context=document.body),window.addEventListener("resize",(function(){We&&clearTimeout(We),We=setTimeout((function(){var e=new Event("pnotify:position");document.body.dispatchEvent(e),We=null}),10)}))}function Ge(e,t,n){var r=B(),i=F(),o=function(e){var t=["focus","blur","fullscreenchange","fullscreenerror","scroll","cut","copy","paste","keydown","keypress","keyup","auxclick","click","contextmenu","dblclick","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseout","mouseup","pointerlockchange","pointerlockerror","select","wheel","drag","dragend","dragenter","dragstart","dragleave","dragover","drop","touchcancel","touchend","touchmove","touchstart","pointerover","pointerenter","pointerdown","pointermove","pointerup","pointercancel","pointerout","pointerleave","gotpointercapture","lostpointercapture"].concat(g(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]));function n(t){W(e,t)}return function(e){for(var r=[],i=0;i<t.length;i++)r.push(A(e,t[i],n));return{destroy:function(){for(var e=0;e<r.length;e++)r[e]()}}}}(r,["pnotify:init","pnotify:mount","pnotify:update","pnotify:beforeOpen","pnotify:afterOpen","pnotify:enterModal","pnotify:leaveModal","pnotify:beforeClose","pnotify:afterClose","pnotify:beforeDestroy","pnotify:afterDestroy","focusin","focusout","animationend","transitionend"]),a=t.modules,s=void 0===a?new Map(qe.modules):a,u=t.stack,l=void 0===u?qe.stack:u,f={elem:null,container:null,content:null,iconContainer:null,titleContainer:null,textContainer:null},d=c({},qe);Je("init",{notice:r,defaults:d});var h,p=t.type,v=void 0===p?d.type:p,y=t.title,k=void 0===y?d.title:y,b=t.titleTrusted,_=void 0===b?d.titleTrusted:b,w=t.text,x=void 0===w?d.text:w,I=t.textTrusted,E=void 0===I?d.textTrusted:I,T=t.styling,O=void 0===T?d.styling:T,S=t.icons,C=void 0===S?d.icons:S,M=t.mode,P=void 0===M?d.mode:M,N=t.addClass,L=void 0===N?d.addClass:N,R=t.addModalClass,D=void 0===R?d.addModalClass:R,$=t.addModelessClass,j=void 0===$?d.addModelessClass:$,U=t.autoOpen,H=void 0===U?d.autoOpen:U,V=t.width,q=void 0===V?d.width:V,K=t.minHeight,G=void 0===K?d.minHeight:K,J=t.maxTextHeight,Y=void 0===J?d.maxTextHeight:J,Q=t.icon,Z=void 0===Q?d.icon:Q,ee=t.animation,te=void 0===ee?d.animation:ee,ne=t.animateSpeed,re=void 0===ne?d.animateSpeed:ne,ie=t.shadow,oe=void 0===ie?d.shadow:ie,ae=t.hide,se=void 0===ae?d.hide:ae,ue=t.delay,ce=void 0===ue?d.delay:ue,le=t.mouseReset,fe=void 0===le?d.mouseReset:le,de=t.closer,he=void 0===de?d.closer:de,pe=t.closerHover,ve=void 0===pe?d.closerHover:pe,me=t.sticker,ge=void 0===me?d.sticker:me,ye=t.stickerHover,ke=void 0===ye?d.stickerHover:ye,be=t.labels,_e=void 0===be?d.labels:be,we=t.remove,xe=void 0===we?d.remove:we,Ie=t.destroy,Ee=void 0===Ie?d.destroy:Ie,Te="closed",Oe=null,Se=null,Ce=null,Me=!1,Pe="",Ne="",Le=!1,Ae=!1,Re={elem:[],container:[]},De=!1,$e=!1,je=!1,Ue=!1,He=null,Be=se,Fe=null,We=null,Ve=l&&(!0===l.modal||"ish"===l.modal&&"prevented"===Oe),ze=NaN,Ke=null,Ge=null;function Je(e){var t=c({notice:r},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{});"init"===e&&Array.from(s).forEach((function(e){var n=m(e,2),r=n[0];return n[1],"init"in r&&r.init(t)}));var n=f.elem||l&&l.context||document.body;if(!n)return i("pnotify:".concat(e),t),!0;var o=new Event("pnotify:".concat(e),{bubbles:"init"===e||"mount"===e,cancelable:e.startsWith("before")});return o.detail=t,n.dispatchEvent(o),!o.defaultPrevented}function Ye(){var e=l&&l.context||document.body;if(!e)throw new Error("No context to insert this notice into.");if(!f.elem)throw new Error("Trying to insert notice before element is available.");f.elem.parentNode!==e&&e.appendChild(f.elem)}function Xe(){f.elem&&f.elem.parentNode.removeChild(f.elem)}h=function(){Je("mount"),H&&lt().catch((function(){}))},B().$$.on_mount.push(h),function(e){B().$$.before_update.push(e)}((function(){Je("update"),"closed"!==Te&&"waiting"!==Te&&se!==Be&&(se?Be||yt():gt()),"closed"!==Te&&"closing"!==Te&&l&&!l._collapsingModalState&&l.queuePosition(),Be=se}));var Qe,Ze,et,tt,nt,rt,it,ot,at,st,ut,ct=t.open,lt=void 0===ct?function(e){if("opening"===Te)return Fe;if("open"===Te)return se&&yt(),Promise.resolve();if(!De&&l&&l._shouldNoticeWait(r))return Te="waiting",Promise.reject();if(!Je("beforeOpen",{immediate:e}))return Promise.reject();var t,i;Te="opening",n(28,je=!1),n(24,Pe="pnotify-initial pnotify-hidden");var o=new Promise((function(e,n){t=e,i=n}));Fe=o;var a=function(){se&&yt(),Te="open",Je("afterOpen",{immediate:e}),Fe=null,t()};return $e?(a(),Promise.resolve()):(Ye(),window.requestAnimationFrame((function(){if("opening"!==Te)return i(),void(Fe=null);l&&(n(0,l._animation=!1,l),"top"===l.push&&l._resetPositionData(),l._positionNotice(r),l.queuePosition(0),n(0,l._animation=!0,l)),pt(a,e)})),o)}:ct,ft=t.close,dt=void 0===ft?function(e,t,i){if("closing"===Te)return We;if("closed"===Te)return Promise.resolve();var o,a=function(){Je("beforeDestroy")&&(l&&l._removeNotice(r),r.$destroy(),Je("afterDestroy"))};if("waiting"===Te)return i||(Te="closed",Ee&&!i&&a()),Promise.resolve();if(!Je("beforeClose",{immediate:e,timerHide:t,waitAfterward:i}))return Promise.reject();Te="closing",Le=!!t,Oe&&"prevented"!==Oe&&clearTimeout&&clearTimeout(Oe),Oe=null;var s=new Promise((function(e,t){o=e}));return We=s,mt((function(){n(26,Ae=!1),Le=!1,Te=i?"waiting":"closed",Je("afterClose",{immediate:e,timerHide:t,waitAfterward:i}),We=null,o(),i||(Ee?a():xe&&Xe())}),e),s}:ft,ht=t.animateIn,pt=void 0===ht?function(e,t){Me="in";var r=function t(n){if(!(n&&f.elem&&n.target!==f.elem||(f.elem&&f.elem.removeEventListener("transitionend",t),Se&&clearTimeout(Se),"in"!==Me))){var r=$e;if(!r&&f.elem){var i=f.elem.getBoundingClientRect();for(var o in i)if(i[o]>0){r=!0;break}}r?(e&&e.call(),Me=!1):Se=setTimeout(t,40)}};if("fade"!==te||t){var i=te;n(2,te="none"),n(24,Pe="pnotify-in ".concat("fade"===i?"pnotify-fade-in":"")),X().then((function(){n(2,te=i),r()}))}else f.elem&&f.elem.addEventListener("transitionend",r),n(24,Pe="pnotify-in"),X().then((function(){n(24,Pe="pnotify-in pnotify-fade-in"),Se=setTimeout(r,650)}))}:ht,vt=t.animateOut,mt=void 0===vt?function(e,t){Me="out";var r=function t(r){if(!(r&&f.elem&&r.target!==f.elem||(f.elem&&f.elem.removeEventListener("transitionend",t),Ce&&clearTimeout(Ce),"out"!==Me))){var i=$e;if(!i&&f.elem){var o=f.elem.getBoundingClientRect();for(var a in o)if(o[a]>0){i=!0;break}}f.elem&&f.elem.style.opacity&&"0"!==f.elem.style.opacity&&i?Ce=setTimeout(t,40):(n(24,Pe=""),e&&e.call(),Me=!1)}};"fade"!==te||t?(n(24,Pe=""),X().then((function(){r()}))):(f.elem&&f.elem.addEventListener("transitionend",r),n(24,Pe="pnotify-in"),Ce=setTimeout(r,650))}:vt;function gt(){Oe&&"prevented"!==Oe&&(clearTimeout(Oe),Oe=null),Ce&&clearTimeout(Ce),"closing"===Te&&(Te="open",Me=!1,n(24,Pe="fade"===te?"pnotify-in pnotify-fade-in":"pnotify-in"))}function yt(){"prevented"!==Oe&&(gt(),ce!==1/0&&(Oe=setTimeout((function(){return dt(!1,!0)}),isNaN(ce)?0:ce)))}return e.$$set=function(e){"modules"in e&&n(46,s=e.modules),"stack"in e&&n(0,l=e.stack),"type"in e&&n(4,v=e.type),"title"in e&&n(5,k=e.title),"titleTrusted"in e&&n(6,_=e.titleTrusted),"text"in e&&n(7,x=e.text),"textTrusted"in e&&n(8,E=e.textTrusted),"styling"in e&&n(47,O=e.styling),"icons"in e&&n(48,C=e.icons),"mode"in e&&n(9,P=e.mode),"addClass"in e&&n(10,L=e.addClass),"addModalClass"in e&&n(11,D=e.addModalClass),"addModelessClass"in e&&n(12,j=e.addModelessClass),"autoOpen"in e&&n(49,H=e.autoOpen),"width"in e&&n(50,q=e.width),"minHeight"in e&&n(51,G=e.minHeight),"maxTextHeight"in e&&n(52,Y=e.maxTextHeight),"icon"in e&&n(13,Z=e.icon),"animation"in e&&n(2,te=e.animation),"animateSpeed"in e&&n(14,re=e.animateSpeed),"shadow"in e&&n(15,oe=e.shadow),"hide"in e&&n(3,se=e.hide),"delay"in e&&n(53,ce=e.delay),"mouseReset"in e&&n(54,fe=e.mouseReset),"closer"in e&&n(16,he=e.closer),"closerHover"in e&&n(17,ve=e.closerHover),"sticker"in e&&n(18,ge=e.sticker),"stickerHover"in e&&n(19,ke=e.stickerHover),"labels"in e&&n(20,_e=e.labels),"remove"in e&&n(55,xe=e.remove),"destroy"in e&&n(56,Ee=e.destroy),"open"in e&&n(59,lt=e.open),"close"in e&&n(23,dt=e.close),"animateIn"in e&&n(60,pt=e.animateIn),"animateOut"in e&&n(61,mt=e.animateOut)},e.$$.update=function(){524288&e.$$.dirty[1]&&n(31,Qe="string"==typeof q?"width: ".concat(q,";"):""),1048576&e.$$.dirty[1]&&n(32,Ze="string"==typeof G?"min-height: ".concat(G,";"):""),2097152&e.$$.dirty[1]&&n(33,et="string"==typeof Y?"max-height: ".concat(Y,";"):""),32&e.$$.dirty[0]&&n(34,tt=k instanceof HTMLElement),128&e.$$.dirty[0]&&n(35,nt=x instanceof HTMLElement),1&e.$$.dirty[0]|1792&e.$$.dirty[3]&&ze!==l&&(ze&&(ze._removeNotice(r),n(30,Ve=!1),Ke(),Ge()),l&&(l._addNotice(r),n(102,Ke=l.on("beforeAddOverlay",(function(){n(30,Ve=!0),Je("enterModal")}))),n(103,Ge=l.on("afterRemoveOverlay",(function(){n(30,Ve=!1),Je("leaveModal")})))),n(101,ze=l)),1073748992&e.$$.dirty[0]&&n(36,rt=L.match(/\bnonblock\b/)||D.match(/\bnonblock\b/)&&Ve||j.match(/\bnonblock\b/)&&!Ve),1&e.$$.dirty[0]&&n(37,it=l&&l.dir1?"pnotify-stack-".concat(l.dir1):""),32768&e.$$.dirty[1]&&n(38,ot=Array.from(s).filter((function(e){var t=m(e,2),n=t[0];return t[1],"PrependContainer"===n.position}))),32768&e.$$.dirty[1]&&n(39,at=Array.from(s).filter((function(e){var t=m(e,2),n=t[0];return t[1],"PrependContent"===n.position}))),32768&e.$$.dirty[1]&&n(40,st=Array.from(s).filter((function(e){var t=m(e,2),n=t[0];return t[1],"AppendContent"===n.position}))),32768&e.$$.dirty[1]&&n(41,ut=Array.from(s).filter((function(e){var t=m(e,2),n=t[0];return t[1],"AppendContainer"===n.position}))),34&e.$$.dirty[0]|8&e.$$.dirty[1]&&tt&&f.titleContainer&&f.titleContainer.appendChild(k),130&e.$$.dirty[0]|16&e.$$.dirty[1]&&nt&&f.textContainer&&f.textContainer.appendChild(x)},[l,f,te,se,v,k,_,x,E,P,L,D,j,Z,re,oe,he,ve,ge,ke,_e,function(e){return"string"==typeof O?"".concat(O,"-").concat(e):e in O?O[e]:"".concat(O.prefix,"-").concat(e)},function(e){return"string"==typeof C?"".concat(C,"-icon-").concat(e):e in C?C[e]:"".concat(C.prefix,"-icon-").concat(e)},dt,Pe,Ne,Ae,Re,je,Ue,Ve,Qe,Ze,et,tt,nt,rt,it,ot,at,st,ut,r,o,function(e){if(n(26,Ae=!0),fe&&"closing"===Te){if(!Le)return;gt()}se&&fe&&gt()},function(e){n(26,Ae=!1),se&&fe&&"out"!==Me&&-1!==["open","opening"].indexOf(Te)&&yt()},s,O,C,H,q,G,Y,ce,fe,xe,Ee,function(){return Te},function(){return Oe},lt,pt,mt,gt,yt,function(e){e?(gt(),Oe="prevented"):"prevented"===Oe&&(Oe=null,"open"===Te&&se&&yt())},function(){return r.$on.apply(r,arguments)},function(){return r.$set.apply(r,arguments)},function(e,t){i(e,t)},function(e){for(var t=0;t<(arguments.length<=1?0:arguments.length-1);t++){var r=t+1<1||arguments.length<=t+1?void 0:arguments[t+1];-1===Re[e].indexOf(r)&&Re[e].push(r)}n(27,Re)},function(e){for(var t=0;t<(arguments.length<=1?0:arguments.length-1);t++){var r=t+1<1||arguments.length<=t+1?void 0:arguments[t+1],i=Re[e].indexOf(r);-1!==i&&Re[e].splice(i,1)}n(27,Re)},function(e){for(var t=0;t<(arguments.length<=1?0:arguments.length-1);t++){var n=t+1<1||arguments.length<=t+1?void 0:arguments[t+1];if(-1===Re[e].indexOf(n))return!1}return!0},function(){return De},function(e){return De=e},function(){return $e},function(e){return $e=e},function(e){return Me=e},function(){return Pe},function(e){return n(24,Pe=e)},function(){return Ne},function(e){return n(25,Ne=e)},function(e,t,r){if(He&&clearTimeout(He),je!==e)if(e)n(28,je=!0),n(29,Ue=!!t),Ye(),X().then((function(){window.requestAnimationFrame((function(){if(je)if(t&&r)r();else{n(29,Ue=!0);var e=function e(){f.elem&&f.elem.removeEventListener("transitionend",e),He&&clearTimeout(He),Ue&&r&&r()};f.elem&&f.elem.addEventListener("transitionend",e),He=setTimeout(e,650)}}))}));else if(t)n(28,je=!1),n(29,Ue=!1),xe&&-1===["open","opening","closing"].indexOf(Te)&&Xe(),r&&r();else{var i=function e(){f.elem&&f.elem.removeEventListener("transitionend",e),He&&clearTimeout(He),Ue||(n(28,je=!1),xe&&-1===["open","opening","closing"].indexOf(Te)&&Xe(),r&&r())};n(29,Ue=!1),f.elem&&f.elem.addEventListener("transitionend",i),f.elem&&f.elem.style.opacity,He=setTimeout(i,650)}},function(){return dt(!1)},function(){return n(3,se=!se)},function(e){z[e?"unshift":"push"]((function(){f.iconContainer=e,n(1,f)}))},function(e){z[e?"unshift":"push"]((function(){f.titleContainer=e,n(1,f)}))},function(e){z[e?"unshift":"push"]((function(){f.textContainer=e,n(1,f)}))},function(e){z[e?"unshift":"push"]((function(){f.content=e,n(1,f)}))},function(e){z[e?"unshift":"push"]((function(){f.container=e,n(1,f)}))},function(e){z[e?"unshift":"push"]((function(){f.elem=e,n(1,f)}))}]}window&&document.body?Ke():document.addEventListener("DOMContentLoaded",Ke);var Je=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(o,e);var t,n,r=(t=o,n=d(),function(){var e,r=l(t);if(n){var i=l(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return v(this,e)});function o(e){var t;return i(this,o),function(e,t,n,r,i,o){var a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],s=j;H(e);var u=t.props||{},c=e.$$={fragment:null,ctx:null,props:o,update:b,not_equal:i,bound:x(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(s?s.$$.context:[]),callbacks:x(),dirty:a,skip_bound:!1},l=!1;if(c.ctx=n?n(e,u,(function(t,n){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return c.ctx&&i(c.ctx[t],c.ctx[t]=r)&&(!c.skip_bound&&c.bound[t]&&c.bound[t](r),l&&ge(e,t)),n})):[],c.update(),l=!0,I(c.before_update),c.fragment=!!r&&r(c.ctx),t.target){if(t.hydrate){var f=D(t.target);c.fragment&&c.fragment.l(f),f.forEach(C)}else c.fragment&&c.fragment.c();t.intro&&se(e.$$.fragment),ve(e,t.target,t.anchor),te()}H(s)}(p(t=r.call(this)),e,Ge,Be,T,{modules:46,stack:0,refs:1,type:4,title:5,titleTrusted:6,text:7,textTrusted:8,styling:47,icons:48,mode:9,addClass:10,addModalClass:11,addModelessClass:12,autoOpen:49,width:50,minHeight:51,maxTextHeight:52,icon:13,animation:2,animateSpeed:14,shadow:15,hide:3,delay:53,mouseReset:54,closer:16,closerHover:17,sticker:18,stickerHover:19,labels:20,remove:55,destroy:56,getState:57,getTimer:58,getStyle:21,getIcon:22,open:59,close:23,animateIn:60,animateOut:61,cancelClose:62,queueClose:63,_preventTimerClose:64,on:65,update:66,fire:67,addModuleClass:68,removeModuleClass:69,hasModuleClass:70,getModuleHandled:71,setModuleHandled:72,getModuleOpen:73,setModuleOpen:74,setAnimating:75,getAnimatingClass:76,setAnimatingClass:77,_getMoveClass:78,_setMoveClass:79,_setMasking:80},[-1,-1,-1,-1]),t}return a(o,[{key:"modules",get:function(){return this.$$.ctx[46]},set:function(e){this.$set({modules:e}),te()}},{key:"stack",get:function(){return this.$$.ctx[0]},set:function(e){this.$set({stack:e}),te()}},{key:"refs",get:function(){return this.$$.ctx[1]}},{key:"type",get:function(){return this.$$.ctx[4]},set:function(e){this.$set({type:e}),te()}},{key:"title",get:function(){return this.$$.ctx[5]},set:function(e){this.$set({title:e}),te()}},{key:"titleTrusted",get:function(){return this.$$.ctx[6]},set:function(e){this.$set({titleTrusted:e}),te()}},{key:"text",get:function(){return this.$$.ctx[7]},set:function(e){this.$set({text:e}),te()}},{key:"textTrusted",get:function(){return this.$$.ctx[8]},set:function(e){this.$set({textTrusted:e}),te()}},{key:"styling",get:function(){return this.$$.ctx[47]},set:function(e){this.$set({styling:e}),te()}},{key:"icons",get:function(){return this.$$.ctx[48]},set:function(e){this.$set({icons:e}),te()}},{key:"mode",get:function(){return this.$$.ctx[9]},set:function(e){this.$set({mode:e}),te()}},{key:"addClass",get:function(){return this.$$.ctx[10]},set:function(e){this.$set({addClass:e}),te()}},{key:"addModalClass",get:function(){return this.$$.ctx[11]},set:function(e){this.$set({addModalClass:e}),te()}},{key:"addModelessClass",get:function(){return this.$$.ctx[12]},set:function(e){this.$set({addModelessClass:e}),te()}},{key:"autoOpen",get:function(){return this.$$.ctx[49]},set:function(e){this.$set({autoOpen:e}),te()}},{key:"width",get:function(){return this.$$.ctx[50]},set:function(e){this.$set({width:e}),te()}},{key:"minHeight",get:function(){return this.$$.ctx[51]},set:function(e){this.$set({minHeight:e}),te()}},{key:"maxTextHeight",get:function(){return this.$$.ctx[52]},set:function(e){this.$set({maxTextHeight:e}),te()}},{key:"icon",get:function(){return this.$$.ctx[13]},set:function(e){this.$set({icon:e}),te()}},{key:"animation",get:function(){return this.$$.ctx[2]},set:function(e){this.$set({animation:e}),te()}},{key:"animateSpeed",get:function(){return this.$$.ctx[14]},set:function(e){this.$set({animateSpeed:e}),te()}},{key:"shadow",get:function(){return this.$$.ctx[15]},set:function(e){this.$set({shadow:e}),te()}},{key:"hide",get:function(){return this.$$.ctx[3]},set:function(e){this.$set({hide:e}),te()}},{key:"delay",get:function(){return this.$$.ctx[53]},set:function(e){this.$set({delay:e}),te()}},{key:"mouseReset",get:function(){return this.$$.ctx[54]},set:function(e){this.$set({mouseReset:e}),te()}},{key:"closer",get:function(){return this.$$.ctx[16]},set:function(e){this.$set({closer:e}),te()}},{key:"closerHover",get:function(){return this.$$.ctx[17]},set:function(e){this.$set({closerHover:e}),te()}},{key:"sticker",get:function(){return this.$$.ctx[18]},set:function(e){this.$set({sticker:e}),te()}},{key:"stickerHover",get:function(){return this.$$.ctx[19]},set:function(e){this.$set({stickerHover:e}),te()}},{key:"labels",get:function(){return this.$$.ctx[20]},set:function(e){this.$set({labels:e}),te()}},{key:"remove",get:function(){return this.$$.ctx[55]},set:function(e){this.$set({remove:e}),te()}},{key:"destroy",get:function(){return this.$$.ctx[56]},set:function(e){this.$set({destroy:e}),te()}},{key:"getState",get:function(){return this.$$.ctx[57]}},{key:"getTimer",get:function(){return this.$$.ctx[58]}},{key:"getStyle",get:function(){return this.$$.ctx[21]}},{key:"getIcon",get:function(){return this.$$.ctx[22]}},{key:"open",get:function(){return this.$$.ctx[59]},set:function(e){this.$set({open:e}),te()}},{key:"close",get:function(){return this.$$.ctx[23]},set:function(e){this.$set({close:e}),te()}},{key:"animateIn",get:function(){return this.$$.ctx[60]},set:function(e){this.$set({animateIn:e}),te()}},{key:"animateOut",get:function(){return this.$$.ctx[61]},set:function(e){this.$set({animateOut:e}),te()}},{key:"cancelClose",get:function(){return this.$$.ctx[62]}},{key:"queueClose",get:function(){return this.$$.ctx[63]}},{key:"_preventTimerClose",get:function(){return this.$$.ctx[64]}},{key:"on",get:function(){return this.$$.ctx[65]}},{key:"update",get:function(){return this.$$.ctx[66]}},{key:"fire",get:function(){return this.$$.ctx[67]}},{key:"addModuleClass",get:function(){return this.$$.ctx[68]}},{key:"removeModuleClass",get:function(){return this.$$.ctx[69]}},{key:"hasModuleClass",get:function(){return this.$$.ctx[70]}},{key:"getModuleHandled",get:function(){return this.$$.ctx[71]}},{key:"setModuleHandled",get:function(){return this.$$.ctx[72]}},{key:"getModuleOpen",get:function(){return this.$$.ctx[73]}},{key:"setModuleOpen",get:function(){return this.$$.ctx[74]}},{key:"setAnimating",get:function(){return this.$$.ctx[75]}},{key:"getAnimatingClass",get:function(){return this.$$.ctx[76]}},{key:"setAnimatingClass",get:function(){return this.$$.ctx[77]}},{key:"_getMoveClass",get:function(){return this.$$.ctx[78]}},{key:"_setMoveClass",get:function(){return this.$$.ctx[79]}},{key:"_setMasking",get:function(){return this.$$.ctx[80]}}]),o}(ye);n.Stack=ke,n.alert=function(e){return be(Fe(e))},n.default=Je,n.defaultModules=ze,n.defaultStack=Ve,n.defaults=qe,n.error=function(e){return be(Fe(e,"error"))},n.info=function(e){return be(Fe(e,"info"))},n.notice=function(e){return be(Fe(e,"notice"))},n.success=function(e){return be(Fe(e,"success"))},Object.defineProperty(n,"__esModule",{value:!0})}(ta);var ra,ia,oa,aa={registerForm:document.querySelector(".modal__form-registration"),loginForm:document.querySelector(".modal__form-login"),signInModal:document.querySelector(".backdrop[data-modal-signin]"),signUpBtn:document.querySelector(".user-box__signup"),signInBtn:document.querySelector(".user-box__signin"),signIn:document.querySelector(".modal__button"),logOutBtn:document.querySelector(".logout-js"),signUpModal:document.querySelector(".backdrop[data-modal-signup]"),signUpNowBtn:document.querySelector(".signup-now__button"),googleBtn:document.querySelector(".google-signin"),showPassBtn:document.querySelector(".show-pass"),fieldPass:document.querySelector(".pass-js"),signupWpapper:document.querySelector(".signup-wpapper")},sa=(Et({apiKey:"AIzaSyAhw4vdrq6zh6xoucOyfBfmVPrQ7kH8128",authDomain:"filmoteka-goit-group-8.firebaseapp.com",databaseURL:"https://filmoteka-goit-group-8-default-rtdb.europe-west1.firebasedatabase.app",projectId:"filmoteka-goit-group-8",storageBucket:"filmoteka-goit-group-8.appspot.com",messagingSenderId:"90971574603",appId:"1:90971574603:web:fb9d31de5aec56a6bd18ce",measurementId:"G-685DL9GM6N"}),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tt(),t=bt(e,"auth");if(t.isInitialized())return t.getImmediate();var n=cn(e,{popupRedirectResolver:zo,persistence:[Hi,mi,yi]}),r=pe("authTokenSyncURL");if(r){var i=ea(r);fi(n,i,(function(){return i(n.currentUser)})),li(n,(function(e){return i(e)}))}var o=de("auth");return o&&br(n,"http://".concat(o)),n}()),ua=new Gr;function ca(e){e.currentTarget===e.currentcurrentTarget&&(aa.signInModal.classList.add("hide"),document.body.style.overflow="visible")}function la(e){e.currentTarget===e.currentcurrentTarget&&(aa.signUpModal.classList.add("hide"),document.body.style.overflow="visible")}function fa(e){"Escape"===e.key&&(document.body.style.overflow="visible",aa.signInModal.classList.add("hide"))}function da(e){"Escape"===e.key&&(document.body.style.overflow="visible",aa.signUpModal.classList.add("hide"))}aa.signUpBtn.addEventListener("click",(function(){aa.signUpModal.classList.remove("hide"),aa.signUpModal.addEventListener("click",la),window.addEventListener("keydown",da),document.body.style.overflow="hidden"})),aa.signInBtn.addEventListener("click",(function(){aa.signInModal.classList.remove("hide"),document.body.style.overflow="hidden",aa.signInModal.addEventListener("click",ca),window.addEventListener("keydown",fa)})),aa.logOutBtn.addEventListener("click",(function(){(e=sa,Se(e).signOut()).then((function(){(0,ta.info)({text:"You have been logged out.",delay:1e3})}));var e})),aa.signUpNowBtn.addEventListener("click",(function(){aa.signInModal.classList.add("hide"),aa.signUpModal.classList.remove("hide"),aa.signUpModal.addEventListener("click",la),window.addEventListener("keydown",da)})),aa.loginForm.addEventListener("sumbit",(function(e){e.preventDefault();var t=e.currentTarget.email.value,n=e.currentTarget.pass.value;ci(sa,t,n).then((function(e){e.user;document.body.style.overflow="visible",aa.signupWpapper.classList.remove("load")})).then((function(){aa.signInModal.classList.add("hide"),e.currentTarget.email.value=null,e.currentTarget.pass.value=null,window.location.reload(!0)})).catch((function(e){e.code;e({title:"Error",text:e.message,delay:2e3}),aa.signupWpapper.classList.remove("load")})).finally((function(){aa.loginForm.classList.remove("hide")}))})),aa.googleBtn.addEventListener("click",(function(){no(sa,ua).then((function(e){Gr.credentialFromResult(e).accessToken;e.user&&(aa.signUpBtn.classList.add("hide"),aa.signInBtn.classList.add("hide"),aa.logOutBtn.classList.remove("hide"),window.location.reload())})).catch((function(e){e.code,e.message,e.email,Gr.credentialFromError(e)}))})),aa.registerForm.addEventListener("submit",(function(e){e.preventDefault();var t="",n=e.currentTarget.email.value;e.currentTarget.pass.value===e.currentTarget.secondpass.value?t=e.currentTarget.pass.value:(0,ta.error)({title:"Error",text:"Passwords did not match",delay:2e3});console.log(n,t),aa.signUpModal.classList.add("hide")})),aa.showPassBtn.addEventListener("click",(function(){"password"===aa.fieldPass.type?aa.fieldPass.type="text":aa.fieldPass.type="password"})),ra=function(e){e?(aa.signUpBtn.classList.add("hide"),aa.signInBtn.classList.add("hide"),aa.logOutBtn.classList.remove("hide"),e.uid,(0,ta.success)({title:"Success!",text:"You have successfully signed in.",delay:1e3})):(aa.signUpBtn.classList.remove("hide"),aa.signInBtn.classList.remove("hide"),aa.logOutBtn.classList.add("hide"))},Se(sa).onAuthStateChanged(ra,ia,oa),i("jouyw");var ha=document.querySelector(".btn-on-top");window.addEventListener("scroll",(function(){var e=window.pageYOffset,t=document.documentElement.clientHeight;e>t&&ha.classList.add("btn-on-top--visible");e<t&&ha.classList.remove("btn-on-top--visible")})),ha.addEventListener("click",(function(){window.pageYOffset>0&&window.scrollTo({top:0,behavior:"smooth"})}));var pa=[],va=[];function ma(){var e=document.querySelector(".js-addWatched"),t=document.querySelector(".js-deleteWatched"),n=document.querySelector(".js-addQueue"),r=document.querySelector(".js-deleteQueue"),i=document.querySelector(".js-image").dataset.action;function o(e,t){e.classList.add("hide"),t.classList.remove("hide")}e.addEventListener("click",(function(){if(pa.includes(i))return;o(e,t),pa.push(i),localStorage.setItem("moviesWatched",JSON.stringify(pa))})),t.addEventListener("click",(function(){o(t,e),pa.splice(pa.indexOf(i),1),localStorage.removeItem("moviesWatched"),localStorage.setItem("moviesWatched",JSON.stringify(pa))})),n.addEventListener("click",(function(){if(va.includes(i))return;o(n,r),va.push(i),localStorage.setItem("moviesQueue",JSON.stringify(va))})),r.addEventListener("click",(function(){o(r,n),va.splice(va.indexOf(i),1),localStorage.removeItem("moviesQueue"),localStorage.setItem("moviesQueue",JSON.stringify(va))})),console.log(i),pa.includes(i)&&o(e,t),va.includes(i)&&o(n,r)}var ga=new(0,u.FetchApiMovies)(21),ya=ga.fetchWithPage(1);console.log(ya);var ka=1;function ba(e){return _a.apply(this,arguments)}function _a(){return _a=e(a)(e(s).mark((function t(n){var r;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n;case 2:return r=t.sent,console.log(r),t.next=6,r.results;case 6:f(t.sent),function(){var t,n=document.getElementById("tui-pagination-container");n.addEventListener("click",(function(){return window.scrollTo({top:0,behavior:"smooth"})})),new(e(x))(n,{page:ka,totalItems:400,itemsPerPage:20,visiblePages:5,usageStatistics:!1}).on("afterMove",(t=e(a)(e(s).mark((function t(n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ka=n.page,e.next=3,ga.fetchWithPage(n.page);case 3:ba(e.sent),document.querySelector(".gallery").addEventListener("click",(function(e){console.log(e.target)}));case 6:case"end":return e.stop()}}),t)}))),function(e){return t.apply(this,arguments)}))}();case 9:case"end":return t.stop()}}),t)}))),_a.apply(this,arguments)}var wa=[];document.querySelector(".gallery").addEventListener("click",(function(e){ga.fullFetch(e.target.id).then((function(t){h(t),document.querySelector("#button-close").addEventListener("click",(function(){v()})),c.refs.moviesBackdrop.addEventListener("click",g),ma(),m(),ga.fullFetchVideo(e.target.id).then((function(e){wa=e}))}))})),ba(ya)}();
//# sourceMappingURL=index.b00993cc.js.map
