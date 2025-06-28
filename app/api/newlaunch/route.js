import connectdb from "@/lib/connectdb";
import { NextResponse } from "next/server";
import NewLaunch from "@/models/newlaunch";

export const POST = async (request) => {
  try {
    await connectdb();

    const { title, youtube_url, heading, sub_heading, prise, launch_date, key_heading, key_points } = await request.json();

    if (!title || !youtube_url || !heading || !sub_heading) {
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
      data: newdata,
      message: "Data added successfully",
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message || "Something went wrong",
    }, { status: 500 });
  }
};


export const GET = async (request) => {
  try {
       await connectdb()
    const finedlaunch = await NewLaunch.find()
    if (!finedlaunch) {
      return NextResponse({
        success: false,
        data: null,
        message: "Not finded data.."
      })
    }
    return NextResponse.json({
      success: true,
      data: finedlaunch,
      message: "finded launcher successfully"
    })

  } catch (error) {
    return NextResponse.json({
      success: false,
      data: null,
      message: `someting want wrong ${error}`
    })
  }

}
