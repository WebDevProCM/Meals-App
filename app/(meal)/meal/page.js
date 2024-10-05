import MealPostLoading from "@/components/LoadingSkeletons/MealPostLoading";
import AllMealPosts from "@/components/Meal/AllMealPosts";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { getAllMeals } from "@/lib/actions";
import { Suspense } from "react";


export const metadata = {
  title: "Discover Recipes",
  description: "Discover Delicious and most liked recipes shared by others"
}

export default async function MealPage(){

    return(
      <main className="py-[80px] px-[20px] mx-auto bg-contain bg-meal-bg relative h-full">
        <div className="flex items-center sm:text-[30px] text-[25px] font-bold text-white relative z-20 max-w-[1500px] mx-auto">
          <RiCompassDiscoverLine className="inline-block" size={40}/> 
          <h1 className="uppercase">Discover Recipes</h1>
        </div>
        <Suspense fallback={<MealPostLoading />}>
        <AllMealPosts getMeals={getAllMeals} edit={false}/>
        </Suspense>
        <div className="absolute inset-0 bg-black opacity-90 "></div>
      </main>
    )
}