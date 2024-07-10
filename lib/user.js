import User from "@/db/models/user.js";

export async function newUser(userData){
    try{
        const user = new User(userData) ;
        if(!user){
            return {error: "User not created"}
        }
        await user.save();
        return{user: user}

    }catch(error){
        return {error: "Something went wrong!"}
    }
}