"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./components/Table.jsx":
/*!******************************!*\
  !*** ./components/Table.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst table = ()=>{\n    _s();\n    const data = [\n        //  data array\n        {\n            Student_Name: \"deepath\",\n            id: 1,\n            Type: \"Minato\",\n            Standard: \"III standard\",\n            Phone_Number: 123,\n            ERP_Number: 5454,\n            Status: \"Active \",\n            Details: \"View\"\n        },\n        {\n            Student_Name: \"deepath\",\n            id: 2,\n            Type: \"Minato\",\n            Standard: \"III standard\",\n            Phone_Number: 123,\n            ERP_Number: 5454,\n            Status: \"Active \",\n            Details: \"View\"\n        },\n        {\n            Student_Name: \"deepath\",\n            id: 3,\n            Type: \"Minato\",\n            Standard: \"III standard\",\n            Phone_Number: 123,\n            ERP_Number: 5454,\n            Status: \"Active \",\n            Details: \"View\"\n        },\n        {\n            Student_Name: \"deepath\",\n            id: 4,\n            Type: \"Minato\",\n            Standard: \"III standard\",\n            Phone_Number: 123,\n            ERP_Number: 5454,\n            Status: \"Active \",\n            Details: \"View\"\n        },\n        {\n            Student_Name: \"deepath\",\n            id: 5,\n            Type: \"Minato\",\n            Standard: \"III standard\",\n            Phone_Number: 123,\n            ERP_Number: 5454,\n            Status: \"Active \",\n            Details: \"View\"\n        },\n        {\n            Student_Name: \"deepath\",\n            id: 6,\n            Type: \"Minato\",\n            Standard: \"III standard\",\n            Phone_Number: 123,\n            ERP_Number: 5454,\n            Status: \"Active \",\n            Details: \"View\"\n        }\n    ];\n    const headings = Object.keys(data[0]);\n    // Use useEffect to import Link only on the client side\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const dynamicImportLink = async ()=>{\n            const { default: DynamicLink } = await __webpack_require__.e(/*! import() */ \"_app-pages-browser_node_modules_next_link_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\", 23));\n            // Assign the dynamic Link component to a variable\n            window.DynamicLink = DynamicLink;\n        };\n        dynamicImportLink();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            className: \"w-[500]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        className: \"border-b text-center bg-blue-100 text-gray-600\",\n                        children: headings.map((heading)=>heading !== \"id\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                className: \"p-2 text-center\",\n                                children: heading\n                            }, heading, false, {\n                                fileName: \"/home/deepath/Documents/Deepath/vscode/web/node/demo/LMS-edulearn/components/Table.jsx\",\n                                lineNumber: 88,\n                                columnNumber: 17\n                            }, undefined) : null)\n                    }, void 0, false, {\n                        fileName: \"/home/deepath/Documents/Deepath/vscode/web/node/demo/LMS-edulearn/components/Table.jsx\",\n                        lineNumber: 85,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/deepath/Documents/Deepath/vscode/web/node/demo/LMS-edulearn/components/Table.jsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: data.map((value)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            className: \"border-b\",\n                            children: headings.map((header)=>header === \"id\" ? null : header === \"Details\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"text-center\",\n                                    children: window.DynamicLink ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(window.DynamicLink, {\n                                        href: value[header],\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            children: value[header]\n                                        }, void 0, false, {\n                                            fileName: \"/home/deepath/Documents/Deepath/vscode/web/node/demo/LMS-edulearn/components/Table.jsx\",\n                                            lineNumber: 103,\n                                            columnNumber: 27\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/deepath/Documents/Deepath/vscode/web/node/demo/LMS-edulearn/components/Table.jsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 25\n                                    }, undefined) : value[header]\n                                }, value[\"id\"], false, {\n                                    fileName: \"/home/deepath/Documents/Deepath/vscode/web/node/demo/LMS-edulearn/components/Table.jsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 19\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"text-center\",\n                                    children: value[header]\n                                }, value[\"id\"], false, {\n                                    fileName: \"/home/deepath/Documents/Deepath/vscode/web/node/demo/LMS-edulearn/components/Table.jsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 19\n                                }, undefined))\n                        }, value[\"id\"], false, {\n                            fileName: \"/home/deepath/Documents/Deepath/vscode/web/node/demo/LMS-edulearn/components/Table.jsx\",\n                            lineNumber: 97,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/home/deepath/Documents/Deepath/vscode/web/node/demo/LMS-edulearn/components/Table.jsx\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/deepath/Documents/Deepath/vscode/web/node/demo/LMS-edulearn/components/Table.jsx\",\n            lineNumber: 83,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/deepath/Documents/Deepath/vscode/web/node/demo/LMS-edulearn/components/Table.jsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, undefined);\n};\n_s(table, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = table;\n/* harmony default export */ __webpack_exports__[\"default\"] = (table);\nvar _c;\n$RefreshReg$(_c, \"table\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVGFibGUuanN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUN5QztBQUV6QyxNQUFNRSxRQUFROztJQUNaLE1BQU1DLE9BQU87UUFDWCxjQUFjO1FBQ2Q7WUFDRUMsY0FBYztZQUNkQyxJQUFJO1lBQ0pDLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxjQUFjO1lBQ2RDLFlBQVk7WUFDWkMsUUFBUTtZQUNSQyxTQUFTO1FBQ1g7UUFDQTtZQUNFUCxjQUFjO1lBQ2RDLElBQUk7WUFDSkMsTUFBTTtZQUNOQyxVQUFVO1lBQ1ZDLGNBQWM7WUFDZEMsWUFBWTtZQUNaQyxRQUFRO1lBQ1JDLFNBQVM7UUFDWDtRQUNBO1lBQ0VQLGNBQWM7WUFDZEMsSUFBSTtZQUNKQyxNQUFNO1lBQ05DLFVBQVU7WUFDVkMsY0FBYztZQUNkQyxZQUFZO1lBQ1pDLFFBQVE7WUFDUkMsU0FBUztRQUNYO1FBQ0E7WUFDRVAsY0FBYztZQUNkQyxJQUFJO1lBQ0pDLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxjQUFjO1lBQ2RDLFlBQVk7WUFDWkMsUUFBUTtZQUNSQyxTQUFTO1FBQ1g7UUFDQTtZQUNFUCxjQUFjO1lBQ2RDLElBQUk7WUFDSkMsTUFBTTtZQUNOQyxVQUFVO1lBQ1ZDLGNBQWM7WUFDZEMsWUFBWTtZQUNaQyxRQUFRO1lBQ1JDLFNBQVM7UUFDWDtRQUNBO1lBQ0VQLGNBQWM7WUFDZEMsSUFBSTtZQUNKQyxNQUFNO1lBQ05DLFVBQVU7WUFDVkMsY0FBYztZQUNkQyxZQUFZO1lBQ1pDLFFBQVE7WUFDUkMsU0FBUztRQUNYO0tBQ0Q7SUFFRCxNQUFNQyxXQUFXQyxPQUFPQyxJQUFJLENBQUNYLElBQUksQ0FBQyxFQUFFO0lBRXBDLHVEQUF1RDtJQUN2REYsZ0RBQVNBLENBQUM7UUFDUixNQUFNYyxvQkFBb0I7WUFDeEIsTUFBTSxFQUFFQyxTQUFTQyxXQUFXLEVBQUUsR0FBRyxNQUFNLG1OQUFtQjtZQUMxRCxrREFBa0Q7WUFDbERDLE9BQU9ELFdBQVcsR0FBR0E7UUFDdkI7UUFDQUY7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ2xCO1lBQU1rQixXQUFVOzs4QkFDZiw4REFBQ0M7OEJBQ0MsNEVBQUNDO3dCQUFHRixXQUFVO2tDQUNYUixTQUFTVyxHQUFHLENBQUMsQ0FBQ0MsVUFDYkEsWUFBWSxxQkFDViw4REFBQ0M7Z0NBQWlCTCxXQUFVOzBDQUN6Qkk7K0JBRE1BOzs7OzRDQUdQOzs7Ozs7Ozs7Ozs4QkFJViw4REFBQ0U7OEJBQ0V2QixLQUFLb0IsR0FBRyxDQUFDLENBQUNJLHNCQUNULDhEQUFDTDs0QkFBcUJGLFdBQVU7c0NBQzdCUixTQUFTVyxHQUFHLENBQUMsQ0FBQ0ssU0FDYkEsV0FBVyxPQUFPLE9BQU9BLFdBQVcsMEJBQ2xDLDhEQUFDQztvQ0FBcUJULFdBQVU7OENBQzlCRixPQUFPRCxXQUFXLGlCQUNkLDhEQUFDQyxPQUFPRCxXQUFXO3dDQUFDYSxNQUFNSCxLQUFLLENBQUNDLE9BQU87a0RBQ3JDLDRFQUFDRztzREFBR0osS0FBSyxDQUFDQyxPQUFPOzs7Ozs7Ozs7O29EQUduQkQsS0FBSyxDQUFDQyxPQUFPO21DQU5WRCxLQUFLLENBQUMsS0FBSzs7Ozs4REFVcEIsOERBQUNFO29DQUFxQlQsV0FBVTs4Q0FDN0JPLEtBQUssQ0FBQ0MsT0FBTzttQ0FEUEQsS0FBSyxDQUFDLEtBQUs7Ozs7OzJCQWJqQkEsS0FBSyxDQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCaEM7R0FySE16QjtLQUFBQTtBQXVITiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RhYmxlLmpzeD9mYzAxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCB0YWJsZSA9ICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IFtcbiAgICAvLyAgZGF0YSBhcnJheVxuICAgIHtcbiAgICAgIFN0dWRlbnRfTmFtZTogXCJkZWVwYXRoXCIsXG4gICAgICBpZDogMSxcbiAgICAgIFR5cGU6IFwiTWluYXRvXCIsXG4gICAgICBTdGFuZGFyZDogXCJJSUkgc3RhbmRhcmRcIixcbiAgICAgIFBob25lX051bWJlcjogMTIzLFxuICAgICAgRVJQX051bWJlcjogNTQ1NCxcbiAgICAgIFN0YXR1czogXCJBY3RpdmUgXCIsXG4gICAgICBEZXRhaWxzOiBcIlZpZXdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIFN0dWRlbnRfTmFtZTogXCJkZWVwYXRoXCIsXG4gICAgICBpZDogMixcbiAgICAgIFR5cGU6IFwiTWluYXRvXCIsXG4gICAgICBTdGFuZGFyZDogXCJJSUkgc3RhbmRhcmRcIixcbiAgICAgIFBob25lX051bWJlcjogMTIzLFxuICAgICAgRVJQX051bWJlcjogNTQ1NCxcbiAgICAgIFN0YXR1czogXCJBY3RpdmUgXCIsXG4gICAgICBEZXRhaWxzOiBcIlZpZXdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIFN0dWRlbnRfTmFtZTogXCJkZWVwYXRoXCIsXG4gICAgICBpZDogMyxcbiAgICAgIFR5cGU6IFwiTWluYXRvXCIsXG4gICAgICBTdGFuZGFyZDogXCJJSUkgc3RhbmRhcmRcIixcbiAgICAgIFBob25lX051bWJlcjogMTIzLFxuICAgICAgRVJQX051bWJlcjogNTQ1NCxcbiAgICAgIFN0YXR1czogXCJBY3RpdmUgXCIsXG4gICAgICBEZXRhaWxzOiBcIlZpZXdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIFN0dWRlbnRfTmFtZTogXCJkZWVwYXRoXCIsXG4gICAgICBpZDogNCxcbiAgICAgIFR5cGU6IFwiTWluYXRvXCIsXG4gICAgICBTdGFuZGFyZDogXCJJSUkgc3RhbmRhcmRcIixcbiAgICAgIFBob25lX051bWJlcjogMTIzLFxuICAgICAgRVJQX051bWJlcjogNTQ1NCxcbiAgICAgIFN0YXR1czogXCJBY3RpdmUgXCIsXG4gICAgICBEZXRhaWxzOiBcIlZpZXdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIFN0dWRlbnRfTmFtZTogXCJkZWVwYXRoXCIsXG4gICAgICBpZDogNSxcbiAgICAgIFR5cGU6IFwiTWluYXRvXCIsXG4gICAgICBTdGFuZGFyZDogXCJJSUkgc3RhbmRhcmRcIixcbiAgICAgIFBob25lX051bWJlcjogMTIzLFxuICAgICAgRVJQX051bWJlcjogNTQ1NCxcbiAgICAgIFN0YXR1czogXCJBY3RpdmUgXCIsXG4gICAgICBEZXRhaWxzOiBcIlZpZXdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIFN0dWRlbnRfTmFtZTogXCJkZWVwYXRoXCIsXG4gICAgICBpZDogNixcbiAgICAgIFR5cGU6IFwiTWluYXRvXCIsXG4gICAgICBTdGFuZGFyZDogXCJJSUkgc3RhbmRhcmRcIixcbiAgICAgIFBob25lX051bWJlcjogMTIzLFxuICAgICAgRVJQX051bWJlcjogNTQ1NCxcbiAgICAgIFN0YXR1czogXCJBY3RpdmUgXCIsXG4gICAgICBEZXRhaWxzOiBcIlZpZXdcIixcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IGhlYWRpbmdzID0gT2JqZWN0LmtleXMoZGF0YVswXSk7XG5cbiAgLy8gVXNlIHVzZUVmZmVjdCB0byBpbXBvcnQgTGluayBvbmx5IG9uIHRoZSBjbGllbnQgc2lkZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGR5bmFtaWNJbXBvcnRMaW5rID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgeyBkZWZhdWx0OiBEeW5hbWljTGluayB9ID0gYXdhaXQgaW1wb3J0KFwibmV4dC9saW5rXCIpO1xuICAgICAgLy8gQXNzaWduIHRoZSBkeW5hbWljIExpbmsgY29tcG9uZW50IHRvIGEgdmFyaWFibGVcbiAgICAgIHdpbmRvdy5EeW5hbWljTGluayA9IER5bmFtaWNMaW5rO1xuICAgIH07XG4gICAgZHluYW1pY0ltcG9ydExpbmsoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXhcIj5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3LVs1MDBdXCI+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyLWIgdGV4dC1jZW50ZXIgYmctYmx1ZS0xMDAgdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAge2hlYWRpbmdzLm1hcCgoaGVhZGluZykgPT5cbiAgICAgICAgICAgICAgaGVhZGluZyAhPT0gXCJpZFwiID8gKFxuICAgICAgICAgICAgICAgIDx0aCBrZXk9e2hlYWRpbmd9IGNsYXNzTmFtZT1cInAtMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAge2hlYWRpbmd9XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtkYXRhLm1hcCgodmFsdWUpID0+IChcbiAgICAgICAgICAgIDx0ciBrZXk9e3ZhbHVlW1wiaWRcIl19IGNsYXNzTmFtZT1cImJvcmRlci1iXCI+XG4gICAgICAgICAgICAgIHtoZWFkaW5ncy5tYXAoKGhlYWRlcikgPT5cbiAgICAgICAgICAgICAgICBoZWFkZXIgPT09IFwiaWRcIiA/IG51bGwgOiBoZWFkZXIgPT09IFwiRGV0YWlsc1wiID8gKFxuICAgICAgICAgICAgICAgICAgPHRkIGtleT17dmFsdWVbXCJpZFwiXX0gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICB7d2luZG93LkR5bmFtaWNMaW5rID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHdpbmRvdy5EeW5hbWljTGluayBocmVmPXt2YWx1ZVtoZWFkZXJdfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3ZhbHVlW2hlYWRlcl19PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC93aW5kb3cuRHluYW1pY0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlW2hlYWRlcl1cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPHRkIGtleT17dmFsdWVbXCJpZFwiXX0gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge3ZhbHVlW2hlYWRlcl19XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0YWJsZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInRhYmxlIiwiZGF0YSIsIlN0dWRlbnRfTmFtZSIsImlkIiwiVHlwZSIsIlN0YW5kYXJkIiwiUGhvbmVfTnVtYmVyIiwiRVJQX051bWJlciIsIlN0YXR1cyIsIkRldGFpbHMiLCJoZWFkaW5ncyIsIk9iamVjdCIsImtleXMiLCJkeW5hbWljSW1wb3J0TGluayIsImRlZmF1bHQiLCJEeW5hbWljTGluayIsIndpbmRvdyIsImRpdiIsImNsYXNzTmFtZSIsInRoZWFkIiwidHIiLCJtYXAiLCJoZWFkaW5nIiwidGgiLCJ0Ym9keSIsInZhbHVlIiwiaGVhZGVyIiwidGQiLCJocmVmIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Table.jsx\n"));

/***/ })

});