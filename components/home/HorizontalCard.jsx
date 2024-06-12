import Image from "next/image";
import contentUrl from "../../lib/contentUrl";
import Link from "next/link";

export default function HorizontalCard({ product }) {
  return (
    <div className="rounded-2xl group border border-[#d9dadb] hover:border-primary-800 transition duration-300 px-4 py-4 2xl:py-6 2xl:px-8 mb-8 sm:mb-4 md:mb-0">
      <div className="sm:flex items-center md:items-start">
        <div className="w-32 h-32 xl:w-36 xl:h-36 mx-auto flex-shrink-0">
          <Image
            src={product?.product_images?.length > 0 ? contentUrl(product?.product_images[0].image_url) : "http://gcdnb.pbrd.co/images/tilPZiWNfqP9.png"}
            alt={product?.product_name}
            className="w-full h-full"
            width={100}
            height={100}
          />
        </div>

        <div className="sm:pl-3 md:pl-2 xl:pl-3 text-center sm:text-left">
          <p className="font-medium line-clamp-2 text-lg 2xl:text-2xl text-slate-950 leading-7 mb-2 2xl:mb-4">
            {product?.product_name}
          </p>

          <p className="font-normal text-[#4d5156] text-sm 2xl:text-lg leading-6 md:leading-7 line-clamp-3 mb-2 2xl:mb-4 sm:pr-44 md:pr-6">
            {product?.product_description}
          </p>
          <Link href={`/details/${product?.supplierproduct_id}`}>
            <div
              className="text-[#0d6efd] flex justify-center sm:justify-start items-center hover:cursor-pointer space-x-2 text-base 2xl:text-xl leading-7"
            >
              <span className='line-clamp-1'>{product?.product_type}</span>
              <svg
                className="w-8 h-6 text-primary-800 opacity-0 group-hover:opacity-100 transition duration-500 group-hover:translate-x-4 group-hover:text-primary-900"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 27.561 14.123"
              >
                <g data-name="right-arrow">
                  <g data-name="Group 12208">
                    <path
                      fill="currentColor"
                      stroke=""
                      strokeWidth=".5"
                      d="M27.081 6.603 20.943.465a.614.614 0 1 0-.865.865l5.089 5.095H.864a.614.614 0 0 0 0 1.228h24.3l-5.089 5.089a.614.614 0 1 0 .865.865l6.138-6.138a.614.614 0 0 0 .003-.866Z"
                      data-name="Path 3314"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
