import { getAllMeals } from "@/lib/actions";
import SearchResults from "@/components/Navbar/SearchResults";

async function Searchbar() {
    const meals = await getAllMeals();
    const mealTitles = meals.length > 0 ? meals.map(meal => meal.title) : [];
  return (
    <SearchResults mealTitles={mealTitles} />
  )
}

export default Searchbar

  
