!function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n=window.webpackJsonp;window.webpackJsonp=function(r,o,a){for(var s,u,c,l=0,f=[];l<r.length;l++)u=r[l],i[u]&&f.push(i[u][0]),i[u]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);for(n&&n(r,o,a);f.length;)f.shift()();if(a)for(l=0;l<a.length;l++)c=e(e.s=a[l]);return c};var r={},i={3:0};e.e=function(t){function n(){s.onerror=s.onload=null,clearTimeout(u);var e=i[t];0!==e&&(e&&e[1](new Error("Loading chunk "+t+" failed.")),i[t]=void 0)}var r=i[t];if(0===r)return new Promise(function(t){t()});if(r)return r[2];var o=new Promise(function(e,n){r=i[t]=[e,n]});r[2]=o;var a=document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript",s.charset="utf-8",s.async=!0,s.timeout=12e4,e.nc&&s.setAttribute("nonce",e.nc),s.src=e.p+""+t+"/build/"+({0:"angular",1:"react",2:"vue"}[t]||t)+".js";var u=setTimeout(n,12e4);return s.onerror=s.onload=n,a.appendChild(s),o},e.m=t,e.c=r,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e.oe=function(t){throw console.error(t),t},e(e.s=525)}({111:function(t,e,n){"use strict";var r=function(t,e){return new Promise(function(n){return setTimeout(function(){return n(t)},e)})};e.a=[{label:"Vegetables",items:[{label:"Potato"},{label:"Carrot"},{label:"Tomato"}]},{label:"Fruits",items:[{label:"Orange"},{label:"Watermelon"},{label:"Banana"},{label:"Kumquat"},{label:"Strawberry"},{label:"Raspberry"},{label:"Cherry"}]},{label:"Animals",items:[{label:"Mammals",items:[{label:"Tiger"},{label:"Platypus"},{label:"Bear"}]},{label:"Reptiles",items:[{label:"Turtle"},{label:"Crocodile"}]},{label:"Insects",items:[{label:"Bee"},{label:"Fly"},{label:"Ant"}]}]},{label:"Durations",items:function(){return r([{label:"0.5 second",items:function(){return r([{label:"Brief"}],500)}},{label:"2 seconds",items:function(){return r([{label:"Enduring"}],2e3)}},{label:"4 seconds",items:function(){return r([{label:"Everlasting"}],4e3)}}],1e3)}}]},16:function(t,e,n){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){return{contains:function(e){return!!t.match(new RegExp(".*"+e+".*","gi"))}}},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},s="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return void 0===t?"undefined":o(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":o(t)},u=function t(e,n){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e||!n||"object"!==(void 0===e?"undefined":s(e))||"object"!==(void 0===n?"undefined":s(n)))return e;var o=a({},e,n);for(var u in n)n.hasOwnProperty(u)&&(n[u]instanceof Array&&e[u]instanceof Array?o[u]=i?[].concat(r(e[u]),r(n[u])):o[u]=n[u]:"object"===s(n[u])&&"object"===s(e[u])&&(o[u]=t(e[u],n[u],i)));return o},c=n(175);n.d(e,"a",function(){return c.a});var l=n(174);n.d(e,"f",function(){return l.a}),n.d(e,"e",function(){return i}),n.d(e,"c",function(){return u});var f=n(176);n.d(e,"b",function(){return f.a});var d=(n(173),n(177));n.d(e,"d",function(){return d.object})},173:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r={debug:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:console.log;n("%cDEBUG%c "+t,"background-color: red; color: white; font-size: 1.1em; font-weight: bold; padding: 3px 10px; border-radius: 5px","color: #444; font-weight: bold; font-size: 1.1em"),n("%c"+e,"color: #222; font-weight: bold")}}},174:function(t,e,n){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}n.d(e,"a",function(){return o});var i=n(175),o=function(t,e){return{flatten:function(){for(var n=[],o=[t];o.length>0;){var a=o.pop();a instanceof Array&&(n=[].concat(r(i.a(n).notIn(a)),r(a)),o=[].concat(r(o),r(a.filter(function(t){return t[e]}).map(function(t){return t[e]}))))}return n},filter:function(n){var r=t.filter(n);return function t(r){r.forEach(function(r){r[e]&&r[e]instanceof Array&&(r[e]=r[e].filter(n),t(r[e]))})}(r),r},treeFilter:function(n){var r=new Map;return function t(r,i){r.forEach(function(r){if(r[e]&&r[e]instanceof Array){var o=new Map;t(r[e],o),o.size>0?i.set(r,o):n(r)&&i.set(r,new Map)}else n(r)&&i.set(r,null)})}(t,r),r},add:function(n,i){for(var o=[t];o.length>0;){var a=o.pop(),s=a.indexOf(n);if(s>=0&&a[s][e])return a[s][e]=a[s][e].slice(),a[s][e].push(i),t;o=[].concat(r(o),r(a.filter(function(t){return t[e]}).map(function(t){return t[e]})))}return t},visit:function(n){for(var r=[t];r.length>0;){var i=r.pop();n(i),i.forEach(function(t){return t[e]&&t[e]instanceof Array?r.push(t[e]):null})}}}}},175:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(t){return{last:function(){return t.length>0?t[t.length-1]:null},in:function(e,n){return t.filter(function(t){return e.indexOf(t)>=0&&(!n||n(t))})},notIn:function(e,n){return t.filter(function(t){return e.indexOf(t)<0&&(!n||n(t))})},is:function(e,n){var r=e.isIn,i=void 0===r?[]:r,o=e.notIn,a=void 0===o?[]:o;return t.filter(function(t){return i.reduce(function(e,n){return n.indexOf(t)>=0&&e},!0)&&a.reduce(function(e,n){return n.indexOf(t)<0&&e},!0)&&(!n||n(t))})},contains:function(e){return t.indexOf(e)>=0},allIn:function(e){return t.every(function(t){return e.indexOf(t)>=0})}}}},176:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r={classes:function(t){var e=[];for(var n in t)t[n]&&e.push(n);return e.join(" ")},addClass:function(t,e){t instanceof HTMLElement&&(t.className=t.className.split(" ").filter(function(t){return t!==e}).join(" ")+" "+e)},removeClass:function(t,e){t instanceof HTMLElement&&(t.className=t.className.split(" ").filter(function(t){return t!==e}).join(" "))},hasClass:function(t,e){return t instanceof HTMLElement&&t.className.indexOf(e)>=0}}},177:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"object",function(){return o});var i=function(){function t(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(t){if(!(t&&t instanceof Object))throw new Error("Bad object format");return{shallowCompare:function(e,n){var r=!0;for(var i in t)if(t.hasOwnProperty(i)&&!(n&&n.indexOf(i)>=0)&&e[i]!==t[i])return void(r=!1);return r},filter:function(e){var n={};for(var r in t)t.hasOwnProperty(r)&&e(t[r])&&(n[r]=t[r]);return n},map:function(e){var n={};for(var r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n},fullMap:function(e){var n={};for(var r in t)if(t.hasOwnProperty(r)){var o=e(r,t[r]),a=i(o,2),s=a[0],u=a[1];n[s]=u}return n},nestPrefix:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t){return t},i=r({},e,{});for(var o in t)t.hasOwnProperty(o)&&o.startsWith(e)?i[e][n(o.substring(e.length))]=t[o]:i[o]=t[o];return i}}}},40:function(t,e,n){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":b(e))&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":b(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var u=n(16),c=function(){function t(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(t,e,n,r){return u.a(e).contains(t)?[]:[t]},f=function(t,e,n,r){var i=!1,o=e.filter(function(e){return i||(i=e===t),e!==t&&r.indexOf(e)<0});return!i&&t[this.inputs.get().category]&&t[this.inputs.get().category]instanceof Array&&u.f(t[this.inputs.get().category],this.inputs.get().category).visit(function(t){o=u.a(o).notIn(t)}),i||o.push(t),o},d={single:l,multiple:f,modifiers:function(t,e,n,i){var o=this;if(this.modifiers.control||this.modifiers.meta)return this.lastSelection=t,delete this.lastIndex,delete this.lastPivot,f.bind(this)(t,e,n,i);if(this.modifiers.shift){if(!this.lastSelection)return e;var a=n.indexOf(this.lastSelection);if(a<0)return e;var s=e.slice(),d=n.indexOf(t);if(a>=0){var p;if(this.lastPivot){var h=n.indexOf(this.lastPivot),g=a>h?[h,a]:[a,h],y=c(g,2),v=y[0],b=y[1],m=n.slice(v,b+1);s=u.a(s).notIn(m)}this.lastPivot=t;var _=a>d?[d,a]:[a,d],D=c(_,2),w=D[0],O=D[1],E=this.inputs.get().disabled?n.slice(w,O+1).filter(function(t){return!o.inputs.get().disabled(t)}):n.slice(w,O+1);s=u.a(s).notIn(E),(p=s).push.apply(p,r(E))}return s}return this.lastSelection=t,delete this.lastIndex,delete this.lastPivot,l.bind(this)(t,e.length>1?[]:e,n,i)},ancestors:function(t){function e(e,n,r,i){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t,e,n,i){return 0===e.length?[t]:u.a(e).contains(t)?[].concat(r(i)):[].concat(r(i),[t])})},p={"unfold-on-selection":function(t){if(!this.isSelected(t)){var e=this.state.get().unfolded.filter(function(e){return e!==t});e.push(t),this.state.set({unfolded:e})}},"toggle-fold":function(t){var e=this.state.get().unfolded.filter(function(e){return e!==t});e.length===this.state.get().unfolded.length&&e.push(t),this.state.set({unfolded:e})}},h={"opener-control":function(t){return!u.a(this.state.get().unfolded).contains(t)},"not-selected":function(t){return!this.isSelected(t)},"no-child-selection":function(t){var e=this;return!function t(n){return e.isSelected(n)||n[e.inputs.get().category]&&n[e.inputs.get().category]instanceof Array&&n[e.inputs.get().category].some(t)}(t)},"max-depth":function(){return!(!this.inputs.get().maxDepth||isNaN(parseInt(this.inputs.get().maxDepth,10)))&&this.inputs.get().depth>=parseInt(this.inputs.get().maxDepth,10)}},g={labels:{"search.placeholder":"Search ..."},css:{TreeView:"TreeView",opener:"opener",depth:"depth",selected:"selected",category:"category",folded:"folded",disabled:"disabled",async:"async",loading:"loading",nodrop:"nodrop",dragover:"dragover",search:"search",item:"item"},strategies:{selection:["single"],click:[],fold:["not-selected","no-child-selection"]},display:function(t){return t.toString()},async:function(t){return t()},noOpener:!1,dragndrop:{draggable:!1,droppable:!1}},y=n(16),v=n(57),b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),_=function t(e,n,r,i){s(this,t),this.inputs=e,this.outputs=n,this.state=r,this.refresh=i},D=function(t){function e(){var t,n,r,a;s(this,e);for(var u=arguments.length,c=Array(u),l=0;l<u;l++)c[l]=arguments[l];return n=r=o(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(c))),r.isSelected=function(t){return y.a(r.inputs.get().selection).contains(t)},r.isFolded=function(t){var e=r.inputs.get().strategies;return(!r.inputs.get().searched||r.isAsync(t))&&(e&&e.fold||[]).map(function(t){return(h[t]||t).bind(r)}).reduce(function(e,n){return e&&n(t,e)},!0)},r.hasChildren=function(t){return t[r.inputs.get().category]&&t[r.inputs.get().category]instanceof Array},r.isAsync=function(t){return!!t&&[r.inputs.get().category]&&"function"==typeof t[r.inputs.get().category]},r.isDisabled=function(t){var e=r.inputs.get().disabled;return!!e&&e(t)},r.isDraggable=function(t){return t&&r.inputs.get().dragndrop.draggable&&("function"!=typeof r.inputs.get().dragndrop.draggable||r.inputs.get().dragndrop.draggable(t))},r.isDroppable=function(t){return r.inputs.get().dragndrop.droppable&&("function"!=typeof r.inputs.get().dragndrop.droppable||r.inputs.get().dragndrop.droppable(t))},r.mixCss=function(t){return r.inputs.get().css[t]||g.css[t]},r.ulCss=function(){return y.b.classes(i({},r.mixCss("depth")+"-"+(r.inputs.get().depth||0),!0))},r.liCss=function(t){var e;return y.b.classes((e={},i(e,r.mixCss("selected"),r.isSelected(t)),i(e,r.mixCss("category"),r.hasChildren(t)||r.isAsync(t)),i(e,r.mixCss("folded"),r.hasChildren(t)||r.isAsync(t)?r.isFolded(t):null),i(e,r.mixCss("disabled"),r.isDisabled(t)),i(e,r.mixCss("async"),r.isAsync(t)&&r.isFolded(t)),i(e,r.mixCss("loading"),r.isAsync(t)&&!r.isFolded(t)),e))},r.pending=[],r.unwrapPromise=function(t){r.pending.push(t);var e=r.inputs.get().async;return e?e(t[r.inputs.get().category]).then(function(e){t[r.inputs.get().category]=e,r.refresh()}).catch(function(t){throw t}).then(function(){return r.pending=r.pending.filter(function(e){return e!==t})}):Promise.reject(new Error("No asyn prop."))},r.onClick=function(t){return function(e){if(!r.isDisabled(t)){var n=r.inputs.get().strategies;(n&&n.click||[]).map(function(t){return(p[t]||t).bind(r)}).forEach(function(n){return n(t,e,r.inputs.get().ancestors,r.inputs.get().model)}),r.inputs.get().onSelect(t,r.inputs.get().ancestors,r.inputs.get().model),e.stopPropagation()}}},r.getDragEvents=function(t){if(arguments.length>1&&void 0!==arguments[1]&&!arguments[1])return{};var e={draggable:r.isDraggable(t),onDragStart:r.isDraggable(t)&&v.b.onDragStart(t).bind(r),onDragOver:r.isDroppable(t)&&v.b.onDragOver(t).bind(r),onDragEnter:r.isDroppable(t)&&v.b.onDragEnter(t).bind(r),onDragLeave:r.isDroppable(t)&&v.b.onDragLeave.bind(r),onDrop:r.isDroppable(t)&&v.b.onDrop(t).bind(r),onDragEnd:r.isDraggable(t)&&v.b.onDragEnd(t).bind(r)};for(var n in e)e[n]||delete e[n];return e},a=n,o(r,a)}return a(e,t),m(e,[{key:"onOpener",value:function(t){var e=this;return function(n){var r=e.state.get().unfolded.filter(function(e){return e!==t});r.length===e.state.get().unfolded.length&&r.push(t),e.state.set({unfolded:r}),n.stopPropagation()}}}]),e}(_),w=function(t){function e(){var t,n,r,i;s(this,e);for(var a=arguments.length,u=Array(a),c=0;c<a;c++)u[c]=arguments[c];return n=r=o(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(u))),r.modifiers={},r.onKey=function(t){this.modifiers={control:t.getModifierState("Control"),meta:t.getModifierState("Meta"),shift:t.getModifierState("Shift")}}.bind(r),r.onSelect=function(t,e,n){var i=r.inputs.get().strategies.selection||[],o=i.map(function(t){return(d[t]||t).bind(r)}).reduce(function(r,i){return i(t,r,n,e)},r.inputs.get().selection);return r.outputs.onSelect(o,t,e,n),o},r.wrapDragNDrop=v.d.bind(r),r.mixCss=function(t){return r.inputs.get().css[t]||g.css[t]},r.filterTree=function(t){var e=r.inputs.get().search;return e&&t.trim()?y.f(r.inputs.get().model,r.inputs.get().category).treeFilter(e(t.trim())):null},i=n,o(r,i)}return a(e,t),e}(_);n.d(e,"b",function(){return D}),n.d(e,"a",function(){return w}),n.d(e,!1,function(){return d}),n.d(e,!1,function(){return p}),n.d(e,!1,function(){return h}),n.d(e,"c",function(){return g});var O=n(57);n.d(e,"d",function(){return O.a})},525:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(526),i=(n.n(r),n(527));n.n(i)},526:function(t,e){},527:function(t,e){var n;!function(t){"use strict";var e=function(){function t(){this._dropEffect="move",this._effectAllowed="all",this._data={}}return Object.defineProperty(t.prototype,"dropEffect",{get:function(){return this._dropEffect},set:function(t){this._dropEffect=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"effectAllowed",{get:function(){return this._effectAllowed},set:function(t){this._effectAllowed=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"types",{get:function(){return Object.keys(this._data)},enumerable:!0,configurable:!0}),t.prototype.clearData=function(t){null!=t?delete this._data[t]:this._data=null},t.prototype.getData=function(t){return this._data[t]||""},t.prototype.setData=function(t,e){this._data[t]=e},t.prototype.setDragImage=function(t,e,r){var i=n._instance;i._imgCustom=t,i._imgOffset={x:e,y:r}},t}();t.DataTransfer=e;var n=function(){function t(){if(this._lastClick=0,t._instance)throw"DragDropTouch instance already created.";var e=!1;if(document.addEventListener("test",null,{get passive(){return e=!0,!0}}),"ontouchstart"in document){var n=document,r=this._touchstart.bind(this),i=this._touchmove.bind(this),o=this._touchend.bind(this),a=!!e&&{passive:!1,capture:!1};n.addEventListener("touchstart",r,a),n.addEventListener("touchmove",i,a),n.addEventListener("touchend",o),n.addEventListener("touchcancel",o)}}return t.getInstance=function(){return t._instance},t.prototype._touchstart=function(e){var n=this;if(this._shouldHandle(e)){if(Date.now()-this._lastClick<t._DBLCLICK&&this._dispatchEvent(e,"dblclick",e.target))return e.preventDefault(),void this._reset();this._reset();var r=this._closestDraggable(e.target);r&&(this._dispatchEvent(e,"mousemove",e.target)||this._dispatchEvent(e,"mousedown",e.target)||(this._dragSource=r,this._ptDown=this._getPoint(e),this._lastTouch=e,e.preventDefault(),setTimeout(function(){n._dragSource==r&&null==n._img&&n._dispatchEvent(e,"contextmenu",r)&&n._reset()},t._CTXMENU)))}},t.prototype._touchmove=function(e){if(this._shouldHandle(e)){var n=this._getTarget(e);if(this._dispatchEvent(e,"mousemove",n))return this._lastTouch=e,void e.preventDefault();if(this._dragSource&&!this._img){this._getDelta(e)>t._THRESHOLD&&(this._dispatchEvent(e,"dragstart",this._dragSource),this._createImage(e),this._dispatchEvent(e,"dragenter",n))}this._img&&(this._lastTouch=e,e.preventDefault(),n!=this._lastTarget&&(this._dispatchEvent(this._lastTouch,"dragleave",this._lastTarget),this._dispatchEvent(e,"dragenter",n),this._lastTarget=n),this._moveImage(e),this._dispatchEvent(e,"dragover",n))}},t.prototype._touchend=function(t){if(this._shouldHandle(t)){if(this._dispatchEvent(this._lastTouch,"mouseup",t.target))return void t.preventDefault();this._img||(this._dragSource=null,this._dispatchEvent(this._lastTouch,"click",t.target),this._lastClick=Date.now()),this._destroyImage(),this._dragSource&&(t.type.indexOf("cancel")<0&&this._dispatchEvent(this._lastTouch,"drop",this._lastTarget),this._dispatchEvent(this._lastTouch,"dragend",this._dragSource),this._reset())}},t.prototype._shouldHandle=function(t){return t&&!t.defaultPrevented&&t.touches&&t.touches.length<2},t.prototype._reset=function(){this._destroyImage(),this._dragSource=null,this._lastTouch=null,this._lastTarget=null,this._ptDown=null,this._dataTransfer=new e},t.prototype._getPoint=function(t,e){return t&&t.touches&&(t=t.touches[0]),{x:e?t.pageX:t.clientX,y:e?t.pageY:t.clientY}},t.prototype._getDelta=function(t){var e=this._getPoint(t);return Math.abs(e.x-this._ptDown.x)+Math.abs(e.y-this._ptDown.y)},t.prototype._getTarget=function(t){for(var e=this._getPoint(t),n=document.elementFromPoint(e.x,e.y);n&&"none"==getComputedStyle(n).pointerEvents;)n=n.parentElement;return n},t.prototype._createImage=function(e){this._img&&this._destroyImage();var n=this._imgCustom||this._dragSource;if(this._img=n.cloneNode(!0),this._copyStyle(n,this._img),this._img.style.top=this._img.style.left="-9999px",!this._imgCustom){var r=n.getBoundingClientRect(),i=this._getPoint(e);this._imgOffset={x:i.x-r.left,y:i.y-r.top},this._img.style.opacity=t._OPACITY.toString()}this._moveImage(e),document.body.appendChild(this._img)},t.prototype._destroyImage=function(){this._img&&this._img.parentElement&&this._img.parentElement.removeChild(this._img),this._img=null,this._imgCustom=null},t.prototype._moveImage=function(t){var e=this;this._img&&requestAnimationFrame(function(){var n=e._getPoint(t,!0),r=e._img.style;r.position="absolute",r.pointerEvents="none",r.zIndex="999999",r.left=Math.round(n.x-e._imgOffset.x)+"px",r.top=Math.round(n.y-e._imgOffset.y)+"px"})},t.prototype._copyProps=function(t,e,n){for(var r=0;r<n.length;r++){var i=n[r];t[i]=e[i]}},t.prototype._copyStyle=function(e,n){if(t._rmvAtts.forEach(function(t){n.removeAttribute(t)}),e instanceof HTMLCanvasElement){var r=e,i=n;i.width=r.width,i.height=r.height,i.getContext("2d").drawImage(r,0,0)}for(var o=getComputedStyle(e),a=0;a<o.length;a++){var s=o[a];s.indexOf("transition")<0&&(n.style[s]=o[s])}n.style.pointerEvents="none";for(var a=0;a<e.children.length;a++)this._copyStyle(e.children[a],n.children[a])},t.prototype._dispatchEvent=function(e,n,r){if(e&&r){var i=document.createEvent("Event"),o=e.touches?e.touches[0]:e;return i.initEvent(n,!0,!0),i.button=0,i.which=i.buttons=1,this._copyProps(i,e,t._kbdProps),this._copyProps(i,o,t._ptProps),i.dataTransfer=this._dataTransfer,r.dispatchEvent(i),i.defaultPrevented}return!1},t.prototype._closestDraggable=function(t){for(;t;t=t.parentElement)if(t.hasAttribute("draggable")&&t.draggable)return t;return null},t}();n._instance=new n,n._THRESHOLD=5,n._OPACITY=.5,n._DBLCLICK=500,n._CTXMENU=900,n._rmvAtts="id,class,style,draggable".split(","),n._kbdProps="altKey,ctrlKey,metaKey,shiftKey".split(","),n._ptProps="pageX,pageY,clientX,clientY,screenX,screenY".split(","),t.DragDropTouch=n}(n||(n={}))},57:function(t,e,n){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}n.d(e,"a",function(){return a}),n.d(e,"c",function(){return u}),n.d(e,"b",function(){return c}),n.d(e,"d",function(){return l});var i=n(16),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a={selection:function(t,e){return{draggable:!0,droppable:!0,drag:function(t,e,n){e.dataTransfer&&e.dataTransfer.setData("application/json",JSON.stringify(n.selection))},guard:function(t,e,n){if(e&&e.dataTransfer&&e.dataTransfer.types.indexOf("application/json")<0)return!1;return function(){return t&&i.a(n.selection).contains(t)}()||function(){return n.ancestors&&n.ancestors.reduce(function(t,e){return t||i.a(n.selection).contains(e)},!1)}()},drop:function(n,o,a){var s=i.f(t(),a.category).filter(function(t){return a.selection.indexOf(t)<0}),u=n?n[a.category]&&n[a.category]instanceof Array?n:i.a(a.ancestors).last():null;u?u[a.category]=[].concat(r(u[a.category]),r(a.selection)):s=[].concat(r(s),r(a.selection)),e(s)}}},pluck:function(t,e){return{draggable:!0,backup:[],drag:function(n,r,o){s=JSON.stringify(t()),r.dataTransfer&&r.dataTransfer.setData("application/json",JSON.stringify(n)),setTimeout(function(){return e(i.f(t(),o.category).filter(function(t){return t!==n}))},20)},cancel:function(){setTimeout(function(){return e(JSON.parse(s))},20)}}},paste:function(t,e){return{droppable:!0,drop:function(n,o,a){if(o.dataTransfer&&o.dataTransfer.types.indexOf("application/json")>-1){var s=JSON.parse(o.dataTransfer.getData("application/json")),u=[].concat(r(t())),c=n?n[a.category]&&n[a.category]instanceof Array?n:i.a(a.ancestors).last():null;c?c[a.category]=[].concat(r(c[a.category]),[s]):u=[].concat(r(u),[s]),e(u)}}}}},s="[]",u={filesystem:function(t){var e=t.dataTransfer?t.dataTransfer.items:null;if(e&&e.length>0&&"file"===e[0].kind){for(var n=[],r=0;r<e.length;r++){var i=e[r].webkitGetAsEntry()||e[r].getAsFile();i&&n.push(i)}return n}return null}},c={onDragStart:function(t){return function(e){e.stopPropagation(),this.inputs.get().dragndrop.onDrag(t,e,this.inputs.get())}},onDragOver:function(t){return function(e){if(e.preventDefault(),e.stopPropagation(),this.inputs.get().dragndrop.guard&&this.inputs.get().dragndrop.guard(t,e,this.inputs.get()))return e.dataTransfer&&(e.dataTransfer.dropEffect="none"),void i.b.addClass(e.currentTarget,this.mixCss("nodrop"));i.b.addClass(e.currentTarget,this.mixCss("dragover"))}},onDragEnter:function(t){return function(e){if(e.preventDefault(),e.stopPropagation(),t&&(this.hasChildren(t)||this.isAsync(t))&&i.b.hasClass(e.target,this.mixCss("opener"))){var n=this.state.get().unfolded.filter(function(e){return e!==t});n.push(t),this.state.set({unfolded:n})}}},onDragLeave:function(t){t.stopPropagation(),i.b.removeClass(t.currentTarget,this.mixCss("dragover")),i.b.removeClass(t.currentTarget,this.mixCss("nodrop"))},onDrop:function(t){return function(e){e.stopPropagation(),i.b.removeClass(e.currentTarget,this.mixCss("dragover")),i.b.removeClass(e.currentTarget,this.mixCss("nodrop")),this.inputs.get().dragndrop.onDrop(t,e,this.inputs.get())}},onDragEnd:function(t){return function(e){e.stopPropagation(),e.dataTransfer&&"none"===e.dataTransfer.dropEffect&&this.inputs.get().dragndrop.onCancel(t,e,this.inputs.get())}}},l=function(){var t=this;return o({},this.inputs.get().dragndrop,{onDrag:function(e,n,r){i.a(t.inputs.get().selection).contains(e)||t.onSelect(e,r.ancestors,r.neighbours),t.outputs.onDrag&&t.outputs.onDrag(e,n,r)},onDrop:function(e,n,r){n.preventDefault(),t.outputs.onDrop&&t.outputs.onDrop(e,n,r)},onCancel:function(e,n,r){n.preventDefault(),n.dataTransfer&&"none"===n.dataTransfer.dropEffect&&t.outputs.onCancel&&t.outputs.onCancel(e,n,r)}})}},70:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n}});
//# sourceMappingURL=common.js.map