import React, {useState, useEffect} from "react";
import '../index.css';
import getFlagEmoji from "./Functions"
import axios from 'axios'
import DataFetching from "./DataFetching"

function ContentServers () {

    const [proxies, setProxies] = useState({})
    // const [servers, setServers] = useState([])
    // const countries = useState(DataFetching())
    

    useEffect(() => {
        // axios.get('https://shadowmere.akiel.dev/api/proxies/?format=json&is_active=true&page=1')

        axios
        .get('https://shadowmere.akiel.dev/api/proxies/?format=json&is_active=true&page=1')
        .then(response => {
            // console.log(response)
            // proxy = response.data
            // setPosts(response.data.results)
            setProxies(response.data)
            // setServers(response.data.results)
            console.log(response.data.results)
        })
        .catch(err => {
            // console.log(err)
        })

    },[])

    return (

        
        <div className="w-full h-auto">
            {proxies.results.map(item => (

                <div className="item-server-vpn w-full h-20 sm:h-24 bg-white dark:bg-[#212121] dark:text-[#cfcfcf] rounded-lg shrink-0 flex items-center justify-between px-4 md:px-8 py-2 shadow-lg hover:cursor-pointer hover:-translate-y-[2px] dark:hover:bg-[#303030] hover:bg-[#FDFDFD] transition-all">

                    <div className="data-country-ip gap-2 md:gap-4 flex items-center">
                        <div className="font-twemoji select-none flex items-center text-xl w-6 h-6 cursor-pointer">{getFlagEmoji(item.location_country_code)}</div>
                        <span className="w-12 h-6 flex items-center justify-center select-none bg-[#303030] dark:bg-[#cfcfcf] px-2 text-[#cfcfcf] dark:text-[#303030] font-medium text-xs sm:text-sm rounded"></span>
                        <span className="font-semibold w-28 overflow-hidden truncate text-sm sm:text-base select-none">{item.ip_address}</span>
                    </div>
                    
                    <div className="data-operations gap-4 flex flex-row-reverse items-center" >
                        <button title="Copiar al Portapapeles" className="opt-copiar relative w-4 h-4 sm:w-10 sm:h-10 rounded-md flex items-center justify-center cursor-pointer hover:bg-[#EBEBEB] dark:hover:bg-[#1B1B1B] active:bg-[#D7D7D7] dark:active:bg-[#111111] transition-colors transition-transform active:scale-[95%]">
                            <div className="absolute w-4 h-4 sm:w-10 sm:h-10 rounded-md flex items-center justify-center">
                                <svg className=" bg-transparent w-6 h-6 stroke-[#303030] dark:stroke-[#cfcfcf]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 11.2L10.25 16L19 8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>                                
                            </div>
                            <svg className="fill-[#303030] dark:fill-[#cfcfcf]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 3.75V0H10.625C9.58945 0 8.75 0.839453 8.75 1.875V13.125C8.75 14.1605 9.58945 15 10.625 15H18.125C19.1605 15 20 14.1605 20 13.125V5H16.2852C15.5625 5 15 4.4375 15 3.75ZM16.25 0V3.75H20L16.25 0ZM7.5 13.75V5H1.875C0.839453 5 0 5.83945 0 6.875V18.125C0 19.1605 0.839453 20 1.875 20H9.375C10.4105 20 11.25 19.1605 11.25 18.125V16.25H10C8.62109 16.25 7.5 15.1289 7.5 13.75Z"/>
                                    </svg> 
                        </button>
                    
                        <button title="Codigo QR" className="opt-codigo-qr w-4 h-4 sm:w-10 sm:h-10 rounded-md flex items-center justify-center cursor-pointer hover:bg-[#EBEBEB] dark:hover:bg-[#1B1B1B] active:bg-[#D7D7D7] dark:active:bg-[#111111] transition-colors transition-transform active:scale-[95%]">
                            <svg className="fill-[#303030] dark:fill-[#cfcfcf] " width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_522_872)">
                                    <path d="M0.25 8.75H7.75V1.25H0.25V8.75ZM2.75 3.75H5.25V6.25H2.75V3.75ZM10.25 1.25V8.75H17.75V1.25H10.25ZM15.25 6.25H12.75V3.75H15.25V6.25ZM0.25 18.75H7.75V11.25H0.25V18.75ZM2.75 13.75H5.25V16.25H2.75V13.75ZM16.5 11.25H17.75V16.25H14V15H12.75V18.75H10.25V11.25H14V12.5H16.5V11.25ZM16.5 17.5H17.75V18.75H16.5V17.5ZM14 17.5H15.25V18.75H14V17.5Z"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_522_872">
                                    <rect width="17.5" height="20" fill="white" transform="translate(0.25)"/>
                                    </clipPath>
                                    </defs>
                            </svg>
                        </button>
                    
                        
                        <button title="Descargar archivo de configuración" className="opt-descargar w-4 h-4 sm:w-10 sm:h-10 rounded-md flex items-center justify-center cursor-pointer hover:bg-[#EBEBEB] dark:hover:bg-[#1B1B1B] active:bg-[#D7D7D7] dark:active:bg-[#111111] transition-colors transition-transform active:scale-[95%]">
                            <svg className="fill-[#303030] dark:fill-[#cfcfcf]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.75 13.75H13.5352L11.7676 15.5176C11.2969 15.9883 10.668 16.25 10 16.25C9.33203 16.25 8.70469 15.99 8.23242 15.5176L6.46484 13.75H1.25C0.559766 13.75 0 14.3098 0 15V18.75C0 19.4402 0.559766 20 1.25 20H18.75C19.4402 20 20 19.4402 20 18.75V15C20 14.3086 19.4414 13.75 18.75 13.75ZM16.875 17.8125C16.3594 17.8125 15.9375 17.3906 15.9375 16.875C15.9375 16.3594 16.3594 15.9375 16.875 15.9375C17.3906 15.9375 17.8125 16.3594 17.8125 16.875C17.8125 17.3906 17.3906 17.8125 16.875 17.8125ZM9.11719 14.6328C9.35938 14.8789 9.67969 15 10 15C10.3203 15 10.6398 14.8779 10.8836 14.6338L15.8836 9.63379C16.3715 9.14551 16.3715 8.35449 15.8836 7.86621C15.3953 7.37793 14.6039 7.37793 14.116 7.86621L11.25 10.7344V1.25C11.25 0.559766 10.6902 0 10 0C9.30859 0 8.75 0.559766 8.75 1.25V10.7344L5.88281 7.86719C5.39492 7.37891 4.60352 7.37891 4.11523 7.86719C3.62734 8.35547 3.62734 9.14648 4.11523 9.63477L9.11719 14.6328Z"/>
                                    </svg>
                        </button>
                        
                </div>
</div> 
))}
        </div>
    )
}



export default ContentServers;