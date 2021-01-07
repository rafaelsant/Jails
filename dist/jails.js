!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("jails",[],t):"object"==typeof exports?exports.jails=t():e.jails=t()}(self,(function(){return(()=>{var e={857:function(e){e.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})}));var o=n(3);Object.defineProperty(t,"pandora",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(o).default}})},function(e,t,n){(function(e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(t){return function(n){return e&&"production"!==e.env.NODE_ENV&&(console.groupCollapsed(t+" / INITIAL STATE"),console.log("+ state",n.getState()),console.groupEnd(),n.subscribe((function(e,n){var r=n.action,o=n.payload,i=JSON.parse(JSON.stringify(e));console.groupCollapsed(t+" / ACTION => "+(r||"SET")),console.log("+ payload",o),console.log("+ state",i),console.groupEnd()}))),n}}}).call(t,n(2))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(u===setTimeout)return setTimeout(e,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(e,0);try{return u(e,0)}catch(t){try{return u.call(null,e,0)}catch(t){return u.call(this,e,0)}}}function i(){m&&f&&(m=!1,f.length?p=f.concat(p):v=-1,p.length&&a())}function a(){if(!m){var e=o(i);m=!0;for(var t=p.length;t;){for(f=p,p=[];++v<t;)f&&f[v].run();v=-1,t=p.length}f=null,m=!1,function(e){if(c===clearTimeout)return clearTimeout(e);if((c===r||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(e);try{c(e)}catch(t){try{return c.call(null,e)}catch(t){return c.call(this,e)}}}(e)}}function s(e,t){this.fun=e,this.array=t}function l(){}var u,c,d=e.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(e){u=n}try{c="function"==typeof clearTimeout?clearTimeout:r}catch(e){c=r}}();var f,p=[],m=!1,v=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];p.push(new s(e,t)),1!==p.length||m||o(a)},s.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.model,n=void 0===t?{}:t,r=e.actions,o=void 0===r?{}:r,i=e.middlewares,a=void 0===i?[]:i,s=e.autostart,l=void 0===s||s,u=e.callback,c=[],d=[],f=JSON.parse(JSON.stringify(n)),p="undefined"!=typeof window&&window.document&&window.document.createElement?requestAnimationFrame||setTimeout:function(e){return e()},m=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).autostart,n=void 0!==t&&t;e&&(e.call?(e.ref=e,d.push(e),n&&e(Object.assign({},f),{action:null,payload:null,haschanged:!0})):Object.keys(e).forEach((function(t){var r=e[t],o=function(t,n){n.action in e&&e[n.action](t,n)};o.ref=r,d.push(o),n&&o(Object.assign({},f),{action:t,payload:null,haschanged:!0})})))},v=function(e){d=d.filter((function(t){return t.ref!=e}))},_=function(e,t,n){var r=!1;if(e in o){var i=Object.assign({},f),a=o[e](i,t,h);a&&(f=Object.assign(f,a),r=!0)}if(c.shift(),!c.length){var s={action:e,payload:t,haschanged:r};d.forEach((function(e){return e(f,s)})),n(f,s)}},h={set:function(e){e(f),d.forEach((function(e){return e(f,{haschanged:!0})}))},when:function(e){return new Promise((function(t){m(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e,(function e(n,r){var o=r.payload;t(Object.assign({},n,o)),v(e)})))}))},getState:function(){return Object.assign({},f)},dispatch:function(e,t){return new Promise((function(n){c.push({action:e,payload:t}),1==c.length&&p((function(){for(;c.length;)_(c[0].action,c[0].payload,n)}))}))},subscribe:m,unsubscribe:v,getActions:function(){return o},setActions:function(e){o=e}};return u&&(m((function(e,t){return t.haschanged?u(e,t):null})),l&&u(f)),a.forEach((function(e){return e(h)})),h}}])},17:function(e){var t;t=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),a=n(2);function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var l="undefined"!=typeof document?document:{},u=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"soda-";s(this,e),this._prefix=t}return o(e,[{key:"setDocument",value:function(e){l=e}},{key:"run",value:function(e,t){var n=this,r=l.createElement("div");l.documentMode<9&&(r.style.display="none",l.body.appendChild(r)),r.innerHTML=e,(0,a.nodes2Arr)(r.childNodes).map((function(e){n.compileNode(e,t)}));var o=r.innerHTML;return l.documentMode<9&&l.body.removeChild(r),o}},{key:"prefix",value:function(e){this._prefix=e}},{key:"_getPrefixReg",value:function(){return new RegExp("^"+this._prefix)}},{key:"_getPrefixedDirectiveMap",value:function(){var t=this,n={};return e.sodaDirectives.map((function(e){var r=t._prefix+e.name;n[r]=e})),n}},{key:"_removeSodaMark",value:function(e,t){e.removeAttribute(t)}},{key:"compileNode",value:function(t,n){var o=this,s=this._getPrefixReg(),u=e.sodaDirectives,c=this._getPrefixedDirectiveMap();!function e(t,n){t.nodeType===(t.TEXT_NODE||3)&&(t.nodeValue=t.nodeValue.replace(i.VALUE_OUT_REG,(function(e,t){var i=o.parseSodaExpression(t,n);return"object"===(void 0===i?"undefined":r(i))&&(i=JSON.stringify(i,null,2)),i}))),t.attributes&&t.attributes.length&&(u.map((function(e){var r=e.name,i=e.opt,s=o._prefix+r;if((0,a.exist)(t.getAttribute(s))){var u=t.getAttribute(s);i.link.bind(o)({expression:u,scope:n,el:t,parseSodaExpression:o.parseSodaExpression.bind(o),getValue:o.getValue.bind(o),compileNode:o.compileNode.bind(o),document:l}),o._removeSodaMark(t,s)}})),(0,a.nodes2Arr)(t.attributes).filter((function(e){return!c[e.name]})).map((function(e){if(s.test(e.name)){var r=e.name.replace(s,"");if(r&&(0,a.exist)(e.value)){var i=o.parseComplexExpression(e.value,n);!1!==i&&(0,a.exist)(i)&&t.setAttribute(r,i),o._removeSodaMark(t,e.name)}}else(0,a.exist)(e.value)&&(e.value=o.parseComplexExpression(e.value,n))}))),(0,a.nodes2Arr)(t.childNodes).map((function(t){e(t,n)}))}(t,n)}},{key:"getEvalFunc",value:function(t){return new Function("getValue","sodaFilterMap","return function sodaExp(scope){ return "+t+"}")(this.getValue,e.sodaFilterMap)}},{key:"getValue",value:function(e,t){return i.CONST_REGG.lastIndex=0,t.replace(i.CONST_REGG,(function(t){return void 0===e[t]?t:e[t]})),"true"===t||"false"!==t&&function t(n,r){var o=r.indexOf(".");if(o>-1){var a=r.substr(0,o);return r=r.substr(o+1),void 0!==e[a]&&i.CONST_REG.test(a)&&(a=e[a]),void 0!==n[a]&&null!==n[a]?t(n[a],r):""}return r=r.trim(),void 0!==e[r]&&i.CONST_REG.test(r)&&(r=e[r]),void 0!==n[r]?n[r]:""}(e,t)}},{key:"parseComplexExpression",value:function(e,t){var n=this,r=i.ONLY_VALUE_OUT_REG.exec(e);if(r){var o=r[1];return this.parseSodaExpression(o,t)}return e.replace(i.VALUE_OUT_REG,(function(e,r){return n.parseSodaExpression(r,t)}))}},{key:"parseSodaExpression",value:function(e,t){var n=this;e=(e=e.replace(i.STRING_REG,(function(e,n,r){var o=(0,a.getRandom)();return t[o]=n||r,o}))).replace(i.OR_REG,i.OR_REPLACE).split("|");for(var r=0;r<e.length;r++)e[r]=(e[r].replace(new RegExp(i.OR_REPLACE,"g"),"||")||"").trim();for(var o=e[0]||"",s=e.slice(1);i.ATTR_REG_NG.test(o);)i.ATTR_REG.lastIndex=0,o=o.replace(i.ATTR_REG,(function(e,r){var o=(0,a.getAttrVarKey)(),i=n.parseSodaExpression(r,t);return t[o]=i,"."+o}));return o=o.replace(i.OBJECT_REG,(function(e){return"getValue(scope,'"+e.trim()+"')"})),o=this.parseFilter(s,o),this.getEvalFunc(o)(t)}},{key:"parseFilter",value:function(t,n){var r=e.sodaFilterMap;return function e(){if(o=t.shift()){for(var o,a=(o=o.split(":")).slice(1)||[],s=(o[0]||"").trim(),l=0;l<a.length;l++)i.OBJECT_REG_NG.test(a[l])&&(a[l]="getValue(scope,'"+a[l]+"')");r[s]&&(a.unshift(n),a=a.join(","),n="sodaFilterMap['"+s+"']("+a+")"),e()}}(),n}}],[{key:"filter",value:function(e,t){this.sodaFilterMap[e]=t}},{key:"getFilter",value:function(e){return this.sodaFilterMap[e]}},{key:"directive",value:function(e,t){var n=t.priority,r=void 0===n?0:n,o=void 0;for(o=0;o<this.sodaDirectives.length;o++){var i=this.sodaDirectives[o].opt.priority,a=void 0===i?0:i;if(r<a);else if(r>=a)break}this.sodaDirectives.splice(o,0,{name:e,opt:t})}},{key:"discribe",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{compile:!0};this.template[e]={funcOrStr:t,option:n}}},{key:"getTmpl",value:function(e,t){var n=this.template[e],r=n.funcOrStr,o=n.option,i=void 0===o?{}:o;return{template:"function"==typeof r?r.apply(null,t):r,option:i}}}]),e}();u.sodaDirectives=[],u.sodaFilterMap={},u.template={},t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IDENTOR_REG=/[a-zA-Z_\$]+[\w\$]*/g,t.STRING_REG=/"([^"]*)"|'([^']*)'/g,t.NUMBER_REG=/\d+|\d*\.\d+/g,t.OBJECT_REG=/[a-zA-Z_\$]+[\w\$]*(?:\s*\.\s*(?:[a-zA-Z_\$]+[\w\$]*|\d+))*/g,t.OBJECT_REG_NG=/[a-zA-Z_\$]+[\w\$]*(?:\s*\.\s*(?:[a-zA-Z_\$]+[\w\$]*|\d+))*/,t.ATTR_REG=/\[([^\[\]]*)\]/g,t.ATTR_REG_NG=/\[([^\[\]]*)\]/,t.ATTR_REG_DOT=/\.([a-zA-Z_\$]+[\w\$]*)/g,t.NOT_ATTR_REG=/[^\.|]([a-zA-Z_\$]+[\w\$]*)/g,t.OR_REG=/\|\|/g,t.OR_REPLACE="OR_OPERATOR",t.CONST_PRIFIX="_$C$_",t.CONST_REG=/^_\$C\$_/,t.CONST_REGG=/_\$C\$_[^\.]+/g,t.VALUE_OUT_REG=/\{\{([^\}]*)\}\}/g,t.ONLY_VALUE_OUT_REG=/^\{\{([^\}]*)\}\}$/},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.assign=t.nodes2Arr=t.exist=t.getRandom=t.getAttrVarKey=void 0;var r=n(1),o=(t.getAttrVarKey=function(){return r.CONST_PRIFIX+~~(1e6*Math.random())},t.getRandom=function(){return"$$"+~~(1e6*Math.random())},t.exist=function(e){return null!=e&&""!==e&&void 0!==e},t.nodes2Arr=function(e){for(var t=[],n=0;n<e.length;n++)t.push(e[n]);return t},Object.getOwnPropertySymbols),i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)};t.assign=Object.assign||function(e,t){for(var n,r,l=s(e),u=1;u<arguments.length;u++){for(var c in n=Object(arguments[u]))i.call(n,c)&&(l[c]=n[c]);if(o){r=o(n);for(var d=0;d<r.length;d++)a.call(n,r[d])&&(l[r[d]]=n[r[d]])}}return l}},function(e,t,n){"use strict";var r,o=(r=n(0))&&r.__esModule?r:{default:r},i=n(2);n(4),n(5),n(6),n(7),n(8),n(9),n(10);var a=new o.default,s={prefix:function(e){a.prefix(e)},filter:function(e,t){o.default.filter(e,t)},directive:function(e,t){o.default.directive(e,t)},setDocument:function(e){a.setDocument(e)},discribe:function(e,t,n){o.default.discribe(e,t,n)},Soda:o.default},l=(0,i.assign)((function(e,t){return a.run(e,t)}),s);e.exports=l},function(e,t,n){"use strict";var r;((r=n(0))&&r.__esModule?r:{default:r}).default.directive("repeat",{priority:10,link:function(e){var t,n,r,o=this,i=e.scope,a=e.el,s=e.expression,l=e.getValue,u=(e.parseSodaExpression,e.compileNode),c=s.replace(/\s+by\s+([^\s]+)$/,(function(e,t){return t&&(r=(t||"").trim()),""})),d=/([^\s]+)\s+in\s+([^\s]+)|\(([^,]+)\s*,\s*([^)]+)\)\s+in\s+([^\s]+)/.exec(c);if(d){if(d[1]&&d[2]){if(t=(d[1]||"").trim(),n=(d[2]||"").trim(),!t||!n)return}else d[3]&&d[4]&&d[5]&&(r=(d[3]||"").trim(),t=(d[4]||"").trim(),n=(d[5]||"").trim());r=r||"$index";var f=l(i,n)||[],p=function(e){var n=a.cloneNode(!0),s=Object.create(i);s[r]=e,s[t]=f[e],n.removeAttribute(o._prefix+"repeat"),a.parentNode.insertBefore(n,a),u(n,s)};if("length"in f)for(var m=0;m<f.length;m++)p(m);else for(var m in f)f.hasOwnProperty(m)&&p(m);a.parentNode.removeChild(a),a.childNodes&&a.childNodes.length&&(a.innerHTML="")}}})},function(e,t,n){"use strict";var r;((r=n(0))&&r.__esModule?r:{default:r}).default.directive("if",{priority:9,link:function(e){var t=e.expression,n=e.parseSodaExpression,r=e.scope,o=e.el;n(t,r)||(o.parentNode&&o.parentNode.removeChild(o),o.innerHTML="")}})},function(e,t,n){"use strict";var r,o=(r=n(0))&&r.__esModule?r:{default:r};o.default.directive("class",{link:function(e){var t=e.scope,n=e.el,r=e.expression,o=(0,e.parseSodaExpression)(r,t);o&&function(e,t){e.className?e.className.match(function(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)","g")}(t))||(e.className+=" "+t):e.className=t}(n,o)}})},function(e,t,n){"use strict";var r;((r=n(0))&&r.__esModule?r:{default:r}).default.directive("html",{link:function(e){var t=e.expression,n=e.scope,r=e.el,o=(0,e.parseSodaExpression)(t,n);o&&(r.innerHTML=o)}})},function(e,t,n){"use strict";var r;((r=n(0))&&r.__esModule?r:{default:r}).default.directive("replace",{link:function(e){var t=e.scope,n=e.el,r=e.expression,o=e.parseSodaExpression,i=e.document,a=o(r,t);if(a){var s=i.createElement("div");if(s.innerHTML=a,n.parentNode)for(;s.childNodes[0];)n.parentNode.insertBefore(s.childNodes[0],n)}n.parentNode&&n.parentNode.removeChild(n)}})},function(e,t,n){"use strict";var r;((r=n(0))&&r.__esModule?r:{default:r}).default.directive("style",{link:function(e){var t=e.scope,n=e.el,r=e.expression,o=(0,e.parseSodaExpression)(r,t),i=function(e,t){return/opacity|z-index/.test(e)?parseFloat(t):isNaN(t)?t:t+"px"};if(o){var a=[];for(var s in o)if(o.hasOwnProperty(s)){var l=i(s,o[s]);a.push([s,l].join(":"))}var u=n.style;for(s=0;s<u.length;s++){var c=u[s];o[c]||a.push([c,u[c]].join(":"))}var d=a.join(";");n.setAttribute("style",d)}}})},function(e,t,n){"use strict";var r,o=(r=n(0))&&r.__esModule?r:{default:r};o.default.directive("include",{priority:8,link:function(e){var t=e.scope,n=e.el,r=e.parseSodaExpression,i=e.expression.replace(/\{\{([^\}]*)\}\}/g,(function(e,n){return r(n,t)})),a=(i=i.split(":"))[0],s=i.slice(1),l=o.default.getTmpl(a,s),u=l.template,c=l.option;u&&((void 0===c?{}:c).compile?n.outerHTML=this.run(u,t):n.outerHTML=u)}})}])},e.exports=t()},968:(e,t,n)=>{"use strict";var r;n.r(t),n.d(t,{default:()=>q});var o="undefined"==typeof document?void 0:document,i=!!o&&"content"in o.createElement("template"),a=!!o&&o.createRange&&"createContextualFragment"in o.createRange();function s(e,t){var n,r,o=e.nodeName,i=t.nodeName;return o===i||(n=o.charCodeAt(0),r=i.charCodeAt(0),n<=90&&r>=97?o===i.toUpperCase():r<=90&&n>=97&&i===o.toUpperCase())}function l(e,t,n){e[n]!==t[n]&&(e[n]=t[n],e[n]?e.setAttribute(n,""):e.removeAttribute(n))}var u={OPTION:function(e,t){var n=e.parentNode;if(n){var r=n.nodeName.toUpperCase();"OPTGROUP"===r&&(r=(n=n.parentNode)&&n.nodeName.toUpperCase()),"SELECT"!==r||n.hasAttribute("multiple")||(e.hasAttribute("selected")&&!t.selected&&(e.setAttribute("selected","selected"),e.removeAttribute("selected")),n.selectedIndex=-1)}l(e,t,"selected")},INPUT:function(e,t){l(e,t,"checked"),l(e,t,"disabled"),e.value!==t.value&&(e.value=t.value),t.hasAttribute("value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var n=t.value;e.value!==n&&(e.value=n);var r=e.firstChild;if(r){var o=r.nodeValue;if(o==n||!n&&o==e.placeholder)return;r.nodeValue=n}},SELECT:function(e,t){if(!t.hasAttribute("multiple")){for(var n,r,o=-1,i=0,a=e.firstChild;a;)if("OPTGROUP"===(r=a.nodeName&&a.nodeName.toUpperCase()))a=(n=a).firstChild;else{if("OPTION"===r){if(a.hasAttribute("selected")){o=i;break}i++}!(a=a.nextSibling)&&n&&(a=n.nextSibling,n=null)}e.selectedIndex=o}}};function c(){}function d(e){if(e)return e.getAttribute&&e.getAttribute("id")||e.id}const f=function(e,t,n){if(n||(n={}),"string"==typeof t)if("#document"===e.nodeName||"HTML"===e.nodeName||"BODY"===e.nodeName){var l=t;(t=o.createElement("html")).innerHTML=l}else f=(f=t).trim(),t=i?function(e){var t=o.createElement("template");return t.innerHTML=e,t.content.childNodes[0]}(f):a?function(e){return r||(r=o.createRange()).selectNode(o.body),r.createContextualFragment(e).childNodes[0]}(f):function(e){var t=o.createElement("body");return t.innerHTML=e,t.childNodes[0]}(f);var f,p=n.getNodeKey||d,m=n.onBeforeNodeAdded||c,v=n.onNodeAdded||c,_=n.onBeforeElUpdated||c,h=n.onElUpdated||c,g=n.onBeforeNodeDiscarded||c,y=n.onNodeDiscarded||c,b=n.onBeforeElChildrenUpdated||c,E=!0===n.childrenOnly,x=Object.create(null),T=[];function N(e){T.push(e)}function A(e,t){if(1===e.nodeType)for(var n=e.firstChild;n;){var r=void 0;t&&(r=p(n))?N(r):(y(n),n.firstChild&&A(n,t)),n=n.nextSibling}}function O(e,t,n){!1!==g(e)&&(t&&t.removeChild(e),y(e),A(e,n))}function S(e){v(e);for(var t=e.firstChild;t;){var n=t.nextSibling,r=p(t);if(r){var o=x[r];o&&s(t,o)?(t.parentNode.replaceChild(o,t),w(o,t)):S(t)}else S(t);t=n}}function w(e,t,n){var r=p(t);if(r&&delete x[r],!n){if(!1===_(e,t))return;if(function(e,t){var n,r,o,i,a=t.attributes;if(11!==t.nodeType&&11!==e.nodeType){for(var s=a.length-1;s>=0;s--)r=(n=a[s]).name,o=n.namespaceURI,i=n.value,o?(r=n.localName||r,e.getAttributeNS(o,r)!==i&&("xmlns"===n.prefix&&(r=n.name),e.setAttributeNS(o,r,i))):e.getAttribute(r)!==i&&e.setAttribute(r,i);for(var l=e.attributes,u=l.length-1;u>=0;u--)r=(n=l[u]).name,(o=n.namespaceURI)?(r=n.localName||r,t.hasAttributeNS(o,r)||e.removeAttributeNS(o,r)):t.hasAttribute(r)||e.removeAttribute(r)}}(e,t),h(e),!1===b(e,t))return}"TEXTAREA"!==e.nodeName?function(e,t){var n,r,i,a,l,c=t.firstChild,d=e.firstChild;e:for(;c;){for(a=c.nextSibling,n=p(c);d;){if(i=d.nextSibling,c.isSameNode&&c.isSameNode(d)){c=a,d=i;continue e}r=p(d);var f=d.nodeType,v=void 0;if(f===c.nodeType&&(1===f?(n?n!==r&&((l=x[n])?i===l?v=!1:(e.insertBefore(l,d),r?N(r):O(d,e,!0),d=l):v=!1):r&&(v=!1),(v=!1!==v&&s(d,c))&&w(d,c)):3!==f&&8!=f||(v=!0,d.nodeValue!==c.nodeValue&&(d.nodeValue=c.nodeValue))),v){c=a,d=i;continue e}r?N(r):O(d,e,!0),d=i}if(n&&(l=x[n])&&s(l,c))e.appendChild(l),w(l,c);else{var _=m(c);!1!==_&&(_&&(c=_),c.actualize&&(c=c.actualize(e.ownerDocument||o)),e.appendChild(c),S(c))}c=a,d=i}!function(e,t,n){for(;t;){var r=t.nextSibling;(n=p(t))?N(n):O(t,e,!0),t=r}}(e,d,r);var h=u[e.nodeName];h&&h(e,t)}(e,t):u.TEXTAREA(e,t)}!function e(t){if(1===t.nodeType||11===t.nodeType)for(var n=t.firstChild;n;){var r=p(n);r&&(x[r]=n),e(n),n=n.nextSibling}}(e);var R,C,M=e,j=M.nodeType,L=t.nodeType;if(!E)if(1===j)1===L?s(e,t)||(y(e),M=function(e,t){for(var n=e.firstChild;n;){var r=n.nextSibling;t.appendChild(n),n=r}return t}(e,(R=t.nodeName,(C=t.namespaceURI)&&"http://www.w3.org/1999/xhtml"!==C?o.createElementNS(C,R):o.createElement(R)))):M=t;else if(3===j||8===j){if(L===j)return M.nodeValue!==t.nodeValue&&(M.nodeValue=t.nodeValue),M;M=t}if(M===t)y(e);else{if(t.isSameNode&&t.isSameNode(M))return;if(w(M,t,E),T)for(var $=0,k=T.length;$<k;$++){var P=x[T[$]];P&&O(P,P.parentNode,!1)}}return!E&&M!==e&&e.parentNode&&(M.actualize&&(M=M.actualize(e.ownerDocument||o)),e.parentNode.replaceChild(M,e)),M};var p=n(17),m=n.n(p);const v=e=>{(requestAnimationFrame||setTimeout)(e,1e3/60)},_=e=>{v((()=>v(e)))},h=e=>t=>{t.split(/\s/).map((t=>e.classList.add(t)))},g=e=>t=>{t.split(/\s/).map((t=>e.classList.remove(t)))},y=e=>{for(let t in e)if(t in document.body.style)return e[t]},b=y({animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"}),E=y({transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"}),x=()=>"xxxxxxxx".replace(/[xy]/g,(e=>{const t=8*Math.random()|0;return("x"==e?t:3&t|8).toString(8)})),T=(e,t)=>{const n=x();return t.setAttribute("data-reactor-id",n),e[n]=t.outerHTML.replace(/<(x-)?template*.>|<\/(x-)?template>/g,""),e},N=(e,t)=>{const n=`${t}-enter`,r=`${t}-enter-active`;h(e)(`${n} ${r}`)},A=(e,t)=>{const n=`${t}-enter`,r=`${t}-enter-active`,o=`${t}-enter-to`,i=g(e),a=h(e),s=()=>{i(`${n} ${r} ${o}`),e.removeEventListener(E,s),e.removeEventListener(b,s)};e.addEventListener(E,s),e.addEventListener(b,s),_((()=>{a(o),i(n)}))},O=(e,t)=>{const n=`${t}-leave`,r=`${t}-leave-active`,o=`${t}-leave-to`,i=g(e),a=h(e);let s=window.getComputedStyle(e).transitionProperty.split(",").length;const l=t=>{"transitionend"==t.type?t.target==e&&(s-=1,s<=1&&(i(`${r} ${o}`),e.removeEventListener(E,l),e.parentNode&&e.parentNode.removeChild(e))):(i(`${r} ${o}`),e.removeEventListener(b,l),e.parentNode&&e.parentNode.removeChild(e))};e.addEventListener(E,l),e.addEventListener(b,l),a(`${n} ${r}`),_((()=>{i(n),a(o)}))},S=(e,t)=>{const n=1==e.nodeType?Array.prototype.slice.call(e.querySelectorAll("[data-animation]")):[],r=e.dataset&&e.dataset.animation?[e].concat(n):n;return r.forEach((e=>t(e,e.dataset.animation))),r.length>0},w=({sodajs:e,models:t})=>{e.directive("repeat",{priority:10,link({scope:e,el:n,expression:r,getValue:o,compileNode:i}){let a,s,l;const u=r.replace(/\s+by\s+([^\s]+)$/,((e,t)=>(t&&(l=(t||"").trim()),""))),c=/([^\s]+)\s+in\s+([^\s]+)|\(([^,]+)\s*,\s*([^)]+)\)\s+in\s+([^\s]+)/.exec(u);if(!c)return;if(c[1]&&c[2]){if(a=(c[1]||"").trim(),s=(c[2]||"").trim(),!a||!s)return}else c[3]&&c[4]&&c[5]&&(l=(c[3]||"").trim(),a=(c[4]||"").trim(),s=(c[5]||"").trim());l=l||"$index";const d=o(e,s)||[],f=r=>{const o=n.cloneNode(!0),s=Object.create(e);s[l]=r,s[a]=d[r],function(e){const t=e.getAttribute("data-component")?[e]:[],n=Array.prototype.slice.call(e.querySelectorAll("[data-component]"));return t.concat(n)}(o).forEach((e=>{const n=x();e.setAttribute("data-model-id",n),t[n]=s})),o.removeAttribute(`${this._prefix}repeat`),n.parentNode.insertBefore(o,n),i(o,s)};if("length"in d)for(var p=0;p<d.length;p++)f(p);else for(var p in d)d.hasOwnProperty(p)&&f(p);n.parentNode.removeChild(n),n.childNodes&&n.childNodes.length&&(n.innerHTML="")}})},R="[data-component]";const C=e=>{const t=new MutationObserver((t=>t.forEach(M(e))));return t.observe(document.body,{childList:!0,subtree:!0}),t},M=e=>t=>{"childList"===t.type&&(t.addedNodes.length?e.onAdd(j()):t.removedNodes.length&&e.onRemove(t.removedNodes))},j=()=>Array.from(document.querySelectorAll(R)).reverse(),L=(e,t,n)=>({getNodeKey:e=>1===e.nodeType&&(e.dataset.key||e.dataset.reactorId),onBeforeElUpdated:r=>$(e,t,n,r),onBeforeElChildrenUpdated:(r,o)=>$(e,t,n,r),onNodeAdded(e){S(e,A)},onBeforeNodeAdded(e){S(e,N)},onBeforeNodeDiscarded:e=>!S(e,O)}),$=(e,t,n,r)=>{if(1===r.nodeType){if("static"in r.dataset)return!1;if(r!==e&&r.dataset.component&&r.__update__){const e=Object.assign(n,t);return r.__update__(e),Array.from(r.querySelectorAll(R)).forEach((t=>{t.dataset.component&&t.__update__&&t.__update__(e)})),!1}}};var k=n(857);const P="CustomEvent"in window&&"function"==typeof window.CustomEvent?(e,t)=>new CustomEvent(e,t):(e,t)=>{const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!0,!0,t),n},G=(e,t)=>function(n){const r=this,o=n.detail||{};e.__events[t].forEach((e=>{e.handler.apply(r,[n].concat(o.args))}))},V=(e,t)=>{e.__events[t]&&e.__events[t].listener&&(e.removeEventListener(t,e.__events[t].listener,"focus"==t||"blur"==t||"mouseenter"==t||"mouseleave"==t),delete e.__events[t])},U=(e,t,n)=>function(r){const o=this,i=r.detail||{};let a=r.target;for(;a&&(a.matches(t)&&(r.delegateTarget=a,n.apply(o,[r].concat(i.args))),a!==e);)a=a.parentNode},I=(e,t,n)=>{e.dispatchEvent(P(t,{bubbles:!0,detail:n}))},D={},F={},B=(e,t)=>{F[e]=Object.assign({},F[e],t),D[e]&&D[e].forEach((e=>e(t)))},H=e=>{D[e.name]=(D[e.name]||[]).filter((t=>t!=e.method)),D[e.name].length||(delete D[e.name],delete F[e.name])};const z=({element:e,name:t,module:n,view:r})=>{const o=n.view?n.view:e=>e,i=r.models[e.dataset.modelId],a=Object.assign({},n.model,i),s=t.charAt(0).toUpperCase()+t.substring(1),l="development"===r.mode?[(0,k.log)(`Component ${s}`)]:[],u=n.actions||{},c=(0,k.pandora)({model:a,actions:u,middlewares:l,autostart:!1,callback(t){r.update(e,o(t))}});return n.model&&Object.keys(n.model).length&&r.update(e,o(a)),c},J={},q={register(e,t,n){J[e]={name:e,module:t,dependencies:n}},start(){const e=Z();e.mode="production",e.observe()},devStart(){console.time("jails");const e=Z();e.mode="development",e.observe(),console.timeEnd("jails")}},Z=()=>{const e=function(e){const t=document.body,{templates:n,html:r}=((e,t="div")=>{const n=document.createElement(t);return n.innerHTML=e.replace(/<template*.>/g,"<x-template>").replace(/<\/template>/g,"</x-template>"),{templates:Array.from(n.querySelectorAll("[data-component]:not([data-reactor-id])")).reverse().reduce(T,{}),html:n.innerHTML.replace(/<x-template*.>/g,"<template>").replace(/<\/x-template>/g,"</template>")}})(t.innerHTML,"html"),o={},i={};return m().prefix("v-"),w({sodajs:m(),models:o}),{mode:"production",templates:n,models:o,SST:i,update(e,t){if(e){const o=e.dataset.reactorId,a=n[o],s=Object.assign({},e.__model__,(r=t,JSON.parse(JSON.stringify(r)))),l=m()(a,s);f(e,l,L(e,t,i)),e.__model__&&Object.assign(e.__model__,s)}var r},observe(){const n=C(e);return t.innerHTML=m()(r,{}),n},setNewElement(e){T(n,e)}}}({onAdd(t){t.filter((e=>!Boolean(e.__instances__))).forEach((t=>(({element:e,view:t,modules:n})=>{e.__instances__={},e.__model__={};const r=e.dataset.component.split(/\s/);e.dataset.reactorId||t.setNewElement(e),r.forEach((r=>{if(r in n&&!e.__instances__[r]){const o=n[r];_((n=>{const i=function({name:e,element:t,view:n,component:r}){const o=r.module,i=z({name:e,element:t,module:o,view:n}),a=[],s=[];let l,u=new Promise((e=>l=e)),c=()=>null;const d={name:e,injection:r.dependencies,elm:t,msg:i,publish:B,unsubscribe:H,__initialize(e){l(e),e.destroy((e=>{a.forEach((e=>H(e))),s.forEach((e=>t.removeEventListener(":destroy",e)))}))},main(e){u.then((()=>e().forEach((e=>e(d)))))},render(e){n.update(t,e)},expose(n){t.__instances__[e].methods=n},update(e){if(e.apply){const n=((e,t)=>{let n=e.parentNode;for(;n&&n!==document;n=n.parentNode)if(n.matches("[data-component]"))return n;return null})(t);c=e,c(n.__model__)}else c(e)},destroy(e){s.push(e),t.addEventListener(":destroy",e)},on(e,n,r){((e,t,n,r)=>{if(e.__events=e.__events||{},e.__events[t]=e.__events[t]||[],!e.__events[t].length){const n=G(e,t);e.addEventListener(t,n,"focus"==t||"blur"==t||"mouseenter"==t||"mouseleave"==t),e.__events[t].listener=n}n.call?e.__events[t].push({handler:n,callback:n}):e.__events[t].push({handler:U(e,n,r),callback:r})})(t,e,n,r)},off(e,n){((e,t,n)=>{if(n&&e.__events[t]&&e.__events[t].length){var r=e.__events[t];e.__events[t]=e.__events[t].filter((function(e){return e.callback!=n})),e.__events[t].listener=r.listener,e.__events[t].length||V(e,t)}else V(e,t)})(t,e,n)},trigger(e,n,r){n.constructor===String?I(t.querySelector(n),e,{args:r}):I(t,e,{args:n})},emit(e,n){const r=Array.prototype.slice.call(arguments);I(t,r.shift(),{args:r})},get:(e,n)=>function(){const r=Array.prototype.slice.call(arguments),o=r.shift(),i=`[data-component*=${e}]`;if(n=n?i+n:i,Array.from(t.querySelectorAll(n)).forEach((t=>{const n=t.__instances__[e];n&&o in n.methods&&n.methods[o].apply(null,r)})),t.matches(n)){const n=t.__instances__[e];n&&o in n.methods&&n.methods[o].apply(null,r)}},subscribe(e,t){a.push({name:e,method:t}),((e,t)=>{D[e]=D[e]||[],D[e].push(t),e in F&&t(F[e])})(e,t)}};return d}({name:r,element:e,view:t,component:o});e.__instances__[r]={base:i,methods:{}},e.__update__=t=>{for(let n in e.__instances__)e.__instances__[n].base.update(t)},o.module.default(i),i.__initialize(i),delete i.__initialize}))}}))})({element:t,view:e,modules:J})))},onRemove(e){e.forEach((e=>{1===e.nodeType&&Array.from(e.querySelectorAll("[data-component]")).concat(e.dataset.component?e:[]).filter((e=>!document.body.contains(e))).forEach((e=>(({element:e})=>{I(e,":destroy");for(let t in e.__events)e.removeEventListener(t,e.__events[t].listener);delete e.__events,delete e.__instances__,delete e.__model__})({element:e})))}))}});return e}}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}return n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(968)})()}));