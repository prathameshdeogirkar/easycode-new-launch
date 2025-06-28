"use client"
import EASYCODEl_LOGO from "@/assets/easycode-logo.svg"
import USER_ICON from "@/assets/user-icon.svg"
import Image from "next/image"
import { useState } from "react"
import Login from "./Login"

const Navbar = () => {

  const [openLogin,setopenLogin] = useState(false)
  return (
    <div className="h-17 w-screen  flex items-center text-white justify-between px-4 " >
       <div className="flex items-center gap-2.5 min-w-[150px] justify-center">
           <img src={EASYCODEl_LOGO.src} height="30px" width="30px" alt="easy-code-logo" />
           <span className="text-md sm:text-2xl ">easycode | upcoming </span>
       </div>
       <span className="text-md sm:text-2xl" onClick={()=> {setopenLogin(true)}}>
        <i className="ri-user-fill m-2"></i>
       </span>
       {
        openLogin ? <Login setopenLogin={setopenLogin}/> : null
       }
    </div>
  )
}

export default Navbar