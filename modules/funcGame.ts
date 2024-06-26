import { getElement } from "./getElementById";
import { renderResultForm } from "./resultGameForm";
import { renderStartForm } from "./selectLvlGameForm";

let interval: NodeJS.Timeout;
let minute = 0;
let second = 0;
let millisecond = 0;

let firstCard: null | HTMLImageElement = null;
let secundCard: null | HTMLImageElement = null;

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

export function waitStartTime() {
    minute = 0;
    second = 0;
    millisecond = 0;
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
}

/* ______________________________________________________
*
*
______________________________________________________ */

export function startHide({ img, index }: { img: HTMLImageElement; index: number }) {
    getElement().restartGame.addEventListener("click", () => {
        clearInterval(interval);
        renderStartForm({ appEl: getElement().appElement });
    });
    getElement().restartGame.style.background = "#7ac100";
    img.setAttribute("src", "./img/hide.png");
    img.classList.add("flip-scale-up-hor");
    img.classList.add("cardHide");
    img.setAttribute("id", "checkCards");

    img.setAttribute("id", `${index}`);
    getElement().ico.style.display = "none";
}

/* ______________________________________________________
*
*
______________________________________________________ */

export function startClick({
    img,
    appEl,
    cardsArray,
    src,
    resultGame,
}: {
    img: HTMLImageElement;
    appEl: HTMLElement;
    cardsArray: { index: number; card: string }[];
    src: string;
    resultGame: number;
}) {
    img.addEventListener("click", function () {
        img.src = `./img/${src}`;

        if (firstCard === null) {
            firstCard = img;
            console.log("firstCard", firstCard);
            firstCard.classList.add("flip-scale-up-hor");
        } else if (secundCard === null) {
            secundCard = img;
            console.log("secundCard", secundCard);
            secundCard.classList.add("flip-scale-up-hor");
            setTimeout(watchTimer, 400);
        }

        function watchTimer() {
            if (firstCard !== null && secundCard !== null && firstCard.id !== secundCard.id) {
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
                    renderResultForm({
                        appEl,
                        min: getElement().minEl.innerHTML,
                        sec: getElement().secEl.innerHTML,
                        resultGame,
                    });
                }, 200);
            }

            if (firstCard !== null && secundCard !== null) {
                setTimeout(function () {
                    clearInterval(interval);
                    console.log("Карточки не совпали");
                    firstCard = null;
                    secundCard = null;
                    renderResultForm({
                        appEl,
                        min: getElement().minEl.innerHTML,
                        sec: getElement().secEl.innerHTML,
                    });
                }, 200);
            }
        }
    });
}
