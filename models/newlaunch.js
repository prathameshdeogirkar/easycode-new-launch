import mongoose, { Schema,model } from "mongoose";

const newLaunchSchema  = new Schema({
       title:{
         reuired:true,
         type:String
       },
       youtube_url:{
         required:true,
         type:String
       },
       heading:{
         required:true,
         type:String
       },
       sub_heading:{
         required:true,
         type:String,
       },
       prise:{
         type:String
       },
       launch_date:{
        type:Date
       },
       key_heading:{
         type:String
       },
       key_points:[{
         point_name:{type:String},
         point_description:{type:String}
       }]
},{timestamps:true})

const NewLaunch = mongoose.models.NewLaunch || model("NewLaunch",newLaunchSchema);

export default NewLaunch;