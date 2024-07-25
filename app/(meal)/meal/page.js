import MealPost from "@/components/Meal/MealPost";
import { getAllMeals } from "@/lib/actions";

export default async function MealPage(){
    let meals = await getAllMeals();
    if(meals.error){
      return meals = [];
    }

    return(
        <main className="py-[80px] px-[20px] mx-auto bg-contain bg-meal-bg relative h-full">
      
        <div className="sm:text-[30px] text-[25px] font-bold text-white relative z-20 max-w-[1500px] mx-auto">
          <h1>Discover Meals</h1>
        </div>
  
        <div className="flex justify-center items-start flex-wrap gap-5 relative z-20 max-w-[1500px] mx-auto">
          {meals.length === 0? 
          <p className="text-center font-bold text-[40px] text-gray-200 h-screen">No Meals Posts</p>
          :
          meals.map((meal) =>{
            return(
              <MealPost key={meal._id} meal={meal} />
            )
          })}
        </div>

        <div className="absolute inset-0 bg-black opacity-90 "></div>
  
      </main>
    )
}