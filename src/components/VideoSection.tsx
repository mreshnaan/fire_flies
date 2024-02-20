import { cn } from "@/lib/utils";
import { VideoPlayer } from "./VideoPlayer";

function VideoSection({ mainContainerClassName, videoUrl, coverImageUrl }: { mainContainerClassName?: string, videoUrl: string, coverImageUrl: string }) {

    return (
        <div className={cn('bg-[#FFF] w-full flex items-center justify-center py-[20px] xl:py-[100px]', mainContainerClassName)}>
            <div className='flex relative'>
                <div className='z-[2] w-[325px] xl:w-[750px] flex justify-center items-center'>
                    <VideoPlayer url={videoUrl} coverImage={coverImageUrl} />
                </div>
            </div>
        </div>
    );
}

export default VideoSection;
