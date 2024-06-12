import ProductXsCard from "@/components/home/ProductXsCard";
import SpacialCollectionCard from "@/components/home/SpacialCollectionCard";
import TitleWithViewAll from "@/components/home/TitleWithViewAll";
import Image from "next/image";
import Link from "next/link";

export default function NewArrivalsWithSpecialCollection({ bgImage, info }) {
  console.log(bgImage, info);
  return (
    <div className="container sm:px-8 px-4 pb-6 sm:pb-12 md:pb-24 overflow-hidden">
      <div className="flex xl:space-x-8 2xl:space-x-10">
        <div className="lg:w-[22rem] 2xl:w-[28rem] flex-shrink-0 hidden xl:flex flex-col justify-between">
          <div className="relative">
            <Image src="/demo/add_car.png" alt="" />
            <span className="text-base font-normal text-primary-950 absolute top-5 right-5 rounded-xl px-3 py-2 bg-primary-100">
              Advertisement
            </span>
          </div>
          <div className="card">
            <div className="text-center pt-10">
              <p className="text-primary-800 text-base">ONGOING SALE</p>
              <p className="text-primary-950 font-normal text-3xl leading-[2.25]">
                Car Tires
              </p>
              <p className="leading-[1.78] capitalize text-lg text-primary-950 pb-8">
                Shop now & get UP TO 70% DISCOUNT
              </p>

              <Link href={"category"}>
                <button className="rounded-full bg-primary-800 hover:bg-primary-900 focus:outline-none ring-1 focus:ring-primary-800 text-white py-2.5 px-6">
                  Shop Now
                </button>
              </Link>
            </div>

            <div className="mx-auto w-64 h-auto pb-4">
              <Image src="/demo/product.png" alt="" />
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="grid md:grid-cols-2 gap-7 mb-12 sm:mb-20">
            <div
              className="card bg-no-repeat bg-cover object-center overflow-hidden p-6"
              style={{
                backgroundImage: `url('/demo/category_bg_images.png')`,
              }}
            >
              <div className="py-3 pl-2">
                <p className="text-primary-900 text-base font-medium mb-4">
                  SPECIAL COLLECTION
                </p>

                <div className="mb-8">
                  <p className="font-bold text-3xl text-primary-950 pb-2">
                    Interior Accessories
                  </p>
                  <p className="text-lg font-normal leading-7 text-primary-950">
                    Don’t miss the last opportunity
                  </p>
                </div>

                <Link href={"category"}>
                  <button className="rounded-full bg-primary-800 hover:bg-primary-900 focus:outline-none ring-1 focus:ring-primary-800 text-white py-2.5 px-6">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
            <SpacialCollectionCard />
          </div>

          <div>
            <TitleWithViewAll title={"New Arrivals"} href={"#"} />

            <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-4 mb-8 sm:mb-16 md:mb-24">
              {products.map((product) => (
                <ProductXsCard key={product.id} product={product} />
              ))}
            </div>

            <div
              className="card bg-no-repeat bg-cover object-center overflow-hidden p-6"
              style={{
                backgroundImage: `url('/demo/category_bg_images_headphone.png')`,
              }}
            >
              <div className="py-3 pl-2">
                <p className="text-primary-900 text-base font-medium mb-4">
                  SPECIAL COLLECTION
                </p>

                <div className="mb-8">
                  <p className="font-bold text-3xl text-primary-950 pb-2">
                    Interior Accessories
                  </p>
                  <p className="text-lg font-normal leading-7 text-primary-950">
                    Don’t miss the last opportunity
                  </p>
                </div>

                <Link href={"category"}>
                  <button className="rounded-full bg-primary-800 hover:bg-primary-900 focus:outline-none ring-1 focus:ring-primary-800 text-white py-2.5 px-6">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
