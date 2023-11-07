export function getElement() {
    const appElement = document.getElementById("app");
    const selectBtnOne = document.getElementById("radio1");
    const selectBtnTwo = document.getElementById("radio2");
    const selectBtnTree = document.getElementById("radio3");
    const minEl = document.querySelector(".headFormField-timer_time-min");
    const secEl = document.querySelector(".headFormField-timer_time-sec");
    const start = document.querySelector(".js-btm-reset");
    const game = document.getElementById("game");

    const module = {
        game: game,
        start: start,
        minEl: minEl,
        secEl: secEl,
        appElement: appElement,
        selectBtnOne: selectBtnOne,
        selectBtnTwo: selectBtnTwo,
        selectBtnTree: selectBtnTree,
    };

    return module;
}
