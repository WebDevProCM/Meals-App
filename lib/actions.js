"use server";

import { redirect } from "next/navigation";
import { createMeal } from "./meal";
import { newUser } from "./user";

export async function shareMeal(prevState ,formData){
    try{
        const mealReceipe = {
            title: formData.get("title"),
            summary: formData.get("summary"),
            instructions: formData.get("instructions"),
        }
    
        if(!formData.get("image")){
            return {message: {error: "please upload a image"}}
        }
    
        mealReceipe.image = "image"
        mealReceipe.user = "smith";
    
        const result = await createMeal(mealReceipe);
        if(result.error){
            return {
                message: {
                    error: result.error
                }
            }
        }
    
    }catch(error){
        return {error: "Something went wrong! Receipe not shared..."}
    }finally{
        redirect("/");
    }
}

// export async function getMeals(){
//     try{


//     }catch(error){
//         return{error: "Something went wrong! Cannot load meals receipes..."}
//     }
// }

export async function createUser(prevState, formData){
    try{
        const user = {
            name: formData.get("name"),
            email: formData.get("email"),
            password: formData.get("password")
        }
    
        if(!formData.get("image")){
            return {message: {error: "please upload a image"}}
        }
    
        user.image = "image"

        const result = await newUser(user);
        if(result.error){
            return {
                message: {
                    error: result.error
                }
            }
        }

        redirect("/");

    }catch(error){
        return {
            error: "Something went wrong! User not created..." 
        }
    }
}