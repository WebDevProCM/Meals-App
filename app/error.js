'use client';
 
import { useEffect } from 'react';
 
export default function Error({error,reset}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
 
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h2 className="text-center text-5xl font-bold block">Oops</h2>
      <h2 className="text-center text-5xl font-bold block mb-4">Something went wrong!</h2>
      <button
        class="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border 
            border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute 
                before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 
                before:bg-red-500 before:transition-all before:duration-500 hover:text-white 
                hover:shadow-red-500 hover:before:left-0 hover:before:w-full"
        onClick={
          () => reset()
        }
      >
        <span class="relative z-10">
            Try again
        </span>
      </button>
    </main>
  );
}