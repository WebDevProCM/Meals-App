import Image from "next/image";
import { IoReceipt } from "react-icons/io5";
import mealImg from "@/public/images/curry.jpg";
import Link from "next/link";
import BackBtn from "@/components/BackBtn";

export default function MealReceipe(){
    let insructions = `
    1. Prepare the tomatoes:
    Slice fresh tomatoes and arrange them on a plate.

    2. Add herbs and seasoning:
    Sprinkle chopped basil, salt, and pepper over the tomatoes.

    3. Dress the salad:
    Drizzle with olive oil and balsamic vinegar.

    4. Serve:
    Enjoy this simple, flavorful salad as a side dish or light meal.
    `

    insructions = insructions.replace(/\n/g, "<br>");

    return(
        <main className="max-w-[1400px] py-[60px] px-[20px] mx-auto">
            <div className="my-[20px] sm:mx-[20px] mr-auto">
                <BackBtn />
            </div>

            <div 
            className="flex justify-center items-start gap-[20px] flex-wrap 
            bg-gradient-to-r from-[#2c1e19] to-[#25200f]
            p-10 rounded-3xl drop-shadow-lg">
                <div className="w-[450px] h-[300px] relative drop-shadow-">
                    <Image 
                    className="rounded-lg" 
                    src={mealImg} alt="Cooked Meal image" fill 
                    />
                </div>
                <div className="flex flex-col text-white gap-[20px]">
                    <p 
                    className="font-bold text-[40px] uppercase max-w-[400px] leading-[45px]"
                    >
                        Squishy Cheesy Pasta
                    </p>
                    <p className="text-[25px] font-bold text-gray-400 max-w-[500px]">
                        with the mealy cheese, eater receives joyful feeling</p>
                    <Link href=""> <p className="text-orange-500 font-bold underline">Share by John Smith</p> </Link>
                </div>
            </div>

            <div className="mt-[100px] max-w-[800px] mx-auto">
                <IoReceipt size={40}/>
            </div>
            <div className="bg-[#6e6464] max-w-[800px] mx-auto mb-[40px] p-11 rounded-lg drop-shadow-xl">
                <p 
                className="text-xl" 
                dangerouslySetInnerHTML={{
                    __html: insructions
                }}
                >

                </p>
            </div>
        </main>
    )
}