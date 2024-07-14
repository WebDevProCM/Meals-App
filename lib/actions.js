"use server";

import { redirect } from "next/navigation";
import { createMeal, deleteMeal, updateMeal } from "./meal";
import { newUser } from "./user";
import { revalidatePath } from "next/cache";

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
        mealReceipe.user = "669280010e800c7326758130";
    
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

export async function updateMealAction(prevState, formData){
    try{

        const mealReceipe = {
            _id: formData.get("id"),
            title: formData.get("title"),
            summary: formData.get("summary"),
            instructions: formData.get("instructions"),
        }

        // if(formData.get("image")){
        //     mealReceipe.image = formData.get("image");
        // }

        console.log("server action")
        const result = await updateMeal(mealReceipe);
        if(result.error){
            return {
                message: {
                    error: result.error
                }
            }
        }

    }catch(error){
        console.log(error);
        return{error: "Something went wrong! meal not updated..."}
    }finally{
        revalidatePath("/");
    }
}

export async function removeMealAction(mealId){
    try{
        const result = await deleteMeal(mealId);
        if(result.error){
            return {error: result.error}
        }
    }catch(error){
        console.log(error);
        return{error: "Something went wrong! meal not removed!..."}
    }finally{
        revalidatePath("/");
    }
}