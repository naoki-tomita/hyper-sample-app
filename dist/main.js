/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@hyperapp/router/src/Link.js":
/*!***************************************************!*\
  !*** ./node_modules/@hyperapp/router/src/Link.js ***!
  \***************************************************/
/*! exports provided: Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Link\", function() { return Link; });\n/* harmony import */ var hyperapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyperapp */ \"./node_modules/hyperapp/src/index.js\");\n\n\nfunction getOrigin(loc) {\n  return loc.protocol + \"//\" + loc.hostname + (loc.port ? \":\" + loc.port : \"\")\n}\n\nfunction isExternal(anchorElement) {\n  // Location.origin and HTMLAnchorElement.origin are not\n  // supported by IE and Safari.\n  return getOrigin(location) !== getOrigin(anchorElement)\n}\n\nfunction Link(props, children) {\n  return function(state, actions) {\n    var to = props.to\n    var location = state.location\n    var onclick = props.onclick\n    delete props.to\n    delete props.location\n\n    props.href = to\n    props.onclick = function(e) {\n      if (onclick) {\n        onclick(e)\n      }\n      if (\n        e.defaultPrevented ||\n        e.button !== 0 ||\n        e.altKey ||\n        e.metaKey ||\n        e.ctrlKey ||\n        e.shiftKey ||\n        props.target === \"_blank\" ||\n        isExternal(e.currentTarget)\n      ) {\n      } else {\n        e.preventDefault()\n\n        if (to !== location.pathname) {\n          history.pushState(location.pathname, \"\", to)\n        }\n      }\n    }\n\n    return Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"a\", props, children)\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/@hyperapp/router/src/Link.js?");

/***/ }),

/***/ "./node_modules/@hyperapp/router/src/Redirect.js":
/*!*******************************************************!*\
  !*** ./node_modules/@hyperapp/router/src/Redirect.js ***!
  \*******************************************************/
/*! exports provided: Redirect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Redirect\", function() { return Redirect; });\nfunction Redirect(props) {\n  return function(state, actions) {\n    var location = state.location\n    history.replaceState(props.from || location.pathname, \"\", props.to)\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/@hyperapp/router/src/Redirect.js?");

/***/ }),

/***/ "./node_modules/@hyperapp/router/src/Route.js":
/*!****************************************************!*\
  !*** ./node_modules/@hyperapp/router/src/Route.js ***!
  \****************************************************/
/*! exports provided: Route */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Route\", function() { return Route; });\n/* harmony import */ var _parseRoute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseRoute */ \"./node_modules/@hyperapp/router/src/parseRoute.js\");\n\n\nfunction Route(props) {\n  return function(state, actions) {\n    var location = state.location\n    var match = Object(_parseRoute__WEBPACK_IMPORTED_MODULE_0__[\"parseRoute\"])(props.path, location.pathname, {\n      exact: !props.parent\n    })\n\n    return (\n      match &&\n      props.render({\n        match: match,\n        location: location\n      })\n    )\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/@hyperapp/router/src/Route.js?");

/***/ }),

/***/ "./node_modules/@hyperapp/router/src/Switch.js":
/*!*****************************************************!*\
  !*** ./node_modules/@hyperapp/router/src/Switch.js ***!
  \*****************************************************/
/*! exports provided: Switch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Switch\", function() { return Switch; });\nfunction Switch(props, children) {\n  return function(state, actions) {\n    var child,\n      i = 0\n    while (\n      !(child = children[i] && children[i](state, actions)) &&\n      i < children.length\n    )\n      i++\n    return child\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/@hyperapp/router/src/Switch.js?");

/***/ }),

/***/ "./node_modules/@hyperapp/router/src/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@hyperapp/router/src/index.js ***!
  \****************************************************/
/*! exports provided: Link, Route, Switch, Redirect, location */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Link */ \"./node_modules/@hyperapp/router/src/Link.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Link\", function() { return _Link__WEBPACK_IMPORTED_MODULE_0__[\"Link\"]; });\n\n/* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Route */ \"./node_modules/@hyperapp/router/src/Route.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Route\", function() { return _Route__WEBPACK_IMPORTED_MODULE_1__[\"Route\"]; });\n\n/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Switch */ \"./node_modules/@hyperapp/router/src/Switch.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Switch\", function() { return _Switch__WEBPACK_IMPORTED_MODULE_2__[\"Switch\"]; });\n\n/* harmony import */ var _Redirect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Redirect */ \"./node_modules/@hyperapp/router/src/Redirect.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Redirect\", function() { return _Redirect__WEBPACK_IMPORTED_MODULE_3__[\"Redirect\"]; });\n\n/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./location */ \"./node_modules/@hyperapp/router/src/location.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"location\", function() { return _location__WEBPACK_IMPORTED_MODULE_4__[\"location\"]; });\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./node_modules/@hyperapp/router/src/index.js?");

/***/ }),

/***/ "./node_modules/@hyperapp/router/src/location.js":
/*!*******************************************************!*\
  !*** ./node_modules/@hyperapp/router/src/location.js ***!
  \*******************************************************/
/*! exports provided: location */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"location\", function() { return location; });\nfunction wrapHistory(keys) {\n  return keys.reduce(function(next, key) {\n    var fn = history[key]\n\n    history[key] = function(data, title, url) {\n      fn.call(this, data, title, url)\n      dispatchEvent(new CustomEvent(\"pushstate\", { detail: data }))\n    }\n\n    return function() {\n      history[key] = fn\n      next && next()\n    }\n  }, null)\n}\n\nvar location = {\n  state: {\n    pathname: window.location.pathname,\n    previous: window.location.pathname\n  },\n  actions: {\n    go: function(pathname) {\n      history.pushState(null, \"\", pathname)\n    },\n    set: function(data) {\n      return data\n    }\n  },\n  subscribe: function(actions) {\n    function handleLocationChange(e) {\n      actions.set({\n        pathname: window.location.pathname,\n        previous: e.detail\n          ? (window.location.previous = e.detail)\n          : window.location.previous\n      })\n    }\n\n    var unwrap = wrapHistory([\"pushState\", \"replaceState\"])\n\n    addEventListener(\"pushstate\", handleLocationChange)\n    addEventListener(\"popstate\", handleLocationChange)\n\n    return function() {\n      removeEventListener(\"pushstate\", handleLocationChange)\n      removeEventListener(\"popstate\", handleLocationChange)\n      unwrap()\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/@hyperapp/router/src/location.js?");

/***/ }),

/***/ "./node_modules/@hyperapp/router/src/parseRoute.js":
/*!*********************************************************!*\
  !*** ./node_modules/@hyperapp/router/src/parseRoute.js ***!
  \*********************************************************/
/*! exports provided: parseRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseRoute\", function() { return parseRoute; });\nfunction createMatch(isExact, path, url, params) {\n  return {\n    isExact: isExact,\n    path: path,\n    url: url,\n    params: params\n  }\n}\n\nfunction trimTrailingSlash(url) {\n  for (var len = url.length; \"/\" === url[--len]; );\n  return url.slice(0, len + 1)\n}\n\nfunction decodeParam(val) {\n  try {\n    return decodeURIComponent(val)\n  } catch (e) {\n    return val\n  }\n}\n\nfunction parseRoute(path, url, options) {\n  if (path === url || !path) {\n    return createMatch(path === url, path, url)\n  }\n\n  var exact = options && options.exact\n  var paths = trimTrailingSlash(path).split(\"/\")\n  var urls = trimTrailingSlash(url).split(\"/\")\n\n  if (paths.length > urls.length || (exact && paths.length < urls.length)) {\n    return\n  }\n\n  for (var i = 0, params = {}, len = paths.length, url = \"\"; i < len; i++) {\n    if (\":\" === paths[i][0]) {\n      params[paths[i].slice(1)] = urls[i] = decodeParam(urls[i])\n    } else if (paths[i] !== urls[i]) {\n      return\n    }\n    url += urls[i] + \"/\"\n  }\n\n  return createMatch(false, path, url.slice(0, -1), params)\n}\n\n\n//# sourceURL=webpack:///./node_modules/@hyperapp/router/src/parseRoute.js?");

/***/ }),

/***/ "./node_modules/hyperapp/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/hyperapp/src/index.js ***!
  \********************************************/
/*! exports provided: h, app */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return h; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"app\", function() { return app; });\nfunction h(name, attributes) {\n  var rest = []\n  var children = []\n  var length = arguments.length\n\n  while (length-- > 2) rest.push(arguments[length])\n\n  while (rest.length) {\n    var node = rest.pop()\n    if (node && node.pop) {\n      for (length = node.length; length--; ) {\n        rest.push(node[length])\n      }\n    } else if (node != null && node !== true && node !== false) {\n      children.push(node)\n    }\n  }\n\n  return typeof name === \"function\"\n    ? name(attributes || {}, children)\n    : {\n        nodeName: name,\n        attributes: attributes || {},\n        children: children,\n        key: attributes && attributes.key\n      }\n}\n\nfunction app(state, actions, view, container) {\n  var map = [].map\n  var rootElement = (container && container.children[0]) || null\n  var oldNode = rootElement && recycleElement(rootElement)\n  var lifecycle = []\n  var skipRender\n  var isRecycling = true\n  var globalState = clone(state)\n  var wiredActions = wireStateToActions([], globalState, clone(actions))\n\n  scheduleRender()\n\n  return wiredActions\n\n  function recycleElement(element) {\n    return {\n      nodeName: element.nodeName.toLowerCase(),\n      attributes: {},\n      children: map.call(element.childNodes, function(element) {\n        return element.nodeType === 3 // Node.TEXT_NODE\n          ? element.nodeValue\n          : recycleElement(element)\n      })\n    }\n  }\n\n  function resolveNode(node) {\n    return typeof node === \"function\"\n      ? resolveNode(node(globalState, wiredActions))\n      : node != null\n        ? node\n        : \"\"\n  }\n\n  function render() {\n    skipRender = !skipRender\n\n    var node = resolveNode(view)\n\n    if (container && !skipRender) {\n      rootElement = patch(container, rootElement, oldNode, (oldNode = node))\n    }\n\n    isRecycling = false\n\n    while (lifecycle.length) lifecycle.pop()()\n  }\n\n  function scheduleRender() {\n    if (!skipRender) {\n      skipRender = true\n      setTimeout(render)\n    }\n  }\n\n  function clone(target, source) {\n    var out = {}\n\n    for (var i in target) out[i] = target[i]\n    for (var i in source) out[i] = source[i]\n\n    return out\n  }\n\n  function setPartialState(path, value, source) {\n    var target = {}\n    if (path.length) {\n      target[path[0]] =\n        path.length > 1\n          ? setPartialState(path.slice(1), value, source[path[0]])\n          : value\n      return clone(source, target)\n    }\n    return value\n  }\n\n  function getPartialState(path, source) {\n    var i = 0\n    while (i < path.length) {\n      source = source[path[i++]]\n    }\n    return source\n  }\n\n  function wireStateToActions(path, state, actions) {\n    for (var key in actions) {\n      typeof actions[key] === \"function\"\n        ? (function(key, action) {\n            actions[key] = function(data) {\n              var result = action(data)\n\n              if (typeof result === \"function\") {\n                result = result(getPartialState(path, globalState), actions)\n              }\n\n              if (\n                result &&\n                result !== (state = getPartialState(path, globalState)) &&\n                !result.then // !isPromise\n              ) {\n                scheduleRender(\n                  (globalState = setPartialState(\n                    path,\n                    clone(state, result),\n                    globalState\n                  ))\n                )\n              }\n\n              return result\n            }\n          })(key, actions[key])\n        : wireStateToActions(\n            path.concat(key),\n            (state[key] = clone(state[key])),\n            (actions[key] = clone(actions[key]))\n          )\n    }\n\n    return actions\n  }\n\n  function getKey(node) {\n    return node ? node.key : null\n  }\n\n  function eventListener(event) {\n    return event.currentTarget.events[event.type](event)\n  }\n\n  function updateAttribute(element, name, value, oldValue, isSvg) {\n    if (name === \"key\") {\n    } else if (name === \"style\") {\n      if (typeof value === \"string\") {\n        element.style.cssText = value\n      } else {\n        if (typeof oldValue === \"string\") oldValue = element.style.cssText = \"\"\n        for (var i in clone(oldValue, value)) {\n          var style = value == null || value[i] == null ? \"\" : value[i]\n          if (i[0] === \"-\") {\n            element.style.setProperty(i, style)\n          } else {\n            element.style[i] = style\n          }\n        }\n      }\n    } else {\n      if (name[0] === \"o\" && name[1] === \"n\") {\n        name = name.slice(2)\n\n        if (element.events) {\n          if (!oldValue) oldValue = element.events[name]\n        } else {\n          element.events = {}\n        }\n\n        element.events[name] = value\n\n        if (value) {\n          if (!oldValue) {\n            element.addEventListener(name, eventListener)\n          }\n        } else {\n          element.removeEventListener(name, eventListener)\n        }\n      } else if (\n        name in element &&\n        name !== \"list\" &&\n        name !== \"type\" &&\n        name !== \"draggable\" &&\n        name !== \"spellcheck\" &&\n        name !== \"translate\" &&\n        !isSvg\n      ) {\n        element[name] = value == null ? \"\" : value\n      } else if (value != null && value !== false) {\n        element.setAttribute(name, value)\n      }\n\n      if (value == null || value === false) {\n        element.removeAttribute(name)\n      }\n    }\n  }\n\n  function createElement(node, isSvg) {\n    var element =\n      typeof node === \"string\" || typeof node === \"number\"\n        ? document.createTextNode(node)\n        : (isSvg = isSvg || node.nodeName === \"svg\")\n          ? document.createElementNS(\n              \"http://www.w3.org/2000/svg\",\n              node.nodeName\n            )\n          : document.createElement(node.nodeName)\n\n    var attributes = node.attributes\n    if (attributes) {\n      if (attributes.oncreate) {\n        lifecycle.push(function() {\n          attributes.oncreate(element)\n        })\n      }\n\n      for (var i = 0; i < node.children.length; i++) {\n        element.appendChild(\n          createElement(\n            (node.children[i] = resolveNode(node.children[i])),\n            isSvg\n          )\n        )\n      }\n\n      for (var name in attributes) {\n        updateAttribute(element, name, attributes[name], null, isSvg)\n      }\n    }\n\n    return element\n  }\n\n  function updateElement(element, oldAttributes, attributes, isSvg) {\n    for (var name in clone(oldAttributes, attributes)) {\n      if (\n        attributes[name] !==\n        (name === \"value\" || name === \"checked\"\n          ? element[name]\n          : oldAttributes[name])\n      ) {\n        updateAttribute(\n          element,\n          name,\n          attributes[name],\n          oldAttributes[name],\n          isSvg\n        )\n      }\n    }\n\n    var cb = isRecycling ? attributes.oncreate : attributes.onupdate\n    if (cb) {\n      lifecycle.push(function() {\n        cb(element, oldAttributes)\n      })\n    }\n  }\n\n  function removeChildren(element, node) {\n    var attributes = node.attributes\n    if (attributes) {\n      for (var i = 0; i < node.children.length; i++) {\n        removeChildren(element.childNodes[i], node.children[i])\n      }\n\n      if (attributes.ondestroy) {\n        attributes.ondestroy(element)\n      }\n    }\n    return element\n  }\n\n  function removeElement(parent, element, node) {\n    function done() {\n      parent.removeChild(removeChildren(element, node))\n    }\n\n    var cb = node.attributes && node.attributes.onremove\n    if (cb) {\n      cb(element, done)\n    } else {\n      done()\n    }\n  }\n\n  function patch(parent, element, oldNode, node, isSvg) {\n    if (node === oldNode) {\n    } else if (oldNode == null || oldNode.nodeName !== node.nodeName) {\n      var newElement = createElement(node, isSvg)\n      parent.insertBefore(newElement, element)\n\n      if (oldNode != null) {\n        removeElement(parent, element, oldNode)\n      }\n\n      element = newElement\n    } else if (oldNode.nodeName == null) {\n      element.nodeValue = node\n    } else {\n      updateElement(\n        element,\n        oldNode.attributes,\n        node.attributes,\n        (isSvg = isSvg || node.nodeName === \"svg\")\n      )\n\n      var oldKeyed = {}\n      var newKeyed = {}\n      var oldElements = []\n      var oldChildren = oldNode.children\n      var children = node.children\n\n      for (var i = 0; i < oldChildren.length; i++) {\n        oldElements[i] = element.childNodes[i]\n\n        var oldKey = getKey(oldChildren[i])\n        if (oldKey != null) {\n          oldKeyed[oldKey] = [oldElements[i], oldChildren[i]]\n        }\n      }\n\n      var i = 0\n      var k = 0\n\n      while (k < children.length) {\n        var oldKey = getKey(oldChildren[i])\n        var newKey = getKey((children[k] = resolveNode(children[k])))\n\n        if (newKeyed[oldKey]) {\n          i++\n          continue\n        }\n\n        if (newKey != null && newKey === getKey(oldChildren[i + 1])) {\n          if (oldKey == null) {\n            removeElement(element, oldElements[i], oldChildren[i])\n          }\n          i++\n          continue\n        }\n\n        if (newKey == null || isRecycling) {\n          if (oldKey == null) {\n            patch(element, oldElements[i], oldChildren[i], children[k], isSvg)\n            k++\n          }\n          i++\n        } else {\n          var keyedNode = oldKeyed[newKey] || []\n\n          if (oldKey === newKey) {\n            patch(element, keyedNode[0], keyedNode[1], children[k], isSvg)\n            i++\n          } else if (keyedNode[0]) {\n            patch(\n              element,\n              element.insertBefore(keyedNode[0], oldElements[i]),\n              keyedNode[1],\n              children[k],\n              isSvg\n            )\n          } else {\n            patch(element, oldElements[i], null, children[k], isSvg)\n          }\n\n          newKeyed[newKey] = children[k]\n          k++\n        }\n      }\n\n      while (i < oldChildren.length) {\n        if (getKey(oldChildren[i]) == null) {\n          removeElement(element, oldElements[i], oldChildren[i])\n        }\n        i++\n      }\n\n      for (var i in oldKeyed) {\n        if (!newKeyed[i]) {\n          removeElement(element, oldKeyed[i][0], oldKeyed[i][1])\n        }\n      }\n    }\n    return element\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/hyperapp/src/index.js?");

/***/ }),

/***/ "./src/scripts/Api/Auth.ts":
/*!*********************************!*\
  !*** ./src/scripts/Api/Auth.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __read = (this && this.__read) || function (o, n) {\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\n    if (!m) return o;\n    var i = m.call(o), r, ar = [], e;\n    try {\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\n    }\n    catch (error) { e = { error: error }; }\n    finally {\n        try {\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\n        }\n        finally { if (e) throw e.error; }\n    }\n    return ar;\n};\nvar __spread = (this && this.__spread) || function () {\n    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));\n    return ar;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Wait_1 = __webpack_require__(/*! ../Utils/Wait */ \"./src/scripts/Utils/Wait.ts\");\nfunction register(id, password) {\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, Wait_1.waitRandom()];\n                case 1:\n                    _a.sent();\n                    localStorage.setItem(\"user-info\", JSON.stringify({ id: id, password: password }));\n                    return [2 /*return*/, { id: id }];\n            }\n        });\n    });\n}\nexports.register = register;\nfunction login(id, password) {\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, Wait_1.waitRandom()];\n                case 1:\n                    _a.sent();\n                    return [2 /*return*/, users.find(function (u) { return u.id === id && u.password === password; })];\n            }\n        });\n    });\n}\nexports.login = login;\nvar users = __spread([\n    { id: \"foo\", password: \"bar\", name: \"foo.bar\", age: 30, from: \"America\" },\n    { id: \"user01\", password: \"user01\", name: \"user01\", age: 60, from: \"Japan\" }\n], JSON.parse(\"[\" + (localStorage.getItem(\"user-info\") || \"\") + \"]\"));\nfunction getUserInfo(id) {\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, Wait_1.waitRandom()];\n                case 1:\n                    _a.sent();\n                    return [2 /*return*/, users.find(function (u) { return u.id === id; })];\n            }\n        });\n    });\n}\nexports.getUserInfo = getUserInfo;\n\n\n//# sourceURL=webpack:///./src/scripts/Api/Auth.ts?");

/***/ }),

/***/ "./src/scripts/Components/Body/Auth.tsx":
/*!**********************************************!*\
  !*** ./src/scripts/Components/Body/Auth.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar _this = this;\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar hyperapp_1 = __webpack_require__(/*! hyperapp */ \"./node_modules/hyperapp/src/index.js\");\nvar Auth_1 = __webpack_require__(/*! ../../Api/Auth */ \"./src/scripts/Api/Auth.ts\");\nexports.state = {\n    id: \"\",\n    password: \"\",\n    showError: false,\n};\nexports.actions = {\n    setId: function (id) { return ({ id: id }); },\n    setPassword: function (password) { return ({ password: password }); },\n    execLogin: function (_a) {\n        var callOnLoginSuccess = _a.callOnLoginSuccess, callOnLoginFailure = _a.callOnLoginFailure;\n        return function (_a, _b) {\n            var id = _a.id, password = _a.password;\n            var loginSuccess = _b.loginSuccess, loginFailure = _b.loginFailure;\n            return __awaiter(_this, void 0, void 0, function () {\n                var userInfo;\n                return __generator(this, function (_c) {\n                    switch (_c.label) {\n                        case 0: return [4 /*yield*/, Auth_1.login(id, password)];\n                        case 1:\n                            userInfo = _c.sent();\n                            return [2 /*return*/, ((userInfo && loginSuccess({ userInfo: userInfo, callOnLoginSuccess: callOnLoginSuccess })) ||\n                                    loginFailure({ callOnLoginFailure: callOnLoginFailure }))];\n                    }\n                });\n            });\n        };\n    },\n    execRegister: function (_a) {\n        var callOnLoginSuccess = _a.callOnLoginSuccess;\n        return function (_a, _b) {\n            var id = _a.id, password = _a.password;\n            var loginSuccess = _b.loginSuccess;\n            return __awaiter(_this, void 0, void 0, function () {\n                var userInfo;\n                return __generator(this, function (_c) {\n                    switch (_c.label) {\n                        case 0: return [4 /*yield*/, Auth_1.register(id, password)];\n                        case 1:\n                            userInfo = _c.sent();\n                            loginSuccess({ userInfo: userInfo, callOnLoginSuccess: callOnLoginSuccess });\n                            return [2 /*return*/];\n                    }\n                });\n            });\n        };\n    },\n    loginSuccess: function (_a) {\n        var callOnLoginSuccess = _a.callOnLoginSuccess, userInfo = _a.userInfo;\n        return (callOnLoginSuccess && callOnLoginSuccess(userInfo), { showError: false });\n    },\n    loginFailure: function (_a) {\n        var callOnLoginFailure = _a.callOnLoginFailure;\n        return (callOnLoginFailure && callOnLoginFailure(), { showError: true });\n    },\n};\nexports.Auth = function (_a) {\n    var setId = _a.setId, setPassword = _a.setPassword, onLoginSuccess = _a.onLoginSuccess, execLogin = _a.execLogin, execRegister = _a.execRegister, showError = _a.showError, id = _a.id, password = _a.password;\n    return function (_, _a) {\n        var setUserInfo = _a.setUserInfo, setLoading = _a.setLoading;\n        function onIdChange(e) {\n            setId(e.target.value);\n        }\n        function onPasswordChange(e) {\n            setPassword(e.target.value);\n        }\n        function callOnLoginSuccess(userInfo) {\n            setUserInfo(userInfo);\n            setLoading(false);\n            onLoginSuccess();\n        }\n        function callOnLoginFailure() {\n            setLoading(false);\n        }\n        return (hyperapp_1.h(\"div\", null,\n            showError && hyperapp_1.h(\"div\", null, \"login failed.\"),\n            hyperapp_1.h(\"div\", null,\n                \"id: \",\n                hyperapp_1.h(\"input\", { oninput: onIdChange, value: id, type: \"text\" })),\n            hyperapp_1.h(\"div\", null,\n                \"password:\",\n                \" \",\n                hyperapp_1.h(\"input\", { oninput: onPasswordChange, value: password, type: \"password\" })),\n            hyperapp_1.h(\"div\", null,\n                hyperapp_1.h(\"button\", { onclick: function () { return (setLoading(true),\n                        execLogin({ callOnLoginSuccess: callOnLoginSuccess, callOnLoginFailure: callOnLoginFailure })); } }, \"login\"),\n                hyperapp_1.h(\"button\", { onclick: function () { return (setLoading(true),\n                        execRegister({ callOnLoginSuccess: callOnLoginSuccess, callOnLoginFailure: callOnLoginFailure })); } }, \"register\"))));\n    };\n};\n\n\n//# sourceURL=webpack:///./src/scripts/Components/Body/Auth.tsx?");

/***/ }),

/***/ "./src/scripts/Components/Body/index.tsx":
/*!***********************************************!*\
  !*** ./src/scripts/Components/Body/index.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar hyperapp_1 = __webpack_require__(/*! hyperapp */ \"./node_modules/hyperapp/src/index.js\");\nvar router_1 = __webpack_require__(/*! @hyperapp/router */ \"./node_modules/@hyperapp/router/src/index.js\");\nvar Auth_1 = __webpack_require__(/*! ./Auth */ \"./src/scripts/Components/Body/Auth.tsx\");\nexports.state = {\n    auth: Auth_1.state,\n};\nexports.actions = {\n    auth: Auth_1.actions,\n};\nexports.Body = function (_a) {\n    var auth = _a.auth;\n    return function (_a) {\n        var userInfo = _a.userInfo, location = _a.location;\n        if (!userInfo && location.pathname !== \"/auth\") {\n            return hyperapp_1.h(router_1.Redirect, { to: \"/auth\" });\n        }\n        return (hyperapp_1.h(\"div\", null,\n            hyperapp_1.h(router_1.Route, { path: \"/auth\", render: function () { return hyperapp_1.h(Auth_1.Auth, __assign({}, auth, { onLoginSuccess: function () { return ({}); } })); } }),\n            hyperapp_1.h(router_1.Route, { path: \"/app\", render: function () { return (userInfo && hyperapp_1.h(UserData, { userInfo: userInfo })) || hyperapp_1.h(\"div\", null); } })));\n    };\n};\nvar UserData = function (_a) {\n    var userInfo = _a.userInfo;\n    return (hyperapp_1.h(\"div\", null, userInfo ? (hyperapp_1.h(\"div\", null,\n        hyperapp_1.h(\"div\", null,\n            \"name: \",\n            userInfo.name),\n        hyperapp_1.h(\"div\", null,\n            \"id: \",\n            userInfo.id),\n        hyperapp_1.h(\"div\", null,\n            \"age: \",\n            userInfo.age),\n        hyperapp_1.h(\"div\", null,\n            \"from: \",\n            userInfo.from))) : (hyperapp_1.h(\"div\", null, \"error\"))));\n};\n\n\n//# sourceURL=webpack:///./src/scripts/Components/Body/index.tsx?");

/***/ }),

/***/ "./src/scripts/Components/Footer.tsx":
/*!*******************************************!*\
  !*** ./src/scripts/Components/Footer.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar hyperapp_1 = __webpack_require__(/*! hyperapp */ \"./node_modules/hyperapp/src/index.js\");\nexports.Footer = function () {\n    return hyperapp_1.h(\"div\", null, \"Footer\");\n};\n\n\n//# sourceURL=webpack:///./src/scripts/Components/Footer.tsx?");

/***/ }),

/***/ "./src/scripts/Components/Header.tsx":
/*!*******************************************!*\
  !*** ./src/scripts/Components/Header.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar hyperapp_1 = __webpack_require__(/*! hyperapp */ \"./node_modules/hyperapp/src/index.js\");\nexports.Header = function () { return function (_a, _b) {\n    var userInfo = _a.userInfo;\n    var setUserInfo = _b.setUserInfo;\n    return (hyperapp_1.h(\"div\", null,\n        hyperapp_1.h(\"div\", null,\n            \"Hello \",\n            userInfo ? userInfo.name + \"!\" : \"Anonymous!\"),\n        hyperapp_1.h(\"button\", { onclick: function () { return setUserInfo(null); } }, \"logout\")));\n}; };\n\n\n//# sourceURL=webpack:///./src/scripts/Components/Header.tsx?");

/***/ }),

/***/ "./src/scripts/Components/Loading.tsx":
/*!********************************************!*\
  !*** ./src/scripts/Components/Loading.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar hyperapp_1 = __webpack_require__(/*! hyperapp */ \"./node_modules/hyperapp/src/index.js\");\nvar backDropStyle = \"\\n  position: absolute;\\n  left: 0;\\n  right: 0;\\n  top: 0;\\n  bottom: 0;\\n  margin: auto;\\n  width: 100%;\\n  height: 100%;\\n  background-color: black;\\n  opacity: 0.3;\\n\";\nvar loaderStyle = \"\\n  position: absolute;\\n  left: 0;\\n  right: 0;\\n  top: 0;\\n  bottom: 0;\\n  margin: auto;\\n  width: 200px;\\n  height: 200px;\\n  background-image: url(\\\"/dist/ajax-loader.svg\\\");\\n\";\nexports.Loading = function () {\n    return (hyperapp_1.h(\"div\", { style: \"position: absolute; height: 100%; width: 100%; left: 0; top: 0;\" },\n        hyperapp_1.h(\"div\", { style: backDropStyle }),\n        hyperapp_1.h(\"div\", { style: loaderStyle })));\n};\n\n\n//# sourceURL=webpack:///./src/scripts/Components/Loading.tsx?");

/***/ }),

/***/ "./src/scripts/Global.ts":
/*!*******************************!*\
  !*** ./src/scripts/Global.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar router_1 = __webpack_require__(/*! @hyperapp/router */ \"./node_modules/@hyperapp/router/src/index.js\");\nexports.actions = {\n    setUserInfo: function (userInfo) { return function (_, _a) {\n        var location = _a.location;\n        return (location.go(\"/app\"), { userInfo: userInfo });\n    }; },\n    setLoading: function (isLoading) { return ({ isLoading: isLoading }); },\n    location: router_1.location.actions,\n};\nexports.state = {\n    userInfo: null,\n    isLoading: false,\n    location: router_1.location.state,\n};\n\n\n//# sourceURL=webpack:///./src/scripts/Global.ts?");

/***/ }),

/***/ "./src/scripts/Utils/Merge.ts":
/*!************************************!*\
  !*** ./src/scripts/Utils/Merge.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __read = (this && this.__read) || function (o, n) {\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\n    if (!m) return o;\n    var i = m.call(o), r, ar = [], e;\n    try {\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\n    }\n    catch (error) { e = { error: error }; }\n    finally {\n        try {\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\n        }\n        finally { if (e) throw e.error; }\n    }\n    return ar;\n};\nvar __spread = (this && this.__spread) || function () {\n    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));\n    return ar;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction merge(a, b) {\n    var keys = uniqueKeys(a, b);\n    return keys.reduce(function (dst, key) {\n        dst[key] = get(a, b, key);\n        return dst;\n    }, {});\n}\nexports.merge = merge;\nfunction get(a, b, key) {\n    var bType = typeof b[key];\n    switch (bType) {\n        case \"undefined\":\n            return typeof a[key] === \"undefined\" ? undefined : get(b, a, key);\n        case \"object\":\n            return b[key] === null ? null : merge(a[key], b[key]);\n        default:\n            return b[key];\n    }\n}\nfunction uniqueKeys(a, b) {\n    return __spread(new Set(__spread(Object.keys(a || {}), Object.keys(b || {}))));\n}\nexports.shallowMerge = function () {\n    var args = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        args[_i] = arguments[_i];\n    }\n    var dst = {};\n    args.forEach(function (x) {\n        Object.keys(x).forEach(function (key) {\n            dst[key] = x[key];\n        });\n    });\n    return dst;\n};\n\n\n//# sourceURL=webpack:///./src/scripts/Utils/Merge.ts?");

/***/ }),

/***/ "./src/scripts/Utils/Wait.ts":
/*!***********************************!*\
  !*** ./src/scripts/Utils/Wait.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction wait(ms) {\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            return [2 /*return*/, new Promise(function (done) { return setTimeout(done, ms); })];\n        });\n    });\n}\nexports.wait = wait;\nfunction waitRandom() {\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, wait(500 + Math.random() * 800)];\n                case 1:\n                    _a.sent();\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.waitRandom = waitRandom;\n\n\n//# sourceURL=webpack:///./src/scripts/Utils/Wait.ts?");

/***/ }),

/***/ "./src/scripts/index.tsx":
/*!*******************************!*\
  !*** ./src/scripts/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar hyperapp_1 = __webpack_require__(/*! hyperapp */ \"./node_modules/hyperapp/src/index.js\");\nvar router_1 = __webpack_require__(/*! @hyperapp/router */ \"./node_modules/@hyperapp/router/src/index.js\");\nvar Header_1 = __webpack_require__(/*! ./Components/Header */ \"./src/scripts/Components/Header.tsx\");\nvar Footer_1 = __webpack_require__(/*! ./Components/Footer */ \"./src/scripts/Components/Footer.tsx\");\nvar Body_1 = __webpack_require__(/*! ./Components/Body */ \"./src/scripts/Components/Body/index.tsx\");\nvar Merge_1 = __webpack_require__(/*! ./Utils/Merge */ \"./src/scripts/Utils/Merge.ts\");\nvar Global_1 = __webpack_require__(/*! ./Global */ \"./src/scripts/Global.ts\");\nvar Loading_1 = __webpack_require__(/*! ./Components/Loading */ \"./src/scripts/Components/Loading.tsx\");\nvar state = __assign({}, Global_1.state, { body: Body_1.state });\nvar actions = __assign({}, Global_1.actions, { body: Body_1.actions });\nvar view = function (state, actions) {\n    var body = Merge_1.merge(state.body, actions.body);\n    return (hyperapp_1.h(\"div\", null,\n        hyperapp_1.h(Header_1.Header, null),\n        hyperapp_1.h(Body_1.Body, __assign({}, body)),\n        hyperapp_1.h(Footer_1.Footer, null),\n        state.isLoading && hyperapp_1.h(Loading_1.Loading, null)));\n};\nvar application = hyperapp_1.app(state, actions, view, document.body);\nrouter_1.location.subscribe(application.location);\n\n\n//# sourceURL=webpack:///./src/scripts/index.tsx?");

/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./src/scripts/index.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/scripts/index.tsx */\"./src/scripts/index.tsx\");\n\n\n//# sourceURL=webpack:///multi_./src/scripts/index.tsx?");

/***/ })

/******/ });