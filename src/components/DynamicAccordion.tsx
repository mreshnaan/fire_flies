import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils";

type AccordionItem = {
  title: string;
  icon?: JSX.Element;
  content: string | JSX.Element;
};

export function DynamicAccordion({ items, titleClassName, iconClassName, contentClassName }: { items: AccordionItem[], titleClassName?: string, iconClassName?: string, contentClassName?: string }) {
  return (
    <Accordion type="single" collapsible className="w-full text-[#505D65]">
      {items?.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-[#505D65] border-b border-opacity-20 py-4">
          <AccordionTrigger>
            <div className="flex gap-3 items-center">
              {item.icon && (<>
                <span className={cn(`text-[#505D65] group-data-[state=open]:text-[#13AFB6]`, iconClassName)}>
                  {item.icon}
                </span>
              </>)}
              <span className={cn(`text-[24px] text-[#505D65] font-bold leading-[18.7px] xl:text-[24px] xl:leading-[36px]`, titleClassName)}>
                {item.title}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className={cn("", contentClassName)}>
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
