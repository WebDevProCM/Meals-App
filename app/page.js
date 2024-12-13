import { GiFullPizza } from "react-icons/gi";
import Link from "next/link";
import LoginSignupForm from "@/components/Login/LoginSignupForm";

export default async function Home() {

  return (
    <main className="flex sm:flex-row sm:flex-wrap flex-col justify-center items-center h-screen w-screen overflow-x-hidden">
    
    <div className="relative flex flex-col justify-center items-center flex-grow sm:flex-[50%] h-full sm:gap-10 gap-5 w-screen 
      bg-left-banner bg-cover bg-no-repeat bg-center p-5 pb-2">
      <div className="z-20 flex justify-center items-center">
        <h1 className="font-pacifico z-30 text-2xl font-bold text-gray-200 max-w-[300px]">
          <span className="text-6xl">Welcome </span> 
          To Food Recipes Sharing App!
        </h1>

        <GiFullPizza size={60}/>
      </div>
      <div className="z-20 flex flex-col justify-center items-center gap-1">
        <Link href="/meal">
        <button className="before:ease relative h-12 w-60 overflow-hidden border border-glass shadow-2xl 
        before:absolute before:left-0 before:-ml-2 before:h-[272px] before:w-[272px] before:origin-top-right 
        before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all 
        before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180 text-orange-500
        font-bold font-pacifico bg-glassHover"
        >
        <span className="relative z-10">Discover Recipes</span>
        </button>
        </Link>
        <h5 className="font-bold font-fairplay">You can explore recipes without loggin!</h5>
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
    </div>
  
    <div className="relative flex justify-center items-center sm:flex-[50%] flex-grow w-screen h-full bg-right-banner bg-cover bg-no-repeat bg-center p-2 pb-6">
      <LoginSignupForm />
      <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-lg"></div>
    </div>

    </main>
  );
}
