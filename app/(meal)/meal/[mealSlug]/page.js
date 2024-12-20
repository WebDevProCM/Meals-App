import Image from "next/image";
import Link from "next/link";
import {JSDOM} from "jsdom"
import DOMPurify from "dompurify";
import { IoReceipt } from "react-icons/io5";
import mealImg from "@/public/images/burger.jpg";
import { getMeal } from "@/lib/meal";
import { notFound } from "next/navigation";

export async function generateMetadata({params}){
    const meal = await getMeal(params.mealSlug);
    return {
        title: meal.title,
        description: meal.summary
    }
}

export default async function MealReceipe({params}){
    let mealObject = await getMeal(params.mealSlug);
    if(!mealObject){
        return notFound();
    }
    let {_id, title, summary, instructions, image, user} = mealObject;
    _id = _id.toHexString();
    
    const meal = {
        _id, title, summary, instructions, image,
        user: {_id: user._id.toHexString(), name:user.name, email:user.email, image:user.image}
    }

    meal.instructions = meal.instructions.replace(/\n/g, "<br>");

    const window = new JSDOM("").window;
    const DOMPurifyServer = DOMPurify(window);

    return(
        <main className="max-w-[1400px] py-[60px] px-[20px] mx-auto">
            {/* <div className="my-[20px] sm:mx-[20px] mr-auto">
                <BackBtn />
            </div> */}

            <div 
            className="flex justify-center items-start gap-[20px] flex-wrap 
            bg-gradient-to-r from-[#2c1e19] to-[#25200f]
            p-10 rounded-3xl drop-shadow-lg">
                <div className="w-[450px] h-[300px] relative drop-shadow-">
                    <Image 
                    className="rounded-lg object-cover" 
                    src={meal.image} alt="Cooked Meal image" 
                    sizes="450px"
                    fill 
                    />
                </div>
                <div className="flex flex-col text-white gap-[20px]">
                    <p 
                    className="font-bold text-[40px] uppercase max-w-[400px] leading-[45px] text-left"
                    >
                        {meal.title}
                    </p>
                    <p className="text-[25px] font-bold text-gray-400 max-w-[500px] font-montserrat text-left">
                        {meal.summary}
                    </p>
                    <Link href=""> 
                        <p className="text-orange-500 font-bold underline font-pacifico text-left">
                            Shared by {meal.user.name}
                        </p> 
                    </Link>
                </div>
            </div>

            <div className="mt-[100px] max-w-[800px] mx-auto text-black">
                <IoReceipt size={50}/>
            </div>
            <div className="bg-[#6e6464] max-w-[800px] mx-auto mb-[40px] p-11 rounded-lg drop-shadow-xl">
                <p 
                className="text-xl" 
                dangerouslySetInnerHTML={{
                    __html: DOMPurifyServer.sanitize(meal.instructions)
                }}
                >

                </p>
            </div>
        </main>
    )
}