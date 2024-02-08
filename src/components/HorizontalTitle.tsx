import { cn } from "@/lib/utils";

function HorizontalTitle({ title, mainContainerClassName, titleClassName, strokeClassName }: { title: string, mainContainerClassName?: string, titleClassName?: string, strokeClassName?: string }) {
  return (
    <div className={cn(`flex flex-col items-center justify-center gap-14 w-[10px]`, mainContainerClassName)}>
      <div className={cn("border-r-2 w-1 h-[100px] border-[#505D65]", strokeClassName)}></div>
      <p className={cn("rotate-[270deg] font-bold text-[12px] text-[#505D65] uppercase min-w-[79px] w-fit", titleClassName)}>{title}</p>
    </div>
  );
}

export default HorizontalTitle;
