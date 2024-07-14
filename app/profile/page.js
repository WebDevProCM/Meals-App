import Image from "next/image";
import coverImg from "@/public/images/cover.png"
import profileImg from "@/public/images/image1.jpg"
import Link from "next/link";
import MealPost from "@/components/Meal/MealPost";
import { getMeals } from "@/lib/meal";

export default async function ProfilePage(){
    const meals = await getMeals();
    return(
        <main className="max-w-[1500px] mx-auto px-[20px]">
            <div className="mx-auto text-center">
                <div className="max-w-[851px] sm:h-[300px] h-[200px] object-cover relative mx-auto">
                    <Image src={coverImg} alt="cover-image" fill/>
                </div>
                <div className="flex justify-center items-center max-w-[800px] mx-auto sm:mt-[-50px] mt-[-30px] gap-5">
                    <div className="sm:text-[20px] text-[15px] font-bold text-white">
                        <h1>John Smith</h1>
                    </div>
                    <div className="sm:w-[150px] sm:h-[150px] w-[100px] h-[100px] relative">
                        <Image className="rounded-full" src={profileImg} alt="profile-image" fill />
                    </div>
                    <div className="flex flex-col justify-center items-start mt-[25px] text-white sm:text-[12px] text-[10px] font-bold">
                        <Link href="">www.youtube.com</Link>
                        <Link href="">www.youtube.com</Link>
                        <Link href="">www.youtube.com</Link>
                    </div>
                </div>
            </div>

            <div className="mt-[100px]">
                <h1 className="sm:text-[30px] text-[25px] text-white font-bold">
                    Receipes Shared By You
                </h1>

                <div className="flex justify-start items-center flex-wrap">
                    {meals.map((meal) =>{
                        return(
                            <MealPost key={meal._id} meal={meal} editBtn="true"/>
                        )
                    })}
                </div>
            </div>

        </main>
    )
}