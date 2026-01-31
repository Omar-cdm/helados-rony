import { layout } from './components.js';

renderizar(layout());

function renderizar(section) {
    const root = document.querySelector('#root');
    root.innerHTML = section;
};