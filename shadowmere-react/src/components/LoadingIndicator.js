import React, { Component } from 'react'
import { usePromiseTracker } from "react-promise-tracker";

function LoadingIndicator() {
    const { promiseInProgress } = usePromiseTracker();

    return(
        promiseInProgress && 
        <div className="loader-screen w-full h-full bg-white dark:bg-[#141414] flex items-center justify-center">
				<lottie-player
					src="../others/logo-animation-2.json"
					background="transparent"
					speed="1"
					style="width: 100px; height: 100px;"
					loop
					autoplay></lottie-player>
			</div>
    )
}

export default LoadingIndicator;
