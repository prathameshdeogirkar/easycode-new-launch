import EASYCODEl_LOGO from "@/assets/easycode-logo.svg"
import USER_ICON from "@/assets/user-icon.svg"
import Image from "next/image"


const Navbar = () => {
  return (
    <div className="h-17 w-screen  flex items-center text-white justify-between px-4 backdrop-blur-md bg-gray-900" >
       <div className="flex items-center gap-2.5 min-w-[150px] justify-center">
           <img src={EASYCODEl_LOGO.src} height="30px" width="30px" alt="easy-code-logo" />
           <span className="text-md sm:text-2xl ">easycode | upcoming </span>
       </div>
       <span className="text-md sm:text-2xl ">
        <i className="ri-user-fill m-2"></i>
       </span>
    </div>
  )
}

export default Navbar