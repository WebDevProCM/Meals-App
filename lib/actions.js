"use server";

import { redirect } from "next/navigation";
import { createMeal, deleteMeal, getMeals, getUserMeals, updateLikeStatus, updateMeal } from "./meal";
import { getUser, newUser, updateUserProfile } from "./user";
import { revalidatePath, revalidateTag } from "next/cache";
import { loginSignFormValidation, mealFormValidation, profileUpdateValidation } from "./formvalidation";
import { createSession } from "./session";
import { verifySession } from "./dal";
import { uploadImage, uploadUserImage } from "./cloudinary";
import {cache} from "react";

export async function shareMeal(prevState ,formData){
    await new Promise((resovle) => setTimeout(resovle, 5000));
    console.log("shareMeal action");
    const session = await verifySession();
    if(!session){
        redirect("/");
    }
    try{
        const mealReceipe = {
            title: formData.get("title"),
            summary: formData.get("summary"),
            instructions: formData.get("instructions"),
            image: formData.get("image")
        }
    
        const validationResult = mealFormValidation.safeParse(mealReceipe);
        if(!validationResult.success){
            return {errors: validationResult.error.flatten().fieldErrors}
        }

        const validatedMealRecipe = validationResult?.data;
    
        validatedMealRecipe.image = await uploadImage(validatedMealRecipe?.image);
        validatedMealRecipe.user = session?.userId;
        
        const result = await createMeal(validatedMealRecipe);
        if(result.error){
            return {
                error: result.error
            }
        }
    
    }catch(error){
        console.log(error)
        throw new Error("Something went wrong!");
    }
    
    revalidateTag("meals")
    redirect("/meal")
}

export async function updateMealAction(prevState, formData){
    console.log("updateMeal action");
    const session = await verifySession();
    if(!session){
        redirect("/")
    }
    try{
        const mealReceipe = {
            _id: formData.get("id"),
            title: formData.get("title"),
            summary: formData.get("summary"),
            instructions: formData.get("instructions"),
        }
        if(formData.get("image").size !== 0){
            mealReceipe.image = formData.get("image")
        }
        const mealReceipeValidation = mealFormValidation.safeParse(mealReceipe);
        if(!mealReceipeValidation.success){
            return {errors: mealReceipeValidation.error.flatten().fieldErrors};
        }

        let validatedMealRecipe = mealReceipeValidation.data;
        if(validatedMealRecipe?.image){
            validatedMealRecipe.image = await uploadImage(validatedMealRecipe.image);
        }
        validatedMealRecipe.user = session?.userId;

        const result = await updateMeal(validatedMealRecipe);

        if(result.error){
            return {
                error: result.error
            }
        }
    }catch(error){
        console.log(error)
        throw new Error("Something went wrong!");
    }
    revalidateTag("meals");
}

export async function removeMealAction(mealId){
    console.log("removeMeal action");
    const session = await verifySession();
    if(!session){
        redirect("/")
    }
    try{
        const user = session?.userId;
        const result = await deleteMeal(mealId, user);
        if(result.error){
            return {error: result.error}
        }
    }catch(error){
        console.log(error)
        throw new Error("Something went wrong!");
    }

    revalidateTag("meals")
}

export async function toggleLikeStatus(mealId){
    console.log("togglelike action");
    const session = await verifySession();
    try{
        const user = session?.userId;
        if(!user){
            return {error: "Please Login!"}
        }
        
        const status = await updateLikeStatus(mealId, user);
        if(status.error){
            return {error: status.error}
        }

    }catch(error){
        console.log(error)
        throw new Error("Something went wrong!");
    }
        
    revalidateTag("meals")
}

export const getAllMeals = cache(async () =>{
    await new Promise((resovle) => setTimeout(resovle, 5000));
    console.log("getAllmeals action");
    try{    
        const session = await verifySession();
        const meals = await getMeals(session?.userId);
        return meals;

    }catch(error){
        console.log(error)
        throw new Error("Something went wrong!");
    }
})

export const getCurrentUserMeals = cache(async () =>{
    await new Promise((resovle) => setTimeout(resovle, 5000));
    console.log("getCUrrentusermeal action");
    const session = await verifySession();
    if(!session){
        redirect("/");
    }
    try{    
        const meals = await getUserMeals(session?.userId);
        return meals;

    }catch(error){
        console.log(error)
        throw new Error("Something went wrong!");
    }
})

export async function createUser(prevState, formData){
    console.log("create user action");
    try{
        const user = {
            name: formData.get("name"),
            email: formData.get("email"),
            password: formData.get("password")
        }

        const formValidationResult = loginSignFormValidation.safeParse(user);
        if(!formValidationResult.success){
            return {errors: formValidationResult.error.flatten().fieldErrors}
        }
        const validatedUser = formValidationResult.data;
        const createdUser = await newUser(validatedUser)
        if(createdUser.error){
            return {error: createdUser.error}
        }
    
        await createSession(createdUser._id.toHexString());

    }catch(error){
        console.log(error)
        throw new Error("Something went wrong!");
    }
    redirect("/meal")
}

export const getUserData = cache(async ()=>{
    await new Promise((resovle) => setTimeout(resovle, 5000));
    console.log("getUserdata action");
    const session = await verifySession();
    if(!session){
       return redirect("/")
    };

    const user = await getUser(session.userId);
    if(user.error){
        return {error: user.error}
    }

    return user;
})

export async function updateUser(prevState, formData){
    console.log("updateUser action");
    const session = await verifySession();
    if(!session){
        redirect("/");
    }
    try{
        const userProfile = {
            _id: session.userId,
            name: formData.get("name")
        }
        if(formData.get("image")?.size !== 0){
            userProfile.image = formData.get("image");
        }
        if(formData.get("password")){
            userProfile.password = formData.get("password");
        }

        const formValidationResult = profileUpdateValidation.safeParse(userProfile);
        if(!formValidationResult?.success){
            return {errors: formValidationResult.error.flatten().fieldErrors}
        }

        const validatedForm = formValidationResult.data;
        if(validatedForm?.image){
            validatedForm.image = await uploadUserImage(validatedForm.image);
        }
        const updatedProfile = await updateUserProfile(validatedForm);
        if(updatedProfile?.error){
            return {error: updatedProfile.error}
        }

    }catch(error){
        console.log(error)
        throw new Error("Something went wrong!");
    }

    revalidateTag("meals");
    revalidatePath("/profile");
}