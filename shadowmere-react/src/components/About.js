import React from "react";
import '../index.css';

function About() {
    return (
        <div class="contenido-about col-span-12 xl:col-span-9 w-full h-fit bg-white dark:bg-[#212121] dark:text-[#cfcfcf] rounded-lg shadow-lg flex flex-col gap-6 p-8 mb-4 2xl:mb-40">

            <h1 class="text-2xl font-bold">About Us</h1>
            <p>Shadowmere. A list of Shadowsocks proxies</p>
            <h2 class="font-bold">Disclaimer.</h2>
            <p>This website is only a list of tunnels collected all around internet. We do NOT provide or maintain any of these tunnels. <span class="bg-red-600 text-white">Use them at your own risk.</span></p>
            <h2 class="font-bold">How do I use this?</h2>
            <p>Go give <a href="https://www.shadowsocks.org" class="text-[#579eff] font-bold after:content-['\f08e'] hover:text-[#467ecc] transition-colors after:pl-1 after:font-awesome after:text-sm">Shadowsocks</a> a quick look for information. Here is a list of clients for several platforms, but my favorite is Outline for any platform and shadowsocks for Android</p>
            
        </div>
    )
}

export default About;