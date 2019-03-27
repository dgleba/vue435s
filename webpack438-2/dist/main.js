/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/alert-box/alert-box.js":
/*!************************************!*\
  !*** ./src/alert-box/alert-box.js ***!
  \************************************/
/*! exports provided: AlertBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AlertBox\", function() { return AlertBox; });\n// Says Hello to the user when clicked!\n\n/**\n * This format uses the ES2015/ES6 class. \n * \n * You define an export before 'class' and you then import \n * it by referencing the path of this file and then referring it\n * with curly braces:\n * \n * import { AlertBox } from './alert-box/alert-box;\n * \n * Note that AlertBox is the same name as your class!\n * \n */\nclass AlertBox {\n    sayHi() {\n        alert(\"Hello 😊\");\n    }\n}\n\n//# sourceURL=webpack:///./src/alert-box/alert-box.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _alert_box_alert_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert-box/alert-box */ \"./src/alert-box/alert-box.js\");\n/* harmony import */ var _write_text_write_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./write-text/write-text */ \"./src/write-text/write-text.js\");\n/* harmony import */ var _write_text_write_text__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_write_text_write_text__WEBPACK_IMPORTED_MODULE_1__);\n/**\n * This is your main index.js file. Where webpack reads the file. I'm currently using\n * Webpack 4, and it doesn't require a webpack.config.js file for basic setup. \n * \n * In this file, I'm calling 2 different type of objects. One is a Es2015 Class type, and the\n * other one is a function defined using module.exports\n * \n * Investigate more about how Es2015/ES6 classes work to see how to better use them. \n * \n * Basically the magic happens in the bottom, where docum\n */\n\n\n\n\n// ES2015 imports. Since it's a class name we can import it through curly\n// brackets.\n\n\n\n// This also works\n// const writeText = require('./write-text/write-text.js');\n\n// Since it's a class, we need to instantiate it before we can use it.\nconst alertUser = new _alert_box_alert_box__WEBPACK_IMPORTED_MODULE_0__[\"AlertBox\"]();\n\n\n/**\n * This is where the magic happens.\n * document.addEventListener('DOMContentLoaded') will allow us to wait for the \n * whole document to be loaded and then we will be able to fetch for the elements \n * and attach an event listener to each one of them. \n * \n * We do it this way, because Webpack scopes and changes the class names. Inspect the \n * /dist/main.js file to see what I'm talking about. This is good, since it won't pollute\n * the global scope (Which in bigger projects has been the culprit of many bugs and problems)\n * \n */\ndocument.addEventListener('DOMContentLoaded', () => {\n\n    /**\n     * How to use Event Listeners:\n     * \n     * It requires 2 steps:\n     * 1) We fetch the object. We need to retrieve the object from the DOM by using a document retriever. \n     * \n     * These methods are: \n     * document.getElementById()\n     * document.querySelector() -- Similar to jQuery\n     * document.querySelectorAll()\n     * document.getElementsByClassName()\n     * document.getElementsByName()\n     * document.getElementsByTagName()\n     * document.getElementsByTagNameNS()\n     * \n     * There are more advance uses of these \"retrievers\", but let's keep it simple. \n     * \n     * 2) We attach the event listener:\n     * We need to store the retrieved element in a variable (recommended).\n     * \n     * const element = document.querySelector('button');\n     * \n     * Then we attach the event listener:\n     * element.addEventListener('click', myFunction);\n     * \n     * Whereas myFunction is the function (without parenthesis!! Otherwise it executes it!!) that\n     * you want to call. \n     * \n     * See this as the equivalent of:\n     * <button click=\"myFunction()\">My Button</button>\n     * \n     * You can see the event listener list in the panel at the left in MDN:\n     * https://developer.mozilla.org/en-US/docs/Web/API/EventListener\n     * \n     */\n\n\n    const alertButton = document.getElementById('js-button');\n    alertButton.addEventListener('click', alertUser.sayHi);\n\n    const pTagButton = document.getElementById('js-write-text-button');\n    const pTag = document.querySelector('p');\n    /**\n     * This is another variation. We create an anonymous function (Search more about it online)\n     * and we call the function. \n     */\n    pTagButton.addEventListener('click', () => {\n        _write_text_write_text__WEBPACK_IMPORTED_MODULE_1___default()(pTag)\n    });\n    \n    \n    \n    /**\n     * The approach below is cleaner, and it works! I also recommend it over the above method\n     * because it allows you to remove the event listener by doing \n     * pTagButton.removeEventListener('click', writeText). You can't do this via anonymous functions\n     */\n    // pTagButton.addEventListener('click', writeText.bind(this, pTag));\n    \n\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/write-text/write-text.js":
/*!**************************************!*\
  !*** ./src/write-text/write-text.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This will write text to a p tag using module.exports style:\n\n/**\n * We pass the actual <p></p> tag by searching it with \n * document.querySelector\n * @param {} p \n */\nmodule.exports = (p) => {\n    p.innerHTML = 'Hello! From hidden text ';\n}\n\n//# sourceURL=webpack:///./src/write-text/write-text.js?");

/***/ })

/******/ });