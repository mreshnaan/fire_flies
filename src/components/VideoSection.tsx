import { cn } from "@/lib/utils";

function VideoSection({ mainContainerClassName }: { mainContainerClassName?: string }) {
    return (
        <div className={cn('bg-[#FFF] w-full flex items-center justify-center py-[100px]', mainContainerClassName)}>
            <div className='flex relative'>
                <img src="/assets/playbtn.svg" alt="" srcSet="" className='absolute z-[1] top-[-58px] left-[-415px] ' />
                <img src="/assets/videoplayer.png" alt="" srcSet="" className='z-[2]' />
            </div>

        </div>
    )
}

export default VideoSection