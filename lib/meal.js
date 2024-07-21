import Meal from "@/db/models/meal.js";
import User from "@/db/models/user";
import mongoose from "mongoose";
import mongooseConnection from "@/db/mongoose";

export async function createMeal(mealReceipe){
    try{
        await mongooseConnection();
        const meal = new Meal(mealReceipe);
        if(!meal){
            return {error: "Meal receipe not uploaded!"}
        }
        await meal.save();
        return meal;

    }catch(error){
        console.log(error);
        return {error: "Something went wrong!"}
    }
}

export async function getMeals(){
    const userId = "669280010e800c7326758130"
    try{
        await mongooseConnection();
        const meals = await Meal.find({}).populate("user", {_id:1, name:1, email:1, image:1});

        meals.map((meal) => {meal.liked = meal.likes.includes(userId)})

        await new Promise((resolve) => setTimeout(resolve, 3000))
        return meals;

    }catch(error){
        console.log(error);
        return{error: "Something went wrong!"}
    }
}

export async function getMeal(title){
    const titleUrl = title.replace(/%20/g, " ");
    const userId = "669280010e800c7326758130";
    try{
        await mongooseConnection();
        const meal = await Meal.findOne({title: titleUrl}).populate("user", {_id:1, name:1, email:1, image:1});
        meal.liked = meal.likes.includes(userId); 

        if(!meal){
            return null;
        }
        return meal;
    }catch(error){
        console.log(error);
        return {error: "Something went wrong!"}
    }
}

export async function updateMeal(updateMeal){
    try{
        await mongooseConnection();
        const meal = await Meal.findOneAndUpdate({_id:updateMeal._id, user: updateMeal.user}, updateMeal, {new: true});
        if(!meal){
            return{error: "Meal not found and updated!..."}
        }

        await meal.save();
        return meal;
    }catch(error){
        console.log(error);
        return{error: "Something went wrong! Meal not updated..."}
    }
}

export async function deleteMeal(mealId){
    try{
        await mongooseConnection();
        const meal = await Meal.findByIdAndDelete(mealId);
        if(!meal){
            return {error: "An Error Occured! Meal Post not removed..."}
        }
        return meal;
    }catch(error){
        console.log(error);
        return {error: "Something went wrong!"}
    }
}

export async function updateLikeStatus(mealId, user){
    // const user = new mongoose.Types.ObjectId(userId);
    try{
        let meal = await Meal.findById(mealId);

        if(!meal){
            return {error: "Meal receipe not found!..."}
        }

        if(!meal.likes.includes(user)){
            meal.likes.push(user);
        }else{
            const newLikes = meal.likes.filter(like => like !== user);
            meal.likes = newLikes
        }

        // if(action === "dislike"){
        //     if(!meal.dislikes.includes(user)){
        //         meal.dislikes.push(user);
        //     }else{
        //         const newDislikes = meal.dislikes.filter(dislike => dislike !== user);
        //         meal.dislikes = newDislikes
        //     }
        // }

        await meal.save();
        return meal;

    }catch(error){
        console.log(error);
        return {error: "Something went wrong.."}
    }
}