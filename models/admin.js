import mongoose, {Schema,model} from "mongoose";

const adminSchema = new Schema({
     mobile_number:{
         type:Number,
         required:true,
     },
     password:{
        type:String,
        required:true
     }
})

const Admin = mongoose.model.Admin || model("Admin",adminSchema);
export default Admin