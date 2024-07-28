import { getCurrentUserMeals } from "@/lib/actions";
import { BiSolidShare } from "react-icons/bi";
import AllMealPosts from "@/components/Meal/AllMealPosts";
import { Suspense } from "react";
import MealPostLoading from "@/components/LoadingSkeletons/MealPostLoading";
import ProfileSection from "@/components/User/ProfileSection";
import ProfileSectionLoading from "@/components/LoadingSkeletons/ProfileSectionLoading";
import CoverImageAnimation from "@/components/User/CoverImageAnimation";


export default async function ProfilePage(){

    return(
        <main className="max-w-[1500px] mx-auto px-[20px] py-8">
            <div className="mx-auto text-center">
                <CoverImageAnimation />
                {/* <div className="max-w-[1500px] relative mx-auto bg-[url('/images/burger-cover.jpg')]">
                    <Image className="mx-auto z-20 relative" src={coverImg} alt="cover-image" width={851} height={300}/>
                    <div className="absolute inset-0 bg-black opacity-20 z-30"></div>
                    <div className="absolute inset-0 bg-black opacity-80 "></div>
                </div> */}
                <Suspense fallback={<ProfileSectionLoading />}>
                <ProfileSection />
                </Suspense>
            </div>

            <div className="mt-[100px]">
                <h1 className="sm:text-[30px] text-[25px] text-white font-bold">
                    Recipes Shared By You <BiSolidShare className="inline-block"/>
                </h1>
                
                <Suspense fallback={<MealPostLoading />}>
                <AllMealPosts getMeals={getCurrentUserMeals} edit={true}/>
                </Suspense>
                {/* <div className="flex justify-start items-center flex-wrap">
                    {meals.length === 0?
                    <p className="mx-auto text-gray-200 font-bold text-[30px] mt-5">No Meals Posts shared by you</p>
                    :
                    meals.map((meal) =>{
                        return(
                            <MealPost key={meal._id} meal={meal} editBtn={true}/>
                        )
                    })}
                </div> */}
            </div>

        </main>
    )
}