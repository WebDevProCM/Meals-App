import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import NavProfileBarDropdown from "./NavProfileBarDropdown";
import NavbarProfileImage from "./NavbarProfileImage";
import { Suspense } from "react";
import NavbarProfileImageLoading from "../LoadingSkeletons/NavbarProfileImageLoading";
import Searchbar from "./Searchbar";
import SearchBarLoading from "../LoadingSkeletons/SearchBarLoading";

export default async function Navbar() {
  return (
    <div className="flex gap-[10px] justify-around items-center border-2 
     bg-glass border-none p-[8px] m-[5px] rounded-[60px]">
        <div className="shrink-0 w-[60px] h-[60px] relative border-none">
            <NavProfileBarDropdown>
                <Suspense fallback={<NavbarProfileImageLoading />}>
                    <NavbarProfileImage />
                </Suspense>
            </NavProfileBarDropdown>
        </div>
        <div className="shrink bg-slate-300 flex-1 rounded-[20px] relative">
            <Suspense fallback={<SearchBarLoading />}>
                <Searchbar/>
            </Suspense>
        </div>
        <div className="sm:flex gap-4 shrink-0 hidden">

        <Link href="/meal">
        <button 
        className="relative flex h-[50px] sm:w-40 w-[60px] items-center justify-center overflow-hidden 
        bg-gray-600 text-white transition-all before:absolute before:h-0 before:w-0
        before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out 
        hover:shadow-orange-600 hover:before:h-56 hover:before:w-56 sm:rounded-[30px] rounded-2xl"
        >
            <p className="relative z-10 sm:text-[16px] text-[14px]">Recipes</p>
        
        </button>
        </Link>

        <Link href="/shareMeal">
        <button 
        className="relative flex h-[50px] sm:w-40 w-[70px] items-center justify-center overflow-hidden 
        bg-gray-600 text-white transition-all before:absolute before:h-0 before:w-0
        before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out 
        hover:shadow-orange-600 hover:before:h-56 hover:before:w-56 sm:rounded-[30px] rounded-2xl"
        >
            <p className="relative z-10 sm:text-[16px] text-[14px] leading-4">Share Recipes</p>
        
        </button>
        </Link>
        </div>
    </div>
  )
}
