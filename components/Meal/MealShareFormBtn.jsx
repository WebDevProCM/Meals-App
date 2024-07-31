import { Loader2 } from "lucide-react"
import { useFormStatus } from 'react-dom'

function MealShareFormBtn() {
    const {pending} = useFormStatus();
  return (
    <>
        <button 
        className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden 
        bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0
            before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out 
            hover:shadow-orange-600 hover:before:h-56 hover:before:w-56 my-[60px] ml-auto"
        type="submit" disabled={pending}
        >

            <p className="relative z-10 flex">
             {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
             {pending?"Sharing Recipe": "Share Recipe"}
            </p>
        </button>
    </>
  )
}

export default MealShareFormBtn