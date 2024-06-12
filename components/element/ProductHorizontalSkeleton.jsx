import { Skeleton } from "@/components/ui/skeleton"

export default function ProductHorizontalSkeleton() {
    return (
        <div className="container sm:px-8 px-4 sm:py-12 md:py-24 overflow-hidden">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 sm:gap-7 gap-7">
                <Skeleton className="h-[250px] sm:h-[298px] md:h-[206px] lg:h-[178px] xl:h-[206px] 2xl:h-[298px] w-[288px] lg:w-[410px] max-w-[472px] bg-gray-200" />
                <Skeleton className="h-[250px] sm:h-[298px] md:h-[206px] lg:h-[178px] xl:h-[206px] 2xl:h-[298px] w-[288px] lg:w-[410px] max-w-[472px] bg-gray-200" />
                <Skeleton className="h-[250px] sm:h-[298px] md:h-[206px] lg:h-[178px] xl:h-[206px] 2xl:h-[298px] w-[288px] lg:w-[410px] max-w-[472px] bg-gray-200" />
            </div>
        </div>

    )
}