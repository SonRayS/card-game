export function saveSelectLvl(lvl) {
    window.localStorage.setItem("lvl", JSON.stringify(lvl));
    console.log(localStorage);
}

export function getSaveSelectLvl() {
    try {
        /* console.log(JSON.parse(window.localStorage.getItem("lvl"))); */
        return JSON.parse(window.localStorage.getItem("lvl"));
    } catch (error) {
        return null;
    }
}

export function removeSaveSelectLvl(lvl) {
    window.localStorage.removeItem("lvl");
}
