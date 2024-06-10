import { renderStartForm } from "./selectLvlGameForm";
import { getElement } from "./getElementById";

export function renderResultForm({
    appEl,
    min,
    sec,
    resultGame,
}: {
    appEl: HTMLElement;
    min: string;
    sec: string;
    resultGame?: number;
}) {
    const appHtml = `
                        <div class="difficultySelection main">
                                <div class="difficultySelection_forms">
                                ${
                                    resultGame
                                        ? '<img src="./img/celebration.png" alt="">'
                                        : '<img src="./img/dead.png" alt="">'
                                }
                                        <li class="difficultySelection_form-text">
                                        ${resultGame ? "Вы выиграли!" : "Вы проиграли!"}
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

    getElement().replay.addEventListener("click", () => {
        renderStartForm({ appEl: getElement().appElement });
    });
}
