"use client"
import { gsap } from "gsap"
import React, { useEffect } from 'react'

const LoadingComp = () => {

    return (
        <div className='h-screen w-screen flex items-center justify-center absolute top-0 left-0 bg-black flex-col'>
            <div className='w-[40px] h-[40px] border-2 border-gray-500 loading-box relative '>
                  <div className="h-[30px] w-[30px] bg-blue-500  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] animate-ping"></div>
            </div>
            <h3 className="mt-5 text-xl text-gray-500">loading</h3>
        </div>
    )
}

export default LoadingComp