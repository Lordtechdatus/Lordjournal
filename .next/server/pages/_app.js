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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/CookieConsent.jsx":
/*!******************************************!*\
  !*** ./src/components/CookieConsent.jsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__]);\njs_cookie__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst CookieConsent = ()=>{\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"cookieConsent\")) {\n            setVisible(true);\n        }\n    }, []);\n    const acceptCookies = ()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"cookieConsent\", \"true\", {\n            expires: 365\n        });\n        setVisible(false);\n    };\n    if (!visible) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            position: \"fixed\",\n            bottom: 0,\n            width: \"100%\",\n            background: \"#222\",\n            color: \"#fff\",\n            padding: \"1em\",\n            textAlign: \"center\",\n            zIndex: 1000\n        },\n        children: [\n            \"This site uses cookies to improve your experience.\",\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: acceptCookies,\n                style: {\n                    marginLeft: \"1em\"\n                },\n                children: \"Accept\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Hp\\\\Lordjournals\\\\src\\\\components\\\\CookieConsent.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Hp\\\\Lordjournals\\\\src\\\\components\\\\CookieConsent.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CookieConsent);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db29raWVDb25zZW50LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ25CO0FBRWhDLE1BQU1JLGdCQUFnQjtJQUNwQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0wsK0NBQVFBLENBQUM7SUFFdkNDLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSSxDQUFDQyxxREFBVyxDQUFDLGtCQUFrQjtZQUNqQ0csV0FBVztRQUNiO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUUsZ0JBQWdCO1FBQ3BCTCxxREFBVyxDQUFDLGlCQUFpQixRQUFRO1lBQUVPLFNBQVM7UUFBSTtRQUNwREosV0FBVztJQUNiO0lBRUEsSUFBSSxDQUFDRCxTQUFTLE9BQU87SUFFckIscUJBQ0UsOERBQUNNO1FBQUlDLE9BQU87WUFBRUMsVUFBVTtZQUFTQyxRQUFRO1lBQUdDLE9BQU87WUFBUUMsWUFBWTtZQUFRQyxPQUFPO1lBQVFDLFNBQVM7WUFBT0MsV0FBVztZQUFVQyxRQUFRO1FBQUs7O1lBQUc7WUFDOUY7MEJBQ25ELDhEQUFDQztnQkFBT0MsU0FBU2Q7Z0JBQWVJLE9BQU87b0JBQUVXLFlBQVk7Z0JBQU07MEJBQUc7Ozs7Ozs7Ozs7OztBQUdwRTtBQUVBLGlFQUFlbkIsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xvcmRfam91cm5hbHMvLi9zcmMvY29tcG9uZW50cy9Db29raWVDb25zZW50LmpzeD9hNTYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmNvbnN0IENvb2tpZUNvbnNlbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFDb29raWVzLmdldChcImNvb2tpZUNvbnNlbnRcIikpIHtcclxuICAgICAgc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGFjY2VwdENvb2tpZXMgPSAoKSA9PiB7XHJcbiAgICBDb29raWVzLnNldChcImNvb2tpZUNvbnNlbnRcIiwgXCJ0cnVlXCIsIHsgZXhwaXJlczogMzY1IH0pO1xyXG4gICAgc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKCF2aXNpYmxlKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwiZml4ZWRcIiwgYm90dG9tOiAwLCB3aWR0aDogXCIxMDAlXCIsIGJhY2tncm91bmQ6IFwiIzIyMlwiLCBjb2xvcjogXCIjZmZmXCIsIHBhZGRpbmc6IFwiMWVtXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgekluZGV4OiAxMDAwIH19PlxyXG4gICAgICBUaGlzIHNpdGUgdXNlcyBjb29raWVzIHRvIGltcHJvdmUgeW91ciBleHBlcmllbmNlLntcIiBcIn1cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthY2NlcHRDb29raWVzfSBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjFlbVwiIH19PkFjY2VwdDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvb2tpZUNvbnNlbnQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDb29raWVzIiwiQ29va2llQ29uc2VudCIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiZ2V0IiwiYWNjZXB0Q29va2llcyIsInNldCIsImV4cGlyZXMiLCJkaXYiLCJzdHlsZSIsInBvc2l0aW9uIiwiYm90dG9tIiwid2lkdGgiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJwYWRkaW5nIiwidGV4dEFsaWduIiwiekluZGV4IiwiYnV0dG9uIiwib25DbGljayIsIm1hcmdpbkxlZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/CookieConsent.jsx\n");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var _src_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/styles.css */ \"./src/styles.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _src_components_CookieConsent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/CookieConsent */ \"./src/components/CookieConsent.jsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_CookieConsent__WEBPACK_IMPORTED_MODULE_3__]);\n_src_components_CookieConsent__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    // Handle client-side only features\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n    // Any client-side initialization can go here\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Hp\\\\Lordjournals\\\\pages\\\\_app.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_CookieConsent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Hp\\\\Lordjournals\\\\pages\\\\_app.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEyQjtBQUNPO0FBQzBCO0FBRTVELFNBQVNFLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDckMsbUNBQW1DO0lBQ25DSixnREFBU0EsQ0FBQztJQUNSLDZDQUE2QztJQUMvQyxHQUFHLEVBQUU7SUFFTCxxQkFDRTs7MEJBQ0UsOERBQUNHO2dCQUFXLEdBQUdDLFNBQVM7Ozs7OzswQkFDeEIsOERBQUNILHFFQUFhQTs7Ozs7OztBQUdwQjtBQUVBLGlFQUFlQyxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9yZF9qb3VybmFscy8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3NyYy9zdHlsZXMuY3NzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29va2llQ29uc2VudCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Db29raWVDb25zZW50JztcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIC8vIEhhbmRsZSBjbGllbnQtc2lkZSBvbmx5IGZlYXR1cmVzXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEFueSBjbGllbnQtc2lkZSBpbml0aWFsaXphdGlvbiBjYW4gZ28gaGVyZVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPENvb2tpZUNvbnNlbnQgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiQ29va2llQ29uc2VudCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();