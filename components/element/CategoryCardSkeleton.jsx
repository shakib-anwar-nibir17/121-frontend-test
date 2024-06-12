import { Skeleton } from "@/components/ui/skeleton"

export default function CategoryCardSkeleton() {
    return (
        <div className="flex flex-col">
            <Skeleton className="w-[168px] sm:w-[229px] md:w-[306px] lg:w-[348px] 2xl:w-[448px] h-[61px] bg-gray-200 rounded-none" />
            <Skeleton className="w-[168px] sm:w-[229px] md:w-[306px] lg:w-[348px] 2xl:w-[448px] h-[61px] bg-gray-200 rounded-none" />
            <Skeleton className="w-[168px] sm:w-[229px] md:w-[306px] lg:w-[348px] 2xl:w-[448px] h-[61px] bg-gray-200 rounded-none" />
            <Skeleton className="w-[168px] sm:w-[229px] md:w-[306px] lg:w-[348px] 2xl:w-[448px] h-[61px] bg-gray-200 rounded-none" />
            <Skeleton className="w-[168px] sm:w-[229px] md:w-[306px] lg:w-[348px] 2xl:w-[448px] h-[61px] bg-gray-200 rounded-none" />
            <Skeleton className="w-[168px] sm:w-[229px] md:w-[306px] lg:w-[348px] 2xl:w-[448px] h-[61px] bg-gray-200 rounded-none" />
        </div>
    )
}