export function saveSelectLvl(lvl: number) {
    window.localStorage.setItem("lvl", JSON.stringify(lvl));
}

export function getSaveSelectLvl() {
    try {
        /* console.log(JSON.parse(window.localStorage.getItem("lvl"))); */
        // @ts-ignore: error message
        return JSON.parse(window.localStorage.getItem("lvl"));
    } catch (error) {
        return null;
    }
}

export function removeSaveSelectLvl(lvl: number) {
    window.localStorage.removeItem("lvl");
}
