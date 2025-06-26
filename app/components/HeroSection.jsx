import React from 'react'

const HeroSection = () => {
  return (
    <div className='w-screen min-h-[70vh] bg-red-600 flex justify-between flex-wrap'>
        <div className='w-1/2 bg-black px-6 flex items-start justify-center flex-col gap-4'>
             <h2 className='capitalize font-bold text-5xl text-start'>learn MERN full stack with AI power within 7 months...</h2>
             <div className='min-w-[250px] h-[45px] bg-gray-700 rounded-md'></div>
        </div>
    </div>
  )
}

export default HeroSection