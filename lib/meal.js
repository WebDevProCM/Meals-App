import Meal from "@/db/models/meal.js";
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
    try{
        await mongooseConnection();
        const meals = await Meal.find({}).populate("user");
        console.log(meals);

        return meals;
    }catch(error){
        return{error: "Something went wrong!"}
    }
}

export async function getMeal(title){
    const titleUrl = title.replace(/%20/g, " ");
    try{
        await mongooseConnection();
        const meal = await Meal.findOne({title: titleUrl}).populate("user");
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
        const meal = await Meal.findByIdAndUpdate(updateMeal._id, updateMeal, {new: true});
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
        // const meal = await Meal.findByIdAndDelete(mealId);
        // if(!meal){
            return {error: "An Error Occured! Meal Post not removed..."}
        // }
        // return meal;
    }catch(error){
        console.log(error);
        return {error: "Something went wrong!"}
    }
}