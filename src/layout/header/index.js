import { header } from "./header-ui.js";
import { activeBtnNav } from "./listeners.js";

export function initHeader() {
    const root = document.querySelector('#root');

    root.insertAdjacentHTML('beforeend', header());

    activeBtnNav();
};