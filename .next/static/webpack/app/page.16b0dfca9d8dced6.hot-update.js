"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Team.tsx":
/*!*****************************!*\
  !*** ./components/Team.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nconst teamMembers = [\n    {\n        name: \"Behrad Deylami\",\n        role: \"Founder, Senior FullStack Specialist Developer Web3 and Web2\",\n        image: \"/images/Behrad.png\"\n    },\n    {\n        name: \"Bahamin Deylami\",\n        role: \"Blockchain Smart Contracts Web3 Specialist and Web Developer\",\n        image: \"/images/Bahamin.jpg\"\n    },\n    {\n        name: \"Ali Farahmand\",\n        role: \"Data Scientist and AI programming\",\n        image: \"/images/Ali.png\"\n    },\n    {\n        name: \"Saber MirBagheri\",\n        role: \"Web Developer and robotics programming\",\n        image: \"/images/Saber.png\"\n    }\n];\nconst Team = ()=>{\n    const containerVariants = {\n        hidden: {\n            opacity: 0\n        },\n        visible: {\n            opacity: 1,\n            transition: {\n                staggerChildren: 0.3\n            }\n        }\n    };\n    const itemVariants = {\n        hidden: {\n            opacity: 0,\n            y: 20\n        },\n        visible: {\n            opacity: 1,\n            y: 0\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"team\",\n        className: \"py-20 px-4 relative overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 z-0 bg-gradient-to-b from-gray-900 to-black opacity-70\"\n            }, void 0, false, {\n                fileName: \"/home/bahamin/b3paywebsite/components/Team.tsx\",\n                lineNumber: 46,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n                variants: containerVariants,\n                initial: \"hidden\",\n                animate: \"visible\",\n                className: \"max-w-7xl mx-auto relative z-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.h2, {\n                        variants: itemVariants,\n                        className: \"text-4xl font-bold mb-12 text-center text-green-500\",\n                        children: \"Our Team\"\n                    }, void 0, false, {\n                        fileName: \"/home/bahamin/b3paywebsite/components/Team.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 md:grid-cols-3 gap-8\",\n                        children: teamMembers.map((member, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n                                variants: itemVariants,\n                                whileHover: {\n                                    scale: 1.05\n                                },\n                                className: \"bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg text-center backdrop-blur-sm\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.img, {\n                                        src: member.image,\n                                        alt: member.name,\n                                        className: \"w-32 h-32 rounded-full mx-auto mb-4 object-cover\",\n                                        whileHover: {\n                                            zoom: 1.05\n                                        },\n                                        transition: {\n                                            duration: 0.5\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/home/bahamin/b3paywebsite/components/Team.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"text-xl font-semibold mb-2\",\n                                        children: member.name\n                                    }, void 0, false, {\n                                        fileName: \"/home/bahamin/b3paywebsite/components/Team.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-green-400\",\n                                        children: member.role\n                                    }, void 0, false, {\n                                        fileName: \"/home/bahamin/b3paywebsite/components/Team.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 8\n                                    }, undefined)\n                                ]\n                            }, member.name, true, {\n                                fileName: \"/home/bahamin/b3paywebsite/components/Team.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 7\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/bahamin/b3paywebsite/components/Team.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/bahamin/b3paywebsite/components/Team.tsx\",\n                lineNumber: 47,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/bahamin/b3paywebsite/components/Team.tsx\",\n        lineNumber: 45,\n        columnNumber: 3\n    }, undefined);\n};\n_c = Team;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Team);\nvar _c;\n$RefreshReg$(_c, \"Team\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVGVhbS50c3giLCJtYXBwaW5ncyI6Ijs7OztBQUV1QztBQUV2QyxNQUFNQyxjQUFjO0lBQ25CO1FBQ0NDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxPQUFPO0lBQ1I7SUFDQTtRQUNDRixNQUFNO1FBQ05DLE1BQU07UUFDTkMsT0FBTztJQUNSO0lBQ0E7UUFDQ0YsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE9BQU87SUFDUjtJQUNBO1FBQ0NGLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxPQUFPO0lBQ1I7Q0FDQTtBQUVELE1BQU1DLE9BQU87SUFDWixNQUFNQyxvQkFBb0I7UUFDekJDLFFBQVE7WUFBRUMsU0FBUztRQUFFO1FBQ3JCQyxTQUFTO1lBQ1JELFNBQVM7WUFDVEUsWUFBWTtnQkFDWEMsaUJBQWlCO1lBQ2xCO1FBQ0Q7SUFDRDtJQUVBLE1BQU1DLGVBQWU7UUFDcEJMLFFBQVE7WUFBRUMsU0FBUztZQUFHSyxHQUFHO1FBQUc7UUFDNUJKLFNBQVM7WUFBRUQsU0FBUztZQUFHSyxHQUFHO1FBQUU7SUFDN0I7SUFFQSxxQkFDQyw4REFBQ0M7UUFBUUMsSUFBRztRQUFPQyxXQUFVOzswQkFDNUIsOERBQUNDO2dCQUFJRCxXQUFVOzs7Ozs7MEJBQ2YsOERBQUNoQixpREFBTUEsQ0FBQ2lCLEdBQUc7Z0JBQ1ZDLFVBQVVaO2dCQUNWYSxTQUFRO2dCQUNSQyxTQUFRO2dCQUNSSixXQUFVOztrQ0FFViw4REFBQ2hCLGlEQUFNQSxDQUFDcUIsRUFBRTt3QkFDVEgsVUFBVU47d0JBQ1ZJLFdBQVU7a0NBQ1Y7Ozs7OztrQ0FHRCw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQ2JmLFlBQVlxQixHQUFHLENBQUMsQ0FBQ0MsUUFBUUMsc0JBQ3pCLDhEQUFDeEIsaURBQU1BLENBQUNpQixHQUFHO2dDQUVWQyxVQUFVTjtnQ0FDVmEsWUFBWTtvQ0FBRUMsT0FBTztnQ0FBSztnQ0FDMUJWLFdBQVU7O2tEQUVWLDhEQUFDaEIsaURBQU1BLENBQUMyQixHQUFHO3dDQUNWQyxLQUFLTCxPQUFPbkIsS0FBSzt3Q0FDakJ5QixLQUFLTixPQUFPckIsSUFBSTt3Q0FDaEJjLFdBQVU7d0NBQ1ZTLFlBQVk7NENBQUVLLE1BQU07d0NBQUs7d0NBQ3pCcEIsWUFBWTs0Q0FBRXFCLFVBQVU7d0NBQUk7Ozs7OztrREFFN0IsOERBQUNDO3dDQUFHaEIsV0FBVTtrREFBOEJPLE9BQU9yQixJQUFJOzs7Ozs7a0RBQ3ZELDhEQUFDK0I7d0NBQUVqQixXQUFVO2tEQUFrQk8sT0FBT3BCLElBQUk7Ozs7Ozs7K0JBYnJDb0IsT0FBT3JCLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQnZCO0tBdERNRztBQXdETiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RlYW0udHN4Pzk3ZDUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IHRlYW1NZW1iZXJzID0gW1xuXHR7XG5cdFx0bmFtZTogXCJCZWhyYWQgRGV5bGFtaVwiLFxuXHRcdHJvbGU6IFwiRm91bmRlciwgU2VuaW9yIEZ1bGxTdGFjayBTcGVjaWFsaXN0IERldmVsb3BlciBXZWIzIGFuZCBXZWIyXCIsXG5cdFx0aW1hZ2U6IFwiL2ltYWdlcy9CZWhyYWQucG5nXCIsXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkJhaGFtaW4gRGV5bGFtaVwiLFxuXHRcdHJvbGU6IFwiQmxvY2tjaGFpbiBTbWFydCBDb250cmFjdHMgV2ViMyBTcGVjaWFsaXN0IGFuZCBXZWIgRGV2ZWxvcGVyXCIsXG5cdFx0aW1hZ2U6IFwiL2ltYWdlcy9CYWhhbWluLmpwZ1wiLFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJBbGkgRmFyYWhtYW5kXCIsXG5cdFx0cm9sZTogXCJEYXRhIFNjaWVudGlzdCBhbmQgQUkgcHJvZ3JhbW1pbmdcIixcblx0XHRpbWFnZTogXCIvaW1hZ2VzL0FsaS5wbmdcIixcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiU2FiZXIgTWlyQmFnaGVyaVwiLFxuXHRcdHJvbGU6IFwiV2ViIERldmVsb3BlciBhbmQgcm9ib3RpY3MgcHJvZ3JhbW1pbmdcIixcblx0XHRpbWFnZTogXCIvaW1hZ2VzL1NhYmVyLnBuZ1wiLFxuXHR9LFxuXTtcblxuY29uc3QgVGVhbSA9ICgpID0+IHtcblx0Y29uc3QgY29udGFpbmVyVmFyaWFudHMgPSB7XG5cdFx0aGlkZGVuOiB7IG9wYWNpdHk6IDAgfSxcblx0XHR2aXNpYmxlOiB7XG5cdFx0XHRvcGFjaXR5OiAxLFxuXHRcdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0XHRzdGFnZ2VyQ2hpbGRyZW46IDAuMyxcblx0XHRcdH0sXG5cdFx0fSxcblx0fTtcblxuXHRjb25zdCBpdGVtVmFyaWFudHMgPSB7XG5cdFx0aGlkZGVuOiB7IG9wYWNpdHk6IDAsIHk6IDIwIH0sXG5cdFx0dmlzaWJsZTogeyBvcGFjaXR5OiAxLCB5OiAwIH0sXG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBpZD1cInRlYW1cIiBjbGFzc05hbWU9XCJweS0yMCBweC00IHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHotMCBiZy1ncmFkaWVudC10by1iIGZyb20tZ3JheS05MDAgdG8tYmxhY2sgb3BhY2l0eS03MFwiPjwvZGl2PlxuXHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0dmFyaWFudHM9e2NvbnRhaW5lclZhcmlhbnRzfVxuXHRcdFx0XHRpbml0aWFsPVwiaGlkZGVuXCJcblx0XHRcdFx0YW5pbWF0ZT1cInZpc2libGVcIlxuXHRcdFx0XHRjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byByZWxhdGl2ZSB6LTEwXCJcblx0XHRcdD5cblx0XHRcdFx0PG1vdGlvbi5oMlxuXHRcdFx0XHRcdHZhcmlhbnRzPXtpdGVtVmFyaWFudHN9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIG1iLTEyIHRleHQtY2VudGVyIHRleHQtZ3JlZW4tNTAwXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdE91ciBUZWFtXG5cdFx0XHRcdDwvbW90aW9uLmgyPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgZ2FwLThcIj5cblx0XHRcdFx0XHR7dGVhbU1lbWJlcnMubWFwKChtZW1iZXIsIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRcdFx0XHRrZXk9e21lbWJlci5uYW1lfVxuXHRcdFx0XHRcdFx0XHR2YXJpYW50cz17aXRlbVZhcmlhbnRzfVxuXHRcdFx0XHRcdFx0XHR3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjA1IH19XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJnLWdyYXktODAwIGJnLW9wYWNpdHktNTAgcC02IHJvdW5kZWQtbGcgc2hhZG93LWxnIHRleHQtY2VudGVyIGJhY2tkcm9wLWJsdXItc21cIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8bW90aW9uLmltZ1xuXHRcdFx0XHRcdFx0XHRcdHNyYz17bWVtYmVyLmltYWdlfVxuXHRcdFx0XHRcdFx0XHRcdGFsdD17bWVtYmVyLm5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy0zMiBoLTMyIHJvdW5kZWQtZnVsbCBteC1hdXRvIG1iLTQgb2JqZWN0LWNvdmVyXCJcblx0XHRcdFx0XHRcdFx0XHR3aGlsZUhvdmVyPXt7IHpvb206IDEuMDUgfX1cblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtYi0yXCI+e21lbWJlci5uYW1lfTwvaDM+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNDAwXCI+e21lbWJlci5yb2xlfTwvcD5cblx0XHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0PC9zZWN0aW9uPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVhbTtcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJ0ZWFtTWVtYmVycyIsIm5hbWUiLCJyb2xlIiwiaW1hZ2UiLCJUZWFtIiwiY29udGFpbmVyVmFyaWFudHMiLCJoaWRkZW4iLCJvcGFjaXR5IiwidmlzaWJsZSIsInRyYW5zaXRpb24iLCJzdGFnZ2VyQ2hpbGRyZW4iLCJpdGVtVmFyaWFudHMiLCJ5Iiwic2VjdGlvbiIsImlkIiwiY2xhc3NOYW1lIiwiZGl2IiwidmFyaWFudHMiLCJpbml0aWFsIiwiYW5pbWF0ZSIsImgyIiwibWFwIiwibWVtYmVyIiwiaW5kZXgiLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJpbWciLCJzcmMiLCJhbHQiLCJ6b29tIiwiZHVyYXRpb24iLCJoMyIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Team.tsx\n"));

/***/ })

});