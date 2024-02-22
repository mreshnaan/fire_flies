import { cn } from "@/lib/utils";
import ReactPlayer from "react-player";
import playButton from "/assets/playButton.svg";

function VideoSection({
  mainContainerClassName,
  videoUrl,
  coverImageUrl,
}: {
  mainContainerClassName?: string;
  videoUrl: string;
  coverImageUrl: string;
}) {
  return (
    <div
      className={cn(
        "bg-[#FFF] w-full flex items-center justify-center py-[20px] xl:py-[100px]",
        mainContainerClassName
      )}
    >
      <div className="flex relative">
        <div className="z-[2] w-[325px] xl:w-[750px] xl:flex justify-center items-center hidden">
          {/* <VideoPlayer url={videoUrl} coverImage={coverImageUrl} /> */}
          <ReactPlayer
            url={videoUrl}
            width="100%"
           height="450px"
            controls
            playing
            playIcon={
              <button>
                <img src={playButton}/>
              </button>
            }
            light={coverImageUrl}
          />
        </div>
        <div className="z-[2] w-[325px] xl:w-[750px] flex justify-center items-center xl:hidden">
          {/* <VideoPlayer url={videoUrl} coverImage={coverImageUrl} /> */}
          <ReactPlayer
            url={videoUrl}
            width="100%"
           height="250px"
            controls
            playing
            playIcon={
              <button>
                <img src={playButton}/>
              </button>
            }
            light={coverImageUrl}
          />
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
