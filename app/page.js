import MealPost from "@/components/Meal/MealPost";
import { getMeals } from "@/lib/meal";
import Image from "next/image";

export default async function Home() {
  const meals = await getMeals();

  return (
    <main className="py-[80px] px-[20px] max-w-[1500px] mx-auto">
      
      <div className="sm:text-[30px] text-[25px] font-bold text-white">
        <h1>Discover Meals</h1>
      </div>

      <div className="flex justify-center items-start flex-wrap gap-5">
        {meals.map((meal) =>{
          return(
            <MealPost key={meal._id} meal={meal}/>
          )
        })}
      </div>

    </main>
  );
}
