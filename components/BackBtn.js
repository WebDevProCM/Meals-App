"use client"

import { useRouter } from "next/navigation";

export default function BackBtn() {
    const router = useRouter();

    const clickHandler = () =>{
        router.back();
    }

  return (
    <button 
    className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden 
    bg-gray-600 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0
    before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out 
    hover:shadow-orange-600 hover:before:h-56 hover:before:w-56"
    onClick={clickHandler}
    >

        <p className="relative z-10">Back</p>
    
    </button>
  )
}