import React from "react";
import '../index.css';

function ServersMobile() {
    <div class="modal-servers w-full h-screen bg-black/50 z-[40] fixed top-0">
        <div class="panel-bottom fixed w-full h-60 rounded-t-2xl overflow-hidden pointer-events-auto bg-white dark:bg-[#212121] bottom-16 transition-transform ease-in-out duration-150 right-0 z-50 lg:hidden flex flex-col items-center justify-between">
            <div class="w-full h-full flex flex-col items-center pt-2">
                <div class="w-full h-full flex flex-col items-center justify-between">
                    <div class=" w-full h-full text-[#303030] dark:text-[#cfcfcf] font-medium gap-4 flex flex-col items-center justify-center">
                        <span>Coming soon...</span>
                    </div>
                     {/* <template x-for="item in codes">
                        <button class=" w-full h-14 text-[#303030] dark:text-[#cfcfcf] font-medium gap-4 flex flex-col items-center justify-center snap-start active:bg-[#303030]" x-on:click="selectedCountry = item.code, $store.comps.listaHome = true, $store.comps.about = false, $store.comps.why = false, pageCounter = 1, selectedCountry === 'UN' ? $store.comps.proxies = await (await fetch('https://shadowmere.akiel.dev/api/proxies/?format=json&is_active=true&page=' + pageCounter.toString())).json() : $store.comps.proxies = await (await fetch('https://shadowmere.akiel.dev/api/proxies/?format=json&is_active=true&location_country_code=' + selectedCountry + '&page=' + pageCounter.toString())).json(), $store.comps.modal2 = false, $store.comps.notTouchBgCountries = false, count = 1">
                            <div class="flex gap-2 w-full items-center justify-center">
                                <div class="font-twemoji text-xl select-none overflow-y-scroll" x-text="getFlagEmoji(item.code)+ ' '+ item.name"></div>
                                <div class="font-twemoji select-none" x-text="' '+ item.name"></div>
                            </div>
                        </button>
                </template> */}
                </div>
            </div>
        </div>
    </div>
}

export default ServersMobile;