import { IcreCream } from "../../core/domain/product-model.js";

const oreo = new IcreCream(
    1,
    'Oreo',
    '/assets/helado-oreo.webp',
    2500,
    'Disponible'
);

const fresa = new IcreCream(
    2,
    'Fresa',
    '/assets/helado-fresa.webp',
    'Disponible'
);

const mora = new IcreCream(
    3,
    'Mora',
    '/assets/helado-mora.webp',
    'Disponible'
);

const frutosRojos = new IcreCream(
    4,
    'Frutos Rojos',
    '/assets/helado-frutos-rojos.webp',
    'Disponible'
);

const durazno = new IcreCream(
    5,
    'Durazno',
    '/assets/helado-durazno.webp',
    'Disponible'
);

export const productsIceCream = [
    oreo,
    fresa,
    mora,
    frutosRojos,
    durazno
];