export function cardHelados(image, nombre) {
    return `
        <article class="w-30 sm:w-38 sm:h-46 p-2 inset-shadow-xl inset-shadow-blue-glacial rounded-xl flex flex-col items-center justify-center">
            <div class="size-18 sm:size-20 rounded-md overflow-hidden mask-b-from-10"><img src="${image}" alt="product-image" /></div>
            <h3 class="sm:text-lg text-coral-red font-bold mb-[2px]">${nombre}</h3>
            <p class="text-sm font-semibold mb-[2px]">$ 2.500</p>
            <p class="bg-green-600 text-xs text-center text-off-white font-semibold px-2 py-1 rounded-full">Disponible</p>
        </article>
    `;
};
