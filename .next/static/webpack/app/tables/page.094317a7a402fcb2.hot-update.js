"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/tables/page",{

/***/ "(app-pages-browser)/./components/Table.jsx":
/*!******************************!*\
  !*** ./components/Table.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst table = ()=>{\n    _s();\n    const data = [\n        //  data array\n        {\n            Student_Name: \"deepath\",\n            id: 1,\n            Type: \"Minato\",\n            Standard: \"III standard\",\n            Phone_Number: 123,\n            ERP_Number: 5454,\n            Status: \"Active \",\n            Details: \"View\"\n        },\n        {\n            Student_Name: \"deepath\",\n            id: 2,\n            Type: \"Minato\",\n            Standard: \"III standard\",\n            Phone_Number: 123,\n            ERP_Number: 5454,\n            Status: \"Active \",\n            Details: \"View\"\n        },\n        {\n            Student_Name: \"deepath\",\n            id: 3,\n            Type: \"Minato\",\n            Standard: \"III standard\",\n            Phone_Number: 123,\n            ERP_Number: 5454,\n            Status: \"Active \",\n            Details: \"View\"\n        },\n        {\n            Student_Name: \"deepath\",\n            id: 1,\n            Type: \"Minato\",\n            Standard: \"III standard\",\n            Phone_Number: 123,\n            ERP_Number: 5454,\n            Status: \"Active \",\n            Details: \"View\"\n        },\n        {\n            Student_Name: \"deepath\",\n            id: 1,\n            Type: \"Minato\",\n            Standard: \"III standard\",\n            Phone_Number: 123,\n            ERP_Number: 5454,\n            Status: \"Active \",\n            Details: \"View\"\n        },\n        {\n            Student_Name: \"deepath\",\n            id: 1,\n            Type: \"Minato\",\n            Standard: \"III standard\",\n            Phone_Number: 123,\n            ERP_Number: 5454,\n            Status: \"Active \",\n            Details: \"View\"\n        }\n    ];\n    const headings = Object.keys(data[0]);\n    // Use useEffect to import Link only on the client side\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const dynamicImportLink = async ()=>{\n            const { default: DynamicLink } = await __webpack_require__.e(/*! import() */ \"_app-pages-browser_node_modules_next_link_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\", 23));\n            console.log(\"Dynamic : \", DynamicLink);\n            window.DynamicLink = DynamicLink;\n        };\n        dynamicImportLink();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full border-b rounded-lg overflow-hidden\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            className: \"w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        className: \"border-b text-center bg-blue-100 text-gray-600\",\n                        children: headings.map((heading)=>heading !== \"id\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                className: \"p-2 text-center\",\n                                children: heading\n                            }, heading, false, {\n                                fileName: \"/home/deepath/Documents/Deepath/vscode/web/node/demo/LMS-edulearn/components/Table.jsx\",\n                                lineNumber: 93,\n                                columnNumber: 17\n                            }, undefined) : null)\n                    }, void 0, false, {\n                        fileName: \"/home/deepath/Documents/Deepath/vscode/web/node/demo/LMS-edulearn/components/Table.jsx\",\n                        lineNumber: 90,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/deepath/Documents/Deepath/vscode/web/node/demo/LMS-edulearn/components/Table.jsx\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: data.map((value)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            className: \"border-b\",\n                            children: headings.map((header)=>header === \"id\" ? null : header === \"Details\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"text-center\",\n                                    children: [\n                                        console.log(\"window.DynamicLink:\", window.DynamicLink),\n                                        window.DynamicLink ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(window.DynamicLink, {\n                                            href: value[header],\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                children: value[header]\n                                            }, void 0, false, {\n                                                fileName: \"/home/deepath/Documents/Deepath/vscode/web/node/demo/LMS-edulearn/components/Table.jsx\",\n                                                lineNumber: 109,\n                                                columnNumber: 27\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/home/deepath/Documents/Deepath/vscode/web/node/demo/LMS-edulearn/components/Table.jsx\",\n                                            lineNumber: 108,\n                                            columnNumber: 25\n                                        }, undefined) : value[header]\n                                    ]\n                                }, value[\"id\"], true, {\n                                    fileName: \"/home/deepath/Documents/Deepath/vscode/web/node/demo/LMS-edulearn/components/Table.jsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 21\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"text-center\",\n                                    children: value[header]\n                                }, value[\"id\"], false, {\n                                    fileName: \"/home/deepath/Documents/Deepath/vscode/web/node/demo/LMS-edulearn/components/Table.jsx\",\n                                    lineNumber: 116,\n                                    columnNumber: 21\n                                }, undefined))\n                        }, value[\"id\"], false, {\n                            fileName: \"/home/deepath/Documents/Deepath/vscode/web/node/demo/LMS-edulearn/components/Table.jsx\",\n                            lineNumber: 100,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/home/deepath/Documents/Deepath/vscode/web/node/demo/LMS-edulearn/components/Table.jsx\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/deepath/Documents/Deepath/vscode/web/node/demo/LMS-edulearn/components/Table.jsx\",\n            lineNumber: 88,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/deepath/Documents/Deepath/vscode/web/node/demo/LMS-edulearn/components/Table.jsx\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, undefined);\n};\n_s(table, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = table;\n/* harmony default export */ __webpack_exports__[\"default\"] = (table);\nvar _c;\n$RefreshReg$(_c, \"table\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVGFibGUuanN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUN5QztBQUV6QyxNQUFNRSxRQUFROztJQUNaLE1BQU1DLE9BQU87UUFDWCxjQUFjO1FBQ2I7WUFDT0MsY0FBZTtZQUNmQyxJQUFHO1lBQ0hDLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxjQUFjO1lBQ2RDLFlBQVk7WUFDWkMsUUFBUztZQUNUQyxTQUFVO1FBRWQ7UUFDRTtZQUNFUCxjQUFlO1lBQ2ZDLElBQUc7WUFDSEMsTUFBTTtZQUNOQyxVQUFVO1lBQ1ZDLGNBQWM7WUFDZEMsWUFBWTtZQUNaQyxRQUFTO1lBQ1RDLFNBQVU7UUFFZDtRQUNBO1lBQ0lQLGNBQWU7WUFDZkMsSUFBRztZQUNIQyxNQUFNO1lBQ05DLFVBQVU7WUFDVkMsY0FBYztZQUNkQyxZQUFZO1lBQ1pDLFFBQVM7WUFDVEMsU0FBVTtRQUVkO1FBQ0E7WUFDSVAsY0FBZTtZQUNmQyxJQUFHO1lBQ0hDLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxjQUFjO1lBQ2RDLFlBQVk7WUFDWkMsUUFBUztZQUNUQyxTQUFVO1FBRWQ7UUFDQTtZQUNJUCxjQUFlO1lBQ2ZDLElBQUc7WUFDSEMsTUFBTTtZQUNOQyxVQUFVO1lBQ1ZDLGNBQWM7WUFDZEMsWUFBWTtZQUNaQyxRQUFTO1lBQ1RDLFNBQVU7UUFFZDtRQUFLO1lBQ0RQLGNBQWU7WUFDZkMsSUFBRztZQUNIQyxNQUFNO1lBQ05DLFVBQVU7WUFDVkMsY0FBYztZQUNkQyxZQUFZO1lBQ1pDLFFBQVM7WUFDVEMsU0FBVTtRQUVkO0tBQ0w7SUFFRCxNQUFNQyxXQUFXQyxPQUFPQyxJQUFJLENBQUNYLElBQUksQ0FBQyxFQUFFO0lBRXBDLHVEQUF1RDtJQUN2REYsZ0RBQVNBLENBQUM7UUFDUixNQUFNYyxvQkFBb0I7WUFDeEIsTUFBTSxFQUFFQyxTQUFTQyxXQUFXLEVBQUUsR0FBRyxNQUFNLG1OQUFPO1lBQzlDQyxRQUFRQyxHQUFHLENBQUMsY0FBYUY7WUFDekJHLE9BQU9ILFdBQVcsR0FBR0E7UUFDdkI7UUFDQUY7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ007UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ3BCO1lBQU1vQixXQUFVOzs4QkFDZiw4REFBQ0M7OEJBQ0MsNEVBQUNDO3dCQUFHRixXQUFVO2tDQUNYVixTQUFTYSxHQUFHLENBQUNDLENBQUFBLFVBQ1pBLFlBQVkscUJBQ1YsOERBQUNDO2dDQUFpQkwsV0FBVTswQ0FBbUJJOytCQUF0Q0E7Ozs7NENBQ1A7Ozs7Ozs7Ozs7OzhCQUlWLDhEQUFDRTs4QkFDRXpCLEtBQUtzQixHQUFHLENBQUNJLENBQUFBLHNCQUNSLDhEQUFDTDs0QkFBcUJGLFdBQVU7c0NBQzdCVixTQUFTYSxHQUFHLENBQUNLLENBQUFBLFNBQ1pBLFdBQVcsT0FBTyxPQUNoQkEsV0FBVywwQkFDVCw4REFBQ0M7b0NBQXFCVCxXQUFVOzt3Q0FDN0JKLFFBQVFDLEdBQUcsQ0FBQyx1QkFBdUJDLE9BQU9ILFdBQVc7d0NBRXJERyxPQUFPSCxXQUFXLGlCQUNqQiw4REFBQ0csT0FBT0gsV0FBVzs0Q0FBQ2UsTUFBTUgsS0FBSyxDQUFDQyxPQUFPO3NEQUNyQyw0RUFBQ0c7MERBQUdKLEtBQUssQ0FBQ0MsT0FBTzs7Ozs7Ozs7Ozt3REFHbkJELEtBQUssQ0FBQ0MsT0FBTzs7bUNBUlJELEtBQUssQ0FBQyxLQUFLOzs7OzhEQVlwQiw4REFBQ0U7b0NBQXFCVCxXQUFVOzhDQUFlTyxLQUFLLENBQUNDLE9BQU87bUNBQW5ERCxLQUFLLENBQUMsS0FBSzs7Ozs7MkJBaEJuQkEsS0FBSyxDQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCaEM7R0F6SE0zQjtLQUFBQTtBQTJITiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RhYmxlLmpzeD9mYzAxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgdGFibGUgPSAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBbXG4gICAgLy8gIGRhdGEgYXJyYXlcbiAgICAge1xuICAgICAgICAgICAgU3R1ZGVudF9OYW1lIDogJ2RlZXBhdGgnLFxuICAgICAgICAgICAgaWQ6MSxcbiAgICAgICAgICAgIFR5cGU6ICdNaW5hdG8nLFxuICAgICAgICAgICAgU3RhbmRhcmQ6IFwiSUlJIHN0YW5kYXJkXCIsXG4gICAgICAgICAgICBQaG9uZV9OdW1iZXI6IDEyMyxcbiAgICAgICAgICAgIEVSUF9OdW1iZXI6IDU0NTQsXG4gICAgICAgICAgICBTdGF0dXMgOiAnQWN0aXZlICcsXG4gICAgICAgICAgICBEZXRhaWxzIDogJ1ZpZXcnIFxuXG4gICAgICAgIH0sIFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFN0dWRlbnRfTmFtZSA6ICdkZWVwYXRoJyxcbiAgICAgICAgICAgIGlkOjIsXG4gICAgICAgICAgICBUeXBlOiAnTWluYXRvJyxcbiAgICAgICAgICAgIFN0YW5kYXJkOiBcIklJSSBzdGFuZGFyZFwiLFxuICAgICAgICAgICAgUGhvbmVfTnVtYmVyOiAxMjMsXG4gICAgICAgICAgICBFUlBfTnVtYmVyOiA1NDU0LFxuICAgICAgICAgICAgU3RhdHVzIDogJ0FjdGl2ZSAnLFxuICAgICAgICAgICAgRGV0YWlscyA6ICdWaWV3JyBcblxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBTdHVkZW50X05hbWUgOiAnZGVlcGF0aCcsXG4gICAgICAgICAgICBpZDozLFxuICAgICAgICAgICAgVHlwZTogJ01pbmF0bycsXG4gICAgICAgICAgICBTdGFuZGFyZDogXCJJSUkgc3RhbmRhcmRcIixcbiAgICAgICAgICAgIFBob25lX051bWJlcjogMTIzLFxuICAgICAgICAgICAgRVJQX051bWJlcjogNTQ1NCxcbiAgICAgICAgICAgIFN0YXR1cyA6ICdBY3RpdmUgJyxcbiAgICAgICAgICAgIERldGFpbHMgOiAnVmlldycgXG5cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgU3R1ZGVudF9OYW1lIDogJ2RlZXBhdGgnLFxuICAgICAgICAgICAgaWQ6MSxcbiAgICAgICAgICAgIFR5cGU6ICdNaW5hdG8nLFxuICAgICAgICAgICAgU3RhbmRhcmQ6IFwiSUlJIHN0YW5kYXJkXCIsXG4gICAgICAgICAgICBQaG9uZV9OdW1iZXI6IDEyMyxcbiAgICAgICAgICAgIEVSUF9OdW1iZXI6IDU0NTQsXG4gICAgICAgICAgICBTdGF0dXMgOiAnQWN0aXZlICcsXG4gICAgICAgICAgICBEZXRhaWxzIDogJ1ZpZXcnIFxuXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFN0dWRlbnRfTmFtZSA6ICdkZWVwYXRoJyxcbiAgICAgICAgICAgIGlkOjEsXG4gICAgICAgICAgICBUeXBlOiAnTWluYXRvJyxcbiAgICAgICAgICAgIFN0YW5kYXJkOiBcIklJSSBzdGFuZGFyZFwiLFxuICAgICAgICAgICAgUGhvbmVfTnVtYmVyOiAxMjMsXG4gICAgICAgICAgICBFUlBfTnVtYmVyOiA1NDU0LFxuICAgICAgICAgICAgU3RhdHVzIDogJ0FjdGl2ZSAnLFxuICAgICAgICAgICAgRGV0YWlscyA6ICdWaWV3JyBcblxuICAgICAgICB9LCAgIHtcbiAgICAgICAgICAgIFN0dWRlbnRfTmFtZSA6ICdkZWVwYXRoJyxcbiAgICAgICAgICAgIGlkOjEsXG4gICAgICAgICAgICBUeXBlOiAnTWluYXRvJyxcbiAgICAgICAgICAgIFN0YW5kYXJkOiBcIklJSSBzdGFuZGFyZFwiLFxuICAgICAgICAgICAgUGhvbmVfTnVtYmVyOiAxMjMsXG4gICAgICAgICAgICBFUlBfTnVtYmVyOiA1NDU0LFxuICAgICAgICAgICAgU3RhdHVzIDogJ0FjdGl2ZSAnLFxuICAgICAgICAgICAgRGV0YWlscyA6ICdWaWV3JyBcblxuICAgICAgICB9LFxuICBdO1xuXG4gIGNvbnN0IGhlYWRpbmdzID0gT2JqZWN0LmtleXMoZGF0YVswXSk7XG5cbiAgLy8gVXNlIHVzZUVmZmVjdCB0byBpbXBvcnQgTGluayBvbmx5IG9uIHRoZSBjbGllbnQgc2lkZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGR5bmFtaWNJbXBvcnRMaW5rID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgeyBkZWZhdWx0OiBEeW5hbWljTGluayB9ID0gYXdhaXQgaW1wb3J0KCduZXh0L2xpbmsnKTtcbiAgICAgIGNvbnNvbGUubG9nKCdEeW5hbWljIDogJyxEeW5hbWljTGluayk7XG4gICAgICB3aW5kb3cuRHluYW1pY0xpbmsgPSBEeW5hbWljTGluaztcbiAgICB9O1xuICAgIGR5bmFtaWNJbXBvcnRMaW5rKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlci1iIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPSd3LWZ1bGwnPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyIGNsYXNzTmFtZT0nYm9yZGVyLWIgdGV4dC1jZW50ZXIgYmctYmx1ZS0xMDAgdGV4dC1ncmF5LTYwMCc+XG4gICAgICAgICAgICB7aGVhZGluZ3MubWFwKGhlYWRpbmcgPT5cbiAgICAgICAgICAgICAgaGVhZGluZyAhPT0gJ2lkJyA/IChcbiAgICAgICAgICAgICAgICA8dGgga2V5PXtoZWFkaW5nfSBjbGFzc05hbWU9J3AtMiB0ZXh0LWNlbnRlcic+e2hlYWRpbmd9PC90aD5cbiAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtkYXRhLm1hcCh2YWx1ZSA9PiAoXG4gICAgICAgICAgICA8dHIga2V5PXt2YWx1ZVsnaWQnXX0gY2xhc3NOYW1lPSdib3JkZXItYic+XG4gICAgICAgICAgICAgIHtoZWFkaW5ncy5tYXAoaGVhZGVyID0+XG4gICAgICAgICAgICAgICAgaGVhZGVyID09PSAnaWQnID8gbnVsbCA6XG4gICAgICAgICAgICAgICAgICBoZWFkZXIgPT09ICdEZXRhaWxzJyA/IChcbiAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17dmFsdWVbJ2lkJ119IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZygnd2luZG93LkR5bmFtaWNMaW5rOicsIHdpbmRvdy5EeW5hbWljTGluayl9XG5cbiAgICAgICAgICAgICAgICAgICAgICB7d2luZG93LkR5bmFtaWNMaW5rID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHdpbmRvdy5EeW5hbWljTGluayBocmVmPXt2YWx1ZVtoZWFkZXJdfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3ZhbHVlW2hlYWRlcl19PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC93aW5kb3cuRHluYW1pY0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlW2hlYWRlcl1cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17dmFsdWVbJ2lkJ119IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPnt2YWx1ZVtoZWFkZXJdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRhYmxlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidGFibGUiLCJkYXRhIiwiU3R1ZGVudF9OYW1lIiwiaWQiLCJUeXBlIiwiU3RhbmRhcmQiLCJQaG9uZV9OdW1iZXIiLCJFUlBfTnVtYmVyIiwiU3RhdHVzIiwiRGV0YWlscyIsImhlYWRpbmdzIiwiT2JqZWN0Iiwia2V5cyIsImR5bmFtaWNJbXBvcnRMaW5rIiwiZGVmYXVsdCIsIkR5bmFtaWNMaW5rIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImRpdiIsImNsYXNzTmFtZSIsInRoZWFkIiwidHIiLCJtYXAiLCJoZWFkaW5nIiwidGgiLCJ0Ym9keSIsInZhbHVlIiwiaGVhZGVyIiwidGQiLCJocmVmIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Table.jsx\n"));

/***/ })

});