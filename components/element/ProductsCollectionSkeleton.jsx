import ProductSmSkeleton from "@/components/element/ProductSmSkeleton";

const ProductsCollectionSkeleton = () => {
    return (
        <div className="container @container sm:px-8 px-4 pb-6 lg:pb-12 xl:pb-24 overflow-hidden">
            <div className="grid grid-cols-2 @md:grid-cols-2 @sm:grid-cols-2 @2xl:grid-cols-3 @6xl:grid-cols-4 gap-2 @md:gap-6 @lg:gap-8 @xl:gap-6">
                <ProductSmSkeleton />
            </div>
        </div>
    )
}

export default ProductsCollectionSkeleton