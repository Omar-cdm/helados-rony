import { iconIceCreamL, iconIceCreamR } from "../../components/icons-ui/icons-header.js";
import { navMenu } from "./components/nav-menu.js";

export function header() { 
    return `
        <header class="h-16 sm:h-20 bg-champagne  m-1 sm:m-2 rounded-xl">
            <div class="h-full w-full px-2 sm:px-8 py-1 flex justify-between items-center">
                <div class="flex justify-center items-center opacity-0 animate-entrance">
                    ${iconIceCreamL()}
                    <h1 class="text-xl sm:text-2xl text-coral-red font-extrabold">Helados Rone</h1>
                    ${iconIceCreamR()}
                </div>
                <button class="size-7 sm:size-9 border-2 border-blue-glacial rounded-full flex flex-col gap-1 justify-center items-center hover:cursor-pointer btn-nav">
                    <span class="w-2/3 h-[2px] bg-coral-red rounded-full"></span>
                    <span class="w-4/5 h-[2px] bg-blue-glacial rounded-full"></span>
                    <span class="w-2/3 h-[2px] bg-coral-red rounded-full"></span>
                </button>
                ${navMenu()}
            </div>
        </header>
    `;
};
