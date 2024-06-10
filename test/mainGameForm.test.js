const cardsNumberArray = require("./mainGameForm");

test("array card length = 36", () => {
    expect(cardsNumberArray).toHaveLength(36);
    expect(cardsNumberArray).not.toEqual([]);
    expect(cardsNumberArray).toContain("Ac.png");
});
