import { CgSearchLoading } from "react-icons/cg";

export default function LoadingPage(){
    return(
        <main className="max-w-[1400px] h-screen flex justify-center items-center mx-auto">
            <CgSearchLoading size={50}/>
            <h1 className="sm:text-5xl text-4xl text-gray-100 font-bold uppercase">Loading...</h1>
        </main>
    )
}