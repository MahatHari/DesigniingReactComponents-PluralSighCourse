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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Footer/Footer */ \"./src/components/Footer/Footer.jsx\");\n/* harmony import */ var _src_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Header/Header */ \"./src/components/Header/Header.jsx\");\n/* harmony import */ var _src_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Menu/Menu */ \"./src/components/Menu/Menu.jsx\");\n/* harmony import */ var _src_components_Speaker_SpeakerV3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Speaker/SpeakerV3 */ \"./src/components/Speaker/SpeakerV3.jsx\");\n/* harmony import */ var _src_components_SpeakerSearchBar_SpeakerSearchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/SpeakerSearchBar/SpeakerSearchBar */ \"./src/components/SpeakerSearchBar/SpeakerSearchBar.jsx\");\n/* harmony import */ var _src_components_Speaker_SpeakerContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/Speaker/SpeakerContext */ \"./src/components/Speaker/SpeakerContext.js\");\n\nvar _jsxFileName = \"/Users/harimahat/Desktop/Devlop/pluralsight/designingReactComponents/pages/speaker.jsx\";\n\n\n\n\n\n\n\n\nfunction Page() {\n  const speakers = [{\n    imageSrc: 'speaker-component-1124',\n    name: 'Mr A'\n  }, {\n    imageSrc: 'speaker-component-1530',\n    name: 'Mr B'\n  }, {\n    imageSrc: 'speaker-component-10803',\n    name: 'Mr C'\n  }];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Speaker_SpeakerContext__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Provider, {\n      value: speakers,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_SpeakerSearchBar_SpeakerSearchBar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Speaker_SpeakerV3__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zcGVha2VyLmpzeD8xYWI3Il0sIm5hbWVzIjpbIlBhZ2UiLCJzcGVha2VycyIsImltYWdlU3JjIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsR0FBZ0I7QUFDZCxRQUFNQyxRQUFRLEdBQUcsQ0FDZjtBQUNFQyxZQUFRLEVBQUUsd0JBRFo7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FEZSxFQUtmO0FBQ0VELFlBQVEsRUFBRSx3QkFEWjtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQUxlLEVBU2Y7QUFDRUQsWUFBUSxFQUFFLHlCQURaO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBVGUsQ0FBakI7QUFjQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLHFFQUFDLDhFQUFELENBQWdCLFFBQWhCO0FBQXlCLFdBQUssRUFBRUYsUUFBaEM7QUFBQSw4QkFDRSxxRUFBQyx5RkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSxxRUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFPRSxxRUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFXRDs7QUFDY0QsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9zcGVha2VyLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyJztcbmltcG9ydCBNZW51IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL01lbnUvTWVudSc7XG5pbXBvcnQgU3BlYWtlclYzIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1NwZWFrZXIvU3BlYWtlclYzJztcbmltcG9ydCBTcGVha2VyU2VhcmNoQmFyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJTZWFyY2hCYXIvU3BlYWtlclNlYXJjaEJhcic7XG5pbXBvcnQgU3BlYWtlckNvbnRleHQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvU3BlYWtlci9TcGVha2VyQ29udGV4dCc7XG5cbmZ1bmN0aW9uIFBhZ2UoKSB7XG4gIGNvbnN0IHNwZWFrZXJzID0gW1xuICAgIHtcbiAgICAgIGltYWdlU3JjOiAnc3BlYWtlci1jb21wb25lbnQtMTEyNCcsXG4gICAgICBuYW1lOiAnTXIgQScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWFnZVNyYzogJ3NwZWFrZXItY29tcG9uZW50LTE1MzAnLFxuICAgICAgbmFtZTogJ01yIEInLFxuICAgIH0sXG4gICAge1xuICAgICAgaW1hZ2VTcmM6ICdzcGVha2VyLWNvbXBvbmVudC0xMDgwMycsXG4gICAgICBuYW1lOiAnTXIgQycsXG4gICAgfSxcbiAgXTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPE1lbnUgLz5cbiAgICAgIDxTcGVha2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3BlYWtlcnN9PlxuICAgICAgICA8U3BlYWtlclNlYXJjaEJhciAvPlxuICAgICAgICA8U3BlYWtlclYzIC8+XG4gICAgICA8L1NwZWFrZXJDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/speaker.jsx\n");

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

/***/ "./src/components/Speaker/SpeakerContext.js":
/*!**************************************************!*\
  !*** ./src/components/Speaker/SpeakerContext.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst SpeakerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])({});\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakerContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TcGVha2VyL1NwZWFrZXJDb250ZXh0LmpzPzM0ZmEiXSwibmFtZXMiOlsiU3BlYWtlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLGNBQWMsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUFwQztBQUNlRCw2RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1NwZWFrZXIvU3BlYWtlckNvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTcGVha2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xuZXhwb3J0IGRlZmF1bHQgU3BlYWtlckNvbnRleHQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Speaker/SpeakerContext.js\n");

/***/ }),

/***/ "./src/components/Speaker/SpeakerV3.jsx":
/*!**********************************************!*\
  !*** ./src/components/Speaker/SpeakerV3.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SpeakerContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpeakerContext */ \"./src/components/Speaker/SpeakerContext.js\");\n\nvar _jsxFileName = \"/Users/harimahat/Desktop/Devlop/pluralsight/designingReactComponents/src/components/Speaker/SpeakerV3.jsx\";\n\n\n\nfunction SpeakerV3() {\n  const speakers = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_SpeakerContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: speakers.map(({\n      imageSrc,\n      name\n    }) => {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: `/images/${imageSrc}.png`,\n        alt: name\n      }, name, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 16\n      }, this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakerV3);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TcGVha2VyL1NwZWFrZXJWMy5qc3g/MTc5NSJdLCJuYW1lcyI6WyJTcGVha2VyVjMiLCJzcGVha2VycyIsInVzZUNvbnRleHQiLCJTcGVha2VyQ29udGV4dCIsIm1hcCIsImltYWdlU3JjIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFNBQVQsR0FBcUI7QUFDbkIsUUFBTUMsUUFBUSxHQUFHQyx3REFBVSxDQUFDQyx1REFBRCxDQUEzQjtBQUNBLHNCQUNFO0FBQUEsY0FDR0YsUUFBUSxDQUFDRyxHQUFULENBQWEsQ0FBQztBQUFFQyxjQUFGO0FBQVlDO0FBQVosS0FBRCxLQUF3QjtBQUNwQywwQkFBTztBQUFLLFdBQUcsRUFBRyxXQUFVRCxRQUFTLE1BQTlCO0FBQXFDLFdBQUcsRUFBRUM7QUFBMUMsU0FBcURBLElBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBUDtBQUNELEtBRkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRDs7QUFFY04sd0VBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2VyL1NwZWFrZXJWMy5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTcGVha2VyQ29udGV4dCBmcm9tICcuL1NwZWFrZXJDb250ZXh0JztcblxuZnVuY3Rpb24gU3BlYWtlclYzKCkge1xuICBjb25zdCBzcGVha2VycyA9IHVzZUNvbnRleHQoU3BlYWtlckNvbnRleHQpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7c3BlYWtlcnMubWFwKCh7IGltYWdlU3JjLCBuYW1lIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIDxpbWcgc3JjPXtgL2ltYWdlcy8ke2ltYWdlU3JjfS5wbmdgfSBhbHQ9e25hbWV9IGtleT17bmFtZX0gLz47XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlclYzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Speaker/SpeakerV3.jsx\n");

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