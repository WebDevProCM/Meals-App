import { Skeleton } from "@/components/ui/skeleton"

export default function LoadingPage(){
    return(
        <main className="max-w-[1400px] py-[60px] px-[20px] mx-auto">
            <div className="flex flex-col items-start gap-4 w-full overflow-hidden">
                <div className="flex items-start gap-4">
                    <Skeleton className="h-8 w-[200px]" />
                </div>

                <div className="flex justify-center items-start gap-4 mx-auto rounded-md">
                    <Skeleton className="h-72 w-[1100px] rounded-md" />
                </div>

                <div className="flex items-start gap-4 mx-auto">
                    <Skeleton className="h-screen w-[500px]" />
                </div>
            </div>
        </main>
    )
}