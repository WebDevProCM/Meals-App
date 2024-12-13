"use client";

import MealImageShare from "@/components/Meal/MealImageShare";
import MealShareFormBtn from "@/components/Meal/MealShareFormBtn";
import { shareMeal } from "@/lib/actions";
import { FaRegShareFromSquare } from "react-icons/fa6";
import {useFormState} from "react-dom";

// export const metadata = {
//     title: "Share your recipe",
//     description: "Share your favourite and delicious meal recipe with others"
// }

export default function ShareMeal(){
    const [formState, formAction] = useFormState(shareMeal, {message: null});

    return(
    <main className="max-w-[1200px] mr-auto text-white p-[20px] py-[40px]">
        
        <div className="flex md:items-center items-start gap-2 text-white font-bold mb-[50px]">
            <FaRegShareFromSquare size={35} className="inline-block"/>
            <h1 
            className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent 
            sm:leading-10 leading-7 uppercase sm:text-[40px] text-2xl">
                SHARE YOUR DELICIOUS FOOD RECIPE
            </h1>
        </div>

        <form action={formAction} className="max-w-full">
            <div className="w-full mb-[25px]">
            <label className="block mb-1 text-base font-bold text-gray-400 uppercase" htmlFor="title">Title</label>
            <input 
            className="block w-full rounded-md bg-gray-800 text-white px-2 py-1 text-lg font-medium"
            type="text" id="title" name="title" required />
            {formState?.errors?.title && <p className="text-red-500">{formState?.errors?.title}</p>}
            </div>
            <div className="w-full mb-[25px]">
            <label className="block mb-1 text-base font-bold text-gray-400 uppercase" htmlFor="summary">Short Summary</label>
            <input
             className="block w-full rounded-md bg-gray-800 text-white px-2 py-1 text-lg font-medium"
             type="text" id="summary" name="summary" required />
             {formState?.errors?.summary && <p className="text-red-500">{formState?.errors?.summary}</p>}
            </div>
            <div className="w-full mb-[25px]">
            <label className="block mb-1 text-base font-bold text-gray-400 uppercase" htmlFor="instructions">Instructions</label>
            <textarea
                className="block w-full rounded-md bg-gray-800 text-white px-2 py-1 text-lg font-medium"
                id="instructions"
                name="instructions"
                rows="10"
                required
            />
            {formState?.errors?.instructions && <p className="text-red-500">{formState?.errors?.instructions}</p>}
            </div>
            
            <div className="sm:px-[40px] px-3">
                <MealImageShare />
                {formState?.errors?.image && <p className="text-red-500">{formState?.errors?.image}</p>}
            </div>

            <MealShareFormBtn />

            {formState?.errors && <p className="text-red-500">PLEASE RE-CHECK INPUT FIELDS!</p>}
            {formState?.error && <p className="text-red-500">{formState?.error}</p>}

        </form>

    </main>
    )
}