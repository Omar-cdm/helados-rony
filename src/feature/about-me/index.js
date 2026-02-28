import { sectionAboutMe } from "./about-me-ui.js";

export function initSectionAboutMe() {
    const main = document.querySelector('main');

    main.insertAdjacentHTML('beforeend', sectionAboutMe());
};