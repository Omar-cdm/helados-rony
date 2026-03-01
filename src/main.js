import { initHeader } from './layout/header/index.js';
import { initSectionHero } from './feature/hero/index.js';
import { initMain } from './layout/main/index.js';
import { initFooter } from './layout/footer/index.js';
import { initSectionProducts } from './feature/products/index.js';
import { initSectionAboutMe } from './feature/about-me/index.js';
import { initRouter } from './infrastructure/router/router.js';

function initApp() {
    initHeader();
    initMain();
    initFooter();
    initSectionHero();
    initSectionProducts();
    initSectionAboutMe();
    initRouter();
};

initApp();  