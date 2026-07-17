import Client from "../models/Client";

export async function addClient(req,res){
    try{
        const client = await Client.create(req,body);

        res.status(201).json({
            success:true,
            messafe:"client found",

        });
    }catch(error){
        res.status(500).json({
            success:false,
            message: error.message,
        });
    }
    
}