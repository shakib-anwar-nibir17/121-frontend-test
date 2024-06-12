import { Skeleton } from "@/components/ui/skeleton"

export default function ProductSmSkeleton() {
    return (
        <>
            <Skeleton className="h-[280px] md:h-[350px] lg:h-[520px] xl:h-[540px] max-w-[350px] bg-gray-200" />
            <Skeleton className="h-[280px] md:h-[350px] lg:h-[520px] xl:h-[540px] max-w-[350px] bg-gray-200" />
            <Skeleton className="h-[280px] md:h-[350px] lg:h-[520px] xl:h-[540px] max-w-[350px] bg-gray-200" />
            <Skeleton className="h-[280px] md:h-[350px] lg:h-[520px] xl:h-[540px] max-w-[350px] bg-gray-200" />
        </>
    )
}