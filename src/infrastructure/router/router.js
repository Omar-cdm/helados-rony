export function initRouter() {
    const menu = document.querySelector('.nav-menu');

    const hero = document.querySelector('.hero');
    const products = document.querySelector('.products');
    const aboutMe = document.querySelector('.about-me');

    menu.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.textContent == 'Inicio') {
            hero.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            menu.classList.toggle('hidden');
        } else if(e.target.textContent == 'Productos') {
            products.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            menu.classList.toggle('hidden');
        } else if(e.target.textContent == 'Sobre Nosotros') {
            aboutMe.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            menu.classList.toggle('hidden');
        };
    });

    window.addEventListener('click', (e) => {
        if(!e.target.classList.contains('btn-nav')) {
           menu.classList.add('hidden');
        };
    });
};