import { BDT_ICON } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import contentUrl from "../../lib/contentUrl";

export default function MostlyViewedOrPurchased({ products }) {
  return (
    <>
      {products.map((product) => (
        <Link href={`details/${product?.product_id}`} key={product?.product_id}>
          <li
            key={product.id}
            className="flex space-x-3 lg:space-x-6 py-1.5 xl:py-4"
          >
            <Image
              src={product?.product_images?.length > 0 ? contentUrl(product?.product_images[0].image_url) : "http://gcdnb.pbrd.co/images/tilPZiWNfqP9.png"}
              alt={product.product_name}
              width={100}
              height={100}
              priority={false}
              className="w-16 h-16 sm:h-24 sm:w-24 flex-none rounded-md bg-gray-100  object-cover object-center"
            />

            <div className="flex-auto xl:space-y-1">
              <h3 className="text-primary-950 font-normal line-clamp-2 text-sm sm:text-base hover:underline pr-4">
                {product.product_name}
              </h3>

              <p className="font-normal text-xs sm:text-sm 2xl:text-base leading-6 py-0.5 lg:pb-2 lg:pt-1.5 2xl:pb-3 2xl:pt-2">
                Brand: {product?.brand_name}
              </p>

              <p className="font-medium text-sm sm:text-base 2xl:text-2xl leading-6 text-primary-950">
                {BDT_ICON} {product?.new_price}
              </p>
            </div>
          </li>
        </Link>
      ))}
    </>
  );
}
