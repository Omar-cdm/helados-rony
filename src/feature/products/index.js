import { productsIceCream } from "../../infrastructure/data/products-data.js";
import { cardHelados } from "./components/product-card.js";
import { sectionProducts } from "./product-ui.js";

export function initSectionProducts() {
    const main = document.querySelector('main');

    main.insertAdjacentHTML('beforeend', sectionProducts());

    const containerProducts = document.querySelector('.container-products');

    renderProducts(containerProducts);
};

function renderProducts(container) {
    const listProduct = productsIceCream.map((p) => { return cardHelados(p.img, p.name, p.cost) }).join('');

    container.insertAdjacentHTML('beforeend', listProduct);
};