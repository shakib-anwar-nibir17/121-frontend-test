import { Skeleton } from "@/components/ui/skeleton"

export default function MainSliderSkeleton() {
    return (
        <div className="flex-1 mt-8 rounded-2xl">
            <div className="relative">
                <Skeleton className="object-cover h-[200px] md:h-[360px] lg:h-[500px] xl:h-[449px] w-max-[820px] bg-gray-200" />
            </div>
        </div>
    )
}