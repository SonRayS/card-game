import "./styles.css";
import { renderStartForm } from "./modules/selectLvlGameForm";
import { getElement } from "./modules/getElementById";

renderStartForm({ appEl: getElement().appElement });
