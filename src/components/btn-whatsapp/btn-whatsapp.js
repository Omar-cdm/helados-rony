import { iconWhatsapp } from "../icons-ui/icon-whatsapp.js";

export function button() {
    return `
        <a href="https://wa.me/+573227861418?text=Hola%20Roneily,%20Brindame%20más%20información%20de%20los%20helados." class="size-12 sm:size-14 bg-green-500 rounded-full fixed z-1 bottom-22 right-2 sm:bottom-22 sm:right-4 flex justify-center items-center">
            ${iconWhatsapp()}
        </a>
        <div class="fixed fixed bottom-24 right-4 size-8 sm:bottom-24 sm:right-6 sm:size-10 animate-ping rounded-full bg-green-400 opacity-75"></div>
    `;
};