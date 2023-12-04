export function getElement() {
    const appElement = document.getElementById("app") as HTMLElement;
    const selectBtn = document.querySelector(".radio-toolbar_input") as HTMLElement;
    const selectBtnOne = document.getElementById("radio1") as HTMLElement;
    const selectBtnTwo = document.getElementById("radio2") as HTMLElement;
    const selectBtnTree = document.getElementById("radio3") as HTMLElement;
    const minEl = document.querySelector(".headFormField-timer_time-min") as HTMLElement;
    const secEl = document.querySelector(".headFormField-timer_time-sec") as HTMLElement;
    const restartGame = document.querySelector(".js-btm-reset") as HTMLElement;
    const game = document.getElementById("game") as HTMLElement;
    const startGame = document.querySelector(".startGame") as HTMLElement;
    const lableButton1 = document.querySelector(".lableButton1") as HTMLElement;
    const lableButton2 = document.querySelector(".lableButton2") as HTMLElement;
    const lableButton3 = document.querySelector(".lableButton3") as HTMLElement;
    const hides = document.querySelectorAll(".hide");
    const replay = document.querySelector(".difficultySelection_form-btn") as HTMLElement;
    const headForm = document.querySelector(".headForm") as HTMLElement;
    const ico = document.querySelector(".ico") as HTMLElement;

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
