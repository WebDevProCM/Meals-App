import MealPost from "@/components/Meal/MealPost";

async function AllMealPosts({getMeals, edit}) {
    let meals = await getMeals();
    if(meals?.error || !meals){
      return meals = [];
    }
  return (
    <div 
    className="flex justify-center items-start flex-wrap gap-5 relative z-20 max-w-[1500px] mx-auto"
    >
        {meals.length > 0? 
          meals.map((meal) =>{
            return(
              <MealPost key={meal._id} meal={meal} editBtn={edit}/>
            )
          })
          :
          <p className="text-center font-bold text-[40px] text-gray-200 h-screen">No Meals Posts</p>
        }
    </div>
  )
}

export default AllMealPosts