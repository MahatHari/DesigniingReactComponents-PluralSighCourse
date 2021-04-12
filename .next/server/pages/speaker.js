module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/speaker.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/speaker.jsx":
/*!***************************!*\
  !*** ./pages/speaker.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Footer/Footer */ \"./src/components/Footer/Footer.jsx\");\n/* harmony import */ var _src_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Header/Header */ \"./src/components/Header/Header.jsx\");\n/* harmony import */ var _src_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Menu/Menu */ \"./src/components/Menu/Menu.jsx\");\n/* harmony import */ var _src_components_Speaker_Speaker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Speaker/Speaker */ \"./src/components/Speaker/Speaker.jsx\");\n/* harmony import */ var _src_components_SpeakerSearchBar_SpeakerSearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/SpeakerSearchBar/SpeakerSearchBar */ \"./src/components/SpeakerSearchBar/SpeakerSearchBar.jsx\");\n\nvar _jsxFileName = \"/Users/harimahat/Desktop/Devlop/pluralsight/designingReactComponents/pages/speaker.jsx\";\n\n\n\n\n\n\nfunction Page() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_SpeakerSearchBar_SpeakerSearchBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Speaker_Speaker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zcGVha2VyLmpzeD8xYWI3Il0sIm5hbWVzIjpbIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLElBQVQsR0FBZ0I7QUFDZCxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLHFFQUFDLHlGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQUlFLHFFQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztBQUNjQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3NwZWFrZXIuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvb3RlciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgTWVudSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9NZW51L01lbnUnO1xuaW1wb3J0IFNwZWFrZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvU3BlYWtlci9TcGVha2VyJztcbmltcG9ydCBTcGVha2VyU2VhcmNoQmFyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJTZWFyY2hCYXIvU3BlYWtlclNlYXJjaEJhcic7XG5mdW5jdGlvbiBQYWdlKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8TWVudSAvPlxuICAgICAgPFNwZWFrZXJTZWFyY2hCYXIgLz5cbiAgICAgIDxTcGVha2VyIC8+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/speaker.jsx\n");

/***/ }),

/***/ "./src/components/Footer/Footer.jsx":
/*!******************************************!*\
  !*** ./src/components/Footer/Footer.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/harimahat/Desktop/Devlop/pluralsight/designingReactComponents/src/components/Footer/Footer.jsx\";\n\n\nfunction Footer() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: \"images/footer.png\",\n      alt: \"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzeD9iMzg3Il0sIm5hbWVzIjpbIkZvb3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLE1BQVQsR0FBa0I7QUFDaEIsc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLFNBQUcsRUFBQyxtQkFBVDtBQUE2QixTQUFHLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztBQUVjQSxxRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gRm9vdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aW1nIHNyYz0naW1hZ2VzL2Zvb3Rlci5wbmcnIGFsdD0nJyAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Footer/Footer.jsx\n");

/***/ }),

/***/ "./src/components/Header/Header.jsx":
/*!******************************************!*\
  !*** ./src/components/Header/Header.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/harimahat/Desktop/Devlop/pluralsight/designingReactComponents/src/components/Header/Header.jsx\";\n\n\nfunction Header() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: \"images/header.png\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzeD81ZTE3Il0sIm5hbWVzIjpbIkhlYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLE1BQVQsR0FBa0I7QUFDaEIsc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLFNBQUcsRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7QUFFY0EscUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGltZyBzcmM9J2ltYWdlcy9oZWFkZXIucG5nJz48L2ltZz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Header/Header.jsx\n");

/***/ }),

/***/ "./src/components/Menu/Menu.jsx":
/*!**************************************!*\
  !*** ./src/components/Menu/Menu.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/harimahat/Desktop/Devlop/pluralsight/designingReactComponents/src/components/Menu/Menu.jsx\";\n\n\nfunction Menu() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: \"images/menu.gif\",\n      alt: \"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZW51L01lbnUuanN4PzZhNzIiXSwibmFtZXMiOlsiTWVudSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLElBQVQsR0FBZ0I7QUFDZCxzQkFDRTtBQUFBLDJCQUNFO0FBQUssU0FBRyxFQUFDLGlCQUFUO0FBQTJCLFNBQUcsRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0FBRWNBLG1FQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTWVudS9NZW51LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIE1lbnUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxpbWcgc3JjPSdpbWFnZXMvbWVudS5naWYnIGFsdD0nJyAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Menu/Menu.jsx\n");

/***/ }),

/***/ "./src/components/Speaker/Speaker.jsx":
/*!********************************************!*\
  !*** ./src/components/Speaker/Speaker.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _withData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withData */ \"./src/components/Speaker/withData.js\");\n\nvar _jsxFileName = \"/Users/harimahat/Desktop/Devlop/pluralsight/designingReactComponents/src/components/Speaker/Speaker.jsx\";\n\n\n\nfunction Speakers({\n  speakers\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: speakers.map(speaker => {\n      const {\n        imageSrc,\n        name\n      } = speaker;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: `images/${imageSrc}.png`,\n        alt: name\n      }, name, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 16\n      }, this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\nconst maxSpeakersToShow = 2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_withData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(maxSpeakersToShow)(Speakers));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TcGVha2VyL1NwZWFrZXIuanN4PzI2Y2QiXSwibmFtZXMiOlsiU3BlYWtlcnMiLCJzcGVha2VycyIsIm1hcCIsInNwZWFrZXIiLCJpbWFnZVNyYyIsIm5hbWUiLCJtYXhTcGVha2Vyc1RvU2hvdyIsIndpdGhEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxDQUFrQjtBQUFFQztBQUFGLENBQWxCLEVBQWdDO0FBQzlCLHNCQUNFO0FBQUEsY0FDR0EsUUFBUSxDQUFDQyxHQUFULENBQWNDLE9BQUQsSUFBYTtBQUN6QixZQUFNO0FBQUVDLGdCQUFGO0FBQVlDO0FBQVosVUFBcUJGLE9BQTNCO0FBQ0EsMEJBQU87QUFBSyxXQUFHLEVBQUcsVUFBU0MsUUFBUyxNQUE3QjtBQUFvQyxXQUFHLEVBQUVDO0FBQXpDLFNBQW9EQSxJQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFDRCxLQUhBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQ7O0FBQ0QsTUFBTUMsaUJBQWlCLEdBQUcsQ0FBMUI7QUFDZUMsd0hBQVEsQ0FBQ0QsaUJBQUQsQ0FBUixDQUE0Qk4sUUFBNUIsQ0FBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1NwZWFrZXIvU3BlYWtlci5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhEYXRhIGZyb20gJy4vd2l0aERhdGEnO1xuXG5mdW5jdGlvbiBTcGVha2Vycyh7IHNwZWFrZXJzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge3NwZWFrZXJzLm1hcCgoc3BlYWtlcikgPT4ge1xuICAgICAgICBjb25zdCB7IGltYWdlU3JjLCBuYW1lIH0gPSBzcGVha2VyO1xuICAgICAgICByZXR1cm4gPGltZyBzcmM9e2BpbWFnZXMvJHtpbWFnZVNyY30ucG5nYH0gYWx0PXtuYW1lfSBrZXk9e25hbWV9IC8+O1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5jb25zdCBtYXhTcGVha2Vyc1RvU2hvdyA9IDI7XG5leHBvcnQgZGVmYXVsdCB3aXRoRGF0YShtYXhTcGVha2Vyc1RvU2hvdykoU3BlYWtlcnMpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Speaker/Speaker.jsx\n");

/***/ }),

/***/ "./src/components/Speaker/withData.js":
/*!********************************************!*\
  !*** ./src/components/Speaker/withData.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/harimahat/Desktop/Devlop/pluralsight/designingReactComponents/src/components/Speaker/withData.js\";\n\n// Creating a high orderr component (high order function) that takes a component and returns a component with data\n\n/* function withData(maxSpeakerToShow) {\n  return function (Component) {\n    const speakers = [\n      {\n        imageSrc: 'speaker-component-1124',\n        name: 'Mr A',\n      },\n      {\n        imageSrc: 'speaker-component-1530',\n        name: 'Mr B',\n      },\n      {\n        imageSrc: 'speaker-component-10803',\n        name: 'Mr C',\n      },\n    ];\n    return function () {\n      const limistSpeakers = speakers.slice(0, maxSpeakerToShow);\n      return <Component speakers={limistSpeakers}></Component>;\n    };\n  };\n} */\n// Shortned Version of above code, Lambda variation with arrow functions\nconst withData = maxSpeakerToShow => Component => {\n  const speakers = [{\n    imageSrc: 'speaker-component-1124',\n    name: 'Mr A'\n  }, {\n    imageSrc: 'speaker-component-1530',\n    name: 'Mr B'\n  }, {\n    imageSrc: 'speaker-component-10803',\n    name: 'Mr C'\n  }];\n  return () => {\n    const limistSpeakers = speakers.slice(0, maxSpeakerToShow);\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, {\n      speakers: limistSpeakers\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 12\n    }, undefined);\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (withData);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TcGVha2VyL3dpdGhEYXRhLmpzPzRhYzciXSwibmFtZXMiOlsid2l0aERhdGEiLCJtYXhTcGVha2VyVG9TaG93IiwiQ29tcG9uZW50Iiwic3BlYWtlcnMiLCJpbWFnZVNyYyIsIm5hbWUiLCJsaW1pc3RTcGVha2VycyIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsTUFBTUEsUUFBUSxHQUFJQyxnQkFBRCxJQUF1QkMsU0FBRCxJQUFlO0FBQ3BELFFBQU1DLFFBQVEsR0FBRyxDQUNmO0FBQ0VDLFlBQVEsRUFBRSx3QkFEWjtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQURlLEVBS2Y7QUFDRUQsWUFBUSxFQUFFLHdCQURaO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBTGUsRUFTZjtBQUNFRCxZQUFRLEVBQUUseUJBRFo7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FUZSxDQUFqQjtBQWNBLFNBQU8sTUFBTTtBQUNYLFVBQU1DLGNBQWMsR0FBR0gsUUFBUSxDQUFDSSxLQUFULENBQWUsQ0FBZixFQUFrQk4sZ0JBQWxCLENBQXZCO0FBQ0Esd0JBQU8scUVBQUMsU0FBRDtBQUFXLGNBQVEsRUFBRUs7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNELEdBSEQ7QUFJRCxDQW5CRDs7QUFvQmVOLHVFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvU3BlYWtlci93aXRoRGF0YS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENyZWF0aW5nIGEgaGlnaCBvcmRlcnIgY29tcG9uZW50IChoaWdoIG9yZGVyIGZ1bmN0aW9uKSB0aGF0IHRha2VzIGEgY29tcG9uZW50IGFuZCByZXR1cm5zIGEgY29tcG9uZW50IHdpdGggZGF0YVxuLyogZnVuY3Rpb24gd2l0aERhdGEobWF4U3BlYWtlclRvU2hvdykge1xuICByZXR1cm4gZnVuY3Rpb24gKENvbXBvbmVudCkge1xuICAgIGNvbnN0IHNwZWFrZXJzID0gW1xuICAgICAge1xuICAgICAgICBpbWFnZVNyYzogJ3NwZWFrZXItY29tcG9uZW50LTExMjQnLFxuICAgICAgICBuYW1lOiAnTXIgQScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbWFnZVNyYzogJ3NwZWFrZXItY29tcG9uZW50LTE1MzAnLFxuICAgICAgICBuYW1lOiAnTXIgQicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbWFnZVNyYzogJ3NwZWFrZXItY29tcG9uZW50LTEwODAzJyxcbiAgICAgICAgbmFtZTogJ01yIEMnLFxuICAgICAgfSxcbiAgICBdO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBsaW1pc3RTcGVha2VycyA9IHNwZWFrZXJzLnNsaWNlKDAsIG1heFNwZWFrZXJUb1Nob3cpO1xuICAgICAgcmV0dXJuIDxDb21wb25lbnQgc3BlYWtlcnM9e2xpbWlzdFNwZWFrZXJzfT48L0NvbXBvbmVudD47XG4gICAgfTtcbiAgfTtcbn0gKi9cblxuLy8gU2hvcnRuZWQgVmVyc2lvbiBvZiBhYm92ZSBjb2RlLCBMYW1iZGEgdmFyaWF0aW9uIHdpdGggYXJyb3cgZnVuY3Rpb25zXG5cbmNvbnN0IHdpdGhEYXRhID0gKG1heFNwZWFrZXJUb1Nob3cpID0+IChDb21wb25lbnQpID0+IHtcbiAgY29uc3Qgc3BlYWtlcnMgPSBbXG4gICAge1xuICAgICAgaW1hZ2VTcmM6ICdzcGVha2VyLWNvbXBvbmVudC0xMTI0JyxcbiAgICAgIG5hbWU6ICdNciBBJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGltYWdlU3JjOiAnc3BlYWtlci1jb21wb25lbnQtMTUzMCcsXG4gICAgICBuYW1lOiAnTXIgQicsXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWFnZVNyYzogJ3NwZWFrZXItY29tcG9uZW50LTEwODAzJyxcbiAgICAgIG5hbWU6ICdNciBDJyxcbiAgICB9LFxuICBdO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGNvbnN0IGxpbWlzdFNwZWFrZXJzID0gc3BlYWtlcnMuc2xpY2UoMCwgbWF4U3BlYWtlclRvU2hvdyk7XG4gICAgcmV0dXJuIDxDb21wb25lbnQgc3BlYWtlcnM9e2xpbWlzdFNwZWFrZXJzfT48L0NvbXBvbmVudD47XG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgd2l0aERhdGE7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Speaker/withData.js\n");

/***/ }),

/***/ "./src/components/SpeakerSearchBar/SpeakerSearchBar.jsx":
/*!**************************************************************!*\
  !*** ./src/components/SpeakerSearchBar/SpeakerSearchBar.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/harimahat/Desktop/Devlop/pluralsight/designingReactComponents/src/components/SpeakerSearchBar/SpeakerSearchBar.jsx\";\n\n\nfunction SpeakerSearchBar() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: \"images/searchbar.gif\",\n      alt: \"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakerSearchBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TcGVha2VyU2VhcmNoQmFyL1NwZWFrZXJTZWFyY2hCYXIuanN4PzhiOTYiXSwibmFtZXMiOlsiU3BlYWtlclNlYXJjaEJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLGdCQUFULEdBQTRCO0FBQzFCLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxTQUFHLEVBQUMsc0JBQVQ7QUFBZ0MsU0FBRyxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7QUFFY0EsK0VBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2VyU2VhcmNoQmFyL1NwZWFrZXJTZWFyY2hCYXIuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gU3BlYWtlclNlYXJjaEJhcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGltZyBzcmM9J2ltYWdlcy9zZWFyY2hiYXIuZ2lmJyBhbHQ9JycgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlclNlYXJjaEJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SpeakerSearchBar/SpeakerSearchBar.jsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });