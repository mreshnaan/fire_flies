import {
    Carousel,
    CarouselContent,
    CarouselApi,
    CarouselItem,
} from "@/components/ui/carousel"
import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CustomCarousel({ sliders, classNames,iconSize }: { sliders: any, classNames?: string,iconSize?:number }) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        if (api && current > 0) {
            const newIndex = current - 1;
            api.scrollTo(newIndex);
            setCurrent(newIndex);
        }
    };

    const nextSlide = () => {
        if (api && current < sliders.length - 1) {
            const newIndex = current + 1;
            api.scrollTo(newIndex);
            setCurrent(newIndex);
        }
    };

    return (
        <Carousel setApi={setApi} className={`relative ${classNames}`} plugins={[]}>
            <CarouselContent>
                {sliders.map((slider: any, index: any) => (
                    <CarouselItem key={index}>
                        <div className="p-1 flex items-center justify-center">
                            {slider}
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="flex items-center justify-center mt-[24px] w-full">
                <Button variant={"ghost"} className="hover:bg-transparent" onClick={prevSlide} disabled={current === 0} >
                    <ChevronLeft size={iconSize ?iconSize : 55} color={current === 0 ? "gray" : "#70757E"} />
                </Button>

                <div className="flex items-center justify-center gap-4 w-full">
                    {sliders.map((_: any, index: any) => (
                        <Button
                            key={index}
                            className={`h-[3px] w-[50px] p-0 transition-all duration-300 hover:bg-[#69EAFF] ${index === current
                                ? "bg-[#69EAFF]"
                                : "bg-[#70757E]"
                                }`}
                            onClick={() => {
                                api?.scrollTo(index);
                                setCurrent(index);
                            }}
                        />
                    ))}
                </div>
                <Button variant={"ghost"} className="hover:bg-transparent" onClick={nextSlide} disabled={current === sliders.length - 1} >
                    <ChevronRight size={iconSize ?iconSize : 55}  color={current === sliders.length - 1 ? "gray" : "#70757E"} />
                </Button>
            </div>
        </Carousel>
    )
}
