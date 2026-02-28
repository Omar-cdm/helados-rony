export function sectionProducts() {
    return `
        <section class="px-4 sm:p-10 mb-12 sm:mb-20 products">
            <h2 class="text-2xl mb-2 sm:text-4xl font-bold text-coral-red sm:mb-4">Nuestros Helados</h2>
            
            <p class="text-sm mb-1 sm:text-sm mb-4">Cada bocado, un reflejo de amor. Cada helado, la pureza de la fruta natural.</p>
            <div class="w-full p-2 flex justify-center">
                <div class="sm:w-5/6 p-2 grid grid-cols-2 place-items-center gap-6 overflow-y-auto sm:grid-cols-4 lg:grid-cols-5 container-products"></div>
            </div>
        </section>
    `;
};