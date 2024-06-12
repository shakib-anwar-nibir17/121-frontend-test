import Category from "@/components/home/Category";
import Discount from "@/components/home/Discount";
import EssentialProduct from "@/components/home/EssentialProduct";
import FormSection from "@/components/home/FormSection";
import HorizontalProducts from "@/components/home/HorizontalProducts";
import MainBanner from "@/components/home/MainBanner";
import MidBanner from "@/components/home/MidBanner";
import LatestProducts from "@/components/home/LatestProducts";
import MostPurchasedProduct from "@/components/home/MostPurchasedProduct";
import MostViewedProduct from "@/components/home/MostViewedProduct";
import LeftBanner from "@/components/home/NewArrivalsWithSpecialCollection/LeftBanner";
import NewProducts from "@/components/home/NewProducts";
import OnGoingSaleCard from "@/components/home/OnGoingSaleCard";
import SpecialCollectionLong from "@/components/home/SpecialCollectionLong";
import SpecialCollectionMulti from "@/components/home/SpecialCollectionMulti";
import TopSellingProduct from "@/components/home/TopSellingProduct";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import Link from "next/link";
import { LockIconSVG } from "../../components/icons/icons";
import { Suspense } from "react";
import CategoryCardSkeleton from "@/components/element/CategoryCardSkeleton";
import MainSliderSkeleton from "@/components/element/MainSliderSkeleton";
import AdsSliderSkeleton from "@/components/element/AdsSliderSkeleton";
import ProductsCollectionSkeleton from "@/components/element/ProductsCollectionSkeleton";
import AdvertisementSkeleton from "@/components/element/AdvertisementSkeleton";
import OnGoingSeleSkeleton from "@/components/element/OnGoingSeleSkeleton";
import SpecialCollectionMCardSkeleton from "@/components/element/SpecialCollectionMCardSkeleton";
import ProductXsSkeleton from "@/components/element/ProductXsSkeleton";
import SpecialCollectionLongCardSkeleton from "@/components/element/SpecialCollectionLongCardSkeleton";
import MostViewedProductSkeleton from "@/components/element/MostViewedProductSkeleton";
import ProductHorizontalSkeleton from "@/components/element/ProductHorizontalSkeleton";

export default function Home() {
  return (
    <>
      <div className="container @container sm:px-8 px-4 md:min-h-[25rem]">
        <div className="flex items-start xl:space-x-6">
          <div className="hidden overflow-hidden xl:block w-[350px] 2xl:w-[450px] h-auto rounded-bl-xl rounded-br-xl border-l border-r border-b">
            <Suspense fallback={<CategoryCardSkeleton />}>
              <Category />
            </Suspense>
            <div className="border-b hover:bg-primary-50 cursor-pointer flex justify-between items-center">
              <Link href={"impact-type/10"}>
                <Popover>
                  <PopoverTrigger className="hover:bg-primary-50 cursor-pointer px-4 py-1.5 2xl:px-6 xl:py-4 flex justify-between items-center w-full">
                    <div className="flex items-center space-x-4">
                      <span>
                        <LockIconSVG />
                      </span>
                      <span className="text-sm font-normal text-primary-950 xl:text-base 2xl:text-lg">
                        Best Seller
                      </span>
                    </div>
                  </PopoverTrigger>
                </Popover>
              </Link>
            </div>
            <div className="border-b hover:bg-primary-50 cursor-pointer flex justify-between items-center">
              <Link href={"impact-type/3"}>
                <Popover>
                  <PopoverTrigger className="hover:bg-primary-50 cursor-pointer px-4 py-1.5 2xl:px-6 xl:py-4 flex justify-between items-center w-full">
                    <div className="flex items-center space-x-4">
                      <span>
                        <LockIconSVG />
                      </span>
                      <span className="text-sm font-normal text-primary-950 xl:text-base 2xl:text-lg">
                        New Arrival
                      </span>
                    </div>
                  </PopoverTrigger>
                </Popover>
              </Link>
            </div>
          </div>

          <Suspense fallback={<MainSliderSkeleton />}>
            <MainBanner />
          </Suspense>
        </div>
      </div>

      <FormSection />

      <div className="container sm:px-8 px-4  xl:pb-16 2xl:pb-[83px] overflow-hidden">
        <Suspense fallback={<AdsSliderSkeleton />}>
          <MidBanner />
        </Suspense>
      </div>

      <Suspense fallback={<ProductsCollectionSkeleton />}>
        <LatestProducts />
      </Suspense>

      {/* start new arrivals with special collection */}
      <div className="container @container sm:px-8 px-4 sm:pb-12 md:pb-24 overflow-hidden">
        <div className="md:grid grid-cols-2 gap-6 xl:hidden space-y-6 md:space-y-0 mb-6">
          <Suspense fallback={<AdvertisementSkeleton />}>
            <LeftBanner />
          </Suspense>
          <Suspense fallback={<OnGoingSeleSkeleton />}>
            <OnGoingSaleCard />
          </Suspense>
        </div>
        <div className="flex xl:space-x-8 2xl:space-x-10">
          <div className="lg:w-[22rem] xl:w-[22rem] flex-shrink-0 gap-y-6 hidden xl:flex flex-col xl:gap-24 justify-between">
            <Suspense fallback={<AdvertisementSkeleton />}>
              <LeftBanner />
            </Suspense>
            <Suspense fallback={<OnGoingSeleSkeleton />}>
              <OnGoingSaleCard />
            </Suspense>
          </div>

          <div className="flex-1">
            <div className="grid xl:grid-cols-2 gap-7 sm:mb-8">
              <Suspense fallback={<SpecialCollectionMCardSkeleton />}>
                <SpecialCollectionMulti />
              </Suspense>
            </div>
            <div>
              <Suspense fallback={<ProductsCollectionSkeleton />}>
                <NewProducts />
              </Suspense>
              <Suspense fallback={<SpecialCollectionLongCardSkeleton />}>
                <SpecialCollectionLong />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
      {/* end new arrivals with special collection */}

      <div className="container @container sm:px-8 px-4 overflow-hidden">
        <div className="py-6 xl:hidden space-y-12">
          <Suspense fallback={<MostViewedProductSkeleton />}>
            <MostPurchasedProduct />
          </Suspense>
          <Suspense fallback={<MostViewedProductSkeleton />}>
            <MostViewedProduct />
          </Suspense>
        </div>

        <div className="flex xl:space-x-8 2xl:space-x-10">
          <div className="lg:w-[22rem] 2xl:w-[28rem] flex-shrink-0 hidden xl:block space-y-12 2xl:space-y-24">
            <Suspense fallback={<MostViewedProductSkeleton />}>
              <MostPurchasedProduct />
            </Suspense>
            <Suspense fallback={<MostViewedProductSkeleton />}>
              <MostViewedProduct />
            </Suspense>
          </div>

          <div className="flex-1">
            <div>
              <Suspense fallback={<ProductsCollectionSkeleton />}>
                <EssentialProduct />
              </Suspense>
            </div>

            <Suspense fallback={<AdsSliderSkeleton />}>
              <Discount />
            </Suspense>

            <div>
              <Suspense fallback={<ProductsCollectionSkeleton />}>
                <TopSellingProduct />
              </Suspense>
            </div>
          </div>
        </div>
      </div>

      <Suspense fallback={<ProductHorizontalSkeleton />}>
        <HorizontalProducts />
      </Suspense>
    </>
  );
}
