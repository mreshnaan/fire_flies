import { cn } from "@/lib/utils"

function Divider({ className }: {className?: string }) {
    return (
        <div className={cn("h-[1px] w-full bg-[#FFF] opacity-20", className)} >
        </div>
    )
}

export default Divider