export function navMenu() {
    return `
        <nav class="sm:w-44 sm:h-34 bg-champagne border-1 border-blue-glacial rounded-xl absolute top-10 right-7 sm:top-14 sm:right-18 hidden nav-menu">
            <ul class="w-full h-full p-2 flex flex-col items-center justify-center gap-2">
                <li class="text-xs sm:text-base px-4 py-1 bg-coral-red text-off-white rounded-full hover:cursor-pointer">Inicio</li>
                <li class="text-xs sm:text-base px-4 py-1 bg-coral-red text-off-white rounded-full hover:cursor-pointer">Productos</li>
                <li class="text-xs sm:text-base px-4 py-1 bg-coral-red text-off-white rounded-full hover:cursor-pointer">Sobre Nosotros</li>
            </ul>
        </nav>
    `;
};