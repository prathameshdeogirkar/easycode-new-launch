import connectdb from "@/lib/connectdb";
import { NextResponse } from "next/server";
import NewLaunch from "@/models/newlaunch";

export const POST = async (request) => {
  try {
    await connectdb();

    const { title, youtube_url, heading, sub_heading, prise, launch_date, key_heading, key_points } = await request.json();

    if (!title || !youtube_url || !heading || !sub_heading || !prise || !launch_date || !key_heading || !key_points) {
      return NextResponse.json({
        success: false,
        message: "All fields are required",
      });
    }

   const newdata = new NewLaunch({
     title,
       youtube_url,
       heading,
       sub_heading,
       prise,
       launch_date,
       key_heading,
       key_points
     })
     await newdata.save();

  return NextResponse.json({
     success: true,
     data:newdata ,
     message: "Data added successfully",
     });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message || "Something went wrong",
    }, { status: 500 });
  }
};
