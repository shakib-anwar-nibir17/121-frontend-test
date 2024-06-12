import { Button } from "@/components/ui/button";
import { BDT_ICON } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { IoMdHeartEmpty } from "react-icons/io";
import contentUrl from "../../lib/contentUrl";
import { CompareSvgComponent } from "../icons/icons";

export default function ProductCard({ product }) {
  return (
    <div className="flex flex-col card group/item @sm:p-1">
      <div className="relative p-2 lg:p-6">
        <Image
          src={
            product?.product_images?.length > 0
              ? contentUrl(product?.product_images[0].image_url)
              : "http://gcdnb.pbrd.co/images/tilPZiWNfqP9.png"
          }
          alt={product?.product_name}
          width={180}
          height={37}
          loading={"lazy"}
          className="object-cover w-32 h-28 mx-auto"
        />

        <div className="absolute ease-in-out transition duration-700 right-2 top-4 space-y-3 opacity-100">
          <button
            aria-label="addToFev"
            className="flex-shrink-0 group w-10 h-10 rounded-full border border-slate-200 text-main-400 hover:border-rose-500 flex justify-center items-center"
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

      <div className="flex flex-1 flex-col lg:space-y-2 justify-between p-2 lg:px-4 lg:pb-4">
        <div className="pb-2">
          <h3 className="text-xs @sm:text-sm hover:underline font-medium text-gray-900 line-clamp-2 pb-1">
            <Link href={`/details/${product?.supplierproduct_id}`}>
              {product?.product_name}
            </Link>
          </h3>
          <p className="text-xs text-primary-900">{product?.tag_name}</p>
        </div>

        <div className="xl:pb-3 hidden @md:block">
          <p className="text-xs text-gray-500">Brand: {product?.brand_name}</p>
        </div>

        <div className="flex items-center space-x-3 @sm:mb-1.5">
          <p className="text-sm lg:text-2xl font-medium text-slate-950 leading-[1.78]">
            {BDT_ICON} {product?.new_price}
          </p>
        </div>

        <Link href={`/details/${product?.supplierproduct_id}`}>
          <Button
            variant="outline"
            className={cn("w-full text-main-900 text-xs xl:text-lg py-2.5")}
          >
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
}
