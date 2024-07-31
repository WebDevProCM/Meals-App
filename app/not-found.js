import Link from "next/link";

export default function NotFound(){
    return(
        <main className="h-screen flex flex-col justify-center items-center text-5xl text-gray-200 font-bold">
            <h1 className="text-4xl">404</h1>
            <h1 className="uppercase">Requested page or recipe not found!</h1>
            <Link className="text-xl font-bold underline mt-5" href="/meal">DISCOVER RECIPES</Link>
        </main>
    )
}