// import likes from "@/db/models/likes";
// import meal from "@/db/models/meal";
// import User from "@/db/models/user";
// import mongooseConnection from "@/db/mongoose";

// export async function updateLikeStatus(mealId, userId){
//     try{ 
//         const likeStatus = await likes.find({user: userId, mealId: mealId});
//         if(!likeStatus){
//             const likePost = await new likes({user: userId, mealId: mealId});
//             if(!likePost){
//                 return {error: "Like is not added..."}
//             }
//             await likePost.save();
//             return likePost
//         }

//         const disLikePost = await likes.findOneAndDelete({user: userId, mealId: mealId});
//         if(!disLikePost){
//             return {error: "Post is not found! Unable to dislike the post..."}
//         }

//         return disLikePost;

//     }catch(error){
//         console.log(error);
//         return {error: "Something went wrong!"}
//     }
// }