import { Skeleton } from "@/components/ui/skeleton"

export default function MostViewedProductSkeleton() {
    return (
        <div className="grid gap-2">
            <Skeleton className="h-[50px] sm:h-[100px] md:h-[100px] lg:h-[120px] 2xl:h-[164px] xl:w-[352px] 2xl:w-[448px] bg-gray-200" />
            <Skeleton className="h-[50px] sm:h-[100px] md:h-[100px] lg:h-[120px] 2xl:h-[164px] xl:w-[352px] 2xl:w-[448px] bg-gray-200" />
            <Skeleton className="h-[50px] sm:h-[100px] md:h-[100px] lg:h-[120px] 2xl:h-[164px] xl:w-[352px] 2xl:w-[448px] bg-gray-200" />
            {/* <Skeleton className="h-[50px] sm:h-[100px] md:h-[100px] lg:h-[120px] 2xl:h-[164px] xl:w-[352px] 2xl:w-[448px] bg-gray-200" /> */}
        </div>
    )
}