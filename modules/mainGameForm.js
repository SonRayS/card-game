import { getElement } from "./getElementById.js";
import {
    saveSelectLvl,
    getSaveSelectLvl,
    removeSaveSelectLvl,
} from "./localStorage.js";
import { renderCardsForm } from "./renderFormCards.js";

export function formGameField({ appEl, lvl, pairs }) {
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

                        <div class="headForm-btn buttons">
                                <button class="btn js-btm-reset">Начать заново</button>
                        </div>
                </div>
                <div class="container">
                ${
                    pairs
                        ? renderCardsForm(pairs)
                        : alert("ВЫ не выбрали сложность !!!")
                }                
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

    const cardsNumberArray = [
        "6b.png",
        "6c.png",
        "6k.png",
        "6c.png",
        "7b.png",
        "7c.png",
        "7k.png",
        "7c.png",
        "8b.png",
        "8c.png",
        "8k.png",
        "8c.png",
        "9b.png",
        "9c.png",
        "9k.png",
        "9c.png",
        "10b.png",
        "10c.png",
        "10k.png",
        "10c.png",
        "Jb.png",
        "Jc.png",
        "Jk.png",
        "Jc.png",
        "Qb.png",
        "Qc.png",
        "Qk.png",
        "Qc.png",
        "Kb.png",
        "Kc.png",
        "Kk.png",
        "Kc.png",
        "Ab.png",
        "Ac.png",
        "Ak.png",
        "Ac.png",
    ];

    let firstCard = null;
    let secundCard = null;

    const cardsArray = [];

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    shuffle(cardsNumberArray);

    for (let i = 1; i <= pairs; ++i) {
        cardsArray.push(cardsNumberArray[i], cardsNumberArray[i]);
    }

    shuffle(cardsArray);
    console.log(cardsArray);
    //create cards

    for (const i of cardsArray) {
        let img = document.createElement("img");
        img.classList.add("cardHide");
        img.setAttribute("id", `idName${i}`);
        getElement().game.append(img);

        img.addEventListener("click", function () {
            if (firstCard !== null && secundCard !== null) {
                console.log("Карточки не совпали");
                firstCard.setAttribute("src", "./img/hide.png");
                secundCard.setAttribute("src", "./img/hide.png");
                firstCard = null;
                secundCard = null;
            }
            img.src = `./img/${i}`;
            console.log("карта по которой клик", img);

            if (firstCard === null) {
                firstCard = img;
                console.log("firstCard", firstCard.src);
                firstCard.classList.remove("cardHide");
            } else if (secundCard === null) {
                secundCard = img;
                console.log("secundCard", secundCard.src);
                secundCard.classList.remove("cardHide");
            }

            if (firstCard !== null && secundCard !== null) {
                console.log("2 cards open");

                if (firstCard.src === secundCard.src) {
                    console.log("Карточки совпали");
                    firstCard.classList.add("hide");
                    secundCard.classList.add("hide");
                    firstCard = null;
                    secundCard = null;
                }
            }
        });
    }

    //create cards
    /* ------------------------------------------------- */
}
/* img.classList.add("hide"); */
/* img.setAttribute("src", "https://picsum.photos/100"); */
