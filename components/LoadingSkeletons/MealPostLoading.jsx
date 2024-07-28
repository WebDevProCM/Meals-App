import { Skeleton } from "@/components/ui/skeleton"

function MealPostLoading() {
  return (
    <main className="flex justify-center items-start flex-wrap gap-5 relative z-20 max-w-[1500px] mx-auto">

        <div className='rounded-[15px] max-w-[350px] mx-auto text-[#ddd6cb] bg-grad
        bg-gradient-to-r from-[#2c1e19] to-[#25200f] overflow-hidden my-[30px] relative z-20'>
        <div className='flex justify-between items-start px-[20px] py-[10px] gap-[10px]'>
        <div className='flex justify-start items-start gap-[10px]'>
            <div className='relative w-[40px] h-[40px] rounded-full'>
                <Skeleton className="w-[40px] h-[40px] rounded-full" />
            </div>
            <div className='flex flex-col justify-center items-start gap-2'>
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
        </div>
        <div className='flex justify-start items-center p-[15px] font-bold uppercase'>
            <Skeleton className="h-4 w-[200px]" />
        </div>
        <div className='relative w-[350px] h-[400px]'>
            <Skeleton className="w-full h-[400px]" />
        </div>

        <div className='flex flex-col justify-center items-center gap-1 mt-1'>
            <Skeleton className="w-full h-10" />
            <Skeleton className="w-full h-10" />
        </div>
        </div>
        <div className='rounded-[15px] max-w-[350px] mx-auto text-[#ddd6cb] bg-grad
        bg-gradient-to-r from-[#2c1e19] to-[#25200f] overflow-hidden my-[30px] relative z-20'>
        <div className='flex justify-between items-start px-[20px] py-[10px] gap-[10px]'>
        <div className='flex justify-start items-start gap-[10px]'>
            <div className='relative w-[40px] h-[40px] rounded-full'>
                <Skeleton className="w-[40px] h-[40px] rounded-full" />
            </div>
            <div className='flex flex-col justify-center items-start gap-2'>
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
        </div>
        <div className='flex justify-start items-center p-[15px] font-bold uppercase'>
            <Skeleton className="h-4 w-[200px]" />
        </div>
        <div className='relative w-[350px] h-[400px]'>
            <Skeleton className="w-full h-[400px]" />
        </div>

        <div className='flex flex-col justify-center items-center gap-1 mt-1'>
            <Skeleton className="w-full h-10" />
            <Skeleton className="w-full h-10" />
        </div>
        </div>
    </main>
  )
}

export default MealPostLoading