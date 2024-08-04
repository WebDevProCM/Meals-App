import { Skeleton } from "@/components/ui/skeleton"

function ProfileSectionLoading() {
  return (
    <div className="flex justify-center items-center max-w-[800px] mx-auto sm:mt-[-60px] mt-[-20px] gap-5 
    p-10 z-50">
        <div className="flex flex-col gap-1 items-end justify-end sm:text-[30px] text-[25px] font-bold text-white">
            <Skeleton className="h-[25px] w-[150px]" />
            <Skeleton className="h-[30px] w-[60px] rounded-full"/>
        </div>
        <div className="sm:w-[150px] sm:h-[150px] w-[100px] h-[100px] relative">
            <Skeleton className="h-full w-full rounded-full"/>
        </div>
    </div>
  )
}

export default ProfileSectionLoading