!function(){"use strict";var t="/flyjs".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"flylab","b":"webpack","f":[["packages__components__src__select-advance__index.md.da2d2248.async.js",7],["nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css",9],["nm__dumi__dist__client__pages__Demo__index.f522600b.async.js",9],["nm__dumi__dist__client__pages__404.8b85f2d9.chunk.css",65],["nm__dumi__dist__client__pages__404.45bdd35a.async.js",65],["packages__components__src__calendar-overview__index.md.f2fd5c7e.async.js",165],["packages__hooks__src__use-tree__index.md.a5ab1fdb.async.js",182],["packages__utils__src__is-empty__index.md.cad65a13.async.js",314],["425.e8c51481.chunk.css",425],["425.8ffbcf66.async.js",425],["packages__hooks__src__overview__index.md.d3d1ba7a.async.js",438],["nm__dumi__theme-default__layouts__DocLayout__index.e064bdce.async.js",519],["packages__utils__src__field-names-loop__index.md.776d9ea8.async.js",543],["packages__components__src__if__index.md.f1423490.async.js",560],["packages__components__src__overview__index.md.fb514d38.async.js",578],["618.bbbcdb4c.async.js",618],["packages__utils__src__overview__index.md.77b02d50.async.js",775],["packages__rules__src__overview__index.md.7591fb4b.async.js",786],["packages__example__src__overview__index.md.986d4de5.async.js",799],["dumi__tmp-production__dumi__theme__ContextWrapper.66ff07e7.chunk.css",923],["dumi__tmp-production__dumi__theme__ContextWrapper.ccd5cbde.async.js",923],["docs__index.md.ab8051c9.async.js",935],["docs__guide.md.823ad14c.async.js",937]],"r":{"/*":[3,4,8,9,11,15,19,20],"/":[21,8,9,11,15,19,20],"/guide":[22,8,9,11,15,19,20],"/~demos/:id":[1,2,15,19,20],"/components/calendar-overview":[5,8,9,11,15,19,20],"/components/if":[13,8,9,11,15,19,20],"/components/overview":[14,8,9,11,15,19,20],"/components/select-advance":[0,8,9,11,15,19,20],"/hooks/overview":[10,8,9,11,15,19,20],"/hooks/use-tree":[6,8,9,11,15,19,20],"/utils/field-names-loop":[12,8,9,11,15,19,20],"/utils/is-empty":[7,8,9,11,15,19,20],"/utils/overview":[16,8,9,11,15,19,20],"/examples/overview":[18,8,9,11,15,19,20],"/rules/overview":[17,8,9,11,15,19,20]}},{publicPath:"/flyjs/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();