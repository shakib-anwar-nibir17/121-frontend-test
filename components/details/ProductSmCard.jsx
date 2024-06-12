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
          className="object-cover w-32  h-28 lg:h-48 lg:w-48 mx-auto"
        />

        {/* <Badge className="absolute top-2 left-2 lg:top-6 lg:left-6">-110</Badge> */}

        <div className="absolute ease-in-out transition duration-700 right-4 top-4 space-y-3 opacity-100">
          <button className="flex-shrink-0 group w-10 h-10 rounded-full border border-slate-200 text-main-400 hover:border-rose-500 flex justify-center items-center">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-[#808386] group-hover:text-rose-500"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg> */}
            <IoMdHeartEmpty className="text-xl group-hover:fill-rose-500" />
          </button>

          <button className="flex-shrink-0 group w-10 h-10 rounded-full border border-slate-200 hover:border-yellow-500 flex justify-center items-center">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 40 40"
            >
              <path
                fill="#808386"
                d="M15.706 14.08a.63.63 0 0 0-.637.013l-3.772 2.305a.631.631 0 0 0 .005 1.073l3.771 2.305c.101.063.214.092.327.092a.607.607 0 0 0 .306-.08.638.638 0 0 0 .323-.549v-1.676h9.22a2.517 2.517 0 0 1 2.514 2.515.628.628 0 1 0 1.257 0 3.777 3.777 0 0 0-3.771-3.772h-9.22V14.63a.63.63 0 0 0-.323-.55Zm-.934 4.04-1.936-1.186 1.936-1.186v2.373ZM28.719 23.522l-3.772-2.305a.64.64 0 0 0-.637-.012.638.638 0 0 0-.323.549v1.676h-9.22a2.516 2.516 0 0 1-2.514-2.514.628.628 0 1 0-1.253 0 3.777 3.777 0 0 0 3.772 3.771h9.22v1.676a.63.63 0 0 0 .955.537l3.772-2.305a.626.626 0 0 0 0-1.073Zm-3.47 1.723v-2.368l1.936 1.186-1.936 1.182Z"
              />
            </svg> */}
            <CompareSvgComponent />
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col lg:space-y-2 justify-between p-2 lg:p-4">
        <div className="pb-2">
          <h3 className="text-xs sm:text-sm xl:text-lg hover:underline font-medium text-gray-900 line-clamp-2 pb-1">
            <Link href={`/details/${product?.supplierproduct_id}`}>{product?.product_name}</Link>
          </h3>
          <p className="text-xs lg:text-lg text-main-900">Auto Parts</p>
        </div>

        <div className="xl:pb-3 hidden @md:block">
          <p className="text-xs @md:text-sm lg:text-lg text-main-600 font-medium">
            Brand: {product.brand_name}
          </p>
        </div>

        <div className="">
          <div className="flex items-center space-x-3 @sm:mb-1.5 lg:mt-[51px]">
            <div className="flex flex-col items-start">
              {/* <del className="text-sm lg:text-sm text-gray-400">
                {BDT_ICON} {product.previous_price}
              </del> */}
              <p className="text-sm lg:text-2xl text-black font-medium">
                {BDT_ICON} {product.new_price}
              </p>
            </div>
            {/* <p className="text-sm lg:text-3xl font-medium text-slate-950 leading-[1.78]">
              {product.product_price}
            </p> */}
          </div>
          {/* <div className="@md:flex items-center @md:space-x-7 @md:mb-2">
            <p
              className={`${
                product?.stock > 0 ? "text-gray-500" : "text-red-600"
              } font-normal text-xs lg:text-sm mb-1.5 @md:mb-0`}
            >
              {product?.stock > 0
                ? `${product?.stock} Pieces In Stock`
                : `${product?.stock}`}
            </p>
            <p className="text-slate-600 font-normal text-xs lg:text-sm hidden @md:block">
              1 day delivery
            </p>
          </div> */}
        </div>
        <Link href={`/details/${product?.supplierproduct_id}`}>
          <Button
            variant="outline"
            className="w-full py-2.5 text-xs @xl:text-base"
          >
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
}
