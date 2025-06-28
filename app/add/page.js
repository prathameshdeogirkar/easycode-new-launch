"use client"
import { useState } from "react"
import AppInput from "../components/AppInput"
import KeyPointInput from "../components/KeyPointInput"
import SubmitButton from "../components/SubmitButton"



function page() {
    const [key_number,setKey_number] = useState([])

    const adddata = async ()=>{
        const responce = await fetch("http://localhost:3000/api/newlaunch")
    }

     const  addKeyInput = ()=>{
          const randomId = Math.floor(Math.random()*10000)
          setKey_number([...key_number,randomId])
     }

    return (
        <>
            <div className="min-h-screen w-screen flex justify-center items-center mx-auto pb-10">
                <div className=" min-h-screen ">
                    <div className="h-[70vh] w-[30vw]  inline-block mx-auto" >
                        <AppInput inputValue="Add Title" placeholder={"Enter the title"} />
                        <AppInput inputValue="YouTube URL" placeholder={"Enter YouTube URL"} />
                        <AppInput inputValue="Heading" placeholder={"Enter Heading"} />
                        <AppInput inputValue="Sub Heading" placeholder={"Enter sub heading"} />
                        <AppInput inputValue="Price" placeholder={"Enter Price"} />
                        <AppInput inputValue="Launch Date" placeholder={"Enter Launch Date"} />
                        <AppInput inputValue="Key Heading" placeholder={"Key Hading"} />
                        {                          
                            <div className="flex flex-col mt-4 text-gray-600">
                            <span> add multiple key points</span>
                             {
                                 key_number.map((value,index)=>{
                                     return(
                                        <KeyPointInput  key={index} input_placeholder={"enter key point"} text_placeholder={"enter key description"}
                                         key_number={key_number}
                                         setKey_number={setKey_number}
                                         value={value}
                                        />
                                     )
                                 })
                             }
                            <span className="h-[25px] w-[60px] bg-gray-600 text-white font-light mt-5 rounded-md cursor-pointer text-center  flex items-center justify-center" onClick={()=>addKeyInput()}>Add</span>
                            </div>
                           
                        }
                        
                      <div className="mt-5">
                          <SubmitButton value={"submit"}/>
                      </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default page