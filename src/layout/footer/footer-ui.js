import { btnFacebook, btnInstagram, btnX } from "../../components/icons-ui/icons-social-red.js";

export function footer() {
    return `
        <footer class="w-full p-4 pb-2 bg-champagne flex flex-col justify-center mt-8 sm:mt-20">
            <div class="flex flex-col justify-around mb-4 sm:flex-row">
                <div class="mb-2 h-13 sm:h-17 flex flex-col sm:m-0">
                    <h4 class="text-coral-red sm:text-xl font-bold">Ubicacion</h4>
                    <p class="h-full text-sm sm:text-base flex items-end">Crra 18a #50-03 Los Fundadores-Soledad</p>
                </div>
                <div class="h-13 sm:h-17 flex flex-col">
                    <h4 class="text-coral-red sm:text-xl font-bold mb-1">Siguenos</h4>
                    <div class="flex gap-1 sm:gap-2">
                        ${btnFacebook()}
                        ${btnInstagram()}
                        ${btnX()}
                    </div>
                </div>
            </div>
            <div class="flex gap-1 justify-center text-sm">
                <p>Hechos con ❤️ por</p>
                <a href="https://www.facebook.com/roneily.carcamonoriega" class="text-blue-glacial underline font-bold">Roneily Carolit</a>
            </div>
        </footer>
    `;
};