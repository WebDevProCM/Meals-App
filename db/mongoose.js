import mongoose from "mongoose";

const mongooseConnection = async ()=>{
    try{
        await mongoose.connect(process.env.DATABASE_ATLAS);
    }catch(error){
        console.log(error);
    }
}

export default mongooseConnection