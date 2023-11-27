import { renderStartForm } from "./modules/selectLvlGameForm.js";
import { getElement } from "./modules/getElementById.js";

getElement().appElement ? console.log("live") : console.log("none");
renderStartForm({ appEl: getElement().appElement });
