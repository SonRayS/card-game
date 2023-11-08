export function getElement() {
    const appElement = document.getElementById("app");
    const selectBtn = document.querySelector(".radio-toolbar_input");
    const selectBtnOne = document.getElementById("radio1");
    const selectBtnTwo = document.getElementById("radio2");
    const selectBtnTree = document.getElementById("radio3");
    const minEl = document.querySelector(".headFormField-timer_time-min");
    const secEl = document.querySelector(".headFormField-timer_time-sec");
    const restartGame = document.querySelector(".js-btm-reset");
    const game = document.getElementById("game");
    const startGame = document.querySelector(".startGame");
    const lableButton1 = document.querySelector(".lableButton1");
    const lableButton2 = document.querySelector(".lableButton2");
    const lableButton3 = document.querySelector(".lableButton3");
    const hides = document.querySelectorAll(".hide");
    const replay = document.querySelector(".difficultySelection_form-btn");
    const headForm = document.querySelector(".headForm");
    const ico = document.querySelector(".ico");

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
