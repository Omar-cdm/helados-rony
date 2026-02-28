export function sectionHero() {
    return `
        <section class="min-h-[calc(100svh-70px)] sm:min-h-[calc(100svh-140px)] grid place-items-center hero">
            <div class="w-full h-full flex flex-col-reverse justify-evenly items-center sm:flex-row sm:justify-evenly">
                <div class="w-full px-4 sm:w-1/3 sm:h-70 flex flex-col justify-center">
                    <h2 class="text-2xl text-coral-red font-bold mb-4 sm:text-4xl sm:mb-3">Sabores que nacen del corazón</h2>
                    <p class="text-sm mb-3 sm:text-lg sm:mb-3">Transformamos la fruta real en helados artesanales hechos con amor. Sin secretos, solo naturaleza.</p>
                    <a href="https://wa.me/+573227861418?text=Hola%20Roneily,%20Brindame%20más%20información%20de%20los%20helados." class="text-center text-sm text-off-white w-28 py-1 sm:w-30 bg-blue-glacial rounded-full">Contactanos</a>
                </div>
    
                <div class="w-5/6 h-50 flex items-center sm:w-1/3 sm:h-70 rounded-xl shadow-xl/20 overflow-hidden"><img class="object-cover" src="/assets/image-hero.webp" alt="image ice cream"/></div>
            </div>
        </section>
    `;
};