"use client"
import React, { useRef, useState } from 'react'
import { gsap } from 'gsap'


const KeyCard = () => {

   const boxref = useRef(null)
   const [isCardOpen,setIsCardOpen] = useState(false)


   const handelOpning = () => {
    gsap.to(boxref.current, {
      minHeight: "500px",
      duration: 0.5,
      ease: "power2.out"
    });
  };


   const handelClosing = () => {
     gsap.to(boxref.current, {
        minHeight: "0px",
        duration: 0.5,
        ease: "power2.out"
    });
   }

   const toggleCard = () => {
    if(!isCardOpen){
      handelOpning()
      setIsCardOpen(true)
    }else{
      handelClosing()
      setIsCardOpen(false)
    }
   }


  return (
    <>
      <div className='min-h-[100px] border-t-[1px] border-t-white mb-10 mt-2 px-5 text-3xl flex items-center justify-between'>
        <span><span>1.</span> Master Front-end </span>
        <span className='text-blue-500 text-2xl cursor-pointer' onClick={()=>toggleCard()} >
          <span>more</span>
          <i className={`${isCardOpen ? "ri-arrow-up-line" : "ri-arrow-down-line"}`}></i>
        </span>
      </div>
      <div className='bg-red-400 key-points-box' ref={boxref}></div>
    </>
  );
};

export default KeyCard;
