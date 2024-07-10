import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import profileImg from "@/public/images/image1.jpg"
import Link from "next/link";

export default function Navbar() {
    // bg-gradient-to-r from-orange-800 to-orange-500
  return (
    <div className="flex gap-[10px] justify-around items-center border-2 
     bg-glass border-none p-[8px] m-[5px] rounded-[60px]">
        <div className="shrink-0 sm:w-[60px] sm:h-[60px] w-[40px] h-[40px] relative">
            <Link href="/profile">
                <Image className="rounded-full" src={profileImg} alt="user-image" fill/>
            </Link>
        </div>
        <div className="shrink bg-slate-300 sm:basis-2/4 rounded-[20px]">
            <form className="max-w-full flex items-center justify-center">
                <input 
                className="shrink bg-transparent w-full flex-1 py-[15px] px-[10px] rounded-[20px] focus:outline-none" 
                placeholder="Search Meals" name="meal"
                />
                <button className="bg-slate-300 max-w-[40px] px-[10px]" type="submit"><FaSearch /></button>
            </form>
        </div>
        <div className="flex gap-4 shrink-0">

        <Link href="/">
        <button 
        className="relative flex h-[50px] sm:w-40 w-[60px] items-center justify-center overflow-hidden 
        bg-gray-600 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0
        before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out 
        hover:shadow-orange-600 hover:before:h-56 hover:before:w-56 sm:rounded-[30px] rounded-2xl"
        >
            <p className="relative z-10 sm:text-[16px] text-[14px]">Meals</p>
        
        </button>
        </Link>

        <Link href="/shareMeal">
        <button 
        className="relative flex h-[50px] sm:w-40 w-[70px] items-center justify-center overflow-hidden 
        bg-gray-600 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0
        before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out 
        hover:shadow-orange-600 hover:before:h-56 hover:before:w-56 sm:rounded-[30px] rounded-2xl"
        >
            <p className="relative z-10 sm:text-[16px] text-[14px] leading-4">Share Meal</p>
        
        </button>
        </Link>
        </div>
    </div>
  )
}