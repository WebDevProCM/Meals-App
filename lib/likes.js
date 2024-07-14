import likes from "@/db/models/likes";
import mongooseConnection from "@/db/mongoose";

export async function addLike(postId, userId){
    try{
        await mongooseConnection();
        const like = new likes({user: userId, post: postId});
        if(!like){
            return {error: "Something went wrong! Like not added!"}
        }
        await like.save();
        return like;
    }catch(error){
        console.log(error);
        throw new Error("Something went wrong.")
    }
}

export async function removeLike(postId, userId){
    try{
        await mongooseConnection();
        const like = await likes.findOneAndDelete({user: userId, post: postId});
        if(!like){
            return {error: "Meal Post not found!..."}
        }
        return like;
    }catch(error){
        console.log(error);
        throw new Error("Something went wrong.")
    }
}