/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n  font-family: \"Poppins\", sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  background-color: #f5eedc;\r\n  color: #183b4e;\r\n}\r\n\r\nheader {\r\n  background: linear-gradient(135deg, #27548a, #183b4e);\r\n  color: white;\r\n  text-align: center;\r\n  padding: 1.5rem;\r\n  font-size: 1.8rem;\r\n  font-weight: bold;\r\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nmain {\r\n  max-width: 900px;\r\n  margin: 30px auto;\r\n  padding: 25px;\r\n  background: linear-gradient(135deg, #27548a, #183b4e);\r\n  color: white;\r\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);\r\n  border-radius: 10px;\r\n}\r\n\r\n#note-form {\r\n  margin-bottom: 25px;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  width: 100%;\r\n  padding: 12px;\r\n  border: 2px solid #dda853;\r\n  border-radius: 8px;\r\n  font-size: 1rem;\r\n  transition: border 0.2s ease-in-out;\r\n}\r\n\r\ninput:focus,\r\ntextarea:focus {\r\n  border-color: #27548a;\r\n  outline: none;\r\n}\r\n\r\nbutton {\r\n  background: #dda853;\r\n  color: white;\r\n  border: none;\r\n  padding: 12px;\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  transition: background 0.2s ease-in-out;\r\n}\r\n\r\nbutton:hover {\r\n  background: #c49748;\r\n}\r\n\r\n.grid-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\r\n  gap: 25px;\r\n}\r\n\r\n.note-item {\r\n  background: #f5eedc;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\r\n  transition: transform 0.2s ease-in-out;\r\n}\r\n\r\n.note-item:hover {\r\n  transform: translateY(-5px);\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://membangun-notes-app/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://membangun-notes-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://membangun-notes-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://membangun-notes-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://membangun-notes-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://membangun-notes-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://membangun-notes-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://membangun-notes-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://membangun-notes-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\r\n\r\nclass LoadingIndicator extends HTMLElement {\r\n  constructor() {\r\n    super();\r\n    this.attachShadow({ mode: \"open\" });\r\n    this.shadowRoot.innerHTML = `\r\n      <style>\r\n        #loading-indicator {\r\n          position: fixed;\r\n          top: 0;\r\n          left: 0;\r\n          right: 0;\r\n          background: #27548a;\r\n          color: white;\r\n          text-align: center;\r\n          padding: 10px;\r\n          z-index: 9999;\r\n          font-weight: bold;\r\n          display: none;\r\n        }\r\n      </style>\r\n      <div id=\"loading-indicator\">Loading...</div>\r\n    `;\r\n  }\r\n\r\n  show() {\r\n    this.shadowRoot.querySelector(\"#loading-indicator\").style.display = \"block\";\r\n  }\r\n\r\n  hide() {\r\n    this.shadowRoot.querySelector(\"#loading-indicator\").style.display = \"none\";\r\n  }\r\n}\r\ncustomElements.define(\"loading-indicator\", LoadingIndicator);\r\n\r\nclass NoteItem extends HTMLElement {\r\n  constructor() {\r\n    super();\r\n    this.attachShadow({ mode: \"open\" });\r\n  }\r\n\r\n  set note(data) {\r\n    this.data = data;\r\n    this.render();\r\n  }\r\n\r\n  render() {\r\n    this.shadowRoot.innerHTML = `\r\n      <style>\r\n        .note {\r\n          background: #F5EEDC;\r\n          padding: 15px;\r\n          border-radius: 10px;\r\n          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n          position: relative;\r\n          border-left: 5px solid #DDA853;\r\n        }\r\n        h3 { margin: 0; color: #27548A; }\r\n        p { margin: 5px 0; color: #183B4E; }\r\n        small { color: #DDA853; }\r\n        button {\r\n          position: absolute;\r\n          top: 10px;\r\n          right: 10px;\r\n          background: #DDA853;\r\n          color: white;\r\n          border: none;\r\n          cursor: pointer;\r\n          padding: 5px;\r\n          border-radius: 5px;\r\n          transition: background 0.3s ease-in-out;\r\n        }\r\n        button:hover {\r\n          background: #C49748;\r\n        }\r\n      </style>\r\n      <div class=\"note\">\r\n        <h3>${this.data.title}</h3>\r\n        <p>${this.data.body}</p>\r\n        <small>${new Date(this.data.createdAt).toLocaleDateString()}</small>\r\n        <button id=\"delete-btn\">Hapus</button>\r\n      </div>\r\n    `;\r\n    this.shadowRoot.querySelector(\"#delete-btn\").addEventListener(\"click\", () => {\r\n      this.dispatchEvent(\r\n        new CustomEvent(\"note-deleted\", {\r\n          detail: this.data.id,\r\n          bubbles: true,\r\n          composed: true,\r\n        })\r\n      );\r\n    });\r\n  }\r\n}\r\ncustomElements.define(\"note-item\", NoteItem);\r\n\r\nclass NoteForm extends HTMLElement {\r\n  constructor() {\r\n    super();\r\n    this.attachShadow({ mode: \"open\" });\r\n    this.shadowRoot.innerHTML = `\r\n      <style>\r\n        form {\r\n          display: flex;\r\n          flex-direction: column;\r\n          gap: 15px;\r\n          background: #F5EEDC;\r\n          padding: 20px;\r\n          border-radius: 10px;\r\n          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\r\n        }\r\n        input, textarea {\r\n          padding: 12px;\r\n          border: 2px solid #DDA853;\r\n          border-radius: 8px;\r\n          font-size: 1rem;\r\n          background-color: #F5EEDC;\r\n          color: #183B4E;\r\n          transition: border 0.3s ease-in-out;\r\n        }\r\n        input:focus, textarea:focus {\r\n          border-color: #27548A;\r\n          outline: none;\r\n        }\r\n        button {\r\n          background: #DDA853;\r\n          color: white;\r\n          border: none;\r\n          padding: 12px;\r\n          cursor: pointer;\r\n          border-radius: 8px;\r\n          font-size: 1rem;\r\n          font-weight: bold;\r\n          transition: background 0.3s ease-in-out;\r\n        }\r\n        button:hover {\r\n          background: #C49748;\r\n        }\r\n      </style>\r\n      <form>\r\n        <input type=\"text\" id=\"title\" placeholder=\"Judul Catatan\" required>\r\n        <textarea id=\"body\" placeholder=\"Isi Catatan\" required></textarea>\r\n        <button type=\"submit\">Tambah Catatan</button>\r\n      </form>\r\n    `;\r\n    this.shadowRoot.querySelector(\"form\").addEventListener(\"submit\", (event) => {\r\n      event.preventDefault();\r\n      const title = this.shadowRoot.querySelector(\"#title\").value;\r\n      const body = this.shadowRoot.querySelector(\"#body\").value;\r\n      this.dispatchEvent(\r\n        new CustomEvent(\"note-added\", {\r\n          detail: { title, body },\r\n          bubbles: true,\r\n          composed: true,\r\n        })\r\n      );\r\n      this.shadowRoot.querySelector(\"form\").reset();\r\n    });\r\n  }\r\n}\r\ncustomElements.define(\"note-form\", NoteForm);\r\n\r\nclass NotesHeader extends HTMLElement {\r\n  constructor() {\r\n    super();\r\n    this.attachShadow({ mode: \"open\" });\r\n    this.shadowRoot.innerHTML = `\r\n      <style>\r\n        header {\r\n          background: linear-gradient(135deg, #27548a, #183b4e);\r\n          color: white;\r\n          text-align: center;\r\n          padding: 1.5rem;\r\n          font-size: 1.8rem;\r\n          font-weight: bold;\r\n          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\r\n        }\r\n      </style>\r\n      <header>Notes App</header>\r\n    `;\r\n  }\r\n}\r\ncustomElements.define(\"notes-header\", NotesHeader);\r\n\r\n// ===== Loading Indicator =====\r\nconst loader = document.createElement(\"loading-indicator\");\r\ndocument.body.appendChild(loader);\r\n\r\nfunction showLoading() {\r\n  loader.show();\r\n}\r\nfunction hideLoading() {\r\n  loader.hide();\r\n}\r\n\r\n// ====== Main Logic ======\r\nconst notesContainer = document.getElementById(\"notes-container\");\r\n\r\nasync function getNotes() {\r\n  try {\r\n    showLoading();\r\n    const response = await fetch(\"https://notes-api.dicoding.dev/v2/notes\");\r\n    const result = await response.json();\r\n    if (result.status === \"success\") {\r\n      displayNotes(result.data);\r\n    } else {\r\n      alert(\"Gagal mengambil catatan.\");\r\n    }\r\n  } catch (error) {\r\n    console.error(\"Gagal mengambil data:\", error);\r\n    alert(\"Terjadi kesalahan saat memuat catatan.\");\r\n  } finally {\r\n    hideLoading();\r\n  }\r\n}\r\n\r\nfunction displayNotes(notes) {\r\n  notesContainer.innerHTML = \"\";\r\n  notes.forEach((note) => {\r\n    const noteElement = document.createElement(\"note-item\");\r\n    noteElement.note = note;\r\n    notesContainer.appendChild(noteElement);\r\n  });\r\n}\r\n\r\ndocument.body.addEventListener(\"note-added\", async (event) => {\r\n  const { title, body } = event.detail;\r\n\r\n  try {\r\n    showLoading();\r\n    const response = await fetch(\"https://notes-api.dicoding.dev/v2/notes\", {\r\n      method: \"POST\",\r\n      headers: {\r\n        \"Content-Type\": \"application/json\",\r\n      },\r\n      body: JSON.stringify({ title, body }),\r\n    });\r\n\r\n    const result = await response.json();\r\n\r\n    if (result.status === \"success\") {\r\n      alert(\"Catatan berhasil ditambahkan!\");\r\n      getNotes(); // Refresh daftar catatan\r\n    } else {\r\n      alert(\"Gagal menambahkan catatan!\");\r\n    }\r\n  } catch (error) {\r\n    console.error(\"Gagal membuat catatan:\", error);\r\n    alert(\"Terjadi kesalahan saat membuat catatan.\");\r\n  } finally {\r\n    hideLoading();\r\n  }\r\n});\r\n\r\ndocument.body.addEventListener(\"note-deleted\", async (event) => {\r\n  const noteId = event.detail;\r\n\r\n  try {\r\n    showLoading();\r\n    const response = await fetch(`https://notes-api.dicoding.dev/v2/notes/${noteId}`, {\r\n      method: \"DELETE\",\r\n    });\r\n\r\n    const result = await response.json();\r\n\r\n    if (result.status === \"success\") {\r\n      alert(\"Catatan berhasil dihapus!\");\r\n      getNotes();\r\n    } else {\r\n      alert(\"Gagal menghapus catatan!\");\r\n    }\r\n  } catch (error) {\r\n    console.error(\"Gagal menghapus catatan:\", error);\r\n    alert(\"Terjadi kesalahan saat menghapus catatan.\");\r\n  } finally {\r\n    hideLoading();\r\n  }\r\n});\r\n\r\ngetNotes(); // Load notes saat pertama kali\r\n\n\n//# sourceURL=webpack://membangun-notes-app/./src/script.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://membangun-notes-app/./src/styles.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;