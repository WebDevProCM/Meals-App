"use client";

import MealImageShare from "@/components/Meal/mealImageShare";
import { shareMeal } from "@/lib/actions";
import {useFormState} from "react-dom";

export default function ShareMeal(){
    const [formState, formAction] = useFormState(shareMeal, {message: null});

    return(
    <main className="max-w-[1200px] mr-auto text-white p-[20px] py-[40px]">
        
        <div className="text-[40px] text-white font-bold mb-[50px]">
            <h1 
            className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent 
            leading-10 ">
                SHARE YOUR MEAL
            </h1>
        </div>

        <form action={formAction} className="max-w-full">
            <div className="w-full mb-[25px]">
            <label className="block mb-1 text-base font-bold text-gray-400 uppercase" htmlFor="title">Title</label>
            <input 
            className="block w-full rounded-md bg-gray-800 text-white px-2 py-1 text-lg font-medium"
            type="text" id="title" name="title" required />
            </div>
            <div className="w-full mb-[25px]">
            <label className="block mb-1 text-base font-bold text-gray-400 uppercase" htmlFor="summary">Short Summary</label>
            <input
             className="block w-full rounded-md bg-gray-800 text-white px-2 py-1 text-lg font-medium"
             type="text" id="summary" name="summary" required />
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
            </div>
            
            <div className="sm:px-[40px] px-3">
                <MealImageShare />
            </div>

            <button 
            className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden 
            bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0
             before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out 
             hover:shadow-orange-600 hover:before:h-56 hover:before:w-56 my-[60px] ml-auto"
            type="submit"
            >
        
                <p className="relative z-10">Share Receipe</p>
            
            </button>

            {formState.message &&
                <p>{formState.error}</p>
            }

        </form>
    </main>
    )
}