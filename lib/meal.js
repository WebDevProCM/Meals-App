import Meal from "@/db/models/meal.js";
import User from "@/db/models/user";
import mongoose from "mongoose";
import mongooseConnection from "@/db/mongoose";
import {cache} from "react"
import { unstable_cache as nextCache } from "next/cache";

export const createMeal = async (mealReceipe) => {
    console.log("createMeal model");
    try{
        await mongooseConnection();
        const meal = new Meal(mealReceipe);
        if(!meal){
            return {error: "Food recipe not uploaded!"}
        }
        await meal.save();
        return meal;

    }catch(error){
        return {error: "Something went wrong! Try again"}
    }
}

export const getMeals = nextCache(
    cache(async (user) =>{
    try{
        console.log("getMeals model")
        await mongooseConnection();
        const meals = await Meal.find({}).populate("user", {_id:1, name:1, email:1, image:1}).lean();

        const newMeals = meals.map((meal) => {
            return {
                ...meal,
                liked : meal.likes.includes(user)
            }
        })
        return newMeals;

    }catch(error){
        console.log(error);
        throw new Error("Something went wrong. Unable to Fetch Recipes. Try again!");
    }
    
}), ["allMeals"], {tags: ["meals"]});

export const getUserMeals = nextCache(
    cache(async (userId) =>{
    try{
        console.log("getUserMeals model")
        await mongooseConnection();
        const meals = await Meal.find({user: userId}).populate("user", {_id:1, name:1, email:1, image:1}).lean();

        const newMeals = meals.map((meal) => {
            return {
                ...meal,
                liked : meal.likes.includes(userId)
            }
        })

        // meals.map((meal) => {meal.liked = meal.likes.includes(userId)});
        return newMeals;

    }catch(error){
        console.log(error);
        throw new Error("Something went wrong. Unable to Fetch Recipes. Try again!");
    }
}), ["userMeals"], {tags: ["meals"]});

export const getMeal = cache(async (title) =>{
    const titleUrl = title.replace(/%20/g, " ");
    console.log("getMeal modal")
    try{
        await mongooseConnection();
        const meal = await Meal.findOne({title: titleUrl}).populate("user", {_id:1, name:1, email:1, image:1}).lean(); 

        if(!meal){
            return null;
        }
        return meal;
    }catch(error){
        console.log(error);
        throw new Error("Something went wrong. Unable to Fetch Recipe. Try again!");
    }
})

export const updateMeal = async (updateMeal)=>{
    console.log("updatemeal modal")
    try{
        await mongooseConnection();
        const meal = await Meal.findOneAndUpdate({_id:updateMeal._id, user: updateMeal.user}, updateMeal, {new: true}).
            populate("user", {_id: 1, name: 1, email: 1, image: 1});
        if(!meal){
            return{error: "Recipe post not found and updated...Please try again"}
        }
        await meal.save();
        return meal;
    }catch(error){
        return{error: "Something went wrong..Please try again"}
    }
}

export const deleteMeal = async (mealId, userId) =>{
    console.log("deletemeal modal")
    try{
        await mongooseConnection();
        const meal = await Meal.findOneAndDelete({_id: mealId, user: userId});
        if(!meal){
            return {error: "An Error Occured! Recipe Post not removed..."}
        }
        return meal;
    }catch(error){
        return {error: "Something went wrong!"}
    }
}

export const updateLikeStatus = async (mealId, user) =>{
    console.log("updateLike modal")
    try{
        let meal = await Meal.findById(mealId);

        if(!meal){
            return {error: "Food recipe not found!..."}
        }

        if(!meal.likes.includes(user)){
            meal.likes.push(user);
        }else{
            const newLikes = meal.likes.filter(like => like !== user);
            meal.likes = newLikes
        }

        await meal.save();
        return meal;

    }catch(error){
        return {error: "Something went wrong..Please try again!"}
    }
}