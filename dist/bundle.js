/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://card-game/./styles.css?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./styles.css\");\n/* harmony import */ var _modules_selectLvlGameForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/selectLvlGameForm */ \"./modules/selectLvlGameForm.ts\");\n/* harmony import */ var _modules_getElementById__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getElementById */ \"./modules/getElementById.ts\");\n\n\n\n(0,_modules_selectLvlGameForm__WEBPACK_IMPORTED_MODULE_1__.renderStartForm)({ appEl: (0,_modules_getElementById__WEBPACK_IMPORTED_MODULE_2__.getElement)().appElement });\n\n\n//# sourceURL=webpack://card-game/./index.ts?");

/***/ }),

/***/ "./modules/funcGame.ts":
/*!*****************************!*\
  !*** ./modules/funcGame.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   startClick: () => (/* binding */ startClick),\n/* harmony export */   startHide: () => (/* binding */ startHide),\n/* harmony export */   waitStartTime: () => (/* binding */ waitStartTime)\n/* harmony export */ });\n/* harmony import */ var _getElementById__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getElementById */ \"./modules/getElementById.ts\");\n/* harmony import */ var _loseGameForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loseGameForm */ \"./modules/loseGameForm.ts\");\n/* harmony import */ var _winGameForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./winGameForm */ \"./modules/winGameForm.ts\");\n/* harmony import */ var _selectLvlGameForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectLvlGameForm */ \"./modules/selectLvlGameForm.ts\");\n\n\n\n\nvar interval;\nvar minute = 0;\nvar second = 0;\nvar millisecond = 0;\nfunction startTimer() {\n    millisecond++;\n    if (millisecond > 99) {\n        second++;\n        (0,_getElementById__WEBPACK_IMPORTED_MODULE_0__.getElement)().secEl.innerHTML = \".\" + \"0\" + second;\n        millisecond = 0;\n    }\n    if (second <= 9) {\n        (0,_getElementById__WEBPACK_IMPORTED_MODULE_0__.getElement)().secEl.innerHTML = \".\" + \"0\" + second;\n    }\n    if (second > 9) {\n        (0,_getElementById__WEBPACK_IMPORTED_MODULE_0__.getElement)().secEl.innerHTML = \".\" + second;\n    }\n    if (second > 59) {\n        minute++;\n        (0,_getElementById__WEBPACK_IMPORTED_MODULE_0__.getElement)().minEl.innerHTML = \"0\" + minute;\n        second = 0;\n        (0,_getElementById__WEBPACK_IMPORTED_MODULE_0__.getElement)().secEl.innerHTML = \".\" + \"0\" + second;\n    }\n    if (minute > 9) {\n        (0,_getElementById__WEBPACK_IMPORTED_MODULE_0__.getElement)().minEl.innerHTML = \".\" + minute;\n    }\n}\nfunction waitStartTime() {\n    clearInterval(interval);\n    interval = setInterval(startTimer, 10);\n}\nfunction startHide(_a) {\n    var img = _a.img, index = _a.index;\n    (0,_getElementById__WEBPACK_IMPORTED_MODULE_0__.getElement)().restartGame.addEventListener(\"click\", function () {\n        clearInterval(interval);\n        (0,_selectLvlGameForm__WEBPACK_IMPORTED_MODULE_3__.renderStartForm)({ appEl: (0,_getElementById__WEBPACK_IMPORTED_MODULE_0__.getElement)().appElement });\n    });\n    (0,_getElementById__WEBPACK_IMPORTED_MODULE_0__.getElement)().restartGame.style.background = \"#7ac100\";\n    img.setAttribute(\"src\", \"./img/hide.png\");\n    img.classList.add(\"flip-scale-up-hor\");\n    img.classList.add(\"cardHide\");\n    img.setAttribute(\"id\", \"checkCards\");\n    img.setAttribute(\"id\", \"\".concat(index));\n    (0,_getElementById__WEBPACK_IMPORTED_MODULE_0__.getElement)().ico.style.display = \"none\";\n}\nfunction startClick(_a) {\n    var img = _a.img, firstCard = _a.firstCard, secundCard = _a.secundCard, appEl = _a.appEl, cardsArray = _a.cardsArray, index = _a.index;\n    img.addEventListener(\"click\", function () {\n        img.src = \"./img/\".concat(index);\n        if (firstCard === null) {\n            firstCard = img;\n            console.log(\"firstCard\", firstCard, firstCard.id);\n            firstCard.classList.add(\"flip-scale-up-hor\");\n        }\n        else if (secundCard === null) {\n            secundCard = img;\n            console.log(\"secundCard\", secundCard, secundCard.id);\n            secundCard.classList.add(\"flip-scale-up-hor\");\n            setTimeout(watchTimer, 400);\n        }\n        function watchTimer() {\n            if (firstCard !== null && secundCard !== null && firstCard.id !== secundCard.id) {\n                if (firstCard.src === secundCard.src) {\n                    console.log(\"Карточки совпали\");\n                    firstCard.classList.add(\"hide\");\n                    secundCard.classList.add(\"hide\");\n                    firstCard = null;\n                    secundCard = null;\n                }\n            }\n            if (cardsArray.length === (0,_getElementById__WEBPACK_IMPORTED_MODULE_0__.getElement)().hides.length) {\n                setTimeout(function () {\n                    clearInterval(interval);\n                    (0,_winGameForm__WEBPACK_IMPORTED_MODULE_2__.renderWinForm)({\n                        appEl: appEl,\n                        min: (0,_getElementById__WEBPACK_IMPORTED_MODULE_0__.getElement)().minEl.innerHTML,\n                        sec: (0,_getElementById__WEBPACK_IMPORTED_MODULE_0__.getElement)().secEl.innerHTML,\n                    });\n                }, 400);\n            }\n            if (firstCard !== null && secundCard !== null) {\n                clearInterval(interval);\n                console.log(\"Карточки не совпали\");\n                (0,_loseGameForm__WEBPACK_IMPORTED_MODULE_1__.renderLoseForm)({\n                    appEl: appEl,\n                    min: (0,_getElementById__WEBPACK_IMPORTED_MODULE_0__.getElement)().minEl.innerHTML,\n                    sec: (0,_getElementById__WEBPACK_IMPORTED_MODULE_0__.getElement)().secEl.innerHTML,\n                });\n            }\n        }\n    });\n}\n\n\n//# sourceURL=webpack://card-game/./modules/funcGame.ts?");

/***/ }),

/***/ "./modules/getElementById.ts":
/*!***********************************!*\
  !*** ./modules/getElementById.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getElement: () => (/* binding */ getElement)\n/* harmony export */ });\nfunction getElement() {\n    var appElement = document.getElementById(\"app\");\n    var selectBtn = document.querySelector(\".radio-toolbar_input\");\n    var selectBtnOne = document.getElementById(\"radio1\");\n    var selectBtnTwo = document.getElementById(\"radio2\");\n    var selectBtnTree = document.getElementById(\"radio3\");\n    var minEl = document.querySelector(\".headFormField-timer_time-min\");\n    var secEl = document.querySelector(\".headFormField-timer_time-sec\");\n    var restartGame = document.querySelector(\".js-btm-reset\");\n    var game = document.getElementById(\"game\");\n    var startGame = document.querySelector(\".startGame\");\n    var lableButton1 = document.querySelector(\".lableButton1\");\n    var lableButton2 = document.querySelector(\".lableButton2\");\n    var lableButton3 = document.querySelector(\".lableButton3\");\n    var hides = document.querySelectorAll(\".hide\");\n    var replay = document.querySelector(\".difficultySelection_form-btn\");\n    var headForm = document.querySelector(\".headForm\");\n    var ico = document.querySelector(\".ico\");\n    var module = {\n        ico: ico,\n        headForm: headForm,\n        replay: replay,\n        hides: hides,\n        lableButton1: lableButton1,\n        lableButton2: lableButton2,\n        lableButton3: lableButton3,\n        startGame: startGame,\n        game: game,\n        restartGame: restartGame,\n        minEl: minEl,\n        secEl: secEl,\n        selectBtn: selectBtn,\n        appElement: appElement,\n        selectBtnOne: selectBtnOne,\n        selectBtnTwo: selectBtnTwo,\n        selectBtnTree: selectBtnTree,\n    };\n    return module;\n}\n\n\n//# sourceURL=webpack://card-game/./modules/getElementById.ts?");

/***/ }),

/***/ "./modules/localStorage.ts":
/*!*********************************!*\
  !*** ./modules/localStorage.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getSaveSelectLvl: () => (/* binding */ getSaveSelectLvl),\n/* harmony export */   removeSaveSelectLvl: () => (/* binding */ removeSaveSelectLvl),\n/* harmony export */   saveSelectLvl: () => (/* binding */ saveSelectLvl)\n/* harmony export */ });\nfunction saveSelectLvl(lvl) {\n    window.localStorage.setItem(\"lvl\", JSON.stringify(lvl));\n}\nfunction getSaveSelectLvl() {\n    try {\n        /* console.log(JSON.parse(window.localStorage.getItem(\"lvl\"))); */\n        // @ts-ignore: error message\n        return JSON.parse(window.localStorage.getItem(\"lvl\"));\n    }\n    catch (error) {\n        return null;\n    }\n}\nfunction removeSaveSelectLvl(lvl) {\n    window.localStorage.removeItem(\"lvl\");\n}\n\n\n//# sourceURL=webpack://card-game/./modules/localStorage.ts?");

/***/ }),

/***/ "./modules/loseGameForm.ts":
/*!*********************************!*\
  !*** ./modules/loseGameForm.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderLoseForm: () => (/* binding */ renderLoseForm)\n/* harmony export */ });\n/* harmony import */ var _selectLvlGameForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectLvlGameForm */ \"./modules/selectLvlGameForm.ts\");\n/* harmony import */ var _getElementById__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getElementById */ \"./modules/getElementById.ts\");\n\n\nfunction renderLoseForm(_a) {\n    var appEl = _a.appEl, min = _a.min, sec = _a.sec;\n    var appHtml = \"\\n                        <div class=\\\"difficultySelection main\\\">\\n                                <div class=\\\"difficultySelection_forms\\\">\\n                                        <img src=\\\"./img/dead.png\\\" alt=\\\"\\\">\\n                                        <li class=\\\"difficultySelection_form-text\\\">\\n                                        \\u0412\\u044B \\u043F\\u0440\\u043E\\u0438\\u0433\\u0440\\u0430\\u043B\\u0438!\\n                                        </li>\\n                                </div>\\n                        <div class=\\\"prod_checbox\\\">\\n                                <li class=\\\"difficultySelection_text-time\\\">\\n                                        \\u0417\\u0430\\u0442\\u0440\\u0430\\u0447\\u0435\\u043D\\u043D\\u043E\\u0435 \\u0432\\u0440\\u0435\\u043C\\u044F:\\n                                </li>\\n                                <div class=\\\"timerTime\\\">\\n                                        <li class=\\\"difficultySelection_text-timerMin timerTimes\\\">\".concat(min).concat(sec, \"</li>\\n                                </div>\\n\\n                        </div>\\n                        <div>\\n                                <button class=\\\"difficultySelection_form-btn startGame\\\">\\u0418\\u0433\\u0440\\u0430\\u0442\\u044C \\u0441\\u043D\\u043E\\u0432\\u0430</button>\\n                        </div>\\n                        </div>\");\n    appEl.innerHTML = appHtml;\n    (0,_getElementById__WEBPACK_IMPORTED_MODULE_1__.getElement)().replay.addEventListener(\"click\", function () {\n        (0,_selectLvlGameForm__WEBPACK_IMPORTED_MODULE_0__.renderStartForm)({ appEl: (0,_getElementById__WEBPACK_IMPORTED_MODULE_1__.getElement)().appElement });\n    });\n}\n\n\n//# sourceURL=webpack://card-game/./modules/loseGameForm.ts?");

/***/ }),

/***/ "./modules/mainGameForm.ts":
/*!*********************************!*\
  !*** ./modules/mainGameForm.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formGameField: () => (/* binding */ formGameField)\n/* harmony export */ });\n/* harmony import */ var _getElementById__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getElementById */ \"./modules/getElementById.ts\");\n/* harmony import */ var _funcGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./funcGame */ \"./modules/funcGame.ts\");\n\n\n\n\nfunction formGameField(_a) {\n    /* ------------------------------------------------- */\n    /* HTML */\n    /* ------------------------------------------------- */\n    var appEl = _a.appEl, lvl = _a.lvl, pairs = _a.pairs;\n    var appHtml = \"\\n                <div class=\\\"headForm\\\">\\n                        <div class=\\\"headFormField\\\">\\n                                <div class=\\\"headFormField-timer\\\">\\n                                        <div class=\\\"headFormField-timer_title\\\">\\n                                                <li>min</li>\\n                                        </div>\\n                                        <div class=\\\"headFormField-timer_time headFormField-timer_time-min interval\\\">\\n                                        00\\n                                        </div>\\n                                </div>\\n                                <div class=\\\"headFormField-timer\\\">\\n                                        <div class=\\\"headFormField-timer_title\\\">\\n                                                <li>sec</li>\\n                                        </div>\\n                                        <div class=\\\"headFormField-timer_time headFormField-timer_time-sec interval\\\">\\n                                        .00\\n                                        </div>\\n                                </div>\\n                        </div>\\n\\n                        <div><img  class=\\\"ico\\\" src=\\\"./img/free-icon-watch-8839019.png\\\"></img></div>\\n\\n                        <div class=\\\"headForm-btn buttons\\\">\\n                                <button class=\\\"btn js-btm-reset\\\">\\u041D\\u0430\\u0447\\u0430\\u0442\\u044C \\u0437\\u0430\\u043D\\u043E\\u0432\\u043E</button>\\n                        </div>\\n                </div>\\n                <div class=\\\"container\\\">\\n                \".concat(pairs ? \"<div id=\\\"game\\\" class=\\\"game\\\">\" : alert(\"ВЫ не выбрали сложность !!!\"), \"                \\n                        </div>\\n                </div>\\n                \");\n    appEl.innerHTML = appHtml;\n    /* ------------------------------------------------- */\n    /* timer */\n    /* ------------------------------------------------- */\n    setTimeout(_funcGame__WEBPACK_IMPORTED_MODULE_1__.waitStartTime, 5000);\n    /* ------------------------------------------------- */\n    /* CardLogic */\n    /* ------------------------------------------------- */\n    //create ar\n    var cardsNumberArray = [\n        \"6b.png\",\n        \"6c.png\",\n        \"6k.png\",\n        \"6c.png\",\n        \"7b.png\",\n        \"7c.png\",\n        \"7k.png\",\n        \"7c.png\",\n        \"8b.png\",\n        \"8c.png\",\n        \"8k.png\",\n        \"8c.png\",\n        \"9b.png\",\n        \"9c.png\",\n        \"9k.png\",\n        \"9c.png\",\n        \"10b.png\",\n        \"10c.png\",\n        \"10k.png\",\n        \"10c.png\",\n        \"Jb.png\",\n        \"Jc.png\",\n        \"Jk.png\",\n        \"Jc.png\",\n        \"Qb.png\",\n        \"Qc.png\",\n        \"Qk.png\",\n        \"Qc.png\",\n        \"Kb.png\",\n        \"Kc.png\",\n        \"Kk.png\",\n        \"Kc.png\",\n        \"Ab.png\",\n        \"Ac.png\",\n        \"Ak.png\",\n        \"Ac.png\",\n    ];\n    var firstCard = null;\n    var secundCard = null;\n    var cardsArray = [];\n    var arrayDuo = [];\n    function shuffles(array) {\n        array.sort(function () { return Math.random() - 0.5; });\n    }\n    shuffles(cardsNumberArray);\n    for (var i = 0, el = 1; i < pairs * 2; ++el, i += 2) {\n        cardsArray.push({ index: i, card: cardsNumberArray[el] }, { index: i + 1, card: cardsNumberArray[el] });\n    }\n    function shuffle(array) {\n        array.sort(function () { return Math.random() - 0.5; });\n    }\n    shuffle(cardsArray);\n    console.log(cardsArray);\n    //create cards\n    for (var _i = 0, cardsArray_1 = cardsArray; _i < cardsArray_1.length; _i++) {\n        var i = cardsArray_1[_i];\n        var img = document.createElement(\"img\");\n        img.src = \"./img/\".concat(i.card);\n        (0,_funcGame__WEBPACK_IMPORTED_MODULE_1__.startHide)({ img: img, index: i.index });\n        setTimeout(_funcGame__WEBPACK_IMPORTED_MODULE_1__.startHide, 5000);\n        (0,_getElementById__WEBPACK_IMPORTED_MODULE_0__.getElement)().ico.style.display = \"flex\";\n        (0,_getElementById__WEBPACK_IMPORTED_MODULE_0__.getElement)().restartGame.style.background = \"red\";\n        (0,_getElementById__WEBPACK_IMPORTED_MODULE_0__.getElement)().game.append(img);\n        (0,_funcGame__WEBPACK_IMPORTED_MODULE_1__.startClick)({\n            img: img,\n            firstCard: firstCard,\n            secundCard: secundCard,\n            appEl: appEl,\n            cardsArray: cardsArray,\n            index: i.index,\n        });\n        setTimeout(_funcGame__WEBPACK_IMPORTED_MODULE_1__.startClick, 5000);\n    }\n}\n\n\n//# sourceURL=webpack://card-game/./modules/mainGameForm.ts?");

/***/ }),

/***/ "./modules/selectLvlGameForm.ts":
/*!**************************************!*\
  !*** ./modules/selectLvlGameForm.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderStartForm: () => (/* binding */ renderStartForm)\n/* harmony export */ });\n/* harmony import */ var _getElementById__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getElementById */ \"./modules/getElementById.ts\");\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ \"./modules/localStorage.ts\");\n/* harmony import */ var _mainGameForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainGameForm */ \"./modules/mainGameForm.ts\");\n\n\n\nfunction renderStartForm(_a) {\n    var appEl = _a.appEl;\n    var appHtml = \"\\n    <div class=\\\"difficultySelection main\\\">\\n    <div class=\\\"difficultySelection_form\\\">\\n        <li class=\\\"difficultySelection_form-text\\\">\\n            \\u0412\\u044B\\u0431\\u0435\\u0440\\u0438 \\u0441\\u043B\\u043E\\u0436\\u043D\\u043E\\u0441\\u0442\\u044C\\n        </li>\\n    </div>\\n    <div class=\\\"prod_checbox\\\">\\n        <div class=\\\"radio-toolbar\\\">\\n            <input\\n                class=\\\"radio-toolbar_input\\\"\\n                type=\\\"radio\\\"\\n                id=\\\"radio1\\\"\\n                name=\\\"radios\\\"\\n                value=\\\"radio1\\\"\\n                checked\\n            />\\n            <label for=\\\"radio1\\\" class=\\\"lableButton1\\\">1</label>\\n\\n            <input\\n                class=\\\"radio-toolbar_input\\\"\\n                type=\\\"radio\\\"\\n                id=\\\"radio2\\\"\\n                name=\\\"radios\\\"\\n                value=\\\"radio2\\\"\\n            />\\n            <label for=\\\"radio2\\\" class=\\\"lableButton2\\\">2</label>\\n\\n            <input\\n                class=\\\"radio-toolbar_input\\\"\\n                type=\\\"radio\\\"\\n                id=\\\"radio3\\\"\\n                name=\\\"radios\\\"\\n                value=\\\"radio3\\\"\\n            />\\n            <label for=\\\"radio3\\\" class=\\\"lableButton3\\\">3</label>\\n        </div>\\n    </div>\\n    <div>\\n        <button class=\\\"difficultySelection_form-btn startGame\\\">\\u0421\\u0442\\u0430\\u0440\\u0442</button>\\n    </div>\\n</div>\";\n    appEl.innerHTML = appHtml;\n    function selectBtnLvl() {\n        (0,_getElementById__WEBPACK_IMPORTED_MODULE_0__.getElement)().selectBtnOne.addEventListener(\"click\", function () {\n            (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveSelectLvl)(1);\n            (0,_getElementById__WEBPACK_IMPORTED_MODULE_0__.getElement)().lableButton2.classList.remove(\"active\");\n            (0,_getElementById__WEBPACK_IMPORTED_MODULE_0__.getElement)().lableButton3.classList.remove(\"active\");\n            (0,_getElementById__WEBPACK_IMPORTED_MODULE_0__.getElement)().lableButton1.classList.add(\"active\");\n        });\n        (0,_getElementById__WEBPACK_IMPORTED_MODULE_0__.getElement)().selectBtnTwo.addEventListener(\"click\", function () {\n            (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveSelectLvl)(2);\n            (0,_getElementById__WEBPACK_IMPORTED_MODULE_0__.getElement)().lableButton1.classList.remove(\"active\");\n            (0,_getElementById__WEBPACK_IMPORTED_MODULE_0__.getElement)().lableButton3.classList.remove(\"active\");\n            (0,_getElementById__WEBPACK_IMPORTED_MODULE_0__.getElement)().lableButton2.classList.add(\"active\");\n        });\n        (0,_getElementById__WEBPACK_IMPORTED_MODULE_0__.getElement)().selectBtnTree.addEventListener(\"click\", function () {\n            (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveSelectLvl)(3);\n            (0,_getElementById__WEBPACK_IMPORTED_MODULE_0__.getElement)().lableButton1.classList.remove(\"active\");\n            (0,_getElementById__WEBPACK_IMPORTED_MODULE_0__.getElement)().lableButton2.classList.remove(\"active\");\n            (0,_getElementById__WEBPACK_IMPORTED_MODULE_0__.getElement)().lableButton3.classList.add(\"active\");\n        });\n        (0,_getElementById__WEBPACK_IMPORTED_MODULE_0__.getElement)().startGame.addEventListener(\"click\", function () {\n            if ((0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.getSaveSelectLvl)() === 1) {\n                (0,_mainGameForm__WEBPACK_IMPORTED_MODULE_2__.formGameField)({\n                    appEl: (0,_getElementById__WEBPACK_IMPORTED_MODULE_0__.getElement)().appElement,\n                    lvl: (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.getSaveSelectLvl)(),\n                    pairs: 3,\n                });\n            }\n            else if ((0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.getSaveSelectLvl)() === 2) {\n                (0,_mainGameForm__WEBPACK_IMPORTED_MODULE_2__.formGameField)({\n                    appEl: (0,_getElementById__WEBPACK_IMPORTED_MODULE_0__.getElement)().appElement,\n                    lvl: (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.getSaveSelectLvl)(),\n                    pairs: 6,\n                });\n            }\n            else if ((0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.getSaveSelectLvl)() === 3) {\n                (0,_mainGameForm__WEBPACK_IMPORTED_MODULE_2__.formGameField)({\n                    appEl: (0,_getElementById__WEBPACK_IMPORTED_MODULE_0__.getElement)().appElement,\n                    lvl: (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.getSaveSelectLvl)(),\n                    pairs: 9,\n                });\n            }\n        });\n    }\n    selectBtnLvl();\n}\n\n\n//# sourceURL=webpack://card-game/./modules/selectLvlGameForm.ts?");

/***/ }),

/***/ "./modules/winGameForm.ts":
/*!********************************!*\
  !*** ./modules/winGameForm.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderWinForm: () => (/* binding */ renderWinForm)\n/* harmony export */ });\n/* harmony import */ var _selectLvlGameForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectLvlGameForm */ \"./modules/selectLvlGameForm.ts\");\n/* harmony import */ var _getElementById__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getElementById */ \"./modules/getElementById.ts\");\n\n\nfunction renderWinForm(_a) {\n    var appEl = _a.appEl, min = _a.min, sec = _a.sec;\n    var appHtml = \"\\n                        <div class=\\\"difficultySelection main\\\">\\n                                <div class=\\\"difficultySelection_forms\\\">\\n                                        <img src=\\\"./img/celebration.png\\\" alt=\\\"\\\">\\n                                        <li class=\\\"difficultySelection_form-text\\\">\\n                                        \\u0412\\u044B \\u0432\\u044B\\u0438\\u0433\\u0440\\u0430\\u043B\\u0438!\\n                                        </li>\\n                                </div>\\n                        <div class=\\\"prod_checbox\\\">\\n                                <li class=\\\"difficultySelection_text-time\\\">\\n                                        \\u0417\\u0430\\u0442\\u0440\\u0430\\u0447\\u0435\\u043D\\u043D\\u043E\\u0435 \\u0432\\u0440\\u0435\\u043C\\u044F:\\n                                </li>\\n                                <div class=\\\"timerTime\\\">\\n                                        <li class=\\\"difficultySelection_text-timerMin timerTimes\\\">\".concat(min).concat(sec, \"</li>\\n                                </div>\\n\\n                        </div>\\n                        <div>\\n                                <button class=\\\"difficultySelection_form-btn startGame\\\">\\u0418\\u0433\\u0440\\u0430\\u0442\\u044C \\u0441\\u043D\\u043E\\u0432\\u0430</button>\\n                        </div>\\n                        </div>\");\n    appEl.innerHTML = appHtml;\n    (0,_getElementById__WEBPACK_IMPORTED_MODULE_1__.getElement)().replay.addEventListener(\"click\", function () {\n        (0,_selectLvlGameForm__WEBPACK_IMPORTED_MODULE_0__.renderStartForm)({ appEl: (0,_getElementById__WEBPACK_IMPORTED_MODULE_1__.getElement)().appElement });\n    });\n}\n\n\n//# sourceURL=webpack://card-game/./modules/winGameForm.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;