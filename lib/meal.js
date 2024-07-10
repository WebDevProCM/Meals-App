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
        return meal

    }catch(error){
        console.log(error);
        return {error: "Something went wrong!"}
    }
}

export async function getMeals(){
    try{
        await mongooseConnection();
        const meals = await Meal.find({});

        return meals
    }catch(error){
        return{error: "Something went wrong!"}
    }
}