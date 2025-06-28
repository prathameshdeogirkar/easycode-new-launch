import { NextResponse } from "next/server"
import NewLaunch from "@/models/newlaunch"

export const GET = async( request,{params}) =>{
    const {newid} = await params
    console.log(newid)
    try {
         if(!newid){
             return NextResponse.json({
                success : false,
                data: null,
                message:"id is required"
            })
         }
     
        const finedlaunch = await NewLaunch.findById(newid)  
        if(!finedlaunch){
            return NextResponse({
                success : false,
                data : null,
                message : "Not finded data.."
            })
        }
        return NextResponse.json({
            success : true,
            data: finedlaunch,
            message : "finded launcher successfully"
        })

    } catch (error) {
        return NextResponse.json({
            success: false,
            data:null,
            message : `someting want wrong ${error}`
        })
    }
    
}