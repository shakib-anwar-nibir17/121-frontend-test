import ProductSmSkeleton from "@/components/element/ProductSmSkeleton";

const Loading = () => {
    return (
        <main className="mx-auto container px-4 sm:px-6 2xl:pt-8 lg:px-8 pb-12 mt-6">
            <div className="py-4">
                <p className="text-primary-950 font-medium border-b flex justify-between pb-5">
                    Showing search results
                </p>
                <div className="flex-1 md:pl-8 pt-6">
                    <div className="grid mb-6 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 grid-cols-2 gap-4  2xl:grid-cols-5 md:gap-6">
                        <ProductSmSkeleton />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Loading;