"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";
import { AnimatePresence, motion } from "framer-motion";

let results = [];

function SearchResults({mealTitles}) {
    const [textInput, setTextInput] = useState(false);
    const divRef = useRef(null);

    const searchHandler = (event) =>{
        if(!event.target.value){
            results = [];
            return setTextInput(false);
        }
        results = mealTitles.filter(meal => meal.toLowerCase().includes(event.target.value.toLowerCase()));
        setTextInput(event.target.value);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
        if (divRef.current && !divRef.current.contains(event.target)) {
            results = [];
            setTextInput(false);
        }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

  return (
    <>
    <form
     className="max-w-full flex items-center justify-center overflow-hidden"
     ref={divRef}
     >
        <input 
        className="shrink bg-transparent w-full flex-1 py-[15px] px-[10px] rounded-[20px] focus:outline-none" 
        placeholder="Type Recipe Title" name="meal" onChange={searchHandler}
        />
        {/* <motion.button 
        className="bg-slate-300 max-w-[40px] px-[10px]" type="button"
        whileHover={{scale: 1.3}}
        >
            <FaSearch />
        </motion.button> */}
    </form>

    <AnimatePresence mode="wait">
    {textInput &&
    <motion.div 
    layout 
    className="w-full max-h-96 overflow-y-scroll absolute top-full bg-gradient-to-r from-[#2c1e19] to-[#25200f] text-white z-50 rounded-md opacity-95 p-4"
    initial={{opacity: 0, scaleX: 0}}
    animate= {{opacity: 1, scaleX: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.5 ,type:"spring"}}
    >
        {results.length > 0 ?
            results.map(meal => (
                <div key={meal} className="p-1 text-lg font-bold border-b-2 border-black">
                    <Link href={`/meal/${meal}`}><h1><GiHotMeal size={30}/>{meal}</h1></Link>
                </div>
            ))
            :
            <div className="mx-auto text-center p-2 text-lg font-bold"><h1>No recipe found!</h1></div>
        }


    </motion.div>
    }
    </AnimatePresence>
    </>
  )
}

export default SearchResults