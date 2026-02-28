import { sectionHero } from "./hero-ui.js";

export function initSectionHero() {
    const main = document.querySelector('main');

    main.insertAdjacentHTML('beforeend', sectionHero());
};