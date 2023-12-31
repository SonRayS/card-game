import { getElement } from "./getElementById.js";
import { renderLoseForm } from "./loseGameForm.js";
import { renderWinForm } from "./winGameForm.js";
import { renderStartForm } from "./selectLvlGameForm.js";

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

                        <div><img  class="ico" src="./img/free-icon-watch-8839019.png"></img></div>

                        <div class="headForm-btn buttons">
                                <button class="btn js-btm-reset">Начать заново</button>
                        </div>
                </div>
                <div class="container">
                ${pairs ? `<div id="game" class="game">` : alert("ВЫ не выбрали сложность !!!")}                
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

    /* ------------------------------------------------- */
    /* CardLogic */
    /* ------------------------------------------------- */

    //create ar
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
        let img = document.createElement("img");
        img.src = `./img/${i.card}`;
        img.index = i.index;

        function startHide() {
            getElement().restartGame.addEventListener("click", () => {
                clearInterval(interval);
                renderStartForm({ appEl: getElement().appElement });
            });
            getElement().restartGame.style.background = "#7ac100";
            img.setAttribute("src", "./img/hide.png");
            img.classList.add("flip-scale-up-hor");
            img.classList.add("cardHide");
            img.setAttribute("id", "checkCards");
            img.setAttribute("id", `${img.index}`);
            getElement().ico.style.display = "none";
        }

        setTimeout(startHide, 5000);
        getElement().ico.style.display = "flex";
        getElement().restartGame.style.background = "red";

        getElement().game.append(img);

        function startClick() {
            img.addEventListener("click", function () {
                img.src = `./img/${i.card}`;
                console.log("карта по которой клик", img, img.index);

                if (firstCard === null) {
                    firstCard = img;
                    console.log("firstCard", firstCard);
                    firstCard.classList.add("flip-scale-up-hor");
                } else if (secundCard === null && firstCard.index !== img.index) {
                    secundCard = img;
                    console.log("secundCard", secundCard);
                    secundCard.classList.add("flip-scale-up-hor");
                    setTimeout(watchTimer, 400);
                }

                function watchTimer() {
                    if (firstCard !== null && secundCard !== null && firstCard.index !== secundCard.index) {
                        if (firstCard.src === secundCard.src) {
                            console.log("Карточки совпали");
                            firstCard.classList.add("hide");
                            secundCard.classList.add("hide");
                            firstCard = null;
                            secundCard = null;
                        }
                    }

                    if (cardsArray.length === getElement().hides.length) {
                        setTimeout(function () {
                            clearInterval(interval);
                            renderWinForm({
                                appEl,
                                min: getElement().minEl.innerHTML,
                                sec: getElement().secEl.innerHTML,
                            });
                        }, 400);
                    }

                    if (firstCard !== null && secundCard !== null) {
                        clearInterval(interval);
                        console.log("Карточки не совпали");
                        renderLoseForm({
                            appEl,
                            min: getElement().minEl.innerHTML,
                            sec: getElement().secEl.innerHTML,
                        });
                    }
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
