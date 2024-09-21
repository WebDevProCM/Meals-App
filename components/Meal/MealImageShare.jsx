"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function MealImageShare(){
    const imageInput = useRef();
    const [mealImage, setMealImage] = useState(null);

    function handlePickClick(){
        imageInput.current.click();
    }

    function handleImageChange(event){
        const file = event.target.files[0];

        const fileReader = new FileReader();

        fileReader.onload = () =>{
            setMealImage(fileReader.result);
        }

        fileReader.readAsDataURL(file);
    }
    
    return(
        <div className="flex flex-row justify-start items-start gap-[20px]">

            <div 
            className="w-[200px] h-[200px] relative flex justify-center items-center border-2
             border-gray-100 text-gray-300 text-center">
                
                {mealImage &&
                    <Image src={mealImage} alt="Meal-Image" fill/>                
                }
                {!mealImage &&
                    <p>Upload Meal Image</p>
                }

            </div>

            <input 
            className="hidden"
            type="file"
            id="image"
            name="image"
            accept="image/png, image/jpeg"
            ref={imageInput}
            onChange={handleImageChange}
            required
            />

            <button 
            className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden 
            bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0
             before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out 
             hover:shadow-orange-600 hover:before:h-56 hover:before:w-56"
             onClick={handlePickClick}
             >
        
                <p className="relative z-10">Upload an image</p>
            
            </button>
        </div>
    )
}