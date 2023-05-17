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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/cards.module.css":
/*!*********************************!*\
  !*** ./styles/cards.module.css ***!
  \*********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"cards_header__c2Ho7\",\n\t\"meta\": \"cards_meta__SJNn2\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvY2FyZHMubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFwcC8uL3N0eWxlcy9jYXJkcy5tb2R1bGUuY3NzPzRjZDgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGVyXCI6IFwiY2FyZHNfaGVhZGVyX19jMkhvN1wiLFxuXHRcIm1ldGFcIjogXCJjYXJkc19tZXRhX19TSk5uMlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/cards.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDoList)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_cards_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/cards.module.css */ \"./styles/cards.module.css\");\n/* harmony import */ var _styles_cards_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_cards_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction ToDoList() {\n    const { 0: projects , 1: setProjects  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const didFetchRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (didFetchRef.current === false) {\n            didFetchRef.current = true;\n            fetchProjects();\n        }\n    }, []);\n    async function fetchProjects() {\n        let path = \"/projects\";\n        const res = await fetch(\"http://localhost:8000\" + path);\n        const json = await res.json();\n        setProjects(json);\n    }\n    function renderContests() {\n        console.log(projects);\n        const items = projects.map((id)=>{\n            return {\n                content: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: (_styles_cards_module_css__WEBPACK_IMPORTED_MODULE_5___default().header),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            style: {\n                                color: \"black\"\n                            },\n                            children: id.header\n                        }, void 0, false, {\n                            fileName: \"/Users/rick/Desktop/CRYPTO/PROJECTS/KRADL/DAPP/DAPP-NEXT-JS/pages/index.js\",\n                            lineNumber: 33,\n                            columnNumber: 51\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rick/Desktop/CRYPTO/PROJECTS/KRADL/DAPP/DAPP-NEXT-JS/pages/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_cards_module_css__WEBPACK_IMPORTED_MODULE_5___default().meta),\n                        children: \"Contest Rules\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rick/Desktop/CRYPTO/PROJECTS/KRADL/DAPP/DAPP-NEXT-JS/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            marginLeft: \"13px\",\n                            marginRight: \"13px\",\n                            fontWeight: \"normal\",\n                            color: \"black\",\n                            fontSize: \"9px\",\n                            marginTop: \"0px\",\n                            lineHeight: \"13px\",\n                            marginBottom: \"14px\"\n                        },\n                        children: id.rules\n                    }, void 0, false, {\n                        fileName: \"/Users/rick/Desktop/CRYPTO/PROJECTS/KRADL/DAPP/DAPP-NEXT-JS/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        style: {\n                            marginLeft: \"13px\",\n                            marginRight: \"13px\"\n                        },\n                        src: id.pic\n                    }, void 0, false, {\n                        fileName: \"/Users/rick/Desktop/CRYPTO/PROJECTS/KRADL/DAPP/DAPP-NEXT-JS/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginLeft: \"13px\",\n                            marginRight: \"13px\",\n                            fontSize: \"13px\",\n                            fontWeight: \"normal\",\n                            color: \"grey\",\n                            marginTop: \"14px\"\n                        },\n                        children: \"Description\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rick/Desktop/CRYPTO/PROJECTS/KRADL/DAPP/DAPP-NEXT-JS/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            marginLeft: \"13px\",\n                            marginRight: \"13px\",\n                            fontWeight: \"normal\",\n                            color: \"black\",\n                            fontSize: \"9px\",\n                            marginTop: \"0px\",\n                            lineHeight: \"13px\"\n                        },\n                        children: id.description\n                    }, void 0, false, {\n                        fileName: \"/Users/rick/Desktop/CRYPTO/PROJECTS/KRADL/DAPP/DAPP-NEXT-JS/pages/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            marginLeft: \"13px\",\n                            marginRight: \"13px\",\n                            fontWeight: \"normal\",\n                            color: \"blue\",\n                            fontSize: \"7px\",\n                            marginTop: \"0px\",\n                            marginBottom: \"12px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: id.address_contest\n                        }, void 0, false, {\n                            fileName: \"/Users/rick/Desktop/CRYPTO/PROJECTS/KRADL/DAPP/DAPP-NEXT-JS/pages/index.js\",\n                            lineNumber: 39,\n                            columnNumber: 169\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rick/Desktop/CRYPTO/PROJECTS/KRADL/DAPP/DAPP-NEXT-JS/pages/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, this)\n                ]\n            };\n        });\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Group, {\n            centered: true,\n            items: items\n        }, void 0, false, {\n            fileName: \"/Users/rick/Desktop/CRYPTO/PROJECTS/KRADL/DAPP/DAPP-NEXT-JS/pages/index.js\",\n            lineNumber: 43,\n            columnNumber: 16\n        }, this);\n    }\n    {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: renderContests()\n        }, void 0, false, {\n            fileName: \"/Users/rick/Desktop/CRYPTO/PROJECTS/KRADL/DAPP/DAPP-NEXT-JS/pages/index.js\",\n            lineNumber: 46,\n            columnNumber: 15\n        }, this);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVLLFVBQVUsRUFBRSxNQUFNOzRCQUFHQyxXQUFXLEVBQUUsTUFBTTs0QkFBRUMsVUFBVSxFQUFFLFFBQVE7NEJBQUVOLEtBQUssRUFBRSxNQUFNOzRCQUFDTyxRQUFRLEVBQUUsS0FBSzs0QkFBRUMsU0FBUyxFQUFFLEtBQUs7NEJBQUVFLFlBQVksRUFBRSxNQUFNO3lCQUFDO2tDQUFFLDRFQUFDWixHQUFDO3NDQUFFTCxFQUFFLENBQUN1QixlQUFlOzs7OztnQ0FBSzs7Ozs7NEJBQUk7aUJBQUM7YUFDbkw7UUFDTixDQUFDLENBQUM7UUFFVCxxQkFBTyw4REFBQzVDLHlEQUFVO1lBQUM4QyxRQUFRO1lBQUMzQixLQUFLLEVBQUVBLEtBQUs7Ozs7O2dCQUFHLENBQUM7SUFDaEQsQ0FBQztJQUVBO1FBQUMscUJBQVEsOERBQUNVLEtBQUc7c0JBQUViLGNBQWMsRUFBRTs7Ozs7Z0JBQU8sQ0FBRTtJQUFBO0FBQzdDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXBwLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QseyB1c2VTdGF0ZSx1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IENhcmQsIENhcmREZXNjcmlwdGlvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY2FyZHMubW9kdWxlLmNzcyc7XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvRG9MaXN0KCkge1xuICAgIGNvbnN0IFtwcm9qZWN0cywgc2V0UHJvamVjdHNdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgZGlkRmV0Y2hSZWYgPSB1c2VSZWYoZmFsc2UpXG4gIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAoZGlkRmV0Y2hSZWYuY3VycmVudCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZGlkRmV0Y2hSZWYuY3VycmVudCA9IHRydWVcbiAgICAgICAgZmV0Y2hQcm9qZWN0cygpXG4gICAgICB9XG4gICAgfSwgW10pXG4gIFxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoUHJvamVjdHMoKSB7XG4gICAgICBsZXQgcGF0aCA9ICcvcHJvamVjdHMnXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMICsgcGF0aClcbiAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG4gICAgICBzZXRQcm9qZWN0cyhqc29uKVxuICAgIH1cbiAgICBmdW5jdGlvbiByZW5kZXJDb250ZXN0cygpIHtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaXRlbXMgPSBwcm9qZWN0cy5tYXAoaWQgPT57XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6W1xuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT48YSBzdHlsZT17e2NvbG9yIDogJ2JsYWNrJ319PntpZC5oZWFkZXJ9PC9hPjwvaDM+LFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1ldGF9PkNvbnRlc3QgUnVsZXM8L2Rpdj4sXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxM3B4JyAsIG1hcmdpblJpZ2h0OiAnMTNweCcsIGZvbnRXZWlnaHQ6ICdub3JtYWwnLCBjb2xvcjogJ2JsYWNrJyxmb250U2l6ZTogJzlweCcsIG1hcmdpblRvcDogJzBweCcsIGxpbmVIZWlnaHQ6JzEzcHgnLG1hcmdpbkJvdHRvbTogJzE0cHgnfX0+e2lkLnJ1bGVzfTwvcD4sXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzEzcHgnICwgbWFyZ2luUmlnaHQ6ICcxM3B4J319IHNyYz17aWQucGljfS8+LFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxM3B4JywgbWFyZ2luUmlnaHQ6ICcxM3B4JywgZm9udFNpemU6ICcxM3B4JywgZm9udFdlaWdodDogJ25vcm1hbCcsIGNvbG9yOiAnZ3JleScsIG1hcmdpblRvcDogJzE0cHgnfX0+RGVzY3JpcHRpb248L2Rpdj4sXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxM3B4JyAsIG1hcmdpblJpZ2h0OiAnMTNweCcsIGZvbnRXZWlnaHQ6ICdub3JtYWwnLCBjb2xvcjogJ2JsYWNrJyxmb250U2l6ZTogJzlweCcsIG1hcmdpblRvcDogJzBweCcsIGxpbmVIZWlnaHQ6JzEzcHgnfX0+e2lkLmRlc2NyaXB0aW9ufTwvcD4sXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxM3B4JyAsIG1hcmdpblJpZ2h0OiAnMTNweCcsIGZvbnRXZWlnaHQ6ICdub3JtYWwnLCBjb2xvcjogJ2JsdWUnLGZvbnRTaXplOiAnN3B4JywgbWFyZ2luVG9wOiAnMHB4JywgbWFyZ2luQm90dG9tOiAnMTJweCd9fT48YT57aWQuYWRkcmVzc19jb250ZXN0fTwvYT48L3A+XVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gPENhcmQuR3JvdXAgY2VudGVyZWQgaXRlbXM9e2l0ZW1zfS8+O1xuICAgIH1cbiAgICAgICAgXG4gICAgIHtyZXR1cm4gKDxkaXY+e3JlbmRlckNvbnRlc3RzKCl9PC9kaXY+KTt9XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJIZWFkIiwiQ2FyZCIsIkNhcmREZXNjcmlwdGlvbiIsInN0eWxlcyIsIlRvRG9MaXN0IiwicHJvamVjdHMiLCJzZXRQcm9qZWN0cyIsImRpZEZldGNoUmVmIiwiY3VycmVudCIsImZldGNoUHJvamVjdHMiLCJwYXRoIiwicmVzIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsImpzb24iLCJyZW5kZXJDb250ZXN0cyIsImNvbnNvbGUiLCJsb2ciLCJpdGVtcyIsIm1hcCIsImlkIiwiY29udGVudCIsImgzIiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwiYSIsInN0eWxlIiwiY29sb3IiLCJkaXYiLCJtZXRhIiwicCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsIm1hcmdpblRvcCIsImxpbmVIZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJydWxlcyIsImltZyIsInNyYyIsInBpYyIsImRlc2NyaXB0aW9uIiwiYWRkcmVzc19jb250ZXN0IiwiR3JvdXAiLCJjZW50ZXJlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./node_modules/semantic-ui-css/semantic.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/semantic-ui-css/semantic.min.css ***!
  \*******************************************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("semantic-ui-react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();