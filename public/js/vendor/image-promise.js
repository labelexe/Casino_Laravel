(self.webpackChunk=self.webpackChunk||[]).push([[9024],{61498:(e,r,n)=>{"use strict";function t(e){var r=new Promise((function(r,n){function t(){e.naturalWidth?r(e):n(e),e.removeEventListener("load",t),e.removeEventListener("error",t)}e.naturalWidth?r(e):e.complete?n(e):(e.addEventListener("load",t),e.addEventListener("error",t))}));return Object.assign(r,{image:e})}n.d(r,{Z:()=>i});const i=function e(r,n){if(void 0===n&&(n={}),r instanceof HTMLImageElement)return t(r);if("string"==typeof r){var i=r,a=new Image;return Object.keys(n).forEach((function(e){return a.setAttribute(e,n[e])})),a.src=i,t(a)}if(function(e){return void 0!==e.length}(r)){var o=[].map.call(r,(function(r){return e(r,n).catch((function(e){return e}))}));return Promise.all(o).then((function(e){var r=e.filter((function(e){return e.naturalWidth}));return r.length===e.length?r:Promise.reject({loaded:r,errored:e.filter((function(e){return!e.naturalWidth}))})}))}return Promise.reject(new TypeError("input is not an image, a URL string, or an array of them."))}}}]);
//# sourceMappingURL=image-promise.js.map