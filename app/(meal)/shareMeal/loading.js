import { Skeleton } from "@/components/ui/skeleton"

export default function LoadingPage(){
    return(
        <main className="max-w-[1200px] mr-auto text-white p-[20px] py-[40px]">
            <div className="flex flex-col items-start gap-4 w-full overflow-hidden">
                <div className="flex flex-col items-start gap-4">
                    <Skeleton className="h-6 w-[200px]" />
                    <Skeleton className="h-10 w-screen" />
                </div>
                <div className="flex flex-col items-start gap-2">
                    <Skeleton className="h-6 w-[200px]" />
                    <Skeleton className="h-10 w-screen" />
                </div>
                <div className="flex flex-col items-start gap-2">
                    <Skeleton className="h-6 w-[200px]" />
                    <Skeleton className="h-48 w-screen" />
                </div>
                <div className="flex items-start gap-4">
                    <Skeleton className="h-[200px] w-[200px]" />
                    <Skeleton className="h-10 w-40" />
                </div>
                <div className="flex justify-end gap-2 w-full">
                    <Skeleton className="h-10 w-40" />
                </div>
            </div>
        </main>
    )
}