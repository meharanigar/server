import mongoose from "mongoose";
import dontenv from "dotenv";


async function connectDB() {

    try{
        await mongoose.connect(process.env.MONGO_URI)
    console.log("mongodb is connected ")
    }catch(error){
        console.log("Database connection fails")
        console.log(error)
    }
   

}
export default connectDB;