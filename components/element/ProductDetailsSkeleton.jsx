import { Skeleton } from "@/components/ui/skeleton";

const ProductDetailsSkeleton = () => {
  return (
    <main className="mx-auto container sm:px-6 sm:pt-8 lg:px-8 my-4">
      {/* breadcrumb skeleton */}
      <div className="grid grid-cols-3 gap-4 h-4 sm:h-6 w-3/4 sm:w-1/3 mb-4 mx-4">
        <Skeleton className="bg-gray-200 h-full w-full "></Skeleton>
        <Skeleton className="bg-gray-200 h-full w-full "></Skeleton>
        <Skeleton className="bg-gray-200 h-full w-full "></Skeleton>
      </div>

      <div className="grid xl:grid-cols-12 gap-10">
        <div className="xl:col-span-8 2xl:col-span-9">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <div className="flex flex-col-reverse px-4">
              {/* Image thumbnails skeleton */}
              <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <div className="grid grid-cols-4 gap-6">
                  {Array.from({ length: 4 }, (_, index) => (
                    <Skeleton
                      key={index}
                      className=" bg-gray-200 h-24 w-full max-w-2xl sm:block lg:max-w-none rounded-md"
                    ></Skeleton>
                  ))}
                </div>
              </div>

              {/* Main image skeleton */}
              <div className="aspect-h-1 aspect-w-1 w-full border border-gray-200 rounded-lg">
                <Skeleton className=" h-full w-full bg-gray-200 rounded-lg"></Skeleton>
              </div>
            </div>

            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              {/* Product details skeleton */}
              <Skeleton className=" bg-gray-200 h-6 w-1/2 mb-2"></Skeleton>
              <Skeleton className=" bg-gray-200 h-6 w-full mb-2"></Skeleton>
              <Skeleton className=" bg-gray-200 h-6 w-3/4 mb-2"></Skeleton>
              <Skeleton className=" bg-gray-200 h-6 w-1/2 mb-2"></Skeleton>
              <Skeleton className=" bg-gray-200 h-6 w-1/4 mb-2"></Skeleton>
              <Skeleton className="flex items-center mb-5">
                <div className=" bg-gray-200 h-6 w-1/4 mr-2"></div>
                <div className=" bg-gray-200 h-6 w-1/4 mr-2"></div>
              </Skeleton>
              <div className="my-1.5 2xl:my-3">
                <Skeleton className=" bg-gray-200 h-6 w-1/2 mb-2"></Skeleton>
              </div>

              {/* Buttons skeleton */}
              <Skeleton className="px-8  bg-gray-200 h-12 mt-6 w-1/5 md:1/4"></Skeleton>
            </div>
          </div>
        </div>

        {/* Supplier component skeleton */}
        <div className="xl:col-span-4 2xl:col-span-3">
          <Skeleton className=" bg-gray-200 h-72 w-full"></Skeleton>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailsSkeleton;
