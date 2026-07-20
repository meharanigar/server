import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
    {
        fullName:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        phone:{
            type:String,
            required:true,
            min:10,
            max:10
        },
        village:{
            type:String,
            required:true,
        },
        ward:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
        },
    },
    {
     timestamps:true,
    }
);

const Client = mongoose.model("Client",clientSchema);
export default Client;