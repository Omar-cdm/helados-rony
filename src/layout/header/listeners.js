export function activeBtnNav() {
    const btnNav = document.querySelector('.btn-nav');
    const navMenu = document.querySelector('.nav-menu');

    btnNav.addEventListener('click', () => {
        navMenu.classList.toggle('hidden');
    })
};