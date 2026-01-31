export function layout() {
    return `
        ${header()}
        <main class="h-[calc(100svh-200px)] p-2">
            <section class="h-full flex flex-col justify-evenly">
                <h2 class="text-xl text-pink-600 text-center sm:text-2xl">Helados hechos con mucho amor, creados para enamorar.</h2>
                <div class="w-full h-5/6 p-2 grid grid-cols-2 place-items-center gap-y-4 overflow-y-auto sm:grid-cols-4 lg:grid-cols-5">${createCard()}</div>
            </section>
        </main>
        ${button()}
        ${footer()}
    `;
};

function header() {
    return `
        <header class="h-24 bg-linear-to-t from-pink-200 to-purple-400/50">
            <div class="h-full w-full backdrop-blur-sm flex justify-center items-center">
                <div class="flex justify-center items-center opacity-0 animate-entrance">
                    <svg class="size-11 fill-pink-700 -rotate-10" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 480 480" xml:space="preserve">
                        <path d="M357.844,120.1l-8.592-1.222c-25.943-3.69-49.791-16.637-67.152-36.456c-17.521-20.003-27.186-45.682-27.213-72.309
                        l-0.01-9.558l-9.548-0.422C243.274,0.042,241.581,0,240,0c-64.979,0-117.844,52.865-117.844,117.845v225.579h69.056v87.788
                        C191.211,458.114,213.098,480,240,480c26.902,0,48.789-21.886,48.789-48.789v-87.788h69.056V120.1z M268.789,431.211
                        C268.789,447.085,255.874,460,240,460c-15.874,0-28.788-12.915-28.788-28.789v-87.788h57.577V431.211z M337.844,323.423H142.156
                        V117.845c0-52.371,41.354-95.264,93.125-97.732c2.169,27.86,13.262,54.353,31.776,75.488c18.582,21.212,43.464,35.763,70.788,41.558
                        V323.423z"/>
                    </svg>
                    <h1 class="text-4xl text-pink-600 font-extrabold">Helados Rony</h1>
                    <svg class="size-11 fill-pink-700 rotate-10" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 480 480" xml:space="preserve">
                        <path d="M357.844,120.1l-8.592-1.222c-25.943-3.69-49.791-16.637-67.152-36.456c-17.521-20.003-27.186-45.682-27.213-72.309
                        l-0.01-9.558l-9.548-0.422C243.274,0.042,241.581,0,240,0c-64.979,0-117.844,52.865-117.844,117.845v225.579h69.056v87.788
                        C191.211,458.114,213.098,480,240,480c26.902,0,48.789-21.886,48.789-48.789v-87.788h69.056V120.1z M268.789,431.211
                        C268.789,447.085,255.874,460,240,460c-15.874,0-28.788-12.915-28.788-28.789v-87.788h57.577V431.211z M337.844,323.423H142.156
                        V117.845c0-52.371,41.354-95.264,93.125-97.732c2.169,27.86,13.262,54.353,31.776,75.488c18.582,21.212,43.464,35.763,70.788,41.558
                        V323.423z"/>
                    </svg>
                </div>
            </div>
        </header>
    `;
};

function createCard() {
    const productos = [ 
        { img:'./assets/helado-oreo.webp', nombre:'Oreo' },
        { img:'./assets/helado-fresa.webp', nombre:'Fresa' },
        { img:'./assets/helado-mora.webp', nombre:'Mora' },
        { img:'./assets/helado-frutos-rojos.webp', nombre:'Frutos Rojos' },
        { img:'./assets/helado-durazno.webp', nombre:'Durazno' }
    ];
    const listaProductos = productos.map((p) => { return cardHelados(p.img, p.nombre) });
    return listaProductos.join('');
};

function cardHelados(image, nombre) {
    return `
        <article class="w-34 h-40 p-2 inset-shadow-xl inset-shadow-purple-400 rounded-xl flex flex-col items-center justify-center">
            <div class="size-20 rounded-md overflow-hidden mask-b-from-10"><img src="${image}" alt="product-image" /></div>
            <h3 class="text-lg text-pink-700 font-bold mb-1">${nombre}</h3>
            <p class="bg-green-600 text-xs text-center text-pink-200 font-semibold px-2 py-1 rounded-full">Disponible</p>
        </article>
    `;
};

function button() {
    return `
        <a href="https://wa.me/3227861418?text=Hola%20Roneily,%20Brindame%20más%20información%20de%20los%20helados." class="size-14 bg-green-500 rounded-full border-1 border-purple-400 fixed z-1 bottom-22 right-4 flex justify-center items-center"><svg class="size-10 fill-white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg></a>
        <div class="fixed fixed bottom-24 right-6 size-10 animate-ping rounded-full bg-green-400 opacity-75"></div>
    `;
};

function footer() {
    return `
        <footer class="w-full h-24 p-2 bg-linear-to-t from-purple-400/44 to-transparent fixed bottom-0 flex flex-col justify-center text-pink-600">
            <div class="flex flex-col justify-center mb-1">
                <p class="text-center text-lg font-bold">Ubicacion</p>
                <p class="text-center">Crra 18a #50-03 Los Fundadores-Soledad</p>
            </div>
            <div class="flex gap-1 justify-center mb-1">
                <p>Hechos con ❤️ por</p>
                <a href="https://www.facebook.com/roneily.carcamonoriega" class="underline font-bold">Roneily Carolit</a>
            </div>
        </footer>
    `;
};