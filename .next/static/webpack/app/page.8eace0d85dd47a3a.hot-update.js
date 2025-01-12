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

/***/ "(app-pages-browser)/./components/MatrixBackground.tsx":
/*!*****************************************!*\
  !*** ./components/MatrixBackground.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst MatrixBackground = ()=>{\n    _s();\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [mousePosition, setMousePosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const canvas = canvasRef.current;\n        if (!canvas) return;\n        const ctx = canvas.getContext(\"2d\");\n        if (!ctx) return;\n        const particles = [];\n        const particleCount = 20;\n        const textColor = \"rgba(0, 255, 0, 0.7)\";\n        const resizeCanvas = ()=>{\n            canvas.width = window.innerWidth;\n            canvas.height = window.innerHeight;\n        };\n        const createParticle = ()=>({\n                x: Math.random() * canvas.width,\n                y: 0,\n                speed: 0.5 + Math.random() * 1.5,\n                value: Math.random() < 0.5 ? \"0\" : \"1\",\n                size: 10 + Math.random() * 20,\n                opacity: 0.9 + Math.random() * 0.9\n            });\n        const initParticles = ()=>{\n            for(let i = 0; i < particleCount; i++){\n                particles.push(createParticle());\n            }\n        };\n        const drawParticle = (particle)=>{\n            if (!ctx) return;\n            ctx.font = \"\".concat(particle.size, \"px monospace\");\n            ctx.fillStyle = textColor;\n            ctx.globalAlpha = particle.opacity;\n            ctx.fillText(particle.value, particle.x, particle.y);\n        };\n        const updateParticle = (particle)=>{\n            particle.y += particle.speed;\n            if (mousePosition) {\n                const dx = particle.x - mousePosition.x;\n                const dy = particle.y - mousePosition.y;\n                const distance = Math.sqrt(dx * dx + dy * dy);\n                if (distance < 100) {\n                    const angle = Math.atan2(dy, dx);\n                    const force = (100 - distance) / 100;\n                    particle.x += Math.cos(angle) * force * 5;\n                    particle.y += Math.sin(angle) * force * 5;\n                }\n            }\n            if (particle.y > canvas.height) {\n                particle.y = 0;\n                particle.x = Math.random() * canvas.width;\n            }\n            if (particle.x < 0) particle.x = 0;\n            if (particle.x > canvas.width) particle.x = canvas.width;\n        };\n        const animate = ()=>{\n            ctx.fillStyle = \"rgba(0, 0, 0, 0.05)\";\n            ctx.fillRect(0, 0, canvas.width, canvas.height);\n            particles.forEach((particle)=>{\n                updateParticle(particle);\n                drawParticle(particle);\n            });\n            requestAnimationFrame(animate);\n        };\n        const handleMouseMove = (event)=>{\n            setMousePosition({\n                x: event.clientX,\n                y: event.clientY\n            });\n        };\n        resizeCanvas();\n        initParticles();\n        animate();\n        window.addEventListener(\"mousemove\", handleMouseMove);\n        window.addEventListener(\"resize\", resizeCanvas);\n        return ()=>{\n            window.removeEventListener(\"mousemove\", handleMouseMove);\n            window.removeEventListener(\"resize\", resizeCanvas);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n        ref: canvasRef,\n        className: \"fixed inset-0 w-full h-full\"\n    }, void 0, false, {\n        fileName: \"/home/bahamin/b3paywebsite/components/MatrixBackground.tsx\",\n        lineNumber: 114,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MatrixBackground, \"ZCMgBWBlmInpAG8RVdtPjwLjUhI=\");\n_c = MatrixBackground;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MatrixBackground);\nvar _c;\n$RefreshReg$(_c, \"MatrixBackground\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTWF0cml4QmFja2dyb3VuZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRTJEO0FBVzNELE1BQU1JLG1CQUE2Qjs7SUFDbEMsTUFBTUMsWUFBWUgsNkNBQU1BLENBQW9CO0lBQzVDLE1BQU0sQ0FBQ0ksZUFBZUMsaUJBQWlCLEdBQUdKLCtDQUFRQSxDQUd4QztJQUVWRixnREFBU0EsQ0FBQztRQUNULE1BQU1PLFNBQVNILFVBQVVJLE9BQU87UUFDaEMsSUFBSSxDQUFDRCxRQUFRO1FBRWIsTUFBTUUsTUFBTUYsT0FBT0csVUFBVSxDQUFDO1FBQzlCLElBQUksQ0FBQ0QsS0FBSztRQUVWLE1BQU1FLFlBQXdCLEVBQUU7UUFDaEMsTUFBTUMsZ0JBQWdCO1FBQ3RCLE1BQU1DLFlBQVk7UUFFbEIsTUFBTUMsZUFBZTtZQUNwQlAsT0FBT1EsS0FBSyxHQUFHQyxPQUFPQyxVQUFVO1lBQ2hDVixPQUFPVyxNQUFNLEdBQUdGLE9BQU9HLFdBQVc7UUFDbkM7UUFFQSxNQUFNQyxpQkFBaUIsSUFBaUI7Z0JBQ3ZDQyxHQUFHQyxLQUFLQyxNQUFNLEtBQUtoQixPQUFPUSxLQUFLO2dCQUMvQlMsR0FBRztnQkFDSEMsT0FBTyxNQUFNSCxLQUFLQyxNQUFNLEtBQUs7Z0JBQzdCRyxPQUFPSixLQUFLQyxNQUFNLEtBQUssTUFBTSxNQUFNO2dCQUNuQ0ksTUFBTSxLQUFLTCxLQUFLQyxNQUFNLEtBQUs7Z0JBQzNCSyxTQUFTLE1BQU1OLEtBQUtDLE1BQU0sS0FBSztZQUNoQztRQUVBLE1BQU1NLGdCQUFnQjtZQUNyQixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSWxCLGVBQWVrQixJQUFLO2dCQUN2Q25CLFVBQVVvQixJQUFJLENBQUNYO1lBQ2hCO1FBQ0Q7UUFFQSxNQUFNWSxlQUFlLENBQUNDO1lBQ3JCLElBQUksQ0FBQ3hCLEtBQUs7WUFFVkEsSUFBSXlCLElBQUksR0FBRyxHQUFpQixPQUFkRCxTQUFTTixJQUFJLEVBQUM7WUFDNUJsQixJQUFJMEIsU0FBUyxHQUFHdEI7WUFDaEJKLElBQUkyQixXQUFXLEdBQUdILFNBQVNMLE9BQU87WUFDbENuQixJQUFJNEIsUUFBUSxDQUFDSixTQUFTUCxLQUFLLEVBQUVPLFNBQVNaLENBQUMsRUFBRVksU0FBU1QsQ0FBQztRQUNwRDtRQUVBLE1BQU1jLGlCQUFpQixDQUFDTDtZQUN2QkEsU0FBU1QsQ0FBQyxJQUFJUyxTQUFTUixLQUFLO1lBRTVCLElBQUlwQixlQUFlO2dCQUNsQixNQUFNa0MsS0FBS04sU0FBU1osQ0FBQyxHQUFHaEIsY0FBY2dCLENBQUM7Z0JBQ3ZDLE1BQU1tQixLQUFLUCxTQUFTVCxDQUFDLEdBQUduQixjQUFjbUIsQ0FBQztnQkFDdkMsTUFBTWlCLFdBQVduQixLQUFLb0IsSUFBSSxDQUFDSCxLQUFLQSxLQUFLQyxLQUFLQTtnQkFFMUMsSUFBSUMsV0FBVyxLQUFLO29CQUNuQixNQUFNRSxRQUFRckIsS0FBS3NCLEtBQUssQ0FBQ0osSUFBSUQ7b0JBQzdCLE1BQU1NLFFBQVEsQ0FBQyxNQUFNSixRQUFPLElBQUs7b0JBQ2pDUixTQUFTWixDQUFDLElBQUlDLEtBQUt3QixHQUFHLENBQUNILFNBQVNFLFFBQVE7b0JBQ3hDWixTQUFTVCxDQUFDLElBQUlGLEtBQUt5QixHQUFHLENBQUNKLFNBQVNFLFFBQVE7Z0JBQ3pDO1lBQ0Q7WUFFQSxJQUFJWixTQUFTVCxDQUFDLEdBQUdqQixPQUFPVyxNQUFNLEVBQUU7Z0JBQy9CZSxTQUFTVCxDQUFDLEdBQUc7Z0JBQ2JTLFNBQVNaLENBQUMsR0FBR0MsS0FBS0MsTUFBTSxLQUFLaEIsT0FBT1EsS0FBSztZQUMxQztZQUNBLElBQUlrQixTQUFTWixDQUFDLEdBQUcsR0FBR1ksU0FBU1osQ0FBQyxHQUFHO1lBQ2pDLElBQUlZLFNBQVNaLENBQUMsR0FBR2QsT0FBT1EsS0FBSyxFQUFFa0IsU0FBU1osQ0FBQyxHQUFHZCxPQUFPUSxLQUFLO1FBQ3pEO1FBRUEsTUFBTWlDLFVBQVU7WUFDZnZDLElBQUkwQixTQUFTLEdBQUc7WUFDaEIxQixJQUFJd0MsUUFBUSxDQUFDLEdBQUcsR0FBRzFDLE9BQU9RLEtBQUssRUFBRVIsT0FBT1csTUFBTTtZQUU5Q1AsVUFBVXVDLE9BQU8sQ0FBQyxDQUFDakI7Z0JBQ2xCSyxlQUFlTDtnQkFDZkQsYUFBYUM7WUFDZDtZQUVBa0Isc0JBQXNCSDtRQUN2QjtRQUVBLE1BQU1JLGtCQUFrQixDQUFDQztZQUN4Qi9DLGlCQUFpQjtnQkFBRWUsR0FBR2dDLE1BQU1DLE9BQU87Z0JBQUU5QixHQUFHNkIsTUFBTUUsT0FBTztZQUFDO1FBQ3ZEO1FBRUF6QztRQUNBZTtRQUNBbUI7UUFFQWhDLE9BQU93QyxnQkFBZ0IsQ0FBQyxhQUFhSjtRQUNyQ3BDLE9BQU93QyxnQkFBZ0IsQ0FBQyxVQUFVMUM7UUFFbEMsT0FBTztZQUNORSxPQUFPeUMsbUJBQW1CLENBQUMsYUFBYUw7WUFDeENwQyxPQUFPeUMsbUJBQW1CLENBQUMsVUFBVTNDO1FBQ3RDO0lBQ0QsR0FBRyxFQUFFO0lBRUwscUJBQU8sOERBQUNQO1FBQU9tRCxLQUFLdEQ7UUFBV3VELFdBQVU7Ozs7OztBQUMxQztHQXJHTXhEO0tBQUFBO0FBdUdOLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXRyaXhCYWNrZ3JvdW5kLnRzeD8yYWFkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBQYXJ0aWNsZSB7XG5cdHg6IG51bWJlcjtcblx0eTogbnVtYmVyO1xuXHRzcGVlZDogbnVtYmVyO1xuXHR2YWx1ZTogc3RyaW5nO1xuXHRzaXplOiBudW1iZXI7XG5cdG9wYWNpdHk6IG51bWJlcjtcbn1cblxuY29uc3QgTWF0cml4QmFja2dyb3VuZDogUmVhY3QuRkMgPSAoKSA9PiB7XG5cdGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudD4obnVsbCk7XG5cdGNvbnN0IFttb3VzZVBvc2l0aW9uLCBzZXRNb3VzZVBvc2l0aW9uXSA9IHVzZVN0YXRlPHtcblx0XHR4OiBudW1iZXI7XG5cdFx0eTogbnVtYmVyO1xuXHR9IHwgbnVsbD4obnVsbCk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcblx0XHRpZiAoIWNhbnZhcykgcmV0dXJuO1xuXG5cdFx0Y29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblx0XHRpZiAoIWN0eCkgcmV0dXJuO1xuXG5cdFx0Y29uc3QgcGFydGljbGVzOiBQYXJ0aWNsZVtdID0gW107XG5cdFx0Y29uc3QgcGFydGljbGVDb3VudCA9IDIwO1xuXHRcdGNvbnN0IHRleHRDb2xvciA9IFwicmdiYSgwLCAyNTUsIDAsIDAuNylcIjtcblxuXHRcdGNvbnN0IHJlc2l6ZUNhbnZhcyA9ICgpID0+IHtcblx0XHRcdGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXHRcdFx0Y2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblx0XHR9O1xuXG5cdFx0Y29uc3QgY3JlYXRlUGFydGljbGUgPSAoKTogUGFydGljbGUgPT4gKHtcblx0XHRcdHg6IE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGgsXG5cdFx0XHR5OiAwLFxuXHRcdFx0c3BlZWQ6IDAuNSArIE1hdGgucmFuZG9tKCkgKiAxLjUsXG5cdFx0XHR2YWx1ZTogTWF0aC5yYW5kb20oKSA8IDAuNSA/IFwiMFwiIDogXCIxXCIsXG5cdFx0XHRzaXplOiAxMCArIE1hdGgucmFuZG9tKCkgKiAyMCxcblx0XHRcdG9wYWNpdHk6IDAuOSArIE1hdGgucmFuZG9tKCkgKiAwLjksXG5cdFx0fSk7XG5cblx0XHRjb25zdCBpbml0UGFydGljbGVzID0gKCkgPT4ge1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0aWNsZUNvdW50OyBpKyspIHtcblx0XHRcdFx0cGFydGljbGVzLnB1c2goY3JlYXRlUGFydGljbGUoKSk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGNvbnN0IGRyYXdQYXJ0aWNsZSA9IChwYXJ0aWNsZTogUGFydGljbGUpID0+IHtcblx0XHRcdGlmICghY3R4KSByZXR1cm47XG5cblx0XHRcdGN0eC5mb250ID0gYCR7cGFydGljbGUuc2l6ZX1weCBtb25vc3BhY2VgO1xuXHRcdFx0Y3R4LmZpbGxTdHlsZSA9IHRleHRDb2xvcjtcblx0XHRcdGN0eC5nbG9iYWxBbHBoYSA9IHBhcnRpY2xlLm9wYWNpdHk7XG5cdFx0XHRjdHguZmlsbFRleHQocGFydGljbGUudmFsdWUsIHBhcnRpY2xlLngsIHBhcnRpY2xlLnkpO1xuXHRcdH07XG5cblx0XHRjb25zdCB1cGRhdGVQYXJ0aWNsZSA9IChwYXJ0aWNsZTogUGFydGljbGUpID0+IHtcblx0XHRcdHBhcnRpY2xlLnkgKz0gcGFydGljbGUuc3BlZWQ7XG5cblx0XHRcdGlmIChtb3VzZVBvc2l0aW9uKSB7XG5cdFx0XHRcdGNvbnN0IGR4ID0gcGFydGljbGUueCAtIG1vdXNlUG9zaXRpb24ueDtcblx0XHRcdFx0Y29uc3QgZHkgPSBwYXJ0aWNsZS55IC0gbW91c2VQb3NpdGlvbi55O1xuXHRcdFx0XHRjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG5cblx0XHRcdFx0aWYgKGRpc3RhbmNlIDwgMTAwKSB7XG5cdFx0XHRcdFx0Y29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKGR5LCBkeCk7XG5cdFx0XHRcdFx0Y29uc3QgZm9yY2UgPSAoMTAwIC0gZGlzdGFuY2UpIC8gMTAwO1xuXHRcdFx0XHRcdHBhcnRpY2xlLnggKz0gTWF0aC5jb3MoYW5nbGUpICogZm9yY2UgKiA1O1xuXHRcdFx0XHRcdHBhcnRpY2xlLnkgKz0gTWF0aC5zaW4oYW5nbGUpICogZm9yY2UgKiA1O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChwYXJ0aWNsZS55ID4gY2FudmFzLmhlaWdodCkge1xuXHRcdFx0XHRwYXJ0aWNsZS55ID0gMDtcblx0XHRcdFx0cGFydGljbGUueCA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGg7XG5cdFx0XHR9XG5cdFx0XHRpZiAocGFydGljbGUueCA8IDApIHBhcnRpY2xlLnggPSAwO1xuXHRcdFx0aWYgKHBhcnRpY2xlLnggPiBjYW52YXMud2lkdGgpIHBhcnRpY2xlLnggPSBjYW52YXMud2lkdGg7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XG5cdFx0XHRjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsIDAsIDAsIDAuMDUpXCI7XG5cdFx0XHRjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuXHRcdFx0cGFydGljbGVzLmZvckVhY2goKHBhcnRpY2xlKSA9PiB7XG5cdFx0XHRcdHVwZGF0ZVBhcnRpY2xlKHBhcnRpY2xlKTtcblx0XHRcdFx0ZHJhd1BhcnRpY2xlKHBhcnRpY2xlKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuXHRcdFx0c2V0TW91c2VQb3NpdGlvbih7IHg6IGV2ZW50LmNsaWVudFgsIHk6IGV2ZW50LmNsaWVudFkgfSk7XG5cdFx0fTtcblxuXHRcdHJlc2l6ZUNhbnZhcygpO1xuXHRcdGluaXRQYXJ0aWNsZXMoKTtcblx0XHRhbmltYXRlKCk7XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3VzZU1vdmUpO1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlc2l6ZUNhbnZhcyk7XG5cblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlTW91c2VNb3ZlKTtcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlc2l6ZUNhbnZhcyk7XG5cdFx0fTtcblx0fSwgW10pO1xuXG5cdHJldHVybiA8Y2FudmFzIHJlZj17Y2FudmFzUmVmfSBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHctZnVsbCBoLWZ1bGxcIiAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hdHJpeEJhY2tncm91bmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIk1hdHJpeEJhY2tncm91bmQiLCJjYW52YXNSZWYiLCJtb3VzZVBvc2l0aW9uIiwic2V0TW91c2VQb3NpdGlvbiIsImNhbnZhcyIsImN1cnJlbnQiLCJjdHgiLCJnZXRDb250ZXh0IiwicGFydGljbGVzIiwicGFydGljbGVDb3VudCIsInRleHRDb2xvciIsInJlc2l6ZUNhbnZhcyIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiY3JlYXRlUGFydGljbGUiLCJ4IiwiTWF0aCIsInJhbmRvbSIsInkiLCJzcGVlZCIsInZhbHVlIiwic2l6ZSIsIm9wYWNpdHkiLCJpbml0UGFydGljbGVzIiwiaSIsInB1c2giLCJkcmF3UGFydGljbGUiLCJwYXJ0aWNsZSIsImZvbnQiLCJmaWxsU3R5bGUiLCJnbG9iYWxBbHBoYSIsImZpbGxUZXh0IiwidXBkYXRlUGFydGljbGUiLCJkeCIsImR5IiwiZGlzdGFuY2UiLCJzcXJ0IiwiYW5nbGUiLCJhdGFuMiIsImZvcmNlIiwiY29zIiwic2luIiwiYW5pbWF0ZSIsImZpbGxSZWN0IiwiZm9yRWFjaCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImhhbmRsZU1vdXNlTW92ZSIsImV2ZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlZiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/MatrixBackground.tsx\n"));

/***/ })

});