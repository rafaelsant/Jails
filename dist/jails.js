!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("jails",[],t):"object"==typeof exports?exports.jails=t():e.jails=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){var r;!function(t){var o,i,a=(o={},i={},{publish:function(e,t){e in o?v(o[e],function(e){e(t)}):i[e]=t},subscribe:function(e,t){return o[e]=o[e]||[],o[e].push(t),e in i&&v(o[e],function(t){t(i[e])}),function(){o[e]=o[e].filter(function(e){return e==t})}}}),u="data-component",s="["+u+"]";function c(e,t,n){return c.components[e]=t,c.components[e].options=n||{},c}function l(e){"childList"==e.type&&(e.addedNodes.length?d(e.addedNodes,f):e.removedNodes.length&&d(e.removedNodes,c.destroy))}function d(e,t){v(Array.prototype.slice.call(e).reduce(function(e,t){return t.querySelectorAll?[t].concat(Array.prototype.slice.call(t.querySelectorAll(s))):[t]},[]),function(e){e.getAttribute&&e.getAttribute(u)&&t(e)},!0)}function f(e){v(e.getAttribute(u).split(/\s/),function(e){return function(t){var n,r;e.j=e.j||{},t in c.components&&!e.j[t]&&(r=c.components[t],e.j[t]={methods:{}},n=c.component(t,e,r.options),r(n,e,n.props),n.__initialize(n))}}(e))}function p(e,t){return t.toUpperCase()}function v(e,t,n){for(var r=0,o=(e=n?Array.prototype.slice.call(e).reverse():e).length;r<o;r++)e[r]&&t(e[r],r,e)}c.observer=null,c.events=function(){var e="CustomEvent"in window&&"function"==typeof window.CustomEvent?function(e,t){return new CustomEvent(e,t)}:function(e,t){var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!0,!0,t),n};function t(e,t){e.__events[t]&&e.__events[t].listener&&(e.removeEventListener(t,e.__events[t].listener,"focus"==t||"blur"==t||"mouseenter"==t||"mouseleave"==t),delete e.__events[t])}function n(e,t,n){return function(r){for(var o=r.target,i=r.detail||{};o&&o!==e;)o.matches(t)&&(r.delegateTarget=o,n.apply(this,[r].concat(i.args))),o=o.parentNode}}return{on:function(e,t,r){if(e.__events=e.__events||{},e.__events[t]=e.__events[t]||[],!e.__events[t].length){var o=function(e,t){return function(n){var r=this,o=n.detail||{};e.__events[t].forEach(function(e){e.handler.apply(r,[n].concat(o.args))})}}(e,t);e.addEventListener(t,o,"focus"==t||"blur"==t||"mouseenter"==t||"mouseleave"==t),e.__events[t].listener=o}r.call?e.__events[t].push({handler:r,callback:r}):Object.keys(r).forEach(function(o){e.__events[t].push({handler:n(e,o,r[o]),callback:r[o]})})},off:function(e,n,r){if(r&&e.__events[n]&&e.__events[n].length){var o=e.__events[n];e.__events[n]=e.__events[n].filter(function(e){return e.callback!=r}),e.__events[n].listener=o.listener,e.__events[n].length||t(e,n)}else t(e,n)},trigger:function(t,n,r){t.dispatchEvent(e(n,{bubbles:!0,detail:r}))}}}(),c.components={},c.publish=a.publish,c.subscribe=a.subscribe,c.start=function(e){var t;return v((e=e||document.documentElement).querySelectorAll(s),f,!0),c.observer=c.observer||((t=new MutationObserver(function(e){e.forEach(l)})).observe(document.body,{childList:!0,subtree:!0}),t),c},c.destroy=function(e){if(e.__events){for(var t in c.events.trigger(e,":destroy"),e.__events)c.events.off(e,t);e.__events=null,e.j=null}},c.use=function(e){return e(c),c},c.extends=function(e){var t,n;return c.component=(t=e,n=c.component,function(){return t(n.apply(null,arguments))}),c},c.component=function(e,t,n){var r,o,i={},u=c.events,s=new Promise(function(e){o=e});return r={name:e,elm:t,subscribe:a.subscribe,publish:a.publish,injection:n.injection,jails:c,__initialize:function(e){o(e)},main:function(e){e&&e.call&&s.then(function(e){return function(t){var n=e(t);if(n&&n.forEach){var r={};n.forEach(function(e){r=(e&&e.call?e(t,r):null)||r})}}}(e))},init:function(e){r.main(e)},expose:function(n,r){t.j[e].methods=n},on:function(e,n){u.on(t,e,n)},off:function(e,n){u.off(t,e,n)},trigger:function(e,n,r){n.constructor==String?u.trigger(t.querySelector(n),e,{args:r}):u.trigger(t,e,{args:n})},props:function(e){return i.props=i.props||function(e){var t={data:{}};return v(e.attributes,(n=t,function(e){var t,r=e.name.split(/data\-/);try{t=e.value in window?e.value:new Function("return "+e.value)()}catch(n){t=e.value}return r[1]?n.data[r.pop().replace(/-([a-z])/g,p)]=t:n[e.name]=t,n})),t;var n}(t),e?i.props[e]:i.props},get:function(e,n){return function(){var r=Array.prototype.slice.call(arguments),o=r.shift(),i="[data-component*="+e+"]";n=n?i+n:i,v(t.querySelectorAll(n),function(t){t.j&&t.j[e]&&o in t.j[e].methods&&t.j[e].methods[o].apply(null,r)}),t.matches(n)&&t.j&&t.j[e]&&o in t.j[e].methods&&t.j[e].methods[o].apply(null,r)}},emit:function(e,n){var r=Array.prototype.slice.call(arguments);u.trigger(t,r.shift(),{args:r})}}},void 0===(r=function(){return c}.call(t,n,t,e))||(e.exports=r)}(window)},function(e,t,n){e.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var o=n(3);Object.defineProperty(t,"pandora",{enumerable:!0,get:function(){return(e=o,e&&e.__esModule?e:{default:e}).default;var e}})},function(e,t,n){(function(e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(t){return function(n){return e&&"production"!==e.env.NODE_ENV&&(console.groupCollapsed(t+" / INITIAL STATE"),console.log("+ state",n.getState()),console.groupEnd(),n.subscribe(function(e,n){var r=n.action,o=n.payload,i=JSON.parse(JSON.stringify(e));console.groupCollapsed(t+" / ACTION => "+r),console.log("+ payload",o),console.log("+ state",i),console.groupEnd()})),n}}}).call(t,n(2))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(c===setTimeout)return setTimeout(e,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function i(){v&&f&&(v=!1,f.length?p=f.concat(p):m=-1,p.length&&a())}function a(){if(!v){var e=o(i);v=!0;for(var t=p.length;t;){for(f=p,p=[];++m<t;)f&&f[m].run();m=-1,t=p.length}f=null,v=!1,function(e){if(l===clearTimeout)return clearTimeout(e);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}(e)}}function u(e,t){this.fun=e,this.array=t}function s(){}var c,l,d=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(e){c=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(e){l=r}}();var f,p=[],v=!1,m=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];p.push(new u(e,t)),1!==p.length||v||o(a)},u.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=s,d.addListener=s,d.once=s,d.off=s,d.removeListener=s,d.removeAllListeners=s,d.emit=s,d.prependListener=s,d.prependOnceListener=s,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.model,n=void 0===t?{}:t,r=e.actions,o=void 0===r?{}:r,i=e.middlewares,a=void 0===i?[]:i,u=e.autostart,s=void 0===u||u,c=e.callback,l=[],d=[],f=JSON.parse(JSON.stringify(n)),p="undefined"!=typeof window&&window.document&&window.document.createElement?requestAnimationFrame||setTimeout:function(e){return e()},v=function(e){e&&(e.call?d.push(e):d.push(function(t,n){n.action in e&&e[n.action](t,n)}))},m=function(e,t,n){var r=!1;if(e in o){var i=Object.assign({},f),a=o[e](i,t,g);a&&(f=Object.assign(f,a),r=!0)}if(l.shift(),!l.length){var u={action:e,payload:t,haschanged:r};d.forEach(function(e){return e(f,u)}),n(f,u)}},g={set:function(e){e(f),d.forEach(function(e){return e(f,{haschanged:!0})})},getState:function(){return Object.assign({},f)},dispatch:function(e,t){return new Promise(function(n){l.push({action:e,payload:t}),1==l.length&&p(function(){for(;l.length;)m(l[0].action,l[0].payload,n)})})},subscribe:v,getActions:function(){return o},setActions:function(e){o=e}};return c&&(v(function(e,t){return t.haschanged?c(e,t):null}),s&&c(f)),a.forEach(function(e){return e(g)}),g}}])},function(e,t,n){var r;r=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),a=n(2);var u="undefined"!=typeof document?document:{},s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"soda-";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._prefix=t}return o(e,[{key:"setDocument",value:function(e){u=e}},{key:"run",value:function(e,t){var n=this,r=u.createElement("div");u.documentMode<9&&(r.style.display="none",u.body.appendChild(r)),r.innerHTML=e,(0,a.nodes2Arr)(r.childNodes).map(function(e){n.compileNode(e,t)});var o=r.innerHTML;return u.documentMode<9&&u.body.removeChild(r),o}},{key:"prefix",value:function(e){this._prefix=e}},{key:"_getPrefixReg",value:function(){return new RegExp("^"+this._prefix)}},{key:"_getPrefixedDirectiveMap",value:function(){var t=this,n={};return e.sodaDirectives.map(function(e){var r=t._prefix+e.name;n[r]=e}),n}},{key:"_removeSodaMark",value:function(e,t){e.removeAttribute(t)}},{key:"compileNode",value:function(t,n){var o=this,s=this._getPrefixReg(),c=e.sodaDirectives,l=this._getPrefixedDirectiveMap();!function e(t,n){t.nodeType===(t.TEXT_NODE||3)&&(t.nodeValue=t.nodeValue.replace(i.VALUE_OUT_REG,function(e,t){var i=o.parseSodaExpression(t,n);return"object"===(void 0===i?"undefined":r(i))&&(i=JSON.stringify(i,null,2)),i})),t.attributes&&t.attributes.length&&(c.map(function(e){var r=e.name,i=e.opt,s=o._prefix+r;if((0,a.exist)(t.getAttribute(s))){var c=t.getAttribute(s);i.link.bind(o)({expression:c,scope:n,el:t,parseSodaExpression:o.parseSodaExpression.bind(o),getValue:o.getValue.bind(o),compileNode:o.compileNode.bind(o),document:u}),o._removeSodaMark(t,s)}}),(0,a.nodes2Arr)(t.attributes).filter(function(e){return!l[e.name]}).map(function(e){if(s.test(e.name)){var r=e.name.replace(s,"");if(r&&(0,a.exist)(e.value)){var i=o.parseComplexExpression(e.value,n);!1!==i&&(0,a.exist)(i)&&t.setAttribute(r,i),o._removeSodaMark(t,e.name)}}else(0,a.exist)(e.value)&&(e.value=o.parseComplexExpression(e.value,n))})),(0,a.nodes2Arr)(t.childNodes).map(function(t){e(t,n)})}(t,n)}},{key:"getEvalFunc",value:function(t){return new Function("getValue","sodaFilterMap","return function sodaExp(scope){ return "+t+"}")(this.getValue,e.sodaFilterMap)}},{key:"getValue",value:function(e,t){i.CONST_REGG.lastIndex=0;t.replace(i.CONST_REGG,function(t){return void 0===e[t]?t:e[t]});if("true"===t)return!0;if("false"===t)return!1;return function t(n,r){var o,a=r.indexOf(".");if(a>-1){var u=r.substr(0,a);return r=r.substr(a+1),void 0!==e[u]&&i.CONST_REG.test(u)&&(u=e[u]),void 0!==n[u]&&null!==n[u]?t(n[u],r):""}r=r.trim(),void 0!==e[r]&&i.CONST_REG.test(r)&&(r=e[r]),o=void 0!==n[r]?n[r]:"";return o}(e,t)}},{key:"parseComplexExpression",value:function(e,t){var n=this,r=i.ONLY_VALUE_OUT_REG.exec(e);if(r){var o=r[1];return this.parseSodaExpression(o,t)}return e.replace(i.VALUE_OUT_REG,function(e,r){return n.parseSodaExpression(r,t)})}},{key:"parseSodaExpression",value:function(e,t){var n=this;e=(e=e.replace(i.STRING_REG,function(e,n,r){var o=(0,a.getRandom)();return t[o]=n||r,o})).replace(i.OR_REG,i.OR_REPLACE).split("|");for(var r=0;r<e.length;r++)e[r]=(e[r].replace(new RegExp(i.OR_REPLACE,"g"),"||")||"").trim();for(var o=e[0]||"",u=e.slice(1);i.ATTR_REG_NG.test(o);)i.ATTR_REG.lastIndex=0,o=o.replace(i.ATTR_REG,function(e,r){var o=(0,a.getAttrVarKey)(),i=n.parseSodaExpression(r,t);return t[o]=i,"."+o});return o=o.replace(i.OBJECT_REG,function(e){return"getValue(scope,'"+e.trim()+"')"}),o=this.parseFilter(u,o),this.getEvalFunc(o)(t)}},{key:"parseFilter",value:function(t,n){var r=e.sodaFilterMap;return function e(){if(o=t.shift()){for(var o,a=(o=o.split(":")).slice(1)||[],u=(o[0]||"").trim(),s=0;s<a.length;s++)i.OBJECT_REG_NG.test(a[s])&&(a[s]="getValue(scope,'"+a[s]+"')");r[u]&&(a.unshift(n),a=a.join(","),n="sodaFilterMap['"+u+"']("+a+")"),e()}}(),n}}],[{key:"filter",value:function(e,t){this.sodaFilterMap[e]=t}},{key:"getFilter",value:function(e){return this.sodaFilterMap[e]}},{key:"directive",value:function(e,t){var n=t.priority,r=void 0===n?0:n,o=void 0;for(o=0;o<this.sodaDirectives.length;o++){var i=this.sodaDirectives[o].opt.priority,a=void 0===i?0:i;if(r<a);else if(r>=a)break}this.sodaDirectives.splice(o,0,{name:e,opt:t})}},{key:"discribe",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{compile:!0};this.template[e]={funcOrStr:t,option:n}}},{key:"getTmpl",value:function(e,t){var n=this.template[e],r=n.funcOrStr,o=n.option,i=void 0===o?{}:o;return{template:"function"==typeof r?r.apply(null,t):r,option:i}}}]),e}();s.sodaDirectives=[],s.sodaFilterMap={},s.template={},t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.IDENTOR_REG=/[a-zA-Z_\$]+[\w\$]*/g,t.STRING_REG=/"([^"]*)"|'([^']*)'/g,t.NUMBER_REG=/\d+|\d*\.\d+/g,t.OBJECT_REG=/[a-zA-Z_\$]+[\w\$]*(?:\s*\.\s*(?:[a-zA-Z_\$]+[\w\$]*|\d+))*/g,t.OBJECT_REG_NG=/[a-zA-Z_\$]+[\w\$]*(?:\s*\.\s*(?:[a-zA-Z_\$]+[\w\$]*|\d+))*/,t.ATTR_REG=/\[([^\[\]]*)\]/g,t.ATTR_REG_NG=/\[([^\[\]]*)\]/,t.ATTR_REG_DOT=/\.([a-zA-Z_\$]+[\w\$]*)/g,t.NOT_ATTR_REG=/[^\.|]([a-zA-Z_\$]+[\w\$]*)/g,t.OR_REG=/\|\|/g,t.OR_REPLACE="OR_OPERATOR",t.CONST_PRIFIX="_$C$_",t.CONST_REG=/^_\$C\$_/,t.CONST_REGG=/_\$C\$_[^\.]+/g,t.VALUE_OUT_REG=/\{\{([^\}]*)\}\}/g,t.ONLY_VALUE_OUT_REG=/^\{\{([^\}]*)\}\}$/},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.assign=t.nodes2Arr=t.exist=t.getRandom=t.getAttrVarKey=void 0;var r=n(1),o=(t.getAttrVarKey=function(){return r.CONST_PRIFIX+~~(1e6*Math.random())},t.getRandom=function(){return"$$"+~~(1e6*Math.random())},t.exist=function(e){return null!=e&&""!==e&&void 0!==e},t.nodes2Arr=function(e){for(var t=[],n=0;n<e.length;n++)t.push(e[n]);return t},Object.getOwnPropertySymbols),i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;t.assign=Object.assign||function(e,t){for(var n,r,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var c in n=Object(arguments[s]))i.call(n,c)&&(u[c]=n[c]);if(o){r=o(n);for(var l=0;l<r.length;l++)a.call(n,r[l])&&(u[r[l]]=n[r[l]])}}return u}},function(e,t,n){"use strict";var r,o=n(0),i=(r=o)&&r.__esModule?r:{default:r},a=n(2);n(4),n(5),n(6),n(7),n(8),n(9),n(10);var u=new i.default,s={prefix:function(e){u.prefix(e)},filter:function(e,t){i.default.filter(e,t)},directive:function(e,t){i.default.directive(e,t)},setDocument:function(e){u.setDocument(e)},discribe:function(e,t,n){i.default.discribe(e,t,n)},Soda:i.default},c=(0,a.assign)(function(e,t){return u.run(e,t)},s);e.exports=c},function(e,t,n){"use strict";var r,o=n(0);((r=o)&&r.__esModule?r:{default:r}).default.directive("repeat",{priority:10,link:function(e){var t,n,r,o=this,i=e.scope,a=e.el,u=e.expression,s=e.getValue,c=(e.parseSodaExpression,e.compileNode),l=u.replace(/\s+by\s+([^\s]+)$/,function(e,t){return t&&(r=(t||"").trim()),""}),d=/([^\s]+)\s+in\s+([^\s]+)|\(([^,]+)\s*,\s*([^)]+)\)\s+in\s+([^\s]+)/.exec(l);if(d){if(d[1]&&d[2]){if(t=(d[1]||"").trim(),n=(d[2]||"").trim(),!t||!n)return}else d[3]&&d[4]&&d[5]&&(r=(d[3]||"").trim(),t=(d[4]||"").trim(),n=(d[5]||"").trim());r=r||"$index";var f=s(i,n)||[],p=function(e){var n=a.cloneNode(!0),u=Object.create(i);u[r]=e,u[t]=f[e],n.removeAttribute(o._prefix+"repeat"),a.parentNode.insertBefore(n,a),c(n,u)};if("length"in f)for(var v=0;v<f.length;v++)p(v);else for(var v in f)f.hasOwnProperty(v)&&p(v);a.parentNode.removeChild(a),a.childNodes&&a.childNodes.length&&(a.innerHTML="")}}})},function(e,t,n){"use strict";var r,o=n(0);((r=o)&&r.__esModule?r:{default:r}).default.directive("if",{priority:9,link:function(e){var t=e.expression,n=e.parseSodaExpression,r=e.scope,o=e.el;n(t,r)||(o.parentNode&&o.parentNode.removeChild(o),o.innerHTML="")}})},function(e,t,n){"use strict";var r,o=n(0),i=(r=o)&&r.__esModule?r:{default:r};var a=function(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)","g")};i.default.directive("class",{link:function(e){var t=e.scope,n=e.el,r=e.expression,o=(0,e.parseSodaExpression)(r,t);o&&function(e,t){e.className?e.className.match(a(t))||(e.className+=" "+t):e.className=t}(n,o)}})},function(e,t,n){"use strict";var r,o=n(0);((r=o)&&r.__esModule?r:{default:r}).default.directive("html",{link:function(e){var t=e.expression,n=e.scope,r=e.el,o=(0,e.parseSodaExpression)(t,n);o&&(r.innerHTML=o)}})},function(e,t,n){"use strict";var r,o=n(0);((r=o)&&r.__esModule?r:{default:r}).default.directive("replace",{link:function(e){var t=e.scope,n=e.el,r=e.expression,o=e.parseSodaExpression,i=e.document,a=o(r,t);if(a){var u=i.createElement("div");if(u.innerHTML=a,n.parentNode)for(;u.childNodes[0];)n.parentNode.insertBefore(u.childNodes[0],n)}n.parentNode&&n.parentNode.removeChild(n)}})},function(e,t,n){"use strict";var r,o=n(0);((r=o)&&r.__esModule?r:{default:r}).default.directive("style",{link:function(e){var t=e.scope,n=e.el,r=e.expression,o=(0,e.parseSodaExpression)(r,t),i=function(e,t){return/opacity|z-index/.test(e)?parseFloat(t):isNaN(t)?t:t+"px"};if(o){var a=[];for(var u in o)if(o.hasOwnProperty(u)){var s=i(u,o[u]);a.push([u,s].join(":"))}var c=n.style;for(u=0;u<c.length;u++){var l=c[u];o[l]||a.push([l,c[l]].join(":"))}var d=a.join(";");n.setAttribute("style",d)}}})},function(e,t,n){"use strict";var r,o=n(0),i=(r=o)&&r.__esModule?r:{default:r};i.default.directive("include",{priority:8,link:function(e){var t=e.scope,n=e.el,r=e.parseSodaExpression,o=e.expression.replace(/\{\{([^\}]*)\}\}/g,function(e,n){return r(n,t)}),a=(o=o.split(":"))[0],u=o.slice(1),s=i.default.getTmpl(a,u),c=s.template,l=s.option;c&&((void 0===l?{}:l).compile?n.outerHTML=this.run(c,t):n.outerHTML=c)}})}])},e.exports=r()},function(e,t,n){"use strict";var r,o="http://www.w3.org/1999/xhtml",i="undefined"==typeof document?void 0:document,a=i?i.body||i.createElement("div"):{},u=a.hasAttributeNS?function(e,t,n){return e.hasAttributeNS(t,n)}:a.hasAttribute?function(e,t,n){return e.hasAttribute(n)}:function(e,t,n){return null!=e.getAttributeNode(t,n)};function s(e,t){var n=e.nodeName,r=t.nodeName;return n===r||!!(t.actualize&&n.charCodeAt(0)<91&&r.charCodeAt(0)>90)&&n===r.toUpperCase()}function c(e,t,n){e[n]!==t[n]&&(e[n]=t[n],e[n]?e.setAttribute(n,""):e.removeAttribute(n,""))}var l={OPTION:function(e,t){c(e,t,"selected")},INPUT:function(e,t){c(e,t,"checked"),c(e,t,"disabled"),e.value!==t.value&&(e.value=t.value),u(t,null,"value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var n=t.value;e.value!==n&&(e.value=n);var r=e.firstChild;if(r){var o=r.nodeValue;if(o==n||!n&&o==e.placeholder)return;r.nodeValue=n}},SELECT:function(e,t){if(!u(t,null,"multiple")){for(var n=0,r=t.firstChild;r;){var o=r.nodeName;if(o&&"OPTION"===o.toUpperCase()){if(u(r,null,"selected")){n;break}n++}r=r.nextSibling}e.selectedIndex=n}}},d=1,f=3,p=8;function v(){}function m(e){return e.id}var g=function(e){return function(t,n,a){if(a||(a={}),"string"==typeof n)if("#document"===t.nodeName||"HTML"===t.nodeName){var u=n;(n=i.createElement("html")).innerHTML=u}else c=n,!r&&i.createRange&&(r=i.createRange()).selectNode(i.body),r&&r.createContextualFragment?g=r.createContextualFragment(c):(g=i.createElement("body")).innerHTML=c,n=g.childNodes[0];var c,g,b,h=a.getNodeKey||m,y=a.onBeforeNodeAdded||v,_=a.onNodeAdded||v,E=a.onBeforeElUpdated||v,A=a.onElUpdated||v,N=a.onBeforeNodeDiscarded||v,T=a.onNodeDiscarded||v,x=a.onBeforeElChildrenUpdated||v,O=!0===a.childrenOnly,S={};function w(e){b?b.push(e):b=[e]}function R(e,t,n){!1!==N(e)&&(t&&t.removeChild(e),T(e),function e(t,n){if(t.nodeType===d)for(var r=t.firstChild;r;){var o=void 0;n&&(o=h(r))?w(o):(T(r),r.firstChild&&e(r,n)),r=r.nextSibling}}(e,n))}function j(e){_(e);for(var t=e.firstChild;t;){var n=t.nextSibling,r=h(t);if(r){var o=S[r];o&&s(t,o)&&(t.parentNode.replaceChild(o,t),C(o,t))}j(t),t=n}}function C(r,o,a){var u,c=h(o);if(c&&delete S[c],!n.isSameNode||!n.isSameNode(t)){if(!a){if(!1===E(r,o))return;if(e(r,o),A(r),!1===x(r,o))return}if("TEXTAREA"!==r.nodeName){var v,m,g,b,_=o.firstChild,N=r.firstChild;e:for(;_;){for(g=_.nextSibling,v=h(_);N;){if(m=N.nextSibling,_.isSameNode&&_.isSameNode(N)){_=g,N=m;continue e}u=h(N);var T=N.nodeType,O=void 0;if(T===_.nodeType&&(T===d?(v?v!==u&&((b=S[v])?N.nextSibling===b?O=!1:(r.insertBefore(b,N),m=N.nextSibling,u?w(u):R(N,r,!0),N=b):O=!1):u&&(O=!1),(O=!1!==O&&s(N,_))&&C(N,_)):T!==f&&T!=p||(O=!0,N.nodeValue!==_.nodeValue&&(N.nodeValue=_.nodeValue))),O){_=g,N=m;continue e}u?w(u):R(N,r,!0),N=m}if(v&&(b=S[v])&&s(b,_))r.appendChild(b),C(b,_);else{var M=y(_);!1!==M&&(M&&(_=M),_.actualize&&(_=_.actualize(r.ownerDocument||i)),r.appendChild(_),j(_))}_=g,N=m}for(;N;)m=N.nextSibling,(u=h(N))?w(u):R(N,r,!0),N=m}var k=l[r.nodeName];k&&k(r,o)}}!function e(t){if(t.nodeType===d)for(var n=t.firstChild;n;){var r=h(n);r&&(S[r]=n),e(n),n=n.nextSibling}}(t);var M,k,L=t,$=L.nodeType,G=n.nodeType;if(!O)if($===d)G===d?s(t,n)||(T(t),L=function(e,t){for(var n=e.firstChild;n;){var r=n.nextSibling;t.appendChild(n),n=r}return t}(t,(M=n.nodeName,(k=n.namespaceURI)&&k!==o?i.createElementNS(k,M):i.createElement(M)))):L=n;else if($===f||$===p){if(G===$)return L.nodeValue!==n.nodeValue&&(L.nodeValue=n.nodeValue),L;L=n}if(L===n)T(t);else if(C(L,n,O),b)for(var P=0,V=b.length;P<V;P++){var U=S[b[P]];U&&R(U,U.parentNode,!1)}return!O&&L!==t&&t.parentNode&&(L.actualize&&(L=L.actualize(t.ownerDocument||i)),t.parentNode.replaceChild(L,t)),L}}(function(e,t){var n,r,o,i,a,s=t.attributes;for(n=s.length-1;n>=0;--n)o=(r=s[n]).name,i=r.namespaceURI,a=r.value,i?(o=r.localName||o,e.getAttributeNS(i,o)!==a&&e.setAttributeNS(i,o,a)):e.getAttribute(o)!==a&&e.setAttribute(o,a);for(n=(s=e.attributes).length-1;n>=0;--n)!1!==(r=s[n]).specified&&(o=r.name,(i=r.namespaceURI)?(o=r.localName||o,u(t,i,o)||e.removeAttributeNS(i,o)):u(t,null,o)||e.removeAttribute(o))});e.exports=g},,function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(3),a=n.n(i),u=n(2),s=n.n(u);function c(e){(requestAnimationFrame||setTimeout)(e,1e3/60)}function l(e){c(()=>c(e))}const d=e=>t=>t.split(/\s/).map(t=>e.classList.add(t)),f=e=>t=>t.split(/\s/).map(t=>e.classList.remove(t)),p=e=>{for(let t in e)if(t in document.body.style)return e[t]},v=p({animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"}),m=p({transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"});let g=0;const b="data-reactor-id",h={},y={},_={},E={};s.a.prefix("v-");function A(e){return JSON.parse(JSON.stringify(e))}var N=n(1);n.d(t,"store",function(){return T}),N.pandora.middlewares={log:N.log};t.default=o.a.use((e=>t=>{t.register=((n,r,o)=>{t(n,t=>{const n=t.reactor,{model:o,actions:i,view:a=(e=>e)}=r,u=Object.keys(o||{}).length>0;t.module=r,t.Msg=e({model:o,actions:i,autostart:u,callback:e=>n(a(e))}),r.default?r.default(t):r(t)},o)})})(N.pandora)).extends((e=>(function(e=document.body){const t=document.createElement("div");Array.prototype.slice.call(e.querySelectorAll("[data-component]")).forEach((e,t)=>e.setAttribute(b,g++)),t.innerHTML=e.innerHTML.replace(/<template*.>/g,"").replace(/<\/template>/g,"");const n=Array.prototype.slice.call(t.querySelectorAll("[data-component]"));n.filter(e=>!e.getAttribute(b)).forEach(e=>e.setAttribute(b,g++)),n.forEach(e=>{const t=+e.getAttribute(b);h[t]||(h[t]=e.outerHTML)})}(),e=>{if(e.elm==document.body)e.reactor=(()=>console.warn("Reactor can`t be used on document.body"));else{let n=!0;const r=+e.elm.getAttribute(b),o=h[r];y[r]=e,e.reactor=(i=>{if(!i)return A(_);const u=A(Object.assign({},E[r],i));Object.assign(_,u),delete _.parent,u.parent=_;let c={hascomponent:!1,pageload:n};a()(e.elm,s()(o,u),t(c)),c.hascomponent&&(e.jails.observer||e.jails.start(e.elm),e.elm.getAttribute(b)||(e.elm.setAttribute(b,g++),h[g]=e.elm.outerHTML.replace(/<template*.>/g,"").replace(/<\/template>/g,""))),c.hascomponent=!1,n=!1,E[r]=u})}const t=t=>({getNodeKey(e){const t=e.getAttribute&&e.getAttribute("data-key"),n=e.getAttribute&&e.getAttribute(b);return t||n},onBeforeElChildrenUpdated(n,r){if(n.getAttribute){if("static"in n.dataset&&n!=e.elm)return!1;if(n.getAttribute("data-component")&&n!=e.elm&&!t.pageload){const e=+n.getAttribute(b);return y[e].Msg.set(e=>e.parent=_),!1}}},onNodeAdded:e=>(e.getAttribute&&e.getAttribute("data-component")&&!e.j&&(t.hascomponent=!0),(e=>{if(e.getAttribute){const t=e.getAttribute("data-animation");if(t){const n=e.getAttribute("data-enter-class")||`${t}-enter`,r=e.getAttribute("data-enter-active-class")||`${t}-enter-active`,o=e.getAttribute("data-enter-to-class")||`${t}-enter-to`,i=f(e),a=d(e),u=()=>{i(`${n} ${r} ${o}`),e.removeEventListener(m,u),e.removeEventListener(v,u)};e.addEventListener(m,u),e.addEventListener(v,u),l(()=>{a(o),i(n)})}}})(e)),onNodeDiscarded(t){t.getAttribute&&t.getAttribute("data-component")&&t.j&&e.jails.destroy(t)},onBeforeNodeAdded:e=>(e=>{if(e.getAttribute){const t=e.getAttribute("data-animation");if(t){const n=e.getAttribute("data-enter-class")||`${t}-enter`,r=e.getAttribute("data-enter-active-class")||`${t}-enter-active`;d(e)(`${n} ${r}`)}}})(e),onBeforeNodeDiscarded:e=>(e=>{if(e.getAttribute){const t=e.getAttribute("data-animation");if(t){const n=e.getAttribute("data-leave-class")||`${t}-leave`,r=e.getAttribute("data-leave-active-class")||`${t}-leave-active`,o=e.getAttribute("data-leave-to-class")||`${t}-leave-to`,i=f(e),a=d(e),u=t=>{i(`${r} ${o}`),e.removeEventListener(m,u),e.removeEventListener(v,u),e.parentNode&&e.parentNode.removeChild(e)};return e.addEventListener(m,u),e.addEventListener(v,u),a(`${n} ${r}`),l(()=>{i(n),a(o)}),!1}}})(e)});return e}))());const T=N.pandora}])});