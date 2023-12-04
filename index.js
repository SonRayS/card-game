import { renderStartForm } from "./modules/selectLvlGameForm.js";
import { getElement } from "./modules/getElementById.js";
import "./styles.css";

renderStartForm({ appEl: getElement().appElement });
