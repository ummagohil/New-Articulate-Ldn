"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./src/pages/_document.js":
/*!********************************!*\
  !*** ./src/pages/_document.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyDocument)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/server/create-instance */ \"@emotion/server/create-instance\");\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_2__, _emotion_cache__WEBPACK_IMPORTED_MODULE_3__, _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__]);\n([_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_2__, _emotion_cache__WEBPACK_IMPORTED_MODULE_3__, _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\nvar _jsxFileName = \"/Users/umma/Documents/New-Articulate-Ldn/src/pages/_document.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {\n  static async getInitialProps(ctx) {\n    const originalRenderPage = ctx.renderPage;\n    const cache = (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n      key: \"css\"\n    });\n    const {\n      extractCriticalToChunks\n    } = (0,_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(cache);\n\n    ctx.renderPage = () => originalRenderPage({\n      enhanceApp: App => props => (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(App, _objectSpread(_objectSpread({}, props), {}, {\n        emotionCache: cache\n      }), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 37\n      }, this)\n    });\n\n    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx);\n    const emotionStyles = extractCriticalToChunks(initialProps.html);\n    const emotionStyleTags = emotionStyles.styles.map(style => (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"style\", {\n      \"data-emotion\": `${style.key} ${style.ids.join(\" \")}`,\n      // eslint-disable-next-line react/no-danger\n      dangerouslySetInnerHTML: {\n        __html: style.css\n      }\n    }, style.key, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this));\n    return _objectSpread(_objectSpread({}, initialProps), {}, {\n      styles: [...react__WEBPACK_IMPORTED_MODULE_0___default().Children.toArray(initialProps.styles), ...emotionStyleTags]\n    });\n  }\n\n  render() {\n    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n      lang: \"en\",\n      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"body\", {\n        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this);\n  }\n\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2RvY3VtZW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxNQUFNUSxVQUFOLFNBQXlCUCxzREFBekIsQ0FBa0M7RUFDbkIsYUFBZlEsZUFBZSxDQUFDQyxHQUFELEVBQU07SUFDaEMsTUFBTUMsa0JBQWtCLEdBQUdELEdBQUcsQ0FBQ0UsVUFBL0I7SUFDQSxNQUFNQyxLQUFLLEdBQUdOLDBEQUFXLENBQUM7TUFBRU8sR0FBRyxFQUFFO0lBQVAsQ0FBRCxDQUF6QjtJQUNBLE1BQU07TUFBRUM7SUFBRixJQUE4QlQsMkVBQW1CLENBQUNPLEtBQUQsQ0FBdkQ7O0lBRUFILEdBQUcsQ0FBQ0UsVUFBSixHQUFpQixNQUNmRCxrQkFBa0IsQ0FBQztNQUNqQkssVUFBVSxFQUFFQyxHQUFHLElBQUlDLEtBQUssSUFBSSx1RUFBQyxHQUFELGtDQUFTQSxLQUFUO1FBQWdCLFlBQVksRUFBRUw7TUFBOUI7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURYLENBQUQsQ0FEcEI7O0lBS0EsTUFBTU0sWUFBWSxHQUFHLE1BQU1sQixvRUFBQSxDQUF5QlMsR0FBekIsQ0FBM0I7SUFDQSxNQUFNVSxhQUFhLEdBQUdMLHVCQUF1QixDQUFDSSxZQUFZLENBQUNFLElBQWQsQ0FBN0M7SUFDQSxNQUFNQyxnQkFBZ0IsR0FBR0YsYUFBYSxDQUFDRyxNQUFkLENBQXFCQyxHQUFyQixDQUF5QkMsS0FBSyxJQUNyRDtNQUNFLGdCQUFlLEdBQUVBLEtBQUssQ0FBQ1gsR0FBSSxJQUFHVyxLQUFLLENBQUNDLEdBQU4sQ0FBVUMsSUFBVixDQUFlLEdBQWYsQ0FBb0IsRUFEcEQ7TUFHRTtNQUNBLHVCQUF1QixFQUFFO1FBQUVDLE1BQU0sRUFBRUgsS0FBSyxDQUFDSTtNQUFoQjtJQUozQixHQUVPSixLQUFLLENBQUNYLEdBRmI7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUR1QixDQUF6QjtJQVNBLHVDQUNLSyxZQURMO01BRUVJLE1BQU0sRUFBRSxDQUNOLEdBQUd2QixxREFBQSxDQUFlK0IsT0FBZixDQUF1QlosWUFBWSxDQUFDSSxNQUFwQyxDQURHLEVBRU4sR0FBR0QsZ0JBRkc7SUFGVjtFQU9EOztFQUVEVSxNQUFNLEdBQUc7SUFDUCxPQUNFLHVFQUFDLCtDQUFEO01BQU0sSUFBSSxFQUFDLElBQVg7TUFBQSxXQUNFLHVFQUFDLCtDQUFEO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFERixFQUVFO1FBQUEsV0FDRSx1RUFBQywrQ0FBRDtVQUFBO1VBQUE7VUFBQTtRQUFBLFFBREYsRUFFRSx1RUFBQyxxREFBRDtVQUFBO1VBQUE7VUFBQTtRQUFBLFFBRkY7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBRkY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFFBREY7RUFTRDs7QUF6QzhDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYXBwLy4vc3JjL3BhZ2VzL19kb2N1bWVudC5qcz9jNTA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IERvY3VtZW50LCB7IEh0bWwsIEhlYWQsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tIFwibmV4dC9kb2N1bWVudFwiXG5pbXBvcnQgY3JlYXRlRW1vdGlvblNlcnZlciBmcm9tIFwiQGVtb3Rpb24vc2VydmVyL2NyZWF0ZS1pbnN0YW5jZVwiXG5pbXBvcnQgY3JlYXRlQ2FjaGUgZnJvbSBcIkBlbW90aW9uL2NhY2hlXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHgpIHtcbiAgICBjb25zdCBvcmlnaW5hbFJlbmRlclBhZ2UgPSBjdHgucmVuZGVyUGFnZVxuICAgIGNvbnN0IGNhY2hlID0gY3JlYXRlQ2FjaGUoeyBrZXk6IFwiY3NzXCIgfSlcbiAgICBjb25zdCB7IGV4dHJhY3RDcml0aWNhbFRvQ2h1bmtzIH0gPSBjcmVhdGVFbW90aW9uU2VydmVyKGNhY2hlKVxuXG4gICAgY3R4LnJlbmRlclBhZ2UgPSAoKSA9PlxuICAgICAgb3JpZ2luYWxSZW5kZXJQYWdlKHtcbiAgICAgICAgZW5oYW5jZUFwcDogQXBwID0+IHByb3BzID0+IDxBcHAgey4uLnByb3BzfSBlbW90aW9uQ2FjaGU9e2NhY2hlfSAvPixcbiAgICAgIH0pXG5cbiAgICBjb25zdCBpbml0aWFsUHJvcHMgPSBhd2FpdCBEb2N1bWVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuICAgIGNvbnN0IGVtb3Rpb25TdHlsZXMgPSBleHRyYWN0Q3JpdGljYWxUb0NodW5rcyhpbml0aWFsUHJvcHMuaHRtbClcbiAgICBjb25zdCBlbW90aW9uU3R5bGVUYWdzID0gZW1vdGlvblN0eWxlcy5zdHlsZXMubWFwKHN0eWxlID0+IChcbiAgICAgIDxzdHlsZVxuICAgICAgICBkYXRhLWVtb3Rpb249e2Ake3N0eWxlLmtleX0gJHtzdHlsZS5pZHMuam9pbihcIiBcIil9YH1cbiAgICAgICAga2V5PXtzdHlsZS5rZXl9XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kYW5nZXJcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzdHlsZS5jc3MgfX1cbiAgICAgIC8+XG4gICAgKSlcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5pbml0aWFsUHJvcHMsXG4gICAgICBzdHlsZXM6IFtcbiAgICAgICAgLi4uUmVhY3QuQ2hpbGRyZW4udG9BcnJheShpbml0aWFsUHJvcHMuc3R5bGVzKSxcbiAgICAgICAgLi4uZW1vdGlvblN0eWxlVGFncyxcbiAgICAgIF0sXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8SHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgICAgPEhlYWQgLz5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAgPE1haW4gLz5cbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L0h0bWw+XG4gICAgKVxuICB9XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJEb2N1bWVudCIsIkh0bWwiLCJIZWFkIiwiTWFpbiIsIk5leHRTY3JpcHQiLCJjcmVhdGVFbW90aW9uU2VydmVyIiwiY3JlYXRlQ2FjaGUiLCJNeURvY3VtZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwib3JpZ2luYWxSZW5kZXJQYWdlIiwicmVuZGVyUGFnZSIsImNhY2hlIiwia2V5IiwiZXh0cmFjdENyaXRpY2FsVG9DaHVua3MiLCJlbmhhbmNlQXBwIiwiQXBwIiwicHJvcHMiLCJpbml0aWFsUHJvcHMiLCJlbW90aW9uU3R5bGVzIiwiaHRtbCIsImVtb3Rpb25TdHlsZVRhZ3MiLCJzdHlsZXMiLCJtYXAiLCJzdHlsZSIsImlkcyIsImpvaW4iLCJfX2h0bWwiLCJjc3MiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_document.js\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("@emotion/cache");;

/***/ }),

/***/ "@emotion/react/jsx-dev-runtime":
/*!*************************************************!*\
  !*** external "@emotion/react/jsx-dev-runtime" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = import("@emotion/react/jsx-dev-runtime");;

/***/ }),

/***/ "@emotion/server/create-instance":
/*!**************************************************!*\
  !*** external "@emotion/server/create-instance" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = import("@emotion/server/create-instance");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_document.js")));
module.exports = __webpack_exports__;

})();