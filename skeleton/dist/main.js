/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup.js */ \"./src/warmup.js\");\n\n\nclass Clock {\n    constructor() {\n        // 1. Create a Date object.\n        const currentTime = new Date();\n\n        // 2. Store the hour, minute, and second.\n        this.hours = currentTime.getHours();\n        this.minutes = currentTime.getMinutes();\n        this.seconds = currentTime.getSeconds();\n\n        // 3. Call printTime.\n        //this.printTime();\n        (0,_warmup_js__WEBPACK_IMPORTED_MODULE_0__.htmlGenerator)(this.printTime(), clockElement);\n\n        // 4. Schedule the tick at 1 second intervals.\n        setInterval(this._tick.bind(this), 1000);\n    }\n\n    printTime() {\n        // Format the time in HH:MM:SS\n        const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\n\n        // Use console.log to print it.\n        //console.log(timeString);\n        return timeString;\n    }\n\n    _tick() {\n        // 1. Increment the time by one second.\n        this._incrementSeconds();\n\n        // 2. Call printTime.\n        (0,_warmup_js__WEBPACK_IMPORTED_MODULE_0__.htmlGenerator)(this.printTime(), clockElement);\n    }\n\n    _incrementSeconds() {\n        // 1. Increment the time by one second.\n        this.seconds += 1;\n        if (this.seconds === 60) {\n            this.seconds = 0;\n            this._incrementMinutes();\n        }\n    }\n\n    _incrementMinutes() {\n        this.minutes += 1;\n        if (this.minutes === 60) {\n            this.minutes = 0;\n            this._incrementHours();\n        }\n    }\n\n    _incrementHours() {\n        this.hours = (this.hours + 1) % 24;\n    }\n}\nconst clockElement = document.getElementById('clock');\nconst clock = new Clock();\n\n\n\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

eval("\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\n\nfunction dogLinkCreator(dogs) {\n  let dogLinks = [];\n  const dogNames = Object.keys(dogs);\n\n  for (let i = 0; i < dogNames.length; i++){\n    const aTag = document.createElement('a');\n    aTag.innerHTML = dogNames[i];\n    aTag.href = dogs[dogNames[i]];\n    const liTag = document.createElement('li');\n    liTag.classList = 'dog-link';\n    liTag.append(aTag);\n    dogLinks.push(liTag);\n  }\n  return dogLinks;\n}\n\nfunction attachDogLinks() {\n  const dogLinks = dogLinkCreator(dogs);\n  const ul = document.querySelector(\".drop-down-dog-list\");\n  dogLinks.forEach ( function(li, idx) {\n    ul.append(li);\n  });\n}\n\n\nattachDogLinks();\n\nfunction handleEnter() {\n  const dogLinks = document.querySelectorAll('.dog-link');\n  dogLinks.forEach(function(li, idx){\n    li.classList.add('open');\n  })\n}\n\nfunction handleLeave() {\n  const dogLinks = document.querySelectorAll('.dog-link');\n  dogLinks.forEach(function (li, idx) {\n    li.classList.remove('open');\n  })\n}\n\nconst nav = document.querySelector('.drop-down-dog-nav');\nnav.addEventListener(\"mouseenter\", handleEnter);\nnav.addEventListener(\"mouseleave\", handleLeave);\n\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock.js */ \"./src/clock.js\");\n/* harmony import */ var _drop_down_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down.js */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todo_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list.js */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _slide_scroll_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slide_scroll.js */ \"./src/slide_scroll.js\");\n/* harmony import */ var _slide_scroll_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_slide_scroll_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/slide_scroll.js":
/*!*****************************!*\
  !*** ./src/slide_scroll.js ***!
  \*****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

eval("function debounce(func, wait = 20, immediate = true) {\n  let timeout;\n\n  // This is the function that is actually executed when\n  // the DOM event is triggered.\n  return function executedFunction() {\n    // Store the context of this and any\n    // parameters passed to executedFunction\n    const context = this;\n    const args = arguments;\n\n    // The function to be called after debounce time has elapsed\n    const later = function () {\n      // null timeout to indicate the debounce ended\n      timeout = null;\n\n      // Call function now if you did not in the beginning\n      if (!immediate) func.apply(context, args);\n    };\n\n    // Determine if you should call the function\n    // on the leading or trail end\n    const callNow = immediate && !timeout;\n\n    // This will reset the waiting every function execution.\n    clearTimeout(timeout);\n\n    // Restart the debounce waiting period - returns true\n    timeout = setTimeout(later, wait);\n\n    // Call immediately if you're doing a leading end execution\n    if (callNow) func.apply(context, args);\n  };\n}\n\nconst images = document.querySelectorAll(\".slide\")\n\nfunction slideScroll (event) {\n\n}\n\nwindow.addEventListener(\"scroll\", debounce(function(){\n  console.log(\"heyo!\");\n}));\n\n//# sourceURL=webpack:///./src/slide_scroll.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

eval("const toDos = JSON.parse(localStorage.todos) || [];\nconst ul = document.querySelector('.todos');\nconst form = document.querySelector('.add-todo-form');\n\nfunction addTodo(event) {\n    event.preventDefault();\n    const input = form.children[0].value;\n    \n    const toDo = {\n        addToDo: input,\n        done: false \n    };\n\n    toDos.push(toDo);\n    form.children[0].value = \"\";\n\n    populateList(toDos);\n    localStorage.setItem('todos', JSON.stringify(toDos));\n}\n\nfunction populateList(todos) {\n    // debugger;\n    ul.innerHTML = todos.map(function(todo,i) {\n        return `\n        <li>\n            <input type=\"checkbox\" data-index=${i} ${todo.done ? \"checked\" : \"\"}> \n            <label for=\"item${i}\">${todo.addToDo} </label>\n        </li>`;\n    }).join(\"\");\n}\n\nfunction handleChecked(event) {\n    const itemClicked = event.target;\n    if (itemClicked.type !== \"checkbox\") {\n        return;\n    }\n    debugger;\n    // itemClicked.checked = !itemClicked.checked;\n\n// find that todo in the tod array, change it, then we send back to \n    const index = itemClicked.dataset.index\n\n    toDos[index].done = !toDos[index].done;\n    localStorage.setItem('todos', JSON.stringify(toDos));\n\n}\npopulateList(toDos);\nform.addEventListener(\"submit\", addTodo);\nul.addEventListener(\"click\", handleChecked);\n\n// itemClicked.checked = true;\n\n\n\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! namespace exports */
/*! export htmlGenerator [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"htmlGenerator\": () => /* binding */ htmlGenerator\n/* harmony export */ });\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n    const para = document.createElement('p');\n    para.innerHTML = string;\n    if (htmlElement.children.length > 0) {\n        htmlElement.children[0].remove();\n    }\n    htmlElement.append(para);\n\n};\n\nhtmlGenerator('Party Time.', partyHeader);\n\n// var para = document.createElement(\"p\");\n// var node = document.createTextNode(\"This is new.\");\n// para.appendChild(node);\n// htmlElemeent.append(para)\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;