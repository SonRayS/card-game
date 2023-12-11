import { getElement } from "./getElementById";
import { startHide } from "./funcGame";
import { startClick } from "./funcGame";
import { waitStartTime } from "./funcGame";
import type { Card } from "./types";

export function formGameField({ appEl, lvl, pairs }: { appEl: HTMLElement; lvl: number; pairs: number }) {
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

                        <div><img  class="ico" src="./img/forward.png"></img></div>

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

    const cardsArray: Card[] = [];

    function shuffles(array: string[]) {
        array.sort(() => Math.random() - 0.5);
    }

    shuffles(cardsNumberArray);

    for (let i = 0, el = 1; i < pairs * 2; ++el, i += 2) {
        cardsArray.push({ index: i, card: cardsNumberArray[el] }, { index: i + 1, card: cardsNumberArray[el] });
    }

    function shuffle(array: Card[]) {
        array.sort(() => Math.random() - 0.5);
    }

    shuffle(cardsArray);

    switch (pairs) {
        case 3:
            getElement().game.style.gridTemplateColumns = `repeat(3, 1fr);`;
            break;
        case 6:
            getElement().game.style.gridTemplateColumns = `repeat(4, 1fr);`;
            break;
        case 9:
            getElement().game.style.gridTemplateColumns = `repeat(9, 2fr);`;
            break;
    }

    //create cards
    const resultGame: number = 1;

    for (const i of cardsArray) {
        const img = document.createElement("img");
        img.src = `./img/${i.card}`;
        const arrayIndex: number = i.index;

        setTimeout(function () {
            startHide({ img: img, index: arrayIndex });
        }, 5000);

        getElement().ico.style.display = "flex";
        getElement().restartGame.style.background = "red";
        getElement().game.append(img);

        setTimeout(function () {
            startClick({
                img,
                appEl,
                cardsArray: cardsArray,
                src: i.card,
                resultGame: resultGame,
            });
        }, 5000);
    }
}
