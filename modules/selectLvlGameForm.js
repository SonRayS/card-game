import { getElement } from './getElementById.js';
import { saveSelectLvl, getSaveSelectLvl, removeSaveSelectLvl } from './localStorage.js';
import { formGameField } from './mainGameForm.js';

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
        getElement().selectBtnOne.addEventListener('click', () => {
            saveSelectLvl(1);
            getElement().lableButton2.classList.remove('active');
            getElement().lableButton3.classList.remove('active');
            getElement().lableButton1.classList.add('active');
        });
        getElement().selectBtnTwo.addEventListener('click', () => {
            saveSelectLvl(2);
            getElement().lableButton1.classList.remove('active');
            getElement().lableButton3.classList.remove('active');
            getElement().lableButton2.classList.add('active');
        });
        getElement().selectBtnTree.addEventListener('click', () => {
            saveSelectLvl(3);
            getElement().lableButton1.classList.remove('active');
            getElement().lableButton2.classList.remove('active');
            getElement().lableButton3.classList.add('active');
        });
        getElement().startGame.addEventListener('click', () => {
            if (getSaveSelectLvl() === 1) {
                formGameField({
                    appEl: getElement().appElement,
                    lvl: getSaveSelectLvl(),
                    pairs: 3,
                });
            } else if (getSaveSelectLvl() === 2) {
                formGameField({
                    appEl: getElement().appElement,
                    lvl: getSaveSelectLvl(),
                    pairs: 6,
                });
            } else if (getSaveSelectLvl() === 3) {
                formGameField({
                    appEl: getElement().appElement,
                    lvl: getSaveSelectLvl(),
                    pairs: 9,
                });
            }
        });
    }
    selectBtnLvl();
}
