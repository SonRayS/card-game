const cardsArray = require("./objArray");

test("Obj", () => {
    expect(cardsArray).toHaveLength(6);
    expect(cardsArray).toContainEqual({ card: "6c.png", index: 0 });
});
