import { initHeader } from '../src/layout/header/index.js';
import { initSectionHero } from '../src/feature/hero/index.js';
import { initMain } from '../src/layout/main/index.js';
import { initFooter } from '../src/layout/footer/index.js';
import { initSectionProducts } from '../src/feature/products/index.js';
import { initSectionAboutMe } from '../src/feature/about-me/index.js';
import { initRouter } from '../src/infrastructure/router/router.js';

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