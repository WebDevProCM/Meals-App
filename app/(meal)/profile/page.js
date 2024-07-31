import { getCurrentUserMeals } from "@/lib/actions";
import { BiSolidShare } from "react-icons/bi";
import AllMealPosts from "@/components/Meal/AllMealPosts";
import { Suspense } from "react";
import MealPostLoading from "@/components/LoadingSkeletons/MealPostLoading";
import ProfileSection from "@/components/User/ProfileSection";
import ProfileSectionLoading from "@/components/LoadingSkeletons/ProfileSectionLoading";
import CoverImageAnimation from "@/components/User/CoverImageAnimation";

export const metadata = {
    title: "User Profile"
}

export default async function ProfilePage(){

    return(
        <main className="max-w-[1500px] mx-auto px-[20px] py-8">
            <div className="mx-auto text-center">
                <CoverImageAnimation />
                <Suspense fallback={<ProfileSectionLoading />}>
                <ProfileSection />
                </Suspense>
            </div>

            <div className="mt-[100px]">
                <h1 className="sm:text-[30px] text-[25px] text-white font-bold uppercase">
                    Recipes Shared By You <BiSolidShare className="inline-block"/>
                </h1>
                
                <Suspense fallback={<MealPostLoading />}>
                <AllMealPosts getMeals={getCurrentUserMeals} edit={true}/>
                </Suspense>
            </div>

        </main>
    )
}