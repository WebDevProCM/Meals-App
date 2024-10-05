import { Skeleton } from "@/components/ui/skeleton"
import ProfileSectionLoading from "@/components/LoadingSkeletons/ProfileSectionLoading";

export default function LoadingPage(){
    return(
        <main className="max-w-[1500px] mx-auto px-[20px] py-8">
            <div className="flex flex-col items-center justify-center gap-4 w-full overflow-hidden">
                <div className="flex flex-col items-center justify-center">
                    <Skeleton className="h-72 w-[1000px]" />
                    <ProfileSectionLoading />
                </div>
            </div>
        </main>
    )
}