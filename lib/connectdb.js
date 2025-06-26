import mongoose from "mongoose";

const connectdb = async () => {
    try {
         if(mongoose.connection.readyState === 1){
             return
         }
         await mongoose.connect(`${process.env.MONGO_URI}`);
         console.log('connected to the database successfully 🥸..');

    } catch (error) {
         console.log(`something went wrong: ${error?.message}`);
         process.exit(1)
    }
}

export default connectdb