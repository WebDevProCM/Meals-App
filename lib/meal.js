import Meal from "@/db/models/meal.js";
import User from "@/db/models/user";
import mongoose from "mongoose";
import mongooseConnection from "@/db/mongoose";
import {cache} from "react"
import { unstable_cache as nextCache } from "next/cache";

export const createMeal = async (mealReceipe) => {
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

export const getMeals = nextCache(
    cache(async (user) =>{
    try{
        await mongooseConnection();
        const meals = await Meal.find({}).populate("user", {_id:1, name:1, email:1, image:1}).lean();

        const newMeals = meals.map((meal) => {
            return {
                ...meal,
                liked : meal.likes.includes(user)
            }
        })

        await new Promise((resolve) => setTimeout(resolve, 3000))
        return newMeals;

    }catch(error){
        console.log(error);
        return{error: "Something went wrong!"}
    }
    
}), ["allMeals"], {tags: ["meals"]});

export const getUserMeals = nextCache(
    cache(async (userId) =>{
    try{
        await mongooseConnection();
        const meals = await Meal.find({user: userId}).populate("user", {_id:1, name:1, email:1, image:1}).lean();

        const newMeals = meals.map((meal) => {
            return {
                ...meal,
                liked : meal.likes.includes(userId)
            }
        })

        // meals.map((meal) => {meal.liked = meal.likes.includes(userId)});

        await new Promise((resolve) => setTimeout(resolve, 3000))
        return newMeals;

    }catch(error){
        console.log(error);
        return{error: "Something went wrong!"}
    }
}), ["userMeals"], {tags: ["meals"]});

export const getMeal = cache(async (title) =>{
    const titleUrl = title.replace(/%20/g, " ");
    try{
        await mongooseConnection();
        const meal = await Meal.findOne({title: titleUrl}).populate("user", {_id:1, name:1, email:1, image:1}).lean(); 

        if(!meal){
            return null;
        }
        return meal;
    }catch(error){
        console.log(error);
        return {error: "Something went wrong!"}
    }
})

export const updateMeal = async (updateMeal)=>{
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

export const deleteMeal = async (mealId, userId) =>{
    try{
        await mongooseConnection();
        const meal = await Meal.findOneAndDelete({_id: mealId, user: userId});
        if(!meal){
            return {error: "An Error Occured! Meal Post not removed..."}
        }
        return meal;
    }catch(error){
        console.log(error);
        return {error: "Something went wrong!"}
    }
}

export const updateLikeStatus = async (mealId, user) =>{
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