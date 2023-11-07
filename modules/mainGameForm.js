import { getElement } from "./getElementById.js";
import {
    saveSelectLvl,
    getSaveSelectLvl,
    removeSaveSelectLvl,
} from "./localStorage.js";

export function formGameField({ appEl, lvl, pairs }) {
    /* ------------------------------------------------- */
    /* HTML */
    /* ------------------------------------------------- */

    const appHtml = `
                <div class="headForm center">
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

                        <div class="headForm-btn buttons">
                                <button class="difficultySelection_form-btn btn js-btm-reset">Начать заново</button>
                        </div>
                </div>
                <div id="game" class="center">

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
            getElement().secEl.innerHTML = "." + "0" + second;
            millisecond = 0;
        }

        if (second <= 9) {
            getElement().secEl.innerHTML = "." + "0" + second;
        }
        if (second > 9) {
            getElement().secEl.innerHTML = "." + second;
        }
        if (second > 59) {
            minute++;
            getElement().minEl.innerHTML = "0" + minute;
            second = 0;
            getElement().secEl.innerHTML = "." + "0" + second;
        }
        if (minute > 9) {
            getElement().minEl.innerHTML = "." + minute;
        }
    }

    function waitStartTime() {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }
    setTimeout(waitStartTime, 5000);

    getElement().start.addEventListener("click", () => {
        clearInterval(interval);
        minute = 0;
        second = 0;
        millisecond = 0;
        getElement().minEl.innerHTML = "00";
        getElement().secEl.innerHTML = "." + "00";
        setTimeout(waitStartTime, 5000);
    });

    /* ------------------------------------------------- */
    /* CardLogic */
    /* ------------------------------------------------- */

    const cardsNumber = pairs;
    const cardsNumberArray = [];

    // sort
    for (let i = 1; i <= cardsNumber; i++) {
        cardsNumberArray.push(i, i);
    }

    for (let i = 0; i < cardsNumberArray.length; i++) {
        const randomPoint = Math.floor(Math.random() * cardsNumberArray.length);

        const temp = cardsNumberArray[i];
        cardsNumberArray[i] = cardsNumberArray[randomPoint];
        cardsNumberArray[randomPoint] = temp;
    }

    // sort

    // create cards

    for (const i of cardsNumberArray) {
        let card = document.createElement("div");
        card.textContent = i;

        getElement().game.append(card);
    }

    // create cards

    /* ------------------------------------------------- */
}
