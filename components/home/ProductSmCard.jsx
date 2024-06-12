import { Button } from "@/components/ui/button";
import { BDT_ICON } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { IoMdHeartEmpty } from "react-icons/io";
import contentUrl from "../../lib/contentUrl";
import { CompareSvgComponent } from "../icons/icons";

export default function ProductCard({ product }) {
  return (
    <div className="flex flex-col card group/item @sm:p-3 @md:p-4 @lg:p-2">
      <div className=" relative  p-2 lg:p-6">
        <Image
          src={
            product?.product_images?.length > 0
              ? contentUrl(product?.product_images[0].image_url)
              : "http://gcdnb.pbrd.co/images/tilPZiWNfqP9.png"
          }
          alt={product?.product_images?.[0]?.alter_text}
          width={180}
          height={37}
          loading={"lazy"}
          className="object-cover w-32  h-28 lg:h-48 lg:w-48 mx-auto"
        />

        {/* <Badge className="absolute top-2 left-2 lg:top-6 lg:left-6 text-gray-900">-${product.product_price}</Badge> */}

        <div className="absolute ease-in-out transition duration-700 right-4 top-4 space-y-3 opacity-100">
          <button
            aria-label="addToFev"
            className="flex-shrink-0 group w-10 h-10 rounded-full border border-slate-200 text-main-400 hover:border-rose-500 flex justify-center items-center"
            // onClick={() => dispatch(add(product))}
          >
            <IoMdHeartEmpty className="text-xl group-hover:fill-rose-500" />
          </button>

          <button
            aria-label="addToComp"
            className="flex-shrink-0 group w-10 h-10 rounded-full border border-slate-200 hover:border-yellow-500 flex justify-center items-center"
          >
            <CompareSvgComponent />
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col lg:space-y-2 justify-between p-2 lg:p-4">
        <div className="pb-2">
          <h3 className="text-xs sm:text-sm xl:text-[22px] hover:underline font-medium text-main-950 line-clamp-2 pb-1">
            <Link href={`/details/${product?.supplierproduct_id}`}>
              {product.product_name}
            </Link>
          </h3>
          <p className="text-xs lg:text-lg text-main-900 mt-2">
            {/* {product?.sub_cat_name} */}
            Auto Parts
          </p>
        </div>

        <div className="xl:pb-3 hidden @md:block">
          <p className="text-xs @md:text-sm xl:text-lg text-main-400">
            Brand: {product.brand_name}
          </p>
        </div>

        <div className="">
          <div className="flex items-center mt-9 space-x-3 sm:mb-1.5">
            <div className="flex flex-col items-start">
              <del className="text-sm lg:text-lg text-gray-400">
                <p className="leading-6">
                  {BDT_ICON} {product.previous_price}
                </p>
              </del>
              <p className="text-sm lg:text-[28px] font-medium text-black leading-8">
                {BDT_ICON} {product.new_price}
              </p>
            </div>
            <p className="text-sm lg:text-3xl font-medium text-slate-950 leading-[1.78]">
              {product.product_price}
            </p>
          </div>
          <div className="@md:flex items-center @md:space-x-7 @md:mb-2">
            <p
              className={`${
                product?.stock > 0 ? "text-gray-500" : "text-red-600"
              } font-normal text-xs lg:text-lg mb-1.5 @md:mb-0 leading-8`}
            >
              {product?.stock > 0
                ? `${product?.stock} Pieces In Stock`
                : `${product?.stock}`}
            </p>
            {/* <p className="text-slate-600 font-normal text-xs lg:text-sm hidden @md:block">
              1 day delivery
            </p> */}
          </div>
        </div>

        <Link href={`/details/${product?.supplierproduct_id}`}>
          <Button
            variant="outline"
            //onClick={() => router.push(`/details/${product?.supplierproduct_id}`)}
            className="w-full text-main-800 py-3 text-lg @xl:text-lg mt-4"
          >
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
}
