import { cn } from "@/lib/utils";

function VideoSection({ mainContainerClassName }: { mainContainerClassName?: string }) {
    return (
        <div className={cn('bg-[#FFF] w-full flex items-center justify-center py-[20px] xl:py-[100px]', mainContainerClassName)}>
            <div className='flex relative'> 
                <img src="/assets/playbtn.svg" alt="" srcSet="" className='absolute z-[1] w-[135.429px] h-[135.429px] top-[-70px] left-[-60px] rotate(-60deg) xl:hidden' />
                <img src="/assets/playbtn.svg" alt="" srcSet="" className='absolute z-[1] xl:w-[650px] xl:top-[-90px] xl:left-[-375px] 2xl:w-[650px] 2xl:top-[-90px] 2xl:left-[-375px] hidden xl:block' />
                <img src="/assets/videoplayer.png" alt="" srcSet="" className='z-[2] w-[325px] xl:w-[750px]' />
            </div>

        </div>
    )
}

export default VideoSection