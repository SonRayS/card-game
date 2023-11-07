export function renderCardsForm(pairs) {
    if (pairs === 3) {
        return `<div id="game" class="cards-3">`;
    } else if (pairs === 6) {
        return `<div id="game" class="cards-6">`;
    } else if (pairs === 9) {
        return `<div id="game" class="cards-9">`;
    }
}
