import { getElement } from "./getElementById.js";
import {
    saveSelectLvl,
    getSaveSelectLvl,
    removeSaveSelectLvl,
} from "./localStorage.js";
import { formGameField } from "./mainGameForm.js";

export function renderStartForm({ appEl }) {
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
            <label for="radio1"
                ><img src="/img/1.png" alt=""
            /></label>

            <input
                class="radio-toolbar_input"
                type="radio"
                id="radio2"
                name="radios"
                value="radio2"
            />
            <label for="radio2"
                ><img src="/img/2.png" alt=""
            /></label>

            <input
                class="radio-toolbar_input"
                type="radio"
                id="radio3"
                name="radios"
                value="radio3"
            />
            <label for="radio3"
                ><img src="/img/3.png" alt=""
            /></label>
        </div>
    </div>
    <div>
        <button class="difficultySelection_form-btn">Старт</button>
    </div>
</div>`;

    appEl.innerHTML = appHtml;

    function selectBtnLvl() {
        getElement().selectBtnOne.addEventListener("click", () => {
            saveSelectLvl(1);
            formGameField({
                appEl: getElement().appElement,
                lvl: getSaveSelectLvl(),
                pairs: 3,
            });
        });
        getElement().selectBtnTwo.addEventListener("click", () => {
            saveSelectLvl(2);
            formGameField({
                appEl: getElement().appElement,
                lvl: getSaveSelectLvl(),
                pairs: 6,
            });
        });
        getElement().selectBtnTree.addEventListener("click", () => {
            saveSelectLvl(3);
            formGameField({
                appEl: getElement().appElement,
                lvl: getSaveSelectLvl(),
                pairs: 9,
            });
        });
    }
    selectBtnLvl();
}
