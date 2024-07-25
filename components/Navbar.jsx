import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";
import profileImg from "@/public/images/image1.jpg"
import Link from "next/link";
import { Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import NavProfileBarDropdown from "./NavProfileBarDropdown";

export default function Navbar() {
    // bg-gradient-to-r from-orange-800 to-orange-500
  return (
    <div className="flex gap-[10px] justify-around items-center border-2 
     bg-glass border-none p-[8px] m-[5px] rounded-[60px] overflow-hidden">
        <div className="shrink-0 w-[60px] h-[60px] relative">
            <NavProfileBarDropdown>
                <Image className="rounded-full" src={profileImg} alt="user-image" fill/>
            </NavProfileBarDropdown>
        </div>
        <div className="shrink bg-slate-300 flex-1 rounded-[20px]">
            <form className="max-w-full flex items-center justify-center">
                <input 
                className="shrink bg-transparent w-full flex-1 py-[15px] px-[10px] rounded-[20px] focus:outline-none" 
                placeholder="Search Meals" name="meal"
                />
                <button className="bg-slate-300 max-w-[40px] px-[10px]" type="submit"><FaSearch /></button>
            </form>
        </div>
        <div className="sm:flex gap-4 shrink-0 hidden">

        <Link href="/meal">
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



    // <Disclosure as="nav">
    //     <div className="flex gap-[10px] justify-around items-center border-2 
    //     bg-glass border-none p-[8px] m-[5px] rounded-[60px] overflow-hidden">
    //         <div className="inset-y-0 left-0 flex items-center sm:hidden">
    //         <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
    //           <span className="absolute -inset-0.5" />
    //           <span className="sr-only">Open main menu</span>
    //           <GiHotMeal size="20" aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden"/>
    //           <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
    //         </DisclosureButton>
    //         </div>
    //         <NavBarDropdown />
    //         <div className="hidden sm:inline-block shrink-0 sm:w-[60px] sm:h-[60px] w-[40px] h-[40px] relative">
    //             <Link href="/profile">
    //                 <Image className="rounded-full" src={profileImg} alt="user-image" fill/>
    //             </Link>
    //         </div>
    //         <div className=" shrink bg-slate-300 w-[500px] sm:basis-2/4 rounded-[20px]">
    //             <form className="max-w-full flex items-center justify-center">
    //                 <input 
    //                 className="shrink bg-transparent w-full flex-1 py-[15px] px-[10px] rounded-[20px] focus:outline-none" 
    //                 placeholder="Search Meals" name="meal"
    //                 />
    //                 <button className="bg-slate-300 max-w-[40px] px-[10px]" type="submit"><FaSearch /></button>
    //             </form>
    //         </div>
    //         <div className="hidden sm:flex gap-4 shrink-0">

    //         <Link href="/meal">
    //         <button 
    //         className="relative flex h-[50px] sm:w-40 w-[60px] items-center justify-center overflow-hidden 
    //         bg-gray-600 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0
    //         before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out 
    //         hover:shadow-orange-600 hover:before:h-56 hover:before:w-56 sm:rounded-[30px] rounded-2xl"
    //         >
    //             <p className="relative z-10 sm:text-[16px] text-[14px]">Meals</p>
            
    //         </button>
    //         </Link>

    //         <Link href="/shareMeal">
    //         <button 
    //         className="relative flex h-[50px] sm:w-40 w-[70px] items-center justify-center overflow-hidden 
    //         bg-gray-600 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0
    //         before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out 
    //         hover:shadow-orange-600 hover:before:h-56 hover:before:w-56 sm:rounded-[30px] rounded-2xl"
    //         >
    //             <p className="relative z-10 sm:text-[16px] text-[14px] leading-4">Share Meal</p>
            
    //         </button>
    //         </Link>
    //         </div>
    //     </div>
        

    //   <DisclosurePanel className="sm:hidden">
    //     <div className="flex flex-col items-start justify-center rounded-2xl p-4 gap-4 bg-glass">
    //         <Link href="/profile">
    //             <div className="shrink-0 sm:w-[60px] sm:h-[60px] w-[40px] h-[40px] relative">
    //                     <Image className="rounded-full" src={profileImg} alt="user-image" fill/>
    //             </div>
    //         </Link>
    //         <Link href="/meal">
    //             <button 
    //             className="relative flex h-[50px] w-[300px] items-center justify-center overflow-hidden 
    //             bg-gray-600 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0
    //             before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out 
    //             hover:shadow-orange-600 hover:before:h-56 hover:before:w-[300px] rounded-[30px]"
    //             >
    //                 <p className="relative z-10 text-[16px]">Meals</p>
                
    //             </button>
    //         </Link>
    //         <Link href="/shareMeal">
    //         <button 
    //         className="relative flex h-[50px] w-[300px] items-center justify-center overflow-hidden 
    //         bg-gray-600 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0
    //         before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out 
    //         hover:shadow-orange-600 hover:before:h-56 hover:before:w-[300px] rounded-[30px]"
    //         >
    //             <p className="relative z-10 text-[16px] leading-4">Share Meal</p>
            
    //         </button>
    //         </Link>
    //     </div>
    //   </DisclosurePanel>
    // </Disclosure>
