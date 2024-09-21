import User from "@/db/models/user.js";
import mongooseConnection from "@/db/mongoose";
import bcrypt from "bcrypt";
import {cache} from "react"

export async function newUser(userData){
    // console.log("newuser modal")
    try{
        await mongooseConnection();
        userData.password = await bcrypt.hash(userData.password, 8);
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

export const getUser = cache(async (userId)=>{
    // console.log("getuser modal")
    try{
        await mongooseConnection();
        const user = await User.findById(userId);
        if(!user){
            return {error: "User not found!"}
        }
        return User.sendPublicData(user);
    }catch(error){
        return {error: "Something went wrong.."}
    }
})

export async function updateUserProfile(userData){
    // console.log("upateUser modal")
    try{
        await mongooseConnection();
        if(userData?.password){
            userData.password = await bcrypt.hash(userData.password, 8);
        }
        const user = await User.findByIdAndUpdate(userData._id, userData, {new: true});
        if(!user){
            return {error: "Something went wrong!. User profile not updated"}
        }

        await user.save();
        return User.sendPublicData(user);

    }catch(error){
        return {error: "Something went wrong.."}
    }
}