"use strict";var precacheConfig=[["./index.html","e798749884195b794e6e1d48407b6d71"],["./static/css/main.996cafe8.css","c5df3a627d10b7afbb463e66007b9f3c"],["./static/js/main.1b280e16.js","3af32751279545d8bb2e6578c6863a8f"],["./static/media/agriplus.9141635a.jpg","9141635ad02a80392d56768f0c18a705"],["./static/media/agriplus_hover.6c6a6c1f.jpg","6c6a6c1f49da5aadb89db26b41b9a899"],["./static/media/designStudio.3d048d5d.jpg","3d048d5d2939c8102e42acf7bd19620c"],["./static/media/designStudio_hover.4506be74.jpg","4506be7472a4677921eb664b07d6e95e"],["./static/media/domYandex.48ce4502.jpg","48ce4502bf44b1c60f94789678ea8814"],["./static/media/domYandex_hover.8b779c9c.jpg","8b779c9c73c3e7fa68393576017fc784"],["./static/media/funbox_cats.58142e9c.jpg","58142e9c23e791fea656ad4cce637632"],["./static/media/funbox_cats_hover.21fbc2a3.jpg","21fbc2a3b4e456bafe5f5bbdb05ed20c"],["./static/media/gratia.2ff282b5.jpg","2ff282b50a20b4c0e0601613eeeebeb4"],["./static/media/gratia_hover.8795efde.jpg","8795efdece8b5ecda5009a5c1e7edbcc"],["./static/media/hemma.151e5aa4.jpg","151e5aa4b217c18517c5a58e0ee65a2e"],["./static/media/hemma_hover.94182237.jpg","94182237d768e741c4aa783f63a770e6"],["./static/media/portfolio_hover.a7544cf3.jpg","a7544cf303a463dd22812d2f10c90906"],["./static/media/posh.4ae78bda.jpg","4ae78bdaad3de73518cbb5e9e4236df8"],["./static/media/posh_hover.b455d0b1.jpg","b455d0b133804b030f6b8557ac7bb49f"],["./static/media/resort.fd53fab7.jpg","fd53fab727e0e402fd688b6071ea0793"],["./static/media/resort_hover.8a16f5c7.jpg","8a16f5c748f6b0305510fee539d443b8"],["./static/media/shri-1.ab7d8f0b.jpg","ab7d8f0b26e640d3ac609606400e49ec"],["./static/media/shri-1_hover.fa47d144.jpg","fa47d144193e14948d5181e703ab5204"],["./static/media/shri-2.455bc0dc.jpg","455bc0dc2774965d37ced6c51034afd5"],["./static/media/shri-2_hover.e3ed6127.jpg","e3ed6127e9d3eeed4819e63fc5c16ea1"],["./static/media/shri-3.410807b0.png","410807b06b837449434dff2f75cdce12"],["./static/media/smitler.76396716.jpg","76396716ab11edf065a6d62338e26cea"],["./static/media/smitler_hover.a6fcb5dc.jpg","a6fcb5dc72098d39b23bf2c5cbe271ac"],["./static/media/wedding.371fdf51.jpg","371fdf51b104cb22c93176ffce54ada2"],["./static/media/wedding_hover.aedbf107.jpg","aedbf10750ef320b4e6b80abbe6d8fa6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),r=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var r="./index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});