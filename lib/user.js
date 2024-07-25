import User from "@/db/models/user.js";
import mongooseConnection from "@/db/mongoose";

export async function newUser(userData){
    try{
        await mongooseConnection();
        const user = new User(userData) ;
        if(!user){
            return {error: "User not created"}
        }
        await user.save();
        return User.sendPublicData(user)

    }catch(error){
        if (error?.code === 11000) {
            return {error: `${Object.keys(error?.keyValue)} is already exists!`}
        }
        return {error: "Something went wrong!"}
    }
}