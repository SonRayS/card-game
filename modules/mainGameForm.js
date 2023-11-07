import { getElement } from "./getElementById.js";

export function formGameField({ lvl }) {
    if (lvl === 1) {
        console.log("1");
    } else if (lvl === 2) {
        console.log("2");
    } else if (lvl === 3) {
        console.log("3");
    } else {
        console.log(
            "Что то пошло не так, скорее всего проблемы с выбором уровня"
        );
    }
}
