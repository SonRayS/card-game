/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./dist/bundle.js ***!
  \************************/
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/getElementById.js":
/*!***********************************!*\
  !*** ./modules/getElementById.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_315__) => {

__nested_webpack_require_315__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_315__.d(__nested_webpack_exports__, {
/* harmony export */   getElement: () => (/* binding */ getElement)
/* harmony export */ });
function getElement() {
    const appElement = document.getElementById('app');
    const selectBtn = document.querySelector('.radio-toolbar_input');
    const selectBtnOne = document.getElementById('radio1');
    const selectBtnTwo = document.getElementById('radio2');
    const selectBtnTree = document.getElementById('radio3');
    const minEl = document.querySelector('.headFormField-timer_time-min');
    const secEl = document.querySelector('.headFormField-timer_time-sec');
    const restartGame = document.querySelector('.js-btm-reset');
    const game = document.getElementById('game');
    const startGame = document.querySelector('.startGame');
    const lableButton1 = document.querySelector('.lableButton1');
    const lableButton2 = document.querySelector('.lableButton2');
    const lableButton3 = document.querySelector('.lableButton3');
    const hides = document.querySelectorAll('.hide');
    const replay = document.querySelector('.difficultySelection_form-btn');
    const headForm = document.querySelector('.headForm');
    const ico = document.querySelector('.ico');

    const module = {
        ico: ico,
        headForm: headForm,
        replay: replay,
        hides: hides,
        lableButton1: lableButton1,
        lableButton2: lableButton2,
        lableButton3: lableButton3,
        startGame: startGame,
        game: game,
        restartGame: restartGame,
        minEl: minEl,
        secEl: secEl,
        selectBtn: selectBtn,
        appElement: appElement,
        selectBtnOne: selectBtnOne,
        selectBtnTwo: selectBtnTwo,
        selectBtnTree: selectBtnTree,
    };

    return module;
}


/***/ }),

/***/ "./modules/localStorage.js":
/*!*********************************!*\
  !*** ./modules/localStorage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_2444__) => {

__nested_webpack_require_2444__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_2444__.d(__nested_webpack_exports__, {
/* harmony export */   getSaveSelectLvl: () => (/* binding */ getSaveSelectLvl),
/* harmony export */   removeSaveSelectLvl: () => (/* binding */ removeSaveSelectLvl),
/* harmony export */   saveSelectLvl: () => (/* binding */ saveSelectLvl)
/* harmony export */ });
function saveSelectLvl(lvl) {
    window.localStorage.setItem('lvl', JSON.stringify(lvl));
}

function getSaveSelectLvl() {
    try {
        /* console.log(JSON.parse(window.localStorage.getItem("lvl"))); */
        return JSON.parse(window.localStorage.getItem('lvl'));
    } catch (error) {
        return null;
    }
}

function removeSaveSelectLvl(lvl) {
    window.localStorage.removeItem('lvl');
}


/***/ }),

/***/ "./modules/loseGameForm.js":
/*!*********************************!*\
  !*** ./modules/loseGameForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_3487__) => {

__nested_webpack_require_3487__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_3487__.d(__nested_webpack_exports__, {
/* harmony export */   renderLoseForm: () => (/* binding */ renderLoseForm)
/* harmony export */ });
/* harmony import */ var _selectLvlGameForm_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_3487__(/*! ./selectLvlGameForm.js */ "./modules/selectLvlGameForm.js");
/* harmony import */ var _getElementById_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_3487__(/*! ./getElementById.js */ "./modules/getElementById.js");



function renderLoseForm({ appEl, min, sec }) {
    const appHtml = `
                        <div class="difficultySelection main">
                                <div class="difficultySelection_forms">
                                        <img src="./img/dead.png" alt="">
                                        <li class="difficultySelection_form-text">
                                        Вы проиграли!
                                        </li>
                                </div>
                        <div class="prod_checbox">
                                <li class="difficultySelection_text-time">
                                        Затраченное время:
                                </li>
                                <div class="timerTime">
                                        <li class="difficultySelection_text-timerMin timerTimes">${min}${sec}</li>
                                </div>

                        </div>
                        <div>
                                <button class="difficultySelection_form-btn startGame">Играть снова</button>
                        </div>
                        </div>`;

    appEl.innerHTML = appHtml;

    (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_1__.getElement)().replay.addEventListener('click', () => {
        (0,_selectLvlGameForm_js__WEBPACK_IMPORTED_MODULE_0__.renderStartForm)({ appEl: (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_1__.getElement)().appElement });
    });
}


/***/ }),

/***/ "./modules/mainGameForm.js":
/*!*********************************!*\
  !*** ./modules/mainGameForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_5784__) => {

__nested_webpack_require_5784__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_5784__.d(__nested_webpack_exports__, {
/* harmony export */   formGameField: () => (/* binding */ formGameField)
/* harmony export */ });
/* harmony import */ var _getElementById_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_5784__(/*! ./getElementById.js */ "./modules/getElementById.js");
/* harmony import */ var _loseGameForm_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_5784__(/*! ./loseGameForm.js */ "./modules/loseGameForm.js");
/* harmony import */ var _winGameForm_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_5784__(/*! ./winGameForm.js */ "./modules/winGameForm.js");
/* harmony import */ var _selectLvlGameForm_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_5784__(/*! ./selectLvlGameForm.js */ "./modules/selectLvlGameForm.js");





function formGameField({ appEl, lvl, pairs }) {
    /* ------------------------------------------------- */
    /* HTML */
    /* ------------------------------------------------- */

    const appHtml = `
                <div class="headForm">
                        <div class="headFormField">
                                <div class="headFormField-timer">
                                        <div class="headFormField-timer_title">
                                                <li>min</li>
                                        </div>
                                        <div class="headFormField-timer_time headFormField-timer_time-min interval">
                                        00
                                        </div>
                                </div>
                                <div class="headFormField-timer">
                                        <div class="headFormField-timer_title">
                                                <li>sec</li>
                                        </div>
                                        <div class="headFormField-timer_time headFormField-timer_time-sec interval">
                                        .00
                                        </div>
                                </div>
                        </div>

                        <div><img  class="ico" src="./img/free-icon-watch-8839019.png"></img></div>

                        <div class="headForm-btn buttons">
                                <button class="btn js-btm-reset">Начать заново</button>
                        </div>
                </div>
                <div class="container">
                ${pairs ? `<div id="game" class="game">` : alert('ВЫ не выбрали сложность !!!')}                
                        </div>
                </div>
                `;

    appEl.innerHTML = appHtml;

    /* ------------------------------------------------- */
    /* timer */
    /* ------------------------------------------------- */

    let interval;
    let minute = 0;
    let second = 0;
    let millisecond = 0;

    function startTimer() {
        millisecond++;

        if (millisecond > 99) {
            second++;
            (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_0__.getElement)().secEl.innerHTML = '.' + '0' + second;
            millisecond = 0;
        }

        if (second <= 9) {
            (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_0__.getElement)().secEl.innerHTML = '.' + '0' + second;
        }
        if (second > 9) {
            (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_0__.getElement)().secEl.innerHTML = '.' + second;
        }
        if (second > 59) {
            minute++;
            (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_0__.getElement)().minEl.innerHTML = '0' + minute;
            second = 0;
            (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_0__.getElement)().secEl.innerHTML = '.' + '0' + second;
        }
        if (minute > 9) {
            (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_0__.getElement)().minEl.innerHTML = '.' + minute;
        }
    }

    function waitStartTime() {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }
    setTimeout(waitStartTime, 5000);

    /* ------------------------------------------------- */
    /* CardLogic */
    /* ------------------------------------------------- */

    //create ar
    const cardsNumberArray = [
        '6b.png',
        '6c.png',
        '6k.png',
        '6c.png',
        '7b.png',
        '7c.png',
        '7k.png',
        '7c.png',
        '8b.png',
        '8c.png',
        '8k.png',
        '8c.png',
        '9b.png',
        '9c.png',
        '9k.png',
        '9c.png',
        '10b.png',
        '10c.png',
        '10k.png',
        '10c.png',
        'Jb.png',
        'Jc.png',
        'Jk.png',
        'Jc.png',
        'Qb.png',
        'Qc.png',
        'Qk.png',
        'Qc.png',
        'Kb.png',
        'Kc.png',
        'Kk.png',
        'Kc.png',
        'Ab.png',
        'Ac.png',
        'Ak.png',
        'Ac.png',
    ];

    let firstCard = null;
    let secundCard = null;

    const cardsArray = [];
    const arrayDuo = [];

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    shuffle(cardsNumberArray);

    for (let i = 0, el = 1; el <= pairs, i < pairs * 2; ++el, i += 2) {
        cardsArray.push({ index: i, card: cardsNumberArray[el] }, { index: i + 1, card: cardsNumberArray[el] });
    }

    shuffle(cardsArray);
    //create grid

    switch (pairs) {
        case 3:
            game.style = `grid-template-columns: repeat(3, 1fr);`;
            break;
        case 6:
            game.style = `grid-template-columns: repeat(4, 1fr);`;
            break;
        case 9:
            game.style = `grid-template-columns: repeat(9, 2fr);`;
            break;
    }

    //create cards

    for (const i of cardsArray) {
        let img = document.createElement('img');
        img.src = `./img/${i.card}`;
        img.index = i.index;

        function startHide() {
            (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_0__.getElement)().restartGame.addEventListener('click', () => {
                clearInterval(interval);
                (0,_selectLvlGameForm_js__WEBPACK_IMPORTED_MODULE_3__.renderStartForm)({ appEl: (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_0__.getElement)().appElement });
            });
            (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_0__.getElement)().restartGame.style.background = '#7ac100';
            img.setAttribute('src', './img/hide.png');
            img.classList.add('flip-scale-up-hor');
            img.classList.add('cardHide');
            img.setAttribute('id', 'checkCards');
            img.setAttribute('id', `${img.index}`);
            (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_0__.getElement)().ico.style.display = 'none';
        }

        setTimeout(startHide, 5000);
        (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_0__.getElement)().ico.style.display = 'flex';
        (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_0__.getElement)().restartGame.style.background = 'red';

        (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_0__.getElement)().game.append(img);

        function startClick() {
            img.addEventListener('click', function () {
                img.src = `./img/${i.card}`;
                console.log('карта по которой клик', img, img.index);

                if (firstCard === null) {
                    firstCard = img;
                    console.log('firstCard', firstCard);
                    firstCard.classList.add('flip-scale-up-hor');
                } else if (secundCard === null && firstCard.index !== img.index) {
                    secundCard = img;
                    console.log('secundCard', secundCard);
                    secundCard.classList.add('flip-scale-up-hor');
                }

                if (firstCard !== null && secundCard !== null && firstCard.index !== secundCard.index) {
                    if (firstCard.src === secundCard.src) {
                        console.log('Карточки совпали');
                        firstCard.classList.add('hide');
                        secundCard.classList.add('hide');
                        firstCard = null;
                        secundCard = null;
                    }
                }

                if (cardsArray.length === (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_0__.getElement)().hides.length) {
                    setTimeout(function () {
                        clearInterval(interval);
                        (0,_winGameForm_js__WEBPACK_IMPORTED_MODULE_2__.renderWinForm)({
                            appEl,
                            min: (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_0__.getElement)().minEl.innerHTML,
                            sec: (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_0__.getElement)().secEl.innerHTML,
                        });
                    }, 400);
                }

                if (firstCard !== null && secundCard !== null) {
                    clearInterval(interval);
                    console.log('Карточки не совпали');
                    (0,_loseGameForm_js__WEBPACK_IMPORTED_MODULE_1__.renderLoseForm)({
                        appEl,
                        min: (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_0__.getElement)().minEl.innerHTML,
                        sec: (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_0__.getElement)().secEl.innerHTML,
                    });
                }
            });
        }
        setTimeout(startClick, 5000);
    }
}
/* firstCard.parentNode.removeChild(firstCard); */
/* firstCard.setAttribute("src", "./img/hide.png");
   secundCard.setAttribute("src", "./img/hide.png");
   firstCard = null;
   secundCard = null; */


/***/ }),

/***/ "./modules/selectLvlGameForm.js":
/*!**************************************!*\
  !*** ./modules/selectLvlGameForm.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_16032__) => {

__nested_webpack_require_16032__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_16032__.d(__nested_webpack_exports__, {
/* harmony export */   renderStartForm: () => (/* binding */ renderStartForm)
/* harmony export */ });
/* harmony import */ var _getElementById_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_16032__(/*! ./getElementById.js */ "./modules/getElementById.js");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_16032__(/*! ./localStorage.js */ "./modules/localStorage.js");
/* harmony import */ var _mainGameForm_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_16032__(/*! ./mainGameForm.js */ "./modules/mainGameForm.js");




function renderStartForm({ appEl }) {
    const appHtml = `
    <div class="difficultySelection main">
    <div class="difficultySelection_form">
        <li class="difficultySelection_form-text">
            Выбери сложность
        </li>
    </div>
    <div class="prod_checbox">
        <div class="radio-toolbar">
            <input
                class="radio-toolbar_input"
                type="radio"
                id="radio1"
                name="radios"
                value="radio1"
                checked
            />
            <label for="radio1" class="lableButton1">1</label>

            <input
                class="radio-toolbar_input"
                type="radio"
                id="radio2"
                name="radios"
                value="radio2"
            />
            <label for="radio2" class="lableButton2">2</label>

            <input
                class="radio-toolbar_input"
                type="radio"
                id="radio3"
                name="radios"
                value="radio3"
            />
            <label for="radio3" class="lableButton3">3</label>
        </div>
    </div>
    <div>
        <button class="difficultySelection_form-btn startGame">Старт</button>
    </div>
</div>`;

    appEl.innerHTML = appHtml;

    function selectBtnLvl() {
        (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_0__.getElement)().selectBtnOne.addEventListener('click', () => {
            (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_1__.saveSelectLvl)(1);
            (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_0__.getElement)().lableButton2.classList.remove('active');
            (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_0__.getElement)().lableButton3.classList.remove('active');
            (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_0__.getElement)().lableButton1.classList.add('active');
        });
        (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_0__.getElement)().selectBtnTwo.addEventListener('click', () => {
            (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_1__.saveSelectLvl)(2);
            (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_0__.getElement)().lableButton1.classList.remove('active');
            (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_0__.getElement)().lableButton3.classList.remove('active');
            (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_0__.getElement)().lableButton2.classList.add('active');
        });
        (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_0__.getElement)().selectBtnTree.addEventListener('click', () => {
            (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_1__.saveSelectLvl)(3);
            (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_0__.getElement)().lableButton1.classList.remove('active');
            (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_0__.getElement)().lableButton2.classList.remove('active');
            (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_0__.getElement)().lableButton3.classList.add('active');
        });
        (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_0__.getElement)().startGame.addEventListener('click', () => {
            if ((0,_localStorage_js__WEBPACK_IMPORTED_MODULE_1__.getSaveSelectLvl)() === 1) {
                (0,_mainGameForm_js__WEBPACK_IMPORTED_MODULE_2__.formGameField)({
                    appEl: (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_0__.getElement)().appElement,
                    lvl: (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_1__.getSaveSelectLvl)(),
                    pairs: 3,
                });
            } else if ((0,_localStorage_js__WEBPACK_IMPORTED_MODULE_1__.getSaveSelectLvl)() === 2) {
                (0,_mainGameForm_js__WEBPACK_IMPORTED_MODULE_2__.formGameField)({
                    appEl: (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_0__.getElement)().appElement,
                    lvl: (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_1__.getSaveSelectLvl)(),
                    pairs: 6,
                });
            } else if ((0,_localStorage_js__WEBPACK_IMPORTED_MODULE_1__.getSaveSelectLvl)() === 3) {
                (0,_mainGameForm_js__WEBPACK_IMPORTED_MODULE_2__.formGameField)({
                    appEl: (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_0__.getElement)().appElement,
                    lvl: (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_1__.getSaveSelectLvl)(),
                    pairs: 9,
                });
            }
        });
    }
    selectBtnLvl();
}


/***/ }),

/***/ "./modules/winGameForm.js":
/*!********************************!*\
  !*** ./modules/winGameForm.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_21501__) => {

__nested_webpack_require_21501__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_21501__.d(__nested_webpack_exports__, {
/* harmony export */   renderWinForm: () => (/* binding */ renderWinForm)
/* harmony export */ });
/* harmony import */ var _selectLvlGameForm_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_21501__(/*! ./selectLvlGameForm.js */ "./modules/selectLvlGameForm.js");
/* harmony import */ var _getElementById_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_21501__(/*! ./getElementById.js */ "./modules/getElementById.js");



function renderWinForm({ appEl, min, sec }) {
    const appHtml = `
                        <div class="difficultySelection main">
                                <div class="difficultySelection_forms">
                                        <img src="./img/celebration.png" alt="">
                                        <li class="difficultySelection_form-text">
                                        Вы выиграли!
                                        </li>
                                </div>
                        <div class="prod_checbox">
                                <li class="difficultySelection_text-time">
                                        Затраченное время:
                                </li>
                                <div class="timerTime">
                                        <li class="difficultySelection_text-timerMin timerTimes">${min}${sec}</li>
                                </div>

                        </div>
                        <div>
                                <button class="difficultySelection_form-btn startGame">Играть снова</button>
                        </div>
                        </div>`;

    appEl.innerHTML = appHtml;

    (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_1__.getElement)().replay.addEventListener('click', () => {
        (0,_selectLvlGameForm_js__WEBPACK_IMPORTED_MODULE_0__.renderStartForm)({ appEl: (0,_getElementById_js__WEBPACK_IMPORTED_MODULE_1__.getElement)().appElement });
    });
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_23814__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_23814__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_23814__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_23814__.o(definition, key) && !__nested_webpack_require_23814__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_23814__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_23814__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __nested_webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__nested_webpack_require_23814__.r(__nested_webpack_exports__);
/* harmony import */ var _modules_selectLvlGameForm_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_23814__(/*! ./modules/selectLvlGameForm.js */ "./modules/selectLvlGameForm.js");
/* harmony import */ var _modules_getElementById_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_23814__(/*! ./modules/getElementById.js */ "./modules/getElementById.js");



(0,_modules_selectLvlGameForm_js__WEBPACK_IMPORTED_MODULE_0__.renderStartForm)({ appEl: (0,_modules_getElementById_js__WEBPACK_IMPORTED_MODULE_1__.getElement)().appElement });

})();

/******/ })()
;
/******/ })()
;