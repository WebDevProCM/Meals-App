"use server";

import { redirect } from "next/navigation";
import { createMeal, deleteMeal, updateLikeStatus, updateMeal } from "./meal";
import { newUser } from "./user";
import { revalidatePath } from "next/cache";
import { mealFormValidation } from "./formvalidation";

export async function shareMeal(prevState ,formData){
    try{
        const mealReceipe = {
            title: formData.get("title"),
            summary: formData.get("summary"),
            instructions: formData.get("instructions"),
            image: formData.get("image")
        }
    
        const validationResult = mealFormValidation.safeParse(mealReceipe);
        if(!validationResult.success){
            console.log(validationResult);
            return {errors: validationResult.error.flatten().fieldErrors}
        }

        const validatedMealRecipe = validationResult?.data;
    
        validatedMealRecipe.image = "image"
        validatedMealRecipe.user = "669280010e800c7326758130";
        
        console.log(validatedMealRecipe);
        const result = await createMeal(validatedMealRecipe);
        if(result.error){
            return {
                error: result.error
            }
        }
    
    }catch(error){
        return {error: "Something went wrong! Receipe not shared..."}
    }
    
    redirect("/meal")
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
        if(formData.get("image").size !== 0){
            console.log(formData.get("image"));
            mealReceipe.image = formData.get("image")
        }
        const mealReceipeValidation = mealFormValidation.safeParse(mealReceipe);
        if(!mealReceipeValidation.success){
            return {errors: mealReceipeValidation.error.flatten().fieldErrors};
        }

        let validatedMealRecipe = mealReceipeValidation.data;
        validatedMealRecipe.user = "669280010e800c7326758130";

        const result = await updateMeal(validatedMealRecipe);
        if(result.error){
            return {
                error: result.error
            }
        }
    }catch(error){
        console.log(error);
        return{error: "Something went wrong! meal not updated..."}
    }

    revalidatePath("/");
    redirect("/profile");
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

export async function toggleLikeStatus(mealId){

    try{
        const user = "669280010e800c7326758130";
        if(!user){
            return {error: "Please Login!"}
        }
        
        const status = await updateLikeStatus(mealId, user);
        if(status.error){
            return {error: status.error}
        }

        return true;

    }catch(error){
        return {error: "Something went wrong!"}
    }finally{
        revalidatePath("/")
    }
}