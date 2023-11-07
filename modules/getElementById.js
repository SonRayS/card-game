export function getElement() {
    const appElement = document.getElementById("app");
    const selectBtnOne = document.getElementById("radio1");
    const selectBtnTwo = document.getElementById("radio2");
    const selectBtnTree = document.getElementById("radio3");

    const module = {
        appElement: appElement,
        selectBtnOne: selectBtnOne,
        selectBtnTwo: selectBtnTwo,
        selectBtnTree: selectBtnTree,
    };

    return module;
}
