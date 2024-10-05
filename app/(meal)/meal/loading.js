import MealPostLoading from "@/components/LoadingSkeletons/MealPostLoading"
import { Skeleton } from "@/components/ui/skeleton"

export default function LoadingPage(){
    return(
        <main className="py-[80px] px-[20px] mx-auto relative h-full">
            <Skeleton className="h-6 w-[200px]" />
            <MealPostLoading />
        </main>
    )
}