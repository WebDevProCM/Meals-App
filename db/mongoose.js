import mongoose from "mongoose";

const mongooseConnection = async ()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/meals-app");
    }catch(error){
        console.log(error);
    }
}

export default mongooseConnection