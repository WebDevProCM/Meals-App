"use server"

import User from "@/db/models/user";
import mongooseConnection from "@/db/mongoose";
import bcrypt from "bcrypt"
import { createSession, deleteSession } from "./session";
import { redirect } from "next/navigation";
import { loginSignFormValidation } from "./formvalidation";

export async function loginUser (prevState, formData){
    try{
        const userCredentials = {
            email: formData.get("email"),
            password: formData.get("password")
        }

        const formValidationResult = loginSignFormValidation.safeParse(userCredentials);
        if(!formValidationResult?.success){
            return {errors: formValidationResult.error.flatten().fieldErrors}
        }
        const validatedForm = formValidationResult.data;

        await mongooseConnection();
        const user = await User.findOne({email: validatedForm.email});
        if(!user){
            return {error: "Invalid Credentials!"}
        }

        const passwordValidation = await bcrypt.compare(validatedForm.password, user.password);
        if(!passwordValidation){
            return{error: "Invalid Credentials!"}
        }

        await createSession(user._id.toHexString());

    }catch(error){
        console.log(error);
        return {error: "Something went wrong!"}
    }

    redirect("/meal")
}

export async function logoutUser (){
    try{
        await deleteSession();
    }catch(error){
        console.log(error);
        return {error: "Something went wrong!"}
    }
    redirect("/")
}