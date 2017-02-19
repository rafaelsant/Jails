!function(){Array.from||(Array.from=function(){var t=Object.prototype.toString,n=function(n){return"function"==typeof n||"[object Function]"===t.call(n)},e=function(t){var n=+t;return isNaN(n)?0:0!==n&&isFinite(n)?(n>0?1:-1)*Math.floor(Math.abs(n)):n},o=Math.pow(2,53)-1,r=function(t){var n=e(t);return Math.min(Math.max(n,0),o)};return function(t){var e=this,o=Object(t);if(null==t)throw new TypeError("Array.from requires an array-like object - not null or undefined");var i,u=arguments.length>1?arguments[1]:void 0;if(void 0!==u){if(!n(u))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(i=arguments[2])}for(var c,a=r(o.length),s=n(e)?Object(new e(a)):Array(a),l=0;a>l;)c=o[l],s[l]=u?void 0===i?u(c,l):u.call(i,c,l):c,l+=1;return s.length=a,s}}()),Object.assign||(Object.assign=function(t){t=Object(t);for(var n=1,e=arguments.length;e>n;n++){var o=arguments[n];if(null!=o)for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(t){for(var n=(this.document||this.ownerDocument).querySelectorAll(t),e=n.length;--e>=0&&n.item(e)!==this;);return e>-1})}(),function(){function t(t,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),e}return"function"==typeof window.CustomEvent?!1:(t.prototype=window.Event.prototype,window.CustomEvent=t,Array.prototype.forEach||(Array.prototype.forEach=function(t,n){var e,o;if(null==this)throw new TypeError("this is null or not defined");var r=Object(this),i=r.length>>>0;if("[object Function]"!=={}.toString.call(t))throw new TypeError(t+" is not a function");for(n&&(e=n),o=0;i>o;){var u;Object.prototype.hasOwnProperty.call(r,o)&&(u=r[o],t.call(e,u,o,r)),o++}}),void(Object.keys||(Object.keys=function(t){if(t!==Object(t))throw new TypeError("Object.keys called on a non-object");var n,e=[];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e})))}(),function(t){function n(t,e){n.components[t]=e}function e(t){var n,e={};return n=t.previousSibling,n=n&&8==n.nodeType?n:n?n.previousSibling:null,n&&8==n.nodeType&&n.data.replace(/@([a-zA-z0-9-\/]*)(?:\((.*)\))?/g,function(t,n,o){e[n]=Function("return "+o)()}),e}function o(t){var n=t.getAttribute(p).split(/\s/);a(n,r(t))}function r(t){return function(e){e in n.components&&(t.j=t.j||{},t.j[e]={methods:{}},n.component(e,t,n.components[e]))}}function i(t){var n={data:{}};return a(t.attributes,u(n)),n}function u(t){return function(n){var e,o=n.name.split(/data\-/);try{e=n.value in window?n.value:Function("return "+n.value)()}catch(r){e=n.value}return o[1]?t.data[o.pop().replace(/-([a-z])/g,c)]=e:t[n.name]=e,t}}function c(t,n){return n.toUpperCase()}function a(t,n,e){t=e?Array.from(t).reverse():t;for(var o=0,r=t.length;r>o;o++)n(t[o],o,t)}function s(){function t(t,n){var e=document.createEvent(t);return n=n||{},e.initEvent(t,n.bubbles||!1,n.cancelable||!1,n.detail||null),e}function n(t,n){return function(e){t.__events[n].forEach(function(t){t.apply(this,[e].concat(e.detail.args))})}}function e(t){return function(n){var e=this,o=n.target;Object.keys(t).forEach(function(r){o.matches(r)&&t[r].apply(e,[n].concat(n.detail.args))})}}return{on:function(t,o,r){if(t.__eventHandlers=t.__eventHandlers||{},t.__events=t.__events||{},!t.__eventHandlers[o]){var i=r.call?n(t,o):e(r);t.__eventHandlers[o]=i,t.addEventListener(o,i,"focus"==o||"blur"==o)}r.call?t.__events[o]=(t.__events[o]||[]).concat(r):Object.keys(r).forEach(function(n){t.__events[o]=(t.__events[o]||[]).concat(r[n])})},off:function(t,n,e){e&&t.__events[n]&&t.__events[n].length?t.__events[n]=(t.__events[n]||[]).filter(function(t){return t!=e}):t.removeEventListener(n,t.__eventHandlers[n],!1)},trigger:function(n,e,o){try{n.dispatchEvent(new t(e,{bubbles:!0,detail:o}))}catch(r){n.dispatchEvent(new CustomEvent(e,{bubbles:!0,detail:o}))}}}}function l(t,n){return t={},n={},{publish:function(e,o){e in t?a(t[e],function(t){t(o)}):n[e]=o},subscribe:function(e,o){return t[e]=t[e]||[],t[e].push(o),e in n&&a(t[e],function(t){t(n[e])}),function(){t[e]=t[e].filter(function(t){return t==o})}}}}var f=l(),p="data-component",d="["+p+"]";n.events=s(),n.components={},n.publish=f.publish,n.subscribe=f.subscribe,n.start=function(t){t=t||document.documentElement,a(t.querySelectorAll(d),o,!0)},n.destroy=function(t,e){t=t||document.documentElement,e=e||d,a(t.querySelectorAll(e),function(t){t.__eventHandlers&&(t.__events=null,t.__eventHandlers=null,t.j=null),n.events.trigger(t,":destroy")},!0)},n.component=function(t,o,r){var u={},c=function(){},s={elm:o,subscribe:f.subscribe,publish:f.publish,on:function(t,e){n.events.on(o,t,e)},off:function(t,e){n.events.off(o,t,e)},init:function(t){c=t},props:function(t){return u.props=u.props||i(o),t?u.props[t]:u.props},annotations:function(n){return u.annotations=u.annotations||e(o)[t]||{},n?u.annotations[n]:u.annotations},set:function(n,e){o.j[t].methods[n]=e},get:function(t,n){return function(){var e=Array.from(arguments),r=e.shift();n=n?"[data-component*="+t+"]"+n:"[data-component*="+t+"]",a(o.querySelectorAll(n),function(i){i.j&&r in i.j[t].methods&&i.j[t].methods[r].apply(null,e),o.matches(n)&&o.j[t].methods[r].apply(null,e)})}},emit:function(t){var e=Array.from(arguments);t.match(/^\:/)&&n.events.trigger(o,e.shift(),{args:e})}};r(s,o,s.props),c(s)},"function"==typeof define&&define.amd?define(function(){return n}):"undefined"!=typeof module&&module.exports?module.exports=n:t.jails=n}(window),function(t,n){"function"==typeof define&&define.amd?define(["jquery","jails"],n):"undefined"!=typeof module&&module.exports?module.exports=n(require("jquery"),require("jails")):n(t.jQuery,t.jails)}(this,function(t,n){n.events={on:function(n,e,o){function r(t){return function(n,e){return n.detail=e?e.detail:n.detail,n.detail=n.detail||{},t.apply(this,[n].concat(n.detail.args))}}o.call?t(n).on(e,r(o)):Object.keys(o).forEach(function(i){t(n).on(e,i,r(o[i]))})},off:function(n,e,o){t(n).off(e,o)},trigger:function(n,e,o){t(n).trigger(e,{detail:o})}}});
